import type { ReactNode } from "react";

type Net = { name: string; href: string; bg: string; glyph: ReactNode };

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Colour per network. Set a real URL with NEXT_PUBLIC_SOCIAL_<NAME> (e.g. NEXT_PUBLIC_SOCIAL_FACEBOOK) in .env. */
const env = (k: string, fallback: string) => process.env[`NEXT_PUBLIC_SOCIAL_${k}`] || fallback;

export const socials: Net[] = [
  { name: "Facebook", href: env("FACEBOOK", "https://www.facebook.com/"), bg: "bg-[#1877F2]", glyph: <path fill="currentColor" d="M14 8h2V5h-2.5C11.3 5 10 6.4 10 8.6V10H8v3h2v6h3v-6h2.2l.4-3H13V8.8c0-.5.2-.8 1-.8z" /> },
  { name: "Instagram", href: env("INSTAGRAM", "https://www.instagram.com/"), bg: "bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)]", glyph: <g {...stroke}><rect x="5" y="5" width="14" height="14" rx="4" /><circle cx="12" cy="12" r="3.2" /><path d="M16.6 7.4h.01" /></g> },
  { name: "LinkedIn", href: env("LINKEDIN", "https://www.linkedin.com/"), bg: "bg-[#0A66C2]", glyph: <g fill="currentColor"><circle cx="6.5" cy="6.8" r="1.6" /><rect x="5" y="9.5" width="3" height="9.5" /><path d="M10 9.5h3v1.4c.5-.9 1.6-1.6 3-1.6 2.6 0 3 1.7 3 3.9V19h-3v-5.2c0-1.2-.1-2.2-1.5-2.2S13 12.6 13 13.8V19h-3z" /></g> },
  { name: "X", href: env("X", "https://x.com/"), bg: "bg-black", glyph: <path {...stroke} strokeWidth={2.4} d="M5.5 5.5l13 13M18.5 5.5l-13 13" /> },
  { name: "YouTube", href: env("YOUTUBE", "https://www.youtube.com/"), bg: "bg-[#FF0000]", glyph: <path fill="currentColor" d="M10 8.5v7l6-3.5z" /> },
  { name: "WhatsApp", href: env("WHATSAPP", "https://wa.me/"), bg: "bg-[#25D366]", glyph: <g><path {...stroke} d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12z" /><path fill="currentColor" d="M9.5 9c.3 2 2.5 4.2 4.5 4.5l1-1.2-1.6-.9-.7.6c-.8-.3-1.6-1.1-1.9-1.9l.6-.7-.9-1.6z" /></g> },
];

export function SocialLinks() {
  return (
    <ul className="mt-5 flex flex-wrap gap-2.5" aria-label="Follow us">
      {socials.map((n) => (
        <li key={n.name}>
          <a href={n.href} target="_blank" rel="noopener noreferrer" aria-label={`${n.name} (opens in a new tab)`} title={n.name} className={`grid size-10 place-items-center rounded-xl text-white shadow-[0_8px_18px_-8px_rgba(0,0,0,.45)] transition duration-300 hover:-translate-y-1 hover:rotate-3 hover:shadow-[0_12px_22px_-8px_rgba(0,0,0,.55)] ${n.bg}`}>
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden>{n.glyph}</svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
