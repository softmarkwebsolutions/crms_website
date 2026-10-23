import type { Metadata } from "next";
import { TdsReturnCalc } from "@/components/sections/TdsReturnCalc";
import { MoreTools } from "@/components/ui/Calc";
import { PageHero } from "@/components/ui/PageHero";
import { DemoCta } from "@/components/sections/DemoCta";

export const metadata: Metadata = { title: "TDS Return Due Date & Penalty", description: "TDS return due dates for 24Q, 26Q and 27Q and the section 234E late filing fee at 200 rupees a day.", alternates: { canonical: "/tds-return-due-date-penalty" } };

export default function Page() {
  return (
    <>
      <PageHero title="TDS Return Due Date & Penalty" lede="Find the due date for your quarter and the late filing fee." crumb="TDS Return" />
      <TdsReturnCalc />
      <MoreTools current="/tds-return-due-date-penalty" />
      <DemoCta title="Run your whole desk on one line." />
    </>
  );
}
