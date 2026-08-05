import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import StatCard from "@/components/ui/StatCard";
import MarkerList from "@/components/ui/MarkerList";
import Button from "@/components/ui/Button";

const colors = [
  { name: "black", hex: "#0D0D0D", className: "bg-black" },
  { name: "lime", hex: "#C0F20C", className: "bg-lime" },
  { name: "lime-deep", hex: "#4A5C0E", className: "bg-lime-deep" },
  { name: "green", hex: "#9EBF24", className: "bg-green" },
  { name: "green-soft", hex: "#C6D982", className: "bg-green-soft" },
  { name: "sand", hex: "#F2EFEB", className: "bg-sand" },
  { name: "white", hex: "#FFFFFF", className: "bg-white" },
  { name: "rule", hex: "#D9D9D9", className: "bg-rule" },
];

export default function StyleguidePage() {
  return (
    <>
      <Section background="sand">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-lime-deep">
          Rota temporária — removida antes da publicação
        </p>
        <h1 className="mt-4 font-heading text-5xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-7xl">
          Styleguide
        </h1>
      </Section>

      <Section background="white">
        <h2 className="font-heading text-2xl font-black uppercase tracking-[-0.02em]">
          Cores
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {colors.map((color) => (
            <div key={color.name} className="rounded-xl border border-rule">
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
        <h2 className="font-heading text-2xl font-black uppercase tracking-[-0.02em]">
          Tipografia
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          <p className="font-heading text-7xl font-black uppercase leading-[0.95] tracking-[-0.03em]">
            Título hero
          </p>
          <p className="font-heading text-4xl font-black uppercase tracking-[-0.02em]">
            Título de seção
          </p>
          <p className="max-w-2xl text-lg leading-relaxed">
            Corpo de texto em Inter Regular, 1.125rem, line-height 1.6. Usado
            para parágrafos e descrições ao longo do site.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-lime-deep">
            Rótulo e olho, Inter Semibold, caixa alta
          </p>
        </div>
      </Section>

      <Section background="white">
        <h2 className="font-heading text-2xl font-black uppercase tracking-[-0.02em]">
          Botões
        </h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button variant="primary">Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="tertiary">Terciário</Button>
        </div>
      </Section>

      <Section background="sand">
        <h2 className="font-heading text-2xl font-black uppercase tracking-[-0.02em]">
          Card e MarkerList
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <p className="text-sm font-semibold uppercase tracking-wide text-lime-deep">
              Card
            </p>
            <p className="mt-2 text-lg font-black">Borda sólida, cantos arredondados</p>
            <MarkerList
              className="mt-4"
              items={["Item de exemplo um", "Item de exemplo dois", "Item de exemplo três"]}
            />
          </Card>
          <StatCard value="~10 mi" description="Exemplo de número-destaque com descrição de apoio." />
        </div>
      </Section>

      <Section background="black">
        <h2 className="font-heading text-2xl font-black uppercase tracking-[-0.02em] text-white">
          Bloco preto
        </h2>
        <p className="mt-4 max-w-2xl text-white/80">
          Marco de largura total usado entre seções para pontuar o ritmo da
          página.
        </p>
      </Section>

      <Section background="lime">
        <h2 className="font-heading text-2xl font-black uppercase tracking-[-0.02em]">
          Bloco lime
        </h2>
        <p className="mt-4 max-w-2xl">
          Texto sempre em preto sobre lime — nunca o contrário.
        </p>
      </Section>
    </>
  );
}
