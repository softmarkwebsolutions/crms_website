import { Icon } from "@/components/ui/Icon";

/** WhatsApp campaign mockup: a personalised template landing in a chat, a reply, and live batch stats. Demo data. */
export function WhatsAppPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[560px] ${className}`} role="img" aria-label="WhatsApp campaign preview">
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] origin-top -translate-x-1/2 scale-[.64] sm:scale-100">
        <div className="absolute left-[150px] top-2 w-[260px] animate-float overflow-hidden rounded-[2.4rem] border-[7px] border-ink bg-[#efeae2] shadow-[var(--shadow-lift)]">
          <div className="flex items-center gap-2 bg-[#075e54] px-3 pb-2.5 pt-6 text-white">
            <span className="grid size-8 place-items-center rounded-full bg-white/20 text-xs font-bold">KT</span>
            <div className="leading-tight"><p className="text-sm font-bold">Kisan Tractors <span className="text-emerald-300">✓</span></p><p className="text-[10px] text-white/70">Business account</p></div>
          </div>
          <div className="space-y-2 p-3">
            <div className="mx-auto w-fit rounded-md bg-white/80 px-2 py-0.5 text-[10px] text-muted">Today</div>
            <div className="max-w-[88%] overflow-hidden rounded-lg rounded-tl-none bg-white shadow-sm" style={{ animation: "pop .6s .2s both" }}>
              <div className="relative bg-[linear-gradient(135deg,var(--color-deep),var(--color-primary))] px-3 py-4 text-white">
                <p className="text-[9px] font-bold tracking-[0.2em] text-warn">DIWALI DHAMAKA</p>
                <p className="text-xl font-bold leading-tight">Ramesh ji,</p>
                <p className="text-[11px] opacity-90">₹25,000 off · Mahindra 575 DI</p>
              </div>
              <p className="px-2.5 pt-2 text-[11px] text-ink">Namaste Ramesh ji 🙏 Festive offer sirf is hafte tak. Showroom visit book karein?</p>
              <p className="px-2.5 pb-1 text-right text-[9px] text-muted">10:42</p>
              <div className="divide-y divide-line border-t border-line text-center text-[11px] font-bold text-[#128c7e]"><p className="py-1.5">↗ Book visit</p><p className="py-1.5">✆ Call me</p></div>
            </div>
            <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 text-[11px] text-ink shadow-sm" style={{ animation: "pop .6s 1s both" }}>
              Haan, Saturday ko aa sakta hoon
              <p className="text-right text-[9px] text-sky-500">10:44 ✓✓</p>
            </div>
            <div className="flex w-fit gap-1 rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm" aria-hidden>
              {[0, 0.2, 0.4].map((d) => <span key={d} className="size-1.5 rounded-full bg-subtle" style={{ animation: `typing 1.2s ${d}s infinite` }} />)}
            </div>
          </div>
        </div>

        <div className="absolute left-[360px] top-10 w-[200px] rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-lift)]" style={{ animation: "pop .8s .4s both" }}>
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted">diwali_offer · batch #118</p>
          {[["Sent", "1,240", 100, "from-primary to-deep-2"], ["Delivered", "1,198", 96, "from-info to-sky-600"], ["Replied", "312", 25, "from-success to-emerald-600"]].map(([k, v, w, g], i) => (
            <div key={k as string} className="mt-3">
              <div className="flex justify-between text-xs"><span className="text-muted">{k}</span><b className="text-ink">{v}</b></div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-hair"><div className={`h-full rounded-full bg-gradient-to-r ${g}`} style={{ width: `${w}%`, animation: `fillbar 1.4s ${0.6 + i * 0.2}s ease-out both` }} /></div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-[110px] w-[140px] rounded-2xl bg-white p-3 shadow-[var(--shadow-card)]" style={{ animation: "pop .8s .6s both" }}>
          <p className="flex items-center gap-1.5 text-[11px] font-bold text-ink"><span className="grid size-5 place-items-center rounded-full bg-success text-white"><Icon name="check" className="size-3" /></span> Template approved</p>
          <p className="mt-1 text-[10px] text-muted">Live status from Meta</p>
        </div>

        <div className="absolute left-[14px] top-[300px] w-[200px] rounded-2xl bg-deep p-3 text-white shadow-[var(--shadow-lift)]" style={{ animation: "pop .8s .8s both" }}>
          <p className="flex items-center justify-between text-[11px] font-bold"><span>Sending batch 4 of 5</span><span className="text-warn">78%</span></p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full w-[78%] rounded-full bg-gradient-to-r from-warn to-amber-300" style={{ animation: "fillbar 2s 1s ease-out both" }} /></div>
          <p className="mt-2 text-[10px] text-white/60">Cancel anytime</p>
        </div>

        <div className="absolute left-[380px] top-[300px] flex animate-float items-center gap-2 rounded-xl bg-white px-3 py-2 text-[11px] shadow-[var(--shadow-card)]">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white"><Icon name="chat" className="size-4" /></span>
          <span><b className="block text-ink">New reply</b><span className="text-muted">Shared inbox · 2 unread</span></span>
        </div>
      </div>
    </div>
  );
}
