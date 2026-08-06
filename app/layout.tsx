import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EasyEdu | Educação que cabe na sua realidade",
    template: "%s | EasyEdu",
  },
  description:
    "Conectando estudantes aos melhores cursos preparatórios de forma simples e acessível.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
