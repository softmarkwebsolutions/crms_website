import type { IconName } from "@/components/ui/Icon";

export type Block = { h: string } | { p: string } | { ul: string[] };
export type Post = { slug: string; title: string; excerpt: string; date: string; read: number; tag: string; icon: IconName; grad: string; body: Block[] };

// Starter articles written from what the product does. Edit, replace or add entries; each one becomes a /blog/[slug] page.
export const posts: Post[] = [
  {
    slug: "one-list-for-every-lead-source",
    title: "Why every lead source should land in one list",
    excerpt: "Facebook forms, IVR calls and spreadsheets each hold part of the picture. Here is what changes when they share a single list.",
    date: "2026-10-12", read: 4, tag: "Lead management", icon: "inbox", grad: "from-blue-500 to-indigo-600",
    body: [
      { p: "Most small teams collect leads in three or four places: a Facebook lead form, a missed-call number, a sheet someone updates on Friday. Each source works on its own, and together they hide a problem: nobody can say how many people are waiting for a call right now." },
      { h: "What goes wrong with scattered leads" },
      { ul: ["The same person is called twice by two agents, or by nobody.", "Hot leads sit in a sheet nobody opened this week.", "You cannot tell which source brings buyers and which brings noise."] },
      { h: "What one list gives you" },
      { p: "When every source writes to the same list, an agent opens one screen and sees whom to call first. Duplicates are caught at the door, and each lead carries its source so you can compare them later." },
      { h: "Start small" },
      { p: "You do not need to move everything on day one. Import your current sheet, connect one source, and let the team work from the list for a week. The gaps show up quickly." },
    ],
  },
  {
    slug: "cgst-sgst-igst-explained",
    title: "CGST, SGST and IGST: which one goes on your invoice",
    excerpt: "The tax rate is the same. What changes is how it is split, and that depends on where your buyer is.",
    date: "2026-10-08", read: 3, tag: "GST", icon: "receipt", grad: "from-pink-500 to-rose-600",
    body: [
      { p: "On an invoice, GST appears either as two lines or as one. Which one you use depends only on whether the sale stays inside one state." },
      { h: "Same state: CGST plus SGST" },
      { p: "If you and the buyer are in the same state, the tax is split equally. An 18% GST becomes 9% CGST and 9% SGST." },
      { h: "Different states: IGST" },
      { p: "For a sale across states, you charge a single IGST at the full rate, for example 18%. The buyer can claim it as input credit, which is why printing the wrong split is a real problem and not just a formatting slip." },
      { h: "A quick way to check" },
      { p: "The first two digits of a GSTIN are the state code. If your GSTIN and your buyer's start with the same two digits, use CGST and SGST. Otherwise use IGST. Our GST calculator shows both splits for any amount." },
    ],
  },
  {
    slug: "tds-late-payment-interest-guide",
    title: "TDS late payment interest: how it is counted",
    excerpt: "Two different delays attract two different rates. A short guide to what is charged and from when.",
    date: "2026-10-02", read: 4, tag: "TDS", icon: "clock", grad: "from-orange-400 to-amber-500",
    body: [
      { p: "Interest on TDS is charged under section 201(1A), and it covers two separate mistakes." },
      { ul: ["Tax was not deducted on time: 1% for every month or part of a month, from the date it was deductible to the date it was deducted.", "Tax was deducted but not deposited on time: 1.5% for every month or part of a month, from the date of deduction to the date of deposit."] },
      { h: "A part of a month is a full month" },
      { p: "If tax deducted on 10 January is deposited on 11 February, that is two months of interest, not one and a bit." },
      { h: "Deposit due dates" },
      { p: "Tax deducted in a month is due by the 7th of the next month, and tax for March by 30 April. Use our TDS interest calculator with your three dates to see the figure. Confirm current rates with your accountant before paying." },
    ],
  },
  {
    slug: "follow-up-habits-that-save-leads",
    title: "Five follow-up habits that stop leads going cold",
    excerpt: "Most lost leads were not rejected. They were forgotten. Small habits that keep callbacks alive.",
    date: "2026-09-25", read: 5, tag: "Sales", icon: "bell", grad: "from-info to-sky-600",
    body: [
      { p: "A prospect who says call me next week is not a no. It is a promise you have to keep, and the team that keeps it wins." },
      { ul: ["Set the next step before the call ends, with a date.", "Log the outcome on every call, even a missed one.", "Keep one inbox of due tasks and clear it every morning.", "Let reminders stay until someone acknowledges them.", "Review the leads nobody touched in seven days."] },
      { h: "Make the system do the remembering" },
      { p: "Habits fade on busy days. When a callback turns into a task automatically and a reminder stays on screen until it is dealt with, the habit survives the rush." },
    ],
  },
  {
    slug: "gst-invoice-mistakes-to-avoid",
    title: "Six GST invoice mistakes that cost small businesses money",
    excerpt: "A wrong GSTIN or the wrong tax split can block your buyer's credit. A checklist to run before you send an invoice.",
    date: "2026-09-18", read: 4, tag: "GST", icon: "receipt", grad: "from-emerald-500 to-teal-600",
    body: [
      { p: "Most invoice errors are small and easy to avoid, but each one can make a buyer reject the invoice or lose their input credit." },
      { ul: ["Wrong or missing buyer GSTIN.", "CGST and SGST used for a sale to another state.", "Tax rate not matching the item.", "Invoice number that repeats or skips.", "Missing place of supply.", "Amounts that do not add up after rounding."] },
      { h: "Let the tool do the sums" },
      { p: "When tax is worked out by the system on every line, and the total is the sum of the rounded parts, the printed lines always add up. Use the GST calculator to double-check any figure." },
    ],
  },
  {
    slug: "how-to-onboard-new-calling-agents",
    title: "How to get a new calling agent productive in a week",
    excerpt: "A simple first-week plan: what to give them, what to listen to, and what to measure.",
    date: "2026-09-10", read: 4, tag: "Sales", icon: "users", grad: "from-teal-500 to-emerald-600",
    body: [
      { p: "New agents learn fastest from real calls and quick feedback, not long manuals." },
      { ul: ["Day 1: give a small set of warm leads and a short script.", "Day 2 to 3: sit in on calls and review outcomes together.", "Day 4: widen their lead list.", "Day 5: review call history and set a target for next week."] },
      { h: "Measure the right things" },
      { p: "Watch calls made, outcomes logged and follow-ups kept, before you look at sales. Habits come first; closing follows." },
    ],
  },
];

export const postBySlug = (s: string) => posts.find((p) => p.slug === s);
export const fmtDate = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
