"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import type { Persona } from "@/content/desafio";

type PersonaStackProps = {
  personas: Persona[];
};

/**
 * Empilha as personas em cards fixados na tela: ao rolar, o card de cima
 * encolhe e inclina enquanto o próximo sobe por baixo e toma o lugar.
 *
 * Adaptado de examples/skiper17.tsx (Skiper UI, @gurvinder-singh02) — lá os
 * cards são imagens full-bleed; aqui cada um é um painel foto + texto.
 *
 * Os cards só viram pilha absoluta dentro do useGSAP. Sem JS, ou com
 * prefers-reduced-motion, eles permanecem no fluxo normal e a seção vira uma
 * lista vertical legível.
 */
export default function PersonaStack({ personas }: PersonaStackProps) {
  const container = useRef<HTMLDivElement>(null);
  const pinned = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.registerPlugin(ScrollTrigger);

      const cards = cardRefs.current.filter(
        (card): card is HTMLElement => card !== null,
      );
      const total = cards.length;
      if (total < 2) return;

      // Tira do fluxo só agora, para o fallback sem JS continuar legível.
      // O recorte também só vale aqui: sem ele, o card em espera apareceria
      // pela fresta entre a base do palco e o pb-8 do wrapper; com ele fixo no
      // CSS, o fallback em fluxo normal ficaria cortado.
      gsap.set(stage.current, { overflow: "hidden" });
      gsap.set(cards, { position: "absolute", inset: 0 });
      gsap.set(cards[0], { yPercent: 0, scale: 1, rotation: 0 });
      gsap.set(cards.slice(1), { yPercent: 100, scale: 1, rotation: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pinned.current,
          start: "top top",
          end: `+=${window.innerHeight * (total - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < total - 1; i++) {
        // Escala e rotação mais contidas que a referência: estes cards carregam
        // texto, e 0.7/5deg deixavam a copy ilegível durante a transição.
        timeline.to(
          cards[i],
          { scale: 0.88, rotation: 3, duration: 1, ease: "none" },
          i,
        );
        timeline.to(
          cards[i + 1],
          { yPercent: 0, duration: 1, ease: "none" },
          i,
        );
      }

      // As fotos das personas terminam de carregar depois deste setup. Sem um
      // refresh no fim, o ScrollTrigger fica com as medidas de antes delas.
      // (Nada de ResizeObserver no container: é ele que hospeda o pin-spacer,
      // então fixar muda o tamanho dele, que dispara refresh, que desfixa para
      // remedir — realimentação que deixava start/end errados e matava o pin.)
      const pendentes = Array.from(
        container.current?.querySelectorAll("img") ?? [],
      ).filter((img) => !img.complete);

      let vivo = true;
      Promise.all(
        pendentes.map(
          (img) =>
            new Promise<void>((resolve) => {
              img.addEventListener("load", () => resolve(), { once: true });
              img.addEventListener("error", () => resolve(), { once: true });
            }),
        ),
      ).then(() => {
        if (vivo) ScrollTrigger.refresh();
      });

      return () => {
        vivo = false;
        // Mata só o nosso trigger. getAll() derrubaria qualquer ScrollTrigger
        // da página, inclusive os recriados por Fast Refresh.
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <div
        ref={pinned}
        className="persona-stack flex h-svh flex-col justify-center overflow-hidden px-4 pb-8 pt-[calc(var(--header-height)+var(--header-gap)*2)]"
      >
        <div
          ref={stage}
          className="relative mx-auto flex h-full w-full max-w-6xl flex-col gap-4"
        >
          {personas.map((persona, i) => (
            <article
              key={persona.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              /* grid-rows no mobile trava a foto numa fração da altura do card,
                 em vez de deixá-la empurrar a copy para fora da área visível. */
              className="grid h-full grid-rows-[30%_1fr] overflow-hidden rounded-xl bg-white shadow-sm md:grid-cols-[minmax(0,40%)_1fr] md:grid-rows-1"
            >
              {/* object-position em 30% da altura: os retratos são verticais e
                  o rosto fica no terço superior, então centralizar cortaria a
                  cabeça na faixa larga e baixa que a foto ocupa no mobile. */}
              <div className="relative h-full min-h-0 bg-sand">
                <Image
                  src={persona.photo}
                  alt={persona.photoAlt}
                  fill
                  className="object-cover object-[50%_30%]"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>

              <div className="flex min-h-0 flex-col justify-center p-5 md:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-deep">
                  {persona.index} / {persona.role}
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-[1.05] tracking-[-0.02em] md:mt-4 md:text-3xl lg:text-4xl">
                  {persona.headline}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-black/80 md:mt-5 md:text-lg">
                  {persona.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
