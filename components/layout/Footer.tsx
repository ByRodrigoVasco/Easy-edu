import Link from "next/link";
import { footerSignature, nav } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-white">
          {footerSignature}
        </p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-wide text-white hover:text-lime"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
