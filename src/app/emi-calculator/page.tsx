import type { Metadata } from "next";
import { EmiCalc } from "@/components/sections/EmiCalc";
import { MoreTools } from "@/components/ui/Calc";
import { PageHero } from "@/components/ui/PageHero";
import { DemoCta } from "@/components/sections/DemoCta";

export const metadata: Metadata = { title: "EMI Calculator", description: "Free EMI calculator for home, car and business loans. See monthly EMI, total interest and the repayment schedule.", alternates: { canonical: "/emi-calculator" } };

export default function Page() {
  return (
    <>
      <PageHero title="EMI Calculator" lede="Monthly instalment, total interest and a year-wise schedule." crumb="EMI Calculator" />
      <EmiCalc />
      <MoreTools current="/emi-calculator" />
      <DemoCta title="Run your whole desk on one line." />
    </>
  );
}
