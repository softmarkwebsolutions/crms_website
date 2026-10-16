import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Motion";
import { Container } from "@/components/ui/Section";

export function Head({ icon, grad, title, text, light = false }: { icon: IconName; grad: string; title: string; text: string; light?: boolean }) {
  return (
    <>
      <span className={`mb-4 grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-[0_10px_22px_-10px_rgba(0,0,0,.5)] transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${grad}`}><Icon name={icon} className="size-6" /></span>
      <h3 className={`text-xl font-bold ${light ? "text-white" : "text-ink"}`}>{title}</h3>
      <p className={`mt-2 text-[15px] ${light ? "text-white/75" : "text-muted"}`}>{text}</p>
    </>
  );
}

export function Card({ className = "", delay = 0, children, dark = false }: { className?: string; delay?: number; children: React.ReactNode; dark?: boolean }) {
  return (
    <Reveal delay={delay} className={className}>
      <article className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] ${dark ? "border-transparent bg-[linear-gradient(145deg,var(--color-deep),var(--color-deep-2))] text-white" : "border-line bg-white"}`}>
        {children}
      </article>
    </Reveal>
  );
}

export const Mini = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => <div className={`mt-auto pt-5 ${className}`}>{children}</div>;

/** Section wrapper shared by the module bento grids: soft background, pill eyebrow, big heading. */
export function BentoShell({ eyebrow, title, accent, lede, children }: { eyebrow: string; title: string; accent: string; lede: string; children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff,#f4edfb_60%,#fff)] py-16 md:py-24">
      <div aria-hidden className="absolute inset-0 opacity-60 [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]" />
      <div aria-hidden className="absolute -left-32 top-20 size-96 animate-[blob_16s_ease-in-out_infinite] rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="absolute -right-24 bottom-10 size-96 animate-[blob_19s_ease-in-out_infinite_reverse] rounded-full bg-warn/15 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary"><span className="size-2 animate-pulse rounded-full bg-success" /> {eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">{title} <span className="text-shine">{accent}</span></h2>
          <p className="mt-4 text-lg text-muted">{lede}</p>
        </div>
        <div className="grid auto-rows-auto gap-5 md:grid-cols-2 lg:grid-cols-4">{children}</div>
      </Container>
    </section>
  );
}

/** Bento grid for the calling module. Each tile pairs one real capability with a small animated picture of it. */
export function CallingBento() {
  return (
    <BentoShell eyebrow="The calling desk" title="Everything an agent needs," accent="on one screen." lede="Nine things the calling module already does, from the first assigned lead to the deal request.">
          {/* 1 big */}
          <Card dark className="md:col-span-2 lg:row-span-2">
            <Head light icon="target" grad="from-warn to-orange-500" title="Auto-assigned leads" text="Campaign rules hand each agent their next leads, so nobody picks from a shared pile." />
            <Mini className="flex flex-1 flex-col justify-center">
              <svg viewBox="0 0 320 170" className="w-full" aria-hidden>
                <rect x="85" y="6" width="150" height="30" rx="15" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.4)" />
                <text x="160" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Campaign · Rural Connect</text>
                {[55, 160, 265].map((x, i) => (
                  <g key={x}>
                    <path d={`M160 36 C160 80 ${x} 70 ${x} 118`} fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" className="dash-line" />
                    <circle cx={x} cy="140" r="22" fill="#fff" />
                    <text x={x} y="146" textAnchor="middle" fontSize="16" fontWeight="800" fill="var(--color-primary)">{["P", "R", "G"][i]}</text>
                    <circle r="5" fill="#fbbf24"><animateMotion dur="3s" begin={`${i * 0.7}s`} repeatCount="indefinite" path={`M160 36 C160 80 ${x} 70 ${x} 118`} /></circle>
                  </g>
                ))}
              </svg>
              <p className="mt-1 text-center text-xs text-white/60">Each agent gets their own next leads</p>
            </Mini>
          </Card>

          {/* 2 priority */}
          <Card delay={100} className="md:col-span-2">
            <Head icon="bolt" grad="from-orange-400 to-amber-500" title="Priority leads first" text="Preferences decide which leads reach the agent first, so the hottest ones are called first." />
            <Mini className="space-y-2.5">
              {[["Ramesh · Tractor loan", "HOT", "bg-danger text-white", 92], ["Priya · Pickup truck", "WARM", "bg-warn text-white", 64], ["Anita · Two-wheeler", "COLD", "bg-info text-white", 30]].map(([n, b, c, w], i) => (
                <div key={n as string} className="flex items-center gap-3 text-sm">
                  <span className="w-40 shrink-0 truncate font-semibold text-ink">{n}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-hair"><div className="h-full origin-left rounded-full bg-gradient-to-r from-primary to-warn" style={{ width: `${w}%`, animation: `growx 1.2s ${i * 0.2}s ease-out both` }} /></div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${c}`}>{b}</span>
                </div>
              ))}
            </Mini>
          </Card>

          {/* 3 outcome */}
          <Card delay={150}>
            <Head icon="check" grad="from-emerald-500 to-teal-600" title="Outcome on every call" text="Pick a status and add a note; it lands on the lead's history." />
            <Mini className="flex flex-wrap gap-1.5 text-[11px] font-bold">
              {[["Interested", "text-amber-700"], ["Call back", "text-cyan-700"], ["Closed", "text-emerald-700"], ["Not interested", "text-red-700"]].map(([t, c], k) => (
                <span key={t} className={`pick rounded-full border border-line px-2.5 py-1 ${c}`} style={{ animationDelay: `${k * 1.5}s` }}>{t}</span>
              ))}
            </Mini>
          </Card>

          {/* 4 reassign */}
          <Card delay={200}>
            <Head icon="refresh" grad="from-pink-500 to-rose-600" title="Auto re-assign" text="No pickup after repeated attempts? The lead moves to another agent." />
            <Mini className="flex items-center justify-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-soft font-bold text-primary">A</span>
              <span className="grid size-9 animate-[orbit_3s_linear_infinite] place-items-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white"><Icon name="refresh" className="size-4" /></span>
              <span className="grid size-11 place-items-center rounded-full bg-primary font-bold text-white">B</span>
            </Mini>
          </Card>

          {/* 5 history */}
          <Card delay={100} className="md:col-span-2">
            <Head icon="clock" grad="from-info to-sky-600" title="Call history & TAT" text="Every call is kept on the lead. Download the call history and turnaround-time reports." />
            <Mini>
              <ul className="relative space-y-2 pl-5 text-sm before:absolute before:bottom-1 before:left-[7px] before:top-1 before:w-0.5 before:bg-line">
                {[["Today 10:42", "Interested", "bg-warn"], ["Yesterday", "Call back", "bg-info"], ["Mon 16:05", "No answer", "bg-subtle"]].map(([w, o, d], k) => (
                  <li key={w} className="relative flex items-center gap-2" style={{ animation: `pop .5s ${k * 150}ms both` }}>
                    <span className={`absolute -left-[18px] size-3 rounded-full ring-4 ring-white ${d}`} />
                    <span className="text-muted">{w}</span><b className="text-ink">{o}</b>
                    {k === 0 && <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">Download</span>}
                  </li>
                ))}
              </ul>
            </Mini>
          </Card>

          {/* 6 today */}
          <Card delay={150}>
            <Head icon="calendar" grad="from-violet-500 to-fuchsia-600" title="Today's calls" text="Calls made today vs total assigned." />
            <Mini className="flex items-center gap-3">
              <svg viewBox="0 0 48 48" className="size-16 -rotate-90"><circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-hair)" strokeWidth="5" /><circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-primary)" strokeWidth="5" strokeLinecap="round" strokeDasharray="126" style={{ "--to": "88" } as React.CSSProperties} className="animate-[ring_1.8s_ease-out_both]" /></svg>
              <p className="text-2xl font-bold text-ink">12<span className="text-sm font-normal text-muted">/40</span></p>
            </Mini>
          </Card>

          {/* 7 tasks */}
          <Card delay={200}>
            <Head icon="bell" grad="from-blue-500 to-indigo-600" title="Follow-up tasks" text="Calendar, timeline, snooze and mute." />
            <Mini className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-muted">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <span key={i} className={`relative rounded-md py-1.5 ${i === 5 ? "bg-primary text-white" : "bg-canvas"}`}>{d}{i === 5 && <span className="pulse-ring absolute inset-0 rounded-md bg-primary/40" />}</span>
              ))}
            </Mini>
          </Card>

          {/* 8 deal */}
          <Card delay={100} className="md:col-span-2">
            <Head icon="receipt" grad="from-amber-400 to-orange-500" title="Deal requests" text="Raise a deal from the calling panel and send it for approval without leaving the call." />
            <Mini className="flex flex-wrap items-center gap-2 text-xs font-bold">
              {["Raised", "Approved", "Proforma"].map((t, i, a) => (
                <span key={t} className="flex items-center gap-2">
                  <span className={`rounded-full px-3.5 py-1.5 ${i === a.length - 1 ? "bg-gradient-to-r from-success to-emerald-600 text-white shadow-[0_8px_18px_-8px_rgba(16,185,129,.7)]" : "bg-soft text-primary"}`}>{t}</span>
                  {i < a.length - 1 && <Icon name="arrow" className="size-4 text-subtle" />}
                </span>
              ))}
            </Mini>
          </Card>

          {/* 9 dealer */}
          <Card delay={150} className="md:col-span-2">
            <Head icon="pin" grad="from-teal-500 to-emerald-600" title="Dealer & valuation lookup" text="Find the nearest dealer and a vehicle's valuation while the customer is on the line." />
            <Mini className="flex items-center gap-4">
              <span className="relative grid size-12 place-items-center rounded-full bg-success/15 text-success"><span className="pulse-ring absolute inset-0 rounded-full bg-success/30" /><Icon name="pin" className="relative size-6" /></span>
              <div className="text-sm"><p className="font-bold text-ink">Nearest dealer found</p><p className="text-muted">Jaipur showroom · valuation ready</p></div>
            </Mini>
          </Card>
    </BentoShell>
  );
}
