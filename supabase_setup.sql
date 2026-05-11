-- Tabela principal de usuários do Decifra
CREATE TABLE IF NOT EXISTS decifra_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT DEFAULT '',
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'trialing', 'active')),
  stripe_customer_id TEXT,
  trial_end TIMESTAMPTZ,
  xp INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  total_questions INTEGER DEFAULT 0,
  correct INTEGER DEFAULT 0,
  simulados_done INTEGER DEFAULT 0,
  subjects JSONB DEFAULT '{}',
  onboarding JSONB DEFAULT '{}',
  onboarding_done BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: usuário só vê seus próprios dados
ALTER TABLE decifra_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own data" ON decifra_users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Service role has full access" ON decifra_users
  USING (true) WITH CHECK (true);

-- Índice para busca por email (necessário para webhook Stripe)
CREATE INDEX IF NOT EXISTS idx_decifra_users_email ON decifra_users(email);
CREATE INDEX IF NOT EXISTS idx_decifra_users_stripe ON decifra_users(stripe_customer_id);
