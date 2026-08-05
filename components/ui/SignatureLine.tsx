"use client";

import { useInView } from "@/lib/useInView";

type Tone = "black" | "blue" | "white";

const strokeClasses: Record<Tone, string> = {
  black: "stroke-black",
  blue: "stroke-blue",
  white: "stroke-white",
};

type SignatureLineProps = {
  tone?: Tone;
  className?: string;
};

export default function SignatureLine({
  tone = "black",
  className = "",
}: SignatureLineProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      data-signature-line
      className={`overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="h-12 w-full md:h-16"
        style={{
          clipPath: inView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          transition: "clip-path 1.1s ease-out",
        }}
      >
        <path
          d="M0,70 C 180,15 360,115 540,60 C 720,10 900,110 1080,55 C 1260,15 1350,95 1440,50"
          fill="none"
          className={strokeClasses[tone]}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0,78 C 180,25 360,120 540,68 C 720,20 900,118 1080,62 C 1260,25 1350,102 1440,58"
          fill="none"
          className={strokeClasses[tone]}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
