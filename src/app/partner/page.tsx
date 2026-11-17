import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/sections/Faq";
import { PartnerForm } from "@/components/sections/PartnerForm";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Motion";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { pricing, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Become a Partner",
  description: "Join the Softmark CRM Partner Program. Refer or resell an affordable CRM for Indian businesses and get onboarding and sales support.",
  alternates: { canonical: "/partner" },
};

// Commission and reward numbers are deliberately not stated: add them here once the programme terms are fixed.
const perks: { icon: IconName; title: string; text: string; tone: string }[] = [
  { icon: "wallet", title: "Earn on every referral", text: "Earn when businesses you refer subscribe. Commission terms are shared when your application is approved.", tone: "bg-primary/10 text-primary" },
  { icon: "users", title: "Dedicated support", text: "Get onboarding help, demos and sales guidance so you can recommend the CRM with confidence.", tone: "bg-sky-100 text-sky-600" },
  { icon: "layers", title: "A product businesses need", text: "Softmark brings leads from Facebook, IVR and spreadsheets into one list, with calling, follow-ups and invoices.", tone: "bg-violet-100 text-violet-600" },
  { icon: "chart", title: "Sales & marketing enablement", text: "Use our pricing page, demos and walkthroughs to position Softmark as an affordable CRM.", tone: "bg-emerald-100 text-emerald-600" },
  { icon: "target", title: "Grow your network value", text: "Add CRM consulting and implementation to your services and deepen relationships with clients you already serve.", tone: "bg-amber-100 text-amber-600" },
  { icon: "mobile", title: "Built for India", text: `Local pricing from ₹${pricing.price} a month, GST invoicing, WhatsApp follow-ups and an Android app.`, tone: "bg-rose-100 text-rose-600" },
];
const who: { icon: IconName; title: string; text: string }[] = [
  { icon: "layers", title: "IT & software consultants", text: "Recommend a CRM that fits SMB budgets and close faster deals." },
  { icon: "chat", title: "Digital marketing agencies", text: "Pair Meta and WhatsApp lead generation with a CRM your clients will actually use." },
  { icon: "store", title: "Resellers & dealers", text: "Add Softmark to your catalogue and sell it to businesses you already know." },
  { icon: "users", title: "Freelancers & affiliates", text: "Earn by sharing Softmark when your referrals go live." },
];
const steps = [
  { title: "Apply", text: "Tell us about your business, region and audience. We confirm fit and share partner guidelines." },
  { title: "Refer or sell", text: "Introduce Softmark to companies that need lead management. We support demos and onboarding." },
  { title: "Earn", text: "When they subscribe, you earn as per the partner terms shared with you." },
];
const faqs = [
  { q: "What is the Softmark Partner Program?", a: "It is a way for consultants, agencies, resellers and freelancers to refer or sell Softmark CRM to businesses and get onboarding and sales support." },
  { q: "Who can become a partner?", a: "Anyone who already talks to growing businesses: IT consultants, marketing agencies, resellers, dealers and freelancers." },
  { q: "How do I apply?", a: "Fill in the short form on this page. Our team will call you within one business day with the partner guidelines." },
  { q: "Is there a fee to join?", a: "No signup fee is charged to apply. Programme terms are shared on approval." },
];

export default function PartnerPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-soft">
        <div aria-hidden className="absolute -left-24 top-10 size-72 animate-[blob_12s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="absolute -right-20 bottom-0 size-80 animate-[blob_15s_ease-in-out_infinite_reverse] rounded-full bg-warn/20 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-rise">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary"><Icon name="users" className="size-4" /> CRM Partner Program</p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">Become a <span className="text-primary">Softmark</span> CRM Partner</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">Grow your business by joining the Softmark CRM Partner Program. Earn on referrals, get dedicated support, and help businesses streamline their sales with our CRM platform.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#apply">Apply to become a partner <Icon name="arrow" className="size-4" /></ButtonLink>
              <ButtonLink href="/contact" variant="line">Talk to us</ButtonLink>
            </div>
          </div>
          <div className="relative animate-rise [animation-delay:150ms]">
            <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-lift)]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Partner snapshot</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                {[["₹" + pricing.price, "Plan your clients start on / month"], ["24/7", "Lead capture for every client"], ["1 day", "Response to your application"], ["0", "Signup fee to apply"]].map(([val, label]) => (
                  <div key={label} className="rounded-2xl bg-soft p-4"><p className="text-2xl font-bold text-primary">{val}</p><p className="mt-1 text-xs text-muted">{label}</p></div>
                ))}
              </div>
            </div>
            <span className="absolute -right-3 -top-4 grid size-14 animate-float place-items-center rounded-2xl bg-gradient-to-br from-primary to-deep-2 text-white shadow-[var(--shadow-lift)]"><Icon name="trophy" className="size-7" /></span>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <SectionHead title="Why join our SaaS Partner Program" lede="Whether you want to resell, refer, or build a long-term CRM partnership, Softmark gives you a clear path to earn and grow." />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <span className={`grid size-11 place-items-center rounded-xl ${p.tone}`}><Icon name={p.icon} className="size-5" /></span>
                <h3 className="mt-4 font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="apply" tone="canvas">
        <SectionHead eyebrow="Partner application" title="Become a Partner. Tell us about you." lede="Fill in a few details and our team will share partner guidelines." />
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-lift)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-deep),var(--color-deep-2))] p-8 text-white">
            <div aria-hidden className="absolute -right-12 -top-12 size-44 rounded-full bg-white/10" />
            <span className="relative grid size-12 place-items-center rounded-2xl bg-white/15"><Icon name="trophy" className="size-6" /></span>
            <h3 className="relative mt-5 text-2xl font-bold">Grow with Softmark as a CRM Partner</h3>
            <p className="relative mt-3 text-white/80">Join resellers, affiliates and consultants helping India&apos;s growing sales teams get organised.</p>
            <ul className="relative mt-6 space-y-3 text-sm">
              {["No signup fee to apply", "Demo & onboarding support", "Response within 1 business day"].map((t) => <li key={t} className="flex items-center gap-3"><span className="grid size-5 place-items-center rounded-full bg-white/20"><Icon name="check" className="size-3.5" /></span>{t}</li>)}
            </ul>
          </div>
          <div className="p-6 md:p-8"><PartnerForm /></div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHead title="Who should become a CRM Partner" lede="Our partner paths are open to people and firms that already talk to growing businesses every day." />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {who.map((w, i) => (
            <Reveal key={w.title} delay={i * 70} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-canvas p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-[var(--shadow-card)]">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon name={w.icon} className="size-5" /></span>
                <h3 className="mt-3 font-bold text-ink">{w.title}</h3>
                <p className="mt-1 text-sm text-muted">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="canvas">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">Simple process</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">How the Partner Program works</h2>
            <p className="mt-4 text-muted">Three simple steps to start earning as a Softmark CRM Business Partner.</p>
            <Link href="#apply" className="mt-5 inline-flex items-center gap-1.5 font-bold text-primary">Start your application <Icon name="arrow" className="size-4" /></Link>
          </div>
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <li className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-deep-2 font-bold text-white">{i + 1}</span>
                  <div><h3 className="font-bold text-ink">{s.title}</h3><p className="mt-1 text-sm text-muted">{s.text}</p></div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Faq items={faqs} title="Partner Program FAQs" lede="Common questions about becoming a Softmark CRM Partner." tone="white" />

      <section className="bg-[linear-gradient(135deg,var(--color-deep)_0%,var(--color-deep-2)_100%)] py-16 text-center text-white md:py-20">
        <Container>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">Ready to become a Softmark CRM Partner?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">Refer or sell Softmark CRM to your network, with onboarding and sales support from our team.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="#apply" variant="light">Apply now</ButtonLink>
            <ButtonLink href={site.registerUrl} variant="ghost">Try the CRM free</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
