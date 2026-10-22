"use client";

import { useState } from "react";
import { CalcLayout, Field, Headline, NumberInput, Note, Rows, Segmented, inr } from "@/components/ui/Calc";

export function EmiCalc() {
  const [amount, setAmount] = useState("1000000");
  const [rate, setRate] = useState("9.5");
  const [tenure, setTenure] = useState("5");
  const [unit, setUnit] = useState("years");

  const P = parseFloat(amount) || 0;
  const r = (parseFloat(rate) || 0) / 1200;
  const n = Math.round((parseFloat(tenure) || 0) * (unit === "years" ? 12 : 1));
  const emi = n > 0 ? (r === 0 ? P / n : (P * r * (1 + r) ** n) / ((1 + r) ** n - 1)) : 0;
  const total = emi * n;
  const interest = total - P;

  // Year-by-year schedule from a month-by-month run.
  const years: { y: number; principal: number; interest: number; balance: number }[] = [];
  let bal = P, yp = 0, yi = 0;
  for (let k = 1; k <= n && n <= 600; k++) {
    const i = bal * r, p = emi - i;
    bal = Math.max(0, bal - p); yp += p; yi += i;
    if (k % 12 === 0 || k === n) { years.push({ y: Math.ceil(k / 12), principal: yp, interest: yi, balance: bal }); yp = 0; yi = 0; }
  }

  const share = total ? P / total : 0;
  const C = 2 * Math.PI * 52;

  return (
    <CalcLayout
      form={
        <>
          <Field label="Loan amount"><NumberInput label="Loan amount in rupees" value={amount} onChange={setAmount} prefix="₹" /></Field>
          <Field label="Interest rate a year"><NumberInput label="Interest rate a year" value={rate} onChange={setRate} suffix="%" /></Field>
          <Field label="Loan tenure"><NumberInput label="Loan tenure" value={tenure} onChange={setTenure} suffix={unit === "years" ? "yrs" : "mths"} /></Field>
          <div className="mt-3"><Segmented label="Tenure unit" value={unit} onChange={setUnit} options={[["years", "Years"], ["months", "Months"]]} /></div>
        </>
      }
      result={
        <>
          <Headline label="Monthly EMI" value={inr(emi, 0)} sub={n > 600 ? "Tenure is too long to show a schedule" : undefined} />
          <div className="mt-6 flex items-center gap-6">
            <svg viewBox="0 0 120 120" className="size-32 shrink-0 -rotate-90" role="img" aria-label={`Principal is ${Math.round(share * 100)} percent of the total payment`}>
              <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-warn)" strokeWidth="14" />
              <circle cx="60" cy="60" r="52" fill="none" stroke="#fff" strokeWidth="14" strokeDasharray={`${C * share} ${C}`} className="transition-all duration-500" />
            </svg>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="size-3 rounded-full bg-white" />Principal {Math.round(share * 100)}%</li>
              <li className="flex items-center gap-2"><span className="size-3 rounded-full bg-warn" />Interest {total ? Math.round((1 - share) * 100) : 0}%</li>
            </ul>
          </div>
          <Rows rows={[
            { k: "Principal amount", v: inr(P, 0) },
            { k: "Total interest", v: inr(interest, 0) },
            { k: "Total payment", v: inr(total, 0), strong: true },
          ]} />
          {years.length > 0 && (
            <details className="group mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold">Year-wise schedule <span className="text-xl transition group-open:rotate-45">+</span></summary>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-[320px] text-right text-sm tabular-nums">
                  <thead className="text-xs uppercase tracking-wider text-subtle"><tr><th className="py-2 text-left">Year</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead>
                  <tbody>{years.map((y) => <tr key={y.y} className="border-t border-white/10"><td className="py-2 text-left">{y.y}</td><td>{inr(y.principal, 0)}</td><td>{inr(y.interest, 0)}</td><td>{inr(y.balance, 0)}</td></tr>)}</tbody>
                </table>
              </div>
            </details>
          )}
          <Note>Your bank may round the EMI or charge fees, so the lender&apos;s figure can differ slightly. This assumes a fixed rate and equal monthly instalments.</Note>
        </>
      }
    />
  );
}
