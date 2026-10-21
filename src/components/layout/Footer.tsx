import Image from "next/image";
import Link from "next/link";
import { footerGroups, site } from "@/lib/site";
import { Container } from "@/components/ui/Section";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[linear-gradient(135deg,#ffffff_0%,#fff4ea_55%,#f4edfb_100%)] text-muted">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <span className="inline-block">
            <Image src="/images/softcrms-logo.png" alt="SoftCRMS" width={1075} height={795} className="h-16 w-auto mix-blend-multiply" />
          </span>
          <p className="mt-4 max-w-sm text-sm">{site.description}</p>
        </div>
        {footerGroups.map((g) => (
          <nav key={g.title} aria-label={g.title}>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-ink">{g.title}</h2>
            <ul className="space-y-2 text-sm">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-primary">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>
      <div className="border-t border-line py-5 text-center text-xs">
        © {site.company}. All rights reserved.
      </div>
    </footer>
  );
}
