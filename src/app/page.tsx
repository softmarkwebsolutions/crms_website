import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { DemoCta } from "@/components/sections/DemoCta";
import { CountUp, Marquee, Reveal } from "@/components/ui/Motion";
import { ProductTour } from "@/components/sections/ProductTour";
import { Journey } from "@/components/sections/Journey";
import { ModulesHub } from "@/components/sections/ModulesHub";
import { CallingPanel } from "@/components/sections/CallingPanel";
import { FeatureOrbit } from "@/components/sections/FeatureOrbit";
import { QuickLead } from "@/components/sections/QuickLead";
import { site } from "@/lib/site";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Softmark CRM — Lead to invoice, on one line",
  description:
    "A CRM for teams that sell on the phone: capture leads from Facebook, IVR and CSV, call and follow up, send WhatsApp, approve deals and raise GST invoices in one workspace.",
};

const sources = ["Facebook Lead Ads", "IVR & click-to-call", "Bulk CSV upload", "Manual entry", "Android caller app"];

const features: { icon: IconName; title: string; text: string; grad: string }[] = [
  { icon: "inbox", title: "Every lead in one list", text: "Facebook Lead Ads, IVR calls, CSV imports and manual entries land in the same filterable list.", grad: "from-primary to-deep-2" },
  { icon: "sliders", title: "Your own lead fields", text: "Twelve field types per company, including a Status field you shape to your own sales process.", grad: "from-warn to-orange-500" },
  { icon: "phone", title: "Built for calling", text: "Agents get their assigned leads, click-to-call and a call history on every lead, plus a caller app for Android.", grad: "from-success to-emerald-600" },
  { icon: "bell", title: "Follow-ups that stick", text: "Callbacks become tasks. A reminder pops up when the slot comes due and stays until someone acknowledges it.", grad: "from-pink-500 to-rose-600" },
  { icon: "chat", title: "WhatsApp built in", text: "Send approved templates to one lead or a whole list, with delivery and reply status tracked back.", grad: "from-emerald-500 to-teal-600" },
  { icon: "check", title: "Deal approvals", text: "Deals go through an approval step, so nothing leaves at a price nobody signed off.", grad: "from-info to-sky-600" },
  { icon: "receipt", title: "GST invoicing & inventory", text: "Raise invoices in your own look, with stock that updates as you sell.", grad: "from-orange-400 to-amber-500" },
  { icon: "chart", title: "Reports & targets", text: "Hour-by-hour floor views, campaign reports and team targets so managers see who is closing.", grad: "from-violet-500 to-fuchsia-600" },
  { icon: "building", title: "Multi-company", text: "Many companies on one install, each seeing only its own data.", grad: "from-blue-500 to-indigo-600" },
];

const steps = [
  { n: "01", title: "Capture", text: "Leads arrive from Facebook, IVR, CSV files or your team." },
  { n: "02", title: "Assign", text: "Campaign rules route each fresh lead to an agent automatically." },
  { n: "03", title: "Call", text: "Agents call, log the outcome and update the lead's status." },
  { n: "04", title: "Follow up", text: "Set a callback; reminders and WhatsApp keep the lead warm." },
  { n: "05", title: "Approve", text: "Send the deal for approval before it goes to the customer." },
  { n: "06", title: "Invoice", text: "Raise the GST invoice from the same workspace." },
];

const audiences: { title: string; text: string; img: string; alt: string; icon: IconName; grad: string; chip: [string, string]; points: string[]; href: string }[] = [
  { title: "Team leaders", text: "Know who is on a call, who is idle and who is closing.", img: "/images/call-floor.jpg", alt: "Agents with headsets working on a calling floor", icon: "users", grad: "from-primary to-deep-2", chip: ["Floor is live", "Agents on call right now"], points: ["Live floor reports", "Bulk lead reassignment", "Monthly team targets"], href: "/modules/reports" },
  { title: "Sales teams", text: "Go from interested to invoiced without leaving the lead.", img: "/images/deal-closed.jpg", alt: "A deal being closed with a handshake", icon: "receipt", grad: "from-warn to-orange-500", chip: ["Deal approved", "Proforma raised"], points: ["Calling panel and call history", "WhatsApp from the lead", "Offers and approvals"], href: "/modules/calling" },
  { title: "Admins & owners", text: "Control fields, plans, permissions and each company's data.", img: "/images/planning.jpg", alt: "Team planning around a table", icon: "shield", grad: "from-success to-emerald-600", chip: ["Seats in use", "Plan and modules per company"], points: ["Your own lead fields", "Plans and permissions", "Many companies, one install"], href: "/modules/billing" },
];

const faqs = [
  { q: "Where do my leads come from?", a: "Facebook Lead Ads, IVR calls, bulk CSV uploads, manual entry and the Android caller app all feed one list." },
  { q: "Can each company have its own fields?", a: "Yes. Every company defines its own lead fields, including a Status field shaped to its sales process." },
  { q: "Does it handle invoicing?", a: "Deals go through approval and you raise GST invoices from the same workspace, with stock updating as you sell." },
  { q: "How do I get started?", a: "Request a demo and our team will call you to set up a walkthrough on your own leads." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-soft">
        <div aria-hidden className="pointer-events-none absolute -left-24 top-10 size-72 animate-[blob_12s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 size-80 animate-[blob_15s_ease-in-out_infinite_reverse] rounded-full bg-warn/20 blur-3xl" />
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-rise">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-muted">
              <span className="size-2 rounded-full bg-success" /> A CRM built for teams that sell on the phone
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Every lead rides <span className="text-shine">one line</span> — from first ring to paid invoice.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Leads from Facebook, IVR and spreadsheets land in one list. Your agents call them, follow up on WhatsApp,
              get the deal approved and raise the GST invoice, all in the same workspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.registerUrl}>Start free trial <Icon name="arrow" className="size-4" /></ButtonLink>
              <ButtonLink href="/#demo" variant="line">Request a demo</ButtonLink>
            </div>
            <QuickLead className="mt-6" />
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted" aria-label="Lead sources">
              {sources.map((s) => (
                <li key={s} className="flex items-center gap-2"><Icon name="check" className="size-4 text-success" />{s}</li>
              ))}
            </ul>
          </div>

          <div className="relative animate-rise [animation-delay:150ms]">
            <Image
              src="/images/calling_center.jpg"
              alt="Agents with headsets working on a calling floor"
              width={1000}
              height={667}
              priority
              sizes="(min-width:1024px) 520px, 100vw"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="absolute -left-4 top-6 hidden animate-float items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)] sm:flex">
              <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-sm font-bold text-primary">f</span>
              <div><p className="text-sm font-bold text-ink">New Facebook lead</p><p className="text-xs text-muted">Tractor loan · Jaipur</p></div>
              <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-bold text-success">now</span>
            </div>
            <div className="absolute -right-3 top-1/2 hidden animate-[float_7s_ease-in-out_infinite_1s] rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)] md:block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted">diwali_offer · template</p>
              <p className="mt-1 max-w-[190px] rounded-lg border border-success/30 bg-success/5 p-2 text-xs text-ink">Namaste Ramesh ji, aapka loan offer ready hai.</p>
              <p className="mt-1 text-right text-[10px] font-bold text-info">Delivered ✓✓</p>
            </div>
            <div className="absolute -left-6 bottom-6 hidden animate-[float_8s_ease-in-out_infinite_2s] items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)] sm:flex">
              <svg viewBox="0 0 48 48" className="size-12 -rotate-90"><circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-hair)" strokeWidth="5" /><circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-primary)" strokeWidth="5" strokeLinecap="round" strokeDasharray="126" style={{ "--to": "6" } as React.CSSProperties} className="animate-[ring_1.8s_ease-out_both]" /></svg>
              <div><p className="text-[10px] font-bold uppercase tracking-wider text-muted">Today&apos;s target</p><p className="text-xl font-bold text-ink">38<span className="text-sm font-normal text-muted">/40 calls</span></p></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-6"><Marquee items={[...sources, "WhatsApp Cloud API", "Google sign-in", "GST invoicing", "Deal approvals", "Team targets", "Multi-company"]} /></section>

      {/* Overview */}
      <Section tone="white">
        <SectionHead
          eyebrow="What it is"
          title="One workspace for the whole sales line"
          lede="Most teams hand the customer to a different tool at every step. Softmark CRM keeps the lead in one place, from capture to invoice."
        />
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {([
            [5, "", "lead sources feeding one list", "inbox", "from-primary/15 to-primary/5", "from-primary to-deep-2"],
            [12, "", "custom field types per company", "sliders", "from-warn/20 to-warn/5", "from-warn to-orange-500"],
            [12, "+", "performance & campaign reports", "chart", "from-info/20 to-info/5", "from-info to-sky-600"],
            [1, "", "login from first call to invoice", "shield", "from-success/20 to-success/5", "from-success to-emerald-600"],
          ] as [number, string, string, IconName, string, string][]).map(([n, x, l, icon, tint, grad], i) => (
            <Reveal key={l} delay={i * 90} className="group relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[var(--shadow-lift)]">
              <span aria-hidden className={`absolute -right-10 -top-10 size-36 rounded-full bg-gradient-to-br ${tint} transition duration-500 group-hover:scale-150`} />
              <span aria-hidden className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${grad} transition duration-500 group-hover:scale-x-100`} />
              <span className={`relative mb-5 grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,.35)] transition duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                <Icon name={icon} className="size-7" />
              </span>
              <dt className="relative text-5xl font-bold tracking-tight text-ink"><CountUp to={n} suffix={x} /></dt>
              <dd className="relative mt-2 text-[15px] text-muted">{l}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section id="features" tone="canvas" className="!bg-[#eceef3]">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          <div id="modules" className="flex scroll-mt-24 flex-col">
            <SectionHead eyebrow="Modules" title="Five modules. One lead." lede="Pick a module to see how it plugs into the same lead record." />
            <div className="flex flex-1 flex-col justify-center"><ModulesHub /></div>
          </div>
          <div className="flex flex-col">
            <SectionHead eyebrow="Features" title="Everything the floor needs" lede="Each of these is part of the product today." />
            <div className="flex flex-1 flex-col justify-center">
            <FeatureOrbit items={features} />
            <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={(i % 2) * 100}><FeatureCard icon={f.icon} title={f.title} grad={f.grad}>{f.text}</FeatureCard></Reveal>
              ))}
            </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Calling showcase */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal><CallingPanel /></Reveal>
          <Reveal delay={120}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-primary">Calling panel</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">No lead goes cold, none gets double-called.</h2>
            <ul className="mt-6 space-y-3 text-[15px] text-muted">
              {["Duplicate mobile numbers are flagged on the way in", "Invalid numbers are marked wrong-number automatically", "Fresh leads are auto-assigned through campaigns", "A call history is kept on every lead"].map((t) => (
                <li key={t} className="flex gap-3"><Icon name="check" className="mt-0.5 size-5 shrink-0 text-success" />{t}</li>
              ))}
            </ul>
            <ButtonLink href="/modules/calling" className="mt-8">See the calling module <Icon name="arrow" className="size-4" /></ButtonLink>
          </Reveal>
        </div>
      </Section>

      <ProductTour />

      <Journey />

      {/* Use cases */}
      <Section tone="canvas">
        <SectionHead eyebrow="Who it's for" title="Everyone gets the screen they need" lede="Three roles, three views, one lead record underneath." />
        <div className="grid gap-7 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                <div className="relative overflow-hidden">
                  <Image src={a.img} alt={a.alt} width={1400} height={933} sizes="(min-width:768px) 380px, 100vw" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div aria-hidden className={`absolute inset-0 bg-gradient-to-t ${a.grad} opacity-30 mix-blend-multiply`} />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 flex animate-float items-center gap-3 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-[var(--shadow-card)] backdrop-blur" style={{ animationDelay: `${i * 0.8}s` }}>
                    <span className={`grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white ${a.grad}`}><Icon name="check" className="size-5" /></span>
                    <div className="min-w-0"><p className="text-sm font-bold text-ink">{a.chip[0]}</p><p className="truncate text-xs text-muted">{a.chip[1]}</p></div>
                    <span className="ml-auto size-2.5 shrink-0 animate-pulse rounded-full bg-success" />
                  </div>
                </div>
                <div className="relative p-6">
                  <span className={`absolute -top-6 right-6 grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-[0_12px_24px_-10px_rgba(0,0,0,.45)] transition group-hover:rotate-6 ${a.grad}`}><Icon name={a.icon} className="size-6" /></span>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">0{i + 1} · For {a.title.toLowerCase()}</p>
                  <h3 className="mt-1 text-xl font-bold text-ink">{a.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{a.text}</p>
                  <ul className="mt-4 space-y-2">
                    {a.points.map((p) => <li key={p} className="flex items-center gap-2 text-sm text-ink"><Icon name="check" className="size-4 shrink-0 text-success" />{p}</li>)}
                  </ul>
                  <Link href={a.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">Explore <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Faq items={faqs} />

      <DemoCta />
    </>
  );
}
