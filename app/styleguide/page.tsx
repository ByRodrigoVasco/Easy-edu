import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import StatCard from "@/components/ui/StatCard";
import MarkerList from "@/components/ui/MarkerList";
import Button from "@/components/ui/Button";
import SplitBlock from "@/components/ui/SplitBlock";
import SignatureLine from "@/components/ui/SignatureLine";
import Scatter from "@/components/ui/Scatter";
import Reveal from "@/components/ui/Reveal";

const colors = [
  { name: "black", hex: "#0D0D0D", className: "bg-black" },
  { name: "blue", hex: "#072BF2", className: "bg-blue" },
  { name: "blue-deep", hex: "#091973", className: "bg-blue-deep" },
  { name: "blue-support", hex: "#0F2ABF", className: "bg-blue-support" },
  { name: "blue-soft", hex: "#7B8ADC", className: "bg-blue-soft" },
  { name: "sand", hex: "#F2EFEB", className: "bg-sand" },
  { name: "white", hex: "#FFFFFF", className: "bg-white" },
  { name: "rule", hex: "#D9D9D9", className: "bg-rule" },
];

export default function StyleguidePage() {
  return (
    <>
      <Section background="sand">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-deep">
          Rota temporária — removida antes da publicação
        </p>
        <h1 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.95] tracking-[-0.03em] md:text-7xl">
          Styleguide
        </h1>
      </Section>

      <Section background="white">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-[-0.02em]">
          Cores
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {colors.map((color) => (
            <div key={color.name} className="overflow-hidden rounded-xl bg-white">
              <div className={`h-24 rounded-t-xl ${color.className}`} />
              <div className="p-3">
                <p className="text-sm font-semibold">{color.name}</p>
                <p className="text-xs text-black/60">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-[-0.02em]">
          Tipografia
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          <p className="font-heading text-3xl font-bold uppercase leading-[1.15] tracking-[-0.01em] md:text-5xl">
            Título hero
          </p>
          <p className="font-heading text-4xl font-bold uppercase tracking-[-0.02em]">
            Título de seção
          </p>
          <p className="max-w-2xl text-lg leading-relaxed">
            Corpo de texto em DM Sans Regular, 1.125rem, line-height 1.6. Usado
            para parágrafos e descrições ao longo do site.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-deep">
            Rótulo e olho, DM Sans Semibold, caixa alta
          </p>
        </div>
      </Section>

      <Section background="white">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-[-0.02em]">
          Botões
        </h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button variant="primary">Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="tertiary">Terciário</Button>
        </div>
      </Section>

      <Section background="sand">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-[-0.02em]">
          Card, MarkerList e Scatter
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card tone="white">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-deep">
              Card branco
            </p>
            <p className="mt-2 text-lg font-bold">Borda sólida, cantos arredondados</p>
            <MarkerList
              className="mt-4"
              items={["Item de exemplo um", "Item de exemplo dois", "Item de exemplo três"]}
            />
          </Card>
          <Card tone="black">
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Card preto
            </p>
            <p className="mt-2 text-lg font-bold">Usado para pontuar o grid</p>
          </Card>
          <Card tone="blue">
            <p className="text-sm font-semibold uppercase tracking-wide">
              Card azul
            </p>
            <p className="mt-2 text-lg font-bold">Sinalização, uso pontual</p>
          </Card>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <StatCard value="~10 mi" description="Exemplo de número-destaque com descrição de apoio." />
          <div className="flex items-center justify-center rounded-xl bg-white p-8">
            <Scatter tone="blue" />
          </div>
        </div>
      </Section>

      <Section background="white">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-[-0.02em]">
          SplitBlock, SignatureLine e Reveal
        </h2>
        <p className="mt-2 text-sm text-black/60">
          Role a página para ver o SplitBlock entrar com fade e a linha se
          desenhar — ambos via CSS + IntersectionObserver, sem biblioteca.
        </p>
        <div className="mt-6">
          <Reveal>
            <SplitBlock eyebrow="Exemplo" heading="Rótulo à esquerda, texto ao lado">
              <p>
                Coluna de título fixa e estreita, texto corrido logo após a
                régua — evita o título isolado de um lado e o texto solto no
                extremo oposto.
              </p>
            </SplitBlock>
          </Reveal>
        </div>
        <SignatureLine tone="black" className="mt-10" />
      </Section>

      <Section background="black">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-[-0.02em] text-white">
          Bloco preto
        </h2>
        <p className="mt-4 max-w-2xl text-white/80">
          Marco de largura total usado entre seções para pontuar o ritmo da
          página.
        </p>
      </Section>

      <Section background="blue">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-[-0.02em]">
          Bloco azul
        </h2>
        <p className="mt-4 max-w-2xl">
          Texto sempre em branco sobre azul — nenhum dos três tons de azul
          passa em contraste com texto preto em cima.
        </p>
      </Section>
    </>
  );
}
