"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

const RATES = [0, 5, 12, 18, 28];
const inr = (n: number) => `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const r2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

/** Same rule as the CRM's invoice maths: each component is rounded, and the total is the sum of the rounded parts. */
function compute(amount: number, rate: number, mode: "add" | "remove", inter: boolean) {
  let base: number, tax: number, total: number;
  if (mode === "add") {
    base = r2(amount);
    const half = r2((base * rate) / 200);
    tax = inter ? r2((base * rate) / 100) : half * 2;
    total = r2(base + tax);
  } else {
    total = r2(amount);
    base = r2(total / (1 + rate / 100));
    tax = r2(total - base);
  }
  const cgst = inter ? 0 : r2(tax / 2);
  const sgst = inter ? 0 : r2(tax - cgst);
  return { base, tax, total, cgst, sgst, igst: inter ? tax : 0 };
}

export function GstCalculator() {
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState(18);
  const [mode, setMode] = useState<"add" | "remove">("add");
  const [inter, setInter] = useState(false);
  const [copied, setCopied] = useState(false);

  const n = Math.max(0, parseFloat(amount) || 0);
  const out = compute(n, rate, mode, inter);
  const taxPct = out.total ? (out.tax / out.total) * 100 : 0;

  const copy = async () => {
    const lines = [`Amount before GST: ${inr(out.base)}`, ...(inter ? [`IGST @ ${rate}%: ${inr(out.igst)}`] : [`CGST @ ${rate / 2}%: ${inr(out.cgst)}`, `SGST @ ${rate / 2}%: ${inr(out.sgst)}`]), `Total: ${inr(out.total)}`];
    try { await navigator.clipboard.writeText(lines.join("\n")); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* clipboard blocked: nothing to do */ }
  };

  const seg = (on: boolean) => `flex-1 rounded-full px-4 py-2.5 text-sm font-bold transition ${on ? "bg-gradient-to-br from-primary to-deep-2 text-white shadow-[0_8px_20px_-8px_var(--t-glow)]" : "text-muted hover:text-primary"}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
      <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-9">
        <div className="flex rounded-full bg-canvas p-1" role="tablist" aria-label="Calculation mode">
          <button role="tab" aria-selected={mode === "add"} onClick={() => setMode("add")} className={seg(mode === "add")}>Add GST</button>
          <button role="tab" aria-selected={mode === "remove"} onClick={() => setMode("remove")} className={seg(mode === "remove")}>Remove GST</button>
        </div>

        <label className="mt-7 block">
          <span className="text-sm font-bold text-ink">{mode === "add" ? "Amount before GST" : "Amount including GST"}</span>
          <div className="mt-2 flex items-center rounded-2xl border border-line bg-canvas px-5 transition focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/15">
            <span className="text-2xl font-bold text-muted">₹</span>
            <input inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))} className="w-full bg-transparent px-3 py-4 text-3xl font-bold text-ink outline-none" aria-label="Amount in rupees" />
          </div>
        </label>

        <fieldset className="mt-7">
          <legend className="text-sm font-bold text-ink">GST rate</legend>
          <div className="mt-2 grid grid-cols-5 gap-2">
            {RATES.map((r) => (
              <button key={r} onClick={() => setRate(r)} aria-pressed={rate === r} className={`rounded-2xl border py-3 text-sm font-bold transition ${rate === r ? "border-transparent bg-gradient-to-br from-primary to-deep-2 text-white shadow-[0_8px_20px_-8px_var(--t-glow)]" : "border-line bg-white text-muted hover:border-primary/40 hover:text-primary"}`}>{r}%</button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="text-sm font-bold text-ink">Where is the buyer?</legend>
          <div className="mt-2 flex rounded-full bg-canvas p-1">
            <button aria-pressed={!inter} onClick={() => setInter(false)} className={seg(!inter)}>Same state</button>
            <button aria-pressed={inter} onClick={() => setInter(true)} className={seg(inter)}>Another state</button>
          </div>
          <p className="mt-2 text-xs text-muted">{inter ? "Charged as a single IGST." : "Split equally into CGST and SGST."}</p>
        </fieldset>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,var(--color-deep),var(--color-deep-2))] p-6 text-white md:p-9">
        <div aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full bg-white/5" />
        <p className="relative text-xs font-bold uppercase tracking-[0.14em] text-white/70">{mode === "add" ? "Total payable" : "Amount before GST"}</p>
        <p className="relative mt-2 text-5xl font-bold tracking-tight md:text-6xl" aria-live="polite">{inr(mode === "add" ? out.total : out.base)}</p>

        <div className="relative mt-6 h-3 overflow-hidden rounded-full bg-white/15" aria-hidden>
          <div className="h-full rounded-full bg-gradient-to-r from-warn to-orange-400 transition-all duration-500" style={{ width: `${taxPct}%` }} />
        </div>
        <p className="relative mt-2 text-xs text-subtle">GST is {taxPct.toFixed(1)}% of the total</p>

        <dl className="relative mt-6 divide-y divide-white/10 rounded-2xl bg-white/5 px-5 ring-1 ring-white/10">
          <Row k="Amount before GST" v={inr(out.base)} />
          {inter ? <Row k={`IGST @ ${rate}%`} v={inr(out.igst)} /> : <><Row k={`CGST @ ${rate / 2}%`} v={inr(out.cgst)} /><Row k={`SGST @ ${rate / 2}%`} v={inr(out.sgst)} /></>}
          <Row k="Total GST" v={inr(out.tax)} />
          <Row k="Total with GST" v={inr(out.total)} strong />
        </dl>

        <button onClick={copy} className="relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-hair">
          <Icon name={copied ? "check" : "copy"} className="size-4" /> {copied ? "Copied" : "Copy breakdown"}
        </button>
      </div>
    </div>
  );
}

function Row({ k, v, strong = false }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-4 py-3.5 ${strong ? "text-lg font-bold" : "text-[15px] text-white/80"}`}>
      <dt>{k}</dt><dd className="font-bold text-white tabular-nums">{v}</dd>
    </div>
  );
}
