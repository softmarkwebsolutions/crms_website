"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHead } from "@/components/ui/Section";

const tabs = [
  { id: "dashboard", label: "Dashboard", title: "See the whole business at a glance", text: "Filter by date, status, campaign, source and state, and watch the cards update.", points: ["Demo, trial and subscription cards", "Lead status counts: busy, call later, in progress", "Distribution and leads-by-status charts"], href: "/modules/reports", cta: "See reports", src: "/images/panel-dashboard.jpg", alt: "CRM dashboard with demo, subscription and lead status cards" },
  { id: "leads", label: "Leads", title: "Every lead, one searchable list", text: "Track, filter and manage leads from every source, in a table or as cards.", points: ["Table and card views", "Search filters and one-click reset", "Download with permissions"], href: "/lead-management", cta: "See lead management", src: "/images/panel-leads.jpg", alt: "Leads panel with table of leads, states and campaigns" },
  { id: "companies", label: "Companies", title: "Run many companies on one install", text: "Plans, seat usage and enabled modules for every company, each seeing only its own data.", points: ["Plan and paid-till date per company", "Seat usage at a glance", "Add a company with its first admin"], href: "/modules/billing", cta: "See billing", src: "/images/panel-companies.jpg", alt: "Companies list with plan and seat usage" },
];

export function ProductTour() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % tabs.length), 5000);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <Section id="tour" tone="canvas">
      <SectionHead eyebrow="Product tour" title="One workspace. Every desk on the floor." />
      <div role="tablist" aria-label="Product screens" className="mb-8 flex flex-wrap justify-center gap-2">
        {tabs.map((t, k) => (
          <button key={t.id} role="tab" aria-selected={i === k} onClick={() => { setI(k); setPaused(true); }}
            className={`rounded-full border px-5 py-2 text-sm font-bold transition ${i === k ? "border-primary bg-primary text-white shadow-[0_8px_20px_-8px_var(--t-glow)]" : "border-line bg-white text-ink hover:border-primary"}`}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid items-center gap-8 lg:grid-cols-[1.45fr_1fr]">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-lift)]">
        <div className="flex gap-1.5 border-b border-line bg-canvas px-4 py-3"><i className="size-2.5 rounded-full bg-danger/70" /><i className="size-2.5 rounded-full bg-warn/70" /><i className="size-2.5 rounded-full bg-success/70" /></div>
        <div className="relative aspect-[1027/779]">
          {tabs.map((t, k) => (
            <Image key={t.id} src={t.src} alt={t.alt} fill sizes="(min-width:896px) 896px, 100vw"
              className={`object-cover object-top transition-all duration-500 ${i === k ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"}`} />
          ))}
        </div>
      </div>

      <div key={tabs[i].id} className="animate-rise rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
        <span className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success"><span className="size-2 animate-pulse rounded-full bg-success" /> Live in the product</span>
        <h3 className="mt-4 text-2xl font-bold text-ink">{tabs[i].title}</h3>
        <p className="mt-2 text-muted">{tabs[i].text}</p>
        <ul className="mt-5 space-y-3">
          {tabs[i].points.map((p, k) => (
            <li key={p} className="flex items-center gap-3 text-[15px] text-ink" style={{ animation: `pop .5s ${k * 120 + 150}ms both` }}>
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Icon name="check" className="size-3.5" /></span>{p}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-2" aria-hidden>
          {tabs.map((t, k) => <span key={t.id} className={`h-1.5 rounded-full transition-all ${i === k ? "w-8 bg-primary" : "w-3 bg-line"}`} />)}
        </div>
        <ButtonLink href={tabs[i].href} className="mt-6">{tabs[i].cta} <Icon name="arrow" className="size-4" /></ButtonLink>
      </div>
      </div>
    </Section>
  );
}
