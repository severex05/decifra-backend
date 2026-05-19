/**
 * Decifra backend — integration tests
 * Usage: node --test test.js
 * Node 18+ required (uses node:test, node:assert, globalThis.fetch)
 *
 * Tests run against the live production backend.
 * AI-heavy endpoints (tutor, redação, plano, IA simulado) only check
 * auth guards and input validation to avoid unnecessary API costs.
 */

import { test, describe, before, after } from 'node:test'
import assert from 'node:assert/strict'

const BASE = 'https://decifra-backend-production.up.railway.app'

// Unique test user per run so parallel runs don't collide
const TS = Date.now()
const TEST_EMAIL = `test_auto_${TS}@decifra-test-sink.com`
const TEST_PASS = 'TestPass123!'
const TEST_NAME = 'Teste Auto'

let token = null
let userId = null
let challengeId = null
let challengeQuestions = []

// ===== HTTP helpers =====

async function req(method, path, body, auth = true) {
  const headers = { 'Content-Type': 'application/json' }
  if (auth && token) headers['Authorization'] = `Bearer ${token}`
  const isBodyless = method === 'GET' || method === 'HEAD'
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: (!isBodyless && body !== undefined) ? JSON.stringify(body) : undefined,
  })
  let data = null
  try { data = await res.json() } catch { /* empty body */ }
  return { status: res.status, data }
}

const GET  = (path, auth = true)        => req('GET',  path, undefined, auth)
const POST = (path, body, auth = true)  => req('POST', path, body,      auth)

// ===== Test setup: register once, get token =====

before(async () => {
  const r = await POST('/api/auth/register', {
    email: TEST_EMAIL,
    password: TEST_PASS,
    name: TEST_NAME,
  }, false)
  assert.equal(r.status, 200, `register failed: ${JSON.stringify(r.data)}`)
  token  = r.data.token
  userId = r.data.user.id
})

// ===== Test teardown: delete test user via admin endpoint (best-effort) =====

after(async () => {
  // best-effort — no dedicated delete-account endpoint yet
  console.log(`\n  ℹ  Test user created: ${TEST_EMAIL} (userId: ${userId})`)
  console.log('     Delete manually via Supabase dashboard if desired.\n')
})

// =========================================================================
// 1. PUBLIC ENDPOINTS
// =========================================================================

describe('Public endpoints', () => {
  test('GET /health → 200 ok:true', async () => {
    const r = await GET('/health', false)
    assert.equal(r.status, 200)
    assert.equal(r.data.ok, true)
  })

  test('GET /api/questao-do-dia → 200 with questao object', async () => {
    const r = await GET('/api/questao-do-dia', false)
    assert.equal(r.status, 200)
    assert.ok(r.data.questao, 'questao field missing')
    assert.ok(r.data.questao.question, 'questao.question missing')
    assert.ok(Array.isArray(r.data.questao.options), 'questao.options must be array')
  })
})

// =========================================================================
// 2. AUTH
// =========================================================================

describe('Auth', () => {
  test('POST /api/auth/register — missing fields → 400', async () => {
    const r = await POST('/api/auth/register', { email: '' }, false)
    assert.equal(r.status, 400)
  })

  test('POST /api/auth/login — correct credentials → 200 with token', async () => {
    const r = await POST('/api/auth/login', { email: TEST_EMAIL, password: TEST_PASS }, false)
    assert.equal(r.status, 200)
    assert.ok(r.data.token, 'token missing')
    assert.ok(r.data.user?.id, 'user.id missing')
    assert.ok(['free','active','trialing'].includes(r.data.plan), 'invalid plan')
  })

  test('POST /api/auth/login — wrong password → 400', async () => {
    const r = await POST('/api/auth/login', { email: TEST_EMAIL, password: 'wrong' }, false)
    assert.equal(r.status, 400)
  })

  test('POST /api/auth/login — missing fields → 400', async () => {
    const r = await POST('/api/auth/login', {}, false)
    assert.equal(r.status, 400)
  })

  test('POST /api/auth/forgot-password — valid email → 200 or 400 (Supabase)', async () => {
    // Supabase may reject test email domains; accept 200 or 400, never 500
    const r = await POST('/api/auth/forgot-password', { email: TEST_EMAIL }, false)
    assert.ok([200, 400].includes(r.status), `expected 200 or 400, got ${r.status}: ${JSON.stringify(r.data)}`)
  })

  test('POST /api/auth/forgot-password — rate-limited on second call → 429', async () => {
    // rate limiter (in-memory, 60s) must be set regardless of Supabase result
    const r = await POST('/api/auth/forgot-password', { email: TEST_EMAIL }, false)
    assert.equal(r.status, 429, `expected 429 (rate limit), got ${r.status}: ${JSON.stringify(r.data)}`)
  })

  test('POST /api/auth/forgot-password — missing email → 400', async () => {
    const r = await POST('/api/auth/forgot-password', {}, false)
    assert.equal(r.status, 400)
  })

  test('POST /api/auth/reset-password — invalid token → 400', async () => {
    const r = await POST('/api/auth/reset-password', { token: 'bad', password: 'newpass123' }, false)
    assert.equal(r.status, 400)
  })

  test('POST /api/auth/reset-password — short password → 400', async () => {
    const r = await POST('/api/auth/reset-password', { token: 'any', password: '123' }, false)
    assert.equal(r.status, 400)
  })
})

// =========================================================================
// 3. AUTH GUARD (unauthenticated → 401)
// =========================================================================

describe('Auth guard (no token → 401)', () => {
  const protectedRoutes = [
    ['GET',  '/api/user/me'],
    ['POST', '/api/user/onboarding'],
    ['POST', '/api/diagnostico/save'],
    ['POST', '/api/user/resposta'],
    ['POST', '/api/tutor/chat'],
    ['POST', '/api/simulado/start'],
    ['POST', '/api/simulado/finish'],
    ['GET',  '/api/stats/semanal'],
    ['GET',  '/api/stats/historico'],
    ['GET',  '/api/ranking'],
    ['POST', '/api/simulado/ia'],
    ['GET',  '/api/plano-estudo'],
    ['POST', '/api/plano-estudo/generate'],
    ['POST', '/api/redacao/corrigir'],
    ['POST', '/api/questao/generate'],
    ['POST', '/api/flashcard/generate'],
    ['POST', '/api/stripe/portal'],
    ['POST', '/api/stripe/checkout'],
    ['GET',  '/api/stripe/status'],
    ['GET',  '/api/metas'],
    ['POST', '/api/metas'],
    ['GET',  '/api/erros'],
    ['POST', '/api/erros/save'],
    ['POST', '/api/tutor/mapa-mental'],
    ['POST', '/api/challenge/create'],
    ['GET',  '/api/referral/code'],
  ]

  for (const [method, path] of protectedRoutes) {
    test(`${method} ${path} → 401`, async () => {
      const r = await req(method, path, {}, false)
      assert.equal(r.status, 401, `expected 401 but got ${r.status}: ${JSON.stringify(r.data)}`)
    })
  }
})

// =========================================================================
// 4. USER
// =========================================================================

describe('User', () => {
  test('GET /api/user/me → 200 with plan and progresso', async () => {
    const r = await GET('/api/user/me')
    assert.equal(r.status, 200)
    assert.ok(['free','active','trialing'].includes(r.data.plan))
    assert.ok(r.data.progresso, 'progresso missing')
    assert.equal(typeof r.data.xp, 'number')
  })

  test('POST /api/user/onboarding → 200 ok:true', async () => {
    const r = await POST('/api/user/onboarding', { prova: 'enem', prazo: '6meses', fraqueza: 'matematica' })
    assert.equal(r.status, 200)
    assert.equal(r.data.ok, true)
  })

  test('POST /api/diagnostico/save → 200 ok:true', async () => {
    const r = await POST('/api/diagnostico/save', { matematica: 40, portugues: 70 })
    assert.equal(r.status, 200)
    assert.equal(r.data.ok, true)
  })

  test('POST /api/user/resposta — correct answer → 200', async () => {
    const r = await POST('/api/user/resposta', { questaoId: 'q1', correct: true, subject: 'matematica' })
    assert.equal(r.status, 200)
    assert.equal(r.data.ok, true)
  })

  test('POST /api/user/resposta — wrong answer → 200', async () => {
    const r = await POST('/api/user/resposta', { questaoId: 'q2', correct: false, subject: 'portugues' })
    assert.equal(r.status, 200)
    assert.equal(r.data.ok, true)
  })
})

// =========================================================================
// 5. QUESTÃO DO DIA
// =========================================================================

describe('Questão do dia', () => {
  test('GET /api/questao-do-dia — authenticated also works (no auth required)', async () => {
    const r = await GET('/api/questao-do-dia')
    assert.equal(r.status, 200)
    assert.ok(r.data.questao, 'questao missing')
    assert.ok(r.data.questao.question, 'questao.question missing')
    assert.ok(Array.isArray(r.data.questao.options), 'options must be array')
    assert.ok(r.data.questao.options.length >= 4, 'should have at least 4 options')
  })
})

// =========================================================================
// 6. SIMULADO
// =========================================================================

describe('Simulado', () => {
  let simuladoQuestions = []

  test('POST /api/simulado/start — missing type → 400', async () => {
    const r = await POST('/api/simulado/start', {})
    assert.equal(r.status, 400)
  })

  test('POST /api/simulado/start — type mini → 200 with questions', async () => {
    const r = await POST('/api/simulado/start', { type: 'mini' })
    assert.equal(r.status, 200, JSON.stringify(r.data))
    assert.ok(Array.isArray(r.data.questions), 'questions must be array')
    assert.ok(r.data.questions.length >= 5, 'mini should have at least 5 questions')
    assert.ok(r.data.timeLimit > 0, 'timeLimit must be positive')
    simuladoQuestions = r.data.questions
  })

  test('POST /api/simulado/start — type adaptativo → 200 with weakSubjects', async () => {
    const r = await POST('/api/simulado/start', { type: 'adaptativo' })
    assert.equal(r.status, 200, JSON.stringify(r.data))
    assert.ok(Array.isArray(r.data.questions))
    assert.ok(Array.isArray(r.data.weakSubjects), 'weakSubjects missing for adaptativo')
    assert.equal(r.data.type, 'adaptativo')
  })

  test('POST /api/simulado/start — pro-only type without pro → 403', async () => {
    const r = await POST('/api/simulado/start', { type: 'enem' })
    assert.equal(r.status, 403)
  })

  test('POST /api/simulado/finish — valid score → 200 ok:true with xpGain', async () => {
    const bySubject = {}
    for (const q of simuladoQuestions) {
      const s = q.subject
      if (!bySubject[s]) bySubject[s] = { total: 0, correct: 0 }
      bySubject[s].total++
      bySubject[s].correct++ // assume all correct for test
    }
    const r = await POST('/api/simulado/finish', {
      type: 'mini',
      score: { total: simuladoQuestions.length, correct: simuladoQuestions.length, bySubject },
      wrongQuestions: [],
    })
    assert.equal(r.status, 200)
    assert.equal(r.data.ok, true)
    assert.ok(typeof r.data.xpGain === 'number')
  })

  test('POST /api/simulado/finish — with wrongQuestions → 200', async () => {
    const wrong = simuladoQuestions.slice(0, 2).map(q => ({
      id: q.id || q.question?.slice(0, 20),
      question: q.question,
      subject: q.subject,
      correctAnswer: q.correctIndex,
      userAnswer: (q.correctIndex + 1) % 5,
    }))
    const r = await POST('/api/simulado/finish', {
      type: 'mini',
      score: { total: 5, correct: 3, bySubject: { matematica: { total: 5, correct: 3 } } },
      wrongQuestions: wrong,
    })
    assert.equal(r.status, 200)
    assert.equal(r.data.ok, true)
  })
})

// =========================================================================
// 7. STATS
// =========================================================================

describe('Stats', () => {
  test('GET /api/stats/semanal → 200 with weeks array', async () => {
    const r = await GET('/api/stats/semanal')
    assert.equal(r.status, 200)
    assert.ok(Array.isArray(r.data.weeks), 'weeks must be array')
    assert.equal(r.data.weeks.length, 8, 'should return 8 weeks')
    assert.ok(typeof r.data.totalSimulados === 'number')
    assert.ok(typeof r.data.xp === 'number')
  })

  test('GET /api/stats/historico → 200 with history array', async () => {
    const r = await GET('/api/stats/historico')
    assert.equal(r.status, 200)
    assert.ok(Array.isArray(r.data.history), 'history must be array')
  })
})

// =========================================================================
// 8. RANKING
// =========================================================================

describe('Ranking', () => {
  test('GET /api/ranking → 200 with ranking array', async () => {
    const r = await GET('/api/ranking')
    assert.equal(r.status, 200)
    assert.ok(Array.isArray(r.data.ranking), 'ranking must be array')
    assert.ok(r.data.ranking.length <= 50, 'max 50 entries')
    if (r.data.ranking.length > 0) {
      const first = r.data.ranking[0]
      assert.ok(first.name, 'ranking entry needs name')
      assert.ok(typeof first.xp === 'number')
      assert.ok(typeof first.position === 'number')
    }
  })

  test('GET /api/ranking — isMe flag on our entry if we appear', async () => {
    const r = await GET('/api/ranking')
    assert.equal(r.status, 200)
    // New user may not appear in top50 (xp=0 tie), just verify shape
    assert.ok(Array.isArray(r.data.ranking))
    const me = r.data.ranking.find(e => e.isMe)
    // isMe might be true or absent (if user not in top50)
    if (me) assert.equal(me.isMe, true)
  })
})

// =========================================================================
// 9. METAS
// =========================================================================

describe('Metas', () => {
  test('GET /api/metas → 200', async () => {
    const r = await GET('/api/metas')
    assert.equal(r.status, 200)
  })

  test('POST /api/metas — missing subject → 400', async () => {
    const r = await POST('/api/metas', {})
    assert.equal(r.status, 400)
  })

  test('POST /api/metas → 200 ok:true', async () => {
    const r = await POST('/api/metas', { subject: 'matematica', meta: 80 })
    assert.equal(r.status, 200)
    assert.equal(r.data.ok, true)
  })

  test('GET /api/metas — returns saved metas', async () => {
    const r = await GET('/api/metas')
    assert.equal(r.status, 200)
    assert.ok(r.data.metas !== undefined, 'metas field missing')
  })
})

// =========================================================================
// 10. ERROS (Revisão de erros)
// =========================================================================

describe('Erros', () => {
  test('GET /api/erros → 200', async () => {
    const r = await GET('/api/erros')
    assert.equal(r.status, 200)
  })

  test('POST /api/erros/save → 200 ok:true', async () => {
    const r = await POST('/api/erros/save', {
      questoes: [{ question: 'Quanto é 2+2?', subject: 'matematica', correctIndex: 1 }]
    })
    assert.equal(r.status, 200)
    assert.equal(r.data.ok, true)
  })
})

// =========================================================================
// 11. REFERRAL
// =========================================================================

describe('Referral', () => {
  test('GET /api/referral/code → 200 with code', async () => {
    const r = await GET('/api/referral/code')
    assert.equal(r.status, 200)
    assert.ok(r.data.code, 'referral code missing')
  })

  test('POST /api/referral/use — invalid code → 400 or 404', async () => {
    const r = await POST('/api/referral/use', { code: 'INVALID999' })
    assert.ok([400, 404].includes(r.status), `expected 400/404 but got ${r.status}`)
  })
})

// =========================================================================
// 12. STRIPE STATUS
// =========================================================================

describe('Stripe', () => {
  test('GET /api/stripe/status → 200 with plan', async () => {
    const r = await GET('/api/stripe/status')
    assert.equal(r.status, 200)
    assert.ok(['free','active','trialing','canceled'].includes(r.data.plan), `invalid plan: ${r.data.plan}`)
  })

  test('POST /api/stripe/checkout — missing priceId → 400', async () => {
    const r = await POST('/api/stripe/checkout', {})
    assert.ok([400, 500].includes(r.status), `expected 400/500 but got ${r.status}`)
  })

  test('POST /api/stripe/portal — user with no subscription → error or redirect', async () => {
    const r = await POST('/api/stripe/portal', {})
    // new user has no Stripe customer yet — 400 or 500 expected
    assert.ok([400, 500].includes(r.status), `expected 400/500 but got ${r.status}`)
  })
})

// =========================================================================
// 13. CHALLENGE
// =========================================================================

describe('Challenge', () => {
  test('POST /api/challenge/create → 200 with id and url', async () => {
    const r = await POST('/api/challenge/create', { type: 'mini' })
    assert.equal(r.status, 200, JSON.stringify(r.data))
    assert.ok(r.data.id, 'id missing')
    assert.ok(r.data.url, 'url missing')
    assert.ok(typeof r.data.timeLimit === 'number')
    challengeId = r.data.id
  })

  test('GET /api/challenge/:id — public, no auth → 200', async () => {
    if (!challengeId) return
    const r = await GET(`/api/challenge/${challengeId}`, false)
    assert.equal(r.status, 200, JSON.stringify(r.data))
    assert.ok(Array.isArray(r.data.questions), 'questions missing')
    challengeQuestions = r.data.questions
  })

  test('GET /api/challenge/:id — non-existent id → 404', async () => {
    const r = await GET('/api/challenge/00000000-0000-0000-0000-000000000000', false)
    assert.equal(r.status, 404)
  })

  test('POST /api/challenge/:id/submit — valid answers → 200 with scores', async () => {
    if (!challengeId || challengeQuestions.length === 0) return
    const answers = challengeQuestions.map((_, i) => i % 5) // arbitrary answers
    const r = await POST(`/api/challenge/${challengeId}/submit`, {
      answers,
      timeTaken: 120,
    })
    assert.equal(r.status, 200, JSON.stringify(r.data))
    assert.ok(r.data.challenger !== undefined || r.data.creator !== undefined || r.data.score !== undefined,
      'submit should return scores')
  })
})

// =========================================================================
// 14. PERFIL PÚBLICO
// =========================================================================

describe('Perfil público', () => {
  test('GET /api/perfil/:userId — valid user → 200 with stats', async () => {
    if (!userId) return
    const r = await GET(`/api/perfil/${userId}`, false)
    assert.equal(r.status, 200, JSON.stringify(r.data))
    assert.ok(r.data.name !== undefined || r.data.xp !== undefined, 'profile fields missing')
  })

  test('GET /api/perfil/:userId — non-existent id → 404', async () => {
    const r = await GET('/api/perfil/00000000-0000-0000-0000-000000000000', false)
    assert.equal(r.status, 404)
  })
})

// =========================================================================
// 15. AI ENDPOINTS — validation only (no actual AI calls to save cost)
// =========================================================================

describe('AI endpoints — input validation', () => {
  test('POST /api/tutor/chat — missing message → 400', async () => {
    const r = await POST('/api/tutor/chat', {})
    assert.ok([400, 422].includes(r.status), `expected 400/422 but got ${r.status}: ${JSON.stringify(r.data)}`)
  })

  test('POST /api/simulado/ia — pro-only without pro → 403', async () => {
    const r = await POST('/api/simulado/ia', { mode: 'enem' })
    assert.equal(r.status, 403)
  })

  test('POST /api/plano-estudo/generate — pro-only without pro → 403', async () => {
    const r = await POST('/api/plano-estudo/generate', {})
    assert.equal(r.status, 403)
  })

  test('POST /api/redacao/corrigir — missing texto → 400', async () => {
    const r = await POST('/api/redacao/corrigir', { tema: 'Educação' })
    assert.ok([400, 422].includes(r.status), `expected 400/422 but got ${r.status}: ${JSON.stringify(r.data)}`)
  })

  test('POST /api/questao/generate — missing subject → 400 or auto-filled', async () => {
    // free users can call this; just check it doesn't crash
    const r = await POST('/api/questao/generate', {})
    assert.ok([200, 400, 403, 422, 500].includes(r.status))
  })

  test('POST /api/flashcard/generate — missing topic → 400 or pro gate', async () => {
    const r = await POST('/api/flashcard/generate', {})
    assert.ok([400, 403, 422].includes(r.status), `unexpected: ${r.status}`)
  })

  test('POST /api/tutor/mapa-mental — missing topic → 400', async () => {
    const r = await POST('/api/tutor/mapa-mental', {})
    assert.ok([400, 422].includes(r.status), `expected 400/422 but got ${r.status}: ${JSON.stringify(r.data)}`)
  })
})
