export const hero = {
  eyebrow: "Equipe",
  title: "Um time jovem, tecnicamente formado e com entregas reais.",
};

export type Member = {
  name: string;
  role: string;
  course: string;
  photo: string;
  linkedin: string;
  responsibility: string;
  background: string;
};

export const members: Member[] = [
  {
    name: "Marcus Bezerra",
    role: "CEO e idealizador",
    course: "CC",
    photo: "/team/marcus.jpeg",
    linkedin: "https://www.linkedin.com/in/marcus-bezerra-98a42a36a/",
    responsibility:
      "Responsável pela visão da EasyEdu, estratégia de negócio, validação com estudantes e instituições, formação de parcerias, desenvolvimento do modelo de crescimento e direcionamento geral do produto.",
    background:
      "Atua como partner e colaborador comercial da Wee Find Pro / Wee Conecta, startup que recebeu aportes de fundos de venture capital do Texas. Cursa o 2º período de Ciência da Computação.",
  },
  {
    name: "Rodrigo Vasco",
    role: "CTO",
    course: "ADS",
    photo: "/team/rodrigo.jpeg",
    linkedin: "https://www.linkedin.com/in/rodrigo-vlm/",
    responsibility:
      "Responsável pela liderança tecnológica da EasyEdu, definição da arquitetura da plataforma, organização do desenvolvimento, integrações, segurança, desempenho e evolução técnica do produto.",
    background:
      "Experiência como freelancer em projetos para grandes empresas. Graduado em Engenharia de Software pela Jala University. Cursa o 2º período de Análise e Desenvolvimento de Sistemas.",
  },
  {
    name: "Mateus Fialho",
    role: "Head of Product e desenvolvedor",
    course: "CC",
    photo: "/team/mateus.jpeg",
    linkedin: "https://www.linkedin.com/in/matheusgomesfialhomoreira",
    responsibility:
      "Responsável pela estratégia e evolução do produto, traduzindo necessidades dos usuários em funcionalidades. Participa também do desenvolvimento das soluções que integram as experiências de estudantes, instituições parceiras e administradores.",
    background: "Cursa o 4º período de Ciência da Computação.",
  },
  {
    name: "Tales Cavalcanti",
    role: "Desenvolvedor",
    course: "ADS",
    photo: "/team/tales.jpg",
    linkedin: "https://www.linkedin.com/in/tales-cavalcantii",
    responsibility:
      "Responsável pelo desenvolvimento, implementação e manutenção das funcionalidades da plataforma, colaborando com a equipe técnica para garantir estabilidade, desempenho e uma experiência eficiente para os usuários.",
    background:
      "Experiência com Inteligência Artificial, atuação como freelancer e estudos em DevOps pela Aponti Academy. Cursa o 2º período de Análise e Desenvolvimento de Sistemas.",
  },
  {
    name: "Yasmin Correia",
    role: "UI/UX Designer",
    course: "Design",
    photo: "/team/yasmin.jpeg",
    linkedin: "https://www.linkedin.com/in/yasmincorreia-/",
    responsibility:
      "Responsável pela identidade visual, experiência do usuário, prototipação e construção de jornadas simples, intuitivas e acessíveis para estudantes, instituições parceiras e administradores.",
    background: "Experiência em UI/UX pela Facepe. Cursa o 4º período de Design.",
  },
];
