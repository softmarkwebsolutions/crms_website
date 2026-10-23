import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoCta } from "@/components/sections/DemoCta";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Motion";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHead } from "@/components/ui/Section";
import { hrModules } from "@/lib/hr-modules";
import { modules } from "@/lib/modules";

export const metadata: Metadata = { title: "Features", description: "Every Softmark CRM feature: leads, calling, follow-ups, WhatsApp, GST billing, reports and HR.", alternates: { canonical: "/features" } };

export default function FeaturesPage() {
  return (
    <>
      <PageHero title="Features" lede="Everything between the first lead and the GST invoice." crumb="Features" />

      <Section tone="white">
        <SectionHead eyebrow="Sales desk" title="One line from lead to invoice" lede="Each module works alone and gets stronger with the others." />
        <div className="space-y-6">
          {modules.map((m, i) => (
            <Reveal key={m.slug}>
              <article className={`grid overflow-hidden rounded-[2rem] border border-line bg-canvas md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative min-h-56">
                  <Image src={m.img} alt={m.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                  <span className={`absolute left-5 top-5 grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${m.grad}`}><Icon name={m.icon} className="size-7" /></span>
                </div>
                <div className="p-7 md:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{m.name}</p>
                  <h3 className="mt-2 text-2xl font-bold text-ink">{m.headline}</h3>
                  <p className="mt-3 text-muted">{m.lede}</p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {m.points.map((p) => <li key={p} className="flex gap-2.5 text-[15px] text-ink"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/15 text-success"><Icon name="check" className="size-3" /></span>{p}</li>)}
                  </ul>
                  <Link href={`/modules/${m.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary">Explore {m.name} <Icon name="arrow" className="size-4" /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHead eyebrow="Workforce" title="HR software for the same team" lede="Run attendance, leave and payroll beside your sales desk." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hrModules.map((h, i) => (
            <Reveal key={h.slug} delay={i * 100}>
              <Link href={`/hr/${h.slug}`} className="group block h-full rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white transition group-hover:rotate-6 ${h.grad}`}><Icon name={h.icon} className="size-7" /></span>
                <h3 className="mt-4 text-lg font-bold text-ink">{h.name}</h3>
                <p className="mt-1 text-[15px] text-muted">{h.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">See how <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <DemoCta title="See every feature on your leads." />
    </>
  );
}
