"use client";

import { useState } from "react";
import { CalcLayout, DateInput, Field, Headline, NumberInput, Note, Rows, Segmented, Select, inr } from "@/components/ui/Calc";
import { daysBetween, fmt, parse, type YMD } from "@/lib/dates";

const QUARTERS = [
  { id: "1", label: "Q1 (Apr to Jun)", due: (fy: number): YMD => ({ y: fy, m: 7, d: 31 }) },
  { id: "2", label: "Q2 (Jul to Sep)", due: (fy: number): YMD => ({ y: fy, m: 10, d: 31 }) },
  { id: "3", label: "Q3 (Oct to Dec)", due: (fy: number): YMD => ({ y: fy + 1, m: 1, d: 31 }) },
  { id: "4", label: "Q4 (Jan to Mar)", due: (fy: number): YMD => ({ y: fy + 1, m: 5, d: 31 }) },
];
const YEARS: [string, string][] = [["2024", "FY 2024-25"], ["2025", "FY 2025-26"], ["2026", "FY 2026-27"]];

export function TdsReturnCalc() {
  const [fy, setFy] = useState("2025");
  const [q, setQ] = useState("1");
  const [filed, setFiled] = useState("");
  const [tds, setTds] = useState("");

  const year = +fy;
  const quarter = QUARTERS.find((x) => x.id === q)!;
  const due = quarter.due(year);
  const f = parse(filed);
  const late = f ? Math.max(0, daysBetween(due, f)) : 0;
  const totalTds = parseFloat(tds) || 0;
  const raw = late * 200;
  // Section 234E: fee is Rs 200 a day, but never more than the TDS the return is for.
  const fee = totalTds > 0 ? Math.min(raw, totalTds) : raw;

  return (
    <CalcLayout
      form={
        <>
          <Field label="Financial year"><Select label="Financial year" value={fy} onChange={setFy} options={YEARS} /></Field>
          <Field label="Quarter"><Segmented label="Quarter" value={q} onChange={setQ} options={QUARTERS.map((x) => [x.id, `Q${x.id}`])} /></Field>
          <Field label="Date you filed or will file the return"><DateInput label="Filing date" value={filed} onChange={setFiled} /></Field>
          <Field label="Total TDS in the return" hint="Optional. The late fee can never exceed this amount."><NumberInput label="Total TDS in the return" value={tds} onChange={setTds} prefix="₹" /></Field>
        </>
      }
      result={
        <>
          <Headline label="Late filing fee" value={inr(fee, 0)} sub={f ? (late ? `${late} day${late > 1 ? "s" : ""} late, ₹200 a day` : "Filed on or before the due date") : "Enter a filing date to calculate"} />
          <Rows rows={[
            { k: "Return", v: `${quarter.label}, FY ${year}-${String(year + 1).slice(2)}` },
            { k: "Due date", v: fmt(due) },
            { k: "Days late", v: f ? String(late) : "-" },
            { k: "Fee before cap", v: inr(raw, 0) },
            { k: "Late filing fee", v: inr(fee, 0), strong: true },
          ]} />
          <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <p className="text-sm font-bold">All due dates, FY {year}-{String(year + 1).slice(2)}</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {QUARTERS.map((x) => <li key={x.id} className="flex justify-between gap-3"><span>{x.label}</span><span className="font-bold text-white">{fmt(x.due(year))}</span></li>)}
            </ul>
          </div>
          <Note>Fee under section 234E applies to forms 24Q, 26Q and 27Q. Separately, section 271H can add ₹10,000 to ₹1,00,000 if a return is not filed within a year or has wrong details. Due dates can be extended by the CBDT, so confirm on the income tax portal.</Note>
        </>
      }
    />
  );
}
