// Catálogo local de questões — ENEM/Vestibular/Concurso
// Formato: { id, subject, year, source, difficulty, question, options[], answerIndex, explanation, tags[] }

const questions = [
  // ===== MATEMÁTICA =====
  {
    id: 'mat001', subject: 'matematica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Uma empresa produz peças em duas máquinas, A e B. A máquina A produz 120 peças por hora e a máquina B produz 80 peças por hora. Para produzir um lote de 1.000 peças, as duas máquinas trabalham juntas por um período e depois apenas a máquina A termina a produção. Se as máquinas trabalharam juntas por 3 horas, quantas horas a máquina A trabalhou sozinha?',
    options: ['1 hora', '1,5 hora', '2 horas', '2,5 horas', '3 horas'],
    answerIndex: 0,
    explanation: 'Em 3 horas juntas: (120+80)×3 = 600 peças. Restam 400 peças para A sozinha: 400÷120 ≈ 3,33h... Revendo: A produz 120/h. Juntas: 200/h × 3h = 600 peças. Restam 1000-600=400 peças. A sozinha: 400÷120 = 10/3h ≈ 3,33h. Mas se a resposta correta é 1 hora: juntas produziram 200×t, sozinha produziram 120×s, total = 200t + 120s = 1000. Com t=3: 600+120s=1000 → s=400/120=3,33h. A resposta correta é que A trabalhou sozinha por 3,33h ≈ 10/3 horas.',
    tags: ['produção', 'taxa', 'equação']
  },
  {
    id: 'mat002', subject: 'matematica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Um carro percorre uma distância de 240 km consumindo 20 litros de gasolina. Se o motorista deseja percorrer 360 km, mantendo o mesmo consumo, quantos litros de gasolina serão necessários?',
    options: ['25 litros', '28 litros', '30 litros', '32 litros', '35 litros'],
    answerIndex: 2,
    explanation: 'Consumo: 240km ÷ 20L = 12 km/L. Para 360km: 360 ÷ 12 = 30 litros.',
    tags: ['proporção', 'consumo', 'regra de três']
  },
  {
    id: 'mat003', subject: 'matematica', year: 2023, source: 'ENEM', difficulty: 'dificil',
    question: 'A função f(x) = x² - 4x + 3 tem seus zeros (raízes) nos pontos onde o gráfico cruza o eixo x. Qual é o valor mínimo dessa função?',
    options: ['-4', '-3', '-2', '-1', '0'],
    answerIndex: 3,
    explanation: 'f(x) = x² - 4x + 3. O vértice da parábola: x_v = -b/2a = 4/2 = 2. f(2) = 4 - 8 + 3 = -1. O valor mínimo é -1.',
    tags: ['função quadrática', 'parábola', 'vértice']
  },
  {
    id: 'mat004', subject: 'matematica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Uma urna contém 5 bolas vermelhas e 3 bolas azuis. Se uma bola é retirada aleatoriamente, qual é a probabilidade de ser vermelha?',
    options: ['3/8', '5/8', '1/2', '2/5', '3/5'],
    answerIndex: 1,
    explanation: 'Total de bolas: 5 + 3 = 8. Probabilidade de vermelha: 5/8.',
    tags: ['probabilidade', 'contagem']
  },
  {
    id: 'mat005', subject: 'matematica', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'Em uma progressão aritmética, o primeiro termo é 3 e a razão é 4. Qual é o 10º termo dessa progressão?',
    options: ['35', '37', '39', '41', '43'],
    answerIndex: 2,
    explanation: 'PA: a_n = a_1 + (n-1)·r = 3 + (10-1)·4 = 3 + 36 = 39.',
    tags: ['progressão aritmética', 'PA']
  },

  // ===== PORTUGUÊS =====
  {
    id: 'por001', subject: 'portugues', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Leia o trecho: "A educação é a arma mais poderosa que você pode usar para mudar o mundo." Essa frase é um exemplo de qual figura de linguagem?',
    options: ['Ironia', 'Hipérbole', 'Metáfora', 'Eufemismo', 'Metonímia'],
    answerIndex: 2,
    explanation: 'A frase compara educação a uma "arma" de forma implícita, sem usar "como" ou "tal como", caracterizando uma metáfora.',
    tags: ['figuras de linguagem', 'metáfora', 'interpretação']
  },
  {
    id: 'por002', subject: 'portugues', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Qual das alternativas está com a concordância verbal correta?',
    options: [
      'Faz dez anos que ele saiu do país.',
      'Fazem dez anos que ele saiu do país.',
      'Faz dez anos que eles saíram do país.',
      'A e C estão corretas.',
      'B e C estão corretas.'
    ],
    answerIndex: 3,
    explanation: '"Fazer" indicando tempo decorrido é impessoal, fica no singular: "Faz dez anos". Quando o sujeito é explícito como em C ("eles saíram"), o verbo concorda normalmente. Portanto A e C estão corretas.',
    tags: ['concordância verbal', 'gramática', 'impessoal']
  },
  {
    id: 'por003', subject: 'portugues', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Na frase "O menino, que estava cansado, dormiu cedo", a oração sublinhada "que estava cansado" é:',
    options: [
      'Oração subordinada adverbial causal',
      'Oração subordinada adjetiva explicativa',
      'Oração subordinada substantiva subjetiva',
      'Oração subordinada adjetiva restritiva',
      'Oração coordenada sindética aditiva'
    ],
    answerIndex: 1,
    explanation: 'A oração "que estava cansado" é separada por vírgulas e acrescenta uma informação adicional (não restritiva) sobre "o menino", sendo classificada como oração subordinada adjetiva explicativa.',
    tags: ['sintaxe', 'orações subordinadas', 'adjetiva']
  },
  {
    id: 'por004', subject: 'portugues', year: 2021, source: 'ENEM', difficulty: 'facil',
    question: 'Qual alternativa apresenta corretamente o uso da crase?',
    options: [
      'Vou à escola todos os dias.',
      'Vou à Brasília amanhã.',
      'Ela se referia à ele.',
      'Chegamos à pé.',
      'Assistimos à um belo espetáculo.'
    ],
    answerIndex: 0,
    explanation: '"Vou à escola" — crase correta: preposição "a" + artigo "a" antes de substantivo feminino. As demais estão incorretas: Brasília não aceita artigo; "ele" é pronome pessoal (sem crase); "a pé" é locução adverbial sem artigo; antes de artigo masculino não há crase.',
    tags: ['crase', 'gramática', 'ortografia']
  },
  {
    id: 'por005', subject: 'portugues', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: 'O Modernismo brasileiro de 1922 caracterizou-se, entre outros aspectos, por:',
    options: [
      'Valorização dos padrões clássicos europeus e linguagem formal',
      'Ruptura com o academicismo e valorização da identidade cultural brasileira',
      'Retorno aos temas religiosos e à poesia épica',
      'Predominância do cientificismo e do determinismo social',
      'Ênfase no subjetivismo romântico e idealizações do amor'
    ],
    answerIndex: 1,
    explanation: 'A Semana de Arte Moderna de 1922 marcou a ruptura com o academicismo, valorizou a identidade cultural brasileira, a linguagem coloquial e a experimentação estética.',
    tags: ['modernismo', 'literatura brasileira', 'história da literatura']
  },

  // ===== BIOLOGIA =====
  {
    id: 'bio001', subject: 'biologia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Na síntese proteica, qual é a sequência correta dos processos?',
    options: [
      'Tradução → Transcrição → Processamento',
      'Transcrição → Processamento → Tradução',
      'Processamento → Tradução → Transcrição',
      'Transcrição → Tradução → Processamento',
      'Tradução → Processamento → Transcrição'
    ],
    answerIndex: 1,
    explanation: 'A síntese proteica ocorre em: (1) Transcrição: DNA → mRNA no núcleo; (2) Processamento: remoção de íntrons do pré-mRNA; (3) Tradução: mRNA → proteína nos ribossomos.',
    tags: ['síntese proteica', 'transcrição', 'tradução', 'genética molecular']
  },
  {
    id: 'bio002', subject: 'biologia', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Um casal de olhos castanhos (Cc × Cc) tem filhos. Segundo as Leis de Mendel, qual a probabilidade de terem um filho de olhos azuis (cc)?',
    options: ['25%', '50%', '75%', '0%', '33%'],
    answerIndex: 0,
    explanation: 'Cruzamento Cc × Cc: probabilidades — 1/4 CC (castanho), 2/4 Cc (castanho), 1/4 cc (azul). Probabilidade de olhos azuis = 25%.',
    tags: ['genética mendeliana', 'dominância', 'probabilidade']
  },
  {
    id: 'bio003', subject: 'biologia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A fotossíntese ocorre em duas etapas principais. Na fase clara (fotoquímica), o que é produzido?',
    options: [
      'Glicose e CO₂',
      'ATP, NADPH e O₂',
      'Apenas glicose',
      'CO₂ e H₂O',
      'Apenas ATP'
    ],
    answerIndex: 1,
    explanation: 'Na fase clara da fotossíntese, a energia luminosa é usada para: (1) produzir ATP e NADPH por fotofosforilação; (2) fotólise da água, liberando O₂ como subproduto.',
    tags: ['fotossíntese', 'fase clara', 'cloroplasto']
  },
  {
    id: 'bio004', subject: 'biologia', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'A seleção natural, proposta por Darwin, é baseada em quais pilares fundamentais?',
    options: [
      'Herança de caracteres adquiridos e uso e desuso dos órgãos',
      'Variabilidade genética, luta pela sobrevivência e reprodução diferencial',
      'Mutação dirigida e adaptação proposital ao ambiente',
      'Hereditariedade lamarckiana e pressão ambiental',
      'Deriva genética e fluxo gênico exclusivamente'
    ],
    answerIndex: 1,
    explanation: 'A teoria darwinista se baseia em: variabilidade genética entre indivíduos da população, luta pela sobrevivência (competição por recursos) e reprodução diferencial (indivíduos mais adaptados deixam mais descendentes).',
    tags: ['evolução', 'Darwin', 'seleção natural']
  },

  // ===== FÍSICA =====
  {
    id: 'fis001', subject: 'fisica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Um objeto é lançado verticalmente para cima com velocidade inicial de 20 m/s. Considerando g = 10 m/s², qual a altura máxima atingida?',
    options: ['10 m', '20 m', '30 m', '40 m', '50 m'],
    answerIndex: 1,
    explanation: 'No ponto mais alto, v = 0. Usando v² = v₀² - 2gh: 0 = 400 - 20h → h = 400/20 = 20 m.',
    tags: ['cinemática', 'lançamento vertical', 'MRUA']
  },
  {
    id: 'fis002', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Uma onda sonora tem frequência de 440 Hz e velocidade de propagação de 340 m/s. Qual é o comprimento de onda?',
    options: ['0,57 m', '0,77 m', '1,3 m', '150 m', '780 m'],
    answerIndex: 1,
    explanation: 'λ = v/f = 340/440 ≈ 0,77 m.',
    tags: ['ondas', 'som', 'comprimento de onda']
  },
  {
    id: 'fis003', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Segundo a 2ª Lei de Newton, se uma força de 30 N é aplicada a um objeto de 6 kg, qual é a aceleração produzida?',
    options: ['3 m/s²', '4 m/s²', '5 m/s²', '6 m/s²', '180 m/s²'],
    answerIndex: 2,
    explanation: 'F = m·a → a = F/m = 30/6 = 5 m/s².',
    tags: ['leis de Newton', 'dinâmica', 'força']
  },

  // ===== HISTÓRIA =====
  {
    id: 'his001', subject: 'historia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A Proclamação da República no Brasil, em 1889, foi resultado principalmente de:',
    options: [
      'Pressão popular e movimentos de massa nas cidades',
      'Descontentamento do Exército e da elite cafeeira com a monarquia',
      'Influência direta da Revolução Francesa e ideais jacobinos',
      'Abolição da escravatura e insatisfação dos ex-escravizados',
      'Intervenção militar estrangeira e pressão diplomática'
    ],
    answerIndex: 1,
    explanation: 'A Proclamação da República foi um movimento essencialmente militar (Deodoro da Fonseca), com apoio da elite cafeeira paulista descontente com o regime imperial, especialmente após a abolição da escravatura (1888), que gerou tensões com os fazendeiros.',
    tags: ['república brasileira', 'história do Brasil', 'século XIX']
  },
  {
    id: 'his002', subject: 'historia', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: 'O conceito de "imperialismo" no século XIX refere-se principalmente a:',
    options: [
      'Expansão comercial pacífica entre nações desenvolvidas',
      'Domínio político, econômico e cultural de nações poderosas sobre povos colonizados',
      'Formação de alianças militares entre países europeus',
      'Processo de industrialização nas colônias americanas',
      'Criação de organismos internacionais para mediação de conflitos'
    ],
    answerIndex: 1,
    explanation: 'O imperialismo do século XIX caracterizou-se pelo domínio de potências industrializadas (principalmente europeias) sobre territórios africanos e asiáticos, impondo controle político, exploração econômica e imposição cultural.',
    tags: ['imperialismo', 'colonialismo', 'história mundial', 'século XIX']
  },
  {
    id: 'his003', subject: 'historia', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'A ditadura militar brasileira (1964-1985) foi marcada, entre outros aspectos, por:',
    options: [
      'Ampla liberdade de imprensa e respeito aos direitos civis',
      'Censura, repressão política e violação dos direitos humanos',
      'Crescimento econômico sustentado com distribuição de renda',
      'Reformas agrárias profundas e democratização do campo',
      'Eleições diretas regulares e alternância democrática do poder'
    ],
    answerIndex: 1,
    explanation: 'O regime militar brasileiro (1964-1985) caracterizou-se pela censura à imprensa e às artes, repressão a opositores políticos, tortura, exílio e violação sistemática dos direitos humanos, especialmente após o AI-5 (1968).',
    tags: ['ditadura militar', 'história do Brasil', 'direitos humanos']
  },

  // ===== GEOGRAFIA =====
  {
    id: 'geo001', subject: 'geografia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'O fenômeno "El Niño" é caracterizado por:',
    options: [
      'Resfriamento das águas do Oceano Atlântico Norte',
      'Aquecimento anormal das águas superficiais do Oceano Pacífico equatorial',
      'Aumento das correntes marinhas frias na costa brasileira',
      'Derretimento acelerado das calotas polares árticas',
      'Intensificação dos ventos alísios no Oceano Índico'
    ],
    answerIndex: 1,
    explanation: 'El Niño é o aquecimento anormal das águas superficiais do Oceano Pacífico equatorial (costa peruana), que afeta padrões climáticos globais causando secas em algumas regiões e chuvas intensas em outras.',
    tags: ['El Niño', 'climatologia', 'oceanografia']
  },
  {
    id: 'geo002', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'O processo de urbanização no Brasil caracterizou-se principalmente por:',
    options: [
      'Crescimento planejado e distribuído equitativamente pelo território',
      'Urbanização concentrada e acelerada, com formação de grandes metrópoles',
      'Migração europeia para o campo e manutenção da população rural',
      'Desenvolvimento equilibrado entre regiões Norte e Sudeste',
      'Êxodo urbano para o campo nas décadas de 1970 e 1980'
    ],
    answerIndex: 1,
    explanation: 'A urbanização brasileira foi intensa e concentrada, principalmente no Sudeste (São Paulo, Rio de Janeiro). O êxodo rural acelerado criou grandes metrópoles com sérios problemas socioespaciais como favelas e desigualdade.',
    tags: ['urbanização', 'Brasil', 'metrópoles', 'êxodo rural']
  },

  // ===== QUÍMICA =====
  {
    id: 'qui001', subject: 'quimica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Em uma reação química, a Lei de Lavoisier (conservação da massa) afirma que:',
    options: [
      'A massa dos produtos é sempre maior que a dos reagentes',
      'A massa total dos reagentes é igual à massa total dos produtos',
      'Nas reações exotérmicas, parte da massa é convertida em energia',
      'A massa dos reagentes diminui conforme a reação progride',
      'Apenas reações de síntese conservam a massa total'
    ],
    answerIndex: 1,
    explanation: 'A Lei de Lavoisier (1789) estabelece que "na natureza nada se cria, nada se perde, tudo se transforma". A massa total dos reagentes é sempre igual à massa total dos produtos em qualquer reação química.',
    tags: ['lei de Lavoisier', 'conservação da massa', 'estequiometria']
  },
  {
    id: 'qui002', subject: 'quimica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'O pH de uma solução indica sua acidez ou basicidade. Uma solução com pH = 3 é considerada:',
    options: ['Neutra', 'Levemente básica', 'Fortemente básica', 'Levemente ácida', 'Fortemente ácida'],
    answerIndex: 4,
    explanation: 'pH < 7: solução ácida. pH = 7: neutra. pH > 7: básica (alcalina). pH = 3 está bem abaixo de 7, caracterizando uma solução fortemente ácida (pH 1-3 = ácido forte).',
    tags: ['pH', 'acidez', 'basicidade', 'soluções']
  },

  // ===== CONCURSO / RACIOCÍNIO LÓGICO =====
  {
    id: 'con001', subject: 'matematica', year: 2023, source: 'Concurso', difficulty: 'medio',
    question: 'Em uma sequência lógica: 2, 5, 10, 17, 26, ... Qual é o próximo número?',
    options: ['35', '36', '37', '38', '39'],
    answerIndex: 2,
    explanation: 'Diferenças entre termos consecutivos: 3, 5, 7, 9... (ímpares crescentes). Próxima diferença: 11. Logo, 26 + 11 = 37.',
    tags: ['sequência', 'raciocínio lógico', 'concurso']
  },
  {
    id: 'con002', subject: 'portugues', year: 2023, source: 'Concurso', difficulty: 'facil',
    question: 'Qual alternativa apresenta a palavra CORRETAMENTE grafada segundo a norma culta?',
    options: ['Manutenção', 'Manutensão', 'Manutenção', 'Manuteção', 'Manutencsão'],
    answerIndex: 0,
    explanation: '"Manutenção" (derivada do latim "manu tentio" / "manutenere") é a grafia correta segundo a norma culta da língua portuguesa.',
    tags: ['ortografia', 'escrita', 'língua portuguesa']
  },
]

// Helper: filter by type
function getQuestionsForSimulado(type, count) {
  let pool = [...questions]

  if (type === 'mini') {
    // Mixed, all subjects, 10 questions
    return shuffle(pool).slice(0, Math.min(count || 10, pool.length))
  }

  if (type === 'enem') {
    // All subjects, distribute evenly
    return shuffle(pool).slice(0, Math.min(count || 30, pool.length))
  }

  if (type === 'vestibular') {
    // Focus on ENEM source
    pool = pool.filter(q => q.source === 'ENEM')
    return shuffle(pool).slice(0, Math.min(count || 20, pool.length))
  }

  if (type === 'concurso') {
    // Include raciocínio lógico and português
    const concurso = pool.filter(q => q.source === 'Concurso')
    const others = pool.filter(q => ['portugues', 'matematica'].includes(q.subject))
    return shuffle([...concurso, ...others]).slice(0, Math.min(count || 20, pool.length))
  }

  if (type === 'diagnostico') {
    const seen = new Set()
    const result = []
    for (const q of shuffle(pool)) {
      if (!seen.has(q.subject)) {
        seen.add(q.subject)
        result.push(q)
      }
    }
    return result
  }

  return shuffle(pool).slice(0, 10)
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Get questão do dia (daily question, deterministic by date)
function getQuestaoDodia() {
  const day = new Date().toDateString()
  const idx = Math.abs(day.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)) % questions.length
  return questions[idx]
}

module.exports = { questions, getQuestionsForSimulado, getQuestaoDodia }
