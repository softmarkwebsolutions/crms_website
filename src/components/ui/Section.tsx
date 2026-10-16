import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-[clamp(16px,4vw,56px)] ${className}`}>{children}</div>;
}

export function Section({
  id,
  tone = "white",
  children,
  className = "",
}: {
  id?: string;
  tone?: "white" | "canvas" | "dark";
  children: ReactNode;
  className?: string;
}) {
  const bg = { white: "bg-white", canvas: "bg-canvas", dark: "bg-[linear-gradient(135deg,var(--color-deep),var(--color-deep-2))] text-white" }[tone];
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${bg} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  center = true,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-bold uppercase tracking-[0.14em] ${dark ? "text-white/70" : "text-primary"}`}>{eyebrow}</p>
      )}
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {lede && <p className={`mt-4 text-lg ${dark ? "text-subtle" : "text-muted"}`}>{lede}</p>}
    </div>
  );
}
