import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "tertiary";

const variantClasses: Record<Variant, string> = {
  primary: "bg-black text-white",
  secondary: "bg-blue text-white",
  tertiary: "border border-black bg-transparent text-black",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-80";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
