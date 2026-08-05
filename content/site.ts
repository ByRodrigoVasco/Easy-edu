export type NavItem = {
  label: string;
  href: string;
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Desafio", href: "/desafio" },
  { label: "Solução", href: "/solucao" },
  { label: "Modelo de Negócio", href: "/modelo-de-negocio" },
  { label: "Equipe", href: "/equipe" },
];

export const footerSignature =
  "© 2026 EASYEDU • RECIFE - PE • EDUCAÇÃO QUE CABE NA SUA REALIDADE";

export const siteMeta = {
  name: "EasyEdu",
  positioning:
    "Conectando estudantes aos melhores cursos preparatórios de forma simples e acessível",
};
