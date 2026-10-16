import { Icon } from "@/components/ui/Icon";
import { Section, SectionHead } from "@/components/ui/Section";
import { BentoShell, Card, Head, Mini } from "./CallingBento";
import { Timeline } from "./Timeline";

// Mapped to the CRM's billing module: proforma / sales / purchase invoices, invoice theme designer, inventory, stock ledger, billing profile & dashboard.
export function BillingExtras() {
  return (
    <>
      <BentoShell eyebrow="Billing & inventory" title="GST invoices in your look." accent="Stock that keeps itself." lede="Raise invoices from the same record as the lead, and let every sale write itself to the stock ledger.">
        <Card dark className="md:col-span-2 lg:row-span-2">
          <Head light icon="receipt" grad="from-warn to-orange-500" title="Proforma, sales & purchase invoices" text="Quote with a proforma, convert it to a sales invoice, and record what you buy with purchase invoices." />
          <Mini className="flex flex-1 flex-col justify-center gap-3">
            {[["Proforma", "PI-0412", "Draft → Sent", "bg-white/15"], ["Sales invoice", "SI-0933", "₹ 1,25,440", "bg-white"], ["Purchase invoice", "PU-0188", "Stock in", "bg-white/15"]].map(([t, n, s, bg], i) => (
              <div key={t} className={`flex items-center justify-between rounded-2xl px-4 py-3 ${bg} ${bg === "bg-white" ? "text-ink shadow-[0_14px_30px_-12px_rgba(0,0,0,.5)]" : "text-white ring-1 ring-white/20"}`} style={{ animation: `pop .6s ${i * 160}ms both` }}>
                <span><b className="block text-sm">{t}</b><span className={`text-xs ${bg === "bg-white" ? "text-muted" : "text-white/60"}`}>{n}</span></span>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${bg === "bg-white" ? "bg-success/10 text-emerald-700" : "bg-white/15"}`}>{s}</span>
              </div>
            ))}
            <p className="text-center text-xs text-white/60">Search items and pick customers straight from your leads</p>
          </Mini>
        </Card>

        <Card delay={100} className="md:col-span-2">
          <Head icon="chart" grad="from-primary to-deep-2" title="GST worked out for you" text="CGST, SGST and IGST line tax calculated on every item, with totals ready to print." />
          <Mini>
            <dl className="space-y-2 rounded-2xl bg-canvas p-4 text-sm">
              {[["Rotavator 7ft", "1,12,000", ""], ["CGST 6%", "6,720", "text-primary"], ["SGST 6%", "6,720", "text-primary"]].map(([k, v, c]) => <div key={k} className="flex justify-between"><dt className="text-muted">{k}</dt><dd className={`font-bold ${c || "text-ink"}`}>{v}</dd></div>)}
              <div className="flex items-end justify-between border-t border-line pt-2"><dt className="font-bold text-ink">Total</dt><dd className="text-2xl font-bold text-primary">₹ 1,25,440</dd></div>
            </dl>
          </Mini>
        </Card>

        <Card delay={150}>
          <Head icon="sliders" grad="from-pink-500 to-rose-600" title="Invoice theme designer" text="Pick a look and preview it live." />
          <Mini className="flex gap-2">
            {["from-primary to-deep-2", "from-orange-400 to-amber-500", "from-emerald-500 to-teal-600", "from-pink-500 to-rose-600"].map((g, k) => (
              <span key={g} className={`pick grid size-10 place-items-center rounded-xl border border-line`} style={{ animationDelay: `${k * 1.5}s` }}><span className={`size-6 rounded-lg bg-gradient-to-br ${g}`} /></span>
            ))}
          </Mini>
        </Card>

        <Card delay={200}>
          <Head icon="layers" grad="from-info to-sky-600" title="Inventory & categories" text="Products grouped by category." />
          <Mini className="space-y-2">
            {[["Rotavator", 70], ["Cultivator", 45], ["Seed drill", 25]].map(([n, w], i) => (
              <div key={n as string} className="text-xs"><div className="mb-1 flex justify-between"><b className="text-ink">{n}</b><span className="text-muted">{w}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-hair"><div className="h-full origin-left rounded-full bg-gradient-to-r from-info to-sky-600" style={{ width: `${w}%`, animation: `growx 1.2s ${i * 0.15}s ease-out both` }} /></div></div>
            ))}
          </Mini>
        </Card>

        <Card delay={100} className="md:col-span-2">
          <Head icon="clock" grad="from-emerald-500 to-teal-600" title="Stock ledger" text="Every sale debits and every purchase credits stock automatically, with a history for each product." />
          <Mini>
            <ul className="space-y-1.5 text-xs">
              {[["SI-0933", "Rotavator 7ft", "−1", "text-red-600"], ["PU-0188", "Rotavator 7ft", "+5", "text-emerald-600"], ["SI-0931", "Cultivator", "−2", "text-red-600"]].map(([n, p, q, c], i) => (
                <li key={n} className="flex items-center gap-3 rounded-xl bg-canvas px-3 py-2" style={{ animation: `pop .5s ${i * 140}ms both` }}><b className="text-primary">{n}</b><span className="text-ink">{p}</span><b className={`ml-auto text-base ${c}`}>{q}</b></li>
              ))}
            </ul>
          </Mini>
        </Card>

        <Card delay={150}>
          <Head icon="building" grad="from-violet-500 to-fuchsia-600" title="Billing profile" text="GSTIN and billing address, set once." />
          <Mini className="rounded-xl bg-canvas p-3 text-xs"><p className="text-muted">GSTIN</p><p className="font-bold tracking-wider text-ink">08AAAPY1234K1Z5</p></Mini>
        </Card>

        <Card delay={200}>
          <Head icon="chart" grad="from-orange-400 to-amber-500" title="Billing dashboard" text="Sales at a glance." />
          <Mini className="flex h-16 items-end gap-1.5">
            {[40, 65, 50, 85, 70, 100].map((h, i) => <span key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-warn" style={{ height: `${h}%`, transformOrigin: "bottom", animation: `growx 1s ${i * 0.1}s ease-out both` }} />)}
          </Mini>
        </Card>
      </BentoShell>

      <Section tone="white">
        <SectionHead eyebrow="Lead to paid" title="From an approved deal to a paid invoice" lede="The customer is already there; nothing is typed twice." />
        <Timeline steps={[
          { icon: "check", title: "Deal approved", text: "A deal request is approved on the lead.", grad: "from-emerald-500 to-teal-600" },
          { icon: "receipt", title: "Proforma raised", text: "Pick the customer from your leads and search items to add.", grad: "from-orange-400 to-amber-500" },
          { icon: "chart", title: "Sales invoice with GST", text: "CGST, SGST or IGST is worked out per line.", grad: "from-primary to-deep-2" },
          { icon: "layers", title: "Stock updates itself", text: "The sale is written to the stock ledger.", grad: "from-info to-sky-600" },
          { icon: "mail", title: "PDF, print or share", text: "Open it in your invoice theme and send it on.", grad: "from-pink-500 to-rose-600" },
        ]} />
      </Section>
    </>
  );
}
