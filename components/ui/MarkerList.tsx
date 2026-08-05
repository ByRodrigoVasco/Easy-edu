type Tone = "light" | "dark";

type MarkerListProps = {
  items: string[];
  tone?: Tone;
  className?: string;
};

export default function MarkerList({
  items,
  tone = "light",
  className = "",
}: MarkerListProps) {
  const marker = tone === "dark" ? "bg-white" : "bg-blue";
  const text = tone === "dark" ? "text-white/90" : "text-black/90";

  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={`mt-1.5 h-2.5 w-2.5 flex-none ${marker}`}
          />
          <span className={`text-base leading-relaxed ${text}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
