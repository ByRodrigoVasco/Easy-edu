type PageHeroProps = {
  eyebrow?: string;
  title: string;
  support?: string;
};

export default function PageHero({ eyebrow, title, support }: PageHeroProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-lime-deep">
          {eyebrow}
        </p>
      )}
      <h1 className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-black md:text-7xl">
        {title}
      </h1>
      {support && (
        <p className="mt-6 text-lg leading-relaxed text-black/80">{support}</p>
      )}
    </div>
  );
}
