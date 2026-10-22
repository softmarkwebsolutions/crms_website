"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Motion";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { tools } from "@/lib/site";

export const inr = (n: number, dp = 2) => `₹${n.toLocaleString("en-IN", { minimumFractionDigits: dp, maximumFractionDigits: dp })}`;

const inputCls = "w-full rounded-2xl border border-line bg-canvas px-5 py-3.5 text-lg font-bold text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";

/** Two-column calculator frame: inputs card on the left, dark result panel on the right. */
export function CalcLayout({ form, result }: { form: ReactNode; result: ReactNode }) {
  return (
    <section className="bg-canvas py-14 md:py-20">
      <Container className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-9">{form}</div>
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,var(--color-deep),var(--color-deep-2))] p-6 text-white md:p-9">
          <div aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full bg-white/5" />
          <div className="relative">{result}</div>
        </div>
      </Container>
    </section>
  );
}

export function Field({ label, hint, children, className = "mt-6 first:mt-0" }: { label: string; hint?: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-bold text-ink">{label}</span>
      <div className="mt-2">{children}</div>
      {hint && <span className="mt-1.5 block text-xs text-muted">{hint}</span>}
    </label>
  );
}

export function NumberInput({ value, onChange, prefix, suffix, label }: { value: string; onChange: (v: string) => void; prefix?: string; suffix?: string; label: string }) {
  return (
    <div className="flex items-center rounded-2xl border border-line bg-canvas px-5 transition focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/15">
      {prefix && <span className="text-xl font-bold text-muted">{prefix}</span>}
      <input inputMode="decimal" aria-label={label} value={value} onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ""))} className="w-full bg-transparent px-3 py-3.5 text-xl font-bold text-ink outline-none" />
      {suffix && <span className="text-base font-bold text-muted">{suffix}</span>}
    </div>
  );
}

export const DateInput = ({ value, onChange, label, min, max }: { value: string; onChange: (v: string) => void; label: string; min?: string; max?: string }) => (
  <input type="date" aria-label={label} value={value} min={min} max={max} onChange={(e) => onChange(e.target.value)} className={inputCls} />
);

export function Select({ value, onChange, options, label }: { value: string; onChange: (v: string) => void; options: [string, string][]; label: string }) {
  return (
    <select aria-label={label} value={value} onChange={(e) => onChange(e.target.value)} className={inputCls}>
      {options.map(([v, t]) => <option key={v} value={v}>{t}</option>)}
    </select>
  );
}

export function Segmented({ value, onChange, options, label }: { value: string; onChange: (v: string) => void; options: [string, string][]; label: string }) {
  return (
    <div role="group" aria-label={label} className="flex rounded-full bg-canvas p-1">
      {options.map(([v, t]) => (
        <button key={v} type="button" aria-pressed={value === v} onClick={() => onChange(v)} className={`flex-1 rounded-full px-4 py-2.5 text-sm font-bold transition ${value === v ? "bg-gradient-to-br from-primary to-deep-2 text-white shadow-[0_8px_20px_-8px_var(--t-glow)]" : "text-muted hover:text-primary"}`}>{t}</button>
      ))}
    </div>
  );
}

export function Headline({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">{label}</p>
      <p className="mt-2 break-words text-5xl font-bold tracking-tight md:text-6xl" aria-live="polite">{value}</p>
      {sub && <p className="mt-2 text-sm text-subtle">{sub}</p>}
    </>
  );
}

export function Rows({ rows }: { rows: { k: string; v: string; strong?: boolean }[] }) {
  return (
    <dl className="mt-6 divide-y divide-white/10 rounded-2xl bg-white/5 px-5 ring-1 ring-white/10">
      {rows.map((r) => (
        <div key={r.k} className={`flex items-center justify-between gap-4 py-3.5 ${r.strong ? "text-lg font-bold" : "text-[15px] text-white/80"}`}>
          <dt>{r.k}</dt><dd className="text-right font-bold tabular-nums text-white">{r.v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="mt-5 flex gap-2 text-xs leading-relaxed text-subtle"><Icon name="shield" className="mt-0.5 size-4 shrink-0" /><span>{children}</span></p>;
}

/** Links to the other free tools, shown under each calculator. */
export function MoreTools({ current }: { current: string }) {
  return (
    <Section tone="white">
      <SectionHead eyebrow="Free tools" title="More calculators for your business" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tools.filter((t) => t.href !== current).map((t, i) => (
          <Reveal key={t.href} delay={i * 80}>
            <Link href={t.href} className="group block h-full rounded-3xl border border-line bg-canvas p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
              <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white transition group-hover:rotate-6 ${t.grad}`}><Icon name={t.icon} className="size-7" /></span>
              <h3 className="mt-4 text-lg font-bold text-ink">{t.label}</h3>
              <p className="mt-1 text-[15px] text-muted">{t.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">Open <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
