import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Motion";
import { Section, SectionHead } from "@/components/ui/Section";
import { industries } from "@/lib/industries";

/** "One CRM, Many Industries": a card per industry, linking to its page, plus a "your industry isn't here" card. */
export function IndustriesSection({ showAll = true }: { showAll?: boolean }) {
  return (
    <Section id="industries" tone="white">
      <SectionHead eyebrow="Industries" title="One CRM, Many Industries" lede="Every company shapes its own fields and statuses, so the same CRM fits a showroom, a clinic or a loan desk." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => (
          <Reveal key={ind.slug} delay={(i % 4) * 90}>
            <Link href={`/industries/${ind.slug}`} className="group relative block h-full overflow-hidden rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[var(--shadow-lift)]">
              <Icon name={ind.icon} className="pointer-events-none absolute -bottom-4 -right-4 size-28 text-primary/[.06] transition duration-500 group-hover:rotate-12 group-hover:scale-125" />
              <span className={`relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-[0_12px_24px_-10px_rgba(0,0,0,.45)] transition duration-300 group-hover:-rotate-6 group-hover:scale-110 ${ind.grad}`}><Icon name={ind.icon} className="size-7" /></span>
              <h3 className="relative mt-4 text-lg font-bold text-ink">{ind.name}</h3>
              <p className="relative mt-1 text-[15px] text-muted">{ind.short}</p>
              <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">See how <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
            </Link>
          </Reveal>
        ))}
        <Reveal delay={360}>
          <Link href="/#demo" className="group flex h-full flex-col justify-between rounded-3xl bg-[linear-gradient(135deg,var(--color-deep),var(--color-deep-2))] p-6 text-white transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
            <span className="grid size-14 place-items-center rounded-2xl bg-white/15"><Icon name="layers" className="size-7" /></span>
            <span>
              <h3 className="mt-4 text-lg font-bold">Not on the list?</h3>
              <p className="mt-1 text-[15px] text-white/75">Tell us how your sales run and we&apos;ll show you the same flow.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold">Talk to us <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
            </span>
          </Link>
        </Reveal>
      </div>
      {showAll && (
        <p className="mt-8 text-center"><Link href="/industries" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">View all industries <Icon name="arrow" className="size-4" /></Link></p>
      )}
    </Section>
  );
}
