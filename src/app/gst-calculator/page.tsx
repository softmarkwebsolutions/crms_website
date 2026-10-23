import type { Metadata } from "next";
import { DemoCta } from "@/components/sections/DemoCta";
import { GstCalculator } from "@/components/sections/GstCalculator";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MoreTools } from "@/components/ui/Calc";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Motion";

const tips: { icon: IconName; title: string; text: string; grad: string }[] = [
  { icon: "building", title: "Same state: CGST + SGST", text: "When you and your buyer are in the same state, the GST is split equally between the Centre and the State.", grad: "from-teal-500 to-emerald-600" },
  { icon: "pin", title: "Another state: IGST", text: "Sales across states carry one IGST charge at the full rate, which the buyer can claim as credit.", grad: "from-orange-400 to-amber-500" },
  { icon: "receipt", title: "Raise it in one click", text: "Softmark CRM works this out on every proforma, sales and purchase invoice, so you never type the tax by hand.", grad: "from-pink-500 to-rose-600" },
];

export const metadata: Metadata = { title: "GST Calculator", description: "Free GST calculator. Add or remove GST at 5%, 12%, 18% or 28% and see the CGST, SGST and IGST split.", alternates: { canonical: "/gst-calculator" } };

export default function Page() {
  return (
    <>
      <PageHero title="GST Calculator" lede="Add or remove GST in a second. See CGST, SGST and IGST." crumb="GST Calculator" />
      <section className="bg-canvas py-14 md:py-20"><Container><GstCalculator /></Container></section>
      <Section tone="white">
        <SectionHead eyebrow="Good to know" title="How the split works" />
        <div className="grid gap-5 md:grid-cols-3">
          {tips.map((t, i) => (
            <Reveal key={t.title} delay={i * 100}>
              <div className="h-full rounded-3xl border border-line bg-canvas p-6">
                <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white ${t.grad}`}><Icon name={t.icon} className="size-7" /></span>
                <h3 className="mt-4 text-lg font-bold text-ink">{t.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <MoreTools current="/gst-calculator" />
      <DemoCta title="Want GST invoices done for you?" />
    </>
  );
}
