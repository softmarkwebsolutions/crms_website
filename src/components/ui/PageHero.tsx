import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";

/** Shared top banner for secondary pages: soft blobs, big title, breadcrumb. */
export function PageHero({ title, lede, crumb, children }: { title: string; lede?: string; crumb: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-soft">
      <div aria-hidden className="absolute -left-20 top-0 size-72 animate-[blob_14s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
      <div aria-hidden className="absolute -right-16 bottom-0 size-72 animate-[blob_17s_ease-in-out_infinite_reverse] rounded-full bg-warn/20 blur-3xl" />
      <Container className="relative py-14 text-center md:py-20">
        <h1 className="animate-rise text-4xl font-bold tracking-tight text-ink md:text-6xl">{title}</h1>
        {lede && <p className="mx-auto mt-3 max-w-2xl text-lg text-muted">{lede}</p>}
        {children}
        <nav aria-label="Breadcrumb" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold">
          <Link href="/" className="text-muted hover:text-primary">Home</Link>
          <Icon name="arrow" className="size-3.5 text-subtle" />
          <span className="text-primary" aria-current="page">{crumb}</span>
        </nav>
      </Container>
    </section>
  );
}
