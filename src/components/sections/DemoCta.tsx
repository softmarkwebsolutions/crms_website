import { Container } from "@/components/ui/Section";
import { DemoForm } from "./DemoForm";

export function DemoCta({ title = "See it on your own leads.", lede = "Leave your details and our team will call you to set up a walkthrough." }: { title?: string; lede?: string }) {
  return (
    <section id="demo" className="scroll-mt-20 bg-[linear-gradient(135deg,var(--color-deep)_0%,var(--color-deep-2)_100%)] py-16 text-white md:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-white/70">Request a demo</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-md text-lg text-subtle">{lede}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-8">
          <DemoForm dark />
        </div>
      </Container>
    </section>
  );
}
