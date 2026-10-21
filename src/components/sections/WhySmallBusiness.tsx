import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Motion";
import { Section, SectionHead } from "@/components/ui/Section";
import { pricing } from "@/lib/site";

// Each reason is something the product or its register/pricing flow already says: price, free trial without a card, quick start, Android app, Google sign-in, leads to invoice in one place.
const reasons: { icon: IconName; title: string; text: string; grad: string }[] = [
  { icon: "wallet", title: `From ₹${pricing.price} a ${pricing.period}`, text: "A price a small team can say yes to, with no tiers to work out.", grad: "from-warn to-orange-500" },
  { icon: "check", title: "Try it free, no card", text: "Start a trial without handing over card details.", grad: "from-emerald-500 to-teal-600" },
  { icon: "bolt", title: "Calling in minutes", text: "Add your staff, import your leads and start calling the same day.", grad: "from-primary to-deep-2" },
  { icon: "mobile", title: "Your phone is the desk", text: "The Android caller app puts assigned leads and follow-ups in every agent's pocket.", grad: "from-pink-500 to-rose-600" },
  { icon: "layers", title: "One tool, not five", text: "Leads, calls, WhatsApp, follow-ups and GST invoices in one place instead of separate apps.", grad: "from-info to-sky-600" },
  { icon: "users", title: "Simple to sign in", text: "Use your work email or your Google account. Nothing to install for the office.", grad: "from-violet-500 to-fuchsia-600" },
];

export function WhySmallBusiness() {
  return (
    <Section tone="canvas">
      <SectionHead eyebrow="Built for small teams" title="Why small businesses choose SoftCRMS" lede="You don't need a big team or a big budget to run a proper sales line." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 100}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
              <span aria-hidden className={`absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br opacity-10 transition duration-500 group-hover:scale-150 ${r.grad}`} />
              <span className={`relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-[0_12px_24px_-10px_rgba(0,0,0,.45)] transition group-hover:rotate-6 group-hover:scale-110 ${r.grad}`}><Icon name={r.icon} className="size-7" /></span>
              <h3 className="relative mt-4 text-lg font-bold text-ink">{r.title}</h3>
              <p className="relative mt-1.5 text-[15px] text-muted">{r.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
