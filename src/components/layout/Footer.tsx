import Image from "next/image";
import Link from "next/link";
import { footerGroups, legalLinks, site } from "@/lib/site";
import { Container } from "@/components/ui/Section";
// import { SocialLinks } from "@/components/ui/Social";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[linear-gradient(135deg,#ffffff_0%,#fff4ea_55%,#f4edfb_100%)] text-muted">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        <div>
          <span className="inline-block">
            <Image src="/images/softcrms-logo.png" alt="SoftCRMS" width={1075} height={795} className="h-16 w-auto mix-blend-multiply" />
          </span>
          <p className="mt-4 max-w-sm text-sm">{site.description}</p>
          {/* Social links hidden for now. Add real URLs in .env (NEXT_PUBLIC_SOCIAL_*), then uncomment:
          <SocialLinks /> */}
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
      <div className="border-t border-line py-5 text-xs">
        <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {site.company}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {legalLinks.map((l) => <Link key={l.href} href={l.href} className="transition-colors hover:text-primary">{l.label}</Link>)}
          </nav>
        </Container>
      </div>
    </footer>
  );
}
