"use client";

import Image from "next/image";
import { useState } from "react";
import Card from "@/components/ui/Card";

type PersonCardProps = {
  name: string;
  role: string;
  course: string;
  photo: string;
  linkedin: string;
  responsibility: string;
  background: string;
};

export default function PersonCard({
  name,
  role,
  course,
  photo,
  linkedin,
  responsibility,
  background,
}: PersonCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card tone="white" className="overflow-hidden !p-0">
      {/* Photo */}
      <div className="relative aspect-square w-full overflow-hidden bg-sand">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-heading text-base font-black uppercase tracking-tight">
              {name}
            </p>
            <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-deep">
              {role}
            </p>
          </div>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${name}`}
            className="flex-none rounded-md p-1.5 text-[#0A66C2] transition-colors hover:bg-[#0A66C2]/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <span className="mt-1.5 inline-block rounded-full bg-blue/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-deep">
          {course}
        </span>

        {/* Expandable description */}
        <div
          className={`grid transition-all duration-400 ease-out ${
            expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm leading-relaxed text-black/80">
              {responsibility}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              {background}
            </p>
          </div>
        </div>

        {/* Toggle button */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-blue transition-colors hover:text-blue-deep"
        >
          {expanded ? "Ver menos" : "Ver mais"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-4 w-4 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </Card>
  );
}
