import type { Metadata } from "next";
import Link from "next/link";
import { DemoCta } from "@/components/sections/DemoCta";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Motion";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { MoreTools } from "@/components/ui/Calc";
import { fmtDate, posts } from "@/lib/blog";

export const metadata: Metadata = { title: "Blog", description: "Guides on lead management, calling, GST and TDS for small businesses.", alternates: { canonical: "/blog" } };

export default function BlogPage() {
  const [first, ...rest] = posts;
  return (
    <>
      <PageHero title="Blog" lede="Practical reading on leads, follow-ups, GST and TDS." crumb="Blog" />
      <section className="bg-canvas py-10 md:py-14">
        <Container className="space-y-5">
          <div className="flex flex-wrap items-center justify-center gap-2" aria-label="Topics">
            {[...new Set(posts.map((p) => p.tag))].map((t) => <span key={t} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-bold text-muted">{t}</span>)}
          </div>
          <Reveal>
            <Link href={`/blog/${first.slug}`} className="group grid overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:shadow-[var(--shadow-lift)] md:grid-cols-[0.6fr_1.4fr]">
              <div className={`relative grid min-h-36 place-items-center bg-gradient-to-br text-white ${first.grad}`}>
                <div aria-hidden className="absolute -right-10 -top-10 size-28 rounded-full bg-white/10" />
                <Icon name={first.icon} className="size-14 transition group-hover:scale-110" />
              </div>
              <div className="p-6 md:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Latest &middot; {first.tag}</p>
                <h2 className="mt-2 text-xl font-bold text-ink md:text-2xl">{first.title}</h2>
                <p className="mt-2 text-[15px] text-muted">{first.excerpt}</p>
                <p className="mt-3 text-sm text-subtle">{fmtDate(first.date)} &middot; {first.read} min read</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-primary">Read article <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
              </div>
            </Link>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100} className="h-full">
                <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                  <div className={`grid h-20 place-items-center bg-gradient-to-br text-white ${p.grad}`}><Icon name={p.icon} className="size-9 transition group-hover:rotate-6" /></div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{p.tag}</p>
                    <h3 className="mt-1.5 text-base font-bold leading-snug text-ink">{p.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm text-muted">{p.excerpt}</p>
                    <p className="mt-3 text-xs text-subtle">{fmtDate(p.date)} &middot; {p.read} min read</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <MoreTools current="" />
      <DemoCta title="Put these ideas to work." />
    </>
  );
}
