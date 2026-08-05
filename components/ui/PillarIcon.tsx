type PillarIconProps = {
  index: number;
  className?: string;
};

function renderShape(index: number) {
  switch (index % 5) {
    case 0:
      // Liberdade — cadeado aberto
      return (
        <>
          <rect x="7" y="14" width="18" height="14" rx="2" />
          <path d="M11 14V9a5 5 0 0 1 9.5-2.2" />
        </>
      );
    case 1:
      // Centralização — hub com pontos conectados
      return (
        <>
          <circle cx="16" cy="16" r="3" />
          <circle cx="16" cy="6" r="1.6" />
          <circle cx="26" cy="16" r="1.6" />
          <circle cx="16" cy="26" r="1.6" />
          <circle cx="6" cy="16" r="1.6" />
          <path d="M16 8.6V13M23.4 16H19M16 19v4.4M9 16h4.4" />
        </>
      );
    case 2:
      // Personalização — controles deslizantes
      return (
        <>
          <path d="M7 10h18M7 16h18M7 22h18" />
          <circle cx="13" cy="10" r="2" />
          <circle cx="21" cy="16" r="2" />
          <circle cx="11" cy="22" r="2" />
        </>
      );
    case 3:
      // Flexibilidade — traço curvo
      return <path d="M6 22c3-10 8-14 10-10s3 12 10 4" />;
    default:
      // Pagamento único — ticket
      return (
        <>
          <rect x="6" y="10" width="20" height="12" rx="2" />
          <path d="M6 16h20" strokeDasharray="2 3" />
        </>
      );
  }
}

export default function PillarIcon({ index, className = "" }: PillarIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={`h-8 w-8 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {renderShape(index)}
    </svg>
  );
}
