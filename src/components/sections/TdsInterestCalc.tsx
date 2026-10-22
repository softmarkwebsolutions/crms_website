"use client";

import { useState } from "react";
import { CalcLayout, DateInput, Field, Headline, NumberInput, Note, Rows, inr } from "@/components/ui/Calc";
import { fmt, monthsOrPart, parse, type YMD } from "@/lib/dates";

/** Due date for depositing tax deducted in a month: the 7th of the next month, 30 April for March. */
function depositDue(d: YMD): YMD {
  if (d.m === 3) return { y: d.y, m: 4, d: 30 };
  return d.m === 12 ? { y: d.y + 1, m: 1, d: 7 } : { y: d.y, m: d.m + 1, d: 7 };
}

export function TdsInterestCalc() {
  const [amount, setAmount] = useState("10000");
  const [deductible, setDeductible] = useState("");
  const [deducted, setDeducted] = useState("");
  const [deposited, setDeposited] = useState("");

  const amt = parseFloat(amount) || 0;
  const a = parse(deductible), b = parse(deducted), c = parse(deposited);

  const m1 = a && b ? monthsOrPart(a, b) : 0; // not deducted on time: 1% a month
  const m2 = b && c ? monthsOrPart(b, c) : 0; // deducted but not deposited: 1.5% a month
  const i1 = Math.round(amt * 0.01 * m1);
  const i2 = Math.round(amt * 0.015 * m2);
  const due = b ? depositDue(b) : null;
  const orderBad = (a && b && deducted < deductible) || (b && c && deposited < deducted);

  return (
    <CalcLayout
      form={
        <>
          <Field label="TDS amount"><NumberInput label="TDS amount in rupees" value={amount} onChange={setAmount} prefix="₹" /></Field>
          <Field label="Date tax was deductible" hint="The date the payment or credit was made, whichever is earlier."><DateInput label="Date tax was deductible" value={deductible} onChange={setDeductible} /></Field>
          <Field label="Date tax was deducted" hint="Leave the same as above if it was deducted on time."><DateInput label="Date tax was deducted" value={deducted} onChange={setDeducted} /></Field>
          <Field label="Date tax was deposited"><DateInput label="Date tax was deposited" value={deposited} onChange={setDeposited} /></Field>
          {orderBad && <p role="alert" className="mt-4 text-sm font-semibold text-danger">Dates should run in order: deductible, then deducted, then deposited.</p>}
        </>
      }
      result={
        <>
          <Headline label="Total interest payable" value={inr(i1 + i2, 0)} sub="Interest is charged under section 201(1A)" />
          <Rows rows={[
            { k: "Late deduction, 1% a month", v: inr(i1, 0) },
            { k: "Months counted", v: String(m1) },
            { k: "Late deposit, 1.5% a month", v: inr(i2, 0) },
            { k: "Months counted", v: String(m2) },
            ...(due ? [{ k: "Deposit due date", v: fmt(due) }] : []),
            { k: "Total interest", v: inr(i1 + i2, 0), strong: true },
          ]} />
          <Note>A part of a month counts as a full month. Interest is not allowed as a deduction in your return. Check the current section 201(1A) rates before you pay.</Note>
        </>
      }
    />
  );
}
