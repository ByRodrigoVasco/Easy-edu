import type { ReactNode } from "react";

type SplitBlockProps = {
  eyebrow?: string;
  heading: string;
  children: ReactNode;
  className?: string;
};

export default function SplitBlock({
  eyebrow,
  heading,
  children,
  className = "",
}: SplitBlockProps) {
  return (
    <div
      className={`grid gap-8 md:grid-cols-[280px_1fr] md:gap-12 ${className}`}
    >
      <div>
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-blue-deep">
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
          {heading}
        </h2>
      </div>
      <div className="max-w-2xl border-t border-rule pt-6 text-lg leading-relaxed md:border-t-0 md:border-l md:pl-10 md:pt-0">
        {children}
      </div>
    </div>
  );
}
