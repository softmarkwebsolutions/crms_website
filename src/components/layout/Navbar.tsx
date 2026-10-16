"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { featureMenu, primaryNav, site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <Container className="!max-w-[1240px] !px-0">
        <div className="relative flex h-[68px] items-center justify-between gap-4 rounded-2xl border border-line bg-white/85 px-4 shadow-[0_10px_30px_-12px_rgba(51,23,79,.25)] backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
            <Image src="/images/softconnect-logo.png" alt={site.name} width={830} height={585} className="h-12 w-auto mix-blend-multiply" priority />
            <span className="hidden rounded-full border border-primary/30 bg-soft px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-primary sm:inline">
              {pathname.startsWith("/hr") ? "HR" : "CRM"}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-line bg-canvas/70 p-1 md:flex">
            <div className="group">
              <button type="button" className="flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold text-ink transition hover:bg-white hover:text-primary group-hover:bg-white group-hover:text-primary" aria-haspopup="true">
                <Icon name="layers" className="size-4 text-primary" /> Features <Icon name="arrow" className="size-3 rotate-90 transition group-hover:-rotate-90" />
              </button>
              <div className="invisible absolute inset-x-0 top-full pt-3 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-lift)]">
                  <div className="grid grid-cols-3 gap-6 p-6">
                    {featureMenu.map((g) => (
                      <div key={g.title}>
                        <Link href={g.href} className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                          <span className="h-px w-5 bg-primary/40" />{g.title}
                        </Link>
                        <ul className="space-y-1">
                          {g.links.map((l) => (
                            <li key={l.label}>
                              <Link href={l.href} className="group/i flex items-center gap-3 rounded-xl p-2 transition hover:bg-soft">
                                <span className={`grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-[0_8px_16px_-8px_rgba(0,0,0,.4)] transition group-hover/i:-rotate-6 group-hover/i:scale-110 ${l.grad ?? "from-primary to-deep-2"}`}>
                                  {l.icon && <Icon name={l.icon} className="size-5" />}
                                </span>
                                <span><span className="block text-sm font-bold text-ink">{l.label}</span><span className="block text-xs text-muted">{l.desc}</span></span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-4 bg-[linear-gradient(135deg,var(--color-deep),var(--color-deep-2))] px-6 py-3 text-sm text-white">
                    <span className="flex items-center gap-2"><Icon name="bolt" className="size-4 text-warn" /> Not sure where to start? We&apos;ll walk you through it.</span>
                    <Link href="/#demo" className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-primary">Schedule Demo</Link>
                  </div>
                </div>
              </div>
            </div>

            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold transition ${
                    active ? "bg-gradient-to-r from-primary to-deep-2 text-white shadow-[0_8px_18px_-8px_var(--t-glow)]" : "text-ink hover:bg-white hover:text-primary"
                  }`}
                >
                  {item.icon && <Icon name={item.icon} className={`size-4 ${active ? "" : "text-primary"}`} />}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ButtonLink href={site.appUrl} variant="line" className="!px-4 !py-2.5">Login</ButtonLink>
            <ButtonLink href={site.registerUrl} variant="line" className="!px-4 !py-2.5">Register</ButtonLink>
            <ButtonLink href="/#demo" className="!px-4 !py-2.5"><Icon name="calendar" className="size-4" /> Schedule Demo</ButtonLink>
          </div>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="mt-2 rounded-2xl border border-line bg-white p-3 shadow-[var(--shadow-lift)] md:hidden">
            {[...primaryNav, ...featureMenu.flatMap((g) => g.links)].map((item) => (
              <Link key={item.label + item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-bold text-body hover:bg-soft">
                <span className={`grid size-8 place-items-center rounded-lg bg-gradient-to-br text-white ${item.grad ?? "from-primary to-deep-2"}`}>{item.icon && <Icon name={item.icon} className="size-4" />}</span>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <ButtonLink href={site.appUrl} variant="line" className="flex-1">Login</ButtonLink>
              <ButtonLink href={site.registerUrl} variant="line" className="flex-1">Register</ButtonLink>
              <ButtonLink href="/#demo" className="flex-1" onClick={() => setOpen(false)}>Demo</ButtonLink>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
