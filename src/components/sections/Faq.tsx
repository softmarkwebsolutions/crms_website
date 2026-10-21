import { Section, SectionHead } from "@/components/ui/Section";

export function Faq({ items, tone = "white" }: { items: { q: string; a: string }[]; tone?: "white" | "canvas" }) {
  return (
    <Section id="faq" tone={tone}>
      <SectionHead eyebrow="FAQ" title="Questions, answered" />
      <div className="mx-auto max-w-3xl space-y-3">
        {items.map((f) => (
          <details key={f.q} className={`group rounded-[var(--radius-card)] border border-line p-5 open:shadow-[var(--shadow-card)] ${tone === "white" ? "bg-canvas" : "bg-white"}`}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink">
              {f.q}
              <span className="text-xl text-primary transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[15px] text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
