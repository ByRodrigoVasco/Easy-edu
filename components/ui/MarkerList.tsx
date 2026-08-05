type MarkerListProps = {
  items: string[];
  className?: string;
};

export default function MarkerList({ items, className = "" }: MarkerListProps) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1.5 h-2.5 w-2.5 flex-none bg-black"
          />
          <span className="text-base leading-relaxed text-black/90">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
