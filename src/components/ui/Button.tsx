import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "ink" | "line" | "light" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-[linear-gradient(135deg,var(--color-deep-2),var(--color-primary-dark))] text-white shadow-[0_8px_20px_-8px_var(--t-glow)] hover:brightness-110",
  ink: "bg-ink text-white hover:bg-navy",
  line: "bg-white text-primary border border-primary/40 hover:bg-primary hover:text-white",
  light: "bg-white text-primary hover:bg-hair",
  ghost: "border border-white/40 text-white hover:bg-white/10",
};

type Props = { variant?: Variant } & ComponentProps<typeof Link>;

export function ButtonLink({ variant = "primary", className = "", ...props }: Props) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors ${styles[variant]} ${className}`}
    />
  );
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: { variant?: Variant } & ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`}
    />
  );
}
