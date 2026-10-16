"use client";

import { useEffect, useRef, useState } from "react";
import { DemoForm } from "./DemoForm";
import { Icon } from "@/components/ui/Icon";

/** Opens on the first scroll down, then again each time the visitor scrolls another STEP px down after closing it. */
const FIRST = 200, STEP = 900;

export function ContactPopup() {
  const [open, setOpen] = useState(false);
  const next = useRef(FIRST);
  const last = useRef(0);
  const isOpen = useRef(false);
  isOpen.current = open;
  useEffect(() => {
    const onScroll = () => {
      const y = scrollY, down = y > last.current;
      last.current = y;
      if (!down || isOpen.current || y < next.current) return;
      if (document.getElementById("demo")?.getBoundingClientRect().top! < innerHeight) return;
      next.current = y + STEP;
      setOpen(true);
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-ink/60 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div role="dialog" aria-modal="true" aria-label="Contact us" onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md animate-rise rounded-2xl bg-white p-6 shadow-[var(--shadow-lift)] md:p-8">
        <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 grid size-8 place-items-center rounded-full hover:bg-canvas"><Icon name="close" className="size-4" /></button>
        <h2 className="pr-8 text-xl font-bold text-ink">Have questions? Talk to us anytime.</h2>
        <p className="mb-5 mt-1 text-sm text-muted">Leave your details and we&apos;ll call you back.</p>
        <DemoForm />
      </div>
    </div>
  );
}
