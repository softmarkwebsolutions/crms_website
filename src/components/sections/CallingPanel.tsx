import { Icon } from "@/components/ui/Icon";
import { CallTimer } from "./CallTimer";

const rows = [["Company", "Kisan Tractors"], ["Email", "ramesh@kisan.in"], ["Mobile", "98••••421"], ["Source", "Facebook"], ["Campaign", "Tractor loan"]];
const channels = [["Email", "bg-info"], ["SMS", "bg-success"], ["WhatsApp", "bg-primary"]];

/** Calling-panel mockup: lead card on a phone, call summary popover, and a channel picker. All demo data. */
export function CallingPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[560px] ${className}`} aria-label="Calling panel preview" role="img">
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] origin-top -translate-x-1/2 scale-[.64] sm:scale-100">
        <div className="absolute left-[120px] top-4 w-[260px] animate-float overflow-hidden rounded-[2.2rem] border-[7px] border-ink bg-white shadow-[var(--shadow-lift)]">
          <div className="flex items-center gap-3 bg-deep px-4 pb-3 pt-6 text-sm font-bold text-white"><Icon name="arrow" className="size-4 rotate-180" /> Customer Details</div>
          <div className="px-4 py-3 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-soft text-xl font-bold text-primary">R</span>
            <p className="mt-1 text-sm font-bold text-primary">Ramesh Yadav</p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] font-bold">
              {["Call", "Mail", "WhatsApp"].map((b) => <span key={b} className="rounded-lg border border-line py-1.5 text-ink shadow-sm">{b}</span>)}
            </div>
            <div className="mt-3 flex justify-around border-b border-line text-[11px] font-bold text-subtle"><span className="border-b-2 border-primary pb-1 text-primary">Details</span><span>Lead 1</span><span>Quotation</span></div>
          </div>
          <dl className="mx-3 mb-4 divide-y divide-hair rounded-lg border border-line text-[11px]">
            {rows.map(([k, v]) => <div key={k} className="flex justify-between px-2.5 py-1.5"><dt className="font-bold text-primary">{k}</dt><dd className="text-muted">{v}</dd></div>)}
          </dl>
          <div className="mx-3 mb-4 rounded-lg border border-line p-2.5">
            <p className="mb-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-muted">Lead rating <span className="normal-case tracking-normal text-subtle">by Priya</span></p>
            <div className="grid grid-cols-3 gap-1.5 text-[11px] font-bold">
              {[["1", "Low"], ["3", "Medium"], ["5", "High"]].map(([n, w], k) => (
                <span key={n} className="pick flex items-center justify-center gap-1 rounded-md border border-line py-1.5 text-ink" style={{ animationDelay: `${k * 2}s` }}>
                  {n}<svg viewBox="0 0 24 24" className="size-3 fill-warn" aria-hidden><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" /></svg>{w}
                </span>
              ))}
            </div>
            <p className="mt-1.5 text-[10px] text-muted">&ldquo;Wants a demo on Saturday&rdquo;</p>
          </div>
        </div>

        <div className="absolute left-[330px] top-16 w-[220px] rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-lift)]" style={{ animation: "pop .8s .3s both" }}>
          <div className="flex items-start justify-between"><span className="grid size-9 place-items-center rounded-full bg-success/15 text-success"><Icon name="phone" className="size-4" /></span><span className="rounded bg-deep px-2 py-0.5 text-[10px] font-bold text-white">Save</span></div>
          <p className="mt-2 text-sm font-bold leading-tight text-ink">Call Summary<br />With Ramesh Yadav</p>
          <dl className="mt-3 space-y-1 text-[11px]">
            {[["Mobile", "98••••421"], ["Status", "Interested"], ["Next call", "Sat 11:00"]].map(([k, v]) => <div key={k} className="flex gap-2"><dt className="w-16 font-bold text-primary">{k}</dt><dd className="text-ink">{v}</dd></div>)}
          </dl>
          <div className="mt-3 flex gap-2 text-[11px] font-bold"><span className="rounded-full bg-deep px-3 py-1.5 text-white">Call Now</span><span className="rounded-full border border-success/50 px-3 py-1.5 text-success">WhatsApp</span></div>
        </div>

        <div className="absolute left-0 top-[250px] w-[170px] overflow-hidden rounded-xl border border-line bg-white text-sm font-bold text-ink shadow-[var(--shadow-card)]">
          {channels.map(([t, c], i) => (
            <div key={t} className="pick flex items-center gap-3 border-b border-line px-3 py-2.5 last:border-0" style={{ animationDelay: `${i * 2}s` }}>
              <span className={`size-6 rounded-full ${c}`} />{t}
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-[110px] w-[118px] rounded-2xl bg-deep p-3 text-white shadow-[var(--shadow-lift)]" style={{ animation: "pop .8s .1s both" }}>
          <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/70"><span className="size-2 animate-pulse rounded-full bg-success" /> On call</p>
          <p className="mt-1 text-2xl font-bold tabular-nums"><CallTimer /></p>
          <div className="mt-2 flex h-6 items-end gap-1" aria-hidden>
            {[0, 0.2, 0.4, 0.1, 0.3, 0.5, 0.15].map((d, k) => <span key={k} className="h-full w-1.5 origin-bottom rounded-full bg-warn" style={{ animation: `wave 1s ${d}s ease-in-out infinite` }} />)}
          </div>
        </div>

        <div className="absolute left-[330px] top-[290px] w-[220px] rounded-2xl border border-line bg-white p-3 shadow-[var(--shadow-card)]" style={{ animation: "pop .8s .5s both" }}>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted">Call outcome</p>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-bold">
            {[["Interested", "text-amber-700"], ["Call back", "text-cyan-700"], ["Deal closed", "text-emerald-700"], ["Not interested", "text-red-700"]].map(([t, c], k) => (
              <span key={t} className={`pick rounded-full border border-line px-2.5 py-1 ${c}`} style={{ animationDelay: `${k * 1.5}s`, animationDuration: "6s" }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="absolute left-[330px] top-[390px] w-[220px] rounded-2xl border border-line bg-white p-3 shadow-[var(--shadow-card)]" style={{ animation: "pop .8s .7s both" }}>
          <p className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-muted">Call history <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">3</span></p>
          <ul className="space-y-1.5 text-[11px]">
            {[["Today 10:42", "Interested", "bg-warn"], ["Yesterday", "Call back", "bg-info"], ["Mon 16:05", "No answer", "bg-subtle"]].map(([w, o, d]) => (
              <li key={w} className="flex items-center gap-2"><span className={`size-2 rounded-full ${d}`} /><span className="text-muted">{w}</span><b className="ml-auto text-ink">{o}</b></li>
            ))}
          </ul>
        </div>

        <div className="absolute left-[196px] top-[490px] flex animate-float items-center gap-2 rounded-xl bg-white px-3 py-2 text-[11px] shadow-[var(--shadow-card)]">
          <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-warn to-orange-500 text-white"><Icon name="bell" className="size-3.5" /></span>
          <span><b className="block text-ink">Follow-up Sat 11:00</b><span className="text-muted">Reminder set</span></span>
        </div>

        <span className="absolute left-2 top-[400px] grid size-14 place-items-center rounded-full bg-deep text-3xl text-white shadow-[var(--shadow-card)]">
          <span className="pulse-ring absolute inset-0 rounded-full bg-primary/40" />+
        </span>
      </div>
    </div>
  );
}
