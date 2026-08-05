export type NavItem = {
  label: string;
  href: string;
};

/** Lado esquerdo da logo no header desktop. */
export const navLeft: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Desafio", href: "/desafio" },
  { label: "Solução", href: "/solucao" },
];

/** Lado direito da logo no header desktop. */
export const navRight: NavItem[] = [
  { label: "Modelo de Negócio", href: "/modelo-de-negocio" },
  { label: "Equipe", href: "/equipe" },
];

/** Lista completa, na ordem de leitura — usada no menu mobile e no rodapé. */
export const nav: NavItem[] = [...navLeft, ...navRight];

export const footerSignature =
  "© 2026 EASYEDU • RECIFE - PE • EDUCAÇÃO QUE CABE NA SUA REALIDADE";

export const siteMeta = {
  name: "EasyEdu",
  positioning:
    "Conectando estudantes aos melhores cursos preparatórios de forma simples e acessível",
};
