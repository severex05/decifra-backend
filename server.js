require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Anthropic = require('@anthropic-ai/sdk')
const { createClient } = require('@supabase/supabase-js')
const Stripe = require('stripe')
const { getQuestionsForSimulado, getQuestaoDodia } = require('./catalog/questions')

// ===== STARTUP VALIDATION =====
const REQUIRED = ['ANTHROPIC_API_KEY', 'SUPABASE_URL', 'SUPABASE_SERVICE_KEY', 'STRIPE_SECRET_KEY', 'STRIPE_WEBHOOK_SECRET', 'FRONTEND_URL']
const missing = REQUIRED.filter(k => !process.env[k])
if (missing.length) { console.error('Missing env vars:', missing.join(', ')); process.exit(1) }

// ===== CLIENTS =====
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const app = express()

// ===== MIDDLEWARE =====
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))

// Raw body for Stripe webhooks
app.use('/api/stripe/webhook', express.raw({ type: 'application/json' }))
app.use(express.json())

// ===== AUTH MIDDLEWARE =====
async function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ error: 'Token ausente' })
  try {
    const { data, error } = await supabase.auth.getUser(token)
    if (error || !data.user) return res.status(401).json({ error: 'Token inválido' })
    req.user = data.user
    req.token = token
    next()
  } catch {
    res.status(401).json({ error: 'Erro de autenticação' })
  }
}

// ===== HELPERS =====
async function getUserProfile(userId) {
  const { data } = await supabase.from('decifra_users').select('*').eq('id', userId).single()
  return data
}

async function isUserPro(userId) {
  const profile = await getUserProfile(userId)
  return profile?.plan === 'active' || profile?.plan === 'trialing'
}

async function upsertProfile(userId, email, updates) {
  await supabase.from('decifra_users').upsert({ id: userId, email, ...updates }, { onConflict: 'id' })
}

function updateStreak(profile) {
  const today = new Date().toDateString()
  const yesterday = new Date(Date.now() - 86400000).toDateString()
  const onboarding = profile?.onboarding || {}
  const lastDate = onboarding.last_study_date
  if (lastDate === today) return {}
  const currentStreak = profile?.streak || 0
  const newStreak = lastDate === yesterday ? currentStreak + 1 : 1
  return { streak: newStreak, onboarding: { ...onboarding, last_study_date: today } }
}

// ===== AUTH ROUTES =====
app.post('/api/auth/register', async (req, res) => {
  const { email, password, name } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email e senha obrigatórios' })

  try {
    const { data: created, error: createErr } = await supabase.auth.admin.createUser({ email, password, email_confirm: true })
    if (createErr) return res.status(400).json({ error: createErr.message })

    const userId = created.user.id
    await upsertProfile(userId, email, { name: name || '', plan: 'free', xp: 0, streak: 0, total_questions: 0, correct: 0 })

    const { data: session, error: loginErr } = await supabase.auth.signInWithPassword({ email, password })
    if (loginErr) return res.status(400).json({ error: loginErr.message })

    res.json({ user: { id: userId, email, name: name || '' }, token: session.session.access_token, plan: 'free' })
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar conta' })
  }
})

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email e senha obrigatórios' })

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return res.status(400).json({ error: 'Email ou senha incorretos' })

    const profile = await getUserProfile(data.user.id)
    res.json({
      user: { id: data.user.id, email: data.user.email, name: profile?.name || '' },
      token: data.session.access_token,
      plan: profile?.plan || 'free'
    })
  } catch {
    res.status(500).json({ error: 'Erro ao fazer login' })
  }
})

// ===== USER ROUTES =====
app.get('/api/user/me', authMiddleware, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id)
    res.json({
      plan: profile?.plan || 'free',
      trialEnd: profile?.trial_end,
      xp: profile?.xp || 0,
      diagnosticoDone: !!(profile?.onboarding?.diagnostico),
      progresso: {
        totalQuestions: profile?.total_questions || 0,
        correct: profile?.correct || 0,
        streak: profile?.streak || 0,
        subjects: profile?.subjects || {},
        simuladosDone: profile?.simulados_done || 0
      }
    })
  } catch {
    res.json({ plan: 'free', xp: 0, diagnosticoDone: false, progresso: {} })
  }
})

app.post('/api/user/onboarding', authMiddleware, async (req, res) => {
  const { prova, prazo, fraqueza } = req.body
  try {
    const profile = await getUserProfile(req.user.id)
    const existing = profile?.onboarding || {}
    await supabase.from('decifra_users').update({ onboarding: { ...existing, prova, prazo, fraqueza }, onboarding_done: true })
      .eq('id', req.user.id)
  } catch {}
  res.json({ ok: true })
})

app.post('/api/diagnostico/save', authMiddleware, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id)
    const onboarding = profile?.onboarding || {}
    await supabase.from('decifra_users').update({ onboarding: { ...onboarding, diagnostico: req.body } })
      .eq('id', req.user.id)
  } catch {}
  res.json({ ok: true })
})

app.post('/api/user/resposta', authMiddleware, async (req, res) => {
  const { questaoId, correct, subject } = req.body
  try {
    const profile = await getUserProfile(req.user.id)
    const subjects = profile?.subjects || {}
    if (!subjects[subject]) subjects[subject] = { total: 0, correct: 0 }
    subjects[subject].total++
    if (correct) subjects[subject].correct++

    const streakUpdate = updateStreak(profile)
    await supabase.from('decifra_users').update({
      total_questions: (profile?.total_questions || 0) + 1,
      correct: (profile?.correct || 0) + (correct ? 1 : 0),
      xp: (profile?.xp || 0) + (correct ? 10 : 2),
      subjects,
      ...streakUpdate
    }).eq('id', req.user.id)

    const newStreak = streakUpdate.streak ?? profile?.streak ?? 0
    res.json({ ok: true, streak: newStreak })
  } catch {
    res.json({ ok: true })
  }
})

// ===== QUESTÃO DO DIA =====
app.get('/api/questao-do-dia', async (req, res) => {
  const questao = getQuestaoDodia()
  res.json({ questao })
})

// ===== TUTOR CHAT =====
const SUBJECT_PROMPTS = {
  matematica: `Você é um professor expert em Matemática para ENEM 2026, Vestibulares (FUVEST, UNICAMP, ENADE) e Concursos Públicos. Domine: álgebra, funções (1º, 2º grau, exponencial, logarítmica), geometria plana e espacial, trigonometria, progressões (PA e PG), probabilidade, estatística (média, mediana, moda, desvio padrão), matrizes, determinantes, sistemas lineares, matemática financeira (juros simples e compostos), combinatória e raciocínio lógico para concursos. Explique de forma clara com exemplos práticos, fórmulas e resolução passo a passo. Para concursos, foque em sequências lógicas, proporção, porcentagem e lógica proposicional.`,

  portugues: `Você é um professor expert em Língua Portuguesa e Literatura para ENEM 2026, Vestibulares e Concursos Públicos. Domine: gramática normativa (concordância verbal e nominal, regência, crase, pontuação, ortografia), interpretação de texto, figuras de linguagem, variação linguística, gêneros textuais e discursivos, redação dissertativa-argumentativa (estrutura, proposta de intervenção com os 5 elementos da Competência V do ENEM), literatura brasileira (Quinhentismo, Barroco, Arcadismo, Romantismo, Realismo/Naturalismo, Parnasianismo, Simbolismo, Modernismo e Contemporaneidade) e literatura portuguesa. Para concursos, enfatize ortografia, lógica proposicional aplicada ao texto e redação oficial (Decreto 9.758/2019).`,

  biologia: `Você é um professor expert em Biologia para ENEM 2026, Vestibulares e concursos com ciências. Domine: citologia (estrutura celular, organelas, divisão celular — mitose e meiose), genética mendeliana e molecular (DNA, RNA, síntese proteica, mutações, biotecnologia, PCR, CRISPR), evolução (Darwin, neodarwinismo, especiação), ecologia (cadeias e teias alimentares, ciclos biogeoquímicos, biomas brasileiros — Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa, Pantanal), fisiologia humana (digestão, circulação, respiração, excreção, sistema nervoso, endócrino, imunológico), botanica (fotossíntese, respiração celular), zoologia e microbiologia (vírus, bactérias — fundamental pós-COVID). Use exemplos do cotidiano e de questões recentes do ENEM.`,

  quimica: `Você é um professor expert em Química para ENEM 2026, Vestibulares e concursos com ciências. Domine: estrutura atômica (modelos atômicos, tabela periódica, propriedades periódicas), ligações químicas (iônica, covalente, metálica, forças intermoleculares), funções inorgânicas (ácidos, bases, sais, óxidos), reações químicas (balanceamento, tipos de reação), estequiometria (cálculos com mol, massa molar, pureza, rendimento), soluções (concentração, diluição, pH), termoquímica (entalpia, Hess, exotérmica/endotérmica), cinética química, equilíbrio químico (Le Chatelier), eletroquímica (pilhas, eletrólise), química orgânica (funções orgânicas, alcanos, alcenos, alcinos, aromáticos, álcoois, aldeídos, cetonas, ácidos carboxílicos, ésteres, aminas) e polímeros. Contextualize com química ambiental e do cotidiano.`,

  fisica: `Você é um professor expert em Física para ENEM 2026, Vestibulares e concursos com ciências. Domine: mecânica (cinemática escalar e vetorial, MRU, MRUV, queda livre, lançamento de projéteis, leis de Newton, trabalho, energia cinética e potencial, potência, quantidade de movimento, colisões, torque, gravitação — leis de Kepler, lei de Newton), hidrostática (pressão, empuxo, Arquimedes), ondulatória (ondas, som, efeito Doppler, luz, óptica geométrica — reflexão, refração, espelhos e lentes), termodinâmica (temperatura, calor, dilatação, leis da termodinâmica, máquinas térmicas), eletricidade (campo e potencial elétrico, corrente, resistência, Lei de Ohm, circuitos, potência elétrica) e eletromagnetismo (campo magnético, indução eletromagnética, geradores). Use fórmulas com unidades corretas e exemplos concretos.`,

  historia: `Você é um professor expert em História para ENEM 2026, Vestibulares e Concursos Públicos. Domine história do Brasil: pré-colonial, colonização portuguesa, escravidão africana e indígena, ciclos econômicos, Independência (1822), Segundo Reinado, Abolição (1888), Proclamação da República (1889), República Velha e política do "café com leite", Era Vargas (1930–1945) e Estado Novo, Ditadura Militar (1964–1985) e AI-5, Redemocratização e Constituição de 1988. História mundial: Revolução Francesa, Revolução Industrial, imperialismo e colonialismo, 1ª e 2ª Guerras Mundiais, Revolução Russa e socialismo, Guerra Fria (EUA × URSS), descolonização da África e Ásia, globalização, atentado de 11/9 e geopolítica contemporânea. Contextualize com fontes históricas e análise crítica.`,

  geografia: `Você é um professor expert em Geografia para ENEM 2026, Vestibulares e Concursos Públicos. Domine: cartografia (escala, projeções, coordenadas geográficas), geomorfologia (relevo brasileiro e mundial, intemperismo, agentes externos), climatologia (fatores e elementos do clima, climas do Brasil e do mundo, El Niño e La Niña, mudanças climáticas — COP e Acordo de Paris), hidrografia (bacias hidrográficas brasileiras, recursos hídricos), biogeografia (biomas brasileiros e mundiais), solo (tipos, erosão, desertificação), geopolítica (organizações internacionais — ONU, OMC, OTAN; blocos econômicos — União Europeia, Mercosul, BRICS), urbanização brasileira e mundial, população (transição demográfica, migrações), recursos naturais e energia (petróleo, gás, hidrelétrica, solar, eólica, nuclear), economia brasileira e globalização.`,

  filosofia: `Você é um professor expert em Filosofia e Sociologia para ENEM 2026, Vestibulares e Concursos. Em Filosofia, domine: Filosofia Antiga (Sócrates — método socrático, ironia e maiêutica; Platão — Teoria das Ideias, Alegoria da Caverna, mito do carro alado; Aristóteles — lógica, ética, política, eudaimonia), Filosofia Medieval (Agostinho, Tomás de Aquino), Filosofia Moderna (Descartes — cogito e racionalismo; Locke, Hume — empirismo; Rousseau — contrato social; Kant — imperativo categórico, iluminismo; Hegel — dialética), Filosofia Contemporânea (Nietzsche, Marx — materialismo histórico e mais-valia; existencialismo — Sartre; Foucault). Em Sociologia, domine: Durkheim (fatos sociais, solidariedade, suicídio), Weber (tipos de dominação, ética protestante), Marx (luta de classes, alienação), movimentos sociais, desigualdade social, raça e gênero no Brasil, democracia e cidadania.`,

  ingles: `You are an expert English teacher for ENEM 2026, Vestibulares and Concursos Públicos with English requirements. Master: reading comprehension strategies (finding main idea, inference, vocabulary in context, identifying text genre and purpose), grammar (verb tenses — present simple/continuous/perfect, past simple/continuous/perfect, future forms, conditionals 0/1/2/3; modal verbs — can/could, must/have to, should/ought to, may/might, would; passive voice, reported speech, relative clauses, gerund vs. infinitive), vocabulary (technology, environment, health, social issues, science, globalization — frequent ENEM themes), text genres (advertisements, news articles, scientific texts, literary excerpts, comics, infographics), false cognates, and phrasal verbs. Always answer in Portuguese (pt-BR) unless the student specifically asks for English. Use examples from ENEM and vestibular exam patterns.`,
}

// Rate limiter simples em memória
const tutorUsage = new Map()
setInterval(() => {
  const cutoff = Date.now() - 86400000 // 24h
  for (const [key, val] of tutorUsage) {
    if (val.resetAt < cutoff) tutorUsage.delete(key)
  }
}, 5 * 60 * 1000)

app.post('/api/tutor/chat', authMiddleware, async (req, res) => {
  const { messages, subject } = req.body
  if (!messages?.length) return res.status(400).json({ error: 'Mensagens obrigatórias' })

  const pro = await isUserPro(req.user.id)

  if (!pro) {
    const key = req.user.id
    const today = new Date().toDateString()
    const usage = tutorUsage.get(key) || { count: 0, date: today, resetAt: Date.now() }
    if (usage.date !== today) { usage.count = 0; usage.date = today }
    if (usage.count >= 5) return res.status(429).json({ error: 'Limite diário atingido. Faça upgrade para Pro.' })
    usage.count++
    tutorUsage.set(key, usage)
  }

  try {
    const systemPrompt = SUBJECT_PROMPTS[subject] || SUBJECT_PROMPTS.matematica
    const apiMessages = messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content }))
    const lastMessages = apiMessages.slice(-10)

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      system: systemPrompt + '\n\nResponda sempre em português brasileiro. Seja didático, claro e use exemplos práticos. Mantenha respostas concisas (máximo 300 palavras).',
      messages: lastMessages
    })

    res.json({ reply: response.content[0].text })
  } catch (err) {
    res.status(500).json({ error: 'Erro ao processar pergunta' })
  }
})

// ===== SIMULADOS =====
const TIME_LIMITS = { mini: 15 * 60, enem: 45 * 60, vestibular: 30 * 60, concurso: 30 * 60, diagnostico: 0 }
const QUESTION_COUNTS = { mini: 10, enem: 30, vestibular: 20, concurso: 20, diagnostico: 20 }

app.post('/api/simulado/start', authMiddleware, async (req, res) => {
  const { type } = req.body
  if (!type) return res.status(400).json({ error: 'Tipo obrigatório' })

  const pro = await isUserPro(req.user.id)
  if (type !== 'mini' && type !== 'diagnostico' && !pro) return res.status(403).json({ error: 'Simulado completo disponível apenas no plano Pro' })

  const count = QUESTION_COUNTS[type] || 10
  const questions = getQuestionsForSimulado(type, count)
  const timeLimit = TIME_LIMITS[type] || 900

  res.json({ questions, timeLimit, type })
})

app.post('/api/simulado/finish', authMiddleware, async (req, res) => {
  const { type, score } = req.body
  try {
    const profile = await getUserProfile(req.user.id)
    const xpGain = score?.correct ? score.correct * 15 : 0

    const subjects = profile?.subjects || {}
    if (score?.bySubject) {
      for (const [subj, data] of Object.entries(score.bySubject)) {
        if (!subjects[subj]) subjects[subj] = { total: 0, correct: 0 }
        subjects[subj].total += data.total || 0
        subjects[subj].correct += data.correct || 0
      }
    }

    const streakUpdate = updateStreak(profile)
    await supabase.from('decifra_users').update({
      xp: (profile?.xp || 0) + xpGain,
      simulados_done: (profile?.simulados_done || 0) + 1,
      total_questions: (profile?.total_questions || 0) + (score?.total || 0),
      correct: (profile?.correct || 0) + (score?.correct || 0),
      subjects,
      ...streakUpdate
    }).eq('id', req.user.id)
    res.json({ ok: true, xpGain })
  } catch {
    res.json({ ok: true, xpGain: 0 })
  }
})

// ===== PLANO DE ESTUDO =====
app.get('/api/plano-estudo', authMiddleware, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id)
    res.json({ plan: profile?.onboarding?.plano || null })
  } catch {
    res.json({ plan: null })
  }
})

app.post('/api/plano-estudo/generate', authMiddleware, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id)
    const onboarding = profile?.onboarding || {}
    const subjects = profile?.subjects || {}

    const SUBJECT_NAMES = {
      matematica: 'Matemática', portugues: 'Português', biologia: 'Biologia',
      quimica: 'Química', fisica: 'Física', historia: 'História',
      geografia: 'Geografia', filosofia: 'Filosofia', ingles: 'Inglês'
    }

    const subjectLines = Object.entries(subjects)
      .map(([s, d]) => `- ${SUBJECT_NAMES[s] || s}: ${d.total > 0 ? Math.round(d.correct / d.total * 100) : '?'}% (${d.total} questões)`)
      .join('\n') || '- Ainda sem dados de desempenho'

    const now = new Date()
    const endDate = new Date(now); endDate.setDate(endDate.getDate() + 6)
    const fmt = d => `${d.getDate()}/${d.getMonth() + 1}`

    const provaContext = {
      'ENEM 2026': 'ENEM 2026 (novembro/2026) — inclua redação, todas as áreas do conhecimento',
      'Vestibular (FUVEST/UNICAMP/outros)': 'Vestibular — foco em conteúdos aprofundados de todas as disciplinas',
      'Concurso Público Federal': 'Concurso Federal — priorize Português, Matemática/Raciocínio Lógico, Conhecimentos Gerais e Legislação',
      'Concurso Público Estadual': 'Concurso Estadual — priorize Português, Matemática/Raciocínio Lógico e Conhecimentos Gerais',
      'Concurso Público Municipal': 'Concurso Municipal — priorize Português, Matemática básica e Conhecimentos Gerais',
      'Militar (ESPCEX/AFA/outros)': 'Concurso Militar — foco em Matemática, Física, Português e Inglês',
    }
    const provaDesc = provaContext[onboarding.prova] || onboarding.prova || 'ENEM 2026'

    const prompt = `Crie um plano de estudos semanal personalizado. Responda APENAS com JSON válido, sem texto extra.

Perfil do aluno:
- Prova: ${provaDesc}
- Prazo: ${onboarding.prazo || 'não informado'}
- Maior dificuldade: ${onboarding.fraqueza || 'não informado'}
- Desempenho atual:
${subjectLines}

Formato JSON obrigatório:
{
  "semana": "${fmt(now)} a ${fmt(endDate)}",
  "meta": "frase motivacional curta, específica para a prova do aluno",
  "dias": [
    {"dia": "Segunda", "materias": [{"materia": "matematica","topico": "Tópico específico e relevante para a prova","minutos": 45}]},
    {"dia": "Terça", "materias": [...]},
    {"dia": "Quarta", "materias": [...]},
    {"dia": "Quinta", "materias": [...]},
    {"dia": "Sexta", "materias": [...]},
    {"dia": "Sábado", "materias": [...]},
    {"dia": "Domingo", "materias": [...]}
  ]
}

Regras: 2-3 matérias/dia, máx 2h/dia total, priorize matérias com menor desempenho, domingo mais leve (1 matéria, revisão).
Escolha tópicos específicos e relevantes para a prova (ex: "Funções do 2º grau" não apenas "Matemática").
IDs válidos: matematica, portugues, biologia, quimica, fisica, historia, geografia, filosofia, ingles`

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }]
    })

    const text = response.content[0].text.trim()
    const match = text.match(/\{[\s\S]*\}/)
    if (!match) throw new Error('Invalid JSON')

    const plan = JSON.parse(match[0])
    plan.gerado_em = new Date().toISOString()

    await supabase.from('decifra_users').update({ onboarding: { ...onboarding, plano: plan } })
      .eq('id', req.user.id)

    res.json({ plan })
  } catch (err) {
    console.error('Plano error:', err)
    res.status(500).json({ error: 'Erro ao gerar plano. Tente novamente.' })
  }
})

// ===== CORREÇÃO DE REDAÇÃO =====
const redacaoUsage = new Map()
setInterval(() => {
  const cutoff = Date.now() - 86400000
  for (const [key, val] of redacaoUsage) { if (val.resetAt < cutoff) redacaoUsage.delete(key) }
}, 5 * 60 * 1000)

app.post('/api/redacao/corrigir', authMiddleware, async (req, res) => {
  const { texto, tema } = req.body
  if (!texto || texto.trim().length < 100) return res.status(400).json({ error: 'Redação muito curta (mínimo 100 caracteres)' })
  if (texto.length > 5000) return res.status(400).json({ error: 'Redação muito longa (máximo 5000 caracteres)' })

  const pro = await isUserPro(req.user.id)
  if (!pro) {
    const key = req.user.id
    const today = new Date().toDateString()
    const usage = redacaoUsage.get(key) || { count: 0, date: today, resetAt: Date.now() }
    if (usage.date !== today) { usage.count = 0; usage.date = today; usage.resetAt = Date.now() }
    if (usage.count >= 1) return res.status(429).json({ error: 'Limite diário atingido. Faça upgrade para Pro para correções ilimitadas.' })
    usage.count++
    redacaoUsage.set(key, usage)
  }

  try {
    const temaInfo = tema ? `Tema: "${tema}"` : 'Tema não informado — avalie o que for possível identificar'
    const prompt = `Você é um corretor especialista do ENEM. Avalie a redação abaixo nas 5 competências oficiais e retorne APENAS JSON válido, sem texto extra.

${temaInfo}

REDAÇÃO:
${texto.trim()}

Retorne exatamente este JSON:
{
  "nota_total": <número 0-1000>,
  "competencias": [
    {"numero": 1, "nome": "Domínio da norma culta", "nota": <0-200>, "comentario": "feedback específico em 1-2 frases"},
    {"numero": 2, "nome": "Compreensão do tema", "nota": <0-200>, "comentario": "feedback específico em 1-2 frases"},
    {"numero": 3, "nome": "Seleção de argumentos", "nota": <0-200>, "comentario": "feedback específico em 1-2 frases"},
    {"numero": 4, "nome": "Coesão e coerência", "nota": <0-200>, "comentario": "feedback específico em 1-2 frases"},
    {"numero": 5, "nome": "Proposta de intervenção", "nota": <0-200>, "comentario": "feedback específico em 1-2 frases"}
  ],
  "pontos_fortes": ["ponto forte 1", "ponto forte 2"],
  "melhorias": ["melhoria prioritária 1", "melhoria 2", "melhoria 3"],
  "resumo": "Feedback geral em 2-3 frases motivadoras e construtivas"
}`

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }]
    })

    const text = response.content[0].text.trim()
    const match = text.match(/\{[\s\S]*\}/)
    if (!match) throw new Error('Invalid JSON')
    const correcao = JSON.parse(match[0])
    res.json({ correcao })
  } catch (err) {
    console.error('Redacao error:', err)
    res.status(500).json({ error: 'Erro ao corrigir redação. Tente novamente.' })
  }
})

// ===== QUESTÃO GERADA POR IA =====
const SUBJECT_NAMES_PT = { matematica: 'Matemática', portugues: 'Língua Portuguesa', biologia: 'Biologia', quimica: 'Química', fisica: 'Física', historia: 'História', geografia: 'Geografia', filosofia: 'Filosofia e Sociologia', ingles: 'English' }
const VALID_SUBJECTS = Object.keys(SUBJECT_NAMES_PT)

app.post('/api/questao/generate', authMiddleware, async (req, res) => {
  const { subject, difficulty = 'medio', topic } = req.body
  if (!subject || !VALID_SUBJECTS.includes(subject)) return res.status(400).json({ error: 'Matéria inválida' })

  try {
    const subjectName = SUBJECT_NAMES_PT[subject]
    const topicInfo = topic ? `Tópico: ${topic}` : 'Escolha um tópico relevante para o ENEM 2026'
    const diffMap = { facil: 'fácil (ensino médio básico)', medio: 'médio (padrão ENEM)', dificil: 'difícil (vestibular concorrido)' }
    const isEnglish = subject === 'ingles'

    const prompt = `Crie uma questão de múltipla escolha de ${subjectName}, nível ${diffMap[difficulty] || 'médio'}, para o ENEM 2026.
${topicInfo}

Retorne APENAS JSON válido:
{
  "question": "${isEnglish ? 'Question text in English' : 'Enunciado completo da questão em português'}",
  "options": ["A...", "B...", "C...", "D...", "E..."],
  "answerIndex": <0-4>,
  "explanation": "${isEnglish ? 'Explicação em português (2-3 frases didáticas)' : 'Explicação da resposta correta em português (2-3 frases)'}",
  "tags": ["tag1", "tag2"]
}

Regras: questão original, 5 alternativas, apenas 1 correta, linguagem clara e didática.`

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 800,
      messages: [{ role: 'user', content: prompt }]
    })

    const text = response.content[0].text.trim()
    const match = text.match(/\{[\s\S]*\}/)
    if (!match) throw new Error('Invalid JSON')
    const questao = JSON.parse(match[0])
    questao.id = `ai_${subject}_${Date.now()}`
    questao.subject = subject
    questao.year = 2026
    questao.source = 'IA'
    questao.difficulty = difficulty
    res.json({ questao })
  } catch (err) {
    console.error('Generate question error:', err)
    res.status(500).json({ error: 'Erro ao gerar questão. Tente novamente.' })
  }
})

// ===== STRIPE =====
const PRICE_IDS = {
  monthly: process.env.STRIPE_PRICE_MONTHLY,
  annual: process.env.STRIPE_PRICE_ANNUAL,
}

app.post('/api/stripe/checkout', authMiddleware, async (req, res) => {
  const { plan } = req.body
  const priceId = PRICE_IDS[plan]
  if (!priceId) return res.status(400).json({ error: 'Plano inválido' })

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: req.user.email,
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: { trial_period_days: 7 },
      success_url: `${process.env.FRONTEND_URL}/app?success=1`,
      cancel_url: `${process.env.FRONTEND_URL}/app`,
      metadata: { userId: req.user.id }
    })
    res.json({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar checkout' })
  }
})

app.post('/api/stripe/webhook', async (req, res) => {
  let event
  try {
    event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET)
  } catch {
    return res.status(400).send('Webhook error')
  }

  const session = event.data.object
  const email = session.customer_email || session.customer_details?.email

  if (['checkout.session.completed', 'customer.subscription.updated', 'customer.subscription.created'].includes(event.type)) {
    const sub = event.type === 'checkout.session.completed'
      ? await stripe.subscriptions.retrieve(session.subscription)
      : session

    const plan = sub.status === 'trialing' ? 'trialing' : sub.status === 'active' ? 'active' : 'free'
    const trialEnd = sub.trial_end ? new Date(sub.trial_end * 1000).toISOString() : null

    if (email) {
      await supabase.from('decifra_users').update({ plan, trial_end: trialEnd, stripe_customer_id: sub.customer })
        .eq('email', email)
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    if (email) {
      await supabase.from('decifra_users').update({ plan: 'free' }).eq('email', email)
    }
  }

  res.json({ received: true })
})

app.get('/api/stripe/status', authMiddleware, async (req, res) => {
  res.set('Cache-Control', 'no-store')
  const profile = await getUserProfile(req.user.id)
  if (!profile?.stripe_customer_id) return res.json({ plan: profile?.plan || 'free' })

  try {
    const subs = await stripe.subscriptions.list({ customer: profile.stripe_customer_id, limit: 1 })
    const sub = subs.data[0]
    if (!sub) return res.json({ plan: 'free' })
    const plan = sub.status === 'trialing' ? 'trialing' : sub.status === 'active' ? 'active' : 'free'
    await supabase.from('decifra_users').update({ plan }).eq('id', req.user.id)
    res.json({ plan })
  } catch {
    res.json({ plan: profile?.plan || 'free' })
  }
})

// ===== KEEP ALIVE =====
setInterval(() => {
  if (process.env.RAILWAY_PUBLIC_DOMAIN) {
    fetch(`https://${process.env.RAILWAY_PUBLIC_DOMAIN}/health`).catch(() => {})
  }
}, 4 * 60 * 1000)

app.get('/health', (req, res) => res.json({ ok: true }))

// ===== START =====
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Decifra backend rodando na porta ${PORT}`))
