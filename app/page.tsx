import Image from "next/image";
import Section from "@/components/ui/Section";
import SignatureLine from "@/components/ui/SignatureLine";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PhotoCutout from "@/components/ui/PhotoCutout";
import { hero, origin, purpose, experience, closing } from "@/content/home";

const cardTones = ["blue", "white", "white", "black", "white"] as const;

export default function Home() {
  return (
    <>
      <Section background="blue" fullBleed className="relative overflow-hidden">
        <Image
          src="/photos/hero-background.webp"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue/80" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 md:pt-32">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-3xl font-black uppercase leading-[1.15] tracking-[-0.01em] text-white md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-xl border-t border-white/30 pt-6 text-lg leading-relaxed text-white/90">
            {hero.support}
          </p>
        </div>
        <SignatureLine tone="white" className="relative z-10 mt-8 pb-10 md:pb-14" />
      </Section>

      <Section background="black" fullBleed>
        <div className="grid md:grid-cols-2">
          <PhotoCutout src="/photos/boy.webp" alt="" tone="blue" />
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-soft">
                Origem
              </p>
              <h2 className="mt-4 font-heading text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white md:text-5xl">
                {origin.heading}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                {origin.body}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section background="sand" fullBleed>
        <div className="grid md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-6 py-16 md:order-1 md:px-16 md:py-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-deep">
                Propósito
              </p>
              <h2 className="mt-4 font-heading text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
                {purpose.heading}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">
                {purpose.body}
              </p>
            </Reveal>
          </div>
          <PhotoCutout
            src="/photos/girl.webp"
            alt=""
            tone="blue"
            className="order-1 md:order-2"
          />
        </div>
      </Section>

      <Section background="white">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-deep">
            Como funciona
          </p>
          <h2 className="mt-4 font-heading text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
            {experience.heading}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {experience.items.map((item, i) => {
            const tone = cardTones[i] ?? "white";
            const marker = tone === "white" ? "bg-blue" : "bg-white";
            const big = i === 0;
            return (
              <Reveal
                key={item}
                delayMs={i * 80}
                className={big ? "sm:col-span-2" : ""}
              >
                <Card
                  tone={tone}
                  className={`flex h-full items-start gap-4 ${
                    big ? "sm:items-center sm:py-12" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 h-3 w-3 flex-none rotate-45 ${marker}`}
                  />
                  <span
                    className={`font-semibold leading-snug ${
                      big ? "text-xl md:text-2xl" : "text-base"
                    }`}
                  >
                    {item}
                  </span>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section background="black" className="relative overflow-hidden">
        <SignatureLine
          tone="blue"
          className="absolute inset-x-0 top-0 opacity-40"
        />
        <Reveal>
          <h2 className="font-heading text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl">
            {closing.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {closing.body}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
