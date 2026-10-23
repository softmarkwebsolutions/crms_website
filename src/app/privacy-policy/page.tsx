import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { PageHero } from "@/components/ui/PageHero";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = { title: "Privacy Policy", description: "What Softmark CRM collects, why, and the choices you have.", alternates: { canonical: "/privacy-policy" } };

export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" lede="What we collect, why, and what you can do about it." crumb="Privacy Policy" />
      <LegalDoc {...privacy} />
    </>
  );
}
