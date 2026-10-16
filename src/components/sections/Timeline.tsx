"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";

type Step = { icon: IconName; title: string; text: string; grad: string };

/** Zig-zag vertical timeline: the spine draws itself and each stop pops in as it enters view. */
export function Timeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    let raf = 0;
    const check = () => {
      raf = 0;
      const line = window.innerHeight * 0.82;
      let n = 0;
      items.forEach((it, i) => { if (it.getBoundingClientRect().top < line) n = i + 1; });
      setShown((c) => Math.max(c, n));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="relative mx-auto max-w-4xl">
      <span aria-hidden className="absolute bottom-6 left-6 top-6 w-1 -translate-x-1/2 rounded-full bg-line md:left-1/2" />
      <span aria-hidden className="absolute left-6 top-6 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary via-warn to-success transition-[height] duration-700 md:left-1/2"
        style={{ height: `calc(${Math.max(shown - 0.5, 0) / steps.length} * (100% - 3rem))` }} />
      <ol ref={ref} className="space-y-6 md:space-y-8">
        {steps.map((s, i) => {
          const on = shown > i, left = i % 2 === 0;
          return (
            <li key={s.title} className="relative grid grid-cols-[3rem_1fr] items-center gap-4 md:grid-cols-[1fr_3rem_1fr] md:gap-8">
              <span className={`relative z-10 grid size-12 place-items-center rounded-full bg-gradient-to-br text-white ring-4 ring-white transition duration-500 md:col-start-2 md:row-start-1 ${s.grad} ${on ? "scale-110 shadow-[0_12px_26px_-8px_rgba(0,0,0,.45)]" : "scale-95 shadow-md"}`}>
                <Icon name={s.icon} className="size-6" />
                {on && <span className="pulse-ring absolute inset-0 rounded-full bg-current opacity-30" />}
              </span>
              <div className={`group rounded-2xl border bg-white p-5 transition duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] md:row-start-1 ${left ? "md:col-start-1 md:text-right" : "md:col-start-3"} ${on ? "border-primary/30 shadow-[var(--shadow-card)]" : "border-line"}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.14em] text-primary ${left ? "md:justify-end" : ""} flex items-center gap-2`}>
                  <span className={`grid size-6 place-items-center rounded-full bg-gradient-to-br text-[11px] text-white ${s.grad}`}>{i + 1}</span> Step {i + 1}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{s.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
