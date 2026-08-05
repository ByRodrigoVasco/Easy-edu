import type { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-rule bg-white p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
