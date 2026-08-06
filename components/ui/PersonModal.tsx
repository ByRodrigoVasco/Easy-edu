"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

type PersonModalProps = {
  name: string;
  role: string;
  course: string;
  photo: string;
  photoPosition: string;
  linkedin: string;
  responsibility: string;
  background: string;
  onClose: () => void;
};

export default function PersonModal({
  name,
  role,
  course,
  photo,
  photoPosition,
  linkedin,
  responsibility,
  background,
  onClose,
}: PersonModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`person-name-${name}`}
        tabIndex={-1}
        className="relative z-10 max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white shadow-lg outline-none md:flex"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black transition-colors hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>

        <div className="relative aspect-[4/3] w-full flex-none overflow-hidden bg-sand md:aspect-auto md:w-2/5">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            style={{ objectPosition: photoPosition }}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>

        <div className="p-6 md:w-3/5 md:overflow-y-auto md:p-8">
          <p
            id={`person-name-${name}`}
            className="font-heading text-2xl font-bold uppercase tracking-tight"
          >
            {name}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-blue-deep">
            {role}
          </p>
          <span className="mt-2 inline-block rounded-full bg-blue/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-deep">
            {course}
          </span>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/80 md:text-lg">
            {responsibility}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-black/65 md:text-lg">
            {background}
          </p>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A66C2] hover:underline"
          >
            <LinkedInIcon className="h-4 w-4" />
            Ver no LinkedIn
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}
