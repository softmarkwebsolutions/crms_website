import type { IconName } from "@/components/ui/Icon";

export type Tone = "red" | "amber" | "blue" | "green" | "violet" | "sky" | "rose";

export type BusinessCrm = {
  slug: string;
  /** Footer / breadcrumb label: "CRM for {name}". */
  name: string;
  /** Overrides the default "A Simple CRM for {name}" headline: [plain start, accented end]. */
  headline?: [string, string];
  /** Small pill above the headline. */
  badge?: string;
  lede: string;
  /** Row of tiles (e.g. policy types). `late` puts it after the steps instead of under the hero. */
  types?: { title: string; lede: string; late?: boolean; items: { icon: IconName; label: string }[] };
  /** Left-aligned split hero with this image. */
  heroImage?: { src: string; alt: string };
  /** Centred hero over a full-bleed photo. */
  heroBackdrop?: { src: string; alt: string };
  /** Groups of cards with bullet lists (what the business sells / who it serves). */
  groups?: { title: string; lede: string; cols?: 2 | 3; items: { icon: IconName; title: string; tone: Tone; points: string[] }[] }[];
  /** Optional before/after comparison shown after the steps. */
  compare?: { title: string; lede: string; beforeTitle: string; before: string[]; afterTitle: string; after: string[] };
  /** Manual way vs the CRM, row by row. */
  table?: { title: string; lede: string; usLabel: string; themLabel: string; rows: string[] };
  /** Split section: text + checklist beside a photo. */
  workStyle?: { title: string; text: string; points: string[]; image: { src: string; alt: string } };
  /** Vertical journey of numbered stages. */
  journey?: { title: string; lede: string; steps: { title: string; text: string }[] };
  painTitle?: string;
  painLede?: string;
  pains?: { icon: IconName; title: string; text: string; tone: "red" | "amber" | "blue" }[];
  /** Photo shown beside the feature cards; without it the cards fill the width. */
  featuresImage?: { src: string; alt: string };
  featuresTitle: string;
  featuresLede: string;
  features: { icon: IconName; title: string; text: string; tone?: Tone }[];
  stepsTitle?: string;
  stepsLede?: string;
  steps?: { title: string; text: string }[];
  faqTitle: string;
  faqLede: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaLede: string;
  /** Icons floating around the centred hero. */
  floats: IconName[];
};

// Written from what the CRM does (custom fields and statuses, follow-up reminders, WhatsApp, calling, lead intake).
export const businessCrms: BusinessCrm[] = [
  {
    slug: "insurance-agents", name: "Insurance Agents",
    lede: "Between new leads, policy renewals and premium due dates, things slip through. Softmark CRM keeps every client, policy and follow-up in one place, so you renew on time and never lose a lead.",
    types: {
      title: "Manage Every Type of Policy in One CRM",
      lede: "Whatever mix of insurance you sell, Softmark keeps each client's policies, premiums and renewal dates together, so nothing is spread across different files.",
      items: [
        { icon: "shield", label: "Life Insurance" }, { icon: "heart", label: "Health Insurance" }, { icon: "car", label: "Motor Insurance" },
        { icon: "shield", label: "Term Insurance" }, { icon: "pin", label: "Travel Insurance" }, { icon: "home", label: "Property Insurance" },
      ],
    },
    painTitle: "Where Insurance Agents Lose Renewals and Leads",
    painLede: "You are good at advising clients. It is the keeping-track-of-everyone part that eats your day. For most agents, the income leaks happen in these three places.",
    pains: [
      { icon: "calendar", title: "Renewals lapse", text: "A renewal or premium due date quietly passes, the policy lapses, and you lose both the client and the commission.", tone: "red" },
      { icon: "clock", title: "Leads go cold", text: "A prospect asks for a quote, you get busy, nobody follows up, and they buy the policy from another agent.", tone: "amber" },
      { icon: "layers", title: "Client details scattered", text: "Policy papers on WhatsApp, premiums in a diary, contacts in your phone. Finding anything takes far too long.", tone: "blue" },
    ],
    featuresImage: { src: "/images/deal-closed.jpg", alt: "An agent celebrating a renewed policy" },
    featuresTitle: "Everything an Insurance Agent Needs in One Place",
    featuresLede: "Built around how an agent actually works, so you always know which renewal is due next and which lead needs a call today.",
    features: [
      { icon: "bell", title: "Never Miss a Renewal", text: "Add the renewal and premium due date for each policy and get reminded before it arrives, so policies stay active and you keep earning renewal commission." },
      { icon: "target", title: "Convert More Leads", text: "Capture every enquiry from calls, referrals and online ads with a follow-up reminder, so prospects do not go cold while you service existing clients." },
      { icon: "layers", title: "All Policies in One View", text: "Track life, health, motor and general insurance for every client in one place, with policy details and renewal dates ready whenever you need them." },
      { icon: "chat", title: "Stay in Touch on WhatsApp", text: "Send renewal and premium reminders, share quotes, and keep each client's conversation in one place instead of scattered across your personal chats." },
    ],
    stepsTitle: "How Insurance Agents Use Softmark CRM",
    stepsLede: "No long training, no complicated setup. Three simple steps and your follow-ups run on their own.",
    steps: [
      { title: "Add Clients & Policies", text: "Bring your clients and leads into one list, each with their policies, premiums and renewal dates." },
      { title: "Set Reminders & Tasks", text: "Add renewal dates and follow-up reminders. Everything shows up on the day you need to act on it." },
      { title: "Renew & Follow Up on Time", text: "Get timely reminders, call the right client at the right time, and keep every policy active." },
    ],
    faqTitle: "CRM for Insurance Agents FAQs",
    faqLede: "Common questions insurance agents ask about managing leads, clients and renewals with a CRM.",
    faqs: [
      { q: "What is a CRM for insurance agents?", a: "It is software that keeps your clients, leads, policies and follow-ups in one place, so you can see which renewal is due and which prospect needs a call today." },
      { q: "Can it remind me about policy renewals and premium due dates?", a: "Yes. Set a follow-up on the renewal or premium date and you are reminded on the day, so policies do not lapse." },
      { q: "Does it work for life, health and motor insurance?", a: "Yes. Add your own fields, such as policy type, sum insured and renewal date, so every line of business is tracked the way you sell it." },
      { q: "I am a single agent. Is this useful for me?", a: "Yes. Plans start at ₹99 a month, which suits an individual agent as well as a growing team." },
      { q: "Will it help me convert more leads?", a: "It keeps every enquiry on a list with a follow-up date, so prospects do not go cold while you are busy with existing clients." },
      { q: "Can I try it before paying?", a: "Yes. Start a free trial and set up your first clients in minutes." },
    ],
    ctaTitle: "Keep Every Policy Active and Every Lead Warm",
    ctaLede: "Bring your clients, policies and renewals into one organised place. Try Softmark CRM free and never miss a renewal or a lead again.",
    floats: ["shield", "car", "heart", "bell"],
  },
  {
    slug: "hospitals", name: "Hospitals",
    lede: "Patients call, message and walk in all day, and the busy ones get missed. Softmark CRM keeps every enquiry, appointment and follow-up in one place, so your front desk reaches out on time and no patient feels forgotten.",
    heroImage: { src: "/images/client-meeting.jpg", alt: "A front desk team helping a patient" },
    painTitle: "Where Hospitals Lose Patients",
    painLede: "Your team works hard to care for everyone who walks in. It is the enquiries in between that get lost in the rush. For most hospitals, patients slip away in these three places.",
    pains: [
      { icon: "phone", title: "Enquiries go unanswered", text: "A patient calls or messages about a treatment, nobody follows up in time, and they book at another hospital instead.", tone: "red" },
      { icon: "calendar", title: "Missed appointments", text: "Patients forget their appointment or a follow-up visit, and without a reminder, they simply do not come back.", tone: "amber" },
      { icon: "layers", title: "Enquiries scattered", text: "Calls in a register, messages on WhatsApp, notes on paper. Nobody has a clear view of who needs a call back.", tone: "blue" },
    ],
    featuresImage: { src: "/images/calling_center.jpg", alt: "A front desk team calling patients" },
    featuresTitle: "Everything Your Hospital Needs to Stay in Touch",
    featuresLede: "Built around how a busy front desk actually works, so your team always knows which patient to call next and where every enquiry stands.",
    features: [
      { icon: "inbox", title: "Capture Every Enquiry", text: "Enquiries from calls, your website, walk-ins and ads all land in one list, each tagged with the department or treatment the patient is asking about." },
      { icon: "bell", title: "Never Miss a Follow-Up", text: "Set reminders for appointment confirmations and follow-up visits, so patients get a timely call and fewer appointments go empty." },
      { icon: "users", title: "Keep the Front Desk in Sync", text: "Assign enquiries to team members and see who is handling which patient, so two people never call the same patient and nobody is left waiting." },
      { icon: "chat", title: "Reach Patients on WhatsApp", text: "Share appointment details, reports and reminders on WhatsApp, and keep each patient's conversation in one place instead of on personal phones." },
    ],
    stepsTitle: "How Hospitals Use Softmark CRM",
    stepsLede: "No long training, no complicated setup. Three simple steps and your patient follow-ups run on their own.",
    steps: [
      { title: "Collect Enquiries", text: "Bring every enquiry from calls, your website and walk-ins into one list, tagged by department or service." },
      { title: "Assign & Set Reminders", text: "Give each enquiry to a team member with a follow-up reminder, so the right person calls at the right time." },
      { title: "Follow Up & Care", text: "Call patients on time, confirm appointments, and turn more enquiries into visits every single week." },
    ],
    compare: {
      title: "What Changes After Softmark CRM",
      lede: "The same patients, a very different front desk. Here is how a typical day shifts once your team stops chasing scattered notes.",
      beforeTitle: "Before: enquiries everywhere",
      before: ["Calls in a register, messages on WhatsApp, notes on paper.", "Patients forgotten until they book somewhere else.", "No reminders, so appointments quietly go empty.", "No clear view of who needs a call back today."],
      afterTitle: "After: one calm, clear list",
      after: ["Every enquiry in one place, tagged by department.", "Timely reminders, so no patient is missed.", "Fewer empty slots with appointment reminders.", "A clear view of who is handling which patient."],
    },
    faqTitle: "CRM for Hospitals FAQs",
    faqLede: "Common questions hospitals and clinics ask about managing patient enquiries and follow-ups with a CRM.",
    faqs: [
      { q: "What is a CRM for hospitals?", a: "It is software that keeps every patient enquiry, appointment follow-up and reminder in one place, so your front desk always knows who to call next." },
      { q: "Can it help us follow up on appointments and enquiries?", a: "Yes. Set a reminder on each enquiry or appointment and your team is prompted on the day to call or message the patient." },
      { q: "Is this a replacement for our hospital management system?", a: "No. It focuses on enquiries, follow-ups and communication, and does not handle billing of treatments, records or clinical workflows." },
      { q: "Does it work for clinics and single-doctor practices too?", a: "Yes. Plans start at ₹99 a month, which suits a single clinic as well as a multi-department hospital." },
      { q: "Can our front-desk team use it together?", a: "Yes. Assign enquiries to team members and see who is handling which patient, so nobody is called twice." },
      { q: "Can I try it before paying?", a: "Yes. Start a free trial and set up your first enquiries in minutes." },
    ],
    ctaTitle: "Turn More Enquiries Into Patient Visits",
    ctaLede: "Bring every patient enquiry and follow-up into one organised place. Try Softmark CRM free and give every patient a timely, caring response.",
    floats: [],
  },
  {
    slug: "ca-firms", name: "CA Firms",
    lede: "Between GST returns, ITR filings and a phone that never stops ringing, things get missed. Softmark CRM keeps every client, enquiry and deadline in one place, so your practice stays calm even in peak season.",
    painTitle: "Where CA Practices Lose Time and Clients",
    painLede: "You are good at the work. It is the keeping-track-of-everything part that eats your day. For most firms, the pressure builds up in these three places.",
    pains: [
      { icon: "calendar", title: "Deadlines slip by", text: "A GST return or ITR due date quietly passes because it lived in someone's head or a long Excel sheet nobody opened.", tone: "red" },
      { icon: "phone", title: "Enquiries go cold", text: "A prospective client calls during filing season, nobody calls back, and they sign up with another firm instead.", tone: "amber" },
      { icon: "layers", title: "Client details scattered", text: "Documents on WhatsApp, notes in a diary, status in someone's memory. Pulling it all together wastes hours.", tone: "blue" },
    ],
    featuresImage: { src: "/images/panel-leads.jpg", alt: "Softmark CRM list of clients and enquiries" },
    featuresTitle: "Everything Your Firm Needs in One Place",
    featuresLede: "Built around how a CA office actually runs, so the whole team always knows what is pending and what is due next.",
    features: [
      { icon: "calendar", title: "Never Miss a Due Date", text: "Set the due date for each client's GST, ITR or ROC work and get reminded before it arrives. See the whole week's filings at a glance during peak season." },
      { icon: "target", title: "Win More Clients", text: "Every call, referral and website enquiry is captured with a follow-up reminder, so new business does not slip away while you are busy with returns." },
      { icon: "users", title: "Keep the Team in Sync", text: "Assign clients and tasks to partners, staff and articles, and see who is handling what. When someone is away, anyone can step in with the full history." },
      { icon: "chat", title: "Stay in Touch on WhatsApp", text: "Send reminders for documents and payments, and keep each client's conversation history in one place instead of scattered across personal phones." },
    ],
    stepsTitle: "How CA Firms Use Softmark CRM",
    stepsLede: "No long training, no complicated setup. Three simple steps and your practice runs smoother.",
    steps: [
      { title: "Add Clients & Enquiries", text: "Bring your clients and new enquiries into one list, each with their details and the work you handle for them." },
      { title: "Set Deadlines & Tasks", text: "Add due dates for filings and assign work to your team. Everything shows up where the right person can see it." },
      { title: "Stay On Top of It All", text: "Get timely reminders, follow up on enquiries, and file on time, without anything slipping through the cracks." },
    ],
    workStyle: {
      title: "Made for the Way You Actually Work",
      text: "You did not become a chartered accountant to chase sticky notes and scroll through old WhatsApp chats. Softmark CRM quietly handles the tracking, so you can focus on the work your clients trust you for.",
      points: ["Open one screen and see every pending filing and follow-up.", "Reminders for GST, ITR and ROC work before they arrive.", "Your whole team on the same page, even in peak season."],
      image: { src: "/images/team-screens.jpg", alt: "A CA team working from one shared screen" },
    },
    faqTitle: "CRM for CA Firms FAQs",
    faqLede: "Common questions chartered accountants ask about managing their practice with a CRM.",
    faqs: [
      { q: "What is a CRM for CA firms?", a: "It is software that keeps your clients, enquiries, deadlines and follow-ups in one place, so the whole team knows what is pending and what is due next." },
      { q: "Can it help me track GST and ITR deadlines?", a: "Yes. Set a follow-up on each client's due date and you are reminded before it arrives. Add your own fields, such as return type or period, to track the work the way you handle it." },
      { q: "We are a small CA firm. Is this useful for us?", a: "Yes. Plans start at ₹99 a month, which suits a single practitioner as well as a growing firm." },
      { q: "Can my team and articles use it together?", a: "Yes. Assign clients and tasks to team members and see who is handling what." },
      { q: "Will it help me convert new client enquiries?", a: "It keeps every enquiry on a list with a follow-up date, so prospects do not go cold during filing season." },
      { q: "Can I try it before paying?", a: "Yes. Start a free trial and set up your first clients in minutes." },
    ],
    ctaTitle: "Run Your Practice Without the Chaos",
    ctaLede: "Keep every client, deadline and enquiry in one calm, organised place. Try Softmark CRM free and feel the difference this filing season.",
    floats: ["receipt", "calendar", "wallet", "clock"],
  },
  {
    slug: "coaching-centers", name: "Coaching Centers",
    lede: "Turn enquiries into enrolments without the chaos. Softmark CRM helps you book demo classes, fill your batches, and follow up on fees, all from one place.",
    heroImage: { src: "/images/planning.jpg", alt: "A coaching team planning batches and follow-ups" },
    painTitle: "Where Coaching Centers Lose Enrolments",
    painLede: "Getting a student to enquire is the easy part. Turning that interest into a paid seat is where most coaching centers quietly lose money, usually in these three spots.",
    pains: [
      { icon: "calendar", title: "Demo no-shows", text: "A student books a demo class but never turns up, because nobody reminded them or followed up afterwards.", tone: "red" },
      { icon: "users", title: "Empty batch seats", text: "A new batch starts with half the seats empty, while interested enquiries from last month sit forgotten.", tone: "amber" },
      { icon: "wallet", title: "Fee follow-ups slip", text: "Instalments fall due and pending notices, so payments come in late or sometimes not at all.", tone: "blue" },
    ],
    featuresTitle: "Everything You Need to Fill Your Batches",
    featuresLede: "From the first enquiry to a confirmed seat, Softmark keeps the whole journey organised so your team can focus on convincing, not chasing.",
    features: [
      { icon: "inbox", title: "Course-Wise Enquiries", text: "Capture every enquiry tagged by course and batch, so you instantly know which programmes students want and where the demand is." },
      { icon: "calendar", title: "Demo Class Bookings", text: "Schedule demo and trial classes against each enquiry with reminders, so more students show up and get a real taste of your teaching." },
      { icon: "layers", title: "Batch & Enrolment Tracking", text: "See how many seats each batch still has and which students are close to joining, so you can fill batches before they start." },
      { icon: "bell", title: "Fee & Instalment Reminders", text: "Set reminders for fee due dates and pending instalments, so payments are collected on time without uncomfortable chasing." },
      { icon: "users", title: "Counsellor Assignment", text: "Assign enquiries to the right counsellor and see who is following up with whom, so no interested student is left without a call." },
      { icon: "chat", title: "WhatsApp Reminders", text: "Send demo timings, course details and fee reminders on WhatsApp, and keep each student's chat in one place for easy follow-up." },
    ],
    stepsTitle: "How Coaching Centers Use Softmark CRM",
    stepsLede: "No long training, no complicated setup. Three simple steps and your enrolments run smoother every batch.",
    steps: [
      { title: "Capture Enquiries", text: "Bring every walk-in, call and online enquiry into one list, tagged by the course and batch they want." },
      { title: "Book Demos & Follow Up", text: "Schedule demo classes, send reminders, and have counsellors follow up right after to answer doubts." },
      { title: "Enrol & Collect Fees", text: "Confirm the seat, track the batch, and keep fee instalments on schedule with timely reminders." },
    ],
    types: {
      title: "Built for Every Kind of Coaching",
      lede: "Whatever you teach, the struggle is the same: too many enquiries, too little time to follow up. Softmark fits coaching centers of every kind.",
      late: true,
      items: [{ icon: "target", label: "JEE & NEET" }, { icon: "building", label: "UPSC & State PSC" }, { icon: "wallet", label: "Banking & SSC" }, { icon: "receipt", label: "CA, CS & Commerce" }, { icon: "chat", label: "Spoken English & IELTS" }, { icon: "home", label: "School Tuition" }],
    },
    journey: {
      title: "The Coaching Lead Journey",
      lede: "From the first enquiry to a paid seat, Softmark moves every student forward one clear step at a time, so nobody is forgotten along the way.",
      steps: [
        { title: "Enquiry Comes In", text: "A walk-in, call or online enquiry lands in Softmark, tagged with the course and batch the student is interested in." },
        { title: "Demo Class Booked", text: "You schedule a demo or trial class and the student gets a reminder, so the booking does not turn into a no-show." },
        { title: "Demo Attended", text: "The student experiences your teaching first-hand, and the visit is logged so your team knows exactly who to call next." },
        { title: "Counselling & Follow-Up", text: "A counsellor follows up right after the demo, answers doubts about fees and timings, and gently nudges the student to join." },
        { title: "Enrolled in a Batch", text: "The student confirms a seat and is added to the right batch, so you always know how many seats are still open." },
        { title: "Fees Stay on Track", text: "Fee due dates and instalments come with reminders, so payments are collected on time and nothing is left pending." },
      ],
    },
    faqTitle: "CRM for Coaching Centers FAQs",
    faqLede: "Common questions coaching centers ask about managing enquiries, demos and enrolments with a CRM.",
    faqs: [
      { q: "What is a CRM for coaching centers?", a: "It is software that keeps every enquiry, demo class, enrolment and fee reminder in one place, so your counsellors always know who to call next." },
      { q: "Can it manage demo and trial class bookings?", a: "Yes. Set a follow-up on the demo date so the student and your counsellor are both reminded." },
      { q: "Can it track batches and course-wise enquiries?", a: "Yes. Add your own fields, such as course and batch, so you can see which programmes get the most interest." },
      { q: "Does it help with fee follow-ups and instalments?", a: "Yes. Set reminders on fee due dates and pending instalments so nothing is forgotten." },
      { q: "Can my counsellors work on it together?", a: "Yes. Assign enquiries to counsellors and see who is following up with whom." },
      { q: "Can I try it before paying?", a: "Yes. Start a free trial and set up your first course in minutes." },
    ],
    ctaTitle: "Fill More Seats, Every Batch",
    ctaLede: "Bring every enquiry, demo and fee reminder into one organised place. Try Softmark CRM free and turn more interest into enrolments.",
    floats: [],
  },
  {
    slug: "travel", name: "Travel Agencies", headline: ["A Travel CRM Built for ", "Agencies & Tour Operators"], badge: "Made for travel businesses",
    lede: "Travel enquiries come from all over, and the busy ones slip away. Softmark CRM keeps them in one place so your team always knows who to call next.",
    heroBackdrop: { src: "/images/places/travel-hero.jpg", alt: "Houseboat on the Kerala backwaters" },
    groups: [{
      title: "Every Kind of Travel Enquiry, Handled",
      lede: "No two travel businesses sell exactly the same thing. Whether you run honeymoon packages, corporate travel desks, or pilgrimage tours, you can shape Softmark around the trips you actually book.",
      items: [
        { icon: "pin", title: "Holiday Packages", tone: "sky", points: ["Domestic getaways", "International tours", "Custom itineraries", "Family & group trips", "Last-minute deals"] },
        { icon: "heart", title: "Honeymoon & Weddings", tone: "rose", points: ["Honeymoon packages", "Destination weddings", "Anniversary trips", "Special-occasion stays", "Couple experiences"] },
        { icon: "bolt", title: "Flights & Hotels", tone: "blue", points: ["Air ticket requests", "Hotel bookings", "Fare quote follow-ups", "Date-change queries", "Add-on transfers"] },
        { icon: "receipt", title: "Visa & Documentation", tone: "amber", points: ["Tourist visa help", "Document checklists", "Appointment reminders", "Travel insurance", "Status updates"] },
        { icon: "users", title: "Group & Pilgrimage Tours", tone: "green", points: ["Fixed-departure groups", "Pilgrimage & yatra tours", "Student & college trips", "Senior-citizen tours", "Adventure & trekking"] },
        { icon: "building", title: "Corporate & MICE", tone: "violet", points: ["Business travel desks", "Conferences & events", "Incentive trips", "Offsite planning", "Repeat client accounts"] },
      ],
    }],
    stepsTitle: "From First Enquiry to Confirmed Trip",
    stepsLede: "Most bookings aren't lost because the price was wrong. They're lost because nobody followed up in time. Here's how Softmark keeps that from happening.",
    steps: [
      { title: "Catch the Enquiry", text: "A traveller pings you about Goa. It lands in Softmark automatically, with their name and trip details attached." },
      { title: "Assign & Quote", text: "The right agent picks it up, shares an itinerary, and logs the budget, so nothing depends on someone's memory." },
      { title: "Follow Up & Close", text: "Reminders nudge your team before the trail goes cold. You stay in touch until the booking is confirmed." },
    ],
    featuresImage: { src: "/images/places/travel-band.jpg", alt: "A beach in Goa" },
    featuresTitle: "Why Travel Teams Stick With Softmark",
    featuresLede: "It's not about flashy dashboards. It's about the small things that quietly add up to more bookings.",
    features: [
      { icon: "inbox", tone: "green", title: "Enquiries in One Inbox", text: "Phone calls, website forms, WhatsApp, social pages. They all flow into the same place, so your agents stop switching between apps and start replying to travellers." },
      { icon: "clock", tone: "blue", title: "Timely Follow-ups", text: "A traveller comparing three agencies usually books with whoever replies first and stays in touch. Softmark reminds your team exactly when to call back, so warm leads don't go quiet." },
      { icon: "users", tone: "violet", title: "Share Work Across the Team", text: "Assign leads by destination, agent or branch. When someone is on leave during peak season, another colleague can pick up right where things were left, because the full history is already there." },
      { icon: "chart", tone: "amber", title: "Know What's Working", text: "See which destinations sell, which sources bring real buyers, and how each agent is doing. Simple numbers you can glance at, with no spreadsheets to maintain at the end of the month." },
    ],
    faqTitle: "Travel CRM: Common Questions",
    faqLede: "A few things travel agencies usually want to know before they switch.",
    faqs: [
      { q: "What exactly is a travel CRM?", a: "It is software that keeps every travel enquiry, quote and follow-up in one place, so your team always knows who to call next." },
      { q: "We're a small agency. Is this overkill for us?", a: "No. Plans start at ₹99 a month, and you can start with just a list of enquiries and reminders." },
      { q: "Can it handle our WhatsApp enquiries?", a: "Yes. Send itineraries and reminders on WhatsApp and keep the conversation history against each traveller." },
      { q: "What happens during the peak season rush?", a: "Leads are assigned automatically and every follow-up is reminded, so busy weeks don't mean missed enquiries." },
      { q: "Do we need any technical know-how to use it?", a: "No. There is no long training. Add your enquiries, set reminders and start calling." },
      { q: "Can I try it before paying?", a: "Yes. Start a free trial and see how many more trips you can close." },
    ],
    ctaTitle: "Stop Losing Travellers to Slow Follow-ups",
    ctaLede: "Give your agency one place to catch every enquiry and follow up on time. Try Softmark CRM free and see how many more trips you can close.",
    floats: [],
  },
  {
    slug: "automotive", name: "Car Dealerships", headline: ["Automotive CRM & Lead Management Software for ", "Car Dealerships"],
    lede: "Capture every vehicle enquiry, track test drives, and never miss a follow-up. Softmark CRM is lead management built for car dealerships, bike showrooms and auto service centers, from just ₹99 a month.",
    groups: [
      {
        title: "One Automotive CRM for Sales, Service & Follow-ups", cols: 3,
        lede: "From the first enquiry to the next service visit, Softmark keeps your whole automotive funnel in one place.",
        items: [
          { icon: "target", title: "Automotive Lead Management", tone: "rose", points: ["Capture leads from every source automatically", "Track by vehicle model, budget and lead stage", "Auto-assign and follow-up reminders"] },
          { icon: "car", title: "CRM Software for Car Dealerships", tone: "blue", points: ["Test drive and booking management", "Quotation, exchange and finance tracking", "Sales pipeline and team performance"] },
          { icon: "refresh", title: "Automotive Service CRM", tone: "amber", points: ["Service appointment scheduling", "Vehicle-wise repair and service history", "Service-due and renewal reminders"] },
        ],
      },
      {
        title: "Automotive Businesses We Support", cols: 3,
        lede: "Softmark adapts to every type of automotive business with your own fields and statuses.",
        items: [
          { icon: "car", title: "Car Dealerships", tone: "rose", points: ["New and used car sales", "Financing and exchange tracking", "Trade-in management"] },
          { icon: "bolt", title: "Motorcycle Dealers", tone: "blue", points: ["Bike and scooter sales", "Service and maintenance", "Accessories sales"] },
          { icon: "layers", title: "Commercial Vehicle Dealers", tone: "green", points: ["Truck and bus sales", "Fleet management", "B2B lead tracking"] },
          { icon: "refresh", title: "Auto Service Centers", tone: "amber", points: ["Service appointment booking", "Repair history tracking", "Parts and job follow-ups"] },
          { icon: "store", title: "Auto Parts Dealers", tone: "violet", points: ["Parts catalogue enquiries", "Customer follow-ups", "Bulk order enquiries"] },
          { icon: "shield", title: "Auto Insurance Agencies", tone: "sky", points: ["Policy management", "Claims follow-ups", "Renewal tracking"] },
        ],
      },
    ],
    featuresTitle: "Why Choose Softmark Automotive CRM?",
    featuresLede: "Built for sales floors that handle dozens of enquiries a day, so every vehicle lead gets a timely call.",
    features: [
      { icon: "inbox", tone: "rose", title: "Smart Lead Management", text: "Capture leads from Facebook, IVR, spreadsheets and your website, and keep vehicle preferences on every lead." },
      { icon: "chart", tone: "green", title: "Complete Sales Tracking", text: "Follow each enquiry from first call to delivery with your own statuses and team-wise reports." },
      { icon: "calendar", tone: "amber", title: "Service Appointment Follow-ups", text: "Schedule reminders for service dues and renewals so customers keep coming back." },
      { icon: "wallet", tone: "blue", title: "Finance & Insurance Follow-ups", text: "Track loan, exchange and insurance conversations against each lead so none is dropped." },
      { icon: "users", tone: "violet", title: "Complete Customer Profiles", text: "Keep call history, notes and custom fields such as brand, model and pincode in one place." },
      { icon: "mobile", tone: "sky", title: "Works on Every Phone", text: "An Android caller app lets your field and showroom staff follow up from anywhere." },
    ],
    table: {
      title: "Manual Calling vs Softmark CRM", lede: "See how Softmark compares to managing enquiries by hand.", usLabel: "Softmark CRM", themLabel: "Manual calling",
      rows: ["Click-to-send WhatsApp messaging", "Lead management and pipeline (status, follow-up)", "Follow-up reminders and calendar", "Capture from Facebook, IVR and spreadsheets", "Real-time dashboards and reports", "Lead notes, history and custom fields", "Team assignment and tasks", "Mobile-friendly access", "Easy-to-use interface"],
    },
    faqTitle: "Frequently Asked Questions",
    faqLede: "Get answers to the most common questions about automotive CRM and how Softmark can help your dealership.",
    faqs: [
      { q: "What is automotive CRM software?", a: "It is software that captures every vehicle enquiry, tracks test drives, quotes and follow-ups, and keeps customer history in one place." },
      { q: "What is the best CRM software for car dealerships?", a: "Softmark CRM started on tractor, truck and two-wheeler sales. It captures leads from Facebook and IVR, keeps brand, model and pincode on each lead, and reminds your team to follow up." },
      { q: "Does Softmark work as automotive lead management software?", a: "Yes. Leads from every source land in one list and are assigned to your team automatically." },
      { q: "Can Softmark handle automotive service centers?", a: "Yes. Add fields for vehicle and service details and set reminders for service dues and renewals." },
      { q: "How much does Softmark automotive CRM cost?", a: "Plans start at ₹99 a month. See the pricing page for what is included." },
      { q: "Is the automotive CRM mobile-friendly?", a: "Yes. There is an Android caller app so your team can follow up from the showroom or the field." },
    ],
    ctaTitle: "Ready to Transform Your Automotive Business?",
    ctaLede: "Start your free trial today and see how Softmark helps your dealership follow up on every enquiry.",
    floats: ["car", "bolt", "pin", "refresh"],
  },
];
