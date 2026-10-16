import { Icon } from "@/components/ui/Icon";

function Invoice({ no, rot, x, y, z, full = false }: { no: string; rot: number; x: number; y: number; z: number; full?: boolean }) {
  return (
    <div className="absolute w-[300px] rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-lift)]" style={{ left: x, top: y, zIndex: z, transform: `rotate(${rot}deg)`, animation: `pop .8s ${z * 0.15}s both` }}>
      <div className="flex items-start justify-between border-b-2 border-ink pb-2"><p className="text-sm font-bold tracking-wide text-ink">TAX INVOICE</p><p className="text-xs text-muted">{no}</p></div>
      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-muted">Bill to</p>
      <p className="text-sm font-bold text-ink">Ramesh Yadav</p>
      <p className="text-[11px] text-muted">Jaipur · 08AAAPY1234K1Z5</p>
      {full && (
        <dl className="mt-3 space-y-1.5 border-t border-dashed border-line pt-3 text-xs">
          {[["Rotavator 7ft", "1,12,000"], ["CGST 6%", "6,720"], ["SGST 6%", "6,720"]].map(([k, v]) => <div key={k} className="flex justify-between"><dt className="text-muted">{k}</dt><dd className="font-bold text-ink">{v}</dd></div>)}
          <div className="flex items-end justify-between border-t border-line pt-2"><dt className="font-bold text-ink">Total</dt><dd className="text-xl font-bold text-primary">₹ 1,25,440</dd></div>
        </dl>
      )}
    </div>
  );
}

/** Stacked GST invoices with a theme chip and a stock-ledger chip. Demo data. */
export function BillingPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[560px] ${className}`} role="img" aria-label="GST invoice preview">
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] origin-top -translate-x-1/2 scale-[.64] sm:scale-100">
        <Invoice no="SI-0931" rot={-9} x={10} y={40} z={1} />
        <Invoice no="SI-0932" rot={-4} x={70} y={80} z={2} />
        <Invoice no="SI-0933" rot={3} x={150} y={130} z={3} full />
        <span className="absolute left-[330px] top-[100px] z-10 rounded-full border border-line bg-white px-3 py-1 text-[11px] font-bold text-primary shadow-[var(--shadow-card)]" style={{ animation: "pop .8s .6s both" }}>Theme · Soft wash</span>
        <div className="absolute left-[360px] top-[250px] z-10 w-[190px] animate-float rounded-2xl bg-deep p-3 text-white shadow-[var(--shadow-lift)]">
          <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/65"><Icon name="layers" className="size-3.5" /> Stock ledger</p>
          <p className="mt-1 text-sm font-bold">Rotavator 7ft</p>
          <p className="mt-1 flex justify-between text-xs"><span className="text-white/60">Debit · SI-0933</span><b className="text-warn">−1</b></p>
          <p className="flex justify-between text-xs"><span className="text-white/60">In stock</span><b>11</b></p>
        </div>
        <div className="absolute left-[40px] top-[400px] z-10 flex animate-[float_7s_ease-in-out_infinite_1s] items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[var(--shadow-card)]">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-success to-emerald-600 text-white"><Icon name="check" className="size-5" /></span>
          <span className="text-xs"><b className="block text-sm text-ink">GST worked out</b><span className="text-muted">CGST · SGST · IGST</span></span>
        </div>
        <div className="absolute left-[300px] top-[430px] z-10 flex animate-[float_8s_ease-in-out_infinite_2s] items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[var(--shadow-card)]">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white"><Icon name="receipt" className="size-5" /></span>
          <span className="text-xs"><b className="block text-sm text-ink">PDF · Print</b><span className="text-muted">One tap</span></span>
        </div>
      </div>
    </div>
  );
}
