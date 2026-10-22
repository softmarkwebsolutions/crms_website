import type { LegalSection } from "@/components/sections/LegalDoc";
import { pricing, site } from "./site";

// Drafted from what the product does (leads, call logs, Google sign-in, Android caller app, WhatsApp, GST billing).
// Have this reviewed by counsel before launch; the refund window and notice periods are placeholders to confirm.
export const privacy = {
  updated: "22 October 2026",
  intro: `${site.company} runs ${site.name}. This policy explains what we collect when you use the website or the CRM, why we collect it and the choices you have.`,
  sections: [
    { id: "collect", title: "What we collect", icon: "inbox", body: [
      "We collect only what is needed to run your account and your calling desk.",
      ["Account details: name, work email, mobile number and company name.", "Sign-in data if you use Google: your name, email and profile picture from Google.", "Business data you add: leads, notes, call outcomes, follow-ups, invoices and stock.", "Call metadata from the Android caller app: number dialled, time and duration.", "Basic usage data such as device type, browser and pages visited."],
    ] },
    { id: "use", title: "How we use it", icon: "sliders", body: [["To create your account, sign you in and keep it secure.", "To deliver the features you use: assigning leads, logging calls, sending reminders and raising GST invoices.", "To reply to demo requests and support messages.", "To fix bugs, prevent misuse and improve the product."], "We do not sell your data or your leads' data."] },
    { id: "your-data", title: "Your leads and customers", icon: "users", body: ["The leads and customer records you upload belong to you. We process them on your instructions, to provide the service. You are responsible for having the right to contact the people on your lists, including consent for calls and WhatsApp messages."] },
    { id: "sharing", title: "Who we share with", icon: "layers", body: ["Only with providers needed to run the service, such as hosting, email delivery, Google sign-in and WhatsApp Business, and only as far as they need to. We may also disclose data when the law requires it."] },
    { id: "security", title: "Security", icon: "shield", body: ["Data is sent over HTTPS, access is limited to your company's users and roles, and passwords are stored hashed. No system is perfectly secure, so please use strong passwords and remove staff who have left."] },
    { id: "retention", title: "How long we keep it", icon: "clock", body: ["We keep your data while your account is active. After you close it we delete or anonymise it within a reasonable period, except records we must keep for tax and legal reasons, such as our own invoices."] },
    { id: "rights", title: "Your choices", icon: "check", body: ["You can ask us to access, correct, export or delete your personal data, or withdraw consent for marketing messages, by writing to us. We will respond within a reasonable time."] },
    { id: "cookies", title: "Cookies", icon: "pin", body: ["We use essential cookies to keep you signed in and remember preferences. We do not use advertising cookies on this website."] },
    { id: "changes", title: "Changes", icon: "refresh", body: ["If we change this policy we will update the date above and, for material changes, tell you in the product or by email."] },
  ] satisfies LegalSection[],
};

export const refund = {
  updated: "22 October 2026",
  intro: `${site.name} costs ₹${pricing.price} per ${pricing.period}. This page explains when you can get your money back.`,
  sections: [
    { id: "trial", title: "Try before you pay", icon: "bolt", body: ["Every new account starts with a free trial and no card is needed. Use the trial to add staff, import leads and place calls so you know the product fits before you pay anything."] },
    // Hidden for now: "When we refund". Uncomment to show it again.
    //     { id: "eligible", title: "When we refund", icon: "check", body: [["You were charged twice for the same period.", "You were charged after you cancelled in time.", "A fault on our side stopped you using the paid features and we could not fix it within a reasonable time."]] },
    { id: "not-eligible", title: "When we do not", icon: "close", body: [["Partial months after the billing period has started.", "Change of mind after you have used the paid month.", "Third-party charges such as WhatsApp Business conversation fees or telephony costs, which we do not control."]] },
    { id: "request", title: "How to ask", icon: "mail", body: [`Email ${site.contactEmail} from your registered address with your company name, the payment date and the reason. Requests should reach us within 7 days of the charge.`] },
    { id: "timeline", title: "How long it takes", icon: "clock", body: ["We reply within 2 working days. Approved refunds go back to the original payment method and normally show in 5 to 10 working days, depending on your bank."] },
    { id: "cancel", title: "Cancelling", icon: "refresh", body: ["You can cancel any time. Your plan stays active until the end of the period you paid for and it does not renew after that. Your data stays available for export for a short period after the plan ends."] },
    { id: "gst", title: "GST on refunds", icon: "receipt", body: ["Refunds include the GST charged on the amount refunded, and we issue a credit note against the original invoice."] },
  ] satisfies LegalSection[],
};

export const terms = {
  updated: "22 October 2026",
  intro: `These terms are the agreement between you and ${site.company} for using the ${site.name} website and application. By creating an account you accept them.`,
  sections: [
    { id: "service", title: "The service", icon: "layers", body: ["Softmark CRM is a hosted tool for managing leads, calling, follow-ups, billing and related workflows. We may improve, add or retire features over time and will give notice of changes that materially reduce what you pay for."] },
    { id: "account", title: "Your account", icon: "users", body: [["Give accurate details and keep your password private.", "You are responsible for everything done under your account and for your staff users.", "Tell us at once if you suspect unauthorised access."]] },
    { id: "acceptable", title: "Acceptable use", icon: "shield", body: ["Do not use the service to break the law, to send spam or unsolicited messages, to contact people on a Do Not Disturb list in breach of telecom rules, to harvest others' data, or to interfere with the service. You must follow the rules of WhatsApp Business and your telephony provider."] },
    { id: "data", title: "Your data", icon: "inbox", body: ["You own the data you put in. You give us permission to host and process it only to run the service for you. How we handle personal data is described in our Privacy Policy."] },
    { id: "payment", title: "Plans and payment", icon: "wallet", body: [`The plan is ₹${pricing.price} per ${pricing.period} before GST and renews each period until cancelled. Prices may change with at least 30 days' notice. GST is added at the rate in force and shown on your invoice.`, "Refunds are covered by our Refund Policy."] },
    { id: "ip", title: "Our rights", icon: "trophy", body: ["The software, design and brand remain ours. We give you a limited, non-transferable right to use the service while your account is active."] },
    { id: "availability", title: "Availability and support", icon: "bolt", body: ["We work to keep the service running but do not promise it will be uninterrupted or error-free. Planned maintenance is announced where we can."] },
    { id: "liability", title: "Liability", icon: "target", body: ["To the extent the law allows, we are not liable for indirect or consequential loss such as lost leads or profit, and our total liability for a claim is limited to what you paid us in the 3 months before it arose."] },
    { id: "termination", title: "Ending the agreement", icon: "close", body: ["You can stop using the service at any time. We may suspend or close an account that breaks these terms or is unpaid after notice."] },
    { id: "law", title: "Governing law", icon: "building", body: ["These terms are governed by the laws of India and the courts at our registered office have jurisdiction."] },
  ] satisfies LegalSection[],
};
