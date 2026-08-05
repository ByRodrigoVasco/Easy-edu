"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, navLeft, navRight, type NavItem } from "@/content/site";

type DesktopNavProps = {
  items: NavItem[];
  pathname: string;
  className?: string;
};

function DesktopNav({ items, pathname, className = "" }: DesktopNavProps) {
  return (
    <nav className={`hidden flex-1 md:flex md:items-center md:gap-8 ${className}`}>
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`whitespace-nowrap py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
              active ? "text-white" : "text-white/70 hover:text-white"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-[var(--header-gap)] z-50 px-4">
      {/* Painel flutuante: arredonda a barra e, com overflow-hidden, faz o menu
          mobile abrir dentro dos mesmos cantos em vez de vazar num bloco reto. */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-black">
        {/* As duas navs recebem flex-1 e larguras iguais, então a logo — de
            largura automática entre elas — cai exatamente no centro da barra. */}
        <div className="flex h-[var(--header-height)] items-center px-6">
          <DesktopNav items={navLeft} pathname={pathname} />

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex flex-1 items-center justify-start md:flex-none md:justify-center"
          >
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-md bg-white p-1.5">
              <Image
                src="/brand/logo.webp"
                alt="EasyEdu"
                width={48}
                height={48}
                priority
              />
            </span>
          </Link>

          <DesktopNav items={navRight} pathname={pathname} className="md:justify-end" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 ease-out md:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav
            id="mobile-menu"
            inert={!open}
            className="flex flex-col gap-1 overflow-hidden border-t border-white/10 px-6 py-4"
          >
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`border-l-2 py-3 pl-3 text-base font-semibold uppercase tracking-wide transition-colors ${
                    active
                      ? "border-white text-white"
                      : "border-transparent text-white/70"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
