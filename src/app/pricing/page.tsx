import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Motion";
import { DemoCta } from "@/components/sections/DemoCta";
import { Faq } from "@/components/sections/Faq";
import { SectionHead } from "@/components/ui/Section";
import { modules } from "@/lib/modules";
import { pricing, site } from "@/lib/site";
import type { IconName } from "@/components/ui/Icon";

const assurances: [IconName, string][] = [["check", "Free trial, no card needed"], ["users", "Sign in with Google"], ["mobile", "Android caller app included"]];

const steps: { icon: IconName; title: string; text: string; grad: string }[] = [
  { icon: "users", title: "Create your account", text: "Register with your email or Google. It takes a minute.", grad: "from-primary to-deep-2" },
  { icon: "upload", title: "Add staff, import leads", text: "Invite your agents and bring your leads in from a CSV, Facebook or by hand.", grad: "from-orange-400 to-amber-500" },
  { icon: "phone", title: "Start calling", text: "Leads are assigned, calls are logged and follow-ups are set from day one.", grad: "from-emerald-500 to-teal-600" },
];

const faqs = [
  { q: "What do I get for ₹99?", a: "Leads from every source in one list, the calling panel with call history, follow-up tasks and reminders, lead rating and status tracking, and the Android caller app." },
  { q: "Can I try it before I pay?", a: "Yes. Start a free trial and you don't need a card. Add your staff, import your leads and call from the first day." },
  { q: "Can I see it on my own leads first?", a: "Yes. Request a demo with your name and mobile number and our team will call you and walk you through it." },
  { q: "Do you have WhatsApp, billing and reports too?", a: "Those are separate modules in the product. Ask us during the demo and we'll tell you how they are added to your plan." },
  { q: "How do I sign in?", a: "With your work email or your Google account." },
];

export const metadata: Metadata = {
  title: "Pricing",
  description: `SoftCRMS for ₹${pricing.price} a ${pricing.period}. Leads, calling, follow-ups and the Android caller app in one plan.`,
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-soft">
        <div aria-hidden className="absolute -left-20 top-0 size-72 animate-[blob_14s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="absolute -right-16 bottom-0 size-72 animate-[blob_17s_ease-in-out_infinite_reverse] rounded-full bg-warn/20 blur-3xl" />
        <Container className="relative py-14 text-center md:py-20">
          <h1 className="animate-rise text-4xl font-bold tracking-tight text-ink md:text-6xl">Pricing</h1>
          <p className="mt-3 text-lg text-muted">One plan. No tiers to compare.</p>
          <nav aria-label="Breadcrumb" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold">
            <Link href="/" className="text-muted hover:text-primary">Home</Link>
            <Icon name="arrow" className="size-3.5 text-subtle" />
            <span className="text-primary" aria-current="page">Pricing</span>
          </nav>
        </Container>
      </section>

      <Section tone="white">
        <Reveal className="mx-auto max-w-md">
          <div className="rounded-[2rem] bg-gradient-to-br from-primary via-warn to-primary p-[2px] shadow-[0_30px_70px_-30px_var(--t-glow)]">
            <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-white p-8 text-center md:p-10">
              <div aria-hidden className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/10" />
              <p className="relative inline-flex items-center gap-2 rounded-full bg-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                <span className="size-2 animate-pulse rounded-full bg-success" /> SoftCRMS
              </p>
              <p className="relative mt-6 flex items-start justify-center gap-1 text-ink">
                <span className="mt-3 text-3xl font-bold text-muted">₹</span>
                <span className="text-8xl font-bold leading-none tracking-tight text-shine">{pricing.price}</span>
              </p>
              <p className="relative mt-2 text-muted">per {pricing.period}</p>

              <ul className="relative mx-auto mt-8 max-w-xs space-y-3.5 text-left">
                {pricing.features.map((f, i) => (
                  <li key={f} className="flex items-center gap-3 text-[15px] text-ink" style={{ animation: `pop .5s ${i * 100}ms both` }}>
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-success to-emerald-600 text-white"><Icon name="check" className="size-3.5" /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="relative mt-9 flex flex-col gap-3">
                <ButtonLink href={site.registerUrl} className="w-full">Start free trial <Icon name="arrow" className="size-4" /></ButtonLink>
                <ButtonLink href="/#demo" variant="line" className="w-full">Request a demo</ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>

        <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-muted">
          {assurances.map(([ic, t]) => <li key={t} className="flex items-center gap-2"><Icon name={ic} className="size-4 text-success" />{t}</li>)}
        </ul>
      </Section>

      <Section tone="canvas">
        <SectionHead eyebrow="What's included" title="One plan, the whole calling desk" lede="Pick any of these to see how it works." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.filter((m) => ["calling", "follow-ups"].includes(m.slug)).map((m, i) => (
            <Reveal key={m.slug} delay={i * 100}>
              <Link href={`/modules/${m.slug}`} className="group block h-full rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white transition group-hover:rotate-6 ${m.grad}`}><Icon name={m.icon} className="size-7" /></span>
                <h3 className="mt-4 text-lg font-bold text-ink">{m.name}</h3>
                <p className="mt-1 text-[15px] text-muted">{m.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">See how <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
          {[{ icon: "inbox" as IconName, name: "Lead management", blurb: "Every source, one list", grad: "from-blue-500 to-indigo-600", href: "/lead-management" }, { icon: "mobile" as IconName, name: "Android caller app", blurb: "The desk in a pocket", grad: "from-pink-500 to-rose-600", href: "/modules/calling" }].map((m, i) => (
            <Reveal key={m.name} delay={(i + 2) * 100}>
              <Link href={m.href} className="group block h-full rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white transition group-hover:rotate-6 ${m.grad}`}><Icon name={m.icon} className="size-7" /></span>
                <h3 className="mt-4 text-lg font-bold text-ink">{m.name}</h3>
                <p className="mt-1 text-[15px] text-muted">{m.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">See how <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="Getting started" title="Calling in three steps" />
        <div className="relative mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <div aria-hidden className="absolute left-[16%] right-[16%] top-8 hidden h-0.5 bg-[repeating-linear-gradient(90deg,var(--color-primary)_0_6px,transparent_6px_12px)] opacity-40 md:block" />
          {steps.map((st, i) => (
            <Reveal key={st.title} delay={i * 120} className="relative text-center">
              <span className={`relative mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-[0_14px_30px_-12px_rgba(0,0,0,.45)] ring-8 ring-white ${st.grad}`}><Icon name={st.icon} className="size-7" /></span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-bold text-ink">{st.title}</h3>
              <p className="mt-1 text-[15px] text-muted">{st.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Faq items={faqs} tone="canvas" />
      <DemoCta title="Not sure yet? See it on your leads." />
    </>
  );
}
