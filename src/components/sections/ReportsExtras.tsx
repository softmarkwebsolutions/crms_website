import { Icon } from "@/components/ui/Icon";
import { BentoShell, Card, Head, Mini } from "./CallingBento";

const agents = [["Priya M.", 38, 40], ["Ramesh Y.", 31, 40], ["Gurpreet S.", 26, 40], ["Anita D.", 19, 40]] as const;

// Mapped to the CRM's reports: leader/agent dashboards, hourly & daily performance, campaign performance, call status/duration, lead conversion, team targets, downloads.
export function ReportsExtras() {
  return (
    <BentoShell eyebrow="Reports & targets" title="Know who is on a call, who is idle," accent="who is closing." lede="Leader dashboards, hour-by-hour views and monthly targets people can watch fill up.">
      <Card dark className="md:col-span-2 lg:row-span-2">
        <Head light icon="target" grad="from-warn to-orange-500" title="Team targets" text="Set a monthly target for each agent, then watch every call count toward it." />
        <Mini className="flex flex-1 flex-col justify-center gap-4">
          <div className="rounded-2xl bg-white p-4 text-ink">
            <div className="mb-3 flex items-center justify-between"><p className="text-sm font-bold">October targets</p><span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">Team 78%</span></div>
            <ul className="space-y-3">
              {agents.map(([n, d, t], k) => (
                <li key={n}>
                  <div className="mb-1 flex items-center gap-2 text-xs"><span className={`grid size-5 place-items-center rounded-full text-[10px] font-bold text-white ${k === 0 ? "bg-gradient-to-br from-amber-400 to-orange-500" : "bg-subtle"}`}>{k + 1}</span><b>{n}</b><span className="ml-auto text-muted">{d}/{t}</span></div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-hair"><div className="h-full origin-left rounded-full bg-gradient-to-r from-primary to-warn" style={{ width: `${(d / t) * 100}%`, animation: `growx 1.4s ${k * 0.15}s ease-out both` }} /></div>
                </li>
              ))}
            </ul>
          </div>
          <p className="flex items-center justify-center gap-2 text-center text-xs font-bold text-white/75"><Icon name="trophy" className="size-4 text-warn" /> Leaderboard and a daily winner keep the floor moving</p>
        </Mini>
      </Card>

      <Card delay={100} className="md:col-span-2">
        <Head icon="users" grad="from-primary to-deep-2" title="Leader dashboard" text="Every agent's day as it happens: who is on a call, who is idle, who is closing." />
        <Mini className="space-y-2">
          {[["Priya M.", "On call", "bg-success", "bg-success/10 text-emerald-700"], ["Ramesh Y.", "Follow-up due", "bg-warn", "bg-warn/15 text-amber-700"], ["Anita D.", "Idle 12 min", "bg-danger", "bg-danger/10 text-red-700"]].map(([n, s, d, c], i) => (
            <div key={n} className="flex items-center gap-3 rounded-xl bg-canvas px-3 py-2 text-sm" style={{ animation: `pop .5s ${i * 130}ms both` }}><span className={`size-2.5 rounded-full ${d} ${s === "On call" ? "animate-pulse" : ""}`} /><b className="text-ink">{n}</b><span className={`ml-auto rounded-full px-2.5 py-0.5 text-[11px] font-bold ${c}`}>{s}</span></div>
          ))}
        </Mini>
      </Card>

      <Card delay={150}>
        <Head icon="clock" grad="from-info to-sky-600" title="Hourly performance" text="Which hours convert." />
        <Mini className="flex h-20 items-end gap-1">
          {[20, 45, 70, 95, 80, 55, 65, 40].map((h, i) => <span key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-info to-sky-500" style={{ height: `${h}%`, transformOrigin: "bottom", animation: `growx 1s ${i * 0.08}s ease-out both` }} />)}
        </Mini>
      </Card>

      <Card delay={200}>
        <Head icon="calendar" grad="from-violet-500 to-fuchsia-600" title="Daily performance" text="Day-by-day trend." />
        <Mini>
          <svg viewBox="0 0 120 50" className="w-full" aria-hidden><polyline points="0,40 20,32 40,36 60,18 80,24 100,8 120,14" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} style={{ animation: "dash-draw 3s ease-in-out infinite" }} /></svg>
        </Mini>
      </Card>

      <Card delay={100} className="md:col-span-2">
        <Head icon="chart" grad="from-orange-400 to-amber-500" title="Campaign performance" text="Compare campaigns by leads, calls and conversion, then filter by date." />
        <Mini className="space-y-2.5">
          {[["Rural Connect", 82], ["Urban Elite", 61], ["Referral Boost", 44]].map(([n, w], i) => (
            <div key={n as string} className="flex items-center gap-3 text-sm"><span className="w-32 shrink-0 font-semibold text-ink">{n}</span><div className="h-2.5 flex-1 overflow-hidden rounded-full bg-hair"><div className="h-full origin-left rounded-full bg-gradient-to-r from-primary to-warn" style={{ width: `${w}%`, animation: `growx 1.2s ${i * 0.2}s ease-out both` }} /></div><b className="w-10 text-right text-ink">{w}%</b></div>
          ))}
        </Mini>
      </Card>

      <Card delay={150}>
        <Head icon="phone" grad="from-emerald-500 to-teal-600" title="Call status & duration" text="Outcomes and talk time." />
        <Mini className="flex items-center gap-3">
          <svg viewBox="0 0 48 48" className="size-16 -rotate-90" aria-hidden><circle cx="24" cy="24" r="18" fill="none" stroke="var(--color-hair)" strokeWidth="8" />{[["var(--color-success)", 30, 0], ["var(--color-warn)", 40, 30], ["var(--color-danger)", 30, 70]].map(([c, l, o]) => <circle key={c as string} cx="24" cy="24" r="18" fill="none" stroke={c as string} strokeWidth="8" strokeDasharray={`${((l as number) / 100) * 113} 113`} strokeDashoffset={-(((o as number) / 100) * 113)} />)}</svg>
          <p className="text-xs text-muted">Avg talk time<br /><b className="text-lg text-ink">2m 14s</b></p>
        </Mini>
      </Card>

      <Card delay={200}>
        <Head icon="filter" grad="from-pink-500 to-rose-600" title="Lead conversion" text="From fresh to closed." />
        <Mini className="space-y-1.5">
          {[100, 70, 42, 18].map((w, i) => <div key={w} className="mx-auto h-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600" style={{ width: `${w}%`, opacity: 1 - i * 0.18 }} />)}
        </Mini>
      </Card>

      <Card delay={100} className="md:col-span-2">
        <Head icon="upload" grad="from-blue-500 to-indigo-600" title="Download what you need" text="Export leads, call history and turnaround-time reports, with download permissions per user." />
        <Mini className="flex flex-wrap gap-2 text-xs font-bold">
          {["Leads CSV", "Call history", "TAT report", "Campaign report"].map((t, k) => <span key={t} className="pick flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-primary" style={{ animationDelay: `${k * 1.5}s` }}><Icon name="arrow" className="size-3.5 rotate-90" />{t}</span>)}
        </Mini>
      </Card>
    </BentoShell>
  );
}
