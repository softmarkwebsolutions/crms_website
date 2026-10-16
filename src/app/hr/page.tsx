import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { DemoCta } from "@/components/sections/DemoCta";
import { hrModules } from "@/lib/hr-modules";
import { QuickLead } from "@/components/sections/QuickLead";
import { site } from "@/lib/site";
import Link from "next/link";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "HR Software",
  description: "Employee records, attendance, leave, payroll and hiring in one workspace.",
  alternates: { canonical: "/hr" },
};

// Placeholder copy: confirm against the real HR product before launch.
const features: { icon: IconName; title: string; text: string }[] = [
  { icon: "users", title: "Employee records", text: "One profile per employee with documents, roles and reporting lines." },
  { icon: "clock", title: "Attendance", text: "Track check-ins, shifts and working hours across teams and locations." },
  { icon: "bell", title: "Leave management", text: "Apply, approve and balance leave with policies per team." },
  { icon: "receipt", title: "Payroll", text: "Salary structures, deductions and payslips generated each month." },
  { icon: "target", title: "Recruitment", text: "Open roles, track candidates and move them from applied to joined." },
  { icon: "chart", title: "HR reports", text: "Headcount, attrition and attendance reports for managers and owners." },
];

const steps = [
  { n: "01", title: "Onboard", text: "Add employees and their documents." },
  { n: "02", title: "Track", text: "Attendance and leave recorded daily." },
  { n: "03", title: "Pay", text: "Run payroll and share payslips." },
];

const faqs = [
  { q: "Does HR work with the CRM?", a: "They are separate products that can run side by side for the same company." },
  { q: "Can I define leave policies?", a: "Yes, policies can be set per team or employee group." },
  { q: "How do I get started?", a: "Request a demo and our team will walk you through it." },
];

export default function HrPage() {
  return (
    <>
      <section className="bg-soft">
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-rise">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold text-primary">
              <span className="size-2 rounded-full bg-primary" /> HR &amp; Workforce
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              People operations, <span className="text-primary">simplified</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Employee records, attendance, leave, payroll and hiring in one place, so HR spends time on people instead of spreadsheets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.registerUrl}>Start free trial <Icon name="arrow" className="size-4" /></ButtonLink>
              <ButtonLink href="#demo" variant="line">Schedule Demo</ButtonLink>
            </div>
            <QuickLead className="mt-6" />
          </div>
          <Image src="/images/planning.jpg" alt="Team planning around a table" width={1400} height={933} priority sizes="(min-width:1024px) 520px, 100vw" className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]" />
        </Container>
      </section>

      <Section tone="canvas">
        <SectionHead eyebrow="Modules" title="Attendance, payroll and recruitment" />
        <div className="grid gap-5 md:grid-cols-3">
          {hrModules.map((m, i) => (
            <Link key={m.slug} href={`/hr/${m.slug}`} className="group rounded-3xl border border-line bg-white p-6 transition hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]" style={{ animation: `pop .6s ${i * 120}ms both` }}>
              <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white transition group-hover:rotate-6 ${m.grad}`}><Icon name={m.icon} className="size-7" /></span>
              <h3 className="mt-4 text-xl font-bold text-ink">{m.name}</h3>
              <p className="mt-2 text-[15px] text-muted">{m.lede}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">Explore <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="features" tone="white">
        <SectionHead eyebrow="Features" title="Everything HR needs" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => <FeatureCard key={f.title} icon={f.icon} title={f.title}>{f.text}</FeatureCard>)}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead dark eyebrow="How it works" title="Three steps to a calmer HR desk" />
        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-[var(--radius-card)] bg-white/5 p-6 ring-1 ring-white/10">
              <span className="text-sm font-bold text-white/70">{s.n}</span>
              <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-subtle">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Faq items={faqs} />
      <DemoCta title="See HR on your own team." />
    </>
  );
}
