"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { featureMenu, primaryNav, site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";

export function Navbar() {
  const pathname = usePathname();
  // A menu counts as open only on the page it was opened on, so navigating closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null); // mobile menu
  const [megaAt, setMegaAt] = useState<string | null>(null); // Features menu, opened by click
  const open = openAt === pathname;
  const mega = megaAt === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) => setOpenAt((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));
  const setMega = (v: boolean | ((o: boolean) => boolean)) => setMegaAt((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));
  const headerRef = useRef<HTMLElement>(null);

  // Close the Features menu on Escape or a click outside the header.
  useEffect(() => {
    if (!mega) return;
    const onDown = (e: MouseEvent) => { if (!headerRef.current?.contains(e.target as Node)) setMegaAt(null); };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaAt(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [mega]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-[0_6px_24px_-14px_rgba(51,23,79,.35)] backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 rounded-lg focus-visible:outline-offset-4" aria-label={`${site.name} home`}>
          <Image src="/images/softcrms-logo.png" alt="SoftCRMS" width={1075} height={795} className="h-14 w-auto mix-blend-multiply" priority />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={mega}
            aria-controls="mega-menu"
            onClick={() => setMega((m) => !m)}
            className={`flex items-center gap-2 rounded-full whitespace-nowrap px-3.5 py-2 text-sm font-bold transition ${mega ? "bg-soft text-primary" : "text-ink hover:bg-canvas hover:text-primary"}`}
          >
            <Icon name="layers" className="size-4 text-primary" /> Features <Icon name="arrow" className={`size-3 transition ${mega ? "-rotate-90" : "rotate-90"}`} />
          </button>

          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2 rounded-full whitespace-nowrap px-3.5 py-2 text-sm font-bold transition ${
                  active ? "bg-gradient-to-r from-primary to-deep-2 text-white shadow-[0_8px_18px_-8px_var(--t-glow)]" : "text-ink hover:bg-canvas hover:text-primary"
                }`}
              >
                {item.icon && <Icon name={item.icon} className={`size-4 ${active ? "" : "text-primary"}`} />}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <ButtonLink href={site.appUrl} variant="line" className="!px-4 !py-2.5 whitespace-nowrap">Login</ButtonLink>
          <ButtonLink href={site.registerUrl} variant="line" className="!px-4 !py-2.5 whitespace-nowrap">Register</ButtonLink>
          <ButtonLink href="/#demo" className="!px-4 !py-2.5 whitespace-nowrap"><Icon name="calendar" className="size-4" /> Schedule Demo</ButtonLink>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-line xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </Container>

      {/* Features mega menu: three equal columns, opens on click and spans the header width. */}
      {mega && (
        <div id="mega-menu" className="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[var(--shadow-lift)] xl:block">
          <Container className="animate-rise !py-0">
            <div className="grid grid-cols-3 gap-8 py-7">
              {featureMenu.map((g) => (
                <div key={g.title}>
                  <Link href={g.href} className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                    <span className="h-px w-5 bg-primary/40" />{g.title}
                  </Link>
                  <ul className="space-y-1">
                    {g.links.map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} onClick={() => setMega(false)} className="group/i flex items-center gap-3 rounded-xl p-2 transition hover:bg-soft">
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
          </Container>
          <div className="bg-[linear-gradient(135deg,var(--color-deep),var(--color-deep-2))] text-sm text-white">
            <Container className="flex items-center justify-between gap-4 py-3">
              <span className="flex items-center gap-2"><Icon name="bolt" className="size-4 text-warn" /> Not sure where to start? We&apos;ll walk you through it.</span>
              <Link href="/#demo" className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-primary">Schedule Demo</Link>
            </Container>
          </div>
        </div>
      )}

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-white xl:hidden">
          <Container className="py-3">
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
          </Container>
        </nav>
      )}
    </header>
  );
}
