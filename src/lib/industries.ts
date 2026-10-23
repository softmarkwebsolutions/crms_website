import type { IconName } from "@/components/ui/Icon";

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  grad: string;
  short: string;
  headline: string;
  lede: string;
  /** Example custom fields a company in this industry would add (the CRM lets every company define its own). */
  fields: string[];
  /** Example statuses; every company shapes its own. */
  statuses: string[];
  /** Demo lead shown in the page hero. */
  lead: { name: string; line: string; rows: [string, string][] };
  /** Module slugs from lib/modules.ts and why they matter here. */
  uses: { slug: string; why: string }[];
};

// Copy is built from what the product already does (custom fields and statuses per company, Facebook/IVR/CSV intake,
// calling, follow-ups, WhatsApp, billing). Automotive and Dealer lean on the vehicle, dealer-sharing and pincode features the CRM started with.
// Everything else is written from those general capabilities, so check it against real customers before launch.
export const industries: Industry[] = [
  {
    slug: "automotive", name: "Automotive", icon: "car", grad: "from-orange-400 to-amber-500",
    short: "Tractors, trucks and two-wheelers, from enquiry to invoice.",
    headline: "Every enquiry, from first call to delivery.",
    lede: "It started on tractor, truck and two-wheeler sales. Capture leads from Facebook and IVR, target by pincode, and keep brand and model on the lead.",
    fields: ["Brand", "Model", "Pincode", "Exchange vehicle", "Test drive date"],
    statuses: ["Fresh Lead", "Test drive booked", "Quotation sent", "Booked", "Delivered"],
    lead: { name: "Ramesh Yadav", line: "Tractor loan · Jaipur", rows: [["Brand", "Mahindra"], ["Model", "575 DI"], ["Pincode", "302001"]] },
    uses: [{ slug: "calling", why: "Vehicle and valuation lookup while the customer is on the line." }, { slug: "whatsapp", why: "Festive offers with the customer's name on the image." }, { slug: "billing", why: "GST invoices, with stock that updates itself." }],
  },
  {
    slug: "dealer", name: "Dealer", icon: "store", grad: "from-teal-500 to-emerald-600",
    short: "Share leads with dealers and find the nearest one.",
    headline: "Send every lead to the right dealer.",
    lede: "Share leads with your dealers, look up the nearest showroom and keep a brand and model catalogue, all from one list.",
    fields: ["Dealer", "Territory", "Brand", "Model", "Lead source"],
    statuses: ["Fresh Lead", "Shared with dealer", "Visit scheduled", "Deal closed", "Not interested"],
    lead: { name: "Gurpreet Singh", line: "Harvester · Ludhiana", rows: [["Dealer", "Singh Motors"], ["Territory", "Punjab"], ["Brand", "Kubota"]] },
    uses: [{ slug: "calling", why: "Nearest-dealer lookup from the calling panel." }, { slug: "follow-ups", why: "A follow-up on every shared lead until the dealer responds." }, { slug: "reports", why: "See which dealer converts and which one is slow." }],
  },
  {
    slug: "insurance", name: "Insurance", icon: "shield", grad: "from-blue-500 to-indigo-600",
    short: "Quotes, documents and renewals, never missed.",
    headline: "Close policies and never miss a renewal.",
    lede: "Track a prospect from quote to policy, and set a follow-up for every renewal so nothing lapses.",
    fields: ["Policy type", "Sum insured", "Renewal date", "Family members", "Nominee"],
    statuses: ["Fresh Lead", "Quote shared", "Documents pending", "Policy issued", "Renewal due"],
    lead: { name: "Anita Desai", line: "Health cover · Surat", rows: [["Policy", "Family floater"], ["Sum insured", "₹10 lakh"], ["Renewal", "12 Nov"]] },
    uses: [{ slug: "follow-ups", why: "Renewal reminders that stay until acknowledged." }, { slug: "whatsapp", why: "Renewal and quote templates sent in bulk." }, { slug: "calling", why: "Call history on every policy holder." }],
  },
  {
    slug: "loan", name: "Loan", icon: "wallet", grad: "from-pink-500 to-rose-600",
    short: "From enquiry to sanction, with documents tracked.",
    headline: "Move loan enquiries to sanction faster.",
    lede: "Capture enquiries from ads and IVR, assign them to the right officer and track each one through documents and sanction.",
    fields: ["Loan type", "Amount", "Monthly income", "City", "Documents received"],
    statuses: ["Fresh Lead", "Documents collected", "Under review", "Sanctioned", "Disbursed"],
    lead: { name: "Priya Menon", line: "Personal loan · Kochi", rows: [["Loan type", "Personal"], ["Amount", "₹5,00,000"], ["Income", "₹60,000"]] },
    uses: [{ slug: "calling", why: "Every call and outcome logged against the applicant." }, { slug: "follow-ups", why: "Callbacks for pending documents." }, { slug: "reports", why: "Officer-wise and campaign-wise conversion." }],
  },
  {
    slug: "solar", name: "Solar", icon: "sun", grad: "from-amber-400 to-orange-500",
    short: "Site visits, quotes and installations in one pipeline.",
    headline: "Turn solar enquiries into installations.",
    lede: "Keep roof details and monthly bill on the lead, book the site visit, send the quote and invoice the order.",
    fields: ["Roof type", "Monthly bill", "Capacity (kW)", "Site address", "Subsidy"],
    statuses: ["Fresh Lead", "Site visit booked", "Quote sent", "Order received", "Installed"],
    lead: { name: "Farhan Qureshi", line: "Rooftop 5 kW · Indore", rows: [["Roof", "Concrete"], ["Monthly bill", "₹4,200"], ["Capacity", "5 kW"]] },
    uses: [{ slug: "follow-ups", why: "Site visits and quote follow-ups on the calendar." }, { slug: "billing", why: "Proforma to sales invoice with GST." }, { slug: "whatsapp", why: "Quotes and visit confirmations." }],
  },
  {
    slug: "property-dealer", name: "Property Dealer", icon: "building", grad: "from-violet-500 to-fuchsia-600",
    short: "Site visits and negotiations, tracked per buyer.",
    headline: "Know where every buyer stands.",
    lede: "Match buyers to properties, schedule site visits and keep every negotiation call on the record.",
    fields: ["Budget", "BHK", "Location", "Possession", "Site visit date"],
    statuses: ["Fresh Lead", "Site visit scheduled", "Negotiation", "Booked", "Not interested"],
    lead: { name: "Meera Rastogi", line: "3 BHK · Indore", rows: [["Budget", "₹85 lakh"], ["BHK", "3"], ["Possession", "Ready"]] },
    uses: [{ slug: "calling", why: "Call history for each buyer and property." }, { slug: "follow-ups", why: "Site-visit reminders for you and the buyer." }, { slug: "whatsapp", why: "Share listings and visit details." }],
  },
  {
    slug: "health-care", name: "Health Care", icon: "heart", grad: "from-rose-500 to-red-600",
    short: "Appointments and follow-up care, on schedule.",
    headline: "Fill appointments and follow up on care.",
    lede: "Turn enquiries into booked appointments and set a follow-up for every patient who needs one.",
    fields: ["Treatment", "Preferred doctor", "Appointment date", "Insurance", "Branch"],
    statuses: ["Fresh Lead", "Appointment booked", "Visited", "Follow-up due", "Not interested"],
    lead: { name: "Kavita Sharma", line: "Dental · Surat", rows: [["Treatment", "Braces"], ["Doctor", "Dr. Shah"], ["Appointment", "Sat 11:00"]] },
    uses: [{ slug: "follow-ups", why: "Appointment and check-up reminders." }, { slug: "whatsapp", why: "Confirmations and reminders by template." }, { slug: "reports", why: "Which campaigns bring booked appointments." }],
  },
];
