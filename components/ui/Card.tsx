import type { ReactNode } from "react";

type Tone = "white" | "black" | "blue";

const toneClasses: Record<Tone, string> = {
  white: "bg-white text-black border-rule",
  black: "bg-black text-white border-black",
  blue: "bg-blue text-white border-blue",
};

type CardProps = {
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

export default function Card({ tone = "white", className = "", children }: CardProps) {
  return (
    <div
      className={`rounded-xl border p-6 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8 ${toneClasses[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
