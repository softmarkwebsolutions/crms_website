"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DemoForm } from "./DemoForm";
import { Icon } from "@/components/ui/Icon";

// Opens a few seconds after arrival, then again 30-40 s after each time it is closed.
// It waits (rechecking every 5 s) while the tab is hidden, the demo band is on screen, or another dialog is open.
const FIRST_MS = 8_000;
const RECHECK_MS = 5_000;
const nextDelay = () => 30_000 + Math.random() * 10_000;

export function ContactPopup() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const schedule = useCallback((ms: number) => {
    const tick = (wait: number) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        const demo = document.getElementById("demo")?.getBoundingClientRect();
        const demoVisible = !!demo && demo.top < innerHeight && demo.bottom > 0;
        if (document.hidden || demoVisible || document.querySelector('[role="dialog"]')) return tick(RECHECK_MS);
        setOpen(true);
      }, wait);
    };
    tick(ms);
  }, []);

  useEffect(() => {
    schedule(FIRST_MS);
    return () => clearTimeout(timer.current);
  }, [schedule]);

  const close = useCallback(() => {
    setOpen(false);
    schedule(nextDelay());
  }, [schedule]);

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && close();
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [open, close]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-ink/60 p-4 backdrop-blur-sm" onClick={close}>
      <div role="dialog" aria-modal="true" aria-label="Contact us" onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md animate-rise rounded-2xl bg-white p-6 shadow-[var(--shadow-lift)] md:p-8">
        <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 grid size-8 place-items-center rounded-full hover:bg-canvas"><Icon name="close" className="size-4" /></button>
        <h2 className="pr-8 text-xl font-bold text-ink">Have questions? Talk to us anytime.</h2>
        <p className="mb-5 mt-1 text-sm text-muted">Leave your name and mobile number and we&apos;ll call you back.</p>
        <DemoForm />
      </div>
    </div>
  );
}
