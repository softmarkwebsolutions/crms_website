import type { IconName } from "@/components/ui/Icon";

export type Module = {
  slug: string;
  name: string;
  icon: IconName;
  headline: string;
  lede: string;
  points: string[];
  img: string;
  alt: string;
  blurb: string;
  grad: string;
};

/** One entry = one /modules/[slug] page + one nav/footer link. Copy comes from the product's feature list. */
export const modules: Module[] = [
  { slug: "calling", name: "Calling", icon: "phone", headline: "Call faster, log everything.", lede: "Agents get their assigned leads in a calling panel with click-to-call, outcome logging and a full call history on every lead.", points: ["Auto-assigned leads, priority first", "Outcome logged on every call", "Call history on every lead", "Android caller app"], img: "/images/call-floor.jpg", alt: "Agents with headsets on a calling floor", blurb: "Panel, history, outcomes", grad: "from-orange-400 to-amber-500" },
  { slug: "whatsapp", name: "WhatsApp", icon: "chat", headline: "Send a thousand personal messages at once.", lede: "Connect your WhatsApp Business account, load approved templates and send to one lead or a whole list, with replies in a shared inbox.", points: ["Bulk campaigns, count before you send", "Personalised campaign images", "Shared two-way inbox", "Template performance and campaign reports"], img: "/images/client-meeting.jpg", alt: "A client meeting", blurb: "Bulk, inbox, templates", grad: "from-emerald-500 to-teal-600" },
  { slug: "follow-ups", name: "Follow-ups", icon: "bell", headline: "Callbacks that never get lost.", lede: "Callbacks become tasks, and a reminder stays on screen until someone acknowledges it.", points: ["Callbacks become tasks automatically", "Reminders stay until acknowledged", "Task calendar and team timeline", "Snooze, mute and complete"], img: "/images/planning.jpg", alt: "Team planning", blurb: "Tasks and reminders", grad: "from-info to-sky-600" },
  { slug: "billing", name: "Billing & Inventory", icon: "receipt", headline: "GST invoices in your look. Stock that keeps itself.", lede: "Raise proforma, sales and purchase invoices with GST worked out, and let every sale write to the stock ledger.", points: ["Proforma, sales and purchase invoices", "CGST / SGST / IGST line tax", "Invoice theme designer with preview", "Inventory, categories and stock ledger"], img: "/images/deal-closed.jpg", alt: "A deal being closed", blurb: "GST invoices, stock", grad: "from-pink-500 to-rose-600" },
  { slug: "reports", name: "Reports & Targets", icon: "chart", headline: "Know who is on a call, who is idle, who is closing.", lede: "Leader dashboards, hour-by-hour floor views and monthly targets people can watch fill up.", points: ["Leader dashboard and agent performance", "Hourly, daily and campaign reports", "Team targets and a daily winner", "Download leads, call history and TAT"], img: "/images/team-screens.jpg", alt: "A team reviewing screens", blurb: "Targets, leaderboards", grad: "from-primary to-deep-2" },
];
