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
            <Link href={`/blog/${first.slug}`} className="group flex items-center gap-5 rounded-2xl border border-line bg-white p-4 transition hover:border-primary/40 hover:shadow-[var(--shadow-card)] md:p-5">
              <span className={`hidden size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white sm:grid ${first.grad}`}><Icon name={first.icon} className="size-7" /></span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Latest &middot; {first.tag}</p>
                <h2 className="mt-1 text-lg font-bold leading-snug text-ink md:text-xl">{first.title}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{first.excerpt}</p>
                <p className="mt-2 text-xs text-subtle">{fmtDate(first.date)} &middot; {first.read} min read</p>
              </div>
              <Icon name="arrow" className="hidden size-5 shrink-0 text-primary transition group-hover:translate-x-1 md:block" />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <Link href={`/blog/${p.slug}`} className="group flex h-full gap-3.5 rounded-2xl border border-line bg-white p-4 transition hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white ${p.grad}`}><Icon name={p.icon} className="size-5" /></span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">{p.tag}</p>
                    <h3 className="mt-0.5 text-[15px] font-bold leading-snug text-ink">{p.title}</h3>
                    <p className="mt-1 line-clamp-2 text-[13px] text-muted">{p.excerpt}</p>
                    <p className="mt-2 text-xs text-subtle">{fmtDate(p.date)} &middot; {p.read} min read</p>
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
