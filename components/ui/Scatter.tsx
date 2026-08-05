type Tone = "black" | "blue";

type ScatterProps = {
  tone?: Tone;
  className?: string;
};

export default function Scatter({ tone = "blue", className = "" }: ScatterProps) {
  const bg = tone === "blue" ? "bg-blue" : "bg-black";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex flex-col items-end gap-3 ${className}`}
    >
      <span className={`h-2 w-2 rotate-45 ${bg}`} />
      <span className={`h-3.5 w-3.5 rotate-45 ${bg}`} />
      <span className={`h-1.5 w-1.5 rotate-45 ${bg}`} />
    </div>
  );
}
