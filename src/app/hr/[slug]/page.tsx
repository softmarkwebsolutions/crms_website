import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Motion";
import { DemoCta } from "@/components/sections/DemoCta";
import { QuickLead } from "@/components/sections/QuickLead";
import { Timeline } from "@/components/sections/Timeline";
import { hrModules } from "@/lib/hr-modules";
import { site } from "@/lib/site";

export const generateStaticParams = () => hrModules.map((m) => ({ slug: m.slug }));

export async function generateMetadata({ params }: PageProps<"/hr/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const m = hrModules.find((x) => x.slug === slug);
  return m ? { title: m.name, description: m.lede, alternates: { canonical: `/hr/${m.slug}` } } : {};
}

export default async function HrModulePage({ params }: PageProps<"/hr/[slug]">) {
  const { slug } = await params;
  const m = hrModules.find((x) => x.slug === slug);
  if (!m) notFound();
  const others = hrModules.filter((x) => x.slug !== m.slug);
  return (
    <>
      <section className="relative overflow-hidden bg-soft">
        <div aria-hidden className="absolute -left-24 top-10 size-72 animate-[blob_12s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="absolute -right-20 bottom-0 size-80 animate-[blob_15s_ease-in-out_infinite_reverse] rounded-full bg-warn/20 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-rise">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary"><Icon name={m.icon} className="size-4" /> {m.name}</p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">{m.headline}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{m.lede}</p>
            <ul className="mt-6 space-y-3">
              {m.points.map((p) => <li key={p} className="flex gap-3 text-ink"><span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br text-white ${m.grad}`}><Icon name="check" className="size-3.5" /></span>{p}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.registerUrl}>Start free trial <Icon name="arrow" className="size-4" /></ButtonLink>
              <ButtonLink href="#demo" variant="line">Schedule Demo</ButtonLink>
            </div>
            <QuickLead className="mt-6" />
          </div>

          <div className="relative animate-rise [animation-delay:150ms]">
            <div className="rounded-3xl border border-line bg-white p-5 shadow-[var(--shadow-lift)]">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 font-bold text-ink"><span className={`grid size-9 place-items-center rounded-xl bg-gradient-to-br text-white ${m.grad}`}><Icon name={m.icon} className="size-5" /></span>{m.mock.title}</p>
                <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] font-bold text-success">● Live</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {m.mock.stats.map(([k, v], i) => (
                  <div key={k} className={`rounded-2xl bg-gradient-to-br p-3 text-white ${m.grad}`} style={{ animation: `pop .6s ${i * 120}ms both` }}><p className="text-[10px] font-bold uppercase tracking-wider opacity-80">{k}</p><p className="text-2xl font-bold">{v}</p></div>
                ))}
              </div>
              <ul className="mt-4 space-y-2">
                {m.mock.rows.map(([n, d, chip, tone], i) => (
                  <li key={n} className="flex items-center gap-3 rounded-xl bg-canvas px-3 py-2.5 text-sm" style={{ animation: `pop .5s ${300 + i * 140}ms both` }}>
                    <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-deep-2 text-xs font-bold text-white">{n[0]}</span>
                    <span className="min-w-0 flex-1"><b className="block text-ink">{n}</b><span className="block truncate text-xs text-muted">{d}</span></span>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${tone}`}>{chip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-5 -left-4 hidden animate-float items-center gap-3 rounded-2xl bg-white p-3 shadow-[var(--shadow-card)] sm:flex">
              <span className={`grid size-9 place-items-center rounded-xl bg-gradient-to-br text-white ${m.grad}`}><Icon name="check" className="size-5" /></span>
              <span className="text-xs"><b className="block text-sm text-ink">Updated just now</b><span className="text-muted">Synced with the team</span></span>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <SectionHead eyebrow="What you get" title={`${m.name}, in six parts`} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {m.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}><FeatureCard icon={f.icon} title={f.title} grad={f.grad}>{f.text}</FeatureCard></Reveal>
          ))}
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHead eyebrow="How it works" title="Four steps, nothing re-typed" />
        <Timeline steps={m.steps} />
      </Section>

      <Section tone="white">
        <h2 className="mb-8 text-2xl font-bold text-ink">More from HR</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 80}>
              <Link href={`/hr/${o.slug}`} className="group flex items-center gap-4 rounded-[var(--radius-card)] border border-line p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <span className={`grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white transition group-hover:rotate-6 ${o.grad}`}><Icon name={o.icon} className="size-6" /></span>
                <span><b className="block text-ink">{o.name}</b><span className="text-sm text-muted">{o.blurb}</span></span>
                <Icon name="arrow" className="ml-auto size-5 text-primary transition group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <DemoCta title="See HR on your own team." />
    </>
  );
}
