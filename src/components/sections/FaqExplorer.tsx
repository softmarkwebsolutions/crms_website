"use client";

import { useMemo, useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";

export type FaqGroup = { id: string; label: string; icon: IconName; items: { q: string; a: string }[] };

/** Searchable FAQ: category chips on top, live filter, one accordion list. */
export function FaqExplorer({ groups }: { groups: FaqGroup[] }) {
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groups
      .filter((g) => cat === "all" || g.id === cat)
      .flatMap((g) => g.items.map((i) => ({ ...i, group: g })))
      .filter((i) => !q || `${i.q} ${i.a}`.toLowerCase().includes(q));
  }, [groups, cat, query]);

  return (
    <section className="bg-canvas py-14 md:py-20">
      <Container className="max-w-4xl">
        <label className="relative block">
          <span className="sr-only">Search questions</span>
          <svg aria-hidden viewBox="0 0 24 24" className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-subtle" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search, e.g. trial, GST, WhatsApp" className="w-full rounded-full border border-line bg-white py-4 pl-13 pr-5 text-[15px] text-ink shadow-[var(--shadow-card)] outline-none transition placeholder:text-subtle focus:border-primary focus:ring-4 focus:ring-primary/15" />
        </label>

        <div role="tablist" aria-label="Question categories" className="mt-6 flex flex-wrap justify-center gap-2">
          {[{ id: "all", label: "All", icon: "layers" as IconName }, ...groups].map((g) => (
            <button key={g.id} role="tab" aria-selected={cat === g.id} onClick={() => setCat(g.id)} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${cat === g.id ? "bg-gradient-to-br from-primary to-deep-2 text-white shadow-[0_8px_20px_-8px_var(--t-glow)]" : "border border-line bg-white text-muted hover:border-primary/40 hover:text-primary"}`}>
              <Icon name={g.icon} className="size-4" /> {g.label}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-3" aria-live="polite">
          {rows.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-line bg-white p-5 transition open:border-primary/30 open:shadow-[var(--shadow-card)]">
              <summary className="flex cursor-pointer list-none items-center gap-4 font-bold text-ink">
                <span className={`grid size-10 shrink-0 place-items-center rounded-xl bg-soft text-primary`}><Icon name={f.group.icon} className="size-5" /></span>
                <span className="flex-1">{f.q}</span>
                <span className="text-2xl leading-none text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 pl-14 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
          {rows.length === 0 && <p className="rounded-2xl border border-dashed border-line bg-white p-10 text-center text-muted">No question matches &ldquo;{query}&rdquo;. Try a shorter word, or ask us below.</p>}
        </div>
      </Container>
    </section>
  );
}
