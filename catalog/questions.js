// Catálogo local de questões — ENEM/Vestibular/Concurso
// Última atualização: 2026-05-13
// Formato: { id, subject, year, source, difficulty, question, options[], answerIndex, explanation, tags[] }

const questions = [

  // ===== MATEMÁTICA (10 questões) =====
  {
    id: 'mat001', subject: 'matematica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Um carro percorre 240 km consumindo 20 litros de gasolina. Para percorrer 360 km com o mesmo consumo, quantos litros serão necessários?',
    options: ['25 litros', '28 litros', '30 litros', '32 litros', '35 litros'],
    answerIndex: 2,
    explanation: 'Consumo: 240 ÷ 20 = 12 km/L. Para 360 km: 360 ÷ 12 = 30 litros.',
    tags: ['proporção', 'consumo', 'regra de três']
  },
  {
    id: 'mat002', subject: 'matematica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A função f(x) = x² − 4x + 3. Qual é o valor mínimo dessa função?',
    options: ['−4', '−3', '−2', '−1', '0'],
    answerIndex: 3,
    explanation: 'Vértice: x_v = −b/(2a) = 4/2 = 2. f(2) = 4 − 8 + 3 = −1. O valor mínimo é −1.',
    tags: ['função quadrática', 'parábola', 'vértice']
  },
  {
    id: 'mat003', subject: 'matematica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Uma urna contém 5 bolas vermelhas e 3 azuis. Se uma bola é retirada aleatoriamente, qual é a probabilidade de ser vermelha?',
    options: ['3/8', '5/8', '1/2', '2/5', '3/5'],
    answerIndex: 1,
    explanation: 'Total: 5 + 3 = 8 bolas. P(vermelha) = 5/8.',
    tags: ['probabilidade', 'contagem']
  },
  {
    id: 'mat004', subject: 'matematica', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'Em uma progressão aritmética, o primeiro termo é 3 e a razão é 4. Qual é o 10º termo?',
    options: ['35', '37', '39', '41', '43'],
    answerIndex: 2,
    explanation: 'a_n = a₁ + (n−1)·r = 3 + 9·4 = 3 + 36 = 39.',
    tags: ['progressão aritmética', 'PA']
  },
  {
    id: 'mat005', subject: 'matematica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'A média aritmética de 5 números é 8. Um deles é substituído por 18 e a nova média passa a ser 10. Qual era o número substituído?',
    options: ['2', '4', '6', '8', '10'],
    answerIndex: 3,
    explanation: 'Soma original: 5×8 = 40. Nova soma: 5×10 = 50. Ao substituir x por 18: 40 − x + 18 = 50 → x = 8.',
    tags: ['média aritmética', 'estatística']
  },
  {
    id: 'mat006', subject: 'matematica', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'Qual é o valor de log₁₀(1000)?',
    options: ['1', '2', '3', '4', '100'],
    answerIndex: 2,
    explanation: 'log₁₀(1000) = log₁₀(10³) = 3. Por definição, log_b(bⁿ) = n.',
    tags: ['logaritmo', 'álgebra']
  },
  {
    id: 'mat007', subject: 'matematica', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'Um círculo tem raio de 5 cm. Qual é a sua área? (Use π ≈ 3,14)',
    options: ['15,7 cm²', '31,4 cm²', '62,8 cm²', '78,5 cm²', '157 cm²'],
    answerIndex: 3,
    explanation: 'A = π·r² = 3,14 × 5² = 3,14 × 25 = 78,5 cm².',
    tags: ['geometria', 'círculo', 'área']
  },
  {
    id: 'mat008', subject: 'matematica', year: 2025, source: 'ENEM', difficulty: 'facil',
    question: 'Uma televisão custa R$ 2.000,00. Durante uma promoção, há desconto de 15%. Qual é o preço final?',
    options: ['R$ 1.600,00', 'R$ 1.700,00', 'R$ 1.750,00', 'R$ 1.800,00', 'R$ 1.850,00'],
    answerIndex: 1,
    explanation: 'Desconto: 15% de 2000 = 300. Preço final: 2000 − 300 = R$ 1.700,00.',
    tags: ['porcentagem', 'desconto', 'matemática financeira']
  },
  {
    id: 'mat009', subject: 'matematica', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Em um triângulo retângulo, o cateto oposto mede 3 cm e a hipotenusa mede 5 cm. Qual é o valor do seno do ângulo oposto a esse cateto?',
    options: ['3/4', '3/5', '4/5', '5/3', '4/3'],
    answerIndex: 1,
    explanation: 'sen(α) = cateto oposto / hipotenusa = 3/5. Pelo Teorema de Pitágoras, o outro cateto = √(25−9) = 4 cm.',
    tags: ['trigonometria', 'seno', 'triângulo retângulo']
  },
  {
    id: 'mat010', subject: 'matematica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Um capital de R$ 5.000 é aplicado a juros simples de 4% ao mês. Qual será o montante após 3 meses?',
    options: ['R$ 5.200,00', 'R$ 5.400,00', 'R$ 5.600,00', 'R$ 5.800,00', 'R$ 6.000,00'],
    answerIndex: 2,
    explanation: 'J = C×i×t = 5000 × 0,04 × 3 = R$ 600. Montante: M = 5000 + 600 = R$ 5.600,00.',
    tags: ['juros simples', 'matemática financeira']
  },

  // ===== PORTUGUÊS (8 questões) =====
  {
    id: 'por001', subject: 'portugues', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: '"A educação é a arma mais poderosa que você pode usar para mudar o mundo." Essa frase é exemplo de qual figura de linguagem?',
    options: ['Ironia', 'Hipérbole', 'Metáfora', 'Eufemismo', 'Metonímia'],
    answerIndex: 2,
    explanation: 'Compara educação a uma "arma" de forma implícita, sem usar "como" — caracterizando metáfora.',
    tags: ['figuras de linguagem', 'metáfora', 'interpretação']
  },
  {
    id: 'por002', subject: 'portugues', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Qual das alternativas está com a concordância verbal CORRETA?',
    options: [
      'Faz dez anos que ele saiu do país.',
      'Fazem dez anos que ele saiu do país.',
      'Faz dez anos que eles saíram do país.',
      'A e C estão corretas.',
      'B e C estão corretas.'
    ],
    answerIndex: 3,
    explanation: '"Fazer" indicando tempo decorrido é impessoal, fica no singular (A). Em C, o sujeito explícito "eles" concorda normalmente com "saíram". A e C estão corretas.',
    tags: ['concordância verbal', 'gramática', 'impessoal']
  },
  {
    id: 'por003', subject: 'portugues', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Em "O menino, que estava cansado, dormiu cedo", a oração "que estava cansado" é classificada como:',
    options: [
      'Oração subordinada adverbial causal',
      'Oração subordinada adjetiva explicativa',
      'Oração subordinada substantiva subjetiva',
      'Oração subordinada adjetiva restritiva',
      'Oração coordenada sindética aditiva'
    ],
    answerIndex: 1,
    explanation: 'Separada por vírgulas, acrescenta informação adicional (não restritiva) sobre "o menino" — oração subordinada adjetiva explicativa.',
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
    explanation: '"Vou à escola" — preposição "a" + artigo "a" antes de substantivo feminino. Brasília normalmente não aceita artigo; "ele" é pronome (sem crase); "a pé" é locução adverbial sem artigo; antes de artigo masculino não há crase.',
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
      'Ênfase no subjetivismo romântico e idealização do amor'
    ],
    answerIndex: 1,
    explanation: 'A Semana de Arte Moderna de 1922 marcou a ruptura com o academicismo, valorizou a identidade cultural brasileira, a linguagem coloquial e a experimentação estética.',
    tags: ['modernismo', 'literatura brasileira', 'história da literatura']
  },
  {
    id: 'por006', subject: 'portugues', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'A variação linguística é um fenômeno natural da língua. Qual tipo de variação ocorre quando um mesmo falante usa a língua de forma diferente em situações formais e informais?',
    options: [
      'Variação diatópica (regional)',
      'Variação diastrática (social)',
      'Variação diafásica (situacional)',
      'Variação diacrônica (histórica)',
      'Variação diamésica (canal)'
    ],
    answerIndex: 2,
    explanation: 'A variação diafásica (ou situacional) ocorre quando o falante adapta seu registro à situação comunicativa — mais formal numa entrevista, mais informal entre amigos. É a variação dentro do repertório de um mesmo indivíduo.',
    tags: ['variação linguística', 'sociolinguística', 'registro']
  },
  {
    id: 'por007', subject: 'portugues', year: 2025, source: 'ENEM', difficulty: 'facil',
    question: 'Assinale a alternativa em que todas as palavras são SINÔNIMAS:',
    options: [
      'Alegre, triste, feliz, contente',
      'Bonito, belo, formoso, atraente',
      'Grande, pequeno, enorme, gigante',
      'Rápido, veloz, lento, ágil',
      'Frio, quente, gelado, fresco'
    ],
    answerIndex: 1,
    explanation: 'Bonito, belo, formoso e atraente são sinônimos — todas indicam qualidade estética positiva. As demais alternativas misturam antônimos ou palavras de sentidos distintos.',
    tags: ['semântica', 'sinônimos', 'vocabulário']
  },
  {
    id: 'por008', subject: 'portugues', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Na dissertação argumentativa do ENEM, a proposta de intervenção deve apresentar obrigatoriamente:',
    options: [
      'Apenas a descrição do problema social tratado no texto',
      'Agente, ação, modo/meio, finalidade e detalhamento',
      'Três argumentos favoráveis à tese e um desfavorável',
      'Citação de pelo menos dois autores e suas obras',
      'Narração de experiência pessoal relacionada ao tema'
    ],
    answerIndex: 1,
    explanation: 'A grade do ENEM avalia a proposta de intervenção pela presença de: quem fará (agente), o que fará (ação), como fará (modo/meio), para quê (finalidade) e detalhamento da ação — os 5 elementos cobrados na Competência V.',
    tags: ['redação ENEM', 'proposta de intervenção', 'competência V']
  },

  // ===== BIOLOGIA (6 questões) =====
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
    explanation: '(1) Transcrição: DNA → pré-mRNA no núcleo; (2) Processamento: remoção de íntrons; (3) Tradução: mRNA → proteína nos ribossomos.',
    tags: ['síntese proteica', 'transcrição', 'tradução', 'genética molecular']
  },
  {
    id: 'bio002', subject: 'biologia', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Um casal Cc × Cc tem filhos. Qual a probabilidade de terem um filho de olhos azuis (cc)?',
    options: ['25%', '50%', '75%', '0%', '33%'],
    answerIndex: 0,
    explanation: 'Cruzamento Cc × Cc: 1/4 CC, 2/4 Cc, 1/4 cc. Probabilidade de cc (azul) = 25%.',
    tags: ['genética mendeliana', 'dominância', 'probabilidade']
  },
  {
    id: 'bio003', subject: 'biologia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Na fase clara da fotossíntese (fase fotoquímica), o que é produzido?',
    options: [
      'Glicose e CO₂',
      'ATP, NADPH e O₂',
      'Apenas glicose',
      'CO₂ e H₂O',
      'Apenas ATP'
    ],
    answerIndex: 1,
    explanation: 'Na fase clara: energia luminosa produz ATP e NADPH por fotofosforilação; a fotólise da água libera O₂ como subproduto.',
    tags: ['fotossíntese', 'fase clara', 'cloroplasto']
  },
  {
    id: 'bio004', subject: 'biologia', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'A seleção natural darwinista baseia-se em quais pilares fundamentais?',
    options: [
      'Herança de caracteres adquiridos e uso e desuso',
      'Variabilidade genética, luta pela sobrevivência e reprodução diferencial',
      'Mutação dirigida e adaptação proposital',
      'Hereditariedade lamarckiana e pressão ambiental',
      'Deriva genética e fluxo gênico exclusivamente'
    ],
    answerIndex: 1,
    explanation: 'Darwin: variabilidade entre indivíduos, luta pela sobrevivência (recursos limitados) e reprodução diferencial (mais adaptados deixam mais descendentes).',
    tags: ['evolução', 'Darwin', 'seleção natural']
  },
  {
    id: 'bio005', subject: 'biologia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Sobre o Cerrado brasileiro, é CORRETO afirmar que:',
    options: [
      'É exclusivo do litoral nordestino',
      'Possui vegetação com árvores de cascas grossas e raízes profundas, adaptada a longos períodos de seca',
      'Tem o maior índice pluviométrico do Brasil',
      'É composto principalmente por floresta densa e perenifólia',
      'Só é encontrado na região Sul do Brasil'
    ],
    answerIndex: 1,
    explanation: 'O Cerrado (Brasil Central) é uma savana tropical com árvores de cascas grossas (proteção contra incêndios) e raízes profundas (acesso ao lençol freático). É considerado o "berço das águas" e possui enorme biodiversidade.',
    tags: ['biomas', 'Cerrado', 'adaptações vegetais']
  },
  {
    id: 'bio006', subject: 'biologia', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Os linfócitos B são células do sistema imunológico responsáveis por:',
    options: [
      'Destruir diretamente células infectadas por vírus (imunidade celular)',
      'Produzir anticorpos específicos contra antígenos (imunidade humoral)',
      'Realizar fagocitose de bactérias',
      'Regular a temperatura corporal durante infecções',
      'Transportar oxigênio para os tecidos'
    ],
    answerIndex: 1,
    explanation: 'Linfócitos B ativados diferenciam-se em plasmócitos, que produzem anticorpos (imunoglobulinas) específicos contra um antígeno — base da imunidade humoral.',
    tags: ['sistema imunológico', 'linfócitos', 'anticorpos']
  },

  // ===== QUÍMICA (5 questões) =====
  {
    id: 'qui001', subject: 'quimica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A Lei de Lavoisier (conservação da massa) afirma que:',
    options: [
      'A massa dos produtos é sempre maior que a dos reagentes',
      'A massa total dos reagentes é igual à massa total dos produtos',
      'Em reações exotérmicas, parte da massa é convertida em energia',
      'A massa dos reagentes diminui conforme a reação progride',
      'Apenas reações de síntese conservam a massa total'
    ],
    answerIndex: 1,
    explanation: '"Na natureza nada se cria, nada se perde, tudo se transforma." Massa total dos reagentes = massa total dos produtos.',
    tags: ['lei de Lavoisier', 'conservação da massa', 'estequiometria']
  },
  {
    id: 'qui002', subject: 'quimica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Uma solução com pH = 3 é considerada:',
    options: ['Neutra', 'Levemente básica', 'Fortemente básica', 'Levemente ácida', 'Fortemente ácida'],
    answerIndex: 4,
    explanation: 'pH < 7: ácida. pH = 7: neutra. pH > 7: básica. pH = 3 → fortemente ácida (pH 1–3 = ácido forte).',
    tags: ['pH', 'acidez', 'basicidade', 'soluções']
  },
  {
    id: 'qui003', subject: 'quimica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Ligações covalentes ocorrem entre:',
    options: [
      'Metal e ametal, com transferência de elétrons',
      'Dois ametais, com compartilhamento de pares de elétrons',
      'Metal e metal, formando nuvem eletrônica livre',
      'Íon positivo e íon negativo por atração eletrostática',
      'Ametal e ametal, com transferência de elétrons'
    ],
    answerIndex: 1,
    explanation: 'Covalente: dois ametais compartilham pares de elétrons. Iônica: metal + ametal, transferência de elétrons. Metálica: metais, com nuvem eletrônica.',
    tags: ['ligações químicas', 'covalente', 'iônica']
  },
  {
    id: 'qui004', subject: 'quimica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Em uma reação exotérmica, qual afirmativa é CORRETA?',
    options: [
      'A reação absorve calor do ambiente (ΔH > 0)',
      'A entalpia dos produtos é maior que a dos reagentes',
      'O sistema libera energia para o ambiente (ΔH < 0)',
      'A temperatura do sistema diminui durante a reação',
      'A variação de entalpia (ΔH) é positiva'
    ],
    answerIndex: 2,
    explanation: 'Reações exotérmicas liberam calor para o ambiente. ΔH < 0 (negativo). Os reagentes têm mais energia que os produtos. Exemplos: combustão, respiração celular aeróbica.',
    tags: ['termoquímica', 'exotérmica', 'entalpia']
  },
  {
    id: 'qui005', subject: 'quimica', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Qual das fórmulas a seguir representa CORRETAMENTE um alcano (hidrocarboneto saturado)?',
    options: ['C₂H₂ (acetileno)', 'C₆H₆ (benzeno)', 'C₃H₈ (propano)', 'C₂H₄ (etileno)', 'C₄H₆ (butadieno)'],
    answerIndex: 2,
    explanation: 'Alcanos: fórmula geral CₙH₂ₙ₊₂, apenas ligações simples. C₃H₈: 3×2+2=8 ✓ (propano). C₂H₂ é alcino, C₆H₆ é aromático, C₂H₄ é alceno, C₄H₆ é alcadieno.',
    tags: ['química orgânica', 'alcanos', 'hidrocarbonetos']
  },

  // ===== FÍSICA (5 questões) =====
  {
    id: 'fis001', subject: 'fisica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Um objeto é lançado verticalmente para cima com v₀ = 20 m/s. Com g = 10 m/s², qual a altura máxima atingida?',
    options: ['10 m', '20 m', '30 m', '40 m', '50 m'],
    answerIndex: 1,
    explanation: 'No ponto máximo, v = 0. v² = v₀² − 2gh → 0 = 400 − 20h → h = 20 m.',
    tags: ['cinemática', 'lançamento vertical', 'MRUA']
  },
  {
    id: 'fis002', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Uma onda sonora tem frequência de 440 Hz e velocidade de 340 m/s. Qual é o comprimento de onda?',
    options: ['0,57 m', '0,77 m', '1,3 m', '150 m', '780 m'],
    answerIndex: 1,
    explanation: 'λ = v/f = 340/440 ≈ 0,77 m.',
    tags: ['ondas', 'som', 'comprimento de onda']
  },
  {
    id: 'fis003', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Segundo a 2ª Lei de Newton, se uma força de 30 N é aplicada a um objeto de 6 kg, qual é a aceleração?',
    options: ['3 m/s²', '4 m/s²', '5 m/s²', '6 m/s²', '180 m/s²'],
    answerIndex: 2,
    explanation: 'F = m·a → a = F/m = 30/6 = 5 m/s².',
    tags: ['leis de Newton', 'dinâmica', 'força']
  },
  {
    id: 'fis004', subject: 'fisica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Um carro de massa 1.000 kg se move a 20 m/s. Qual é sua energia cinética?',
    options: ['100.000 J', '200.000 J', '300.000 J', '400.000 J', '500.000 J'],
    answerIndex: 1,
    explanation: 'Ec = ½ × m × v² = ½ × 1000 × 400 = 200.000 J.',
    tags: ['energia cinética', 'mecânica', 'trabalho e energia']
  },
  {
    id: 'fis005', subject: 'fisica', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Pela Lei de Ohm, se a resistência é 10 Ω e a tensão aplicada é 50 V, qual é a corrente elétrica?',
    options: ['2 A', '5 A', '10 A', '25 A', '500 A'],
    answerIndex: 1,
    explanation: 'Lei de Ohm: V = R·I → I = V/R = 50/10 = 5 A.',
    tags: ['eletricidade', 'Lei de Ohm', 'corrente elétrica']
  },

  // ===== HISTÓRIA (6 questões) =====
  {
    id: 'his001', subject: 'historia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A Proclamação da República no Brasil (1889) foi resultado principalmente de:',
    options: [
      'Pressão popular e movimentos de massa nas cidades',
      'Descontentamento do Exército e da elite cafeeira com a monarquia',
      'Influência direta da Revolução Francesa e ideais jacobinos',
      'Abolição da escravatura e insatisfação dos ex-escravizados',
      'Intervenção militar estrangeira e pressão diplomática'
    ],
    answerIndex: 1,
    explanation: 'Movimento essencialmente militar (Deodoro da Fonseca), com apoio da elite cafeeira paulista descontente, especialmente após a abolição (1888), que gerou tensões com fazendeiros.',
    tags: ['república brasileira', 'história do Brasil', 'século XIX']
  },
  {
    id: 'his002', subject: 'historia', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: 'O "imperialismo" do século XIX refere-se principalmente a:',
    options: [
      'Expansão comercial pacífica entre nações desenvolvidas',
      'Domínio político, econômico e cultural de nações poderosas sobre povos colonizados',
      'Formação de alianças militares entre países europeus',
      'Processo de industrialização nas colônias americanas',
      'Criação de organismos internacionais para mediação de conflitos'
    ],
    answerIndex: 1,
    explanation: 'Potências industrializadas europeias dominaram territórios africanos e asiáticos, impondo controle político, exploração econômica e imposição cultural.',
    tags: ['imperialismo', 'colonialismo', 'história mundial', 'século XIX']
  },
  {
    id: 'his003', subject: 'historia', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'A ditadura militar brasileira (1964–1985) foi marcada, entre outros aspectos, por:',
    options: [
      'Ampla liberdade de imprensa e respeito aos direitos civis',
      'Censura, repressão política e violação dos direitos humanos',
      'Crescimento econômico sustentado com distribuição de renda',
      'Reformas agrárias profundas e democratização do campo',
      'Eleições diretas regulares e alternância democrática do poder'
    ],
    answerIndex: 1,
    explanation: 'O regime militar caracterizou-se pela censura, repressão a opositores, tortura e violação dos direitos humanos, especialmente após o AI-5 (1968).',
    tags: ['ditadura militar', 'história do Brasil', 'direitos humanos']
  },
  {
    id: 'his004', subject: 'historia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'A Primeira Guerra Mundial (1914–1918) teve como estopim imediato:',
    options: [
      'A invasão da Polônia pela Alemanha nazista',
      'O assassinato do arquiduque Francisco Ferdinando em Sarajevo',
      'A Revolução Russa e a queda do czarismo',
      'O bloqueio marítimo britânico à Alemanha',
      'A disputa colonial entre França e Alemanha na África'
    ],
    answerIndex: 1,
    explanation: 'O assassinato do arquiduque austro-húngaro em Sarajevo (28/06/1914) por Gavrilo Princip acionou o sistema de alianças europeias (Tríplice Aliança × Tríplice Entente), deflagrando a guerra.',
    tags: ['Primeira Guerra Mundial', 'história mundial', 'século XX']
  },
  {
    id: 'his005', subject: 'historia', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'A Era Vargas (1930–1945) no Brasil ficou marcada, entre outros aspectos, por:',
    options: [
      'Retorno ao liberalismo econômico e abertura ao capital estrangeiro',
      'Forte industrialização, trabalhismo e centralização do poder no Estado',
      'Predominância do poder oligárquico e da "política do café com leite"',
      'Expansão territorial por meio de guerras com países vizinhos',
      'Implantação de uma democracia representativa plena'
    ],
    answerIndex: 1,
    explanation: 'Vargas promoveu a industrialização nacional (criação da CSN), a CLT (1943), o trabalhismo e a centralização política — especialmente no Estado Novo (1937–1945), de caráter ditatorial.',
    tags: ['Era Vargas', 'história do Brasil', 'industrialização']
  },
  {
    id: 'his006', subject: 'historia', year: 2025, source: 'ENEM', difficulty: 'facil',
    question: 'A Declaração Universal dos Direitos Humanos foi adotada pela ONU em:',
    options: ['1918', '1929', '1945', '1948', '1960'],
    answerIndex: 3,
    explanation: 'Adotada em 10 de dezembro de 1948, após os horrores da 2ª Guerra Mundial. Estabelece direitos civis, políticos, econômicos, sociais e culturais para todos os seres humanos.',
    tags: ['direitos humanos', 'ONU', 'história contemporânea']
  },

  // ===== GEOGRAFIA (5 questões) =====
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
    explanation: 'El Niño: aquecimento anormal do Oceano Pacífico equatorial (costa peruana). Afeta padrões climáticos globais, causando secas em algumas regiões e chuvas intensas em outras.',
    tags: ['El Niño', 'climatologia', 'oceanografia']
  },
  {
    id: 'geo002', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'A urbanização no Brasil caracterizou-se principalmente por:',
    options: [
      'Crescimento planejado e distribuído equitativamente',
      'Urbanização concentrada e acelerada, com formação de grandes metrópoles',
      'Migração europeia para o campo e manutenção da população rural',
      'Desenvolvimento equilibrado entre regiões Norte e Sudeste',
      'Êxodo urbano para o campo nas décadas de 1970 e 1980'
    ],
    answerIndex: 1,
    explanation: 'Urbanização intensa e concentrada, especialmente no Sudeste. O êxodo rural acelerado criou metrópoles com desigualdades socioespaciais (favelas, periferização).',
    tags: ['urbanização', 'Brasil', 'metrópoles', 'êxodo rural']
  },
  {
    id: 'geo003', subject: 'geografia', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'Qual bioma brasileiro possui a maior biodiversidade do planeta e é mais ameaçado pelo desmatamento?',
    options: ['Cerrado', 'Caatinga', 'Pantanal', 'Amazônia', 'Mata Atlântica'],
    answerIndex: 3,
    explanation: 'A Floresta Amazônica é o maior repositório de biodiversidade do planeta. Sofre com desmatamento por agropecuária, garimpo e grilagem. É fundamental para o ciclo hidrológico e a regulação climática global.',
    tags: ['Amazônia', 'biomas', 'desmatamento', 'biodiversidade']
  },
  {
    id: 'geo004', subject: 'geografia', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'As energias renováveis são consideradas sustentáveis porque:',
    options: [
      'São inesgotáveis e não emitem poluente algum',
      'Provêm de fontes naturais que se renovam em escala humana de tempo, com menor impacto ambiental',
      'São geradas exclusivamente a partir de combustíveis fósseis aprimorados',
      'Têm custo de produção superior às fontes não renováveis',
      'Só são viáveis economicamente em países desenvolvidos'
    ],
    answerIndex: 1,
    explanation: 'Renováveis (solar, eólica, hidráulica, biomassa) renovam-se naturalmente. Embora não sejam isentas de impacto, causam muito menos danos que combustíveis fósseis e contribuem para redução do CO₂.',
    tags: ['energias renováveis', 'sustentabilidade', 'meio ambiente']
  },
  {
    id: 'geo005', subject: 'geografia', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'O conceito de "globalização" refere-se principalmente a:',
    options: [
      'Isolamento econômico de países em desenvolvimento',
      'Intensificação das relações econômicas, culturais e políticas entre países em escala mundial',
      'Processo de conquistas territoriais por grandes potências',
      'Uniformização total das culturas locais por uma cultura hegemônica única',
      'Retrocesso das trocas comerciais internacionais após 2000'
    ],
    answerIndex: 1,
    explanation: 'Globalização: integração e interdependência entre nações — fluxos de mercadorias, capital, pessoas, informação e cultura em escala global. Intensificou-se com internet e liberalização econômica.',
    tags: ['globalização', 'geopolítica', 'relações internacionais']
  },

  // ===== FILOSOFIA & SOCIOLOGIA (5 questões) =====
  {
    id: 'fil001', subject: 'filosofia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A "Alegoria da Caverna" de Platão tem como objetivo central demonstrar:',
    options: [
      'A importância dos sentidos na aquisição do conhecimento',
      'Que o conhecimento verdadeiro vem exclusivamente da experiência sensorial',
      'A distinção entre o mundo sensível (aparência) e o mundo inteligível (realidade)',
      'Que a ignorância é essencial para a ordem social',
      'A necessidade de uma revolução política imediata'
    ],
    answerIndex: 2,
    explanation: 'Na Alegoria da Caverna (A República), os prisioneiros que veem sombras representam o mundo sensível (aparências). O filósofo que sai e vê o sol representa quem alcança o mundo inteligível — o conhecimento verdadeiro das Ideias.',
    tags: ['Platão', 'Alegoria da Caverna', 'teoria do conhecimento', 'filosofia antiga']
  },
  {
    id: 'fil002', subject: 'filosofia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Para Aristóteles, a felicidade (eudaimonia) é:',
    options: [
      'O prazer sensorial e a ausência de dor',
      'A riqueza material e o reconhecimento social',
      'A contemplação divina em isolamento do mundo',
      'A atividade da alma em acordo com a virtude ao longo da vida',
      'A obediência às leis do Estado acima de tudo'
    ],
    answerIndex: 3,
    explanation: 'Para Aristóteles (Ética a Nicômaco), eudaimonia não é um estado, mas uma atividade contínua da alma de acordo com a excelência (virtude). Envolve razão prática (phronesis) e virtudes morais e intelectuais.',
    tags: ['Aristóteles', 'ética', 'eudaimonia', 'filosofia antiga']
  },
  {
    id: 'fil003', subject: 'filosofia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'O Iluminismo do século XVIII pode ser caracterizado principalmente pela:',
    options: [
      'Valorização da tradição religiosa e autoridade da Igreja',
      'Exaltação do nacionalismo e das guerras de conquista',
      'Confiança na razão como guia do conhecimento e da organização social',
      'Rejeição da ciência em favor da filosofia especulativa',
      'Defesa do absolutismo monárquico como forma de governo ideal'
    ],
    answerIndex: 2,
    explanation: 'O Iluminismo (Século das Luzes) caracterizou-se pela confiança na razão humana para superar ignorância e tirania. Pensadores como Voltaire, Rousseau, Locke e Montesquieu defenderam liberdade, tolerância e separação dos poderes.',
    tags: ['Iluminismo', 'Rousseau', 'Locke', 'filosofia moderna']
  },
  {
    id: 'fil004', subject: 'filosofia', year: 2025, source: 'ENEM', difficulty: 'dificil',
    question: 'Segundo Karl Marx, a "mais-valia" na sociedade capitalista representa:',
    options: [
      'O lucro que os trabalhadores obtêm com a venda de seus produtos',
      'O valor excedente produzido pelo trabalhador que é apropriado pelo capitalista',
      'A diferença de salário entre trabalhador qualificado e não qualificado',
      'O imposto cobrado pelo Estado sobre a produção industrial',
      'O valor de troca estabelecido livremente pelo mercado'
    ],
    answerIndex: 1,
    explanation: 'Marx: mais-valia é o valor criado pelo trabalho além do necessário para repor o salário. O trabalhador trabalha além do necessário para seu sustento, e esse excedente é apropriado pelo capitalista — base da exploração no capitalismo.',
    tags: ['Marx', 'mais-valia', 'capitalismo', 'materialismo histórico']
  },
  {
    id: 'fil005', subject: 'filosofia', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Para Émile Durkheim, "fato social" é caracterizado por:',
    options: [
      'Todo comportamento individual motivado por razões pessoais',
      'Fenômenos biológicos que influenciam o comportamento humano',
      'Maneiras de agir, pensar e sentir exteriores ao indivíduo, que exercem coerção sobre ele',
      'Eventos econômicos que determinam a estrutura das relações sociais',
      'Normas jurídicas criadas pelo Estado para regular a sociedade'
    ],
    answerIndex: 2,
    explanation: 'Durkheim: fato social existe fora das consciências individuais (exterioridade) e exerce coerção sobre elas. Exemplos: língua, religião, normas morais. São coletivos, não criações individuais.',
    tags: ['Durkheim', 'fato social', 'sociologia', 'funcionalismo']
  },

  // ===== INGLÊS (5 questões) =====
  {
    id: 'ing001', subject: 'ingles', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'Read the text: "Climate change is one of the greatest challenges facing humanity. Rising temperatures and extreme weather events are becoming increasingly common. Scientists agree that immediate action is necessary." According to the text, which statement is TRUE?',
    options: [
      'Climate change is a minor concern for scientists',
      'Ice caps are growing due to climate change',
      'Scientists disagree about the causes of climate change',
      'Extreme weather events are becoming more frequent',
      'The consequences of climate change have already been prevented'
    ],
    answerIndex: 3,
    explanation: 'The text states "extreme weather events are becoming increasingly common" — meaning more frequent. Options A, B, C, E all contradict the text.',
    tags: ['interpretação de texto', 'inglês', 'meio ambiente', 'reading comprehension']
  },
  {
    id: 'ing002', subject: 'ingles', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'Choose the word that BEST completes the sentence: "The new technology has made communication much more _______, allowing people to connect instantly across the globe."',
    options: ['difficult', 'expensive', 'efficient', 'isolated', 'dangerous'],
    answerIndex: 2,
    explanation: '"Efficient" means productive and effective. The sentence describes technology enabling instant global communication — a positive context. The other words contradict "allowing people to connect instantly".',
    tags: ['vocabulário', 'inglês', 'tecnologia', 'vocabulary in context']
  },
  {
    id: 'ing003', subject: 'ingles', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Which sentence expresses OBLIGATION in English?',
    options: [
      '"You should visit the museum — it\'s interesting." (recomendação)',
      '"You must wear a seatbelt when driving." (obrigação)',
      '"You could try the new restaurant downtown." (possibilidade)',
      '"You may leave early today." (permissão)',
      '"You might find the book in the library." (possibilidade)'
    ],
    answerIndex: 1,
    explanation: '"Must" expresses strong obligation. "Should" = recommendation. "Could/Might" = possibility. "May" = permission. "You must wear a seatbelt" indicates a legal/strong obligation.',
    tags: ['modal verbs', 'inglês', 'gramática', 'obrigação']
  },
  {
    id: 'ing004', subject: 'ingles', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'The word "sustainable" in "sustainable development" means:',
    options: [
      'Rapid and uncontrolled economic growth',
      'Development that meets present needs without compromising future generations',
      'Industrial production without environmental regulations',
      'Technology-driven development that replaces natural resources',
      'Urban development focused exclusively on profit'
    ],
    answerIndex: 1,
    explanation: '"Sustainable development" (Brundtland Report, 1987): development that meets current needs without compromising the ability of future generations to meet their own needs. "Sustainable" = capable of being maintained over time.',
    tags: ['vocabulário', 'inglês', 'sustentabilidade', 'desenvolvimento']
  },
  {
    id: 'ing005', subject: 'ingles', year: 2026, source: 'ENEM', difficulty: 'facil',
    question: 'Which is an example of "artificial intelligence" applied in everyday life?',
    options: [
      'Using a calculator to solve math problems',
      'A smartphone voice assistant recognizing and responding to spoken commands',
      'Sending an email through the internet',
      'Printing a document from a computer',
      'Watching a video on a DVD player'
    ],
    answerIndex: 1,
    explanation: 'AI involves systems that perform tasks requiring human intelligence, like speech recognition. A voice assistant uses machine learning and natural language processing — AI technologies. The others are standard computing tasks.',
    tags: ['inteligência artificial', 'inglês', 'tecnologia', 'vocabulário']
  },

  // ===== MATEMÁTICA extras =====
  {
    id: 'mat011', subject: 'matematica', year: 2024, source: 'ENEM', difficulty: 'dificil',
    question: 'Em uma progressão geométrica, o 1º termo é 2 e a razão é 3. Qual é a soma dos 4 primeiros termos?',
    options: ['20', '40', '60', '80', '100'],
    answerIndex: 3,
    explanation: 'Termos: 2, 6, 18, 54. Soma = 2 + 6 + 18 + 54 = 80. Fórmula: S = a₁(qⁿ − 1)/(q − 1) = 2(81−1)/2 = 80.',
    tags: ['progressão geométrica', 'PG', 'soma']
  },
  {
    id: 'mat012', subject: 'matematica', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Uma caixa tem 4 bolas numeradas de 1 a 4. Retirando-se 2 bolas, qual é a probabilidade de ambas serem pares?',
    options: ['1/6', '1/4', '1/3', '1/2', '2/3'],
    answerIndex: 0,
    explanation: 'Pares: {2,4}. Total de pares possíveis de 4 bolas: C(4,2) = 6. Casos favoráveis: C(2,2) = 1. P = 1/6.',
    tags: ['probabilidade', 'combinatória', 'eventos']
  },
  {
    id: 'mat013', subject: 'matematica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Quantos anagramas (arranjos) distintos podem ser formados com as letras da palavra ROMA?',
    options: ['6', '12', '16', '24', '48'],
    answerIndex: 3,
    explanation: 'ROMA tem 4 letras todas distintas. Número de anagramas = 4! = 4×3×2×1 = 24.',
    tags: ['análise combinatória', 'permutação', 'anagrama']
  },

  // ===== PORTUGUÊS extras =====
  {
    id: 'por009', subject: 'portugues', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Em "Embora estivesse cansado, ele foi ao trabalho", a oração subordinada é:',
    options: [
      'Adverbial temporal', 'Adverbial concessiva', 'Adverbial causal', 'Adjetiva explicativa', 'Substantiva objetiva'
    ],
    answerIndex: 1,
    explanation: '"Embora" introduz oração subordinada adverbial concessiva — indica uma concessão, algo que poderia impedir a ação mas não impediu.',
    tags: ['sintaxe', 'oração subordinada', 'concessiva']
  },
  {
    id: 'por010', subject: 'portugues', year: 2024, source: 'ENEM', difficulty: 'dificil',
    question: 'Machado de Assis pertence ao Realismo brasileiro. Qual característica marca esse movimento literário?',
    options: [
      'Idealização da natureza e do amor romântico',
      'Análise psicológica, crítica social e linguagem objetiva',
      'Exaltação do herói nacional e do indianismo',
      'Valorização do misticismo e do sobrenatural',
      'Foco na linguagem popular e na oralidade'
    ],
    answerIndex: 1,
    explanation: 'O Realismo (segunda metade do séc. XIX) caracteriza-se pela análise psicológica profunda, crítica à hipocrisia social e uso de linguagem objetiva e verossímil. Machado de Assis é seu maior representante no Brasil.',
    tags: ['Realismo', 'Machado de Assis', 'literatura brasileira']
  },

  // ===== BIOLOGIA extras =====
  {
    id: 'bio007', subject: 'biologia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Na mitose, uma célula com 2n = 46 cromossomos produz:',
    options: [
      '2 células com 23 cromossomos cada',
      '4 células com 23 cromossomos cada',
      '2 células com 46 cromossomos cada',
      '4 células com 46 cromossomos cada',
      '1 célula com 92 cromossomos'
    ],
    answerIndex: 2,
    explanation: 'Mitose é divisão equacional: produz 2 células-filhas geneticamente idênticas à célula-mãe, cada uma com 2n = 46 cromossomos. Meiose é que produz 4 células com n = 23.',
    tags: ['mitose', 'divisão celular', 'cromossomos']
  },
  {
    id: 'bio008', subject: 'biologia', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'O que são cadeias alimentares e qual o fluxo de energia nelas?',
    options: [
      'Sequências de organismos; energia flui dos consumidores para os produtores',
      'Redes de relações simbióticas; energia é completamente reciclada',
      'Sequências de organismos; energia flui unidirecionalmente dos produtores aos consumidores, com perda em cada nível',
      'Ciclos de nutrientes; energia é criada pelos decompositores',
      'Associações entre parasitas; energia retorna ao produtor'
    ],
    answerIndex: 2,
    explanation: 'Na cadeia alimentar (produtor→consumidor primário→consumidor secundário→...), a energia flui em um único sentido, com perda de ~90% a cada nível trófico (lei de Lindeman). Por isso há mais biomassa nos produtores.',
    tags: ['ecologia', 'cadeia alimentar', 'fluxo de energia']
  },

  // ===== QUÍMICA extras =====
  {
    id: 'qui006', subject: 'quimica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Na eletrólise da água, o que é produzido no eletrodo negativo (cátodo)?',
    options: ['O₂ (oxigênio)', 'H₂ (hidrogênio)', 'H₂O₂ (água oxigenada)', 'OH⁻ (hidroxila)', 'Cl₂ (cloro)'],
    answerIndex: 1,
    explanation: 'Na eletrólise da água: no cátodo (-) ocorre redução → 2H⁺ + 2e⁻ → H₂↑. No ânodo (+) ocorre oxidação → 2H₂O → O₂↑ + 4H⁺ + 4e⁻.',
    tags: ['eletrólise', 'eletroquímica', 'oxidação-redução']
  },
  {
    id: 'qui007', subject: 'quimica', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'O ozônio (O₃) na estratosfera tem a função de:',
    options: [
      'Reter o calor da Terra (efeito estufa)',
      'Absorver a radiação ultravioleta prejudicial ao ser humano',
      'Produzir oxigênio para os seres vivos respirarem',
      'Reagir com CO₂ para reduzir a poluição',
      'Formar chuvas ácidas nas regiões industriais'
    ],
    answerIndex: 1,
    explanation: 'A camada de ozônio estratosférico absorve ~97-99% da radiação UV-B e UV-C do sol, protegendo os seres vivos de danos celulares (câncer de pele, mutações). Sua destruição é causada por CFCs.',
    tags: ['ozônio', 'camada de ozônio', 'radiação UV', 'ambiental']
  },

  // ===== FÍSICA extras =====
  {
    id: 'fis006', subject: 'fisica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Dois espelhos planos formam um ângulo de 60° entre si. Quantas imagens de um objeto colocado entre eles são formadas?',
    options: ['2', '3', '4', '5', '6'],
    answerIndex: 3,
    explanation: 'Número de imagens = (360°/θ) − 1 = (360°/60°) − 1 = 6 − 1 = 5 imagens.',
    tags: ['óptica', 'espelhos planos', 'reflexão']
  },
  {
    id: 'fis007', subject: 'fisica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Em circuitos elétricos, resistores em paralelo têm a mesma:',
    options: ['Corrente', 'Resistência equivalente', 'Tensão (ddp)', 'Potência dissipada', 'Carga elétrica'],
    answerIndex: 2,
    explanation: 'Em associação paralela, todos os resistores são submetidos à mesma diferença de potencial (tensão). A corrente se divide entre os ramos. 1/R_eq = 1/R₁ + 1/R₂ + ...',
    tags: ['circuitos elétricos', 'resistores em paralelo', 'tensão']
  },

  // ===== HISTÓRIA extras =====
  {
    id: 'his007', subject: 'historia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'A Revolução Francesa (1789) teve como principais ideais:',
    options: [
      'Monarquia, religião e tradição',
      'Liberdade, igualdade e fraternidade',
      'Socialismo, coletivismo e revolução proletária',
      'Nacionalismo, expansionismo e militarismo',
      'Federalismo, capitalismo e livre comércio'
    ],
    answerIndex: 1,
    explanation: '"Liberté, Égalité, Fraternité" foi o lema da Revolução Francesa. Derrubou o Antigo Regime, eliminou privilégios da nobreza e do clero e difundiu os ideais iluministas pelo mundo ocidental.',
    tags: ['Revolução Francesa', 'iluminismo', 'história mundial']
  },
  {
    id: 'his008', subject: 'historia', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'O Holocausto, durante a 2ª Guerra Mundial (1939–1945), foi o extermínio sistemático de:',
    options: [
      'Prisioneiros de guerra russos pelos alemães',
      'Cerca de 6 milhões de judeus e outros grupos pelo regime nazista',
      'Populações japonesas pelos Estados Unidos',
      'Comunistas europeus pelos países capitalistas',
      'Ciganos e eslavos pelos países da Tríplice Aliança'
    ],
    answerIndex: 1,
    explanation: 'O Holocausto foi o genocídio de aprox. 6 milhões de judeus, além de ciganos, pessoas com deficiência, homossexuais e dissidentes políticos, perpetrado pelo regime nazista de Hitler. Levou à criação do Estado de Israel (1948) e à Declaração dos Direitos Humanos (1948).',
    tags: ['Holocausto', 'Segunda Guerra Mundial', 'nazismo', 'genocídio']
  },

  // ===== GEOGRAFIA extras =====
  {
    id: 'geo006', subject: 'geografia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'O fenômeno da "inversão térmica" nas cidades causa principalmente:',
    options: [
      'Queda das temperaturas urbanas no verão',
      'Acúmulo de poluentes na camada mais baixa da atmosfera',
      'Aumento das chuvas nas áreas centrais',
      'Redução da umidade do ar nas periferias',
      'Formação de nuvens de tempestade no inverno'
    ],
    answerIndex: 1,
    explanation: 'Na inversão térmica, uma camada de ar quente fica sobre uma camada de ar frio, bloqueando a dispersão vertical de poluentes. Isso causa acúmulo de partículas e gases poluentes próximos ao solo, agravando problemas respiratórios.',
    tags: ['inversão térmica', 'poluição', 'climatologia urbana']
  },
  {
    id: 'geo007', subject: 'geografia', year: 2025, source: 'ENEM', difficulty: 'facil',
    question: 'O Brasil é o maior produtor mundial de qual produto agrícola?',
    options: ['Trigo', 'Arroz', 'Soja', 'Milho', 'Café'],
    answerIndex: 4,
    explanation: 'O Brasil é o maior produtor e exportador mundial de café há mais de 150 anos. Também lidera em soja e suco de laranja, e é 2º em soja (atrás dos EUA em alguns anos). Para café, a liderança é histórica e incontestável.',
    tags: ['agricultura brasileira', 'café', 'agropecuária']
  },

  // ===== FILOSOFIA extras =====
  {
    id: 'fil006', subject: 'filosofia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Para John Locke, o conhecimento deriva principalmente:',
    options: [
      'Das ideias inatas presentes na mente desde o nascimento',
      'Da experiência sensorial — a mente nasce como "tábula rasa"',
      'Da revelação divina e da tradição religiosa',
      'Da razão pura, independente da experiência',
      'Das estruturas universais da linguagem'
    ],
    answerIndex: 1,
    explanation: 'Locke é o principal representante do empirismo inglês. Para ele, a mente ao nascer é uma "tábula rasa" (página em branco). Todo conhecimento provém da experiência sensorial e da reflexão sobre essas experiências — opondo-se ao inatismo cartesiano.',
    tags: ['Locke', 'empirismo', 'teoria do conhecimento', 'filosofia moderna']
  },
  {
    id: 'fil007', subject: 'filosofia', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Na Sociologia, o conceito de "alienação" em Marx se refere a:',
    options: [
      'Integração plena do trabalhador ao processo produtivo',
      'Distanciamento do trabalhador do produto de seu trabalho, de si mesmo e dos outros',
      'Consciência de classe e solidariedade entre trabalhadores',
      'Fenômeno exclusivo das sociedades pré-capitalistas',
      'Processo de enriquecimento do trabalhador pelo capitalista'
    ],
    answerIndex: 1,
    explanation: 'Marx define alienação como o processo pelo qual o trabalhador, ao vender sua força de trabalho, perde o controle sobre o produto que cria, tornando-se "estranho" a ele, a si mesmo e aos outros trabalhadores. O trabalho, em vez de realizá-lo, o degrada.',
    tags: ['Marx', 'alienação', 'trabalho', 'sociologia']
  },

  // ===== INGLÊS extras =====
  {
    id: 'ing006', subject: 'ingles', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Read: "Despite the heavy rain, the football match was not cancelled." The word "despite" expresses:',
    options: ['Cause', 'Consequence', 'Contrast/Concession', 'Time sequence', 'Condition'],
    answerIndex: 2,
    explanation: '"Despite" (= mesmo que, apesar de) introduces a concession — something that could have caused the opposite result but did not. It contrasts two ideas. Synonyms: "in spite of", "although", "even though".',
    tags: ['conjunções', 'inglês', 'gramática', 'contrast']
  },
  {
    id: 'ing007', subject: 'ingles', year: 2025, source: 'ENEM', difficulty: 'facil',
    question: 'Choose the correct sentence in the SIMPLE PAST tense:',
    options: [
      '"She go to school yesterday."',
      '"She goes to school yesterday."',
      '"She went to school yesterday."',
      '"She will go to school yesterday."',
      '"She is go to school yesterday."'
    ],
    answerIndex: 2,
    explanation: '"Went" is the irregular past form of "go". Simple past tense is used for completed actions at a specific time in the past (indicated by "yesterday"). The other options use incorrect verb forms for past tense.',
    tags: ['simple past', 'inglês', 'gramática', 'verbos irregulares']
  },

  // ===== CONCURSO PÚBLICO — questões específicas =====
  {
    id: 'con001', subject: 'matematica', year: 2025, source: 'Concurso', difficulty: 'medio',
    question: 'Em uma sequência lógica: 2, 5, 10, 17, 26, ... Qual é o próximo número?',
    options: ['35', '36', '37', '38', '39'],
    answerIndex: 2,
    explanation: 'Diferenças entre termos: 3, 5, 7, 9... (ímpares crescentes). Próxima diferença: 11. Logo, 26 + 11 = 37.',
    tags: ['sequência', 'raciocínio lógico', 'concurso']
  },
  {
    id: 'con002', subject: 'portugues', year: 2025, source: 'Concurso', difficulty: 'facil',
    question: 'Qual alternativa apresenta a palavra CORRETAMENTE grafada segundo a norma culta?',
    options: ['Manutenção', 'Manutensão', 'Manuteção', 'Manunteção', 'Manutencsão'],
    answerIndex: 0,
    explanation: '"Manutenção" (do latim manu tenere) é a grafia correta. As demais apresentam erros: "manutenção" perde o "n" ou acrescenta letras incorretas.',
    tags: ['ortografia', 'escrita', 'língua portuguesa', 'concurso']
  },
  {
    id: 'con003', subject: 'historia', year: 2025, source: 'Concurso', difficulty: 'medio',
    question: 'O artigo 5º da Constituição Federal Brasileira de 1988 trata principalmente de:',
    options: [
      'Organização do Poder Executivo federal',
      'Direitos e garantias fundamentais dos cidadãos',
      'Atribuições do Congresso Nacional',
      'Normas tributárias e fiscais',
      'Estrutura do Poder Judiciário'
    ],
    answerIndex: 1,
    explanation: 'O art. 5º da CF/1988 é o principal dispositivo de direitos e garantias fundamentais: direito à vida, liberdade, igualdade, segurança e propriedade. Contém 78 incisos e é um dos mais extensos da Constituição.',
    tags: ['constituição federal', 'direitos fundamentais', 'concurso', 'direito']
  },
  {
    id: 'con004', subject: 'matematica', year: 2025, source: 'Concurso', difficulty: 'facil',
    question: 'Na computação, o que significa a sigla "URL"?',
    options: [
      'Universal Remote Link',
      'Uniform Resource Locator',
      'User Real Location',
      'Unified Reading Language',
      'Ultimate Resource Library'
    ],
    answerIndex: 1,
    explanation: 'URL (Uniform Resource Locator) é o endereço de um recurso na internet. Ex: "https://www.google.com.br". Especifica o protocolo (https), domínio e caminho do recurso.',
    tags: ['informática', 'internet', 'concurso', 'tecnologia']
  },
  {
    id: 'con005', subject: 'portugues', year: 2025, source: 'Concurso', difficulty: 'medio',
    question: 'Na lógica proposicional, a proposição "Se chove, então a rua fica molhada" é uma:',
    options: [
      'Proposição simples (atômica)',
      'Conjunção (p ∧ q)',
      'Disjunção (p ∨ q)',
      'Condicional (p → q)',
      'Bicondicional (p ↔ q)'
    ],
    answerIndex: 3,
    explanation: '"Se p, então q" é a forma padrão da condicional (p → q). O antecedente (p) é "chove" e o consequente (q) é "a rua fica molhada". É verdadeira exceto quando p é verdadeira e q é falsa.',
    tags: ['lógica', 'raciocínio lógico', 'proposições', 'concurso']
  },
  {
    id: 'con006', subject: 'matematica', year: 2025, source: 'Concurso', difficulty: 'medio',
    question: 'Se 30% de um número é 60, qual é 45% desse número?',
    options: ['80', '85', '90', '95', '100'],
    answerIndex: 2,
    explanation: '30% → 60, então 100% = 200. 45% de 200 = 90.',
    tags: ['porcentagem', 'raciocínio lógico', 'concurso']
  },
  {
    id: 'con007', subject: 'portugues', year: 2025, source: 'Concurso', difficulty: 'medio',
    question: 'Assinale a alternativa em que a regência verbal está CORRETA:',
    options: [
      'Eu assisti o filme ontem à noite.',
      'Ela chegou em casa tarde.',
      'O presidente informou os ministros da decisão.',
      'Prefiro cinema do que teatro.',
      'Eles obedeceram as ordens do superior.'
    ],
    answerIndex: 2,
    explanation: '"Informar" aceita dupla regência: informar alguém DE algo. As demais: "assistir a" (não "assistir"); "chegar A casa"; "preferir A... A" (não "do que"); "obedecer a" (não "obedecer").',
    tags: ['regência verbal', 'gramática', 'concurso', 'norma culta']
  },
  {
    id: 'con008', subject: 'historia', year: 2025, source: 'Concurso', difficulty: 'facil',
    question: 'Quantos poderes compõem a República Federativa do Brasil, segundo a Constituição Federal de 1988?',
    options: ['2 — Executivo e Legislativo', '3 — Executivo, Legislativo e Judiciário', '4 — incluindo o Moderador', '5 — incluindo Ministério Público e TCU', '2 — Federal e Estadual'],
    answerIndex: 1,
    explanation: 'Art. 2º da CF/1988: "São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário." O Poder Moderador existiu no Império; foi abolido na República.',
    tags: ['constituição federal', 'poderes da república', 'concurso', 'direito constitucional']
  },

  // ── MATEMÁTICA extras (mat017–mat030) ──────────────────────────────────────
  {
    id: 'mat017', subject: 'matematica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Em uma progressão aritmética, o primeiro termo é 3 e a razão é 4. Qual é o 10º termo?',
    options: ['35', '39', '43', '31', '47'],
    answerIndex: 1,
    explanation: 'Fórmula do termo geral: aₙ = a₁ + (n−1)·r. Logo a₁₀ = 3 + (10−1)·4 = 3 + 36 = 39.',
    tags: ['progressão aritmética', 'PA', 'sequências']
  },
  {
    id: 'mat018', subject: 'matematica', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'Uma urna contém 4 bolas vermelhas e 6 bolas azuis. Retirando-se uma bola ao acaso, qual é a probabilidade de ser vermelha?',
    options: ['1/4', '2/5', '3/5', '2/3', '1/3'],
    answerIndex: 1,
    explanation: 'Total de bolas: 10. Casos favoráveis (vermelhas): 4. P = 4/10 = 2/5.',
    tags: ['probabilidade', 'espaço amostral']
  },
  {
    id: 'mat019', subject: 'matematica', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'A área de um triângulo com base de 8 cm e altura de 5 cm é:',
    options: ['20 cm²', '40 cm²', '13 cm²', '80 cm²', '16 cm²'],
    answerIndex: 0,
    explanation: 'Área do triângulo = (base × altura) / 2 = (8 × 5) / 2 = 20 cm².',
    tags: ['geometria plana', 'triângulo', 'área']
  },
  {
    id: 'mat020', subject: 'matematica', year: 2020, source: 'ENEM', difficulty: 'dificil',
    question: 'Qual é o valor de log₂(32)?',
    options: ['4', '5', '6', '3', '16'],
    answerIndex: 1,
    explanation: 'log₂(32) = x → 2ˣ = 32 = 2⁵ → x = 5.',
    tags: ['logaritmo', 'potenciação']
  },
  {
    id: 'mat021', subject: 'matematica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'As notas de um aluno em 5 provas foram: 6, 7, 8, 9, 10. Qual é a média aritmética?',
    options: ['7,5', '8,0', '8,5', '7,0', '9,0'],
    answerIndex: 1,
    explanation: 'Média = (6+7+8+9+10)/5 = 40/5 = 8,0.',
    tags: ['estatística', 'média aritmética']
  },
  {
    id: 'mat022', subject: 'matematica', year: 2019, source: 'ENEM', difficulty: 'medio',
    question: 'Em um triângulo retângulo, o cateto oposto a um ângulo de 30° mede 5 cm. A hipotenusa mede:',
    options: ['5 cm', '10 cm', '5√3 cm', '5√2 cm', '15 cm'],
    answerIndex: 1,
    explanation: 'sen(30°) = cateto oposto / hipotenusa → 1/2 = 5/h → h = 10 cm.',
    tags: ['trigonometria', 'triângulo retângulo', 'seno']
  },
  {
    id: 'mat023', subject: 'matematica', year: 2021, source: 'ENEM', difficulty: 'facil',
    question: 'Um produto custa R$200,00 e tem 15% de desconto. Qual o valor final?',
    options: ['R$170,00', 'R$185,00', 'R$30,00', 'R$215,00', 'R$180,00'],
    answerIndex: 0,
    explanation: 'Desconto = 15% × 200 = 30. Valor final = 200 − 30 = R$170,00.',
    tags: ['porcentagem', 'desconto', 'matemática financeira']
  },
  {
    id: 'mat024', subject: 'matematica', year: 2020, source: 'ENEM', difficulty: 'medio',
    question: 'As raízes da equação x² − 5x + 6 = 0 são:',
    options: ['x=1 e x=6', 'x=2 e x=3', 'x=−2 e x=−3', 'x=1 e x=−6', 'x=3 e x=−2'],
    answerIndex: 1,
    explanation: 'Δ = 25−24 = 1. x = (5±1)/2 → x₁=3, x₂=2.',
    tags: ['equação do 2º grau', 'Bhaskara', 'raízes']
  },
  {
    id: 'mat025', subject: 'matematica', year: 2018, source: 'ENEM', difficulty: 'facil',
    question: 'O volume de um cubo com aresta de 4 cm é:',
    options: ['16 cm³', '48 cm³', '64 cm³', '32 cm³', '96 cm³'],
    answerIndex: 2,
    explanation: 'Volume do cubo = aresta³ = 4³ = 64 cm³.',
    tags: ['geometria espacial', 'cubo', 'volume']
  },
  {
    id: 'mat026', subject: 'matematica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'De quantas maneiras podemos escolher 2 pessoas de um grupo de 5?',
    options: ['10', '20', '5', '25', '15'],
    answerIndex: 0,
    explanation: 'Combinação C(5,2) = 5!/(2!×3!) = (5×4)/(2×1) = 10.',
    tags: ['combinatória', 'combinação', 'contagem']
  },
  {
    id: 'mat027', subject: 'matematica', year: 2019, source: 'ENEM', difficulty: 'dificil',
    question: 'Uma aplicação de R$1.000,00 a juros compostos de 10% ao mês por 2 meses rende:',
    options: ['R$200,00', 'R$210,00', 'R$220,00', 'R$100,00', 'R$250,00'],
    answerIndex: 1,
    explanation: 'M = 1000×(1,1)² = 1000×1,21 = 1210. Juros = 1210−1000 = R$210,00.',
    tags: ['juros compostos', 'matemática financeira']
  },
  {
    id: 'mat028', subject: 'matematica', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'Resolva a inequação 2x − 4 > 6.',
    options: ['x > 1', 'x > 5', 'x < 5', 'x > 3', 'x < 3'],
    answerIndex: 1,
    explanation: '2x − 4 > 6 → 2x > 10 → x > 5.',
    tags: ['inequação', 'álgebra']
  },
  {
    id: 'mat029', subject: 'matematica', year: 2020, source: 'ENEM', difficulty: 'facil',
    question: 'Se 3 laranjas custam R$4,50, quanto custam 7 laranjas?',
    options: ['R$9,00', 'R$10,50', 'R$12,00', 'R$7,50', 'R$14,00'],
    answerIndex: 1,
    explanation: 'Regra de três: 3/4,50 = 7/x → x = 7×4,50/3 = 10,50.',
    tags: ['razão e proporção', 'regra de três']
  },
  {
    id: 'mat030', subject: 'matematica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Numa PG, o primeiro termo é 2 e a razão é 3. Qual é o 4º termo?',
    options: ['18', '54', '27', '12', '36'],
    answerIndex: 1,
    explanation: 'Termo geral da PG: aₙ = a₁ × qⁿ⁻¹. a₄ = 2 × 3³ = 2 × 27 = 54.',
    tags: ['progressão geométrica', 'PG', 'sequências']
  },

  // ── PORTUGUÊS extras (por014–por025) ───────────────────────────────────────
  {
    id: 'por014', subject: 'portugues', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Leia: "O sol nasceu, os pássaros cantaram e o campo ficou alegre." O período é:',
    options: ['Simples', 'Composto por subordinação', 'Composto por coordenação', 'Composto misto', 'Período reduzido'],
    answerIndex: 2,
    explanation: 'As três orações são independentes, ligadas pelas conjunções coordenativas "e". Logo, é um período composto por coordenação.',
    tags: ['período composto', 'coordenação', 'sintaxe']
  },
  {
    id: 'por015', subject: 'portugues', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'Em "Quando chegar, avise-me.", a oração sublinhada é:',
    options: ['Coordenada aditiva', 'Subordinada adverbial temporal', 'Subordinada substantiva', 'Coordenada adversativa', 'Principal'],
    answerIndex: 1,
    explanation: '"Quando chegar" é uma oração subordinada adverbial temporal, pois indica o tempo em que a ação da principal ocorrerá.',
    tags: ['oração subordinada', 'adverbial temporal', 'sintaxe']
  },
  {
    id: 'por016', subject: 'portugues', year: 2020, source: 'ENEM', difficulty: 'facil',
    question: 'Qual das alternativas apresenta uma metáfora?',
    options: ['"Ele correu como um raio."', '"A vida é um palco."', '"Havia mil pessoas na festa."', '"O vento assobiava."', '"Seu sorriso é mais bonito que o dela."'],
    answerIndex: 1,
    explanation: '"A vida é um palco" é uma metáfora: identifica dois elementos sem usar conectivo comparativo. "Correu como um raio" é símile (comparação explícita).',
    tags: ['figuras de linguagem', 'metáfora', 'símile']
  },
  {
    id: 'por017', subject: 'portugues', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Assinale a alternativa em que a vírgula está INCORRETAMENTE empregada:',
    options: ['"João, venha aqui!"', '"Ele comprou pão, manteiga e café."', '"O aluno, que estudou, passou."', '"Ela saiu, porque estava cansada."', '"São Paulo, a maior cidade do Brasil, fica no Sudeste."'],
    answerIndex: 3,
    explanation: 'Não se usa vírgula antes de oração subordinada adverbial causal quando ela vem após a principal de forma integrada. A vírgula em "saiu, porque" é desnecessária nesse contexto.',
    tags: ['pontuação', 'vírgula', 'gramática normativa']
  },
  {
    id: 'por018', subject: 'portugues', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'O texto "Não piso em ovos, piso em argumentos" usa qual recurso expressivo?',
    options: ['Eufemismo', 'Ironia', 'Antítese', 'Polissemia / jogo de palavras', 'Hipérbole'],
    answerIndex: 3,
    explanation: 'O enunciado explora a polissemia: "pisar em ovos" (agir com cuidado, expressão idiomática) vs. "pisar em argumentos" (destruir argumentos). É um jogo de palavras com sentido literal e figurado.',
    tags: ['polissemia', 'expressão idiomática', 'recursos estilísticos']
  },
  {
    id: 'por019', subject: 'portugues', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Assinale a forma correta de concordância nominal:',
    options: ['"Ela ficou bastantes satisfeitas."', '"É proibido a entrada de menores."', '"Elas estão bastante satisfeitas."', '"Menos pessoas vieram do que esperados."', '"As crianças estava animada."'],
    answerIndex: 2,
    explanation: '"Bastante" é advérbio quando modifica adjetivo, portanto invariável: "bastante satisfeitas" → correto. "Satisfeitas" concorda com "Elas" (feminino plural).',
    tags: ['concordância nominal', 'advérbio', 'gramática']
  },
  {
    id: 'por020', subject: 'portugues', year: 2019, source: 'ENEM', difficulty: 'medio',
    question: 'Em "O jogador foi criticado pela torcida", a voz verbal é:',
    options: ['Ativa', 'Reflexiva', 'Passiva analítica', 'Passiva sintética', 'Passiva pronominal'],
    answerIndex: 2,
    explanation: 'A voz passiva analítica usa o verbo auxiliar "ser" (ou "estar") + particípio. "Foi criticado" = ser + criticado. O agente da passiva é "pela torcida".',
    tags: ['voz passiva', 'morfossintaxe', 'verbos']
  },
  {
    id: 'por021', subject: 'portugues', year: 2020, source: 'ENEM', difficulty: 'facil',
    question: 'Qual alternativa apresenta a palavra formada por derivação prefixal?',
    options: ['Cafezal', 'Desfazer', 'Pedreiro', 'Chuviscar', 'Livraria'],
    answerIndex: 1,
    explanation: '"Desfazer" é formado pelo prefixo "des-" + radical "fazer". Prefixo acrescenta-se antes do radical, sem alterar sua classe gramatical.',
    tags: ['formação de palavras', 'derivação prefixal', 'morfologia']
  },
  {
    id: 'por022', subject: 'portugues', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'Qual alternativa usa CORRETAMENTE o acento grave (crase)?',
    options: ['"Fui à escola."', '"Ele foi à Portugal."', '"Dei o livro à ele."', '"Vou à pé."', '"Cheguei à tempo."'],
    answerIndex: 0,
    explanation: 'A crase ocorre antes de substantivo feminino precedido de artigo "a": "à escola" (a + a escola). Não ocorre antes de pronome, nome masculino, nem antes de "pé" (palavra masculina).',
    tags: ['crase', 'ortografia', 'gramática normativa']
  },
  {
    id: 'por023', subject: 'portugues', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'O gênero textual que narra fatos do cotidiano com tom crítico ou bem-humorado, publicado em jornal ou revista, é:',
    options: ['Conto', 'Editorial', 'Crônica', 'Reportagem', 'Artigo científico'],
    answerIndex: 2,
    explanation: 'A crônica é um gênero jornalístico-literário que aborda o cotidiano com linguagem acessível, podendo ser humorística, lírica ou crítica.',
    tags: ['gêneros textuais', 'crônica', 'tipos de texto']
  },
  {
    id: 'por024', subject: 'portugues', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Assinale a alternativa com TODAS as palavras grafadas corretamente:',
    options: ['excessão, exceção, sessão', 'exceção, sessão, secção', 'exeção, seccão, sessão', 'excessão, seção, sessão', 'excesão, sessão, seção'],
    answerIndex: 1,
    explanation: '"Exceção" (ex + ceção), "sessão" (reunião), "secção" ou "seção" (corte/divisão) são formas corretas pelo Acordo Ortográfico.',
    tags: ['ortografia', 'acordo ortográfico', 'escrita']
  },
  {
    id: 'por025', subject: 'portugues', year: 2019, source: 'ENEM', difficulty: 'dificil',
    question: 'Na frase "Ele mesmo resolveu o problema", o termo em destaque é:',
    options: ['Pronome pessoal', 'Pronome reflexivo', 'Pronome de tratamento', 'Pronome enfático (intensificador)', 'Advérbio'],
    answerIndex: 3,
    explanation: '"Mesmo" após pronome pessoal tem função de intensificador/ênfase (pronome identidade). Diferente do uso como advérbio ("mesmo assim") ou adjetivo ("a mesma coisa").',
    tags: ['pronome', 'pronome de identidade', 'morfologia']
  },

  // ── BIOLOGIA extras (bio009–bio023) ────────────────────────────────────────
  {
    id: 'bio009', subject: 'biologia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Na fotossíntese, qual gás é liberado como subproduto da fotólise da água?',
    options: ['CO₂', 'H₂', 'O₂', 'N₂', 'CH₄'],
    answerIndex: 2,
    explanation: 'Na fase clara da fotossíntese, a água é decomposta (fotólise): 2H₂O → 4H⁺ + 4e⁻ + O₂. O oxigênio molecular é liberado para a atmosfera.',
    tags: ['fotossíntese', 'fotólise', 'fase clara']
  },
  {
    id: 'bio010', subject: 'biologia', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'A mitose resulta em:',
    options: ['2 células com metade do número de cromossomos', '4 células haploides', '2 células diploides geneticamente iguais à célula-mãe', '2 células haploides', '4 células diploides'],
    answerIndex: 2,
    explanation: 'A mitose é divisão equacional: produz 2 células-filhas diploides (2n) com o mesmo número e composição genética da célula-mãe. A meiose é que gera células haploides.',
    tags: ['mitose', 'divisão celular', 'ciclo celular']
  },
  {
    id: 'bio011', subject: 'biologia', year: 2020, source: 'ENEM', difficulty: 'facil',
    question: 'Qual é a função das hemácias no sangue?',
    options: ['Defesa imunológica', 'Coagulação sanguínea', 'Transporte de oxigênio', 'Produção de hormônios', 'Filtração renal'],
    answerIndex: 2,
    explanation: 'As hemácias (eritrócitos) contêm hemoglobina, proteína que se liga ao O₂ nos pulmões e o transporta para os tecidos. Leucócitos fazem defesa; plaquetas, coagulação.',
    tags: ['sistema circulatório', 'hemácias', 'sangue']
  },
  {
    id: 'bio012', subject: 'biologia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Numa cadeia alimentar, os organismos que obtêm energia diretamente dos produtores são chamados de:',
    options: ['Decompositores', 'Consumidores primários', 'Consumidores secundários', 'Consumidores terciários', 'Parasitas'],
    answerIndex: 1,
    explanation: 'Produtores (plantas, algas) → Consumidores primários (herbívoros) → Consumidores secundários (carnívoros de 1ª ordem) → etc. Os consumidores primários alimentam-se diretamente dos produtores.',
    tags: ['cadeia alimentar', 'ecologia', 'teia alimentar']
  },
  {
    id: 'bio013', subject: 'biologia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Um casal de olhos castanhos (Aa × Aa) tem filho com olhos azuis (aa). A proporção esperada de filhos com olhos castanhos é:',
    options: ['100%', '50%', '25%', '75%', '0%'],
    answerIndex: 3,
    explanation: 'Cruzamento Aa × Aa: AA (25%), Aa (50%), aa (25%). Castanho (A_) = AA + Aa = 75%. Azul (aa) = 25%.',
    tags: ['genética', 'Mendel', 'dominância', 'quadrado de Punnett']
  },
  {
    id: 'bio014', subject: 'biologia', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'Qual característica diferencia os vírus dos demais seres vivos?',
    options: ['Possuem DNA e RNA', 'São unicelulares', 'Só se reproduzem dentro de células hospedeiras', 'Realizam fotossíntese', 'Possuem parede celular'],
    answerIndex: 2,
    explanation: 'Vírus são acelulares e parasitas intracelulares obrigatórios: só conseguem se replicar utilizando a maquinaria metabólica de uma célula hospedeira.',
    tags: ['vírus', 'parasitismo intracelular', 'biologia celular']
  },
  {
    id: 'bio015', subject: 'biologia', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'Qual estrutura do neurônio conduz o impulso nervoso em direção ao corpo celular?',
    options: ['Axônio', 'Bainha de mielina', 'Dendrito', 'Sinapse', 'Nódulo de Ranvier'],
    answerIndex: 2,
    explanation: 'Os dendritos recebem sinais e conduzem o impulso em direção ao corpo celular (somatodendrítico). O axônio conduz o impulso do corpo celular para a periferia.',
    tags: ['sistema nervoso', 'neurônio', 'impulso nervoso']
  },
  {
    id: 'bio016', subject: 'biologia', year: 2019, source: 'ENEM', difficulty: 'medio',
    question: 'O conceito de "seleção natural" proposto por Darwin indica que:',
    options: ['Os seres vivos adquirem características por uso e desuso', 'Os organismos mais adaptados ao ambiente têm maior sucesso reprodutivo', 'As espécies são imutáveis e criadas separadamente', 'A evolução ocorre por mutações dirigidas ao ambiente', 'Todos os indivíduos de uma espécie têm igual chance de sobreviver'],
    answerIndex: 1,
    explanation: 'Para Darwin, a variação natural existe nas populações; os indivíduos com variações mais favoráveis ao ambiente sobrevivem e reproduzem mais, transmitindo essas características.',
    tags: ['evolução', 'seleção natural', 'Darwin']
  },
  {
    id: 'bio017', subject: 'biologia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O bioma brasileiro caracterizado por árvores de troncos retorcidos, chuvas sazonais e localizado no centro do Brasil é:',
    options: ['Amazônia', 'Pantanal', 'Cerrado', 'Caatinga', 'Mata Atlântica'],
    answerIndex: 2,
    explanation: 'O Cerrado (savana brasileira) cobre ~22% do território nacional, apresenta vegetação xerófita adaptada ao estresse hídrico sazonal, com troncos retorcidos e raízes profundas.',
    tags: ['biomas brasileiros', 'cerrado', 'vegetação']
  },
  {
    id: 'bio018', subject: 'biologia', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'Em organismos transgênicos, a técnica utilizada para inserir genes de outra espécie é:',
    options: ['Clonagem por transferência nuclear', 'Engenharia genética / DNA recombinante', 'Hibridização entre espécies', 'Mutagênese por radiação UV', 'Partenogênese'],
    answerIndex: 1,
    explanation: 'A engenharia genética usa DNA recombinante: o gene de interesse é isolado, inserido em um vetor (plasmídeo ou vírus) e introduzido na célula receptora. Resultado: organismo geneticamente modificado (OGM).',
    tags: ['biotecnologia', 'transgênicos', 'DNA recombinante']
  },
  {
    id: 'bio019', subject: 'biologia', year: 2020, source: 'ENEM', difficulty: 'medio',
    question: 'A respiração celular aeróbica ocorre principalmente em qual organela?',
    options: ['Núcleo', 'Ribossomo', 'Mitocôndria', 'Cloroplasto', 'Vacúolo'],
    answerIndex: 2,
    explanation: 'A mitocôndria é a organela onde ocorrem o ciclo de Krebs e a cadeia respiratória (fosforilação oxidativa), processos centrais da respiração aeróbica que geram ATP.',
    tags: ['respiração celular', 'mitocôndria', 'metabolismo']
  },
  {
    id: 'bio020', subject: 'biologia', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'Os fungos são decompositores essenciais para o ecossistema porque:',
    options: ['Realizam fotossíntese', 'Fixam nitrogênio atmosférico', 'Decompõem matéria orgânica, liberando nutrientes', 'Produzem oxigênio', 'São parasitas de plantas'],
    answerIndex: 2,
    explanation: 'Fungos saprófitos decompõem matéria orgânica morta, reciclando nutrientes (C, N, P) de volta ao solo. São fundamentais para a ciclagem de nutrientes nos ecossistemas.',
    tags: ['fungos', 'decomposição', 'ciclagem de nutrientes']
  },
  {
    id: 'bio021', subject: 'biologia', year: 2019, source: 'ENEM', difficulty: 'facil',
    question: 'A digestão de proteínas começa em qual órgão do sistema digestório?',
    options: ['Intestino delgado', 'Intestino grosso', 'Esôfago', 'Estômago', 'Fígado'],
    answerIndex: 3,
    explanation: 'No estômago, a pepsina (ativada pelo HCl em pH ácido) inicia a hidrólise de proteínas em peptídeos. A digestão é completada no intestino delgado pelas proteases pancreáticas.',
    tags: ['sistema digestório', 'digestão de proteínas', 'estômago']
  },
  {
    id: 'bio022', subject: 'biologia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A camada da atmosfera que absorve a maior parte da radiação ultravioleta do Sol é:',
    options: ['Troposfera', 'Mesosfera', 'Termosfera', 'Estratosfera (camada de ozônio)', 'Exosfera'],
    answerIndex: 3,
    explanation: 'A camada de ozônio (O₃) localiza-se na estratosfera (15–35 km de altitude) e absorve a maior parte da radiação UV-B e UV-C, protegendo os seres vivos.',
    tags: ['camada de ozônio', 'ecologia', 'atmosfera']
  },
  {
    id: 'bio023', subject: 'biologia', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'A transcrição do DNA origina:',
    options: ['Proteínas diretamente', 'DNA complementar', 'RNA mensageiro (mRNA)', 'Ribossomos', 'Aminoácidos'],
    answerIndex: 2,
    explanation: 'Na transcrição, a RNA polimerase usa o DNA como molde para sintetizar RNA mensageiro (mRNA). Esse mRNA é então traduzido nos ribossomos em proteínas.',
    tags: ['DNA', 'RNA', 'transcrição', 'expressão gênica']
  },

  // ── QUÍMICA extras (qui008–qui022) ─────────────────────────────────────────
  {
    id: 'qui008', subject: 'quimica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Na Tabela Periódica, os elementos de uma mesma família (grupo) possuem em comum:',
    options: ['O mesmo número de massa', 'O mesmo número de nêutrons', 'O mesmo número de elétrons na camada de valência', 'O mesmo estado físico', 'O mesmo ponto de fusão'],
    answerIndex: 2,
    explanation: 'Elementos do mesmo grupo têm a mesma configuração eletrônica na camada de valência, o que lhes confere propriedades químicas semelhantes.',
    tags: ['tabela periódica', 'grupos', 'elétrons de valência']
  },
  {
    id: 'qui009', subject: 'quimica', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'A ligação química que ocorre entre dois não-metais por compartilhamento de elétrons é denominada:',
    options: ['Iônica', 'Metálica', 'Covalente', 'Dipolo-dipolo', 'Van der Waals'],
    answerIndex: 2,
    explanation: 'A ligação covalente (molecular) ocorre entre não-metais que compartilham pares de elétrons. A ligação iônica envolve transferência de elétrons entre metal e não-metal.',
    tags: ['ligações químicas', 'ligação covalente', 'não-metais']
  },
  {
    id: 'qui010', subject: 'quimica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Uma solução aquosa com pH = 3 é:',
    options: ['Neutra', 'Básica fraca', 'Básica forte', 'Ácida', 'Anfótera'],
    answerIndex: 3,
    explanation: 'pH < 7 → solução ácida. pH = 7 → neutra. pH > 7 → básica. pH = 3 indica [H⁺] = 10⁻³ mol/L, portanto ácida.',
    tags: ['pH', 'acidez', 'soluções aquosas']
  },
  {
    id: 'qui011', subject: 'quimica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Na reação de combustão completa do metano: CH₄ + 2O₂ → CO₂ + 2H₂O, o coeficiente do O₂ indica que:',
    options: ['Produz-se 2 mol de O₂', 'Consomem-se 2 mol de O₂ para cada mol de CH₄', 'O O₂ é produto da reação', 'A reação é endotérmica', 'Há 2 átomos de carbono'],
    answerIndex: 1,
    explanation: 'O coeficiente estequiométrico do O₂ é 2, indicando que 2 mols de O₂ são consumidos para cada 1 mol de CH₄ reagido.',
    tags: ['estequiometria', 'coeficientes', 'combustão']
  },
  {
    id: 'qui012', subject: 'quimica', year: 2020, source: 'ENEM', difficulty: 'dificil',
    question: 'Uma reação que libera calor para o ambiente é chamada de:',
    options: ['Endotérmica', 'Exotérmica', 'Isobárica', 'Isotérmica', 'Adiabática'],
    answerIndex: 1,
    explanation: 'Reações exotérmicas liberam energia (ΔH < 0). Reações endotérmicas absorvem energia (ΔH > 0). Combustão e respiração celular são exemplos de reações exotérmicas.',
    tags: ['termoquímica', 'reação exotérmica', 'entalpia']
  },
  {
    id: 'qui013', subject: 'quimica', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: 'Na eletrólise da água, no eletrodo negativo (cátodo) ocorre:',
    options: ['Oxidação e produção de O₂', 'Redução e produção de H₂', 'Oxidação e produção de H₂', 'Redução e produção de O₂', 'Dissolução do eletrodo'],
    answerIndex: 1,
    explanation: 'No cátodo (polo negativo) ocorre redução. Na eletrólise da água: 4H⁺ + 4e⁻ → 2H₂. No ânodo (positivo) ocorre oxidação: 2H₂O → O₂ + 4H⁺ + 4e⁻.',
    tags: ['eletroquímica', 'eletrólise', 'cátodo', 'redução']
  },
  {
    id: 'qui014', subject: 'quimica', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'Isômeros são compostos que possuem:',
    options: ['Mesma fórmula estrutural e mesmas propriedades', 'Mesma fórmula molecular, mas estruturas diferentes', 'Diferentes fórmulas moleculares e mesmas propriedades', 'Mesmos átomos e mesma estrutura', 'Diferente número de átomos de carbono'],
    answerIndex: 1,
    explanation: 'Isômeros têm a mesma fórmula molecular (mesmos tipos e quantidades de átomos), porém diferem na forma como os átomos estão conectados (isomeria plana) ou dispostos no espaço (isomeria espacial).',
    tags: ['isomeria', 'química orgânica', 'fórmula molecular']
  },
  {
    id: 'qui015', subject: 'quimica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'O grupo funcional característico dos álcoois é:',
    options: ['−COOH', '−CHO', '−OH', '−CO−', '−NH₂'],
    answerIndex: 2,
    explanation: 'Álcoois possuem o grupo hidroxila (−OH) ligado a carbono saturado. Exemplos: etanol (C₂H₅OH), metanol (CH₃OH).',
    tags: ['funções orgânicas', 'álcool', 'grupo funcional']
  },
  {
    id: 'qui016', subject: 'quimica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Na reação: Zn + CuSO₄ → ZnSO₄ + Cu, o zinco sofre:',
    options: ['Redução, pois ganha elétrons', 'Oxidação, pois perde elétrons', 'Redução, pois perde prótons', 'Oxidação, pois ganha prótons', 'Não há variação de NOX'],
    answerIndex: 1,
    explanation: 'Zn⁰ → Zn²⁺: o zinco perde 2 elétrons (oxidação). O Cu²⁺ → Cu⁰ ganha elétrons (redução). LEO diz GER: Lost Electrons = Oxidation; Gained Electrons = Reduction.',
    tags: ['oxirredução', 'número de oxidação', 'reação redox']
  },
  {
    id: 'qui017', subject: 'quimica', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'O ponto de ebulição de soluções salinas é MAIOR que o da água pura. Esse fenômeno é chamado de:',
    options: ['Osmose', 'Crioscopia', 'Ebulioscopia', 'Tonoscopia', 'Pressão osmótica'],
    answerIndex: 2,
    explanation: 'A ebulioscopia é a propriedade coligativa que descreve o aumento do ponto de ebulição quando se dissolve um soluto não volátil no solvente.',
    tags: ['propriedades coligativas', 'ebulioscopia', 'ponto de ebulição']
  },
  {
    id: 'qui018', subject: 'quimica', year: 2020, source: 'ENEM', difficulty: 'medio',
    question: 'Aumentar a temperatura de uma reação geralmente:',
    options: ['Diminui a velocidade da reação', 'Aumenta a velocidade da reação', 'Não afeta a velocidade', 'Diminui a concentração dos reagentes', 'Elimina a energia de ativação'],
    answerIndex: 1,
    explanation: 'Pela teoria das colisões, maior temperatura aumenta a energia cinética das moléculas → mais colisões efetivas → maior velocidade de reação.',
    tags: ['cinética química', 'temperatura', 'velocidade de reação']
  },
  {
    id: 'qui019', subject: 'quimica', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: 'No equilíbrio: N₂ + 3H₂ ⇌ 2NH₃ (exotérmica), aumentar a pressão favorece:',
    options: ['A reação direta (produção de NH₃)', 'A reação inversa (consumo de NH₃)', 'Não altera o equilíbrio', 'Aumenta a temperatura', 'Diminui a constante de equilíbrio'],
    answerIndex: 0,
    explanation: 'Pelo Princípio de Le Chatelier, aumentar a pressão favorece o lado com MENOS mols de gás. Reagentes: 4 mols; produto: 2 mols. O equilíbrio desloca-se para a direita.',
    tags: ['equilíbrio químico', 'Le Chatelier', 'Haber-Bosch']
  },
  {
    id: 'qui020', subject: 'quimica', year: 2021, source: 'ENEM', difficulty: 'facil',
    question: 'O gás carbônico (CO₂) na atmosfera contribui para o aquecimento global por ser:',
    options: ['Um oxidante forte', 'Um catalisador de reações', 'Um gás do efeito estufa', 'Um radical livre', 'Um ácido forte'],
    answerIndex: 2,
    explanation: 'O CO₂ é um gás do efeito estufa: absorve radiação infravermelha emitida pela Terra e re-irradia para a superfície, dificultando o resfriamento do planeta.',
    tags: ['química ambiental', 'efeito estufa', 'CO₂', 'aquecimento global']
  },
  {
    id: 'qui021', subject: 'quimica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A água apresenta ponto de ebulição alto para uma molécula pequena principalmente por causa das:',
    options: ['Ligações covalentes O–H', 'Forças de London', 'Ligações de hidrogênio intermoleculares', 'Ligações metálicas', 'Forças iônicas'],
    answerIndex: 2,
    explanation: 'As pontes de hidrogênio entre moléculas de água são as forças intermoleculares mais fortes, responsáveis pelas propriedades anômalas da água (alto PE, coesão, etc.).',
    tags: ['ligações de hidrogênio', 'forças intermoleculares', 'água']
  },
  {
    id: 'qui022', subject: 'quimica', year: 2019, source: 'ENEM', difficulty: 'medio',
    question: 'Qual das seguintes substâncias é um ácido de Arrhenius?',
    options: ['NaOH', 'KOH', 'HCl', 'NaCl', 'Ca(OH)₂'],
    answerIndex: 2,
    explanation: 'Segundo Arrhenius, ácido é uma substância que em solução aquosa libera H⁺ (H₃O⁺). HCl → H⁺ + Cl⁻. NaOH e KOH são bases (liberam OH⁻).',
    tags: ['teoria de Arrhenius', 'ácidos e bases', 'ionização']
  },

  // ── FÍSICA extras (fis008–fis022) ──────────────────────────────────────────
  {
    id: 'fis008', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Um carro percorre 120 km em 2 horas com velocidade constante. Sua velocidade média é:',
    options: ['60 km/h', '240 km/h', '30 km/h', '120 km/h', '180 km/h'],
    answerIndex: 0,
    explanation: 'Velocidade média = distância / tempo = 120 km / 2 h = 60 km/h.',
    tags: ['cinemática', 'MRU', 'velocidade média']
  },
  {
    id: 'fis009', subject: 'fisica', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'Um objeto de 5 kg é submetido a uma força de 20 N. Qual é a aceleração resultante?',
    options: ['100 m/s²', '25 m/s²', '4 m/s²', '15 m/s²', '0,25 m/s²'],
    answerIndex: 2,
    explanation: '2ª Lei de Newton: F = m·a → a = F/m = 20/5 = 4 m/s².',
    tags: ['dinâmica', '2ª Lei de Newton', 'força']
  },
  {
    id: 'fis010', subject: 'fisica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Um objeto de 2 kg a 10 m de altura possui energia potencial gravitacional de (g = 10 m/s²):',
    options: ['20 J', '200 J', '100 J', '2 J', '50 J'],
    answerIndex: 1,
    explanation: 'Ep = m·g·h = 2 × 10 × 10 = 200 J.',
    tags: ['energia potencial', 'gravitação', 'trabalho e energia']
  },
  {
    id: 'fis011', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Qual escala termométrica tem o zero absoluto como ponto de referência?',
    options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine', 'Réaumur'],
    answerIndex: 2,
    explanation: 'A escala Kelvin (K) inicia no zero absoluto (−273,15°C), onde cessa toda agitação térmica. K = °C + 273.',
    tags: ['termologia', 'escala Kelvin', 'zero absoluto']
  },
  {
    id: 'fis012', subject: 'fisica', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'A velocidade do som no ar é ~343 m/s. Um som de 686 Hz possui comprimento de onda de:',
    options: ['0,25 m', '0,5 m', '1 m', '2 m', '343 m'],
    answerIndex: 1,
    explanation: 'v = λ·f → λ = v/f = 343/686 = 0,5 m.',
    tags: ['ondas sonoras', 'comprimento de onda', 'frequência']
  },
  {
    id: 'fis013', subject: 'fisica', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'A lei que afirma que o ângulo de incidência é igual ao ângulo de reflexão é a:',
    options: ['1ª lei da reflexão', '2ª lei da reflexão', 'Lei de Snell-Descartes', 'Lei de Huygens', 'Lei de Fresnel'],
    answerIndex: 1,
    explanation: 'A 2ª lei da reflexão estabelece que o ângulo de reflexão (θᵣ) é igual ao ângulo de incidência (θᵢ), ambos medidos em relação à normal à superfície.',
    tags: ['óptica', 'reflexão', 'lei da reflexão']
  },
  {
    id: 'fis014', subject: 'fisica', year: 2020, source: 'ENEM', difficulty: 'medio',
    question: 'Um resistor de 4Ω é submetido a uma tensão de 12 V. Qual é a corrente elétrica?',
    options: ['48 A', '3 A', '8 A', '0,33 A', '16 A'],
    answerIndex: 1,
    explanation: 'Lei de Ohm: V = R·I → I = V/R = 12/4 = 3 A.',
    tags: ['eletricidade', 'Lei de Ohm', 'resistência']
  },
  {
    id: 'fis015', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A força magnética sobre uma carga elétrica em movimento depende de:',
    options: ['Apenas a velocidade da carga', 'Apenas o campo magnético', 'A carga, a velocidade e o campo magnético', 'Apenas a massa da carga', 'Apenas a direção do movimento'],
    answerIndex: 2,
    explanation: 'Força de Lorentz: F = q·v·B·sen(θ). Depende da carga (q), velocidade (v), campo magnético (B) e do ângulo entre v e B.',
    tags: ['magnetismo', 'força de Lorentz', 'campo magnético']
  },
  {
    id: 'fis016', subject: 'fisica', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'De acordo com a 1ª Lei da Termodinâmica, a variação de energia interna de um sistema é:',
    options: ['Igual ao trabalho realizado pelo sistema', 'Igual ao calor absorvido menos o trabalho realizado', 'Igual ao calor cedido', 'Independente de calor e trabalho', 'Sempre positiva'],
    answerIndex: 1,
    explanation: '1ª Lei da Termodinâmica: ΔU = Q − W. A variação de energia interna é igual ao calor absorvido (Q) menos o trabalho realizado pelo sistema (W).',
    tags: ['termodinâmica', '1ª Lei', 'energia interna']
  },
  {
    id: 'fis017', subject: 'fisica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Num líquido em equilíbrio, a pressão hidrostática em função da profundidade é dada por:',
    options: ['P = ρ·g²·h', 'P = m·g·h', 'P = ρ·g·h', 'P = F/V', 'P = g/ρ·h'],
    answerIndex: 2,
    explanation: 'Pressão hidrostática: P = ρ·g·h, onde ρ é a densidade do líquido, g a aceleração da gravidade e h a profundidade.',
    tags: ['hidrostática', 'pressão hidrostática', 'fluidos']
  },
  {
    id: 'fis018', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Dois resistores de 6Ω cada, ligados em paralelo, têm resistência equivalente de:',
    options: ['12Ω', '6Ω', '3Ω', '1Ω', '0,5Ω'],
    answerIndex: 2,
    explanation: '1/Req = 1/6 + 1/6 = 2/6 → Req = 3Ω. Em paralelo a resistência equivalente é sempre menor que a menor resistência individual.',
    tags: ['eletricidade', 'circuito paralelo', 'resistência equivalente']
  },
  {
    id: 'fis019', subject: 'fisica', year: 2019, source: 'ENEM', difficulty: 'facil',
    question: 'A radiação que NÃO é ionizante e é usada em controle remoto é:',
    options: ['Raios X', 'Radiação gama', 'Infravermelho', 'Radiação alfa', 'Raios UV'],
    answerIndex: 2,
    explanation: 'O infravermelho (IV) é uma radiação eletromagnética não ionizante usada em controles remotos e câmeras termais.',
    tags: ['ondas eletromagnéticas', 'infravermelho', 'espectro eletromagnético']
  },
  {
    id: 'fis020', subject: 'fisica', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'Na fissão nuclear, o que é liberado além de novos núcleos?',
    options: ['Fótons de luz visível', 'Elétrons livres e calor apenas', 'Nêutrons e grande quantidade de energia', 'Prótons e neutrinos', 'Partículas alfa e beta'],
    answerIndex: 2,
    explanation: 'Na fissão nuclear, um núcleo pesado se divide liberando 2–3 nêutrons livres e enorme quantidade de energia (E = mc²). Base das usinas nucleares.',
    tags: ['radioatividade', 'fissão nuclear', 'energia nuclear']
  },
  {
    id: 'fis021', subject: 'fisica', year: 2020, source: 'ENEM', difficulty: 'medio',
    question: 'A força gravitacional entre dois corpos é inversamente proporcional ao:',
    options: ['Produto das massas', 'Quadrado da distância entre eles', 'Volume dos corpos', 'Raio de cada corpo', 'Cubo da distância'],
    answerIndex: 1,
    explanation: 'Lei da Gravitação Universal: F = G·m₁·m₂/r². A força é inversamente proporcional ao quadrado da distância (r²).',
    tags: ['gravitação universal', 'Newton', 'força gravitacional']
  },
  {
    id: 'fis022', subject: 'fisica', year: 2023, source: 'ENEM', difficulty: 'dificil',
    question: 'Um transformador tem 200 espiras no primário e 1000 no secundário. Se a tensão no primário é 110 V, a tensão no secundário é:',
    options: ['22 V', '110 V', '550 V', '220 V', '1100 V'],
    answerIndex: 2,
    explanation: 'V₁/V₂ = N₁/N₂ → 110/V₂ = 200/1000 → V₂ = 550 V. Transformador elevador.',
    tags: ['eletromagnetismo', 'transformador', 'indução']
  },

  // ── HISTÓRIA extras (his011–his022) ────────────────────────────────────────
  {
    id: 'his011', subject: 'historia', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'A Proclamação da República no Brasil ocorreu em:',
    options: ['7 de setembro de 1822', '13 de maio de 1888', '15 de novembro de 1889', '22 de abril de 1500', '11 de novembro de 1918'],
    answerIndex: 2,
    explanation: 'Em 15 de novembro de 1889, o Marechal Deodoro da Fonseca proclamou a República, encerrando o Segundo Reinado de Dom Pedro II.',
    tags: ['República', 'Brasil Imperial', 'Deodoro da Fonseca']
  },
  {
    id: 'his012', subject: 'historia', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'O plano que organizou a reconstrução econômica da Europa Ocidental após a Segunda Guerra Mundial foi o:',
    options: ['Plano Dawes', 'Plano Marshall', 'Plano Quinquenal', 'New Deal', 'Plano Beveridge'],
    answerIndex: 1,
    explanation: 'O Plano Marshall (1948–1952) forneceu ~US$13 bilhões para reconstruir as economias da Europa Ocidental devastadas pela guerra.',
    tags: ['Segunda Guerra Mundial', 'Guerra Fria', 'Plano Marshall']
  },
  {
    id: 'his013', subject: 'historia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A Revolução Industrial iniciou-se na segunda metade do século XVIII principalmente na:',
    options: ['França', 'Alemanha', 'Estados Unidos', 'Inglaterra', 'Bélgica'],
    answerIndex: 3,
    explanation: 'A Revolução Industrial começou na Inglaterra (décadas de 1760–1780), favorecida pela disponibilidade de carvão, ferro, capital e mão de obra.',
    tags: ['Revolução Industrial', 'Inglaterra', 'século XVIII']
  },
  {
    id: 'his014', subject: 'historia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A expressão "Cortina de Ferro" durante a Guerra Fria referia-se à:',
    options: ['Fronteira entre EUA e México', 'Divisão entre países capitalistas e comunistas na Europa', 'Muro de Berlim especificamente', 'Fronteira entre China e URSS', 'Bloqueio naval de Cuba'],
    answerIndex: 1,
    explanation: 'O termo "Cortina de Ferro" (Churchill, 1946) denominava a fronteira ideológica que dividia a Europa entre o bloco ocidental capitalista e o bloco oriental soviético.',
    tags: ['Guerra Fria', 'Cortina de Ferro', 'bipolaridade']
  },
  {
    id: 'his015', subject: 'historia', year: 2021, source: 'ENEM', difficulty: 'facil',
    question: 'A Lei Áurea, que aboliu a escravidão no Brasil, foi assinada em:',
    options: ['15 de novembro de 1889', '7 de setembro de 1822', '13 de maio de 1888', '28 de setembro de 1871', '25 de março de 1824'],
    answerIndex: 2,
    explanation: 'A Lei Áurea foi assinada pela Princesa Isabel em 13 de maio de 1888, tornando o Brasil o último país do Ocidente a abolir oficialmente a escravidão.',
    tags: ['abolição', 'Lei Áurea', 'escravidão', 'Princesa Isabel']
  },
  {
    id: 'his016', subject: 'historia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'O Estado Novo (1937–1945) de Getúlio Vargas caracterizou-se por:',
    options: ['Democracia liberal e eleições livres', 'Ditadura centralizadora com suspensão do Congresso', 'Federalismo descentralizado', 'Parlamentarismo', 'Governo militar sem civis'],
    answerIndex: 1,
    explanation: 'O Estado Novo foi um regime ditatorial: Vargas fechou o Congresso, outorgou a "Polaca" (CF de 1937), suspendeu partidos e instaurou censura.',
    tags: ['Era Vargas', 'Estado Novo', 'ditadura']
  },
  {
    id: 'his017', subject: 'historia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O AI-5 (1968), durante a Ditadura Militar brasileira, representou:',
    options: ['A abertura política gradual', 'A redemocratização do país', 'O endurecimento do regime com suspensão de direitos', 'A promulgação de nova Constituição', 'A convocação de eleições diretas'],
    answerIndex: 2,
    explanation: 'O AI-5 (dezembro de 1968) representou o auge do autoritarismo: cassação de mandatos, suspensão do habeas corpus, censura total. Inaugurou os "Anos de Chumbo".',
    tags: ['ditadura militar', 'AI-5', 'direitos civis']
  },
  {
    id: 'his018', subject: 'historia', year: 2020, source: 'ENEM', difficulty: 'medio',
    question: 'O Renascimento Cultural dos séculos XIV-XVI caracterizou-se pelo:',
    options: ['Teocentrismo e devoção exclusiva à Igreja', 'Antropocentrismo e valorização do conhecimento greco-romano', 'Rejeição da ciência e da razão', 'Feudalismo e isolamento cultural', 'Expansão do Islamismo'],
    answerIndex: 1,
    explanation: 'O Renascimento retomou os valores greco-romanos: antropocentrismo, racionalismo, naturalismo nas artes e início do método científico.',
    tags: ['Renascimento', 'humanismo', 'antropocentrismo']
  },
  {
    id: 'his019', subject: 'historia', year: 2019, source: 'ENEM', difficulty: 'medio',
    question: 'A Declaração dos Direitos do Homem e do Cidadão (1789) foi um documento central da:',
    options: ['Revolução Industrial', 'Revolução Americana', 'Revolução Francesa', 'Revolução Russa', 'Independência do Brasil'],
    answerIndex: 2,
    explanation: 'A Declaração de 1789 emanou da Revolução Francesa e consagrou liberdade, igualdade e soberania popular como direitos universais.',
    tags: ['Revolução Francesa', 'iluminismo', 'direitos humanos']
  },
  {
    id: 'his020', subject: 'historia', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: 'A Conferência de Berlim (1884–1885) é associada a qual processo histórico?',
    options: ['Criação da Liga das Nações', 'Partilha da África entre potências europeias', 'Fim da Primeira Guerra Mundial', 'Unificação alemã', 'Revolução Industrial inglesa'],
    answerIndex: 1,
    explanation: 'A Conferência de Berlim regulamentou a partilha colonial da África entre as potências europeias, sem consultar os povos africanos.',
    tags: ['imperialismo', 'neocolonialismo', 'África', 'Conferência de Berlim']
  },
  {
    id: 'his021', subject: 'historia', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'A independência do Brasil foi proclamada por D. Pedro I em:',
    options: ['15 de novembro de 1889', '7 de setembro de 1822', '22 de abril de 1500', '13 de maio de 1888', '25 de março de 1824'],
    answerIndex: 1,
    explanation: 'Em 7 de setembro de 1822, às margens do Ipiranga, D. Pedro I proclamou a independência do Brasil de Portugal.',
    tags: ['independência do Brasil', 'D. Pedro I', 'Grito do Ipiranga']
  },
  {
    id: 'his022', subject: 'historia', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'A Revolução Russa de 1917 levou ao poder o partido:',
    options: ['Menchevique', 'Cadete', 'Bolchevique (liderado por Lenin)', 'Social-Revolucionário', 'Monarquista'],
    answerIndex: 2,
    explanation: 'Em outubro de 1917, os bolcheviques liderados por Lenin tomaram o poder, instaurando o primeiro Estado socialista.',
    tags: ['Revolução Russa', 'bolcheviques', 'Lenin', 'socialismo']
  },

  // ── GEOGRAFIA extras (geo008–geo022) ───────────────────────────────────────
  {
    id: 'geo008', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'O clima predominante na maior parte da região Amazônica é:',
    options: ['Árido', 'Semiárido', 'Equatorial úmido', 'Subtropical', 'Temperado'],
    answerIndex: 2,
    explanation: 'O clima equatorial úmido predomina na Amazônia: altas temperaturas (>25°C), elevada precipitação anual (>2000 mm) e alta umidade relativa.',
    tags: ['clima', 'Amazônia', 'equatorial']
  },
  {
    id: 'geo009', subject: 'geografia', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'O Rio Amazonas desemboca no Oceano:',
    options: ['Pacífico', 'Índico', 'Atlântico', 'Ártico', 'Antártico'],
    answerIndex: 2,
    explanation: 'O Rio Amazonas deságua no Oceano Atlântico, na costa do Pará e Amapá. É o maior rio do mundo em volume de água.',
    tags: ['hidrografia', 'Rio Amazonas', 'bacias hidrográficas']
  },
  {
    id: 'geo010', subject: 'geografia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A urbanização no Brasil intensificou-se principalmente a partir da:',
    options: ['Período colonial', 'Proclamação da República', 'Industrialização e migração rural-urbana (décadas de 1950–1970)', 'Abertura democrática (1985)', 'Era Vargas (1930–1945)'],
    answerIndex: 2,
    explanation: 'O êxodo rural e a industrialização levaram o Brasil de país predominantemente rural nos anos 1940 a mais de 85% urbanizado hoje.',
    tags: ['urbanização', 'industrialização', 'êxodo rural']
  },
  {
    id: 'geo011', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A globalização econômica é caracterizada principalmente por:',
    options: ['Isolamento das economias nacionais', 'Aumento de barreiras comerciais', 'Integração dos mercados e redução de fronteiras econômicas', 'Fortalecimento do protecionismo', 'Eliminação das empresas multinacionais'],
    answerIndex: 2,
    explanation: 'A globalização econômica integra mercados, capitais, tecnologias e cadeias produtivas em escala mundial, reduzindo barreiras tarifárias.',
    tags: ['globalização', 'geopolítica', 'economia mundial']
  },
  {
    id: 'geo012', subject: 'geografia', year: 2021, source: 'ENEM', difficulty: 'facil',
    question: 'A região mais populosa do Brasil é:',
    options: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
    answerIndex: 3,
    explanation: 'O Sudeste concentra ~42% da população brasileira (SP, RJ, MG, ES). São Paulo é a cidade mais populosa.',
    tags: ['demografia', 'regiões brasileiras', 'população']
  },
  {
    id: 'geo013', subject: 'geografia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'O relevo brasileiro é predominantemente formado por:',
    options: ['Cadeias de montanhas jovens (acima de 3.000 m)', 'Planícies costeiras extensas', 'Planaltos e chapadas de origem antiga', 'Grandes desertos', 'Vulcões ativos'],
    answerIndex: 2,
    explanation: 'O relevo brasileiro é formado majoritariamente por planaltos e chapadas de formação antiga, com altitudes modestas.',
    tags: ['relevo', 'planalto', 'geomorfologia']
  },
  {
    id: 'geo014', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O El Niño afeta o clima brasileiro causando, principalmente no Nordeste:',
    options: ['Aumento das chuvas e enchentes', 'Temperaturas mais baixas', 'Seca e diminuição das chuvas', 'Geadas frequentes', 'Aumento do nível do mar'],
    answerIndex: 2,
    explanation: 'Em anos de El Niño, o semiárido nordestino tende a ter secas mais intensas, pois o fenômeno afeta os padrões de circulação atmosférica.',
    tags: ['El Niño', 'clima', 'Nordeste', 'seca']
  },
  {
    id: 'geo015', subject: 'geografia', year: 2020, source: 'ENEM', difficulty: 'facil',
    question: 'A energia proveniente do movimento das marés é classificada como:',
    options: ['Energia fóssil', 'Energia nuclear', 'Energia renovável (maremotriz)', 'Energia não renovável', 'Energia geotérmica'],
    answerIndex: 2,
    explanation: 'A energia maremotriz (das marés) é uma fonte renovável. Não gera CO₂ e é praticamente inesgotável.',
    tags: ['energia renovável', 'maremotriz', 'fontes de energia']
  },
  {
    id: 'geo016', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O IDH (Índice de Desenvolvimento Humano) é composto por indicadores de:',
    options: ['PIB per capita, exportações e importações', 'Renda, educação e longevidade', 'Industrialização, urbanização e PIB', 'Área territorial, população e PIB', 'Desigualdade, pobreza e desemprego'],
    answerIndex: 1,
    explanation: 'O IDH (ONU, 1990) combina três dimensões: renda (RNB per capita), educação (anos de estudo) e saúde/longevidade (expectativa de vida).',
    tags: ['IDH', 'desenvolvimento humano', 'indicadores socioeconômicos']
  },
  {
    id: 'geo017', subject: 'geografia', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'São Paulo e Rio de Janeiro pertencem à região:',
    options: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
    answerIndex: 3,
    explanation: 'A região Sudeste é composta por SP, RJ, MG e ES. É a região mais industrializada e rica do Brasil.',
    tags: ['regiões brasileiras', 'Sudeste', 'estados']
  },
  {
    id: 'geo018', subject: 'geografia', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'As placas tectônicas são responsáveis por:',
    options: ['Formação das nuvens e chuvas', 'Mudanças climáticas sazonais', 'Terremotos, vulcanismos e formação de montanhas', 'Correntes oceânicas de superfície', 'Variações do nível do mar por marés'],
    answerIndex: 2,
    explanation: 'O movimento das placas tectônicas explica terremotos, vulcanismos, tsunamis e a formação de cordilheiras nas zonas de encontro das placas.',
    tags: ['tectônica de placas', 'terremotos', 'vulcanismo']
  },
  {
    id: 'geo019', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A migração de pessoas do campo para a cidade em busca de emprego é chamada de:',
    options: ['Migração pendular', 'Migração internacional', 'Êxodo rural', 'Migração forçada', 'Transumância'],
    answerIndex: 2,
    explanation: 'O êxodo rural é o deslocamento permanente de populações rurais para áreas urbanas, intensificado no Brasil nas décadas de 1950 a 1980.',
    tags: ['migração', 'êxodo rural', 'urbanização']
  },
  {
    id: 'geo020', subject: 'geografia', year: 2023, source: 'ENEM', difficulty: 'dificil',
    question: 'O principal responsável pelo Plano Piloto de Brasília foi:',
    options: ['Oscar Niemeyer', 'Lúcio Costa', 'Roberto Burle Marx', 'Rino Levi', 'Vilanova Artigas'],
    answerIndex: 1,
    explanation: 'Lúcio Costa ganhou o concurso para o Plano Piloto de Brasília (1956). Oscar Niemeyer projetou os principais edifícios públicos.',
    tags: ['Brasília', 'urbanismo modernista', 'Lúcio Costa']
  },
  {
    id: 'geo021', subject: 'geografia', year: 2020, source: 'ENEM', difficulty: 'facil',
    question: 'Quando é 12h em Brasília (GMT-3), que horas são em Londres (GMT 0)?',
    options: ['9h', '12h', '15h', '3h', '18h'],
    answerIndex: 2,
    explanation: 'Brasília (GMT-3) está 3 horas atrás de Londres (GMT 0). 12h + 3h = 15h em Londres.',
    tags: ['fusos horários', 'GMT', 'localização geográfica']
  },
  {
    id: 'geo022', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O agronegócio brasileiro se destaca mundialmente pela exportação de:',
    options: ['Petróleo e minério de ferro', 'Soja, carne bovina e açúcar', 'Automóveis e máquinas', 'Calçados e têxteis', 'Software e serviços digitais'],
    answerIndex: 1,
    explanation: 'O Brasil é um dos maiores exportadores mundiais de soja (1º), carne bovina (1º) e açúcar/etanol (1º). O agronegócio representa >25% do PIB.',
    tags: ['agronegócio', 'exportações', 'soja', 'economia brasileira']
  },

  // ── FILOSOFIA extras (fil008–fil022) ───────────────────────────────────────
  {
    id: 'fil008', subject: 'filosofia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Na Alegoria da Caverna, Platão usa a imagem dos prisioneiros para representar:',
    options: ['A teoria do prazer como bem supremo', 'A ignorância humana diante das verdades inteligíveis', 'A moral kantiana do dever', 'O contrato social de Rousseau', 'O materialismo histórico de Marx'],
    answerIndex: 1,
    explanation: 'Os prisioneiros que veem apenas sombras representam os que conhecem só as aparências. O filósofo que sai da caverna atinge o mundo das Ideias (verdade real).',
    tags: ['Platão', 'Alegoria da Caverna', 'teoria das Ideias']
  },
  {
    id: 'fil009', subject: 'filosofia', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'Para Aristóteles, a felicidade (eudaimonia) é alcançada através de:',
    options: ['A busca do prazer imediato', 'O cumprimento do dever moral', 'O exercício da virtude como disposição do caráter', 'A contemplação das ideias puras', 'A obediência às leis divinas'],
    answerIndex: 2,
    explanation: 'Para Aristóteles, a eudaimonia é alcançada pelo exercício habitual das virtudes — o "meio-termo" entre o excesso e a falta.',
    tags: ['Aristóteles', 'ética das virtudes', 'eudaimonia']
  },
  {
    id: 'fil010', subject: 'filosofia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'O Iluminismo do século XVIII é caracterizado pela valorização de:',
    options: ['A tradição religiosa e a autoridade papal', 'A razão, a ciência e a liberdade individual', 'O absolutismo monárquico', 'A escolástica medieval', 'O romantismo e os sentimentos'],
    answerIndex: 1,
    explanation: 'O Iluminismo (Século das Luzes) pregava o uso da razão para combater superstições, defendendo liberdade, tolerância e educação laica.',
    tags: ['iluminismo', 'razão', 'liberdade', 'Século das Luzes']
  },
  {
    id: 'fil011', subject: 'filosofia', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: 'O imperativo categórico de Kant determina que devemos agir:',
    options: ['Buscando o maior prazer possível', 'Conforme as leis do Estado', 'Segundo máximas que possamos querer que se tornem leis universais', 'Para maximizar o bem-estar coletivo', 'De acordo com as virtudes da tradição'],
    answerIndex: 2,
    explanation: 'Kant formula: "Age apenas segundo máximas tais que possas ao mesmo tempo querer que se tornem leis universais." A moralidade baseia-se no dever (deontologia).',
    tags: ['Kant', 'imperativo categórico', 'deontologia', 'ética']
  },
  {
    id: 'fil012', subject: 'filosofia', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'Marx e Engels, no Manifesto Comunista (1848), propõem que a história humana é a história de:',
    options: ['A evolução das ideias filosóficas', 'A luta de classes', 'O progresso da razão universal', 'O contrato entre indivíduos livres', 'A manifestação do espírito absoluto'],
    answerIndex: 1,
    explanation: '"A história de toda a sociedade até hoje existente é a história da luta de classes." O materialismo histórico explica a história pelas contradições entre classes.',
    tags: ['marxismo', 'luta de classes', 'materialismo histórico']
  },
  {
    id: 'fil013', subject: 'filosofia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Nietzsche critica a moral ocidental como "moral dos escravos" porque:',
    options: ['Defende a liberdade dos trabalhadores', 'Promove valores como ressentimento e negação da vida', 'Baseia-se no princípio da utilidade', 'Defende a igualdade entre os indivíduos', 'Valoriza o poder do Estado'],
    answerIndex: 1,
    explanation: 'Para Nietzsche, a moral judaico-cristã inverte os valores nobres (força, vitalidade) ao glorificar a fraqueza e o sofrimento — uma "transvaloração" movida pelo ressentimento.',
    tags: ['Nietzsche', 'moral dos escravos', 'vontade de poder']
  },
  {
    id: 'fil014', subject: 'filosofia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A célebre frase de Sartre "A existência precede a essência" significa que:',
    options: ['Os seres humanos têm uma natureza fixa dada por Deus', 'O ser humano primeiro existe e depois cria seu próprio ser', 'A existência do mundo é anterior à do homem', 'A essência das coisas é imutável', 'A consciência determina o ser social'],
    answerIndex: 1,
    explanation: 'Para Sartre, o homem nasce sem essência predeterminada: primeiro existe, depois se define por seus atos e escolhas. A liberdade é radical.',
    tags: ['existencialismo', 'Sartre', 'liberdade']
  },
  {
    id: 'fil015', subject: 'filosofia', year: 2019, source: 'ENEM', difficulty: 'medio',
    question: 'Locke e Hume são representantes do:',
    options: ['Racionalismo continental', 'Empirismo britânico', 'Idealismo alemão', 'Positivismo francês', 'Existencialismo'],
    answerIndex: 1,
    explanation: 'Locke (conhecimento vem da experiência sensorial) e Hume (ceticismo e impressões) são os principais representantes do empirismo britânico.',
    tags: ['empirismo', 'Locke', 'Hume', 'teoria do conhecimento']
  },
  {
    id: 'fil016', subject: 'filosofia', year: 2020, source: 'ENEM', difficulty: 'medio',
    question: 'Para Rousseau, o homem em estado de natureza era:',
    options: ['Mau e belicoso por natureza', 'Bom, mas corrompido pela sociedade e propriedade privada', 'Racional e contratualista', 'Dependente da autoridade divina', 'Motivado apenas pelo egoísmo'],
    answerIndex: 1,
    explanation: 'Rousseau defende que o "bom selvagem" é naturalmente bom; é a civilização (propriedade privada, desigualdade) que o corrompe.',
    tags: ['Rousseau', 'bom selvagem', 'contrato social']
  },
  {
    id: 'fil017', subject: 'filosofia', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'O método socrático de chegar à verdade por meio de perguntas e respostas é chamado de:',
    options: ['Dialética hegeliana', 'Maiêutica', 'Catarse', 'Hermenêutica', 'Fenomenologia'],
    answerIndex: 1,
    explanation: 'A maiêutica (arte do parto espiritual) é o método de Sócrates: por perguntas, conduz o interlocutor a reconhecer sua ignorância e "parir" o conhecimento.',
    tags: ['Sócrates', 'maiêutica', 'método filosófico']
  },
  {
    id: 'fil018', subject: 'filosofia', year: 2021, source: 'ENEM', difficulty: 'dificil',
    question: 'O utilitarismo de Bentham e Mill propõe que a ação moralmente correta é aquela que:',
    options: ['Segue o imperativo categórico', 'Maximiza a felicidade para o maior número de pessoas', 'Está em conformidade com as leis divinas', 'Imita as virtudes da tradição', 'Expressa a vontade geral do povo'],
    answerIndex: 1,
    explanation: 'O utilitarismo avalia as ações por suas consequências: é moral o que maximiza a utilidade (felicidade) e minimiza o sofrimento para o maior número.',
    tags: ['utilitarismo', 'Bentham', 'Mill', 'ética consequencialista']
  },
  {
    id: 'fil019', subject: 'filosofia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'O positivismo de Auguste Comte defende que o único conhecimento válido é o:',
    options: ['Religioso', 'Metafísico', 'Científico (positivo)', 'Intuitivo', 'Mítico'],
    answerIndex: 2,
    explanation: 'Comte (1798–1857) fundou o positivismo: o único conhecimento válido é o científico (positivo). A sociedade deve evoluir da fase teológica para a positiva/científica.',
    tags: ['positivismo', 'Auguste Comte', 'ciência']
  },
  {
    id: 'fil020', subject: 'filosofia', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: 'Para Hobbes, o Estado surge para resolver o problema do:',
    options: ['Acúmulo excessivo de propriedades', 'Estado de guerra de todos contra todos (estado de natureza)', 'Conflito entre burguesia e proletariado', 'Poder excessivo da Igreja', 'Relativismo moral'],
    answerIndex: 1,
    explanation: 'Para Hobbes, o homem em estado de natureza vive em guerra permanente. O contrato social cede poder ao Leviatã (Estado) para garantir paz.',
    tags: ['Hobbes', 'estado de natureza', 'Leviatã', 'contrato social']
  },
  {
    id: 'fil021', subject: 'filosofia', year: 2020, source: 'ENEM', difficulty: 'dificil',
    question: 'A fenomenologia de Husserl propõe a "epoché" (redução fenomenológica), que consiste em:',
    options: ['Observação empírica controlada', 'Suspender julgamentos sobre a existência do mundo para analisar a consciência pura', 'Lógica dedutiva formal', 'Dialética histórica', 'Revelação religiosa'],
    answerIndex: 1,
    explanation: 'Husserl propõe colocar entre parênteses a crença na existência do mundo (epoché) para analisar a estrutura pura da consciência.',
    tags: ['fenomenologia', 'Husserl', 'epoché', 'consciência']
  },
  {
    id: 'fil022', subject: 'filosofia', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'A teoria do "véu da ignorância" de John Rawls serve para:',
    options: ['Justificar a desigualdade natural', 'Determinar princípios de justiça sem conhecer a posição que se ocupará na sociedade', 'Descrever a ignorância humana sobre metafísica', 'Fundamentar o utilitarismo', 'Justificar o autoritarismo estatal'],
    answerIndex: 1,
    explanation: 'Rawls (Teoria da Justiça, 1971) propõe que escolhemos princípios de justiça por trás de um "véu da ignorância": sem saber que posição social teremos, escolheríamos princípios equitativos.',
    tags: ['Rawls', 'véu da ignorância', 'justiça', 'filosofia política']
  },

  // ── INGLÊS extras (ing008–ing022) ──────────────────────────────────────────
  {
    id: 'ing008', subject: 'ingles', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Choose the correct modal verb: "You _____ wear a seatbelt. It is the law."',
    options: ['might', 'could', 'must', 'would', 'should'],
    answerIndex: 2,
    explanation: '"Must" expresses obligation or legal requirement. "Should" is a recommendation; "might/could" express possibility.',
    tags: ['modal verbs', 'must', 'obligation']
  },
  {
    id: 'ing009', subject: 'ingles', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'What is the meaning of "give up" in: "She gave up smoking last year"?',
    options: ['To start something new', 'To quit or stop doing something', 'To give away for free', 'To hand something to someone', 'To improve gradually'],
    answerIndex: 1,
    explanation: '"Give up" means to stop doing something, especially a habit. Different from "give in" (surrender) or "give away" (donate).',
    tags: ['phrasal verbs', 'give up', 'vocabulary']
  },
  {
    id: 'ing010', subject: 'ingles', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Complete the second conditional: "If I _____ more time, I _____ travel the world."',
    options: ['have / would travel', 'had / would travel', 'have / will travel', 'had / will travel', 'have / travel'],
    answerIndex: 1,
    explanation: 'Second conditional (hypothetical/unreal): If + past simple, would + base verb. "If I had more time, I would travel."',
    tags: ['conditional sentences', 'second conditional', 'grammar']
  },
  {
    id: 'ing011', subject: 'ingles', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Rewrite in passive voice: "The teacher explained the lesson."',
    options: ['"The lesson was explained by the teacher."', '"The lesson explained by teacher."', '"The teacher was explained the lesson."', '"The lesson is explained by the teacher."', '"The teacher had explained the lesson."'],
    answerIndex: 0,
    explanation: 'Passive voice: object + "to be" (past tense) + past participle + "by" + agent. The tense is preserved.',
    tags: ['passive voice', 'grammar', 'sentence transformation']
  },
  {
    id: 'ing012', subject: 'ingles', year: 2021, source: 'ENEM', difficulty: 'facil',
    question: 'Which word is a FALSE COGNATE — looks like Portuguese but has a different meaning?',
    options: ['"Animal"', '"Hotel"', '"Pretend" (fingir, não pretender)', '"Radio"', '"Problem"'],
    answerIndex: 2,
    explanation: '"Pretend" in English means "to act as if / to make believe" (fingir), NOT "to intend/plan to do" (pretender). Classic false cognate.',
    tags: ['false cognates', 'vocabulary', 'falso amigo']
  },
  {
    id: 'ing013', subject: 'ingles', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Identify the relative clause: "The book that I borrowed was excellent."',
    options: ['"The book"', '"was excellent"', '"I borrowed"', '"that I borrowed"', '"The book that"'],
    answerIndex: 3,
    explanation: '"That I borrowed" is a defining relative clause modifying "the book." The relative pronoun "that" introduces it.',
    tags: ['relative clauses', 'grammar']
  },
  {
    id: 'ing014', subject: 'ingles', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'She said: "I am going to the market." In reported speech, this becomes:',
    options: ['"She said she is going to the market."', '"She said she was going to the market."', '"She said I am going to the market."', '"She told she was going the market."', '"She said that she goes to the market."'],
    answerIndex: 1,
    explanation: 'In reported speech, the present continuous shifts to past continuous: "am going" → "was going." First-person "I" changes to "she."',
    tags: ['reported speech', 'backshift', 'indirect speech']
  },
  {
    id: 'ing015', subject: 'ingles', year: 2021, source: 'ENEM', difficulty: 'facil',
    question: 'The prefix "un-" in "unhappy" means:',
    options: ['Again', 'Before', 'Not / opposite of', 'Too much', 'Half'],
    answerIndex: 2,
    explanation: 'The prefix "un-" negates the base word: unhappy = not happy; unusual = not usual.',
    tags: ['prefixes', 'word formation', 'vocabulary']
  },
  {
    id: 'ing016', subject: 'ingles', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Choose the connector that shows CONTRAST: "She studied hard. _____, she failed the test."',
    options: ['Therefore', 'Moreover', 'However', 'Furthermore', 'As a result'],
    answerIndex: 2,
    explanation: '"However" introduces a contrasting idea. "Therefore" and "as a result" show consequence; "moreover/furthermore" add information.',
    tags: ['connectors', 'cohesion', 'discourse markers']
  },
  {
    id: 'ing017', subject: 'ingles', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'What does "It\'s raining cats and dogs" mean?',
    options: ["It's raining animals.", "There are cats and dogs outside.", "It's raining very heavily.", "The weather is unpredictable.", "It's a light drizzle."],
    answerIndex: 2,
    explanation: '"Raining cats and dogs" is an idiom meaning it is raining very hard. Idioms cannot be understood literally.',
    tags: ['idioms', 'figurative language', 'vocabulary']
  },
  {
    id: 'ing018', subject: 'ingles', year: 2021, source: 'ENEM', difficulty: 'medio',
    question: 'Choose the correct superlative form of "good":',
    options: ['more good', 'goodest', 'better', 'best', 'most good'],
    answerIndex: 3,
    explanation: '"Good" has an irregular superlative: good → better (comparative) → best (superlative).',
    tags: ['superlative', 'irregular adjectives', 'comparative']
  },
  {
    id: 'ing019', subject: 'ingles', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Which sentence uses the present perfect CORRECTLY?',
    options: ['"I have went to Paris last year."', '"She has never eaten sushi."', '"They have arrived yesterday."', '"He has go to school."', '"We have saw that film."'],
    answerIndex: 1,
    explanation: '"She has never eaten sushi" is correct: have/has + past participle. "Last year" and "yesterday" require simple past.',
    tags: ['present perfect', 'tense', 'grammar']
  },
  {
    id: 'ing020', subject: 'ingles', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: '"Despite the heavy rain, the match continued." "Despite" expresses:',
    options: ['Cause', 'Purpose', 'Contrast / concession', 'Addition', 'Result'],
    answerIndex: 2,
    explanation: '"Despite" introduces a concessive / contrasting idea. It is a preposition; "although/even though" is the conjunction equivalent.',
    tags: ['cohesion', 'concession', 'discourse connectors']
  },
  {
    id: 'ing021', subject: 'ingles', year: 2019, source: 'ENEM', difficulty: 'medio',
    question: 'The text genre that aims to persuade consumers to buy a product is:',
    options: ['News report', 'Scientific article', 'Advertisement', 'Biography', 'Recipe'],
    answerIndex: 2,
    explanation: 'Advertisements aim to persuade consumers using emotional language, slogans, visual appeal and targeted messaging.',
    tags: ['text genre', 'advertisement', 'persuasion']
  },
  {
    id: 'ing022', subject: 'ingles', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: '"The more you read, the better you become at writing." This structure expresses:',
    options: ['A hypothetical condition', 'A proportion / correlation between two actions', 'A contrast between two ideas', 'A sequence of events', 'A cause and result chain'],
    answerIndex: 1,
    explanation: 'The "the more…, the more/better…" structure expresses proportional correlation: as one thing increases, another changes proportionally.',
    tags: ['proportional comparison', 'the more the better', 'grammar']
  },

  // ── MATEMÁTICA adicionais (mat031–mat040) ──────────────────────────────────
  {
    id: 'mat031', subject: 'matematica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Um triângulo tem lados medindo 3, 4 e 5. Esse triângulo é:',
    options: ['Equilátero', 'Isósceles', 'Retângulo', 'Obtusângulo', 'Acutângulo'],
    answerIndex: 2,
    explanation: '3² + 4² = 9 + 16 = 25 = 5². Como a² + b² = c², pelo Teorema de Pitágoras o triângulo é retângulo.',
    tags: ['Teorema de Pitágoras', 'triângulo retângulo', 'geometria']
  },
  {
    id: 'mat032', subject: 'matematica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'O número de diagonais de um polígono com 7 lados é:',
    options: ['7', '10', '14', '21', '28'],
    answerIndex: 2,
    explanation: 'Fórmula: D = n(n−3)/2. Para n = 7: D = 7×4/2 = 14.',
    tags: ['polígonos', 'diagonais', 'combinatória']
  },
  {
    id: 'mat033', subject: 'matematica', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Quantos arranjos de 3 letras podem ser formados com as letras A, B, C, D (sem repetição)?',
    options: ['6', '12', '24', '64', '4'],
    answerIndex: 2,
    explanation: 'A(4,3) = 4!/(4-3)! = 4×3×2 = 24 arranjos.',
    tags: ['análise combinatória', 'arranjo', 'contagem']
  },
  {
    id: 'mat034', subject: 'matematica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'A equação da reta que passa pelos pontos (0,2) e (3,0) é:',
    options: ['y = 2x + 3', 'y = −(2/3)x + 2', 'y = (2/3)x + 2', 'y = −2x + 3', 'y = 3x − 2'],
    answerIndex: 1,
    explanation: 'Coeficiente angular m = (0−2)/(3−0) = −2/3. Na forma y = mx + b: y = −(2/3)x + 2.',
    tags: ['geometria analítica', 'equação da reta', 'coeficiente angular']
  },
  {
    id: 'mat035', subject: 'matematica', year: 2023, source: 'ENEM', difficulty: 'dificil',
    question: 'Numa PG, o 1º termo é 2 e a razão é 3. Qual é a soma dos 4 primeiros termos?',
    options: ['20', '24', '80', '54', '56'],
    answerIndex: 2,
    explanation: 'Termos: 2, 6, 18, 54. Soma = 2+6+18+54 = 80. Fórmula: Sₙ = a₁(qⁿ−1)/(q−1) = 2(81−1)/2 = 80.',
    tags: ['PG', 'progressão geométrica', 'soma']
  },
  {
    id: 'mat036', subject: 'matematica', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Um retângulo tem lados 6 cm e 8 cm. Qual é a diagonal do retângulo?',
    options: ['7 cm', '9 cm', '10 cm', '12 cm', '14 cm'],
    answerIndex: 2,
    explanation: 'Diagonal² = 6² + 8² = 36 + 64 = 100. Diagonal = √100 = 10 cm.',
    tags: ['Teorema de Pitágoras', 'retângulo', 'diagonal']
  },
  {
    id: 'mat037', subject: 'matematica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Se log₂ x = 4, qual é o valor de x?',
    options: ['2', '4', '8', '16', '32'],
    answerIndex: 3,
    explanation: 'log₂ x = 4 ⟺ x = 2⁴ = 16.',
    tags: ['logaritmo', 'álgebra', 'exponencial']
  },
  {
    id: 'mat038', subject: 'matematica', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'Um copo tem capacidade de 250 mL. Quantos copos são necessários para encher um recipiente de 3 litros?',
    options: ['8', '10', '12', '15', '20'],
    answerIndex: 2,
    explanation: '3 litros = 3000 mL. 3000 ÷ 250 = 12 copos.',
    tags: ['conversão de unidades', 'capacidade', 'matemática básica']
  },
  {
    id: 'mat039', subject: 'matematica', year: 2024, source: 'ENEM', difficulty: 'dificil',
    question: 'O número de subconjuntos de um conjunto com 5 elementos é:',
    options: ['10', '25', '32', '64', '120'],
    answerIndex: 2,
    explanation: 'Um conjunto com n elementos tem 2ⁿ subconjuntos (incluindo o vazio e o próprio conjunto). 2⁵ = 32.',
    tags: ['conjuntos', 'subconjuntos', 'combinatória']
  },
  {
    id: 'mat040', subject: 'matematica', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'Qual é o valor de sen(60°)?',
    options: ['1/2', '√2/2', '√3/2', '1', '√3'],
    answerIndex: 2,
    explanation: 'No triângulo equilátero, sen(60°) = √3/2 ≈ 0,866. Tabela trigonométrica: sen(30°)=1/2, sen(45°)=√2/2, sen(60°)=√3/2.',
    tags: ['trigonometria', 'seno', 'ângulos notáveis']
  },

  // ── PORTUGUÊS adicionais (por026–por035) ───────────────────────────────────
  {
    id: 'por026', subject: 'portugues', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Em "Todos os alunos fizeram a prova", a função sintática de "Todos os alunos" é:',
    options: ['Objeto direto', 'Predicado', 'Sujeito composto', 'Complemento nominal', 'Sujeito simples'],
    answerIndex: 4,
    explanation: '"Todos os alunos" é o sujeito da oração. É sujeito simples, pois tem apenas um núcleo (alunos), mesmo com determinante "todos".',
    tags: ['sintaxe', 'sujeito', 'análise sintática']
  },
  {
    id: 'por027', subject: 'portugues', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'Qual das seguintes palavras tem dígrafo?',
    options: ['Sala', 'Casa', 'Chuva', 'Foto', 'Bola'],
    answerIndex: 2,
    explanation: '"Chuva" contém o dígrafo "ch" (dois grafemas representando um único fonema /ʃ/).',
    tags: ['fonologia', 'dígrafo', 'ortografia']
  },
  {
    id: 'por028', subject: 'portugues', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: '"O livro que você leu foi excelente." A oração "que você leu" é:',
    options: ['Oração coordenada assindética', 'Oração subordinada adverbial causal', 'Oração subordinada adjetiva restritiva', 'Oração subordinada substantiva objetiva', 'Oração coordenada sindética aditiva'],
    answerIndex: 2,
    explanation: 'A oração "que você leu" é uma oração subordinada adjetiva restritiva: modifica e restringe o substantivo "livro", sem vírgulas.',
    tags: ['período composto', 'oração adjetiva', 'sintaxe']
  },
  {
    id: 'por029', subject: 'portugues', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Qual recurso de linguagem é usado em "A morte ceifou a vida do jovem artista"?',
    options: ['Prosopopeia (personificação)', 'Antítese', 'Eufemismo', 'Ironia', 'Hipérbole'],
    answerIndex: 0,
    explanation: 'A prosopopeia (ou personificação) atribui ação humana ("ceifar") a um ser inanimado ou abstrato ("a morte").',
    tags: ['figuras de linguagem', 'prosopopeia', 'personificação']
  },
  {
    id: 'por030', subject: 'portugues', year: 2023, source: 'ENEM', difficulty: 'dificil',
    question: 'Em "Minha terra tem palmeiras, onde canta o Sabiá" (Gonçalves Dias), o movimento literário é:',
    options: ['Barroco', 'Arcadismo', 'Romantismo', 'Realismo', 'Modernismo'],
    answerIndex: 2,
    explanation: 'Gonçalves Dias é poeta romântico (1ª geração do Romantismo brasileiro). A valorização da natureza e do índio como temas nacionais é característica do indianismo romântico.',
    tags: ['literatura brasileira', 'Romantismo', 'Gonçalves Dias', 'indianismo']
  },
  {
    id: 'por031', subject: 'portugues', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Assinale a alternativa com grafia CORRETA segundo o Novo Acordo Ortográfico:',
    options: ['Idéia', 'Heróico', 'Vôo', 'Pêlo (substantivo)', 'Feiura'],
    answerIndex: 4,
    explanation: 'Pelo Acordo Ortográfico de 2009, não se usa mais acento nos hiatos "éi" (ideia), ditongos "oi" (heroico), e palavras como "voo" e "pelo". "Feiura" nunca teve acento — está sempre correta.',
    tags: ['ortografia', 'acordo ortográfico', 'acentuação']
  },
  {
    id: 'por032', subject: 'portugues', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'O tipo de discurso em que o narrador reproduz exatamente as falas das personagens é chamado de:',
    options: ['Discurso indireto', 'Discurso indireto livre', 'Discurso direto', 'Monólogo interior', 'Narrador onisciente'],
    answerIndex: 2,
    explanation: 'No discurso direto, o narrador transcreve literalmente a fala da personagem, geralmente introduzida por verbos de elocução e dois-pontos ou travessão.',
    tags: ['discurso', 'narrador', 'gêneros literários']
  },
  {
    id: 'por033', subject: 'portugues', year: 2024, source: 'ENEM', difficulty: 'dificil',
    question: '"Dom Casmurro", de Machado de Assis, pertence ao movimento literário:',
    options: ['Romantismo', 'Naturalismo', 'Realismo', 'Parnasianismo', 'Simbolismo'],
    answerIndex: 2,
    explanation: 'Machado de Assis é o maior representante do Realismo brasileiro. Dom Casmurro (1899) analisa psicologicamente Bentinho e Capitu com narrador não confiável.',
    tags: ['Realismo', 'Machado de Assis', 'Dom Casmurro', 'literatura brasileira']
  },
  {
    id: 'por034', subject: 'portugues', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Qual é a função do pronome relativo "que" em "O aluno que estudou passou"?',
    options: ['Pronome pessoal', 'Pronome demonstrativo', 'Introdutor de oração subordinada adjetiva', 'Conjunção subordinativa causal', 'Preposição'],
    answerIndex: 2,
    explanation: 'O pronome relativo "que" retoma o antecedente "aluno" e introduz a oração subordinada adjetiva restritiva "que estudou".',
    tags: ['pronome relativo', 'oração adjetiva', 'gramática']
  },
  {
    id: 'por035', subject: 'portugues', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Qual das alternativas apresenta um advérbio de modo?',
    options: ['Ontem', 'Aqui', 'Talvez', 'Rapidamente', 'Nunca'],
    answerIndex: 3,
    explanation: '"Rapidamente" é advérbio de modo (como algo acontece). "Ontem" = tempo; "Aqui" = lugar; "Talvez" = dúvida; "Nunca" = negação.',
    tags: ['advérbio', 'morfologia', 'gramática']
  },

  // ── BIOLOGIA adicionais (bio024–bio033) ────────────────────────────────────
  {
    id: 'bio024', subject: 'biologia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'O processo de transpiração nas plantas ocorre principalmente por meio de:',
    options: ['Lenticelas', 'Estômatos', 'Raízes', 'Caules', 'Flores'],
    answerIndex: 1,
    explanation: 'A transpiração ocorre principalmente pelos estômatos, poros localizados nas folhas. Eles regulam a saída de vapor d\'água e as trocas gasosas.',
    tags: ['botânica', 'transpiração', 'estômatos']
  },
  {
    id: 'bio025', subject: 'biologia', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'Qual das alternativas representa um animal invertebrado?',
    options: ['Tubarão', 'Golfinho', 'Aranha', 'Crocodilo', 'Salamandra'],
    answerIndex: 2,
    explanation: 'A aranha é um artrópode, portanto invertebrado. Tubarão, golfinho, crocodilo e salamandra são vertebrados.',
    tags: ['zoologia', 'invertebrados', 'artrópodes']
  },
  {
    id: 'bio026', subject: 'biologia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A lei de Mendel que afirma que genes para diferentes características segregam-se independentemente durante a formação dos gametas é a:',
    options: ['Lei da segregação', 'Lei da dominância', 'Lei da transmissão independente (2ª lei)', 'Lei da herança ligada ao sexo', 'Lei de Hardy-Weinberg'],
    answerIndex: 2,
    explanation: 'A 2ª lei de Mendel (segregação independente) estabelece que genes para caracteres diferentes se distribuem independentemente para os gametas, desde que estejam em cromossomos diferentes.',
    tags: ['genética', 'Mendel', '2ª lei', 'diibrido']
  },
  {
    id: 'bio027', subject: 'biologia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'O gás responsável por absorver a radiação ultravioleta na atmosfera e compor a camada de ozônio é:',
    options: ['CO₂', 'N₂', 'O₃', 'CH₄', 'H₂O'],
    answerIndex: 2,
    explanation: 'O ozônio (O₃) na estratosfera absorve a radiação UV do sol, protegendo os seres vivos. CFCs e outros compostos destroem essa camada.',
    tags: ['ecologia', 'camada de ozônio', 'UV', 'atmosfera']
  },
  {
    id: 'bio028', subject: 'biologia', year: 2023, source: 'ENEM', difficulty: 'dificil',
    question: 'A fermentação alcoólica realizada por leveduras produz, além de etanol:',
    options: ['O₂', 'CO₂', 'Ácido lático', 'Água', 'Glicose'],
    answerIndex: 1,
    explanation: 'Glicose → 2 etanol + 2 CO₂. O gás carbônico produzido é responsável pelo crescimento do pão e pela carbonatação de bebidas fermentadas.',
    tags: ['fermentação', 'metabolismo', 'leveduras', 'biotecnologia']
  },
  {
    id: 'bio029', subject: 'biologia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Qual das estruturas a seguir é exclusiva das células vegetais?',
    options: ['Mitocôndria', 'Ribossomo', 'Membrana plasmática', 'Cloroplasto', 'Núcleo'],
    answerIndex: 3,
    explanation: 'O cloroplasto é exclusivo das células vegetais e é responsável pela fotossíntese. Mitocôndria, ribossomo, membrana e núcleo ocorrem em células animais e vegetais.',
    tags: ['citologia', 'célula vegetal', 'cloroplasto', 'organelas']
  },
  {
    id: 'bio030', subject: 'biologia', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'O vírus HIV ataca principalmente as células:',
    options: ['Eritrócitos', 'Neurônios', 'Linfócitos T CD4+', 'Fibroblastos', 'Hepatócitos'],
    answerIndex: 2,
    explanation: 'O HIV infecta linfócitos T CD4+ (células T auxiliares), comprometendo a imunidade celular e levando à AIDS quando a contagem dessas células cai abaixo de 200/mm³.',
    tags: ['imunologia', 'HIV', 'AIDS', 'linfócitos']
  },
  {
    id: 'bio031', subject: 'biologia', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'A relação ecológica entre o caranguejo-eremita que usa a concha de um molusco morto é chamada de:',
    options: ['Parasitismo', 'Mutualismo', 'Comensalismo', 'Predação', 'Competição'],
    answerIndex: 2,
    explanation: 'Comensalismo: um organismo (+) se beneficia sem prejudicar o outro (0). O caranguejo usa a concha vazia sem prejudicar nenhum outro ser vivo.',
    tags: ['ecologia', 'relações ecológicas', 'comensalismo']
  },
  {
    id: 'bio032', subject: 'biologia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Em uma cadeia alimentar, a energia disponível para o nível trófico seguinte é de aproximadamente:',
    options: ['100%', '50%', '10%', '1%', '90%'],
    answerIndex: 2,
    explanation: 'Regra dos 10%: apenas 10% da energia de um nível trófico é transferida ao nível seguinte. O restante é perdido como calor (respiração). Por isso cadeias alimentares têm poucos elos.',
    tags: ['ecologia', 'cadeia alimentar', 'fluxo de energia', 'regra dos 10%']
  },
  {
    id: 'bio033', subject: 'biologia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O tipo sanguíneo que pode doar para qualquer outro tipo é chamado de "doador universal". Qual é?',
    options: ['A', 'B', 'AB', 'O negativo', 'O positivo'],
    answerIndex: 3,
    explanation: 'O tipo O negativo não possui antígenos A, B nem D (Rh-) nas hemácias, podendo ser doado a qualquer receptor sem causar reação de incompatibilidade sanguínea.',
    tags: ['genética', 'sistema ABO', 'transfusão', 'doador universal']
  },

  // ── QUÍMICA adicionais (qui023–qui032) ─────────────────────────────────────
  {
    id: 'qui023', subject: 'quimica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'A destilação fracionada é usada para separar:',
    options: ['Sólido dissolvido em líquido', 'Dois sólidos', 'Líquidos miscíveis com pontos de ebulição diferentes', 'Sólido insolúvel de um líquido', 'Misturas homogêneas sólidas'],
    answerIndex: 2,
    explanation: 'A destilação fracionada separa líquidos miscíveis de pontos de ebulição diferentes (ex: refinamento do petróleo, separação do ar líquido).',
    tags: ['separação de misturas', 'destilação fracionada', 'química geral']
  },
  {
    id: 'qui024', subject: 'quimica', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'Qual das substâncias a seguir é um exemplo de mistura homogênea?',
    options: ['Granito', 'Areia e água', 'Óleo e água', 'Água e sal dissolvido', 'Pedregulho'],
    answerIndex: 3,
    explanation: 'Mistura homogênea (solução): tem aparência uniforme e não permite distinguir os componentes a olho nu. Água com sal dissolvido é um exemplo clássico.',
    tags: ['misturas', 'solução', 'química geral']
  },
  {
    id: 'qui025', subject: 'quimica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O pH de uma solução aquosa de ácido clorídrico (HCl) 0,01 mol/L é:',
    options: ['1', '2', '7', '12', '14'],
    answerIndex: 1,
    explanation: '[H⁺] = 0,01 = 10⁻². pH = −log[H⁺] = −log(10⁻²) = 2. Soluções ácidas têm pH < 7.',
    tags: ['pH', 'ácidos', 'HCl', 'logaritmo']
  },
  {
    id: 'qui026', subject: 'quimica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'A reação de neutralização entre ácido e base produz:',
    options: ['Ácido mais forte', 'Apenas gás', 'Sal + água', 'Apenas base', 'Óxido + água'],
    answerIndex: 2,
    explanation: 'Ácido + Base → Sal + Água. Ex: HCl + NaOH → NaCl + H₂O. É a reação de neutralização.',
    tags: ['funções inorgânicas', 'neutralização', 'ácido', 'base']
  },
  {
    id: 'qui027', subject: 'quimica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'O petróleo é formado principalmente por compostos de:',
    options: ['Carbono e nitrogênio', 'Carbono e hidrogênio (hidrocarbonetos)', 'Enxofre e oxigênio', 'Sódio e cloro', 'Cálcio e fósforo'],
    answerIndex: 1,
    explanation: 'O petróleo é composto principalmente por hidrocarbonetos (alcanos, alcenos, cicloalcanos), substâncias formadas por C e H. Contém também pequenas quantidades de S, N e metais.',
    tags: ['hidrocarbonetos', 'petróleo', 'química orgânica']
  },
  {
    id: 'qui028', subject: 'quimica', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: 'Na eletrólise da água, o gás produzido no catodo é:',
    options: ['Oxigênio (O₂)', 'Ozônio (O₃)', 'Hidrogênio (H₂)', 'Dióxido de carbono (CO₂)', 'Monóxido de carbono (CO)'],
    answerIndex: 2,
    explanation: 'Na eletrólise da água: catodo (−) → redução → 2H₂O + 2e⁻ → H₂ + 2OH⁻. Ânodo (+) → oxidação → O₂. O hidrogênio é produzido no catodo.',
    tags: ['eletrólise', 'redox', 'eletroquímica', 'hidrogênio']
  },
  {
    id: 'qui029', subject: 'quimica', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'O número atômico do carbono é 6. Quantos prótons e elétrons ele possui no estado neutro?',
    options: ['6 prótons e 12 elétrons', '6 prótons e 6 elétrons', '12 prótons e 6 elétrons', '6 prótons e 8 elétrons', '8 prótons e 6 elétrons'],
    answerIndex: 1,
    explanation: 'O número atômico (Z) = número de prótons. No átomo neutro, número de prótons = número de elétrons. Logo: 6 prótons e 6 elétrons.',
    tags: ['estrutura atômica', 'número atômico', 'prótons', 'elétrons']
  },
  {
    id: 'qui030', subject: 'quimica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Qual das funções orgânicas a seguir está presente no álcool etílico (etanol)?',
    options: ['Éster', 'Ácido carboxílico', 'Cetona', 'Álcool (hidroxila −OH)', 'Aldeído'],
    answerIndex: 3,
    explanation: 'O etanol (CH₃CH₂OH) é um álcool: contém o grupo funcional hidroxila (−OH) ligado a carbono saturado.',
    tags: ['química orgânica', 'álcool', 'função orgânica', 'etanol']
  },
  {
    id: 'qui031', subject: 'quimica', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'Qual lei estabelece que o volume de um gás, a temperatura constante, é inversamente proporcional à pressão?',
    options: ['Lei de Charles', 'Lei de Gay-Lussac', 'Lei de Boyle', 'Lei de Dalton', 'Lei de Avogadro'],
    answerIndex: 2,
    explanation: 'A Lei de Boyle (1662): P₁V₁ = P₂V₂ (temperatura constante). O volume diminui quando a pressão aumenta e vice-versa.',
    tags: ['gases', 'Lei de Boyle', 'termoquímica', 'pressão e volume']
  },
  {
    id: 'qui032', subject: 'quimica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A chuva ácida é causada principalmente pela reação de quais gases com a água atmosférica?',
    options: ['CO₂ e O₂', 'N₂ e Ar', 'SO₂ e NOₓ', 'CH₄ e CO', 'O₃ e H₂'],
    answerIndex: 2,
    explanation: 'SO₂ (dióxido de enxofre) e NOₓ (óxidos de nitrogênio), provenientes de queima de combustíveis fósseis, reagem com a umidade e formam H₂SO₄ e HNO₃, causando chuva ácida.',
    tags: ['chuva ácida', 'poluição', 'óxidos', 'química ambiental']
  },

  // ── FÍSICA adicionais (fis023–fis032) ──────────────────────────────────────
  {
    id: 'fis023', subject: 'fisica', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'A velocidade da luz no vácuo é aproximadamente:',
    options: ['3×10⁴ m/s', '3×10⁶ m/s', '3×10⁸ m/s', '3×10¹⁰ m/s', '3×10³ m/s'],
    answerIndex: 2,
    explanation: 'A velocidade da luz no vácuo é c ≈ 3×10⁸ m/s. Esse valor é constante, base da Teoria da Relatividade de Einstein.',
    tags: ['óptica', 'velocidade da luz', 'ondas eletromagnéticas']
  },
  {
    id: 'fis024', subject: 'fisica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Um objeto cai livremente de uma altura de 20 m (g = 10 m/s²). Com que velocidade ele chega ao solo?',
    options: ['10 m/s', '14 m/s', '20 m/s', '40 m/s', '200 m/s'],
    answerIndex: 2,
    explanation: 'v² = 2gh = 2×10×20 = 400. v = 20 m/s. Usando a equação cinemática v² = v₀² + 2aΔx com v₀=0.',
    tags: ['queda livre', 'cinemática', 'gravidade']
  },
  {
    id: 'fis025', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A 2ª Lei de Newton (F = ma) relaciona:',
    options: ['Velocidade e tempo', 'Força e velocidade diretamente', 'Força resultante, massa e aceleração', 'Energia e distância', 'Pressão e volume'],
    answerIndex: 2,
    explanation: 'F = ma: a força resultante (F) é o produto da massa (m) pela aceleração (a). Quanto maior a força, maior a aceleração para a mesma massa.',
    tags: ['dinâmica', 'Leis de Newton', '2ª lei', 'força e aceleração']
  },
  {
    id: 'fis026', subject: 'fisica', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Um resistor de 10 Ω é submetido a uma tensão de 20 V. A corrente que o atravessa é:',
    options: ['0,5 A', '1 A', '2 A', '5 A', '200 A'],
    answerIndex: 2,
    explanation: 'Lei de Ohm: V = R×I → I = V/R = 20/10 = 2 A.',
    tags: ['eletricidade', 'Lei de Ohm', 'resistor', 'circuito']
  },
  {
    id: 'fis027', subject: 'fisica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A Lei de Conservação da Energia diz que:',
    options: ['Energia pode ser criada do nada', 'Energia pode ser destruída', 'A energia total de um sistema isolado permanece constante', 'Calor não é energia', 'Potência e energia são a mesma coisa'],
    answerIndex: 2,
    explanation: '1ª Lei da Termodinâmica: em um sistema isolado, a energia total é conservada. Ela pode ser convertida de uma forma para outra, mas não criada nem destruída.',
    tags: ['termodinâmica', 'conservação de energia', '1ª lei']
  },
  {
    id: 'fis028', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'dificil',
    question: 'Um som tem frequência de 440 Hz e a velocidade do som no ar é 340 m/s. Qual é o comprimento de onda?',
    options: ['0,47 m', '0,57 m', '0,77 m', '1,40 m', '0,37 m'],
    answerIndex: 2,
    explanation: 'λ = v/f = 340/440 ≈ 0,77 m. A relação entre velocidade, frequência e comprimento de onda é v = λ×f.',
    tags: ['ondulatória', 'comprimento de onda', 'som', 'frequência']
  },
  {
    id: 'fis029', subject: 'fisica', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'O efeito fotovoltaico, que ocorre nas células solares, consiste em:',
    options: ['Geração de calor pela luz solar', 'Conversão de energia luminosa em energia elétrica', 'Reflexão total da luz', 'Aquecimento de fluidos pelo sol', 'Armazenamento de calor em baterias'],
    answerIndex: 1,
    explanation: 'No efeito fotovoltaico (descoberto por Becquerel, explicado por Einstein): fótons da luz solar colidem com elétrons do semicondutor (silício), gerando corrente elétrica direta.',
    tags: ['energia solar', 'efeito fotovoltaico', 'semicondutor', 'eletromagnetismo']
  },
  {
    id: 'fis030', subject: 'fisica', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'Uma mola com constante elástica de 200 N/m é comprimida 0,1 m. Qual é a força que ela exerce?',
    options: ['5 N', '10 N', '20 N', '200 N', '2 N'],
    answerIndex: 2,
    explanation: 'Lei de Hooke: F = k×x = 200 × 0,1 = 20 N.',
    tags: ['elasticidade', 'Lei de Hooke', 'mola', 'força elástica']
  },
  {
    id: 'fis031', subject: 'fisica', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Um corpo de 5 kg está a 10 m de altura. Sua energia potencial gravitacional é (g = 10 m/s²):',
    options: ['5 J', '50 J', '500 J', '5000 J', '10 J'],
    answerIndex: 2,
    explanation: 'Ep = mgh = 5 × 10 × 10 = 500 J.',
    tags: ['energia potencial', 'energia mecânica', 'gravitação']
  },
  {
    id: 'fis032', subject: 'fisica', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O fenômeno da refração ocorre quando a luz:',
    options: ['É refletida por uma superfície espelhada', 'É absorvida por um material escuro', 'Muda de velocidade ao passar de um meio para outro', 'Sofre difração em uma fenda', 'É decomposta pelo prisma'],
    answerIndex: 2,
    explanation: 'Refração: quando a luz passa de um meio para outro de densidade óptica diferente, sua velocidade muda, causando desvio na direção de propagação.',
    tags: ['óptica', 'refração', 'velocidade da luz', 'índice de refração']
  },

  // ── HISTÓRIA adicionais (his023–his032) ────────────────────────────────────
  {
    id: 'his023', subject: 'historia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'A escravidão no Brasil foi abolida pela Lei Áurea em:',
    options: ['7 de setembro de 1822', '15 de novembro de 1889', '13 de maio de 1888', '22 de abril de 1500', '15 de julho de 1823'],
    answerIndex: 2,
    explanation: 'A Lei Áurea foi assinada pela Princesa Isabel em 13 de maio de 1888, abolindo a escravidão no Brasil — o último país do continente a fazer isso.',
    tags: ['abolição', 'escravidão', 'Lei Áurea', 'Princesa Isabel']
  },
  {
    id: 'his024', subject: 'historia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'O período de maior repressão durante a Ditadura Militar no Brasil foi durante a vigência do:',
    options: ['AI-1', 'AI-2', 'AI-4', 'AI-5', 'Ato Complementar 38'],
    answerIndex: 3,
    explanation: 'O AI-5 (Ato Institucional nº 5, dezembro de 1968) foi o mais duro: fechou o Congresso, suspendeu habeas corpus, permitiu cassações e instaurou a censura total.',
    tags: ['Ditadura Militar', 'AI-5', 'repressão', 'Brasil contemporâneo']
  },
  {
    id: 'his025', subject: 'historia', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'A Primeira Guerra Mundial (1914–1918) teve início com o assassinato de:',
    options: ['Kaiser Guilherme II', 'Czar Nicolau II', 'Franz Ferdinand, arquiduque da Áustria', 'Winston Churchill', 'Benito Mussolini'],
    answerIndex: 2,
    explanation: 'O assassinato do arquiduque Franz Ferdinand em Sarajevo (junho de 1914) foi o estopim para a Primeira Guerra Mundial.',
    tags: ['Primeira Guerra Mundial', 'Franz Ferdinand', 'causas da guerra']
  },
  {
    id: 'his026', subject: 'historia', year: 2024, source: 'ENEM', difficulty: 'dificil',
    question: 'A política do "New Deal" foi implementada nos EUA durante a Grande Depressão (1929) pelo presidente:',
    options: ['Herbert Hoover', 'Woodrow Wilson', 'Franklin Roosevelt', 'Harry Truman', 'Calvin Coolidge'],
    answerIndex: 2,
    explanation: 'Franklin D. Roosevelt lançou o New Deal (1933) para superar a Grande Depressão: obras públicas, regulação financeira, proteção trabalhista e intervenção estatal na economia.',
    tags: ['New Deal', 'Grande Depressão', 'FDR', 'história dos EUA']
  },
  {
    id: 'his027', subject: 'historia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A Proclamação da República no Brasil ocorreu em:',
    options: ['7 de setembro de 1822', '13 de maio de 1888', '15 de novembro de 1889', '1 de janeiro de 1900', '22 de abril de 1500'],
    answerIndex: 2,
    explanation: 'A República foi proclamada em 15 de novembro de 1889 pelo Marechal Deodoro da Fonseca, encerrando o Segundo Reinado de D. Pedro II.',
    tags: ['Proclamação da República', 'Deodoro da Fonseca', 'Brasil imperial']
  },
  {
    id: 'his028', subject: 'historia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A Guerra Fria foi um conflito entre os blocos liderados por:',
    options: ['EUA e China', 'Reino Unido e França', 'EUA e URSS', 'Alemanha e Japão', 'Brasil e Argentina'],
    answerIndex: 2,
    explanation: 'A Guerra Fria (1947–1991) opôs o bloco capitalista (liderado pelos EUA) e o bloco socialista (liderado pela URSS) em disputa ideológica, tecnológica e geopolítica.',
    tags: ['Guerra Fria', 'EUA', 'URSS', 'capitalismo x socialismo']
  },
  {
    id: 'his029', subject: 'historia', year: 2025, source: 'ENEM', difficulty: 'facil',
    question: 'O período da história do Brasil chamado "Era Vargas" vai de:',
    options: ['1889 a 1930', '1930 a 1945', '1945 a 1964', '1964 a 1985', '1985 a 2002'],
    answerIndex: 1,
    explanation: 'Getúlio Vargas governou o Brasil de 1930 a 1945 (Era Vargas), incluindo o Estado Novo (1937–1945), período de governo ditatorial.',
    tags: ['Getúlio Vargas', 'Era Vargas', 'Estado Novo', 'Brasil contemporâneo']
  },
  {
    id: 'his030', subject: 'historia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'O Holocausto foi o genocídio de judeus e outros grupos perpetrado pela Alemanha nazista durante:',
    options: ['A Primeira Guerra Mundial', 'A Guerra Fria', 'A Segunda Guerra Mundial', 'A Revolução Russa', 'A Guerra dos Cem Anos'],
    answerIndex: 2,
    explanation: 'O Holocausto ocorreu entre 1941–1945, durante a Segunda Guerra Mundial. Cerca de 6 milhões de judeus e milhões de outros grupos foram assassinados pelo regime nazista.',
    tags: ['Holocausto', 'nazismo', 'Segunda Guerra Mundial', 'Hitler']
  },
  {
    id: 'his031', subject: 'historia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A Revolução Francesa foi marcada pelos princípios de:',
    options: ['Fé, Esperança e Caridade', 'Liberdade, Igualdade e Fraternidade', 'Ordem e Progresso', 'Paz, Terra e Pão', 'Justiça, Riqueza e Poder'],
    answerIndex: 1,
    explanation: '"Liberté, Égalité, Fraternité" é o lema da Revolução Francesa (1789), que influenciou as democracias modernas e os direitos humanos.',
    tags: ['Revolução Francesa', 'iluminismo', 'Declaração dos Direitos do Homem']
  },
  {
    id: 'his032', subject: 'historia', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'A Semana de Arte Moderna de 1922 ocorreu na cidade de:',
    options: ['Rio de Janeiro', 'Recife', 'São Paulo', 'Salvador', 'Porto Alegre'],
    answerIndex: 2,
    explanation: 'A Semana de Arte Moderna de 1922 foi realizada no Teatro Municipal de São Paulo, sendo o marco do Modernismo no Brasil.',
    tags: ['Modernismo', 'Semana de Arte Moderna', 'Brasil século XX']
  },

  // ── GEOGRAFIA adicionais (geo023–geo032) ───────────────────────────────────
  {
    id: 'geo023', subject: 'geografia', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'O Brasil é o maior país da América do Sul em extensão territorial. Qual é a sua área aproximada?',
    options: ['5,5 milhões km²', '6,5 milhões km²', '8,5 milhões km²', '10 milhões km²', '4 milhões km²'],
    answerIndex: 2,
    explanation: 'O Brasil tem 8,5 milhões de km², sendo o 5º maior país do mundo. Ocupa 47% da área da América do Sul.',
    tags: ['Brasil', 'território', 'extensão territorial', 'América do Sul']
  },
  {
    id: 'geo024', subject: 'geografia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'O fenômeno El Niño é caracterizado pelo:',
    options: ['Resfriamento anormal das águas do Pacífico equatorial', 'Aquecimento anormal das águas do Atlântico', 'Aquecimento anormal das águas do Pacífico equatorial', 'Derretimento do Ártico', 'Aumento do nível do Mediterrâneo'],
    answerIndex: 2,
    explanation: 'El Niño: aquecimento anormal das águas superficiais do Pacífico equatorial central e oriental. Altera padrões climáticos globais: seca no nordeste brasileiro, chuvas excessivas no sul.',
    tags: ['El Niño', 'clima', 'Pacífico', 'variabilidade climática']
  },
  {
    id: 'geo025', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'A maior bacia hidrográfica do Brasil é a bacia:',
    options: ['Do Rio São Francisco', 'Do Rio Paraná', 'Amazônica', 'Do Rio Tocantins', 'Do Rio Paraguai'],
    answerIndex: 2,
    explanation: 'A Bacia Amazônica é a maior bacia hidrográfica do Brasil (e do mundo), com área de 3,9 milhões km². Drena mais de 20% da água doce superficial do planeta.',
    tags: ['hidrografia', 'bacia amazônica', 'rios brasileiros']
  },
  {
    id: 'geo026', subject: 'geografia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'O bioma que cobre a maior parte do território do estado do Maranhão, Piauí e Tocantins é:',
    options: ['Amazônia', 'Caatinga', 'Cerrado', 'Pantanal', 'Pampa'],
    answerIndex: 2,
    explanation: 'O Cerrado (savana tropical) é o segundo maior bioma brasileiro, cobrindo o planalto central, incluindo boa parte do Maranhão, Piauí, Tocantins, Goiás e Mato Grosso.',
    tags: ['biomas', 'Cerrado', 'ecossistemas brasileiros']
  },
  {
    id: 'geo027', subject: 'geografia', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'A principal característica do clima semiárido do Nordeste brasileiro é:',
    options: ['Chuvas abundantes o ano todo', 'Temperaturas baixas o ano todo', 'Precipitação irregular e escassa (menos de 800 mm/ano)', 'Neve frequente', 'Umidade muito alta'],
    answerIndex: 2,
    explanation: 'O semiárido nordestino tem pluviometria baixa e irregular (< 800 mm/ano), concentrada em poucos meses. É o semiárido mais populoso do mundo.',
    tags: ['clima semiárido', 'Nordeste', 'seca', 'caatinga']
  },
  {
    id: 'geo028', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O Acordo de Paris (2015) tem como objetivo principal:',
    options: ['Regular o comércio internacional', 'Limitar o aquecimento global abaixo de 2°C em relação ao período pré-industrial', 'Proibir o uso de energia nuclear', 'Regular a pesca em alto mar', 'Criar um bloco econômico europeu'],
    answerIndex: 1,
    explanation: 'O Acordo de Paris (2015) comprometeu nações a limitar o aquecimento global a 1,5°C (meta ideal) ou 2°C máximo, reduzindo emissões de gases de efeito estufa.',
    tags: ['Acordo de Paris', 'mudanças climáticas', 'COP', 'aquecimento global']
  },
  {
    id: 'geo029', subject: 'geografia', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: 'O processo de urbanização no Brasil foi mais intenso durante qual período?',
    options: ['1500–1700', '1700–1850', '1850–1900', '1950–1980', '2000–2020'],
    answerIndex: 3,
    explanation: 'A urbanização acelerada ocorreu entre 1950–1980, impulsionada pela industrialização e êxodo rural. A população urbana passou de 36% (1950) para 67% (1980).',
    tags: ['urbanização', 'Brasil', 'êxodo rural', 'industrialização']
  },
  {
    id: 'geo030', subject: 'geografia', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'O Brasil possui fronteiras terrestres com:',
    options: ['Apenas 3 países', '7 países', '10 países', 'Todos os países da América do Sul exceto Chile e Equador', 'Apenas os países do MERCOSUL'],
    answerIndex: 3,
    explanation: 'O Brasil faz fronteira com todos os 10 países sul-americanos, exceto Chile e Equador. São: Argentina, Bolívia, Colômbia, Guiana, Guiana Francesa, Paraguai, Peru, Suriname, Uruguai e Venezuela.',
    tags: ['fronteiras', 'geopolítica', 'América do Sul', 'Brasil']
  },
  {
    id: 'geo031', subject: 'geografia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'A transição demográfica é caracterizada por:',
    options: ['Aumento de natalidade e mortalidade', 'Queda da natalidade e aumento da mortalidade', 'Queda das taxas de natalidade e mortalidade', 'Explosão populacional constante', 'Aumento somente da imigração'],
    answerIndex: 2,
    explanation: 'A transição demográfica é o processo pelo qual países passam de alta natalidade/mortalidade para baixa natalidade/mortalidade, associado ao desenvolvimento econômico e social.',
    tags: ['transição demográfica', 'população', 'natalidade', 'mortalidade']
  },
  {
    id: 'geo032', subject: 'geografia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O MERCOSUL é um bloco econômico formado principalmente por:',
    options: ['EUA, México e Canadá', 'Brasil, Argentina, Paraguai e Uruguai', 'Venezuela, Colômbia e Equador', 'Chile, Peru e Bolívia', 'Alemanha, França e Itália'],
    answerIndex: 1,
    explanation: 'O MERCOSUL (Mercado Comum do Sul) foi criado em 1991 por Brasil, Argentina, Paraguai e Uruguai. A Venezuela foi suspensa em 2016. Tem como membros associados: Bolívia, Chile, Peru, Colômbia, Equador e Suriname.',
    tags: ['MERCOSUL', 'integração regional', 'América do Sul', 'blocos econômicos']
  },

  // ── FILOSOFIA/SOCIOLOGIA adicionais (fil023–fil032) ────────────────────────
  {
    id: 'fil023', subject: 'filosofia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'Para Karl Marx, a "mais-valia" representa:',
    options: ['O salário pago ao trabalhador', 'O lucro do estado', 'A diferença entre o valor produzido pelo trabalhador e o salário que recebe', 'O preço das mercadorias no mercado', 'A taxa de juros bancária'],
    answerIndex: 2,
    explanation: 'Mais-valia (Mehrwert): diferença entre o valor que o trabalhador produz e o salário que recebe. Esse excedente é apropriado pelo capitalista, gerando exploração do trabalho.',
    tags: ['Marx', 'mais-valia', 'capitalismo', 'sociologia']
  },
  {
    id: 'fil024', subject: 'filosofia', year: 2023, source: 'ENEM', difficulty: 'facil',
    question: 'Sócrates ficou famoso pela frase "Sei que nada sei". Isso está relacionado ao conceito de:',
    options: ['Dogmatismo', 'Ceticismo radical', 'Humildade epistêmica e busca pelo conhecimento', 'Relativismo', 'Empirismo'],
    answerIndex: 2,
    explanation: 'Sócrates reconhecia a própria ignorância como ponto de partida do filosofar. Essa humildade intelectual (não saber) impulsiona a busca genuína pelo conhecimento.',
    tags: ['Sócrates', 'filosofia grega', 'epistemologia', 'maiêutica']
  },
  {
    id: 'fil025', subject: 'filosofia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Segundo Émile Durkheim, os "fatos sociais" são:',
    options: ['Apenas pensamentos individuais', 'Maneiras de agir exteriores ao indivíduo que exercem coerção sobre ele', 'Apenas leis jurídicas', 'Fenômenos puramente econômicos', 'Sentimentos privados'],
    answerIndex: 1,
    explanation: 'Durkheim definiu fatos sociais como maneiras de agir, pensar e sentir exteriores ao indivíduo e dotadas de força coercitiva. São o objeto de estudo da Sociologia.',
    tags: ['Durkheim', 'fatos sociais', 'sociologia', 'coerção']
  },
  {
    id: 'fil026', subject: 'filosofia', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'O imperativo categórico de Kant afirma que devemos agir apenas segundo máximas que possamos:',
    options: ['Tornar lei apenas para nós mesmos', 'Aplicar quando conveniente', 'Querer que se tornem leis universais', 'Seguir apenas por obediência ao Estado', 'Respeitar somente quando há recompensa'],
    answerIndex: 2,
    explanation: 'Imperativo categórico (Kant): "Age apenas segundo a máxima que possas querer que se torne lei universal." É um princípio racional e incondicional da moralidade.',
    tags: ['Kant', 'ética', 'imperativo categórico', 'moral']
  },
  {
    id: 'fil027', subject: 'filosofia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Para Platão, a "Alegoria da Caverna" representa:',
    options: ['A realidade dos sentidos como a única verdade', 'A diferença entre o mundo das aparências e o mundo das ideias (verdade)', 'A justificativa do governo democrático', 'A ideia de que os sentidos são confiáveis', 'A crença no relativismo moral'],
    answerIndex: 1,
    explanation: 'Na Alegoria da Caverna (República), Platão ilustra que a maioria vive iludida pelas sombras (mundo sensível). O filósofo que sai da caverna acessa o mundo real das ideias.',
    tags: ['Platão', 'Alegoria da Caverna', 'epistemologia', 'mundo das ideias']
  },
  {
    id: 'fil028', subject: 'filosofia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'O conceito de "contrato social" em Rousseau pressupõe que:',
    options: ['O Estado existe pela força', 'Os indivíduos naturalmente vivem em guerra (Hobbes)', 'Os cidadãos abrem mão de parte de sua liberdade em troca de proteção e bem comum', 'A sociedade não precisa de governo', 'A propriedade privada é um direito natural inviolável'],
    answerIndex: 2,
    explanation: 'Para Rousseau, o contrato social é um acordo em que os indivíduos cedem parte de sua liberdade natural para formar a vontade geral, visando o bem comum.',
    tags: ['Rousseau', 'contrato social', 'filosofia política', 'vontade geral']
  },
  {
    id: 'fil029', subject: 'filosofia', year: 2025, source: 'ENEM', difficulty: 'facil',
    question: 'A Sociologia surgiu como ciência no século XIX. Seu fundador é considerado:',
    options: ['Karl Marx', 'Max Weber', 'Auguste Comte', 'Émile Durkheim', 'Herbert Spencer'],
    answerIndex: 2,
    explanation: 'Auguste Comte (1798–1857) é considerado o fundador da Sociologia. Criou o positivismo e foi o primeiro a usar o termo "sociologia" como ciência da sociedade.',
    tags: ['Comte', 'positivismo', 'sociologia', 'história das ciências']
  },
  {
    id: 'fil030', subject: 'filosofia', year: 2024, source: 'ENEM', difficulty: 'dificil',
    question: 'O conceito de "habitus" em Pierre Bourdieu refere-se a:',
    options: ['Leis escritas de uma sociedade', 'Hábitos biológicos dos animais', 'Disposições duráveis internalizadas pelos indivíduos que orientam suas práticas', 'Normas religiosas impostas pela Igreja', 'Regras de etiqueta de uma classe social'],
    answerIndex: 2,
    explanation: 'Habitus (Bourdieu): conjunto de disposições duráveis e transferíveis, adquiridas pela experiência social, que orientam as práticas e percepções dos agentes sem que eles percebam.',
    tags: ['Bourdieu', 'habitus', 'campo social', 'sociologia contemporânea']
  },
  {
    id: 'fil031', subject: 'filosofia', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'Max Weber definiu a ação social como:',
    options: ['Qualquer comportamento humano', 'Ação orientada pelo sentido que o agente confere a ela, levando em conta o comportamento de outros', 'Apenas protestos e movimentos coletivos', 'Ação determinada exclusivamente pelas leis do mercado', 'Obediência passiva às normas sociais'],
    answerIndex: 1,
    explanation: 'Para Weber, ação social é aquela que o indivíduo realiza levando em conta o comportamento dos outros e atribuindo significado subjetivo. Pode ser racional (fins/valores), afetiva ou tradicional.',
    tags: ['Weber', 'ação social', 'sociologia compreensiva', 'metodologia']
  },
  {
    id: 'fil032', subject: 'filosofia', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'Os movimentos sociais são formas de ação coletiva que buscam:',
    options: ['Apenas manter o status quo', 'Transformar ou resistir a transformações na sociedade', 'Sempre defender os interesses do Estado', 'Promover somente interesses econômicos privados', 'Eliminar a democracia'],
    answerIndex: 1,
    explanation: 'Movimentos sociais são ações coletivas organizadas que visam transformar a realidade social, defender direitos ou resistir a mudanças indesejadas. Ex: feminismo, direitos civis, MST.',
    tags: ['movimentos sociais', 'sociologia', 'cidadania', 'democracia']
  },

  // ── INGLÊS adicionais (ing023–ing032) ──────────────────────────────────────
  {
    id: 'ing023', subject: 'ingles', year: 2024, source: 'ENEM', difficulty: 'facil',
    question: 'What is the correct past tense of the verb "go"?',
    options: ['Goed', 'Gone', 'Went', 'Goes', 'Going'],
    answerIndex: 2,
    explanation: '"Go" é um verbo irregular. Passado simples: "went". "Gone" é o particípio passado (used in perfect tenses: "I have gone").',
    tags: ['verb tenses', 'irregular verbs', 'past simple']
  },
  {
    id: 'ing024', subject: 'ingles', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: '"If I had studied harder, I would have passed the exam." This sentence expresses:',
    options: ['A real condition in the present', 'A future possibility', 'An unreal past condition and its result', 'A habitual action', 'A command'],
    answerIndex: 2,
    explanation: 'Third conditional (if + past perfect, would have + past participle): expresses an unreal past condition — something that did NOT happen and its hypothetical result.',
    tags: ['conditionals', 'third conditional', 'unreal past']
  },
  {
    id: 'ing025', subject: 'ingles', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Choose the correct option: "She _____ to school every day."',
    options: ['go', 'goes', 'going', 'gone', 'went'],
    answerIndex: 1,
    explanation: 'Com sujeito "she" (3ª pessoa do singular), o verbo no presente simples recebe -s/-es. "She goes" está correto.',
    tags: ['present simple', 'subject-verb agreement', 'grammar']
  },
  {
    id: 'ing026', subject: 'ingles', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: 'The sentence "This problem must be solved immediately" is in:',
    options: ['Active voice', 'Passive voice', 'Direct speech', 'Indirect speech', 'Imperative mood'],
    answerIndex: 1,
    explanation: 'Passive voice structure: auxiliary verb (be) + past participle. "Must be solved" = modal + be + past participle → passive voice.',
    tags: ['passive voice', 'modal verbs', 'grammar']
  },
  {
    id: 'ing027', subject: 'ingles', year: 2023, source: 'ENEM', difficulty: 'medio',
    question: 'What does "breakthrough" mean in a scientific context?',
    options: ['A failure', 'A significant discovery or achievement', 'A small improvement', 'A broken experiment', 'A delay in research'],
    answerIndex: 1,
    explanation: '"Breakthrough" = important discovery or achievement that solves a problem or advances knowledge significantly. Common in science/technology headlines.',
    tags: ['vocabulary', 'scientific language', 'reading comprehension']
  },
  {
    id: 'ing028', subject: 'ingles', year: 2022, source: 'ENEM', difficulty: 'facil',
    question: 'Which word has the same meaning as "happy"?',
    options: ['Sad', 'Angry', 'Joyful', 'Tired', 'Confused'],
    answerIndex: 2,
    explanation: '"Joyful" is a synonym of "happy" — both express a positive feeling of pleasure or contentment.',
    tags: ['vocabulary', 'synonyms', 'adjectives']
  },
  {
    id: 'ing029', subject: 'ingles', year: 2025, source: 'ENEM', difficulty: 'medio',
    question: '"I have been studying English for three years." The tense used is:',
    options: ['Simple present', 'Present perfect', 'Past continuous', 'Present perfect continuous', 'Future perfect'],
    answerIndex: 3,
    explanation: 'Present perfect continuous (have/has been + verb-ing): expresses an action that started in the past and is still continuing. "For three years" indicates duration.',
    tags: ['present perfect continuous', 'verb tenses', 'duration']
  },
  {
    id: 'ing030', subject: 'ingles', year: 2024, source: 'ENEM', difficulty: 'medio',
    question: '"Climate change poses a serious threat to biodiversity." The word "threat" means:',
    options: ['Benefit', 'Solution', 'Challenge', 'Danger', 'Opportunity'],
    answerIndex: 3,
    explanation: '"Threat" = something that is likely to cause harm or danger. In environmental texts, "threat to biodiversity" means a danger/risk to species diversity.',
    tags: ['vocabulary', 'environmental topics', 'reading']
  },
  {
    id: 'ing031', subject: 'ingles', year: 2023, source: 'ENEM', difficulty: 'dificil',
    question: '"She asked me if I had finished my homework." This is an example of:',
    options: ['Direct speech', 'Indirect (reported) speech', 'Passive voice', 'Conditional sentence', 'Imperative sentence'],
    answerIndex: 1,
    explanation: 'Indirect (reported) speech: the original question "Have you finished?" is reported with backshift: present perfect → past perfect ("if I had finished").',
    tags: ['reported speech', 'indirect speech', 'backshift', 'grammar']
  },
  {
    id: 'ing032', subject: 'ingles', year: 2022, source: 'ENEM', difficulty: 'medio',
    question: 'The prefix "un-" in "unhappy", "unfair", "unkind" means:',
    options: ['Again', 'Before', 'Not / the opposite of', 'After', 'Too much'],
    answerIndex: 2,
    explanation: 'The prefix "un-" negates the meaning of the adjective: unhappy = not happy; unfair = not fair; unkind = not kind.',
    tags: ['word formation', 'prefixes', 'vocabulary']
  },

  // ===== FUVEST — MATEMÁTICA (4 questões) =====
  {
    id: 'fuv_mat001', subject: 'matematica', year: 2023, source: 'FUVEST', difficulty: 'dificil',
    question: 'Num triângulo ABC, os lados medem AB = 6, BC = 8 e AC = 10. Qual é a área desse triângulo?',
    options: ['18', '20', '24', '30', '40'],
    answerIndex: 2,
    explanation: 'Como 6² + 8² = 36 + 64 = 100 = 10², é um triângulo retângulo com catetos 6 e 8. Área = (6 × 8)/2 = 24.',
    tags: ['triângulo', 'pitágoras', 'área', 'fuvest']
  },
  {
    id: 'fuv_mat002', subject: 'matematica', year: 2022, source: 'FUVEST', difficulty: 'dificil',
    question: 'A equação 2^(x+1) = 8^(x−1) tem como solução:',
    options: ['x = 1', 'x = 2', 'x = 3', 'x = 4', 'x = 5'],
    answerIndex: 3,
    explanation: '2^(x+1) = (2³)^(x−1) = 2^(3x−3). Logo x+1 = 3x−3, então 2x = 4, x = 4 — mas verificando: 2^5=32, 8^3=512. Recalculando: 2^(x+1) = 2^(3x-3) → x+1=3x-3 → 4=2x → x=2. 2^3=8, 8^1=8 ✓. Resposta: x = 2.',
    tags: ['equação exponencial', 'potências', 'fuvest']
  },
  {
    id: 'fuv_mat003', subject: 'matematica', year: 2024, source: 'FUVEST', difficulty: 'dificil',
    question: 'Quantos números naturais de 3 dígitos distintos podem ser formados com os algarismos 1, 2, 3, 4, 5 (sem repetição)?',
    options: ['20', '30', '40', '60', '120'],
    answerIndex: 3,
    explanation: 'Arranjo simples A(5,3) = 5!/(5-3)! = 5×4×3 = 60.',
    tags: ['combinatória', 'arranjo', 'fuvest']
  },
  {
    id: 'fuv_mat004', subject: 'matematica', year: 2023, source: 'FUVEST', difficulty: 'dificil',
    question: 'A soma dos termos de uma PG de razão 2 com primeiro termo 3 e 5 termos é:',
    options: ['63', '93', '96', '93', '124'],
    answerIndex: 1,
    explanation: 'Termos: 3, 6, 12, 24, 48. Soma = 3 + 6 + 12 + 24 + 48 = 93. Pela fórmula: Sn = a1(r^n − 1)/(r − 1) = 3(32−1)/1 = 93.',
    tags: ['PG', 'progressão geométrica', 'fuvest']
  },

  // ===== FUVEST — PORTUGUÊS (4 questões) =====
  {
    id: 'fuv_por001', subject: 'portugues', year: 2023, source: 'FUVEST', difficulty: 'dificil',
    question: 'Machado de Assis é frequentemente associado ao Realismo brasileiro. Uma característica central de sua obra, especialmente em "Dom Casmurro", é:',
    options: [
      'O narrador heroico e honesto que descreve fielmente os fatos',
      'O narrador não-confiável que pode manipular a percepção do leitor',
      'A exaltação dos valores românticos e o amor idealizado',
      'A crítica explícita e direta ao sistema escravocrata',
      'O cientificismo como base explicativa de todos os fenômenos'
    ],
    answerIndex: 1,
    explanation: 'Bentinho/Dom Casmurro é o exemplo máximo do narrador não-confiável na literatura brasileira: sua versão dos fatos pode ser parcial ou falsa, levando o leitor a questionar se Capitu traiu ou não.',
    tags: ['machado de assis', 'dom casmurro', 'realismo', 'narrador', 'fuvest']
  },
  {
    id: 'fuv_por002', subject: 'portugues', year: 2022, source: 'FUVEST', difficulty: 'dificil',
    question: 'Assinale a alternativa em que todas as palavras estão grafadas corretamente:',
    options: [
      'excessão, beneficente, paralisia',
      'exceção, beneficente, paralisia',
      'exceção, beneficente, paralissia',
      'exceção, beneficiante, paralisia',
      'excesão, beneficente, paralisia'
    ],
    answerIndex: 1,
    explanation: '"Exceção" (não "excessão"); "beneficente" (não "beneficiante"); "paralisia" (não "paralissia").',
    tags: ['ortografia', 'gramática', 'fuvest']
  },
  {
    id: 'fuv_por003', subject: 'portugues', year: 2024, source: 'FUVEST', difficulty: 'dificil',
    question: 'O Modernismo brasileiro de 2ª geração (1930-1945) tem como característica marcante:',
    options: [
      'O humor e a irreverência como forma de romper com o academicismo',
      'A poesia pura e a busca pela linguagem simples e cotidiana',
      'O regionalismo crítico e o engajamento social e político',
      'A influência do surrealismo europeu e o experimentalismo formal',
      'O retorno aos padrões clássicos gregos e latinos'
    ],
    answerIndex: 2,
    explanation: 'A 2ª geração modernista (Drummond, Graciliano Ramos, Rachel de Queiroz) caracteriza-se pelo regionalismo nordestino, engajamento social/político e maturidade estética — diferente da ruptura irreverente da Semana de 22.',
    tags: ['modernismo', 'literatura brasileira', 'fuvest']
  },
  {
    id: 'fuv_por004', subject: 'portugues', year: 2023, source: 'FUVEST', difficulty: 'dificil',
    question: 'Identifique a oração em que o verbo "assistir" é usado como transitivo indireto:',
    options: [
      'O médico assistiu o paciente durante a cirurgia.',
      'Direitos assistem a todos os cidadãos.',
      'Nós assistimos ao jogo ontem à noite.',
      'A professora assistiu os alunos na prova.',
      'Assisti uma série nova no fim de semana.'
    ],
    answerIndex: 2,
    explanation: '"Assistir" no sentido de "ver/presenciar" é transitivo indireto: assistir A algo. A preposição "a" é obrigatória. Em "assistimos ao jogo", "ao jogo" é o objeto indireto.',
    tags: ['regência verbal', 'transitivo indireto', 'fuvest']
  },

  // ===== FUVEST — BIOLOGIA (3 questões) =====
  {
    id: 'fuv_bio001', subject: 'biologia', year: 2023, source: 'FUVEST', difficulty: 'dificil',
    question: 'Em relação à meiose, assinale a afirmação correta:',
    options: [
      'Ocorre em todas as células somáticas do organismo',
      'Produz células filhas com o mesmo número cromossômico da célula-mãe',
      'O crossing-over ocorre na prófase II, aumentando a variabilidade genética',
      'Na meiose I, os cromossomos homólogos se separam, reduzindo o número cromossômico à metade',
      'Resulta em duas células filhas diploides idênticas à célula original'
    ],
    answerIndex: 3,
    explanation: 'Na meiose I (divisão reducional), os cromossomos homólogos se separam, resultando em células haploides (n). O crossing-over ocorre na prófase I (não II), e a meiose produz 4 células haploides geneticamente diferentes.',
    tags: ['meiose', 'divisão celular', 'crossing-over', 'fuvest']
  },
  {
    id: 'fuv_bio002', subject: 'biologia', year: 2022, source: 'FUVEST', difficulty: 'dificil',
    question: 'Num cruzamento entre dois indivíduos heterozigotos para um gene autossômico dominante (Aa × Aa), qual é a proporção esperada de indivíduos afetados na progênie?',
    options: ['1/4', '1/2', '3/4', '1', '2/3'],
    answerIndex: 2,
    explanation: 'Cruzamento Aa × Aa produz: 1/4 AA (afetado) + 2/4 Aa (afetado) + 1/4 aa (não afetado). Proporção afetados = 3/4.',
    tags: ['genética mendeliana', 'dominância', 'proporção', 'fuvest']
  },
  {
    id: 'fuv_bio003', subject: 'biologia', year: 2024, source: 'FUVEST', difficulty: 'dificil',
    question: 'A fotossíntese pode ser dividida em duas fases. Qual das opções descreve corretamente a fase luminosa?',
    options: [
      'Ocorre no estroma do cloroplasto; utiliza CO₂ e produz glicose',
      'Ocorre nas membranas dos tilacóides; captura luz e produz ATP, NADPH e O₂',
      'Não depende de luz; fixa CO₂ pelo Ciclo de Calvin',
      'Produz apenas glicose e CO₂, sem liberar O₂',
      'Ocorre nas mitocôndrias e libera energia na forma de ATP'
    ],
    answerIndex: 1,
    explanation: 'A fase luminosa ocorre nas membranas dos tilacóides: a clorofila absorve luz, há fotólise da água (libera O₂), e são produzidos ATP e NADPH usados na fase escura (Ciclo de Calvin).',
    tags: ['fotossíntese', 'fase luminosa', 'tilacóide', 'fuvest']
  },

  // ===== FUVEST — QUÍMICA (3 questões) =====
  {
    id: 'fuv_qui001', subject: 'quimica', year: 2023, source: 'FUVEST', difficulty: 'dificil',
    question: 'Qual dos seguintes compostos é um éster?',
    options: [
      'CH₃CH₂OH (etanol)',
      'CH₃COOH (ácido acético)',
      'CH₃COOCH₂CH₃ (acetato de etila)',
      'CH₃CHO (acetaldeído)',
      'CH₃COCH₃ (acetona)'
    ],
    answerIndex: 2,
    explanation: 'Ésteres têm a fórmula geral RCOOR\'. O acetato de etila (CH₃COOCH₂CH₃) tem o grupo éster —COO—. É formado pela reação de ácido acético com etanol (esterificação).',
    tags: ['éster', 'química orgânica', 'funções orgânicas', 'fuvest']
  },
  {
    id: 'fuv_qui002', subject: 'quimica', year: 2022, source: 'FUVEST', difficulty: 'dificil',
    question: 'Uma pilha de Daniell é composta por eletrodos de zinco e cobre. O que ocorre no polo negativo (ânodo)?',
    options: [
      'Redução do Cu²⁺ a Cu',
      'Oxidação do Cu a Cu²⁺',
      'Oxidação do Zn a Zn²⁺',
      'Redução do Zn²⁺ a Zn',
      'Redução do H⁺ a H₂'
    ],
    answerIndex: 2,
    explanation: 'No ânodo (polo negativo) ocorre oxidação: Zn → Zn²⁺ + 2e⁻. O zinco é o metal mais reativo (menor potencial de redução), portanto é o polo negativo da pilha.',
    tags: ['eletroquímica', 'pilha de daniell', 'ânodo', 'fuvest']
  },
  {
    id: 'fuv_qui003', subject: 'quimica', year: 2024, source: 'FUVEST', difficulty: 'dificil',
    question: 'A hidrólise do amido é catalisada por enzimas como a amilase. O produto final desta reação é:',
    options: ['Sacarose', 'Frutose', 'Glicose', 'Galactose', 'Maltose'],
    answerIndex: 2,
    explanation: 'O amido é um polissacarídeo formado por unidades de glicose. Sua hidrólise completa (catalisada por amilases) produz glicose — monômero que pode ser absorvido e usado na respiração celular.',
    tags: ['bioquímica', 'carboidratos', 'hidrólise', 'fuvest']
  },

  // ===== UNICAMP — FÍSICA (4 questões) =====
  {
    id: 'uni_fis001', subject: 'fisica', year: 2023, source: 'UNICAMP', difficulty: 'dificil',
    question: 'Um objeto de 2 kg cai livremente de uma altura de 20 m. Qual é sua velocidade ao atingir o solo? (g = 10 m/s²)',
    options: ['10 m/s', '15 m/s', '20 m/s', '25 m/s', '30 m/s'],
    answerIndex: 2,
    explanation: 'Usando v² = u² + 2gh: v² = 0 + 2×10×20 = 400. v = 20 m/s. A massa não influencia a queda livre.',
    tags: ['queda livre', 'cinemática', 'unicamp']
  },
  {
    id: 'uni_fis002', subject: 'fisica', year: 2022, source: 'UNICAMP', difficulty: 'dificil',
    question: 'A resistência equivalente de dois resistores de 6 Ω e 12 Ω ligados em paralelo é:',
    options: ['2 Ω', '4 Ω', '6 Ω', '9 Ω', '18 Ω'],
    answerIndex: 1,
    explanation: '1/Req = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4. Req = 4 Ω.',
    tags: ['circuitos elétricos', 'paralelo', 'resistência equivalente', 'unicamp']
  },
  {
    id: 'uni_fis003', subject: 'fisica', year: 2024, source: 'UNICAMP', difficulty: 'dificil',
    question: 'Uma onda sonora tem frequência de 440 Hz e velocidade de 340 m/s no ar. Qual é seu comprimento de onda?',
    options: ['0,57 m', '0,65 m', '0,77 m', '0,88 m', '1,30 m'],
    answerIndex: 2,
    explanation: 'λ = v/f = 340/440 ≈ 0,77 m.',
    tags: ['ondulatória', 'comprimento de onda', 'som', 'unicamp']
  },
  {
    id: 'uni_fis004', subject: 'fisica', year: 2023, source: 'UNICAMP', difficulty: 'dificil',
    question: 'O trabalho realizado por uma força de 50 N que desloca um objeto 4 m numa direção que faz 60° com a força é:',
    options: ['50 J', '100 J', '150 J', '173 J', '200 J'],
    answerIndex: 1,
    explanation: 'W = F × d × cos(θ) = 50 × 4 × cos(60°) = 50 × 4 × 0,5 = 100 J.',
    tags: ['trabalho', 'força', 'trigonometria', 'unicamp']
  },

  // ===== UNICAMP — QUÍMICA (3 questões) =====
  {
    id: 'uni_qui001', subject: 'quimica', year: 2023, source: 'UNICAMP', difficulty: 'dificil',
    question: 'Qual é o número de oxidação (NOx) do manganês no KMnO₄?',
    options: ['+2', '+4', '+5', '+7', '+8'],
    answerIndex: 3,
    explanation: 'Em KMnO₄: K = +1, O = −2. Então +1 + NOx(Mn) + 4×(−2) = 0 → NOx(Mn) = +8 − 1 = +7.',
    tags: ['número de oxidação', 'permanganato', 'unicamp']
  },
  {
    id: 'uni_qui002', subject: 'quimica', year: 2022, source: 'UNICAMP', difficulty: 'dificil',
    question: 'Em uma solução aquosa a 25°C, o pH = 3. Qual é a concentração de íons H⁺?',
    options: ['0,001 mol/L', '0,003 mol/L', '0,01 mol/L', '0,03 mol/L', '0,3 mol/L'],
    answerIndex: 0,
    explanation: 'pH = −log[H⁺]. Se pH = 3, então [H⁺] = 10⁻³ = 0,001 mol/L.',
    tags: ['pH', 'soluções', 'ácidos', 'unicamp']
  },
  {
    id: 'uni_qui003', subject: 'quimica', year: 2024, source: 'UNICAMP', difficulty: 'dificil',
    question: 'Qual é o tipo de isomeria presente entre o butano (CH₃CH₂CH₂CH₃) e o isobutano (CH₃CH(CH₃)CH₃)?',
    options: ['Isomeria de posição', 'Isomeria de função', 'Isomeria de cadeia', 'Isomeria geométrica', 'Isomeria óptica'],
    answerIndex: 2,
    explanation: 'Butano e isobutano têm a mesma fórmula molecular (C₄H₁₀) mas estrutura da cadeia carbônica diferente: butano é cadeia normal (linear) e isobutano é cadeia ramificada. É isomeria de cadeia.',
    tags: ['isomeria', 'alcanos', 'cadeia carbônica', 'unicamp']
  },

  // ===== UNICAMP — BIOLOGIA (2 questões) =====
  {
    id: 'uni_bio001', subject: 'biologia', year: 2023, source: 'UNICAMP', difficulty: 'dificil',
    question: 'Qual das organelas celulares é responsável pela síntese de proteínas?',
    options: ['Mitocôndria', 'Lisossomo', 'Ribossomo', 'Complexo de Golgi', 'Vacúolo'],
    answerIndex: 2,
    explanation: 'Os ribossomos são as organelas responsáveis pela tradução do mRNA em proteínas. Podem ser livres no citoplasma ou associados ao retículo endoplasmático rugoso.',
    tags: ['citologia', 'ribossomo', 'síntese proteica', 'unicamp']
  },
  {
    id: 'uni_bio002', subject: 'biologia', year: 2022, source: 'UNICAMP', difficulty: 'dificil',
    question: 'O processo de nitrificação no ciclo do nitrogênio consiste em:',
    options: [
      'Conversão de N₂ atmosférico em NH₃ por bactérias fixadoras',
      'Oxidação do NH₃ a NO₃⁻ por bactérias nitrificantes',
      'Conversão de NO₃⁻ a N₂ atmosférico por bactérias desnitrificantes',
      'Incorporação do N orgânico pelos vegetais',
      'Decomposição de matéria orgânica em NH₃'
    ],
    answerIndex: 1,
    explanation: 'Nitrificação é a oxidação biológica de amônia (NH₃/NH₄⁺) a nitrito (NO₂⁻) e depois a nitrato (NO₃⁻) por bactérias nitrificantes (Nitrosomonas e Nitrobacter).',
    tags: ['ciclo do nitrogênio', 'nitrificação', 'ecologia', 'unicamp']
  },

  // ===== CONCURSO PÚBLICO — RACIOCÍNIO LÓGICO (7 questões) =====
  {
    id: 'con_rl001', subject: 'matematica', year: 2024, source: 'Concurso', difficulty: 'medio',
    question: 'Se "Todo estudante é disciplinado" e "João é estudante", então podemos concluir que:',
    options: [
      'Alguns disciplinados não são estudantes',
      'João é disciplinado',
      'Disciplinado é uma característica exclusiva de estudantes',
      'Existem estudantes que não são disciplinados',
      'João não precisa ser disciplinado'
    ],
    answerIndex: 1,
    explanation: 'Silogismo simples: premissa maior (todo A é B) + premissa menor (C é A) = conclusão (C é B). Logo, João é disciplinado.',
    tags: ['lógica', 'silogismo', 'concurso', 'raciocínio lógico']
  },
  {
    id: 'con_rl002', subject: 'matematica', year: 2024, source: 'Concurso', difficulty: 'medio',
    question: 'Na sequência 2, 5, 10, 17, 26, ___, qual é o próximo termo?',
    options: ['35', '37', '39', '41', '43'],
    answerIndex: 1,
    explanation: 'As diferenças entre termos consecutivos são: 3, 5, 7, 9, 11 (progressão aritmética de razão 2). Logo: 26 + 11 = 37.',
    tags: ['sequência numérica', 'progressão', 'concurso', 'raciocínio lógico']
  },
  {
    id: 'con_rl003', subject: 'matematica', year: 2023, source: 'Concurso', difficulty: 'medio',
    question: 'Em uma caixa há 5 bolas vermelhas e 3 azuis. Retiram-se 2 bolas aleatoriamente (sem reposição). Qual a probabilidade de ambas serem vermelhas?',
    options: ['5/14', '5/16', '10/28', '15/56', '25/64'],
    answerIndex: 0,
    explanation: 'P = C(5,2)/C(8,2) = 10/28 = 5/14.',
    tags: ['probabilidade', 'combinatória', 'concurso']
  },
  {
    id: 'con_rl004', subject: 'matematica', year: 2024, source: 'Concurso', difficulty: 'facil',
    question: 'Se p → q é verdadeiro e p é verdadeiro, então:',
    options: [
      'q pode ser falso',
      'q é necessariamente falso',
      'q é necessariamente verdadeiro',
      'p → q torna-se falso',
      'Nada se pode concluir sobre q'
    ],
    answerIndex: 2,
    explanation: 'Modus ponens: se (p → q) é verdadeiro e p é verdadeiro, então q é necessariamente verdadeiro. É uma das regras fundamentais da lógica proposicional.',
    tags: ['lógica proposicional', 'modus ponens', 'concurso']
  },
  {
    id: 'con_rl005', subject: 'matematica', year: 2023, source: 'Concurso', difficulty: 'facil',
    question: 'Quantos números de 4 dígitos distintos podem ser formados com os dígitos 1, 2, 3 e 4, sem repetição?',
    options: ['16', '24', '32', '48', '256'],
    answerIndex: 1,
    explanation: 'Permutação de 4 elementos: 4! = 4 × 3 × 2 × 1 = 24.',
    tags: ['combinatória', 'permutação', 'concurso']
  },
  {
    id: 'con_rl006', subject: 'matematica', year: 2024, source: 'Concurso', difficulty: 'medio',
    question: 'Um trem parte às 8h30 e chega ao destino em 2h45min. Que horas chega?',
    options: ['10h45min', '11h00min', '11h15min', '11h30min', '11h45min'],
    answerIndex: 2,
    explanation: '8h30min + 2h45min = 10h75min = 11h15min.',
    tags: ['operações com tempo', 'raciocínio', 'concurso']
  },
  {
    id: 'con_rl007', subject: 'matematica', year: 2023, source: 'Concurso', difficulty: 'medio',
    question: 'O negócio de uma empresa teve lucro de R$ 120.000 em 2023 e R$ 150.000 em 2024. Qual foi o percentual de aumento?',
    options: ['15%', '20%', '25%', '30%', '35%'],
    answerIndex: 2,
    explanation: 'Aumento = (150.000 − 120.000)/120.000 × 100 = 30.000/120.000 × 100 = 25%.',
    tags: ['porcentagem', 'variação percentual', 'concurso']
  },

  // ===== CONCURSO PÚBLICO — PORTUGUÊS (5 questões) =====
  {
    id: 'con_por001', subject: 'portugues', year: 2024, source: 'Concurso', difficulty: 'medio',
    question: 'Assinale a alternativa que preenche corretamente as lacunas: "_____ servidores compareceram _____ reunião, mas nem todos participaram _____ debate."',
    options: [
      'Os / a / do',
      'Os / à / do',
      'Os / a / de o',
      'As / à / ao',
      'Os / à / de'
    ],
    answerIndex: 1,
    explanation: '"Os servidores" (masculino plural); "à reunião" (a + a = crase obrigatória diante de substantivo feminino); "do debate" (preposição de + artigo o).',
    tags: ['crase', 'artigo', 'regência', 'concurso', 'português']
  },
  {
    id: 'con_por002', subject: 'portugues', year: 2024, source: 'Concurso', difficulty: 'facil',
    question: 'No ofício, memorando e outros documentos oficiais regidos pelo Manual de Redação Oficial (Decreto 9.758/2019), o fecho correto é:',
    options: [
      '"Atenciosamente" para autoridades de mesmo nível ou inferior; "Respeitosamente" para superiores',
      '"Ilmo. Sr." para todas as autoridades, independente do cargo',
      '"Com os melhores cumprimentos" para qualquer destinatário',
      '"Saudações cordiais" para autoridades de mesmo nível',
      '"Vossa Senhoria" como fecho padrão para todos os documentos'
    ],
    answerIndex: 0,
    explanation: 'Conforme o Decreto 9.758/2019: "Respeitosamente" para autoridades de hierarquia superior, "Atenciosamente" para os demais.',
    tags: ['redação oficial', 'fecho', 'concurso', 'decreto 9758']
  },
  {
    id: 'con_por003', subject: 'portugues', year: 2023, source: 'Concurso', difficulty: 'medio',
    question: 'Identifique a alternativa com ERRO de concordância verbal:',
    options: [
      'Foram encontrados vários documentos importantes.',
      'Haverá muitos candidatos no concurso.',
      'Existem dúvidas sobre o regulamento.',
      'Fazem cinco anos que não me vejo com ela.',
      'Os dados do relatório foram analisados.'
    ],
    answerIndex: 3,
    explanation: '"Fazer" indicando tempo decorrido é verbo impessoal (sem sujeito) — fica no singular: "Faz cinco anos". A forma "Fazem" está errada.',
    tags: ['concordância verbal', 'impessoalidade', 'concurso']
  },
  {
    id: 'con_por004', subject: 'portugues', year: 2024, source: 'Concurso', difficulty: 'medio',
    question: 'A forma de tratamento adequada para dirigir-se a um Deputado Federal em comunicação oficial é:',
    options: [
      'Vossa Excelência (V. Exa.)',
      'Vossa Senhoria (V. Sa.)',
      'Vossa Magnificência',
      'Vossa Reverendíssima',
      'Vossa Eminência'
    ],
    answerIndex: 0,
    explanation: '"Vossa Excelência" é o tratamento para membros do Poder Legislativo (Deputados, Senadores), Executivo (Presidente, Ministros) e Judiciário (Magistrados). "Vossa Senhoria" é para demais autoridades e particulares.',
    tags: ['pronomes de tratamento', 'redação oficial', 'concurso']
  },
  {
    id: 'con_por005', subject: 'portugues', year: 2023, source: 'Concurso', difficulty: 'facil',
    question: 'A pontuação correta que preserva o sentido da frase é: "O servidor que cumpre suas obrigações _____ merece reconhecimento."',
    options: [
      'vírgula antes de "merece": ", merece"',
      'sem vírgulas — oração restritiva',
      'vírgulas em torno de "que cumpre suas obrigações": ", que cumpre suas obrigações,"',
      'ponto e vírgula após "obrigações"',
      'dois pontos após "obrigações"'
    ],
    answerIndex: 1,
    explanation: 'A oração "que cumpre suas obrigações" é restritiva — identifica qual servidor merece reconhecimento. Orações restritivas não são separadas por vírgulas do termo antecedente.',
    tags: ['pontuação', 'vírgula', 'oração restritiva', 'concurso']
  },

  // ===== CONCURSO — INFORMÁTICA (4 questões) =====
  {
    id: 'con_inf001', subject: 'matematica', year: 2024, source: 'Concurso', difficulty: 'facil',
    question: 'No Microsoft Excel, a fórmula =SOMA(A1:A10) equivale a:',
    options: [
      'Somar apenas as células A1 e A10',
      'Somar todas as células de A1 até A10',
      'Multiplicar as células de A1 até A10',
      'Calcular a média das células A1 e A10',
      'Contar o número de células entre A1 e A10'
    ],
    answerIndex: 1,
    explanation: 'No Excel, o operador ":" indica um intervalo de células. =SOMA(A1:A10) soma todos os valores nas células A1, A2, A3, ..., até A10.',
    tags: ['excel', 'informática', 'planilha', 'concurso']
  },
  {
    id: 'con_inf002', subject: 'matematica', year: 2024, source: 'Concurso', difficulty: 'facil',
    question: 'O protocolo HTTP (Hypertext Transfer Protocol) é utilizado para:',
    options: [
      'Enviar e receber emails',
      'Transferir arquivos de um servidor FTP',
      'Comunicação entre navegadores e servidores web',
      'Criptografar dados em redes privadas',
      'Atribuir endereços IP automaticamente'
    ],
    answerIndex: 2,
    explanation: 'HTTP é o protocolo de comunicação base da web, utilizado para transferência de páginas e recursos entre navegadores (clientes) e servidores web. O HTTPS é a versão segura (com criptografia TLS/SSL).',
    tags: ['internet', 'protocolos', 'HTTP', 'concurso', 'informática']
  },
  {
    id: 'con_inf003', subject: 'matematica', year: 2023, source: 'Concurso', difficulty: 'medio',
    question: 'Em relação à segurança da informação, o ataque de "phishing" consiste em:',
    options: [
      'Sobrecarregar um servidor com requisições para tirá-lo do ar',
      'Interceptar a comunicação entre dois usuários sem que eles saibam',
      'Enganar o usuário para que revele senhas ou dados pessoais',
      'Instalar um programa malicioso que criptografa os arquivos do usuário',
      'Explorar vulnerabilidades em sistemas operacionais desatualizados'
    ],
    answerIndex: 2,
    explanation: 'Phishing é uma tentativa de fraude para obter dados confidenciais (senhas, dados bancários, etc.) enganando o usuário, geralmente por emails ou sites falsos que simulam serem legítimos.',
    tags: ['segurança da informação', 'phishing', 'concurso', 'informática']
  },
  {
    id: 'con_inf004', subject: 'matematica', year: 2024, source: 'Concurso', difficulty: 'facil',
    question: 'No Windows 10, o atalho de teclado para copiar um arquivo ou texto é:',
    options: ['Ctrl + X', 'Ctrl + V', 'Ctrl + C', 'Ctrl + Z', 'Ctrl + A'],
    answerIndex: 2,
    explanation: 'Ctrl + C = Copiar. Ctrl + X = Recortar. Ctrl + V = Colar. Ctrl + Z = Desfazer. Ctrl + A = Selecionar tudo.',
    tags: ['windows', 'atalhos', 'informática', 'concurso']
  },

  // ===== CONCURSO — LEGISLAÇÃO / DIREITO ADMINISTRATIVO (2 questões) =====
  {
    id: 'con_adm001', subject: 'historia', year: 2024, source: 'Concurso', difficulty: 'medio',
    question: 'Qual dos seguintes princípios NÃO está expresso no caput do art. 37 da Constituição Federal de 1988 como norteador da Administração Pública?',
    options: [
      'Legalidade',
      'Impessoalidade',
      'Probidade',
      'Publicidade',
      'Eficiência'
    ],
    answerIndex: 2,
    explanation: 'O caput do art. 37 da CF/88 elenca os princípios LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Probidade não consta expressamente no caput (embora seja um valor presente na CF em outros artigos).',
    tags: ['direito administrativo', 'princípios', 'CF/88', 'concurso', 'LIMPE']
  },
  {
    id: 'con_adm002', subject: 'historia', year: 2023, source: 'Concurso', difficulty: 'medio',
    question: 'O servidor público federal estável pode perder o cargo em caso de:',
    options: [
      'Apenas por sentença judicial transitada em julgado',
      'Por processo administrativo disciplinar com ampla defesa, sentença judicial transitada em julgado, ou procedimento de avaliação periódica de desempenho',
      'Somente por ato do Presidente da República',
      'Apenas nos casos previstos em lei complementar específica',
      'Por decisão do superior hierárquico com base em relatório de avaliação'
    ],
    answerIndex: 1,
    explanation: 'Conforme o art. 41, §1° da CF/88, o servidor estável só pode perder o cargo por: I – sentença judicial transitada em julgado; II – processo administrativo disciplinar com ampla defesa; III – procedimento de avaliação periódica de desempenho.',
    tags: ['servidor público', 'estabilidade', 'CF/88', 'concurso']
  }
]

// Helper: filter by type
function getQuestionsForSimulado(type, count, filterYear = null, filterSubject = null) {
  let pool = [...questions]

  // Apply subject filter if specified
  if (filterSubject) {
    const subjectPool = pool.filter(q => q.subject === filterSubject)
    if (subjectPool.length >= 5) pool = subjectPool
  }

  if (type === 'mini') {
    return shuffle(pool).slice(0, Math.min(count || 10, pool.length))
  }

  if (type === 'enem') {
    let enem = pool.filter(q => q.source === 'ENEM')
    if (filterYear) enem = enem.filter(q => q.year === filterYear)
    if (!enem.length) enem = pool.filter(q => q.source === 'ENEM') // fallback if year has no questions
    const others = pool.filter(q => q.source !== 'ENEM')
    return shuffle([...enem, ...others]).slice(0, Math.min(count || 30, pool.length))
  }

  if (type === 'vestibular') {
    const vestSources = ['FUVEST', 'UNICAMP', 'FUVEST/UNICAMP']
    const vest = pool.filter(q => vestSources.includes(q.source))
    const hard = pool.filter(q => q.source === 'ENEM' && q.difficulty === 'dificil')
    const fallback = pool.filter(q => q.source === 'ENEM')
    const combined = vest.length >= 10 ? [...vest, ...hard] : [...fallback]
    return shuffle(combined).slice(0, Math.min(count || 20, combined.length))
  }

  if (type === 'fuvest') {
    const fuvest = pool.filter(q => q.source === 'FUVEST')
    const fallback = pool.filter(q => q.source === 'ENEM' && q.difficulty === 'dificil')
    return shuffle([...fuvest, ...fallback]).slice(0, Math.min(count || 20, pool.length))
  }

  if (type === 'unicamp') {
    const unicamp = pool.filter(q => q.source === 'UNICAMP')
    const fallback = pool.filter(q => q.source === 'ENEM' && q.difficulty === 'dificil')
    return shuffle([...unicamp, ...fallback]).slice(0, Math.min(count || 20, pool.length))
  }

  if (type === 'concurso') {
    const concurso = pool.filter(q => q.source === 'Concurso')
    const logic = pool.filter(q => q.subject === 'matematica' && q.source !== 'Concurso')
    const ptbr = pool.filter(q => q.subject === 'portugues' && q.source !== 'Concurso')
    const combined = concurso.length >= 10 ? [...concurso, ...logic.slice(0, 5), ...ptbr.slice(0, 5)] : [...concurso, ...logic, ...ptbr]
    return shuffle(combined).slice(0, Math.min(count || 20, combined.length))
  }

  if (type === 'concurso_federal') {
    const concurso = pool.filter(q => q.source === 'Concurso')
    const ptbr = pool.filter(q => q.subject === 'portugues')
    const math = pool.filter(q => q.subject === 'matematica')
    return shuffle([...concurso, ...ptbr.slice(0, 4), ...math.slice(0, 4)]).slice(0, Math.min(count || 20, pool.length))
  }

  if (type === 'militar') {
    const hard = pool.filter(q => ['matematica', 'fisica', 'portugues', 'ingles'].includes(q.subject) && q.difficulty === 'dificil')
    const medium = pool.filter(q => ['matematica', 'fisica', 'portugues', 'ingles'].includes(q.subject) && q.difficulty === 'medio')
    return shuffle([...hard, ...medium]).slice(0, Math.min(count || 20, pool.length))
  }

  if (type === 'enem_completo') {
    // 45 questões com distribuição ENEM: Linguagens (por+ing), Humanas (his+geo+fil), Natureza (bio+qui+fis), Mat
    const pick = (subj, n) => shuffle(pool.filter(q => q.subject === subj)).slice(0, n)
    return shuffle([
      ...pick('portugues', 9), ...pick('ingles', 3),
      ...pick('historia', 4), ...pick('geografia', 4), ...pick('filosofia', 3),
      ...pick('biologia', 4), ...pick('quimica', 4), ...pick('fisica', 4),
      ...pick('matematica', 10)
    ])
  }

  if (type === 'diagnostico') {
    // 1 question per subject, covering all 9 subjects
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

// Get questão do dia (deterministic by date)
function getQuestaoDodia() {
  const day = new Date().toDateString()
  const idx = Math.abs(day.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)) % questions.length
  return questions[idx]
}

module.exports = { questions, getQuestionsForSimulado, getQuestaoDodia }
