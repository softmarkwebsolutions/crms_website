import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Motion";
import { DemoCta } from "@/components/sections/DemoCta";
import { Faq } from "@/components/sections/Faq";
import { locations, locationTitle } from "@/lib/locations";
import { pricing, site } from "@/lib/site";

/** City photos live in public/images/places/{slug}-{hero|intro|band}.jpg (credits in CREDITS.md there). */
const photo = (slug: string, part: "hero" | "intro" | "band") => `/images/places/${slug}-${part}.jpg`;

export const generateStaticParams = () => locations.map((l) => ({ slug: l.slug }));

export async function generateMetadata({ params }: PageProps<"/crm-software-in/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  return l ? { title: locationTitle(l), description: l.lede, alternates: { canonical: `/crm-software-in/${l.slug}` } } : {};
}

export default async function LocationPage({ params }: PageProps<"/crm-software-in/[slug]">) {
  const { slug } = await params;
  const loc = locations.find((x) => x.slug === slug);
  if (!loc) notFound();
  const others = locations.filter((x) => x.slug !== loc.slug);
  const stats = loc.stats.map(([v, k]) => [v === "₹99" ? `₹${pricing.price}` : v, k] as const);

  return (
    <>
      <section className="relative overflow-hidden bg-soft">
        <div aria-hidden className="absolute -left-24 top-10 size-72 animate-[blob_12s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="absolute -right-20 bottom-0 size-80 animate-[blob_15s_ease-in-out_infinite_reverse] rounded-full bg-warn/20 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-rise">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary"><Icon name="pin" className="size-4" /> CRM Software in {loc.region}</p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">CRM Software in <span className="text-primary">{loc.name}</span></h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{loc.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.registerUrl}>Start free trial <Icon name="arrow" className="size-4" /></ButtonLink>
              <ButtonLink href="#demo" variant="line">Book a demo</ButtonLink>
            </div>
          </div>
          <div className="relative animate-rise [animation-delay:150ms]">
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-lift)]">
              <Image src={photo(loc.slug, "hero")} alt={`A sales team using Softmark CRM in ${loc.name}`} width={1200} height={800} priority className="aspect-[4/3] h-auto w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 left-4 hidden animate-float items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-[var(--shadow-lift)] sm:flex">
              <span className="grid size-10 place-items-center rounded-xl bg-success/10 text-success"><Icon name="bolt" className="size-5" /></span>
              <div><p className="text-sm font-bold text-ink">New lead assigned</p><p className="text-xs text-muted">{loc.region} · just now</p></div>
            </div>
            <span className="absolute -right-3 -top-4 grid size-14 animate-float place-items-center rounded-2xl bg-gradient-to-br from-primary to-deep-2 text-white shadow-[var(--shadow-lift)]"><Icon name="pin" className="size-7" /></span>
          </div>
        </Container>
      </section>

      <Section tone="white" className="!py-10 md:!py-14">
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(([v, k], i) => (
            <Reveal key={k} delay={i * 80}>
              <div className="h-full rounded-2xl bg-soft p-5 text-center">
                <dt className="text-3xl font-bold text-primary">{v}</dt>
                <dd className="mt-1 text-sm text-muted">{k}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section tone="white" className="!pt-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-lift)]">
                <Image src={photo(loc.slug, "intro")} alt={`Teams in ${loc.name} following up on leads`} width={1200} height={800} className="aspect-[4/3] h-auto w-full object-cover" />
              </div>
              <span className="absolute -bottom-4 -right-3 rounded-2xl bg-gradient-to-br from-primary to-deep-2 px-4 py-3 text-sm font-bold text-white shadow-[var(--shadow-lift)]">100% follow-ups tracked</span>
            </div>
          </Reveal>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-primary">{loc.region}</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{loc.sectionTitle}</h2>
            <div className="mt-5 space-y-4 text-[16px] text-muted"><p>{loc.intro[0]}</p><p>{loc.intro[1]}</p></div>
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHead title={loc.sectorsTitle} lede={`Specialised lead workflows for the businesses that drive ${loc.name}.`} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {loc.sectors.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="h-full rounded-[var(--radius-card)] border border-line bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-deep-2 text-white"><Icon name={s.icon} className="size-5" /></span>
                <h3 className="font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead title={loc.whyTitle} />
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {loc.why.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="h-full rounded-2xl bg-soft p-5">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary text-white"><Icon name={w.icon} className="size-5" /></span>
                  <h3 className="mt-4 font-bold text-ink">{w.title}</h3><p className="mt-1 text-[15px] text-muted">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-line bg-white p-2 shadow-[var(--shadow-lift)]">
              <Image src="/images/panel-dashboard.jpg" alt="Softmark CRM dashboard" width={1027} height={779} className="h-auto w-full rounded-2xl" />
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <Image src={photo(loc.slug, "band")} alt="" fill sizes="100vw" className="object-cover" />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-deep)_0%,color-mix(in_srgb,var(--color-deep-2)_85%,transparent)_100%)] opacity-90" />
        <Container className="relative">
          <figure className="mx-auto max-w-3xl text-center text-white">
            <span className="mx-auto grid size-12 place-items-center rounded-full bg-white/15 ring-1 ring-white/30"><Icon name="chat" className="size-6" /></span>
            <blockquote className="mt-5 text-xl font-bold leading-snug md:text-2xl">“{loc.quote.text}”</blockquote>
            <figcaption className="mt-6 inline-flex items-center gap-3 text-left">
              <span className="grid size-10 place-items-center rounded-full bg-white font-bold text-primary">{loc.quote.name[0]}</span>
              <span><span className="block font-bold">{loc.quote.name}</span><span className="text-sm text-white/75">{loc.quote.role}</span></span>
            </figcaption>
          </figure>
        </Container>
      </section>

      <Faq items={loc.faqs} tone="canvas" />

      <Section tone="white">
        <SectionHead title="Softmark CRM in other cities" lede="Explore Softmark CRM for businesses across India." />
        <div className="flex flex-wrap justify-center gap-3">
          {others.map((o) => (
            <Link key={o.slug} href={`/crm-software-in/${o.slug}`} className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[var(--shadow-card)]">
              <Icon name="pin" className="size-4 text-primary" /> CRM Software in {o.name}
            </Link>
          ))}
        </div>
      </Section>

      <DemoCta title={`Ready to win more leads in ${loc.name}?`} lede={`Join the businesses across ${loc.name} growing faster with Softmark CRM. Start your free trial today.`} />
    </>
  );
}
