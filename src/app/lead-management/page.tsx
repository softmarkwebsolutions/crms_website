import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Timeline } from "@/components/sections/Timeline";
import { CountUp, Reveal } from "@/components/ui/Motion";
import { QuickLead } from "@/components/sections/QuickLead";
import { site } from "@/lib/site";
import { DemoCta } from "@/components/sections/DemoCta";

export const metadata: Metadata = {
  title: "Lead Management",
  description:
    "Capture leads from Facebook, IVR and CSV, flag duplicates, auto-assign through campaigns, track every call and follow-up, and move leads from fresh to closed.",
  alternates: { canonical: "/lead-management" },
};

const capture: { icon: IconName; title: string; text: string; grad: string }[] = [
  { icon: "inbox", title: "Facebook Lead Ads", text: "Pull leads from your Facebook lead forms into the same list as everything else.", grad: "from-blue-500 to-indigo-600" },
  { icon: "upload", title: "Bulk CSV upload", text: "Map columns, import in the background and get an error report for rows that failed.", grad: "from-emerald-500 to-teal-600" },
  { icon: "phone", title: "IVR & caller app", text: "Calls and leads logged from the Android caller app join the list with their source.", grad: "from-orange-400 to-amber-500" },
  { icon: "users", title: "Manual & API entry", text: "Add a lead by hand, or send it from your website through the lead intake API.", grad: "from-pink-500 to-rose-600" },
];

// Default statuses seeded for a new company (LeadField::DEFAULT_STATUS_KEYS). Admins add their own.
const statuses = [
  { label: "Fresh Lead", note: "Just arrived, not yet called", tone: "bg-primary/10 text-primary-dark", dot: "bg-primary" },
  { label: "Call Back", note: "Customer asked to be called later", tone: "bg-info/10 text-cyan-700", dot: "bg-info" },
  { label: "Interested", note: "Warm: take it forward", tone: "bg-warn/15 text-amber-700", dot: "bg-warn" },
  { label: "Deal Closed", note: "Won", tone: "bg-success/10 text-emerald-700", dot: "bg-success" },
  { label: "Not Interested", note: "Closed out as lost", tone: "bg-danger/10 text-red-700", dot: "bg-danger" },
];

const controls: { icon: IconName; title: string; text: string; grad: string }[] = [
  { icon: "copy", title: "Duplicate detection", text: "A lead whose mobile number already exists in your company is flagged as a duplicate instead of being called twice.", grad: "from-violet-500 to-fuchsia-600" },
  { icon: "shield", title: "Wrong-number check", text: "Numbers that fail validation are marked wrong-number on arrival, so agents don't waste calls on them.", grad: "from-rose-500 to-red-600" },
  { icon: "target", title: "Campaign auto-assign", text: "Fresh leads attached to a campaign are assigned to an agent automatically.", grad: "from-primary to-deep-2" },
  { icon: "sliders", title: "Custom fields", text: "Define your own fields, in twelve types, and make them filterable. Status is always there by default.", grad: "from-orange-400 to-amber-500" },
  { icon: "filter", title: "Filter by what matters", text: "Narrow the list by campaign, source, state or status, and export it with download permissions.", grad: "from-info to-sky-600" },
  { icon: "building", title: "Per-company data", text: "Each company sees only its own leads, fields and statuses.", grad: "from-emerald-500 to-teal-600" },
];

const workflow: { icon: IconName; title: string; text: string; grad: string }[] = [
  { icon: "inbox", grad: "from-blue-500 to-indigo-600", title: "Lead arrives", text: "From any source, with its campaign and source recorded." },
  { icon: "target", grad: "from-primary to-deep-2", title: "Checked & assigned", text: "Duplicates and invalid numbers are flagged; the rest go to an agent." },
  { icon: "phone", grad: "from-orange-400 to-amber-500", title: "Called & logged", text: "Each call and its outcome is saved on the lead's history." },
  { icon: "sliders", grad: "from-pink-500 to-rose-600", title: "Status updated", text: "The agent moves the lead along: call back, interested, closed or not interested." },
  { icon: "bell", grad: "from-info to-sky-600", title: "Follow-up scheduled", text: "A callback becomes a task with a reminder that stays until acknowledged." },
  { icon: "receipt", grad: "from-emerald-500 to-teal-600", title: "Deal & invoice", text: "Interested leads go for deal approval, then to a GST invoice." },
];

export default function LeadManagementPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-deep)_0%,var(--color-deep-2)_100%)] text-white">
        <div aria-hidden className="absolute inset-0 opacity-[.15] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(90deg,transparent,#000_60%)]" />
        <div aria-hidden className="absolute -left-24 top-0 size-96 animate-[blob_14s_ease-in-out_infinite] rounded-full bg-warn/25 blur-3xl" />
        <div aria-hidden className="absolute -right-20 bottom-0 size-[28rem] animate-[blob_17s_ease-in-out_infinite_reverse] rounded-full bg-fuchsia-500/25 blur-3xl" />
        <Container className="relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-rise">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur"><span className="size-2 animate-pulse rounded-full bg-warn" /> Lead management</p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              From first enquiry to closed deal, <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">every lead accounted for.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Capture leads from every source, keep the list clean, put each one in front of the right agent and see
              exactly where it stands.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#demo" variant="light">Request a demo <Icon name="arrow" className="size-4" /></ButtonLink>
              <ButtonLink href="#workflow" variant="ghost">See the workflow</ButtonLink>
              <ButtonLink href={site.registerUrl} variant="ghost">Start free trial</ButtonLink>
            </div>
            <QuickLead className="mt-6" />
            <dl className="mt-10 grid max-w-md grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-6">
              {([[5, "", "lead sources"], [12, "", "field types"], [1, "", "shared list"]] as [number, string, string][]).map(([n, x, l]) => (
                <div key={l} className="px-4 first:pl-0">
                  <dt className="text-3xl font-bold"><CountUp to={n} suffix={x} /></dt>
                  <dd className="text-xs uppercase tracking-wider text-white/60">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-rise [animation-delay:150ms]">
            <div aria-hidden className="absolute -inset-3 rotate-2 rounded-[2rem] border border-white/20 bg-white/5" />
            <Image
              src="/images/team-screens.jpg"
              alt="A sales team working through their lead lists"
              width={1400}
              height={933}
              priority
              sizes="(min-width:1024px) 520px, 100vw"
              className="relative w-full rounded-3xl object-cover shadow-[0_30px_70px_-20px_rgba(0,0,0,.5)]"
            />
            <div className="absolute -left-6 top-8 hidden animate-float items-center gap-3 rounded-2xl bg-white p-3 text-ink shadow-[var(--shadow-card)] sm:flex">
              <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white">f</span>
              <div><p className="text-sm font-bold">New lead · Facebook</p><p className="text-xs text-muted">Tractor loan · Jaipur</p></div>
              <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-bold text-success">now</span>
            </div>
            <div className="absolute -right-5 top-1/3 hidden animate-[float_7s_ease-in-out_infinite_1s] items-center gap-3 rounded-2xl bg-white p-3 text-ink shadow-[var(--shadow-card)] md:flex">
              <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-rose-500 to-red-600 text-white"><Icon name="copy" className="size-4" /></span>
              <div><p className="text-sm font-bold">Duplicate flagged</p><p className="text-xs text-muted">98••••421 already exists</p></div>
            </div>
            <div className="absolute -bottom-8 left-4 hidden w-72 rounded-2xl bg-white p-4 text-ink shadow-[0_24px_50px_-18px_rgba(0,0,0,.5)] sm:block">
              <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted"><span className="size-2 animate-pulse rounded-full bg-success" /> Live leads</p>
              {[["Ramesh Yadav", "Facebook", "Interested", "bg-warn/15 text-amber-700"], ["Priya Menon", "IVR", "Call back", "bg-info/10 text-cyan-700"], ["Gurpreet Singh", "CSV", "Deal closed", "bg-success/10 text-emerald-700"]].map(([n, src, st, tone], k) => (
                <div key={n} className="pick -mx-2 flex items-center justify-between rounded-lg px-2 py-1.5 text-xs" style={{ animationDelay: `${k * 2}s` }}>
                  <span><b className="text-[13px]">{n}</b> <span className="text-muted">· {src}</span></span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${tone}`}>{st}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <SectionHead eyebrow="Capture" title="Every source, one list" lede="Leads stop living in five different places." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capture.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}><FeatureCard icon={c.icon} title={c.title} grad={c.grad}>{c.text}</FeatureCard></Reveal>
          ))}
        </div>
        <svg viewBox="0 0 1000 90" className="mx-auto mt-2 hidden w-full lg:block" aria-hidden>
          {[125, 375, 625, 875].map((x) => <path key={x} d={`M${x} 0 C${x} 50 500 40 500 78`} fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" className="dash-line" />)}
        </svg>
        <div className="mx-auto -mt-2 flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-primary to-deep-2 px-7 py-3 font-bold text-white shadow-[0_14px_30px_-12px_var(--t-glow)]">
          <Icon name="layers" className="size-5" /> One filterable lead list
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHead eyebrow="Keep it clean" title="Controls that protect your agents' time" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 100}><FeatureCard icon={c.icon} title={c.title} grad={c.grad}>{c.text}</FeatureCard></Reveal>
          ))}
        </div>
      </Section>

      <Section id="statuses" tone="white">
        <SectionHead
          eyebrow="Lead lifecycle"
          title="Statuses that follow your process"
          lede="Every company starts with these five and adds its own from Lead Fields."
        />
        <div className="relative">
          <div aria-hidden className="absolute inset-x-[10%] top-[2.1rem] hidden h-1 rounded-full bg-hair lg:block">
            <span className="absolute -top-1.5 size-4 rounded-full bg-primary shadow-[0_0_0_6px_var(--t-glow)]" style={{ animation: "travel 6s ease-in-out infinite alternate" }} />
          </div>
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {statuses.map((s, i) => (
              <Reveal key={s.label} delay={i * 110}>
                <div className="group h-full rounded-[var(--radius-card)] border border-line bg-white p-5 text-center transition hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                  <span className={`mx-auto mb-4 grid size-8 place-items-center rounded-full text-xs font-bold text-white ring-8 ring-white ${s.dot}`}>{i + 1}</span>
                  <span className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${s.tone}`}>{s.label}</span>
                  <p className="mt-3 text-sm text-muted">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="workflow" tone="canvas">
        <SectionHead eyebrow="Workflow" title="How a lead moves through the CRM" lede="Six steps, one record, nothing re-typed." />
        <Timeline steps={workflow} />
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-primary">Benefits</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">Less chasing, more closing.</h2>
            <ul className="mt-6 space-y-3 text-[15px] text-muted">
              {[
                "Agents spend time on real leads, not duplicates and dead numbers",
                "Managers see every call and follow-up, so slow responses show up early",
                "Nothing is lost between tools: the lead, its calls and its invoice share one record",
              ].map((t) => (
                <li key={t} className="flex gap-3 rounded-xl border border-line bg-canvas p-3.5 transition hover:border-primary/40 hover:bg-white"><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-success to-emerald-600 text-white"><Icon name="check" className="size-3.5" /></span>{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#demo">Request a demo</ButtonLink>
              <ButtonLink href="/" variant="line">Back to home</ButtonLink>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/client-meeting.jpg"
              alt="A sales agent meeting a customer"
              width={1400}
              height={933}
              sizes="(min-width:1024px) 560px, 100vw"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="absolute -bottom-5 left-6 hidden animate-float items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)] sm:flex">
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-warn to-orange-500 text-white"><Icon name="bell" className="size-5" /></span>
              <div><p className="text-sm font-bold text-ink">Follow-up due 11:00</p><p className="text-xs text-muted">Reminder stays until acknowledged</p></div>
            </div>
          </div>
        </div>
      </Section>

      <DemoCta title="Bring your lead sources. We'll show the rest." lede="Tell us how leads reach you today and we'll walk through the same flow in Softmark CRM." />
    </>
  );
}
