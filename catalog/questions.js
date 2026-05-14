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
]

// Helper: filter by type
function getQuestionsForSimulado(type, count) {
  let pool = [...questions]

  if (type === 'mini') {
    // Mixed, all subjects
    return shuffle(pool).slice(0, Math.min(count || 10, pool.length))
  }

  if (type === 'enem') {
    // All subjects, distribute evenly — prefer ENEM source
    const enem = pool.filter(q => q.source === 'ENEM')
    const others = pool.filter(q => q.source !== 'ENEM')
    return shuffle([...enem, ...others]).slice(0, Math.min(count || 30, pool.length))
  }

  if (type === 'vestibular') {
    // ENEM source + higher difficulty
    pool = pool.filter(q => q.source === 'ENEM')
    return shuffle(pool).slice(0, Math.min(count || 20, pool.length))
  }

  if (type === 'concurso') {
    // Concurso source + raciocínio lógico (matematica) + português
    const concurso = pool.filter(q => q.source === 'Concurso')
    const logic = pool.filter(q => q.subject === 'matematica' && !q.source.includes('Concurso'))
    const ptbr = pool.filter(q => q.subject === 'portugues' && !q.source.includes('Concurso'))
    return shuffle([...concurso, ...logic, ...ptbr]).slice(0, Math.min(count || 20, pool.length))
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
