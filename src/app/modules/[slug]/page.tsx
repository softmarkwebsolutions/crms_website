import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Motion";
import { DemoCta } from "@/components/sections/DemoCta";
import { WhatsAppPanel } from "@/components/sections/WhatsAppPanel";
import { WhatsAppExtras } from "@/components/sections/WhatsAppExtras";
import { FollowUpsPanel } from "@/components/sections/FollowUpsPanel";
import { FollowUpsExtras } from "@/components/sections/FollowUpsExtras";
import { BillingPanel } from "@/components/sections/BillingPanel";
import { BillingExtras } from "@/components/sections/BillingExtras";
import { ReportsPanel } from "@/components/sections/ReportsPanel";
import { ReportsExtras } from "@/components/sections/ReportsExtras";
import { CallingExtras } from "@/components/sections/CallingExtras";
import { CallingPanel } from "@/components/sections/CallingPanel";
import { QuickLead } from "@/components/sections/QuickLead";
import { site } from "@/lib/site";
import { modules } from "@/lib/modules";

export const generateStaticParams = () => modules.map((m) => ({ slug: m.slug }));

export async function generateMetadata({ params }: PageProps<"/modules/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const m = modules.find((x) => x.slug === slug);
  return m ? { title: m.name, description: m.lede, alternates: { canonical: `/modules/${m.slug}` } } : {};
}

export default async function ModulePage({ params }: PageProps<"/modules/[slug]">) {
  const { slug } = await params;
  const m = modules.find((x) => x.slug === slug);
  if (!m) notFound();
  const others = modules.filter((x) => x.slug !== m.slug);
  return (
    <>
      <section className="bg-soft">
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div className="animate-rise">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary"><Icon name={m.icon} className="size-4" /> {m.name}</p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">{m.headline}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{m.lede}</p>
            <ul className="mt-6 space-y-3">
              {m.points.map((p) => <li key={p} className="flex gap-3 text-ink"><Icon name="check" className="mt-0.5 size-5 shrink-0 text-success" />{p}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#demo">Schedule Demo <Icon name="arrow" className="size-4" /></ButtonLink>
              <ButtonLink href={site.registerUrl} variant="line">Start free trial</ButtonLink>
            </div>
            <QuickLead className="mt-6" />
          </div>
          {m.slug === "calling" ? <CallingPanel /> : m.slug === "whatsapp" ? <WhatsAppPanel /> : m.slug === "follow-ups" ? <FollowUpsPanel /> : m.slug === "billing" ? <BillingPanel /> : m.slug === "reports" ? <ReportsPanel /> : <Image src={m.img} alt={m.alt} width={1400} height={933} priority sizes="(min-width:1024px) 540px, 100vw" className="w-full animate-rise rounded-3xl object-cover shadow-[var(--shadow-lift)]" />}
        </Container>
      </section>
      {m.slug === "calling" && <CallingExtras />}
      {m.slug === "whatsapp" && <WhatsAppExtras />}
      {m.slug === "follow-ups" && <FollowUpsExtras />}
      {m.slug === "billing" && <BillingExtras />}
      {m.slug === "reports" && <ReportsExtras />}
      <Section tone="white">
        <h2 className="mb-8 text-2xl font-bold text-ink">More modules</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 80}>
              <a href={`/modules/${o.slug}`} className="block rounded-[var(--radius-card)] border border-line p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <Icon name={o.icon} className="size-6 text-primary" />
                <p className="mt-3 font-bold text-ink">{o.name}</p>
                <p className="mt-1 text-sm text-muted">{o.headline}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
      <DemoCta />
    </>
  );
}
