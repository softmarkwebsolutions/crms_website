import { Icon } from "@/components/ui/Icon";

/** Leader-dashboard mockup: stat tiles, a drawing trend line, outcome donut, live agent status. Demo data. */
export function ReportsPanel({ className = "" }: { className?: string }) {
  const pts = "0,70 30,58 60,64 90,40 120,46 150,24 180,30 210,10";
  return (
    <div className={`relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[560px] ${className}`} role="img" aria-label="Leader dashboard preview">
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] origin-top -translate-x-1/2 scale-[.64] sm:scale-100">
        <div className="absolute left-0 top-6 w-[520px] rounded-3xl border border-line bg-white p-5 shadow-[var(--shadow-lift)]">
          <div className="flex items-center justify-between"><p className="font-bold text-ink">Leader dashboard</p><span className="rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] font-bold text-success">● Live</span></div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[["Calls today", "142", "from-primary to-deep-2"], ["Interested", "31", "from-warn to-orange-500"], ["Closed", "9", "from-success to-emerald-600"]].map(([k, v, g], i) => (
              <div key={k} className={`rounded-2xl bg-gradient-to-br p-3 text-white ${g}`} style={{ animation: `pop .6s ${i * 120}ms both` }}><p className="text-[10px] font-bold uppercase tracking-wider opacity-80">{k}</p><p className="text-2xl font-bold">{v}</p></div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-[1.5fr_1fr] gap-4">
            <div className="rounded-2xl bg-canvas p-3">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted">Calls by hour</p>
              <svg viewBox="0 0 210 80" className="w-full" aria-hidden>
                <defs><linearGradient id="rp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--color-primary)" stopOpacity=".35" /><stop offset="1" stopColor="var(--color-primary)" stopOpacity="0" /></linearGradient></defs>
                <polygon points={`${pts} 210,80 0,80`} fill="url(#rp)" style={{ animation: "pop 1.2s .5s both" }} />
                <polyline points={pts} fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} style={{ animation: "dash-draw 3s ease-in-out infinite" }} />
              </svg>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-canvas p-3">
              <svg viewBox="0 0 48 48" className="size-24 -rotate-90" aria-hidden>
                <circle cx="24" cy="24" r="18" fill="none" stroke="var(--color-hair)" strokeWidth="8" />
                {[["var(--color-success)", 22, 0], ["var(--color-warn)", 34, 22], ["var(--color-info)", 26, 56], ["var(--color-danger)", 18, 82]].map(([c, l, o]) => <circle key={c as string} cx="24" cy="24" r="18" fill="none" stroke={c as string} strokeWidth="8" strokeDasharray={`${((l as number) / 100) * 113} 113`} strokeDashoffset={-(((o as number) / 100) * 113)} />)}
              </svg>
            </div>
          </div>
          <ul className="mt-4 space-y-1.5 text-xs">
            {[["Priya M.", "On call", "bg-success"], ["Ramesh Y.", "On call", "bg-success"], ["Anita D.", "Idle 12 min", "bg-warn"]].map(([n, s, d]) => (
              <li key={n} className="flex items-center gap-2 rounded-lg bg-canvas px-3 py-1.5"><span className={`size-2 rounded-full ${d} ${s === "On call" ? "animate-pulse" : ""}`} /><b className="text-ink">{n}</b><span className="ml-auto text-muted">{s}</span></li>
            ))}
          </ul>
        </div>
        <div className="absolute left-[360px] top-[400px] flex animate-float items-center gap-3 rounded-2xl bg-white p-3 shadow-[var(--shadow-lift)]">
          <svg viewBox="0 0 48 48" className="size-12 -rotate-90"><circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-hair)" strokeWidth="5" /><circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-primary)" strokeWidth="5" strokeLinecap="round" strokeDasharray="126" style={{ "--to": "28" } as React.CSSProperties} className="animate-[ring_1.8s_ease-out_both]" /></svg>
          <div><p className="text-[10px] font-bold uppercase tracking-wider text-muted">Team target</p><p className="text-lg font-bold text-ink">78%</p></div>
        </div>
        <div className="absolute left-[10px] top-[420px] flex animate-[float_7s_ease-in-out_infinite_1s] items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[var(--shadow-card)]">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white"><Icon name="trophy" className="size-5" /></span>
          <span className="text-xs"><b className="block text-sm text-ink">Today&apos;s winner</b><span className="text-muted">Priya M. · 38 calls</span></span>
        </div>
      </div>
    </div>
  );
}
