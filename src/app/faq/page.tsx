import type { Metadata } from "next";
import { DemoCta } from "@/components/sections/DemoCta";
import { FaqExplorer, type FaqGroup } from "@/components/sections/FaqExplorer";
import { PageHero } from "@/components/ui/PageHero";
import { pricing } from "@/lib/site";

const groups: FaqGroup[] = [
  { id: "start", label: "Getting started", icon: "bolt", items: [
    { q: "How do I start?", a: "Register with your work email or Google account and start the free trial. No card is needed." },
    { q: "How do I add my staff?", a: "Invite agents from the Users section. Each gets their own login and sees only the leads assigned to them." },
    { q: "Can I bring my existing leads?", a: "Yes. Import a CSV or connect Facebook lead forms, or add leads by hand. Duplicates are caught so one person is not called twice." },
    { q: "Can I see it on my own data first?", a: "Yes. Request a demo with your name and mobile number and our team will call and walk you through it." },
  ] },
  { id: "leads", label: "Leads & calling", icon: "phone", items: [
    { q: "Where do leads come from?", a: "Facebook, IVR, spreadsheets, your website form or manual entry. They all land in one list." },
    { q: "How are leads given to agents?", a: "You can assign by hand or let the system distribute them, with priority leads first." },
    { q: "Is there a mobile app?", a: "Yes. The Android caller app lets agents call from their phone and logs each call against the lead." },
    { q: "Are follow-ups tracked?", a: "Callbacks become tasks automatically and a reminder stays on screen until someone acknowledges it." },
  ] },
  { id: "billing", label: "Pricing & billing", icon: "receipt", items: [
    { q: `What does ₹${pricing.price} a ${pricing.period} include?`, a: "Leads from every source in one list, the calling panel with call history, follow-up tasks and reminders, the Android caller app, and lead rating and status tracking." },
    { q: "Is GST extra?", a: "Plan prices are before GST. GST is added at the rate in force and shown on your invoice. Use our GST calculator to work out any amount." },
    { q: "Can I cancel any time?", a: "Yes. The plan stays active until the end of the period you paid for and does not renew." },
    { q: "Do you offer refunds?", a: "Yes, in the cases set out on our Refund Policy page, such as a double charge." },
    { q: "Do you have WhatsApp, billing and reports too?", a: "These are separate modules in the product. Ask during the demo how they are added to your plan." },
  ] },
  { id: "security", label: "Data & security", icon: "shield", items: [
    { q: "Who owns my data?", a: "You do. We use it only to run the service for you and never sell it." },
    { q: "Can staff see everything?", a: "No. Roles decide what each user can see and do, and agents see only their assigned leads." },
    { q: "How do I sign in?", a: "With your work email and password, or your Google account." },
    { q: "Can I export my data?", a: "Yes. Leads, call history and turnaround time can be downloaded as reports." },
  ] },
];

export const metadata: Metadata = { title: "FAQ", description: "Answers on getting started, calling, pricing, GST and data security for Softmark CRM.", alternates: { canonical: "/faq" } };

export default function FaqPage() {
  return (
    <>
      <PageHero title="Frequently asked questions" lede="Quick answers. If yours is missing, ask us for a demo." crumb="FAQ" />
      <FaqExplorer groups={groups} />
      <DemoCta title="Still have a question?" lede="Leave your number and our team will call you." />
    </>
  );
}
