import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DemoCta } from "@/components/sections/DemoCta";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { fmtDate, postBySlug, posts } from "@/lib/blog";

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = postBySlug(slug);
  return p ? { title: p.title, description: p.excerpt, alternates: { canonical: `/blog/${p.slug}` } } : {};
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  return (
    <>
      <section className={`relative overflow-hidden bg-gradient-to-br text-white ${post.grad}`}>
        <div aria-hidden className="absolute -right-16 -top-16 size-72 rounded-full bg-white/10" />
        <Container className="relative max-w-3xl py-14 md:py-20">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white"><Icon name="arrow" className="size-4 rotate-180" /> All articles</Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-white/80">{post.tag}</p>
          <h1 className="mt-3 animate-rise text-3xl font-bold leading-tight tracking-tight md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-white/80">{fmtDate(post.date)} &middot; {post.read} min read</p>
        </Container>
      </section>

      <article className="bg-white py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xl leading-relaxed text-ink">{post.excerpt}</p>
          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-muted">
            {post.body.map((b, i) =>
              "h" in b ? <h2 key={i} className="pt-4 text-2xl font-bold text-ink">{b.h}</h2>
              : "ul" in b ? (
                <ul key={i} className="space-y-3">
                  {b.ul.map((li) => <li key={li} className="flex gap-3"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-success/15 text-success"><Icon name="check" className="size-3" /></span>{li}</li>)}
                </ul>
              ) : <p key={i}>{b.p}</p>,
            )}
          </div>
        </Container>
      </article>

      <section className="bg-canvas py-14">
        <Container className="max-w-3xl">
          <h2 className="text-xl font-bold text-ink">Keep reading</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {more.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-3xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br text-white ${p.grad}`}><Icon name={p.icon} className="size-5" /></span>
                <h3 className="mt-3 font-bold text-ink">{p.title}</h3>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-primary">Read <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <DemoCta title="See it on your own leads." />
    </>
  );
}
