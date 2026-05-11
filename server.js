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
      progresso: {
        totalQuestions: profile?.total_questions || 0,
        correct: profile?.correct || 0,
        streak: profile?.streak || 0,
        subjects: profile?.subjects || {}
      }
    })
  } catch {
    res.json({ plan: 'free', xp: 0, progresso: {} })
  }
})

app.post('/api/user/onboarding', authMiddleware, async (req, res) => {
  const { prova, prazo, fraqueza } = req.body
  await supabase.from('decifra_users').update({ onboarding: { prova, prazo, fraqueza }, onboarding_done: true })
    .eq('id', req.user.id)
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

    await supabase.from('decifra_users').update({
      total_questions: (profile?.total_questions || 0) + 1,
      correct: (profile?.correct || 0) + (correct ? 1 : 0),
      xp: (profile?.xp || 0) + (correct ? 10 : 2),
      subjects
    }).eq('id', req.user.id)

    res.json({ ok: true })
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
  matematica: 'Você é um professor expert em Matemática para ENEM, Vestibulares e Concursos. Explique de forma clara com exemplos práticos. Use notação simples.',
  portugues: 'Você é um professor expert em Língua Portuguesa e Literatura para ENEM. Explique gramática, interpretação e literatura de forma didática.',
  biologia: 'Você é um professor expert em Biologia para ENEM. Explique genética, evolução, ecologia e outros temas com exemplos do cotidiano.',
  quimica: 'Você é um professor expert em Química para ENEM. Explique reações, estrutura atômica, estequiometria de forma clara e com exemplos.',
  fisica: 'Você é um professor expert em Física para ENEM. Explique cinemática, dinâmica, termodinâmica, eletromagnetismo com fórmulas e exemplos.',
  historia: 'Você é um professor expert em História para ENEM. Explique história do Brasil e mundial de forma contextualizada e crítica.',
  geografia: 'Você é um professor expert em Geografia para ENEM. Explique geopolítica, geomorfologia, climatologia, urbanização de forma clara.',
  filosofia: 'Você é um professor expert em Filosofia e Sociologia para ENEM. Explique conceitos filosóficos e sociológicos de forma acessível.',
  ingles: 'You are an expert English teacher for ENEM. Explain grammar, text interpretation and vocabulary in a clear and practical way.',
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
const TIME_LIMITS = { mini: 15 * 60, enem: 45 * 60, vestibular: 30 * 60, concurso: 30 * 60 }
const QUESTION_COUNTS = { mini: 10, enem: 30, vestibular: 20, concurso: 20 }

app.post('/api/simulado/start', authMiddleware, async (req, res) => {
  const { type } = req.body
  if (!type) return res.status(400).json({ error: 'Tipo obrigatório' })

  const pro = await isUserPro(req.user.id)
  if (type !== 'mini' && !pro) return res.status(403).json({ error: 'Simulado completo disponível apenas no plano Pro' })

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
    await supabase.from('decifra_users').update({
      xp: (profile?.xp || 0) + xpGain,
      simulados_done: (profile?.simulados_done || 0) + 1
    }).eq('id', req.user.id)
    res.json({ ok: true, xpGain })
  } catch {
    res.json({ ok: true })
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
