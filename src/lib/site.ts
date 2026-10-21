import { CRM_BASE } from "./crm";

/** Single source of truth for navigation + brand. Add a page = add one entry here (+ its app/ folder). */
export const site = {
  name: "Softmark CRM",
  company: "Softmark Web Solutions",
  tagline: "Lead to invoice, on one line",
  description:
    "Softmark CRM brings leads from Facebook, IVR and spreadsheets into one list, then carries every deal from first call to GST invoice.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Where "Sign in" goes: the existing CRM app. */
  appUrl: process.env.NEXT_PUBLIC_CRM_APP_URL ?? `${CRM_BASE}/login`,
  /** Where "Register" / "Start free trial" go. */
  registerUrl: process.env.NEXT_PUBLIC_CRM_REGISTER_URL ?? `${CRM_BASE}/register`,
};

import { modules } from "./modules";

/** The one plan on the pricing page. Change the number or period here; the page and metadata follow. */
export const pricing = {
  price: 99,
  period: "month",
  // Core of the product. Confirm this list against what the ₹99 plan actually includes.
  features: ["Leads from every source in one list", "Calling panel with call history", "Follow-up tasks and reminders", "Android caller app", "Lead rating and status tracking"],
};
import { hrModules } from "./hr-modules";

import type { IconName } from "@/components/ui/Icon";

export type NavItem = { label: string; href: string; icon?: IconName; desc?: string; grad?: string };

/** Pages not built yet are listed in `upcoming` so the footer/architecture is ready; promote to `primaryNav` when shipped. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Lead Management", href: "/lead-management", icon: "inbox" },
  { label: "HR Software", href: "/hr", icon: "users" },
  { label: "Pricing", href: "/pricing", icon: "receipt" },
];

/** Two products, two colour themes (see [data-theme] in globals.css). */
export type Theme = "crm" | "hr";
export const themeForPath = (pathname: string): Theme => (pathname === "/hr" || pathname.startsWith("/hr/") ? "hr" : "crm");

const mod = (slug: string): NavItem => {
  const m = modules.find((x) => x.slug === slug)!;
  return { label: m.name, href: `/modules/${m.slug}`, icon: m.icon, desc: m.blurb, grad: m.grad };
};

/** Three equal columns of three. */
export const featureMenu: { title: string; href: string; links: NavItem[] }[] = [
  {
    title: "Sell",
    href: "/",
    links: [
      { label: "Lead Management", href: "/lead-management", icon: "inbox", desc: "Every source, one list", grad: "from-blue-500 to-indigo-600" },
      mod("calling"),
      mod("follow-ups"),
    ],
  },
  { title: "Engage & operate", href: "/#modules", links: [mod("whatsapp"), mod("billing"), mod("reports")] },
  {
    title: "HR & Workforce",
    href: "/hr",
    links: hrModules.map((h) => ({ label: h.name, href: `/hr/${h.slug}`, icon: h.icon, desc: h.blurb, grad: h.grad })),
  },
];

export const upcoming: NavItem[] = [
  // About, Features, Industries, Pricing, FAQ, Privacy, Terms ... (phase 2)
];

export const footerGroups: { title: string; links: NavItem[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Lead Management", href: "/lead-management" },
      { label: "Industries", href: "/industries" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      ...modules.map((m) => ({ label: m.name, href: `/modules/${m.slug}` })),
    ],
  },
  {
    title: "HR Software",
    links: [
      { label: "HR overview", href: "/hr" },
      ...hrModules.map((h) => ({ label: h.name, href: `/hr/${h.slug}` })),
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Start free trial", href: site.registerUrl },
      { label: "Request a demo", href: "/#demo" },
      { label: "Sign in", href: site.appUrl },
    ],
  },
];
