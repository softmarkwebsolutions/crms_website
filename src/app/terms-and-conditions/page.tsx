import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { PageHero } from "@/components/ui/PageHero";
import { terms } from "@/lib/legal";

export const metadata: Metadata = { title: "Terms & Conditions", description: "The agreement for using Softmark CRM.", alternates: { canonical: "/terms-and-conditions" } };

export default function Page() {
  return (
    <>
      <PageHero title="Terms & Conditions" lede="The ground rules for using Softmark CRM." crumb="Terms & Conditions" />
      <LegalDoc {...terms} />
    </>
  );
}
