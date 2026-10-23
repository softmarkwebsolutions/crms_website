import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";

// Planned, not shipped: the page says "coming soon" and promises no dates or numbers.
const planned: [IconName, string][] = [["chart", "Which lead sources and campaigns convert"], ["filter", "Conversion from fresh lead to closed deal"], ["users", "Agent and team comparison over time"], ["calendar", "Trends by day, week and month"]];

export function AnalyticsTeaser() {
  return (
    <section id="analytics" className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-deep),var(--color-deep-2))] py-16 text-white md:py-24">
      <div aria-hidden className="absolute inset-0 opacity-[.12] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(90deg,#000,transparent_70%)]" />
      <div aria-hidden className="absolute -right-24 top-0 size-96 animate-[blob_16s_ease-in-out_infinite] rounded-full bg-warn/25 blur-3xl" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur"><span className="size-2 animate-pulse rounded-full bg-warn" /> Coming soon</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Analytics is coming to <span className="bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">SoftCRMS</span></h2>
          <p className="mt-4 max-w-xl text-lg text-white/75">We are adding deeper analytics so you can see what is working across your leads, calls and team, and act on it.</p>
          <ul className="mt-6 space-y-3">
            {planned.map(([ic, t], i) => (
              <li key={t} className="flex items-center gap-3" style={{ animation: `pop .5s ${i * 120}ms both` }}>
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/15"><Icon name={ic} className="size-5" /></span>{t}
              </li>
            ))}
          </ul>
          <ButtonLink href="/#demo" variant="light" className="mt-8">Tell me when it&apos;s live <Icon name="arrow" className="size-4" /></ButtonLink>
        </div>

        <div className="relative" aria-hidden>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
            <div className="flex items-center justify-between text-sm font-bold"><span>Lead conversion</span><span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px]">Preview</span></div>
            <svg viewBox="0 0 300 120" className="mt-4 w-full">
              <defs><linearGradient id="at" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fbbf24" stopOpacity=".5" /><stop offset="1" stopColor="#fbbf24" stopOpacity="0" /></linearGradient></defs>
              <polygon points="0,100 40,80 80,88 120,52 160,60 200,30 240,38 300,10 300,120 0,120" fill="url(#at)" />
              <polyline points="0,100 40,80 80,88 120,52 160,60 200,30 240,38 300,10" fill="none" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} style={{ animation: "dash-draw 3.5s ease-in-out infinite" }} />
            </svg>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Sources", "Funnel", "Team"].map((k, i) => (
                <div key={k} className="rounded-2xl bg-white/10 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">{k}</p>
                  <div className="mt-2 flex h-10 items-end gap-1">{[40, 70, 55, 90].map((h, j) => <span key={j} className="flex-1 rounded-t bg-white/70" style={{ height: `${h}%`, transformOrigin: "bottom", animation: `growx 1s ${(i * 4 + j) * 0.08}s ease-out both` }} />)}</div>
                </div>
              ))}
            </div>
          </div>
          <span className="absolute -bottom-4 -left-3 animate-float rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-primary shadow-[var(--shadow-lift)]">Coming soon</span>
        </div>
      </Container>
    </section>
  );
}
