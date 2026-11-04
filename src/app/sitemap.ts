import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts } from "@/lib/blog";
import { modules } from "@/lib/modules";
import { hrModules } from "@/lib/hr-modules";
import { industries } from "@/lib/industries";
import { locations } from "@/lib/locations";
import { businessCrms } from "@/lib/business-crms";

const staticPaths = [
  "/", "/lead-management", "/features", "/pricing", "/industries", "/hr", "/partner", "/contact", "/faq", "/blog",
  "/emi-calculator", "/gst-calculator", "/income-tax-age-calculator", "/tds-late-payment-interest", "/tds-return-due-date-penalty",
  "/privacy-policy", "/refund-policy", "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();
  const entry = (path: string, priority: number, lastModified: Date = now): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  });

  return [
    ...staticPaths.map((p) => entry(p, p === "/" ? 1 : 0.8)),
    ...modules.map((m) => entry(`/modules/${m.slug}`, 0.7)),
    ...hrModules.map((m) => entry(`/hr/${m.slug}`, 0.7)),
    ...industries.map((i) => entry(`/industries/${i.slug}`, 0.7)),
    ...businessCrms.map((b) => entry(`/crm-for/${b.slug}`, 0.7)),
    ...locations.map((l) => entry(`/crm-software-in/${l.slug}`, 0.7)),
    ...posts.map((p) => entry(`/blog/${p.slug}`, 0.6, new Date(`${p.date}T00:00:00Z`))),
  ];
}
