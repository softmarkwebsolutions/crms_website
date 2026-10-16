import { Icon } from "@/components/ui/Icon";

/** Follow-up mockup: today's schedule, a month calendar and a reminder that stays until acknowledged. Demo data. */
export function FollowUpsPanel({ className = "" }: { className?: string }) {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const dots = new Set([3, 6, 9, 12, 14, 17, 21, 24]);
  return (
    <div className={`relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[560px] ${className}`} role="img" aria-label="Follow-up planner preview">
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] origin-top -translate-x-1/2 scale-[.64] sm:scale-100">
        <div className="absolute left-0 top-6 w-[290px] rounded-3xl border border-line bg-white p-4 shadow-[var(--shadow-lift)]" style={{ animation: "pop .7s .1s both" }}>
          <div className="mb-3 flex items-center justify-between"><p className="font-bold text-ink">Today</p><span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">4 due</span></div>
          <ul className="relative space-y-3 pl-6 text-xs before:absolute before:bottom-2 before:left-[9px] before:top-2 before:w-0.5 before:bg-line">
            {[["10:30", "Ramesh Yadav", "Interested", "bg-success", "Done"], ["11:00", "Priya Menon", "Call back", "bg-warn", "Now"], ["12:15", "Gurpreet Singh", "Deal sent", "bg-info", ""], ["16:00", "Anita Desai", "Fresh", "bg-subtle", ""]].map(([t, n, s, d, st]) => (
              <li key={t} className="relative rounded-xl border border-line bg-canvas p-2.5">
                <span className={`absolute -left-[22px] top-3 size-3 rounded-full ring-4 ring-white ${d} ${st === "Now" ? "animate-pulse" : ""}`} />
                <div className="flex items-center gap-2"><b className="text-ink">{t}</b><span className="text-muted">{n}</span>{st && <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold ${st === "Now" ? "bg-warn/20 text-amber-700" : "bg-success/10 text-emerald-700"}`}>{st}</span>}</div>
                <p className="mt-0.5 text-[10px] text-muted">{s}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute left-[310px] top-0 w-[250px] animate-float rounded-3xl border border-line bg-white p-4 shadow-[var(--shadow-lift)]">
          <p className="mb-2 flex items-center justify-between text-sm font-bold text-ink">October <Icon name="calendar" className="size-4 text-primary" /></p>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i} className="font-bold text-subtle">{d}</span>)}
            {days.map((d) => (
              <span key={d} className={`relative grid aspect-square place-items-center rounded-md ${d === 13 ? "bg-primary font-bold text-white" : "text-ink"}`}>
                {d}{dots.has(d) && <i className="absolute bottom-0.5 size-1 rounded-full bg-warn" />}
                {d === 13 && <span className="pulse-ring absolute inset-0 rounded-md bg-primary/40" />}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute left-[90px] top-[330px] w-[330px] rounded-3xl bg-[linear-gradient(135deg,var(--color-deep),var(--color-primary))] p-4 text-white shadow-[var(--shadow-lift)]" style={{ animation: "pop .8s .5s both" }}>
          <div className="flex items-center gap-3">
            <span className="grid size-11 origin-top place-items-center rounded-2xl bg-warn text-ink" style={{ animation: "shake 2.5s ease-in-out infinite" }}><Icon name="bell" className="size-6" /></span>
            <div><p className="text-[10px] font-bold uppercase tracking-wider text-white/60">Callback due now</p><p className="font-bold">Priya Menon · 11:00</p></div>
          </div>
          <div className="mt-3 flex gap-2 text-[11px] font-bold">
            <span className="flex-1 rounded-full bg-white py-2 text-center text-primary">Done</span>
            <span className="flex-1 rounded-full border border-white/40 py-2 text-center">Snooze 10 min</span>
            <span className="flex-1 rounded-full border border-white/40 py-2 text-center">Mute</span>
          </div>
          <p className="mt-2 text-center text-[10px] text-white/55">Stays on screen until acknowledged</p>
        </div>
      </div>
    </div>
  );
}
