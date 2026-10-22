import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { PageHero } from "@/components/ui/PageHero";
import { refund } from "@/lib/legal";

export const metadata: Metadata = { title: "Refund Policy", description: "When you can get your money back on Softmark CRM.", alternates: { canonical: "/refund-policy" } };

export default function Page() {
  return (
    <>
      <PageHero title="Refund Policy" lede="Simple rules for when you get your money back." crumb="Refund Policy" />
      <LegalDoc {...refund} />
    </>
  );
}
