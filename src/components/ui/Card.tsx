import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export function FeatureCard({ icon, title, children, grad = "from-primary to-deep-2" }: { icon: IconName; title: string; children: ReactNode; grad?: string }) {
  return (
    <article className="group rounded-[var(--radius-card)] border border-line bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
      <span className={`mb-4 grid size-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,.4)] transition group-hover:rotate-6 group-hover:scale-110 ${grad}`}>
        <Icon name={icon} className="size-5" />
      </span>
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-[15px] text-muted">{children}</p>
    </article>
  );
}
