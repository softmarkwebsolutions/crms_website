import Link from "next/link";
import { Reveal } from "@/components/ui/Motion";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { site } from "@/lib/site";

export type LegalSection = { id: string; title: string; icon: IconName; body: (string | string[])[] };

/** Long-form policy layout: sticky contents list on the left, numbered cards on the right. */
export function LegalDoc({ updated, intro, sections }: { updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <section className="bg-canvas py-14 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-primary">On this page</p>
          <ol className="space-y-1 border-l-2 border-line">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="-ml-0.5 block border-l-2 border-transparent py-1.5 pl-4 text-sm font-semibold text-muted transition hover:border-primary hover:text-primary">
                  <span className="mr-2 text-subtle">{String(i + 1).padStart(2, "0")}</span>{s.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="min-w-0 space-y-5">
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                <Icon name="clock" className="size-3.5" /> Last updated {updated}
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-muted">{intro}</p>
            </div>
          </Reveal>

          {sections.map((s, i) => (
            <Reveal key={s.id}>
              <article id={s.id} className="scroll-mt-24 rounded-3xl border border-line bg-white p-6 md:p-8">
                <header className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-deep-2 text-white"><Icon name={s.icon} className="size-6" /></span>
                  <h2 className="text-xl font-bold text-ink md:text-2xl"><span className="mr-2 text-subtle">{String(i + 1).padStart(2, "0")}</span>{s.title}</h2>
                </header>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
                  {s.body.map((b, j) =>
                    Array.isArray(b) ? (
                      <ul key={j} className="space-y-2.5">
                        {b.map((li) => (
                          <li key={li} className="flex gap-3"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/15 text-success"><Icon name="check" className="size-3" /></span><span>{li}</span></li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j}>{b}</p>
                    ),
                  )}
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-[linear-gradient(135deg,var(--color-deep),var(--color-deep-2))] p-6 text-white md:flex-row md:items-center md:p-8">
              <div>
                <h2 className="text-xl font-bold">Questions about this page?</h2>
                <p className="mt-1 text-subtle">Write to us and a person from {site.company} will reply.</p>
              </div>
              <Link href={`mailto:${site.contactEmail}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-hair">
                <Icon name="mail" className="size-4" /> {site.contactEmail}
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
