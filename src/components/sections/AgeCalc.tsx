"use client";

import { useState } from "react";
import { CalcLayout, DateInput, Field, Headline, Note, Rows, Select } from "@/components/ui/Calc";
import { daysBetween, fmt, parse, type YMD } from "@/lib/dates";

const YEARS: [string, string][] = [["2024", "FY 2024-25"], ["2025", "FY 2025-26"], ["2026", "FY 2026-27"]];

function age(dob: YMD, on: YMD) {
  let y = on.y - dob.y, m = on.m - dob.m, d = on.d - dob.d;
  if (d < 0) { m--; d += new Date(Date.UTC(on.y, on.m - 1, 0)).getUTCDate(); }
  if (m < 0) { y--; m += 12; }
  return { y, m, d };
}

export function AgeCalc() {
  const [dob, setDob] = useState("");
  const [fy, setFy] = useState("2025");

  const b = parse(dob);
  const asOn: YMD = { y: +fy + 1, m: 3, d: 31 }; // the last day of the financial year decides the category
  const ok = b && daysBetween(b, asOn) >= 0;
  const a = ok ? age(b, asOn) : null;
  const cat = a ? (a.y >= 80 ? "Super senior citizen" : a.y >= 60 ? "Senior citizen" : "Below 60") : "-";
  const limit = a ? (a.y >= 80 ? "₹5,00,000" : a.y >= 60 ? "₹3,00,000" : "₹2,50,000") : "-";

  return (
    <CalcLayout
      form={
        <>
          <Field label="Date of birth"><DateInput label="Date of birth" value={dob} onChange={setDob} max={`${+fy + 1}-03-31`} /></Field>
          <Field label="Financial year" hint="Your tax category depends on your age during this year."><Select label="Financial year" value={fy} onChange={setFy} options={YEARS} /></Field>
          {b && !ok && <p role="alert" className="mt-4 text-sm font-semibold text-danger">Date of birth is after the end of this financial year.</p>}
        </>
      }
      result={
        <>
          <Headline label={`Age on ${fmt(asOn)}`} value={a ? `${a.y} yrs` : "-"} sub={a ? `${a.y} years, ${a.m} months, ${a.d} days` : "Enter your date of birth"} />
          <Rows rows={[
            { k: "Tax category", v: cat },
            { k: "Basic exemption, old regime", v: limit },
            { k: "Basic exemption, new regime", v: "Same for all ages" },
            { k: "Turns 60 on", v: b ? fmt({ y: b.y + 60, m: b.m, d: b.d }) : "-" },
            { k: "Turns 80 on", v: b ? fmt({ y: b.y + 80, m: b.m, d: b.d }) : "-", strong: true },
          ]} />
          <Note>A resident who is 60 or older at any time in the year is a senior citizen, and 80 or older a super senior. Age slabs apply only to the old regime. Interest deduction for seniors under section 80TTB is up to ₹50,000, also old regime only. Verify limits against the latest Finance Act.</Note>
        </>
      }
    />
  );
}
