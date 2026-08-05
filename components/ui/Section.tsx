import type { ReactNode } from "react";

type Background = "sand" | "white" | "black" | "lime";

const backgroundClasses: Record<Background, string> = {
  sand: "bg-sand text-black",
  white: "bg-white text-black",
  black: "bg-black text-white",
  lime: "bg-lime text-black",
};

type SectionProps = {
  background?: Background;
  className?: string;
  children: ReactNode;
};

export default function Section({
  background = "sand",
  className = "",
  children,
}: SectionProps) {
  return (
    <section className={`${backgroundClasses[background]} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">{children}</div>
    </section>
  );
}
