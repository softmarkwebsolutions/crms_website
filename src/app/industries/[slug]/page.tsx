import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Motion";
import { DemoCta } from "@/components/sections/DemoCta";
import { QuickLead } from "@/components/sections/QuickLead";
import { industries } from "@/lib/industries";
import { modules } from "@/lib/modules";
import { site } from "@/lib/site";

export const generateStaticParams = () => industries.map((i) => ({ slug: i.slug }));

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  return i ? { title: `CRM for ${i.name}`, description: i.lede, alternates: { canonical: `/industries/${i.slug}` } } : {};
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) notFound();
  const others = industries.filter((x) => x.slug !== ind.slug);
  return (
    <>
      <section className="relative overflow-hidden bg-soft">
        <div aria-hidden className="absolute -left-24 top-10 size-72 animate-[blob_12s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="absolute -right-20 bottom-0 size-80 animate-[blob_15s_ease-in-out_infinite_reverse] rounded-full bg-warn/20 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-rise">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary"><Icon name={ind.icon} className="size-4" /> CRM for {ind.name}</p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">{ind.headline}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{ind.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.registerUrl}>Start free trial <Icon name="arrow" className="size-4" /></ButtonLink>
              <ButtonLink href="#demo" variant="line">Request a demo</ButtonLink>
            </div>
            <QuickLead className="mt-6" />
          </div>

          <div className="relative animate-rise [animation-delay:150ms]">
            <div className="rounded-3xl border border-line bg-white p-5 shadow-[var(--shadow-lift)]">
              <div className="flex items-center gap-3">
                <span className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-lg font-bold text-white ${ind.grad}`}>{ind.lead.name[0]}</span>
                <div><p className="font-bold text-ink">{ind.lead.name}</p><p className="text-sm text-muted">{ind.lead.line}</p></div>
                <span className="ml-auto rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] font-bold text-success">● New</span>
              </div>
              <dl className="mt-4 divide-y divide-hair rounded-2xl border border-line text-sm">
                {ind.lead.rows.map(([k, v], i) => <div key={k} className="flex justify-between px-4 py-2.5" style={{ animation: `pop .5s ${i * 140}ms both` }}><dt className="font-bold text-primary">{k}</dt><dd className="text-ink">{v}</dd></div>)}
              </dl>
              <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-bold">
                {ind.statuses.map((s, k) => <span key={s} className="pick rounded-full border border-line px-2.5 py-1 text-primary" style={{ animationDelay: `${k * 1.2}s`, animationDuration: `${ind.statuses.length * 1.2}s` }}>{s}</span>)}
              </div>
            </div>
            <span className={`absolute -right-3 -top-4 grid size-14 animate-float place-items-center rounded-2xl bg-gradient-to-br text-white shadow-[var(--shadow-lift)] ${ind.grad}`}><Icon name={ind.icon} className="size-7" /></span>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <SectionHead eyebrow="Shaped to your process" title={`Fields and statuses for ${ind.name.toLowerCase()}`} lede="Every company defines its own lead fields and statuses. These are examples of how a team like yours might set them up." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-canvas p-6">
              <h3 className="flex items-center gap-2 font-bold text-ink"><Icon name="sliders" className="size-5 text-primary" /> Lead fields</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {ind.fields.map((f) => <span key={f} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-bold text-ink">{f}</span>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-line bg-canvas p-6">
              <h3 className="flex items-center gap-2 font-bold text-ink"><Icon name="filter" className="size-5 text-primary" /> Statuses</h3>
              <ol className="mt-4 flex flex-wrap items-center gap-2 text-sm font-bold">
                {ind.statuses.map((s, i) => (
                  <li key={s} className="flex items-center gap-2"><span className={`rounded-full px-3.5 py-1.5 text-white ${i === ind.statuses.length - 1 ? "bg-gradient-to-r from-success to-emerald-600" : "bg-gradient-to-r from-primary to-deep-2"}`}>{s}</span>{i < ind.statuses.length - 1 && <Icon name="arrow" className="size-4 text-subtle" />}</li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHead eyebrow="What you'll use" title={`The modules ${ind.name.toLowerCase()} teams rely on`} />
        <div className="grid gap-5 md:grid-cols-3">
          {ind.uses.map((u, i) => {
            const m = modules.find((x) => x.slug === u.slug)!;
            return (
              <Reveal key={u.slug} delay={i * 100}>
                <Link href={`/modules/${m.slug}`} className="group block h-full rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                  <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white transition group-hover:rotate-6 ${m.grad}`}><Icon name={m.icon} className="size-7" /></span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{m.name}</h3>
                  <p className="mt-1 text-[15px] text-muted">{u.why}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">See the module <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="white">
        <h2 className="mb-6 text-2xl font-bold text-ink">Other industries</h2>
        <div className="flex flex-wrap gap-3">
          {others.map((o) => (
            <Link key={o.slug} href={`/industries/${o.slug}`} className="group flex items-center gap-2.5 rounded-full border border-line bg-white py-2 pl-2 pr-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-primary hover:shadow-[var(--shadow-card)]">
              <span className={`grid size-8 place-items-center rounded-full bg-gradient-to-br text-white ${o.grad}`}><Icon name={o.icon} className="size-4" /></span>{o.name}
            </Link>
          ))}
        </div>
      </Section>
      <DemoCta title={`See it for ${ind.name.toLowerCase()}.`} />
    </>
  );
}
