require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cron = require('node-cron')
const Anthropic = require('@anthropic-ai/sdk')
const { createClient } = require('@supabase/supabase-js')
const Stripe = require('stripe')
const { getQuestionsForSimulado, getQuestaoDodia } = require('./catalog/questions')

// ===== SENTRY (optional — set SENTRY_DSN to enable) =====
let Sentry = null
if (process.env.SENTRY_DSN) {
  try {
    Sentry = require('@sentry/node')
    Sentry.init({ dsn: process.env.SENTRY_DSN, tracesSampleRate: 0.1 })
  } catch { Sentry = null }
}

// ===== STARTUP VALIDATION =====
const REQUIRED = ['ANTHROPIC_API_KEY', 'SUPABASE_URL', 'SUPABASE_SERVICE_KEY', 'STRIPE_SECRET_KEY', 'STRIPE_WEBHOOK_SECRET', 'FRONTEND_URL']
const missing = REQUIRED.filter(k => !process.env[k])
if (missing.length) { console.error('Missing env vars:', missing.join(', ')); process.exit(1) }

// ===== CLIENTS =====
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const app = express()

// ===== RATE LIMITERS (in-memory) =====
const forgotRateLimit = new Map()   // email → timestamp
const checkoutRateLimit = new Map() // userId → timestamp

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

// ===== EMAIL (RESEND) =====
async function sendEmail({ to, subject, html }) {
  if (!process.env.RESEND_API_KEY) return
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: process.env.EMAIL_FROM || 'Decifra <noreply@decifra.pro>', to: [to], subject, html })
    })
  } catch (err) {
    console.error('Email error:', err.message)
  }
}

const XP_LEVEL_NAME = xp => {
  if (xp >= 1500) return 'Mestre 🏆'
  if (xp >= 700) return 'Expert ⭐'
  if (xp >= 300) return 'Veterano 🎓'
  if (xp >= 100) return 'Estudante 📘'
  return 'Iniciante 🌱'
}

const EMAIL_TEMPLATES = {
  welcome: (name) => ({
    subject: `${name ? name + ', bem' : 'Bem'}-vindo ao Decifra! 🎉`,
    html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f1e;color:#f9fafb;padding:32px;border-radius:16px">
      <h1 style="color:#3b82f6;font-size:28px;margin-bottom:8px">Decifra<span style="color:#3b82f6">.</span></h1>
      <h2 style="font-size:22px;margin-bottom:16px">Olá${name ? ', ' + name.split(' ')[0] : ''}! Sua jornada começa agora.</h2>
      <p style="color:#9ca3af;line-height:1.6;margin-bottom:24px">Você tem acesso gratuito a simulados, tutor personalizado por matéria e diagnóstico de desempenho. Tudo isso para te ajudar a passar no ENEM, vestibular ou concurso.</p>
      <p style="color:#9ca3af;line-height:1.6;margin-bottom:8px"><strong style="color:#f9fafb">Por onde começar?</strong></p>
      <ul style="color:#9ca3af;line-height:2;margin-bottom:24px">
        <li>📊 Faça o <strong style="color:#f9fafb">Diagnóstico</strong> para descobrir seus pontos fortes e fracos</li>
        <li>⚡ Resolva um <strong style="color:#f9fafb">Mini-simulado</strong> para começar a ganhar XP</li>
        <li>💬 Pergunte ao <strong style="color:#f9fafb">Tutor</strong> sobre qualquer dúvida de matéria</li>
      </ul>
      <a href="${process.env.FRONTEND_URL}/app" style="background:#3b82f6;color:#fff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;display:inline-block;margin-bottom:24px">Começar a estudar →</a>
      <p style="color:#6b7280;font-size:13px">Qualquer dúvida, responda este email. Bons estudos! 📚</p>
    </div>`
  }),
  d2: (name) => ({
    subject: 'Como foi seu primeiro dia de estudos? 📚',
    html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f1e;color:#f9fafb;padding:32px;border-radius:16px">
      <h1 style="color:#3b82f6;font-size:28px;margin-bottom:8px">Decifra<span style="color:#3b82f6">.</span></h1>
      <h2 style="font-size:22px;margin-bottom:16px">Ei${name ? ', ' + name.split(' ')[0] : ''}! Não esqueça do seu streak 🔥</h2>
      <p style="color:#9ca3af;line-height:1.6;margin-bottom:24px">Você criou sua conta ontem. Estudar pelo menos 5 questões por dia é o segredo para manter o streak e criar o hábito de estudo.</p>
      <p style="color:#f59e0b;font-size:18px;font-weight:700;margin-bottom:24px">⚡ Missão de hoje: resolver 5 questões em qualquer matéria</p>
      <a href="${process.env.FRONTEND_URL}/app" style="background:#3b82f6;color:#fff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;display:inline-block;margin-bottom:24px">Estudar agora →</a>
      <p style="color:#6b7280;font-size:13px">Dica: o Mini-simulado tem 10 questões e leva só 15 minutos.</p>
    </div>`
  }),
  d3trial: (name, stats) => ({
    subject: `${name ? name.split(' ')[0] + ', seu' : 'Seu'} trial Pro acaba em 4 dias ⏳`,
    html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f1e;color:#f9fafb;padding:32px;border-radius:16px">
      <h1 style="color:#3b82f6;font-size:28px;margin-bottom:8px">Decifra<span style="color:#3b82f6">.</span></h1>
      <h2 style="font-size:22px;margin-bottom:16px">Ei${name ? ', ' + name.split(' ')[0] : ''}! Veja seu progresso até agora 📊</h2>
      <div style="background:#111827;border:1px solid #1e2d4a;border-radius:12px;padding:20px;margin-bottom:24px">
        <div style="display:flex;justify-content:space-between;margin-bottom:12px">
          <div style="text-align:center">
            <div style="font-size:28px;font-weight:900;color:#3b82f6">${stats.totalQuestions || 0}</div>
            <div style="font-size:12px;color:#9ca3af">questões respondidas</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:28px;font-weight:900;color:#10b981">${stats.accuracy || 0}%</div>
            <div style="font-size:12px;color:#9ca3af">de acertos</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:28px;font-weight:900;color:#f59e0b">${stats.xp || 0}</div>
            <div style="font-size:12px;color:#9ca3af">XP acumulados</div>
          </div>
        </div>
        <div style="text-align:center;padding-top:12px;border-top:1px solid #1e2d4a">
          <span style="color:#a78bfa;font-weight:700">Seu nível: ${XP_LEVEL_NAME(stats.xp || 0)}</span>
        </div>
      </div>
      <p style="color:#9ca3af;line-height:1.6;margin-bottom:16px">Seu trial Pro acaba em <strong style="color:#f59e0b">4 dias</strong>. Antes de acabar, experimente:</p>
      <ul style="color:#9ca3af;line-height:2;margin-bottom:24px">
        <li>📋 <strong style="color:#f9fafb">Plano de estudo</strong> — cronograma semanal para sua prova</li>
        <li>✍️ <strong style="color:#f9fafb">Correção de redação</strong> — nota 0-1000 nas 5 competências ENEM</li>
        <li>🤖 <strong style="color:#f9fafb">Simulado IA</strong> — banco infinito de questões únicas</li>
      </ul>
      <a href="${process.env.FRONTEND_URL}/app" style="background:#3b82f6;color:#fff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;display:inline-block;margin-bottom:16px">Continuar estudando →</a>
      <p style="color:#6b7280;font-size:13px">Depois do trial, o Pro custa R$29/mês. Cancele quando quiser.</p>
    </div>`
  }),
  d5: (name) => ({
    subject: 'Aproveite seus 7 dias Pro — plano de estudo e simulados ilimitados 📋',
    html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f1e;color:#f9fafb;padding:32px;border-radius:16px">
      <h1 style="color:#3b82f6;font-size:28px;margin-bottom:8px">Decifra<span style="color:#3b82f6">.</span></h1>
      <h2 style="font-size:22px;margin-bottom:16px">Aproveite os 7 dias grátis 🎁</h2>
      <p style="color:#9ca3af;line-height:1.6;margin-bottom:24px">Você tem acesso Pro por 7 dias grátis. Isso inclui simulados ilimitados, correção de redação, plano de estudo personalizado e flashcards ilimitados.</p>
      <p style="color:#9ca3af;line-height:1.6;margin-bottom:8px"><strong style="color:#f9fafb">O que testar antes do trial acabar:</strong></p>
      <ul style="color:#9ca3af;line-height:2;margin-bottom:24px">
        <li>📋 <strong style="color:#f9fafb">Plano de estudo</strong> — cronograma semanal personalizado para sua prova</li>
        <li>✍️ <strong style="color:#f9fafb">Correção de redação</strong> — nota 0-1000 nas 5 competências ENEM</li>
        <li>📝 <strong style="color:#f9fafb">Banco infinito de questões</strong> — simulados gerados sob demanda</li>
      </ul>
      <a href="${process.env.FRONTEND_URL}/app" style="background:#3b82f6;color:#fff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;display:inline-block;margin-bottom:24px">Explorar agora →</a>
      <p style="color:#6b7280;font-size:13px">Depois do trial, o Pro custa R$29/mês. Cancele quando quiser, sem burocracia.</p>
    </div>`
  }),
  d7: (name) => ({
    subject: 'Seu trial termina amanhã — continue Pro por R$29/mês ⭐',
    html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f1e;color:#f9fafb;padding:32px;border-radius:16px">
      <h1 style="color:#3b82f6;font-size:28px;margin-bottom:8px">Decifra<span style="color:#3b82f6">.</span></h1>
      <h2 style="font-size:22px;margin-bottom:16px">Última chance para manter o Pro 🚀</h2>
      <p style="color:#9ca3af;line-height:1.6;margin-bottom:24px">Seu trial de 7 dias termina amanhã. Se não assinar, você voltará ao plano gratuito (5 perguntas/dia no tutor, 1 correção de redação/dia).</p>
      <p style="color:#10b981;font-size:18px;font-weight:700;margin-bottom:24px">✅ Continue Pro por apenas R$29/mês</p>
      <ul style="color:#9ca3af;line-height:2;margin-bottom:24px">
        <li>Simulados ilimitados + análise por matéria</li>
        <li>Tutor ilimitado em todas as 9 matérias</li>
        <li>Correção de redação ilimitada (ENEM)</li>
        <li>Plano de estudo semanal personalizado</li>
        <li>Flashcards ilimitados por tópico</li>
      </ul>
      <a href="${process.env.FRONTEND_URL}/app" style="background:#3b82f6;color:#fff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;display:inline-block;margin-bottom:24px">Assinar Pro agora →</a>
      <p style="color:#6b7280;font-size:13px">Cancele quando quiser. Sem compromisso.</p>
    </div>`
  }),
  dailyQuestion: (name, q) => ({
    subject: `📚 Questão do dia — ${new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'short' })}`,
    html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f1e;color:#f9fafb;padding:32px;border-radius:16px">
      <h1 style="color:#3b82f6;font-size:28px;margin-bottom:8px">Decifra<span style="color:#3b82f6">.</span></h1>
      <h2 style="font-size:20px;margin-bottom:4px">Questão do dia${name ? ', ' + name.split(' ')[0] : ''}! 📖</h2>
      <p style="color:#6b7280;font-size:13px;margin-bottom:20px">${q.subject_label} · ${q.source || 'ENEM'} ${q.year || ''}</p>
      <div style="background:#111827;border:1px solid #1e2d4a;border-radius:12px;padding:20px;margin-bottom:20px">
        <p style="color:#f9fafb;line-height:1.7;margin:0">${q.question}</p>
      </div>
      <div style="margin-bottom:20px">
        ${q.options.map((opt, i) => `<div style="background:#0d1525;border:1px solid #1e2d4a;border-radius:8px;padding:10px 14px;margin-bottom:8px;color:#d1d5db;font-size:0.9rem"><strong style="color:#6b7280;margin-right:8px">${String.fromCharCode(65+i)})</strong>${opt}</div>`).join('')}
      </div>
      <a href="${process.env.FRONTEND_URL}/app" style="background:#3b82f6;color:#fff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;display:inline-block;margin-bottom:12px">Ver resposta no app →</a>
      <p style="color:#6b7280;font-size:12px;margin-top:16px">Para cancelar o recebimento desta questão diária, <a href="${process.env.FRONTEND_URL}/app" style="color:#6b7280">entre no app</a> e desative nas configurações.</p>
    </div>`
  }),
  streakRisk: (name, streak) => ({
    subject: `🔥 Seu streak de ${streak} dia${streak > 1 ? 's' : ''} está em risco, ${name ? name.split(' ')[0] : 'aluno'}!`,
    html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f1e;color:#f9fafb;padding:32px;border-radius:16px">
      <h1 style="color:#3b82f6;font-size:28px;margin-bottom:8px">Decifra<span style="color:#3b82f6">.</span></h1>
      <h2 style="font-size:22px;margin-bottom:16px">Ei${name ? ', ' + name.split(' ')[0] : ''}! Seu streak vai zerar à meia-noite 😱</h2>
      <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:12px;padding:20px;text-align:center;margin-bottom:24px">
        <div style="font-size:48px;margin-bottom:8px">🔥</div>
        <div style="font-size:36px;font-weight:900;color:#f59e0b">${streak} dia${streak > 1 ? 's' : ''} seguidos</div>
        <div style="color:#9ca3af;font-size:14px;margin-top:4px">em risco de zerar hoje</div>
      </div>
      <p style="color:#9ca3af;line-height:1.6;margin-bottom:24px">Você ainda não estudou hoje. São só <strong style="color:#f9fafb">5 questões</strong> para manter o streak. Leva menos de 5 minutos!</p>
      <a href="${process.env.FRONTEND_URL}/app" style="background:#f59e0b;color:#0a0f1e;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:800;display:inline-block;margin-bottom:24px;font-size:16px">Salvar meu streak agora →</a>
      <p style="color:#6b7280;font-size:13px">Responda a questão do dia e já conta! 📚</p>
    </div>`
  })
}

// Daily cron: send D2, D3 (personalizado), D5, D7 nurturing emails at 10am BRT (13h UTC)
cron.schedule('0 13 * * *', async () => {
  if (!process.env.RESEND_API_KEY) return
  const now = new Date()

  for (const [days, key] of [[2, 'd2'], [3, 'd3trial'], [5, 'd5'], [7, 'd7']]) {
    const since = new Date(now)
    since.setDate(since.getDate() - days)
    const from = new Date(since); from.setHours(0, 0, 0, 0)
    const to = new Date(since); to.setHours(23, 59, 59, 999)
    try {
      const { data } = await supabase.from('decifra_users')
        .select('id, email, name, email_sequences, xp, total_questions, correct, plan')
        .gte('registered_at', from.toISOString())
        .lte('registered_at', to.toISOString())
      for (const user of (data || [])) {
        if (user.email_sequences?.[key]) continue
        // D3 só para usuários em trial
        if (key === 'd3trial' && user.plan !== 'trialing') continue
        let tmpl
        if (key === 'd3trial') {
          const accuracy = user.total_questions > 0 ? Math.round((user.correct / user.total_questions) * 100) : 0
          tmpl = EMAIL_TEMPLATES.d3trial(user.name, { totalQuestions: user.total_questions || 0, accuracy, xp: user.xp || 0 })
        } else {
          tmpl = EMAIL_TEMPLATES[key](user.name)
        }
        await sendEmail({ to: user.email, ...tmpl })
        const seqs = user.email_sequences || {}
        seqs[key] = true
        await supabase.from('decifra_users').update({ email_sequences: seqs }).eq('id', user.id)
      }
    } catch (err) {
      console.error(`Cron email ${key} error:`, err.message)
    }
  }
})

// Daily cron: questão do dia por email — 8h BRT (11h UTC)
const SUBJECT_LABELS_PT = { matematica: 'Matemática', portugues: 'Língua Portuguesa', biologia: 'Biologia', quimica: 'Química', fisica: 'Física', historia: 'História', geografia: 'Geografia', filosofia: 'Filosofia', ingles: 'Inglês' }
cron.schedule('0 11 * * *', async () => {
  if (!process.env.RESEND_API_KEY) return
  const dateKey = `dq_${new Date().toISOString().slice(0, 10)}`
  try {
    const { data: users } = await supabase.from('decifra_users').select('id, email, name, email_sequences').not('email', 'is', null)
    const q = getQuestaoDodia()
    if (!q) return
    const qForEmail = { ...q, subject_label: SUBJECT_LABELS_PT[q.subject] || q.subject }
    for (const user of (users || [])) {
      if (user.email_sequences?.[dateKey]) continue
      // only send to users who opted in (or haven't opted out)
      if (user.email_sequences?.daily_question_optout) continue
      const tmpl = EMAIL_TEMPLATES.dailyQuestion(user.name, qForEmail)
      await sendEmail({ to: user.email, ...tmpl })
      const seqs = user.email_sequences || {}
      seqs[dateKey] = true
      await supabase.from('decifra_users').update({ email_sequences: seqs }).eq('id', user.id)
    }
  } catch (err) { console.error('Cron daily question error:', err.message) }
})

// Daily cron: streak em risco — 20h BRT (23h UTC)
cron.schedule('0 23 * * *', async () => {
  if (!process.env.RESEND_API_KEY) return
  const today = new Date().toDateString()
  try {
    const { data } = await supabase.from('decifra_users')
      .select('id, email, name, streak, onboarding, email_sequences')
      .gte('streak', 1)
    for (const user of (data || [])) {
      const lastStudy = user.onboarding?.last_study_date
      if (lastStudy === today) continue // já estudou hoje
      const seqKey = `streak_risk_${new Date().toISOString().slice(0, 10)}`
      if (user.email_sequences?.[seqKey]) continue
      const tmpl = EMAIL_TEMPLATES.streakRisk(user.name, user.streak)
      await sendEmail({ to: user.email, ...tmpl })
      const seqs = user.email_sequences || {}
      seqs[seqKey] = true
      await supabase.from('decifra_users').update({ email_sequences: seqs }).eq('id', user.id)
    }
  } catch (err) {
    console.error('Cron streak risk error:', err.message)
  }
})

// ===== AUTH ROUTES =====
app.post('/api/auth/register', async (req, res) => {
  const { email, password, name } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email e senha obrigatórios' })

  try {
    const { data: created, error: createErr } = await supabase.auth.admin.createUser({ email, password, email_confirm: true })
    if (createErr) return res.status(400).json({ error: createErr.message })

    const userId = created.user.id
    const now = new Date().toISOString()
    await upsertProfile(userId, email, { name: name || '', plan: 'free', xp: 0, streak: 0, total_questions: 0, correct: 0, registered_at: now, email_sequences: {} })

    const { data: session, error: loginErr } = await supabase.auth.signInWithPassword({ email, password })
    if (loginErr) return res.status(400).json({ error: loginErr.message })

    // Send welcome email (non-blocking)
    const tmpl = EMAIL_TEMPLATES.welcome(name)
    sendEmail({ to: email, ...tmpl }).then(async () => {
      await supabase.from('decifra_users').update({ email_sequences: { welcome: true } }).eq('id', userId)
    }).catch(() => {})

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

app.post('/api/auth/forgot-password', async (req, res) => {
  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email obrigatório' })
  const now = Date.now()
  const lastForgot = forgotRateLimit.get(email) || 0
  if (now - lastForgot < 60_000) return res.status(429).json({ error: 'Aguarde 1 minuto antes de tentar novamente.' })
  forgotRateLimit.set(email, now)
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.FRONTEND_URL}/app?reset=1`
    })
    if (error) return res.status(400).json({ error: error.message })
    res.json({ ok: true })
  } catch {
    res.status(500).json({ error: 'Erro ao enviar email de recuperação' })
  }
})

app.post('/api/auth/reset-password', async (req, res) => {
  const { token, password } = req.body
  if (!token || !password) return res.status(400).json({ error: 'Token e senha obrigatórios' })
  if (password.length < 6) return res.status(400).json({ error: 'Senha deve ter pelo menos 6 caracteres' })
  try {
    const { data, error } = await supabase.auth.getUser(token)
    if (error || !data.user) return res.status(400).json({ error: 'Link inválido ou expirado. Solicite um novo.' })
    const { error: updateErr } = await supabase.auth.admin.updateUserById(data.user.id, { password })
    if (updateErr) return res.status(400).json({ error: updateErr.message })
    res.json({ ok: true })
  } catch {
    res.status(500).json({ error: 'Erro ao redefinir senha' })
  }
})

// ===== USER ROUTES =====
app.get('/api/user/me', authMiddleware, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id)
    res.json({
      plan: profile?.plan || 'free',
      trialEnd: profile?.trial_end,
      trialUsed: !!(profile?.trial_used),
      referralCode: profile?.referral_code || null,
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

async function getDailyLimits(profile) {
  const today = new Date().toDateString()
  const onboarding = profile?.onboarding || {}
  const dl = onboarding.daily_limits || {}
  return dl.date === today ? dl : { date: today, tutor: 0, redacao: 0 }
}

async function saveDailyLimits(userId, profile, limits) {
  const onboarding = profile?.onboarding || {}
  await supabase.from('decifra_users')
    .update({ onboarding: { ...onboarding, daily_limits: limits } })
    .eq('id', userId)
}

app.post('/api/tutor/chat', authMiddleware, async (req, res) => {
  const { messages, subject } = req.body
  if (!messages?.length) return res.status(400).json({ error: 'Mensagens obrigatórias' })

  const profile = await getUserProfile(req.user.id)
  const pro = profile?.plan === 'active' || profile?.plan === 'trialing'

  if (!pro) {
    const limits = await getDailyLimits(profile)
    if (limits.tutor >= 5) return res.status(429).json({ error: 'Limite diário atingido. Faça upgrade para Pro.' })
    limits.tutor++
    await saveDailyLimits(req.user.id, profile, limits)
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
const TIME_LIMITS = { mini: 15 * 60, enem: 45 * 60, vestibular: 30 * 60, fuvest: 30 * 60, unicamp: 30 * 60, concurso: 30 * 60, concurso_federal: 30 * 60, militar: 30 * 60, diagnostico: 0, enem_completo: 5.5 * 60 * 60 }
const QUESTION_COUNTS = { mini: 10, enem: 30, vestibular: 20, fuvest: 20, unicamp: 20, concurso: 20, concurso_federal: 20, militar: 20, diagnostico: 20, enem_completo: 45 }

app.post('/api/simulado/start', authMiddleware, async (req, res) => {
  const { type, year, subject } = req.body
  if (!type) return res.status(400).json({ error: 'Tipo obrigatório' })

  const pro = await isUserPro(req.user.id)
  const proOnly = ['enem', 'vestibular', 'fuvest', 'unicamp', 'concurso', 'concurso_federal', 'militar', 'ia', 'enem_completo']
  if (proOnly.includes(type) && !pro) return res.status(403).json({ error: 'Simulado completo disponível apenas no plano Pro' })

  const count = QUESTION_COUNTS[type] || 10
  const questions = getQuestionsForSimulado(type, count, year ? parseInt(year) : null, subject || null)
  const timeLimit = TIME_LIMITS[type] || 900

  res.json({ questions, timeLimit, type })
})

app.post('/api/simulado/finish', authMiddleware, async (req, res) => {
  const { type, score, wrongQuestions } = req.body
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

    const hist = profile?.simulado_history || []
    hist.unshift({ type, score, date: new Date().toISOString() })
    const simulado_history = hist.slice(0, 50)

    // Save wrong questions to erros_history
    const errosUpdate = {}
    if (wrongQuestions?.length) {
      const errosHist = profile?.erros_history || []
      errosHist.unshift(...wrongQuestions)
      errosUpdate.erros_history = errosHist.slice(0, 60)
    }

    const streakUpdate = updateStreak(profile)
    await supabase.from('decifra_users').update({
      xp: (profile?.xp || 0) + xpGain,
      simulados_done: (profile?.simulados_done || 0) + 1,
      total_questions: (profile?.total_questions || 0) + (score?.total || 0),
      correct: (profile?.correct || 0) + (score?.correct || 0),
      subjects,
      simulado_history,
      ...errosUpdate,
      ...streakUpdate
    }).eq('id', req.user.id)
    res.json({ ok: true, xpGain })
  } catch {
    res.json({ ok: true, xpGain: 0 })
  }
})

// ===== STATS: SEMANAL =====
app.get('/api/stats/semanal', authMiddleware, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id)
    const hist = profile?.simulado_history || []
    const now = new Date()

    // Build weekly buckets for last 8 weeks
    const weeks = []
    for (let w = 7; w >= 0; w--) {
      const weekStart = new Date(now)
      weekStart.setDate(weekStart.getDate() - w * 7 - weekStart.getDay())
      weekStart.setHours(0, 0, 0, 0)
      const weekEnd = new Date(weekStart)
      weekEnd.setDate(weekEnd.getDate() + 7)
      const label = weekStart.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
      const weekHist = hist.filter(h => {
        const d = new Date(h.date)
        return d >= weekStart && d < weekEnd
      })
      const total = weekHist.reduce((s, h) => s + (h.score?.total || 0), 0)
      const correct = weekHist.reduce((s, h) => s + (h.score?.correct || 0), 0)
      weeks.push({ label, simulados: weekHist.length, total, correct, pct: total > 0 ? Math.round((correct / total) * 100) : 0 })
    }

    res.json({
      weeks,
      totalSimulados: profile?.simulados_done || 0,
      totalQuestions: profile?.total_questions || 0,
      xp: profile?.xp || 0,
      streak: profile?.streak || 0
    })
  } catch {
    res.json({ weeks: [], totalSimulados: 0, totalQuestions: 0, xp: 0, streak: 0 })
  }
})

// ===== STATS: HISTÓRICO =====
app.get('/api/stats/historico', authMiddleware, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id)
    res.json({
      history: profile?.simulado_history || [],
      subjects: profile?.subjects || {}
    })
  } catch {
    res.json({ history: [], subjects: {} })
  }
})

// ===== RANKING =====
app.get('/api/ranking', authMiddleware, async (req, res) => {
  try {
    const { data } = await supabase
      .from('decifra_users')
      .select('id, name, xp, streak, simulados_done')
      .order('xp', { ascending: false })
      .limit(50)
    const ranking = (data || []).map((u, i) => ({
      position: i + 1,
      name: u.name ? u.name.split(' ')[0] : 'Estudante',
      xp: u.xp || 0,
      streak: u.streak || 0,
      simulados: u.simulados_done || 0,
      isMe: u.id === req.user.id
    }))
    res.json({ ranking })
  } catch {
    res.json({ ranking: [] })
  }
})

// ===== SIMULADO IA =====
app.post('/api/simulado/ia', authMiddleware, async (req, res) => {
  const pro = await isUserPro(req.user.id)
  if (!pro) return res.status(403).json({ error: 'Simulado IA disponível apenas no plano Pro' })

  const { mode = 'enem' } = req.body // mode: 'enem', 'vestibular', 'concurso', 'fuvest', 'unicamp'

  const ENEM_SUBJECTS = ['matematica', 'portugues', 'biologia', 'quimica', 'fisica', 'historia', 'geografia', 'filosofia', 'ingles', 'matematica']
  const VEST_SUBJECTS = ['matematica', 'portugues', 'biologia', 'quimica', 'fisica', 'historia', 'geografia', 'matematica', 'biologia', 'quimica']
  const CONCURSO_SUBJECTS = ['matematica', 'portugues', 'matematica', 'portugues', 'matematica', 'portugues', 'matematica', 'portugues', 'historia', 'matematica']

  const subjectMap = { vestibular: VEST_SUBJECTS, fuvest: VEST_SUBJECTS, unicamp: VEST_SUBJECTS, concurso: CONCURSO_SUBJECTS, concurso_federal: CONCURSO_SUBJECTS }
  const subjects = subjectMap[mode] || ENEM_SUBJECTS

  const diffMap = { facil: 'fácil (ensino médio básico)', medio: 'médio (padrão ENEM)', dificil: 'difícil (vestibular concorrido)' }
  const diffsByMode = {
    enem: ['facil', 'medio', 'medio', 'medio', 'dificil'],
    vestibular: ['medio', 'dificil', 'dificil', 'medio', 'dificil'],
    fuvest: ['dificil', 'dificil', 'medio', 'dificil', 'dificil'],
    unicamp: ['dificil', 'dificil', 'medio', 'dificil', 'dificil'],
    concurso: ['facil', 'medio', 'facil', 'medio', 'medio'],
    concurso_federal: ['facil', 'medio', 'facil', 'medio', 'medio'],
  }
  const diffs = diffsByMode[mode] || diffsByMode.enem

  const modeContextMap = {
    enem: 'para o ENEM 2026',
    vestibular: 'para vestibulares concorridos (FUVEST, UNICAMP, UNESP)',
    fuvest: 'para a FUVEST (vestibular da USP), com foco em raciocínio aprofundado',
    unicamp: 'para o vestibular da UNICAMP, com foco em interpretação e raciocínio',
    concurso: 'para concurso público (nível médio/superior), com linguagem objetiva',
    concurso_federal: 'para concurso público federal (CESPE/CEBRASPE), questões objetivas e de raciocínio',
  }
  const modeContext = modeContextMap[mode] || modeContextMap.enem

  const concursoTopics = {
    matematica: 'raciocínio lógico, sequências, porcentagem, regra de três ou matemática financeira',
    portugues: 'interpretação de texto, concordância, crase ou redação oficial',
    historia: 'história do Brasil República, legislação brasileira ou conhecimentos gerais de atualidades',
  }

  async function genQuestion(subject, idx) {
    const difficulty = diffs[idx % diffs.length]
    const subjectName = SUBJECT_NAMES_PT[subject]
    const isEnglish = subject === 'ingles'
    const topicHint = ['concurso', 'concurso_federal'].includes(mode) && concursoTopics[subject]
      ? `Tópico específico: ${concursoTopics[subject]}` : 'Escolha um tópico relevante e diferente do comum'
    const prompt = `Crie uma questão de múltipla escolha de ${subjectName}, nível ${diffMap[difficulty]}, ${modeContext}.
${topicHint}.

Retorne APENAS JSON válido:
{
  "question": "${isEnglish ? 'Question text in English' : 'Enunciado completo da questão em português'}",
  "options": ["A...", "B...", "C...", "D...", "E..."],
  "answerIndex": <0-4>,
  "explanation": "Explicação da resposta correta em português (2-3 frases)"
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
    const q = JSON.parse(match[0])
    const sourceMap = { vestibular: 'IA-Vestibular', fuvest: 'IA-FUVEST', unicamp: 'IA-UNICAMP', concurso: 'IA-Concurso', concurso_federal: 'IA-ConcursoFederal' }
    return {
      id: `ia_${subject}_${Date.now()}_${idx}`,
      subject,
      question: q.question,
      options: q.options,
      answerIndex: Number(q.answerIndex),
      explanation: q.explanation,
      year: 2026,
      source: sourceMap[mode] || 'IA',
      difficulty
    }
  }

  try {
    const questions = await Promise.all(subjects.map((s, i) => genQuestion(s, i)))
    const timeLimitByMode = { vestibular: 1800, fuvest: 1800, unicamp: 1800, concurso: 1800, concurso_federal: 1800 }
    res.json({ questions, timeLimit: timeLimitByMode[mode] || 900, type: mode === 'enem' ? 'ia' : mode })
  } catch (err) {
    console.error('Simulado IA error:', err)
    res.status(500).json({ error: 'Erro ao gerar simulado IA. Tente novamente.' })
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
    const pro = profile?.plan === 'active' || profile?.plan === 'trialing'
    if (!pro) return res.status(403).json({ error: 'Plano de estudo personalizado disponível apenas no plano Pro' })
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
app.post('/api/redacao/corrigir', authMiddleware, async (req, res) => {
  const { texto, tema } = req.body
  if (!texto || texto.trim().length < 100) return res.status(400).json({ error: 'Redação muito curta (mínimo 100 caracteres)' })
  if (texto.length > 5000) return res.status(400).json({ error: 'Redação muito longa (máximo 5000 caracteres)' })

  const profile = await getUserProfile(req.user.id)
  const pro = profile?.plan === 'active' || profile?.plan === 'trialing'
  if (!pro) {
    const limits = await getDailyLimits(profile)
    if (limits.redacao >= 1) return res.status(429).json({ error: 'Limite diário atingido. Faça upgrade para Pro para correções ilimitadas.' })
    limits.redacao++
    await saveDailyLimits(req.user.id, profile, limits)
  }

  try {
    const temaInfo = tema ? `Tema: "${tema}"` : 'Tema não informado — avalie o que for possível identificar'
    // Split texto into paragraphs for paragraph-level feedback
    const paragrafos = texto.trim().split(/\n\s*\n|\n{2,}/).map(p => p.trim()).filter(p => p.length > 20)
    const paragrafosLabels = ['Introdução', 'Desenvolvimento 1', 'Desenvolvimento 2', 'Conclusão']
    const paragrafosHtml = paragrafos.slice(0, 4).map((p, i) => `Parágrafo ${i+1} (${paragrafosLabels[i] || 'Adicional'}): "${p.slice(0, 300)}${p.length > 300 ? '...' : ''}"`).join('\n')

    const prompt = `Você é um corretor especialista do ENEM. Avalie a redação abaixo nas 5 competências oficiais e retorne APENAS JSON válido, sem texto extra.

${temaInfo}

REDAÇÃO COMPLETA:
${texto.trim()}

PARÁGRAFOS IDENTIFICADOS:
${paragrafosHtml}

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
  "paragrafos": [
    ${paragrafos.slice(0, 4).map((_, i) => `{"numero": ${i+1}, "label": "${paragrafosLabels[i] || 'Parágrafo'}", "feedback": "feedback específico sobre este parágrafo em 1-2 frases", "nota": <0-10>}`).join(',\n    ')}
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

// ===== FLASHCARD GERADO POR IA =====
app.post('/api/flashcard/generate', authMiddleware, async (req, res) => {
  const { subject, topic } = req.body
  if (!subject || !VALID_SUBJECTS.includes(subject)) return res.status(400).json({ error: 'Matéria inválida' })

  const pro = await isUserPro(req.user.id)
  if (!pro) return res.status(403).json({ error: 'Geração de flashcards com IA disponível apenas no plano Pro' })

  try {
    const subjectName = SUBJECT_NAMES_PT[subject]
    const topicInfo = topic ? `Tópico: ${topic}` : `Escolha um conceito importante de ${subjectName} para o ENEM 2026`

    const prompt = `Crie um flashcard educativo de ${subjectName} para estudo.
${topicInfo}

Retorne APENAS JSON válido, sem texto extra:
{
  "front": "Pergunta ou conceito a ser lembrado (1-2 frases diretas e concisas)",
  "back": "Resposta completa e didática (2-4 frases com a explicação clara)"
}

Regras: front deve ser uma pergunta direta ou definição para completar; back deve ser a resposta objetiva e memorável.`

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 400,
      messages: [{ role: 'user', content: prompt }]
    })

    const text = response.content[0].text.trim()
    const match = text.match(/\{[\s\S]*\}/)
    if (!match) throw new Error('Invalid JSON')
    const card = JSON.parse(match[0])
    res.json({ front: card.front, back: card.back })
  } catch (err) {
    console.error('Flashcard generate error:', err)
    res.status(500).json({ error: 'Erro ao gerar flashcard.' })
  }
})

// ===== STRIPE =====
app.post('/api/stripe/portal', authMiddleware, async (req, res) => {
  const profile = await getUserProfile(req.user.id)
  if (!profile?.stripe_customer_id) return res.status(400).json({ error: 'Sem assinatura ativa' })
  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: `${process.env.FRONTEND_URL}/app`
    })
    res.json({ url: session.url })
  } catch (err) {
    console.error('Portal error:', err)
    res.status(500).json({ error: 'Erro ao abrir portal de assinatura' })
  }
})

const PRICE_IDS = {
  monthly: process.env.STRIPE_PRICE_MONTHLY,
  annual: process.env.STRIPE_PRICE_ANNUAL,
}

app.post('/api/stripe/checkout', authMiddleware, async (req, res) => {
  const { plan } = req.body
  const priceId = PRICE_IDS[plan]
  if (!priceId) return res.status(400).json({ error: 'Plano inválido' })
  const nowCo = Date.now()
  const lastCheckout = checkoutRateLimit.get(req.user.id) || 0
  if (nowCo - lastCheckout < 10_000) return res.status(429).json({ error: 'Aguarde antes de tentar novamente.' })
  checkoutRateLimit.set(req.user.id, nowCo)

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

  if (event.type === 'checkout.session.completed') {
    try {
      const sub = await stripe.subscriptions.retrieve(session.subscription)
      const plan = sub.status === 'trialing' ? 'trialing' : sub.status === 'active' ? 'active' : 'free'
      const trialEnd = sub.trial_end ? new Date(sub.trial_end * 1000).toISOString() : null
      const userId = session.metadata?.userId

      if (userId) {
        await supabase.from('decifra_users')
          .update({ plan, trial_end: trialEnd, stripe_customer_id: sub.customer })
          .eq('id', userId)
      } else {
        // fallback: por email (casos legados)
        const email = session.customer_email || session.customer_details?.email
        if (email) {
          await supabase.from('decifra_users')
            .update({ plan, trial_end: trialEnd, stripe_customer_id: sub.customer })
            .eq('email', email)
        }
      }
    } catch (err) {
      console.error('Webhook checkout.session.completed error:', err)
    }
  }

  if (['customer.subscription.updated', 'customer.subscription.created'].includes(event.type)) {
    const sub = session
    const plan = sub.status === 'trialing' ? 'trialing' : sub.status === 'active' ? 'active' : 'free'
    const trialEnd = sub.trial_end ? new Date(sub.trial_end * 1000).toISOString() : null
    await supabase.from('decifra_users')
      .update({ plan, trial_end: trialEnd })
      .eq('stripe_customer_id', sub.customer)
  }

  if (event.type === 'customer.subscription.deleted') {
    await supabase.from('decifra_users').update({ plan: 'free', trial_used: true }).eq('stripe_customer_id', session.customer)
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

// ===== METAS =====
app.get('/api/metas', authMiddleware, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id)
    res.json({ metas: profile?.metas || {} })
  } catch { res.json({ metas: {} }) }
})

app.post('/api/metas', authMiddleware, async (req, res) => {
  const { subject, meta } = req.body
  if (!subject) return res.status(400).json({ error: 'Matéria obrigatória' })
  try {
    const profile = await getUserProfile(req.user.id)
    const metas = profile?.metas || {}
    if (meta === null || meta === undefined) delete metas[subject]
    else metas[subject] = Number(meta)
    await supabase.from('decifra_users').update({ metas }).eq('id', req.user.id)
    res.json({ ok: true })
  } catch { res.status(500).json({ error: 'Erro ao salvar meta' }) }
})

// ===== ERROS =====
app.get('/api/erros', authMiddleware, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id)
    res.json({ erros: profile?.erros_history || [] })
  } catch { res.json({ erros: [] }) }
})

app.post('/api/erros/save', authMiddleware, async (req, res) => {
  const { erros } = req.body
  if (!erros?.length) return res.json({ ok: true })
  try {
    const profile = await getUserProfile(req.user.id)
    const hist = profile?.erros_history || []
    hist.unshift(...erros)
    const erros_history = hist.slice(0, 60)
    await supabase.from('decifra_users').update({ erros_history }).eq('id', req.user.id)
    res.json({ ok: true })
  } catch { res.json({ ok: true }) }
})

// ===== ADMIN =====
function adminAuth(req, res, next) {
  const key = req.headers['x-admin-key']
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) return res.status(401).json({ error: 'Não autorizado' })
  next()
}

app.get('/api/admin/stats', adminAuth, async (req, res) => {
  try {
    const { data: users } = await supabase.from('decifra_users').select('plan, registered_at, xp, total_questions, streak')
    const now = new Date()
    const todayStr = now.toISOString().slice(0, 10)
    const last7 = new Date(now); last7.setDate(last7.getDate() - 7)
    const last30 = new Date(now); last30.setDate(last30.getDate() - 30)

    const total = users?.length || 0
    const today = users?.filter(u => u.registered_at?.slice(0, 10) === todayStr).length || 0
    const week = users?.filter(u => u.registered_at && new Date(u.registered_at) >= last7).length || 0
    const month = users?.filter(u => u.registered_at && new Date(u.registered_at) >= last30).length || 0
    const free = users?.filter(u => !u.plan || u.plan === 'free').length || 0
    const trialing = users?.filter(u => u.plan === 'trialing').length || 0
    const active = users?.filter(u => u.plan === 'active').length || 0
    const mrr = active * 29 + trialing * 0
    const convRate = total > 0 ? ((active / total) * 100).toFixed(1) : '0.0'
    const avgXp = total > 0 ? Math.round((users.reduce((s, u) => s + (u.xp || 0), 0) / total)) : 0
    const avgQ = total > 0 ? Math.round((users.reduce((s, u) => s + (u.total_questions || 0), 0) / total)) : 0
    const withStreak = users?.filter(u => (u.streak || 0) >= 1).length || 0

    res.json({ total, today, week, month, free, trialing, active, mrr, convRate, avgXp, avgQ, withStreak })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ===== REFERRAL =====
function generateReferralCode(userId) {
  return userId.replace(/-/g, '').slice(0, 8).toUpperCase()
}

app.get('/api/referral/code', authMiddleware, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id)
    let code = profile?.referral_code
    if (!code) {
      code = generateReferralCode(req.user.id)
      await supabase.from('decifra_users').update({ referral_code: code }).eq('id', req.user.id)
    }
    res.json({ code, url: `${process.env.FRONTEND_URL}/app?ref=${code}` })
  } catch { res.status(500).json({ error: 'Erro ao gerar código' }) }
})

app.post('/api/referral/use', authMiddleware, async (req, res) => {
  const { code } = req.body
  if (!code) return res.status(400).json({ error: 'Código obrigatório' })
  try {
    const profile = await getUserProfile(req.user.id)
    if (profile?.referred_by) return res.status(400).json({ error: 'Você já usou um código de indicação' })
    if (profile?.referral_code === code) return res.status(400).json({ error: 'Você não pode usar seu próprio código' })

    const { data: referrer } = await supabase.from('decifra_users').select('id, email, name, plan, trial_end').eq('referral_code', code).single()
    if (!referrer) return res.status(404).json({ error: 'Código inválido' })

    const newTrialEnd = new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString()

    // Give 7 days Pro to the new user
    await supabase.from('decifra_users').update({ referred_by: referrer.id, plan: 'trialing', trial_end: newTrialEnd }).eq('id', req.user.id)

    // Give 7 days Pro to referrer (extend trial_end or set from now)
    const referrerTrialEnd = referrer.trial_end && new Date(referrer.trial_end) > new Date()
      ? new Date(new Date(referrer.trial_end).getTime() + 7 * 24 * 3600 * 1000).toISOString()
      : newTrialEnd
    const referrerPlan = referrer.plan === 'active' ? 'active' : 'trialing'
    await supabase.from('decifra_users').update({ plan: referrerPlan, trial_end: referrerTrialEnd }).eq('id', referrer.id)

    // Email referrer
    if (referrer.email) {
      const refName = profile?.name || 'alguém'
      sendEmail({
        to: referrer.email,
        subject: `${refName.split(' ')[0]} entrou no Decifra com seu link! +7 dias Pro 🎁`,
        html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f1e;color:#f9fafb;padding:32px;border-radius:16px">
          <h1 style="color:#3b82f6;font-size:28px;margin-bottom:8px">Decifra<span style="color:#3b82f6">.</span></h1>
          <h2 style="font-size:22px;margin-bottom:16px">Sua indicação funcionou! 🎉</h2>
          <p style="color:#9ca3af;line-height:1.6;margin-bottom:24px"><strong style="color:#f9fafb">${refName}</strong> entrou no Decifra usando seu link de indicação. Como recompensa, você ganhou <strong style="color:#10b981">+7 dias Pro</strong> na sua conta!</p>
          <a href="${process.env.FRONTEND_URL}/app" style="background:#3b82f6;color:#fff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;display:inline-block;margin-bottom:24px">Aproveitar agora →</a>
          <p style="color:#6b7280;font-size:13px">Continue indicando amigos para ganhar mais dias Pro!</p>
        </div>`
      }).catch(() => {})
    }

    res.json({ ok: true, trialEnd: newTrialEnd })
  } catch (err) { res.status(500).json({ error: 'Erro ao aplicar código' }) }
})

// ===== PERFIL PÚBLICO =====
app.get('/api/perfil/:userId', async (req, res) => {
  try {
    const { data: profile } = await supabase
      .from('decifra_users')
      .select('name, xp, streak, total_questions, correct, subjects, simulados_done')
      .eq('id', req.params.userId)
      .single()
    if (!profile) return res.status(404).json({ error: 'Perfil não encontrado' })
    res.json({
      name: profile.name || 'Estudante',
      xp: profile.xp || 0,
      streak: profile.streak || 0,
      totalQuestions: profile.total_questions || 0,
      correct: profile.correct || 0,
      subjects: profile.subjects || {},
      simuladosDone: profile.simulados_done || 0
    })
  } catch {
    res.status(500).json({ error: 'Erro ao carregar perfil' })
  }
})

// ===== KEEP ALIVE =====
setInterval(() => {
  if (process.env.RAILWAY_PUBLIC_DOMAIN) {
    fetch(`https://${process.env.RAILWAY_PUBLIC_DOMAIN}/health`).catch(() => {})
  }
}, 4 * 60 * 1000)

app.get('/health', (req, res) => res.json({ ok: true }))

// ===== ERROR HANDLER =====
app.use((err, req, res, next) => {
  if (Sentry) Sentry.captureException(err)
  else console.error('Unhandled error:', err)
  res.status(500).json({ error: 'Erro interno do servidor' })
})

// ===== START =====
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Decifra backend rodando na porta ${PORT}`))
