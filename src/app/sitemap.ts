
import { MetadataRoute } from 'next'

const BASE_URL = 'https://softcrms.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  const staticPages = [
    { path: '', priority: 1.0 },
    { path: '/lead-management', priority: 0.8 },
    { path: '/features', priority: 0.8 },
    { path: '/pricing', priority: 0.9 },
    { path: '/industries', priority: 0.8 },
    { path: '/hr', priority: 0.8 },
    { path: '/partner', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/faq', priority: 0.7 },
    { path: '/blog', priority: 0.8 },
    { path: '/emi-calculator', priority: 0.6 },
    { path: '/gst-calculator', priority: 0.7 },
    { path: '/income-tax-age-calculator', priority: 0.6 },
    { path: '/tds-late-payment-interest', priority: 0.7 },
    { path: '/tds-return-due-date-penalty', priority: 0.7 },
    { path: '/privacy-policy', priority: 0.3 },
    { path: '/refund-policy', priority: 0.3 },
    { path: '/terms-and-conditions', priority: 0.3 },

    // Location landing pages
    { path: '/crm-software-in/india', priority: 0.9 },
    { path: '/crm-software-in/delhi', priority: 0.9 },
    { path: '/crm-software-in/mumbai', priority: 0.9 },
    { path: '/crm-software-in/bangalore', priority: 0.9 },
    { path: '/crm-software-in/hyderabad', priority: 0.9 },
     { path: '/crm-software-in/pune', priority: 0.9 },
    

    // CRM modules
    { path: '/modules/calling', priority: 0.7 },
    { path: '/modules/whatsapp', priority: 0.7 },
    { path: '/modules/follow-ups', priority: 0.7 },
    { path: '/modules/billing', priority: 0.7 },
    { path: '/modules/reports', priority: 0.7 },

    // HR pages
    { path: '/hr/attendance', priority: 0.7 },
    { path: '/hr/payroll', priority: 0.7 },
    { path: '/hr/recruitment', priority: 0.7 },

    // Industry pages
    { path: '/industries/automotive', priority: 0.7 },
    { path: '/industries/dealer', priority: 0.7 },
    { path: '/industries/insurance', priority: 0.7 },
    { path: '/industries/loan', priority: 0.7 },
    { path: '/industries/solar', priority: 0.7 },
    { path: '/industries/property-dealer', priority: 0.7 },
    { path: '/industries/health-care', priority: 0.7 },
  ]

  const blogPages = [
    {
      path: '/blog/manage-team-salaries-easily',
      lastModified: new Date('2026-11-14'),
    },
    {
      path: '/blog/one-list-for-every-lead-source',
      lastModified: new Date('2026-10-12'),
    },
    {
      path: '/blog/cgst-sgst-igst-explained',
      lastModified: new Date('2026-10-08'),
    },
    {
      path: '/blog/tds-late-payment-interest-guide',
      lastModified: new Date('2026-10-02'),
    },
    {
      path: '/blog/follow-up-habits-that-save-leads',
      lastModified: new Date('2026-09-25'),
    },
    {
      path: '/blog/gst-invoice-mistakes-to-avoid',
      lastModified: new Date('2026-09-18'),
    },
    {
      path: '/blog/how-to-onboard-new-calling-agents',
      lastModified: new Date('2026-09-10'),
    },
  ]

  const pages: MetadataRoute.Sitemap = [
    ...staticPages.map((page) => ({
      url: `${BASE_URL}${page.path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: page.priority,
    })),

    ...blogPages.map((page) => ({
      url: `${BASE_URL}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return pages
}
