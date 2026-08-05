type PageHeroProps = {
  eyebrow?: string;
  title: string;
  support?: string;
};

export default function PageHero({ eyebrow, title, support }: PageHeroProps) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-blue-deep">
          {eyebrow}
        </p>
      )}
      <h1 className="max-w-5xl font-heading text-3xl font-black uppercase leading-[1.15] tracking-[-0.01em] text-black md:text-5xl">
        {title}
      </h1>
      {support && (
        <p className="mt-8 max-w-3xl border-t border-rule pt-6 text-lg leading-relaxed text-black/80">
          {support}
        </p>
      )}
    </div>
  );
}
