"use client";

import { useEffect, useRef, useState } from "react";
import { Section, SectionHead } from "@/components/ui/Section";

const stops = [
  { t: "Capture", d: "Facebook, IVR, CSV, manual" },
  { t: "Assign", d: "Campaign rules pick the agent" },
  { t: "Call", d: "Log the outcome, update status" },
  { t: "Follow up", d: "Callbacks and WhatsApp" },
  { t: "Approve", d: "Deal sign-off before it ships" },
  { t: "Invoice", d: "GST invoice, stock updates" },
];
// Wavy "metro line" through six stops (viewBox 1000x120).
const xs = [60, 240, 420, 580, 760, 940];
const ys = [80, 80, 36, 80, 36, 36];
const path = `M${xs[0]} ${ys[0]} H${xs[1]} L${xs[2] - 30} ${ys[2]} H${xs[2]} H${xs[3] - 30} L${xs[3]} ${ys[3]} H${xs[4] - 30} L${xs[4]} ${ys[4]} H${xs[5]}`;

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Section id="how-it-works" tone="white">
      <SectionHead eyebrow="Line 01 · Lead → Invoice" title="Six stops. No transfers." lede="The lead stays on one line the whole way." />
      <div ref={ref}>
        <svg viewBox="0 0 1000 120" className="hidden w-full md:block" role="img" aria-label="Lead journey: capture, assign, call, follow up, approve, invoice">
          <path d={path} fill="none" stroke="var(--color-hair)" strokeWidth="10" strokeLinejoin="round" />
          <path d={path} fill="none" stroke="var(--color-primary)" strokeWidth="5" strokeLinejoin="round" pathLength={1}
            strokeDasharray={1} strokeDashoffset={on ? 0 : 1} style={{ transition: "stroke-dashoffset 2.6s ease-in-out" }} />
          {xs.map((x, k) => (
            <circle key={k} cx={x} cy={ys[k]} r="11" fill="#fff" stroke="var(--color-primary)" strokeWidth="5"
              style={{ opacity: on ? 1 : 0, transform: on ? "scale(1)" : "scale(.4)", transformOrigin: `${x}px ${ys[k]}px`, transition: `all .4s ${0.3 + k * 0.4}s` }} />
          ))}
        </svg>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-6 md:gap-3">
          {stops.map((s, k) => (
            <li key={s.t} className="text-center" style={{ opacity: on ? 1 : 0.15, transform: on ? "none" : "translateY(10px)", transition: `all .5s ${0.3 + k * 0.4}s` }}>
              <p className="text-xs font-bold text-primary">0{k + 1}</p>
              <p className="font-bold text-ink">{s.t}</p>
              <p className="mt-1 text-sm text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
