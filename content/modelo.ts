export const hero = {
  eyebrow: "Modelo de Negócio e Mercado",
  title:
    "Um modelo de receita em duas fases: primeiro a escola, depois o estudante.",
};

export const phases = [
  {
    title: "B2B2C",
    body: "A escola contrata a Easy Edu e disponibiliza a rede de cursos preparatórios aos seus alunos como benefício.",
  },
  {
    title: "B2C",
    body: "Ao concluir o Ensino Médio, o egresso mantém o acesso contratando diretamente um plano proporcional ao seu objetivo.",
  },
];

export const subscription = {
  heading: "Mecânica da assinatura",
  items: [
    "Assinatura flexível, inspirada em plataformas como Gympass",
    "Planos adaptáveis ao perfil e à necessidade do estudante",
    "Pagamento mensal, trimestral ou anual, com descontos progressivos",
    "Repartição de receita com os cursinhos parceiros, conforme o uso",
    "Modelo escalável, inclusivo e com previsibilidade de receita recorrente",
  ],
};

// Rótulo "público potencial" — nunca "mercado total endereçável" (briefing v2, seção 4.4).
// Números atualizados a partir de EasyEdu-Dados-Mercado.pdf (ago/2026), que corrige a
// apresentação institucional original — ver seção 4 do documento para o de-para completo.
export const potentialMarket = {
  heading: "Público potencial",
  sourceNote:
    "Fonte: INEP/MEC - Censo Escolar da Educação Básica 2025 (fev/2026) e Painel ENEM 2025 / balanço parcial ENEM 2026 (jul/2026).",
  stats: [
    {
      value: "7,37 mi",
      description: "Matrículas no Ensino Médio no Brasil",
    },
    {
      value: "1,03 mi",
      description:
        "Treineiros de 1º e 2º ano já prestando o ENEM",
    },
    {
      value: "1,81 mi",
      description: "Concluintes do Ensino Médio prestando o ENEM para ingresso",
    },
    {
      value: "2,84 mi",
      description:
        "Público potencial defensável: concluintes + treineiros, sem dupla contagem",
    },
  ],
};
