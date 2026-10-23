import type { Metadata } from "next";
import Link from "next/link";
import { DemoForm } from "@/components/sections/DemoForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Motion";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { site } from "@/lib/site";

const cards: { icon: IconName; title: string; text: string; link: string; href: string; grad: string }[] = [
  { icon: "mail", title: "Email us", text: "For questions, billing or anything about your account.", link: site.contactEmail, href: `mailto:${site.contactEmail}`, grad: "from-orange-400 to-amber-500" },
  { icon: "users", title: "Already a customer?", text: "Sign in to your CRM to reach your own desk.", link: "Sign in", href: site.appUrl, grad: "from-teal-500 to-emerald-600" },
  { icon: "bolt", title: "New here?", text: "Start a free trial. No card needed.", link: "Start free trial", href: site.registerUrl, grad: "from-pink-500 to-rose-600" },
];

export const metadata: Metadata = { title: "Contact Us", description: "Talk to the Softmark CRM team. Request a call back, email us or start a free trial.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" lede="Leave your number and we will call you, or write to us." crumb="Contact Us" />
      <section className="bg-canvas py-14 md:py-20">
        <Container className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Request a call back</p>
              <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">We will call you</h2>
              <p className="mt-2 mb-7 text-muted">Share your name and mobile number. Our team will reach out to answer questions or set up a demo.</p>
              <DemoForm cta="Call me back" />
            </div>
          </Reveal>
          <div className="space-y-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <Link href={c.href} className="group flex items-center gap-5 rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <span className={`grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white transition group-hover:rotate-6 ${c.grad}`}><Icon name={c.icon} className="size-7" /></span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-ink">{c.title}</h3>
                    <p className="text-[15px] text-muted">{c.text}</p>
                    <span className="mt-1 inline-flex items-center gap-1.5 break-all text-sm font-bold text-primary">{c.link} <Icon name="arrow" className="size-4 shrink-0 transition group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
