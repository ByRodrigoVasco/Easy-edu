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
  const { ref, inView } = useInView<SVGSVGElement>(0.3);

  return (
    <svg
      ref={ref}
      data-signature-line
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`h-12 w-full md:h-16 ${className}`}
    >
      <path
        pathLength={1}
        d="M0,70 C 180,15 360,115 540,60 C 720,10 900,110 1080,55 C 1260,15 1350,95 1440,50"
        fill="none"
        className={strokeClasses[tone]}
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: inView ? 0 : 1,
          transition: "stroke-dashoffset 1.2s ease-out",
        }}
      />
      <path
        pathLength={1}
        d="M0,78 C 180,25 360,120 540,68 C 720,20 900,118 1080,62 C 1260,25 1350,102 1440,58"
        fill="none"
        className={strokeClasses[tone]}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: inView ? 0 : 1,
          transition: "stroke-dashoffset 1.2s ease-out 0.15s",
        }}
      />
    </svg>
  );
}
