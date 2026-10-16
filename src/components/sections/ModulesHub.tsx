import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { modules } from "@/lib/modules";

const W = 600, H = 500, CX = 300, CY = 290, R = 235;
const angles = [-70, -35, 0, 35, 70];
const rad = (d: number) => (d * Math.PI) / 180;

/** Modules fanned around the product, each a link to its page; arrows and the arc are animated SVG. */
export function ModulesHub() {
  const tiles = modules.slice(0, 5);
  return (
    <>
      <div className="mx-auto hidden md:block lg:h-[450px] lg:w-[540px]">
      <div className="relative mx-auto w-[600px] max-w-full lg:mx-0 lg:origin-top-left lg:scale-90" style={{ height: H }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" aria-hidden>
          {angles.map((a) => {
            const s = Math.sin(rad(a)), c = -Math.cos(rad(a));
            return <line key={a} x1={CX + s * 178} y1={CY + c * 178} x2={CX + s * 112} y2={CY + c * 112} stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" className="dash-line" />;
          })}
          <path d="M120 385 Q300 520 480 385" fill="none" stroke="var(--color-primary)" strokeWidth="4" strokeOpacity=".35" />
          <path d="M120 385 Q300 520 480 385" fill="none" stroke="var(--color-primary)" strokeWidth="4" className="dash-line" />
          {[[120, 385], [300, 452], [480, 385]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="8" fill="#fff" stroke="var(--color-primary)" strokeWidth="4" />)}
          <circle r="6" fill="var(--color-warn)"><animateMotion dur="4s" repeatCount="indefinite" path="M120 385 Q300 520 480 385" /></circle>
        </svg>

        <div className="absolute grid place-items-center" style={{ left: CX - 95, top: CY - 95, width: 190, height: 190 }}>
          <span className="pulse-ring absolute inset-0 rounded-full bg-primary/20" />
          <span className="relative grid size-full place-items-center rounded-full border border-line bg-soft shadow-[var(--shadow-card)]">
            <Image src="/images/softconnect-logo.png" alt="Softconnect CRM" width={830} height={585} className="w-28 mix-blend-multiply" />
          </span>
        </div>

        {tiles.map((m, i) => {
          const a = angles[i];
          return (
            <Link key={m.slug} href={`/modules/${m.slug}`}
              className="group absolute grid h-[88px] w-28 place-items-center rounded-2xl border border-line bg-soft text-center shadow-[var(--shadow-card)] transition hover:z-10 hover:!scale-110 hover:border-primary hover:bg-white"
              style={{ left: CX + R * Math.sin(rad(a)) - 56, top: CY - R * Math.cos(rad(a)) - 44, transform: `rotate(${a / 3}deg)`, animation: `pop .7s ${i * 120}ms both` }}>
              <span>
                <Icon name={m.icon} className="mx-auto size-8 text-primary transition group-hover:scale-110" />
                <span className="mt-1 block text-sm font-bold text-ink">{m.name}</span>
              </span>
            </Link>
          );
        })}

        {[["Agent", 120], ["Team leader", 300], ["Admin", 480]].map(([t, x]) => (
          <span key={t} className="absolute -translate-x-1/2 text-xs font-bold uppercase tracking-wider text-muted" style={{ left: x as number, top: (x === 300 ? 470 : 400) }}>{t}</span>
        ))}
      </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:hidden">
        {tiles.map((m) => (
          <Link key={m.slug} href={`/modules/${m.slug}`} className="rounded-2xl border border-line bg-soft p-4 text-center">
            <Icon name={m.icon} className="mx-auto size-7 text-primary" />
            <span className="mt-1 block text-sm font-bold text-ink">{m.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
