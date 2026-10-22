import type { Metadata } from "next";
import { TdsInterestCalc } from "@/components/sections/TdsInterestCalc";
import { MoreTools } from "@/components/ui/Calc";
import { PageHero } from "@/components/ui/PageHero";
import { DemoCta } from "@/components/sections/DemoCta";

export const metadata: Metadata = { title: "TDS Late Payment Interest", description: "Free TDS late payment interest calculator. Interest at 1% a month for late deduction and 1.5% for late deposit under section 201(1A).", alternates: { canonical: "/tds-late-payment-interest" } };

export default function Page() {
  return (
    <>
      <PageHero title="TDS Late Payment Interest" lede="Work out interest for late deduction and late deposit of TDS." crumb="TDS Interest" />
      <TdsInterestCalc />
      <MoreTools current="/tds-late-payment-interest" />
      <DemoCta title="Run your whole desk on one line." />
    </>
  );
}
