"use client";

import { useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";

type Item = { icon: IconName; title: string; text: string; grad: string };
const K = 0.76, S = 720, R = 285, CW = 156, CH = 96;

/** Feature cards ride a slowly rotating ring (cards counter-rotate to stay upright); hover pauses it and shows the detail in the hub. */
export function FeatureOrbit({ items }: { items: Item[] }) {
  const [active, setActive] = useState<Item | null>(null);
  const pause = "group-hover/orbit:[animation-play-state:paused] group-focus-within/orbit:[animation-play-state:paused]";
  return (
    <div className="mx-auto hidden lg:block" style={{ width: S * K, height: S * K }}>
    <div className="group/orbit relative origin-top-left" style={{ width: S, height: S, transform: `scale(${K})` }}>
      <svg viewBox={`0 0 ${S} ${S}`} className="absolute inset-0 size-full" aria-hidden>
        <circle cx={S / 2} cy={S / 2} r={R} fill="none" stroke="var(--color-primary)" strokeOpacity=".25" strokeWidth="2" strokeDasharray="4 8" />
        <circle cx={S / 2} cy={S / 2} r={R - 70} fill="none" stroke="var(--color-hair)" strokeWidth="2" />
      </svg>

      <div className="absolute grid place-items-center rounded-full border border-line bg-soft p-8 text-center shadow-[var(--shadow-card)]" style={{ left: S / 2 - 150, top: S / 2 - 150, width: 300, height: 300 }}>
        {active ? (
          <div key={active.title} className="animate-rise">
            <span className={`mx-auto mb-3 grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white ${active.grad}`}><Icon name={active.icon} className="size-7" /></span>
            <p className="text-lg font-bold text-ink">{active.title}</p>
            <p className="mt-1 text-sm text-muted">{active.text}</p>
          </div>
        ) : (
          <div>
            <svg viewBox="0 0 120 50" className="mx-auto mb-2 w-28" aria-hidden>
              <polyline points="2,44 22,30 40,36 62,16 82,22 116,4" fill="none" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} style={{ animation: "dash-draw 3s ease-in-out infinite" }} />
            </svg>
            <p className="text-lg font-bold text-ink">Everything in one place</p>
            <p className="mt-1 text-sm text-muted">Hover a card to see what it does.</p>
          </div>
        )}
      </div>

      <div className={`absolute inset-0 animate-[orbit_70s_linear_infinite] ${pause}`}>
        {items.map((f, i) => {
          const a = (i / items.length) * 2 * Math.PI - Math.PI / 2;
          return (
            <button key={f.title} type="button" onMouseEnter={() => setActive(f)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(f)} onBlur={() => setActive(null)}
              className="absolute" style={{ left: S / 2 + R * Math.cos(a) - CW / 2, top: S / 2 + R * Math.sin(a) - CH / 2, width: CW, height: CH }}>
              <span className={`flex size-full animate-[orbit-rev_70s_linear_infinite] flex-col items-center justify-center gap-1.5 rounded-2xl border border-line bg-white p-3 shadow-[var(--shadow-card)] transition hover:border-primary hover:shadow-[var(--shadow-lift)] ${pause}`}>
                <span className={`grid size-10 place-items-center rounded-xl bg-gradient-to-br text-white ${f.grad}`}><Icon name={f.icon} className="size-5" /></span>
                <span className="text-center text-[13px] font-bold leading-tight text-ink">{f.title}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
    </div>
  );
}
