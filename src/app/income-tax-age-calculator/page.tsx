import type { Metadata } from "next";
import { AgeCalc } from "@/components/sections/AgeCalc";
import { MoreTools } from "@/components/ui/Calc";
import { PageHero } from "@/components/ui/PageHero";
import { DemoCta } from "@/components/sections/DemoCta";

export const metadata: Metadata = { title: "Income Tax Age Calculator", description: "Income tax age calculator. See if you are a senior or super senior citizen for a financial year and your basic exemption limit.", alternates: { canonical: "/income-tax-age-calculator" } };

export default function Page() {
  return (
    <>
      <PageHero title="Income Tax Age Calculator" lede="Check your age category and basic exemption for the year." crumb="Age Calculator" />
      <AgeCalc />
      <MoreTools current="/income-tax-age-calculator" />
      <DemoCta title="Run your whole desk on one line." />
    </>
  );
}
