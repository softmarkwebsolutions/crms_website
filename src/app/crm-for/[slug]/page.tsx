import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Motion";
import { DemoCta } from "@/components/sections/DemoCta";
import { Faq } from "@/components/sections/Faq";
import { businessCrms, type Tone } from "@/lib/business-crms";
import { site } from "@/lib/site";

export const generateStaticParams = () => businessCrms.map((b) => ({ slug: b.slug }));

export async function generateMetadata({ params }: PageProps<"/crm-for/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const b = businessCrms.find((x) => x.slug === slug);
  return b ? { title: `CRM for ${b.name}`, description: b.lede, alternates: { canonical: `/crm-for/${b.slug}` } } : {};
}

const painTone = { red: "bg-red-50 text-red-500", amber: "bg-amber-50 text-amber-500", blue: "bg-primary/10 text-primary" } as const;
const stepGrad = ["from-primary to-deep-2", "from-info to-sky-600", "from-success to-emerald-600"];
const floatPos = ["left-[6%] top-[22%]", "right-[6%] top-[14%]", "left-[14%] bottom-[18%]", "right-[10%] bottom-[22%]"];

/** Soft tinted card + matching icon chip + bullet dot per tone. */
const tones: Record<Tone, { card: string; chip: string; dot: string }> = {
  red: { card: "bg-red-50/70 border-red-100", chip: "bg-red-100 text-red-600", dot: "bg-red-400" },
  rose: { card: "bg-rose-50/70 border-rose-100", chip: "bg-rose-100 text-rose-600", dot: "bg-rose-400" },
  amber: { card: "bg-amber-50/70 border-amber-100", chip: "bg-amber-100 text-amber-600", dot: "bg-amber-400" },
  blue: { card: "bg-blue-50/70 border-blue-100", chip: "bg-blue-100 text-blue-600", dot: "bg-blue-400" },
  sky: { card: "bg-sky-50/70 border-sky-100", chip: "bg-sky-100 text-sky-600", dot: "bg-sky-400" },
  green: { card: "bg-emerald-50/70 border-emerald-100", chip: "bg-emerald-100 text-emerald-600", dot: "bg-emerald-400" },
  violet: { card: "bg-violet-50/70 border-violet-100", chip: "bg-violet-100 text-violet-600", dot: "bg-violet-400" },
};

export default async function BusinessCrmPage({ params }: PageProps<"/crm-for/[slug]">) {
  const { slug } = await params;
  const b = businessCrms.find((x) => x.slug === slug);
  if (!b) notFound();

  // Sections alternate white / canvas whatever mix a page has.
  let n = 0;
  const next = (): "white" | "canvas" => (n++ % 2 === 0 ? "white" : "canvas");

  const [h1a, h1b] = b.headline ?? ["A Simple CRM for ", b.name];
  const title = <>{h1a}<span className={b.heroBackdrop ? "text-amber-300" : "text-primary"}>{h1b}</span></>;
  const buttons = (light = false) => (
    <div className={`mt-8 flex flex-wrap gap-3 ${b.heroImage ? "" : "justify-center"}`}>
      <ButtonLink href={site.registerUrl} variant={light ? "light" : "primary"}>Start free trial <Icon name="arrow" className="size-4" /></ButtonLink>
      <ButtonLink href="#demo" variant={light ? "ghost" : "line"}>Get a demo</ButtonLink>
    </div>
  );

  const typesBlock = (t: NonNullable<typeof b.types>) => (
    <Section tone={next()}>
      <SectionHead title={t.title} lede={t.lede} />
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {t.items.map((it, i) => (
          <Reveal key={it.label} delay={i * 60} className="h-full">
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-canvas p-5 text-center transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-[var(--shadow-card)]">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary"><Icon name={it.icon} className="size-5" /></span>
              <span className="text-sm font-bold text-ink">{it.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );

  return (
    <>
      {b.heroBackdrop ? (
        <section className="relative overflow-hidden">
          <Image src={b.heroBackdrop.src} alt={b.heroBackdrop.alt} fill priority sizes="100vw" className="object-cover" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,10,40,.55)_0%,rgba(51,23,79,.7)_100%)]" />
          <Container className="relative py-24 text-center text-white md:py-36">
            {b.badge && <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ring-1 ring-white/30 backdrop-blur"><Icon name="pin" className="size-4" /> {b.badge}</p>}
            <h1 className="animate-rise mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">{title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">{b.lede}</p>
            {buttons(true)}
          </Container>
        </section>
      ) : (
        <section className="relative overflow-hidden bg-soft">
          <div aria-hidden className="absolute -left-24 top-10 size-72 animate-[blob_12s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
          <div aria-hidden className="absolute -right-20 bottom-0 size-80 animate-[blob_15s_ease-in-out_infinite_reverse] rounded-full bg-warn/20 blur-3xl" />
          {b.floats.map((ic, i) => (
            <span key={i} aria-hidden className={`absolute hidden size-12 animate-float place-items-center rounded-2xl bg-gradient-to-br from-primary to-deep-2 text-white shadow-[var(--shadow-lift)] md:grid ${floatPos[i]}`} style={{ animationDelay: `${i * 0.8}s` }}><Icon name={ic} className="size-6" /></span>
          ))}
          {b.heroImage ? (
            <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
              <div className="animate-rise">
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">{title}</h1>
                <p className="mt-6 max-w-xl text-lg text-muted">{b.lede}</p>
                {buttons()}
              </div>
              <div className="animate-rise overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-lift)] [animation-delay:150ms]">
                <Image src={b.heroImage.src} alt={b.heroImage.alt} width={1200} height={800} priority className="aspect-[4/3] h-auto w-full object-cover" />
              </div>
            </Container>
          ) : (
            <Container className="relative py-16 text-center md:py-24">
              <h1 className="animate-rise mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">{title}</h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{b.lede}</p>
              {buttons()}
            </Container>
          )}
        </section>
      )}

      {b.types && !b.types.late && typesBlock(b.types)}

      {b.pains && b.painTitle && (
        <Section tone={next()}>
          <SectionHead title={b.painTitle} lede={b.painLede} />
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
            {b.pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="h-full">
                <article className="h-full rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                  <span className={`grid size-10 place-items-center rounded-lg ${painTone[p.tone]}`}><Icon name={p.icon} className="size-5" /></span>
                  <h3 className="mt-4 font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {b.groups?.map((g) => (
        <Section key={g.title} tone={next()}>
          <SectionHead title={g.title} lede={g.lede} />
          <div className={`mx-auto grid max-w-6xl gap-5 md:grid-cols-2 ${g.cols === 3 || g.items.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}>
            {g.items.map((it, i) => {
              const t = tones[it.tone];
              return (
                <Reveal key={it.title} delay={i * 70} className="h-full">
                  <article className={`h-full rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${t.card}`}>
                    <div className="flex items-center gap-3">
                      <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${t.chip}`}><Icon name={it.icon} className="size-5" /></span>
                      <h3 className="text-lg font-bold leading-snug text-ink">{it.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-[15px] text-muted">
                      {it.points.map((pt) => <li key={pt} className="flex items-start gap-2.5"><span className={`mt-2 size-1.5 shrink-0 rounded-full ${t.dot}`} />{pt}</li>)}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Section>
      ))}

      <Section tone={next()}>
        <SectionHead title={b.featuresTitle} lede={b.featuresLede} />
        <div className={b.featuresImage ? "mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.15fr]" : "mx-auto max-w-6xl"}>
          {b.featuresImage && (
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-lift)]">
                  <Image src={b.featuresImage.src} alt={b.featuresImage.alt} width={1200} height={900} className="aspect-[4/5] h-auto w-full object-cover" />
                </div>
                <span className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-ink shadow-[var(--shadow-lift)]"><span className="grid size-8 place-items-center rounded-lg bg-success/10 text-success"><Icon name="bell" className="size-4" /></span>Reminder set</span>
              </div>
            </Reveal>
          )}
          <div className={`grid gap-5 ${b.featuresImage ? "sm:grid-cols-2" : b.features.length % 3 === 0 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
            {b.features.map((f, i) => {
              const t = f.tone && tones[f.tone];
              return (
                <Reveal key={f.title} delay={i * 70} className="h-full">
                  <article className={`h-full rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${t ? t.card : "border-line bg-white hover:border-primary/40"}`}>
                    <span className={`grid size-11 place-items-center rounded-xl ${t ? t.chip : "bg-gradient-to-br from-primary to-deep-2 text-white"}`}><Icon name={f.icon} className="size-5" /></span>
                    <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
                    <p className="mt-2 text-[15px] text-muted">{f.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {b.steps && b.stepsTitle && (
        <Section tone={next()}>
          <SectionHead title={b.stepsTitle} lede={b.stepsLede} />
          <ol className="mx-auto grid max-w-5xl gap-6 rounded-3xl bg-soft p-6 md:grid-cols-3 md:p-8">
            {b.steps.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <span className={`mx-auto grid size-14 place-items-center rounded-full bg-gradient-to-br text-xl font-bold text-white shadow-[var(--shadow-card)] ${stepGrad[i % 3]}`}>{i + 1}</span>
                <h3 className="mt-4 font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
                {i < b.steps!.length - 1 && <Icon name="arrow" className="absolute -right-4 top-4 hidden size-5 text-primary/50 md:block" />}
              </li>
            ))}
          </ol>
        </Section>
      )}

      {b.types?.late && typesBlock(b.types)}

      {b.workStyle && (
        <Section tone={next()}>
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{b.workStyle.title}</h2>
              <p className="mt-4 text-muted">{b.workStyle.text}</p>
              <ul className="mt-5 space-y-3 text-[15px] text-ink">
                {b.workStyle.points.map((pt) => <li key={pt} className="flex gap-3"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success text-white"><Icon name="check" className="size-3.5" /></span>{pt}</li>)}
              </ul>
            </div>
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-lift)]">
                <Image src={b.workStyle.image.src} alt={b.workStyle.image.alt} width={1200} height={800} className="aspect-[4/3] h-auto w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      {b.journey && (
        <Section tone={next()}>
          <SectionHead title={b.journey.title} lede={b.journey.lede} />
          <ol className="mx-auto max-w-2xl space-y-4">
            {b.journey.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <li className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]" style={{ marginLeft: `${(i % 3) * 18}px` }}>
                  <span className={`grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${stepGrad[i % 3]}`}>{i + 1}</span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Step {i + 1}</p>
                    <h3 className="font-bold text-ink">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>
      )}

      {b.compare && (
        <Section tone={next()}>
          <SectionHead title={b.compare.title} lede={b.compare.lede} />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <h3 className="flex items-center gap-3 font-bold text-ink"><span className="grid size-9 place-items-center rounded-full bg-red-50 text-red-500"><Icon name="close" className="size-4" /></span>{b.compare.beforeTitle}</h3>
                <ul className="mt-5 space-y-3 text-[15px] text-muted">
                  {b.compare.before.map((t) => <li key={t} className="flex gap-3"><Icon name="close" className="mt-1 size-4 shrink-0 text-red-500" />{t}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100} className="h-full">
              <div className="relative h-full rounded-2xl border-2 border-success/40 bg-white p-6">
                <span className="absolute -top-3 right-4 rounded-full bg-success px-3 py-0.5 text-[11px] font-bold text-white">With Softmark</span>
                <h3 className="flex items-center gap-3 font-bold text-ink"><span className="grid size-9 place-items-center rounded-full bg-success/10 text-success"><Icon name="check" className="size-4" /></span>{b.compare.afterTitle}</h3>
                <ul className="mt-5 space-y-3 text-[15px] text-muted">
                  {b.compare.after.map((t) => <li key={t} className="flex gap-3"><Icon name="check" className="mt-1 size-4 shrink-0 text-success" />{t}</li>)}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      {b.table && (
        <Section tone={next()}>
          <SectionHead title={b.table.title} lede={b.table.lede} />
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-[1fr_90px_90px] bg-soft px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary sm:grid-cols-[1fr_140px_140px]">
              <span>Feature</span><span className="text-center">{b.table.usLabel}</span><span className="text-center text-muted">{b.table.themLabel}</span>
            </div>
            {b.table.rows.map((r) => (
              <div key={r} className="grid grid-cols-[1fr_90px_90px] items-center border-t border-hair px-5 py-3 text-[15px] text-ink sm:grid-cols-[1fr_140px_140px]">
                <span>{r}</span>
                <span className="grid place-items-center"><span className="grid size-6 place-items-center rounded-full bg-success/15 text-success"><Icon name="check" className="size-4" /></span></span>
                <span className="grid place-items-center"><span className="grid size-6 place-items-center rounded-full bg-red-50 text-red-500"><Icon name="close" className="size-4" /></span></span>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Faq items={b.faqs} title={b.faqTitle} lede={b.faqLede} tone={next()} />
      <DemoCta title={b.ctaTitle} lede={b.ctaLede} />
    </>
  );
}
