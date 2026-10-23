import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { DemoCta } from "@/components/sections/DemoCta";
import { IndustriesSection } from "@/components/sections/IndustriesSection";

export const metadata: Metadata = {
  title: "Industries",
  description: "One CRM for automotive, dealers, insurance, loans, solar, property and health care teams.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-soft">
        <div aria-hidden className="absolute -left-20 top-0 size-72 animate-[blob_14s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="absolute -right-16 bottom-0 size-72 animate-[blob_17s_ease-in-out_infinite_reverse] rounded-full bg-warn/20 blur-3xl" />
        <Container className="relative py-14 text-center md:py-20">
          <h1 className="animate-rise text-4xl font-bold tracking-tight text-ink md:text-6xl">One CRM, Many Industries</h1>
          <nav aria-label="Breadcrumb" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold">
            <Link href="/" className="text-muted hover:text-primary">Home</Link>
            <Icon name="arrow" className="size-3.5 text-subtle" />
            <span className="text-primary" aria-current="page">Industries</span>
          </nav>
        </Container>
      </section>
      <IndustriesSection showAll={false} />
      <DemoCta />
    </>
  );
}
