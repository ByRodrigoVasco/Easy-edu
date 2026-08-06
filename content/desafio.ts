export const hero = {
  eyebrow: "Desafio",
  title:
    "Ter acesso a uma preparação completa ainda é caro, fragmentado e pouco flexível.",
};

export const pains = {
  heading: "As quatro dores estruturais",
  items: [
    {
      number: "01",
      title: "Custo elevado da preparação completa",
      body: "Um estudante que busca disciplinas específicas para vestibulares paga um valor considerável por mês em cada curso. Combinar exatas, humanas e redação multiplica rapidamente o valor total.",
    },
    {
      number: "02",
      title: "Fragmentação da oferta educacional",
      body: "Muitos cursos são especializados em uma única matéria ou área, obrigando o estudante a se matricular em instituições diferentes e multiplicando custos, deslocamentos e burocracias.",
    },
    {
      number: "03",
      title: "Custo adicional por matrícula",
      body: "Cada nova matrícula pode representar o valor de outra mensalidade. Antes mesmo de começar a estudar, o aluno já assume despesas adicionais.",
    },
    {
      number: "04",
      title: "Dificuldade para trocar de curso",
      body: "Contratos rígidos, taxas de cancelamento e novas matrículas tornam a mudança cara e complicada, reduzindo a liberdade do estudante de encontrar a metodologia que funciona para ele.",
    },
  ],
};

export type Persona = {
  id: string;
  index: string;
  role: string;
  headline: string;
  /** Orçamento: ~40 palavras. Acima disso o card ganha scroll interno no mobile. */
  body: string;
  photo: string;
  photoAlt: string;
};

export const impacted = {
  heading: "Quem é impactado",
  support:
    "A mesma barreira aparece de três lados diferentes. Quem estuda, quem ensina e quem prepara sentem a fragmentação da oferta de formas distintas.",
  personas: [
    {
      id: "estudante",
      index: "01",
      role: "Rafael, estudante",
      headline: "Quer se preparar em todas as disciplinas, mas custa caro.",
      body: "Rafael entrou no ensino médio e já sabe que precisa de mais de um curso pra se preparar em nível competitivo. Mensalidade alta, contrato rígido e multa de cancelamento travam ele numa disciplina só, enquanto outros candidatos fazem todas.",
      photo: "/photos/menino-desafio.png",
      photoAlt:
        "Rafael, estudante do ensino médio, sentado no quarto onde estuda",
    },
    {
      id: "escola",
      index: "02",
      role: "Cláudia, direção de colégio",
      headline: "Quer todos aprovados, mas nem todos podem se preparar.",
      body: "Cláudia exige alta performance e empurra cada aluno pra aprovação no vestibular dos sonhos. Falta uma solução que vista a camisa do colégio e coloque todos no mesmo nível de preparação, não só quem já tem estrutura em casa.",
      photo: "/photos/mulher-desafios.png",
      photoAlt:
        "Cláudia na sala da direção do colégio, com um quadro de planejamento ao fundo",
    },
    {
      id: "cursinho",
      index: "03",
      role: "Marcos, dono de cursinho",
      headline: "Quer crescer, mas não consegue pagar por isso.",
      body: "Marcos planeja expandir a operação em salas e em alcance remoto, e procura uma plataforma que atenda esses requisitos sem cobrar por isso. A capacidade de abrir novas turmas existe. Falta volume de alunos que ele não consegue adquirir sozinho.",
      photo: "/photos/homem-desafio.png",
      photoAlt: "Marcos à mesa do escritório do cursinho que dirige",
    },
  ] satisfies Persona[],
};

export const synthesis = {
  question:
    "Como oferecer acesso a diferentes cursos e disciplinas, com flexibilidade e menor custo, por meio de uma experiência simples e centralizada?",
};
