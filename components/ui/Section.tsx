import type { ReactNode } from "react";

type Background = "sand" | "white" | "black" | "blue";

const backgroundClasses: Record<Background, string> = {
  sand: "bg-sand text-black",
  white: "bg-white text-black",
  black: "bg-black text-white",
  blue: "bg-blue text-white",
};

type SectionProps = {
  background?: Background;
  className?: string;
  /** Skips the max-w-6xl container — children control their own layout/padding. */
  fullBleed?: boolean;
  children: ReactNode;
};

export default function Section({
  background = "sand",
  className = "",
  fullBleed = false,
  children,
}: SectionProps) {
  return (
    <section className={`${backgroundClasses[background]} ${className}`}>
      {fullBleed ? (
        children
      ) : (
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">{children}</div>
      )}
    </section>
  );
}
