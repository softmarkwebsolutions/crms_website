import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://softcrms.com";

  const pages = [
    "",
    "/lead-management",
    "/pricing",
    "/features",
    "/industries",
    "/modules/calling",
    "/modules/whatsapp",
    "/modules/billing",
    "/modules/follow-ups",
    "/modules/reports",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}