import type { IconName } from "@/components/ui/Icon";

export type Location = {
  slug: string;
  /** Shown as "CRM Software in {name}". */
  name: string;
  /** Small pill above the headline. */
  region: string;
  /** Word in the headline that gets the accent colour (the place name). */
  lede: string;
  intro: [string, string];
  stats: [string, string][];
  sectionTitle: string;
  sectorsTitle: string;
  sectors: { icon: IconName; title: string; text: string }[];
  whyTitle: string;
  why: { icon: IconName; title: string; text: string }[];
  quote: { text: string; name: string; role: string };
  faqs: { q: string; a: string }[];
};

// Copy is written from what the CRM does (lead capture, auto-assignment, follow-ups, WhatsApp, calling, mobile app, ₹99 plan).
// The quotes are placeholders: replace them with real customer quotes before launch.
export const locations: Location[] = [
  {
    slug: "india", name: "India", region: "Pan-India",
    lede: "From metro boardrooms to Tier-3 high streets, Softmark CRM is the affordable, made-for-Bharat CRM that captures every enquiry, assigns it instantly and follows up in the language your customer speaks.",
    intro: [
      "Indian businesses run on relationships, referrals and relentless follow-up across WhatsApp, missed calls, Justdial, IndiaMART, Facebook and walk-ins. Softmark CRM pulls every one of those enquiries into a single list so a Diwali campaign in Jaipur or a buyer in Coimbatore never slips through the cracks.",
      "Whether you sell flats, courses, policies or tractors, you get round-the-clock lead capture, automatic distribution to your team, and reminders that nudge your reps right when a prospect is ready to talk. All of it priced for Indian margins, starting at just ₹99.",
    ],
    stats: [["24/7", "Lead capture"], ["₹99", "Starting price / month"], ["Seconds", "To assign a new lead"], ["Android", "Caller app for field teams"]],
    sectionTitle: "A CRM built for the way India does business",
    sectorsTitle: "Trusted by growing teams across every Indian industry",
    sectors: [
      { icon: "building", title: "Real Estate & Builders", text: "Capture site-visit enquiries from portals and hoardings, and route them to the nearest sales executive." },
      { icon: "users", title: "Education & Coaching", text: "Manage admission enquiries and counselling follow-ups for institutes, coaching centres and edtech brands." },
      { icon: "shield", title: "Insurance & Finance", text: "Track policy renewals, loan leads and SIP prospects with timely, automated reminders." },
      { icon: "store", title: "Dealers & Retail", text: "Share leads with dealers, find the nearest showroom and keep every enquiry on one list." },
      { icon: "heart", title: "Healthcare & Clinics", text: "Book appointments, send treatment reminders and keep patient enquiries organised." },
      { icon: "car", title: "Automotive", text: "Tractors, trucks and two-wheelers: from first enquiry to GST invoice." },
    ],
    whyTitle: "Why growing Indian businesses choose Softmark CRM",
    why: [
      { icon: "wallet", title: "Priced for Indian margins", text: "Lead management from ₹99 a month, with no per-seat surprises." },
      { icon: "chat", title: "WhatsApp-first follow-ups", text: "Send templates and offers over WhatsApp, in whichever language your buyer prefers." },
      { icon: "bolt", title: "Instant lead distribution", text: "Assign by source, location or round-robin so the right rep gets the lead in seconds." },
      { icon: "mobile", title: "Works on every phone", text: "A fast Android caller app your field team can run on an entry-level handset." },
    ],
    quote: { text: "We run sales across five states and Softmark is the only place our entire pipeline lives. The WhatsApp follow-ups alone paid for the subscription in the first week.", name: "Anil Verma", role: "National Sales Head, building materials brand" },
    faqs: [
      { q: "Which is the best CRM software in India for small businesses?", a: "Softmark CRM is built for small and growing Indian teams: leads from Facebook, IVR and spreadsheets in one list, a calling panel, follow-up reminders and an Android app, starting at ₹99 a month." },
      { q: "Does Softmark CRM support WhatsApp follow-ups?", a: "Yes. You can send WhatsApp templates and offers from the CRM and keep the conversation history against each lead." },
      { q: "Is the CRM available across all of India?", a: "Yes. It is a cloud CRM, so teams in any state or city can sign up and start using it the same day." },
      { q: "How much does CRM software cost in India?", a: "Softmark CRM starts at ₹99 a month. See the pricing page for exactly what the plan includes." },
    ],
  },
  {
    slug: "delhi", name: "Delhi NCR", region: "Delhi NCR",
    lede: "From the property corridors of Dwarka, Noida and Gurugram to the coaching hubs of Mukherjee Nagar, Softmark CRM helps Delhi businesses chase every lead at the pace the capital demands.",
    intro: [
      "Delhi-NCR moves quickly. A buyer enquiring about a flat in Noida will call three more dealers before lunch, and a UPSC aspirant comparing coaching institutes in Rajinder Nagar decides in days, not weeks. Softmark CRM makes sure your team responds first, with instant lead alerts and automatic assignment the moment an enquiry lands.",
      "Just like the Metro stitches the capital together, Softmark connects every lead source, Facebook, 99acres, Justdial, walk-ins at Karol Bagh, and trade enquiries from Chandni Chowk, into one organised pipeline your whole NCR team can act on.",
    ],
    stats: [["3x", "Faster first response"], ["24/7", "Lead capture"], ["Pincode", "Based lead routing"], ["₹99", "Starting price / month"]],
    sectionTitle: "Keep up with the fastest market in the country",
    sectorsTitle: "Powering Delhi's busiest sectors",
    sectors: [
      { icon: "building", title: "Real Estate (Noida, Gurugram, Dwarka)", text: "Distribute high-intent property leads to the right area sales team in seconds." },
      { icon: "users", title: "UPSC & Competitive Coaching", text: "Manage admission enquiries from Mukherjee Nagar and Rajinder Nagar with timely counselling follow-ups." },
      { icon: "store", title: "Traders & Exporters", text: "Organise bulk enquiries from Karol Bagh, Chandni Chowk and Okhla wholesale markets." },
      { icon: "calendar", title: "Events & Weddings", text: "Track banquet, catering and decor enquiries through the long NCR wedding season." },
      { icon: "shield", title: "Insurance & Loans", text: "Never miss a renewal or a loan lead with automated reminders." },
      { icon: "layers", title: "Startups & Agencies", text: "A lightweight CRM for Gurugram's fast-scaling digital and service businesses." },
    ],
    whyTitle: "Why Delhi NCR teams run on Softmark CRM",
    why: [
      { icon: "bolt", title: "Respond before competitors", text: "Instant lead alerts mean your rep calls the Noida buyer before the next dealer does." },
      { icon: "pin", title: "Location-based routing", text: "Send Gurugram leads to the Gurugram team and Dwarka leads to Dwarka, automatically." },
      { icon: "users", title: "Built for large teams", text: "Manage dozens of tele-callers and field execs across NCR from one dashboard." },
      { icon: "wallet", title: "Affordable at scale", text: "Lead management from ₹99, ideal for high-volume NCR sales floors." },
    ],
    quote: { text: "In Noida real estate, whoever calls first wins. Softmark pings my team the second a lead arrives, and our site-visit conversions are up massively.", name: "Rohit Khanna", role: "Director, NCR property consultancy" },
    faqs: [
      { q: "What is the best CRM software in Delhi for real estate?", a: "Softmark CRM captures property enquiries from portals, ads and calls, then assigns each one to the right sales executive by area so your team can respond within seconds." },
      { q: "Can Softmark handle large tele-calling teams in NCR?", a: "Yes. The calling panel, call history and follow-up reminders are built for teams that make hundreds of calls a day, with a manager view across all callers." },
      { q: "Does it work for coaching institutes in Delhi?", a: "Yes. Capture admission enquiries, assign them to counsellors and schedule follow-ups until the student enrols." },
      { q: "Is there a free trial for Delhi businesses?", a: "Yes. You can start a free trial from this page and be capturing leads the same day." },
    ],
  },
  {
    slug: "mumbai", name: "Mumbai", region: "Mumbai (MMR)",
    lede: "In a city that never slows down, Softmark CRM gives BFSI desks, broking houses and premium realty teams across Nariman Point, BKC and the suburbs the dabbawala-grade precision their pipeline deserves.",
    intro: [
      "Mumbai runs on speed and trust, whether it is a high-ticket apartment off Marine Drive, a portfolio review in BKC or an insurance renewal in Andheri. Softmark CRM captures every enquiry from your campaigns, website and calls, then assigns it instantly so a hot lead is worked while it is still warm.",
      "Like the local trains that keep the maximum city moving, Softmark keeps your sales engine running on time: automated follow-up reminders, full conversation history, and a dashboard your managers can read between two meetings.",
    ],
    stats: [["Seconds", "Lead assignment"], ["100%", "Follow-ups tracked"], ["24/7", "Capture across MMR"], ["₹99", "Starting price / month"]],
    sectionTitle: "Pipeline precision for the city of deals",
    sectorsTitle: "Made for Mumbai's money-moving industries",
    sectors: [
      { icon: "chart", title: "BFSI & Stock Broking", text: "Track high-value prospects and SIP and insurance renewals from Nariman Point to BKC." },
      { icon: "building", title: "Premium Real Estate", text: "Manage luxury apartment and redevelopment enquiries with white-glove follow-ups." },
      { icon: "layers", title: "Media & Production", text: "Organise brand, campaign and client enquiries for agencies and studios." },
      { icon: "shield", title: "Insurance Advisors", text: "Automate renewal reminders so no policyholder is ever forgotten." },
      { icon: "bolt", title: "Startups & SaaS", text: "A scalable CRM for Mumbai's fast-growing tech and D2C founders." },
      { icon: "store", title: "Hospitality & Retail", text: "Convert booking and membership enquiries across the metro region." },
    ],
    whyTitle: "Why Mumbai sales teams trust Softmark CRM",
    why: [
      { icon: "bolt", title: "Speed that matches the city", text: "Leads are captured and assigned in seconds, so your team never loses a deal to a faster competitor." },
      { icon: "bell", title: "Never miss a follow-up", text: "Automated reminders keep every high-value prospect and renewal on track." },
      { icon: "chart", title: "Manager-friendly insights", text: "See team performance and pipeline health at a glance, between back-to-back meetings." },
      { icon: "wallet", title: "Premium features, sane pricing", text: "Everything a Mumbai sales floor needs from ₹99 a month." },
    ],
    quote: { text: "Between BKC and the suburbs my advisors juggle hundreds of clients. Softmark makes sure not a single renewal or referral falls through.", name: "Priya Mehta", role: "Founder, Mumbai wealth advisory" },
    faqs: [
      { q: "What is the best CRM software in Mumbai for finance and broking?", a: "Softmark CRM tracks prospects through custom statuses, sets follow-ups for every renewal and keeps call history on each client, at a price that suits small advisory firms." },
      { q: "Can it handle premium real estate leads in Mumbai?", a: "Yes. Add fields like budget, locality and configuration, assign leads to the right agent and follow up until the site visit is booked." },
      { q: "Does Softmark work across the entire MMR region?", a: "Yes. It is cloud-based, so teams in Mumbai, Thane, Navi Mumbai and beyond all work from the same lead list." },
      { q: "How affordable is it for Mumbai startups?", a: "Plans start at ₹99 a month, so even a small founding team can run a proper sales pipeline from day one." },
    ],
  },
  {
    slug: "bangalore", name: "Bangalore", region: "Bengaluru",
    lede: "From Koramangala startups to Whitefield tech parks and Indiranagar showrooms, Softmark CRM keeps Bengaluru's fast-moving teams on top of every lead.",
    intro: [
      "Bengaluru buys differently. SaaS demos, flat bookings in Sarjapur and admissions for schools along Outer Ring Road all depend on who follows up first and who follows up well. Softmark CRM captures every enquiry from ads, forms and calls and puts it in front of the right person immediately.",
      "With reminders, call history and WhatsApp follow-ups in one place, your team can keep up the pace of India's startup capital without drowning in spreadsheets.",
    ],
    stats: [["24/7", "Lead capture"], ["Seconds", "To assign a lead"], ["1 list", "For every source"], ["₹99", "Starting price / month"]],
    sectionTitle: "Built for the pace of India's startup capital",
    sectorsTitle: "Powering Bengaluru's growth sectors",
    sectors: [
      { icon: "bolt", title: "SaaS & IT Services", text: "Route demo requests and inbound leads to the right account executive." },
      { icon: "building", title: "Real Estate", text: "Manage site-visit enquiries across Whitefield, Sarjapur and North Bengaluru." },
      { icon: "users", title: "Education & Schools", text: "Track admission enquiries and counselling follow-ups for schools and colleges." },
      { icon: "heart", title: "Healthcare & Wellness", text: "Book appointments and send reminders for clinics and diagnostic centres." },
      { icon: "store", title: "D2C & Retail", text: "Turn ad leads into repeat customers with timely follow-ups." },
      { icon: "layers", title: "Agencies & Consulting", text: "Keep client enquiries, proposals and follow-ups in one pipeline." },
    ],
    whyTitle: "Why Bengaluru teams choose Softmark CRM",
    why: [
      { icon: "layers", title: "Every source, one list", text: "Facebook, Google, forms, IVR and spreadsheets all land in the same place." },
      { icon: "chat", title: "Multilingual follow-ups", text: "Follow up over WhatsApp in Kannada, English or Hindi, whatever your buyer prefers." },
      { icon: "chart", title: "Clear reporting", text: "See which source and which rep convert, without building a report by hand." },
      { icon: "wallet", title: "Startup-friendly pricing", text: "Start at ₹99 a month and grow the team without a pricing shock." },
    ],
    quote: { text: "We were tracking demos in a sheet. Now every inbound lead is assigned in seconds and nothing gets forgotten after the first call.", name: "Karthik Rao", role: "Co-founder, Bengaluru SaaS startup" },
    faqs: [
      { q: "What is the best CRM software in Bangalore for startups?", a: "Softmark CRM is light to set up, priced from ₹99 a month and covers lead capture, calling, follow-ups and reporting, which is what most early teams need." },
      { q: "Can I capture leads from Facebook and Google ads?", a: "Yes. Leads from Facebook, IVR and spreadsheet uploads come straight into the list and can be assigned automatically." },
      { q: "Does it support WhatsApp follow-ups?", a: "Yes. Send templates and offers over WhatsApp and keep the conversation history against the lead." },
      { q: "Can I try it before paying?", a: "Yes. Start a free trial from this page and set up your first pipeline in minutes." },
    ],
  },
  {
    slug: "hyderabad", name: "Hyderabad", region: "Hyderabad",
    lede: "From the IT corridors of HITEC City and Gachibowli to the booming realty of Kondapur, Softmark CRM brings Hyderabad businesses a CRM with the richness of a Charminar bazaar and the discipline of a pharma lab.",
    intro: [
      "Hyderabad is two cities in one: the timeless trade of the old city and the glass towers of HITEC City. Softmark CRM serves both, capturing enquiries from property campaigns in Gachibowli, admission drives across the city, and pharma and IT B2B pipelines, then assigning each to the right person automatically.",
      "As reliable as the city is for biryani, Softmark makes your follow-up reliable too: automated reminders, full lead history and WhatsApp templates that keep your prospects engaged from first enquiry to closed deal.",
    ],
    stats: [["B2B + B2C", "Workflows supported"], ["Area-wise", "Lead routing"], ["24/7", "Lead capture"], ["₹99", "Starting price / month"]],
    sectionTitle: "Where old-city hustle meets new-city scale",
    sectorsTitle: "Serving Hyderabad's defining sectors",
    sectors: [
      { icon: "layers", title: "IT & ITES (HITEC City)", text: "Manage B2B pipelines, demos and partner enquiries with clean sales stages." },
      { icon: "heart", title: "Pharma & Life Sciences", text: "Track distributor, institutional and B2B enquiries across Genome Valley and beyond." },
      { icon: "building", title: "Real Estate (Gachibowli, Kondapur)", text: "Route fast-moving apartment and plot leads to the nearest sales team instantly." },
      { icon: "users", title: "Education & Coaching", text: "Convert admission enquiries with timely counselling follow-ups." },
      { icon: "store", title: "Retail & Jewellery", text: "Nurture high-value walk-in and festive-season enquiries." },
      { icon: "shield", title: "Insurance & Finance", text: "Automate renewals and loan follow-ups so nothing slips." },
    ],
    whyTitle: "Why Hyderabad businesses choose Softmark CRM",
    why: [
      { icon: "layers", title: "Handles B2B and B2C alike", text: "From pharma distributor pipelines to apartment buyers, one CRM, every workflow." },
      { icon: "pin", title: "Area-wise lead routing", text: "Send Gachibowli leads to the Gachibowli team and old-city enquiries to theirs." },
      { icon: "clock", title: "Complete lead history", text: "Every call, note and WhatsApp message in one place for clean handovers." },
      { icon: "wallet", title: "Value for money", text: "Full-featured lead management starting at just ₹99 per month." },
    ],
    quote: { text: "Our Gachibowli project sold out faster than planned. Softmark made sure every enquiry got a call within minutes, and that responsiveness closed the deals.", name: "Sandeep Reddy", role: "Sales Head, Hyderabad real estate developer" },
    faqs: [
      { q: "What is the best CRM software in Hyderabad for real estate?", a: "Softmark CRM captures property enquiries from ads and portals, assigns them by area and keeps reminders on every visit and follow-up." },
      { q: "Does it work for pharma and IT B2B sales?", a: "Yes. Add your own fields and statuses for distributors, demos or quotations and track each account through your stages." },
      { q: "Can it route leads by area within Hyderabad?", a: "Yes. Assign leads by area or pincode so each team handles its own part of the city." },
      { q: "Is there a free trial and what does it cost?", a: "Yes, you can start a free trial from this page. Plans start at ₹99 a month." },
    ],
  },
  {
    slug: "pune", name: "Pune", region: "Pune",
    lede: "From Hinjewadi IT parks and Baner startups to Kothrud coaching classes and Pimpri-Chinchwad manufacturers, Softmark CRM keeps Pune's sales teams organised and quick.",
    intro: [
      "Pune blends manufacturing, IT, education and real estate in one city. Whether it is an auto-component enquiry from Chakan, an admission query in Kothrud or a flat booking in Wakad, the team that follows up fastest wins. Softmark CRM brings every enquiry into one list and assigns it straight away.",
      "Automated reminders, call history and WhatsApp follow-ups mean nothing gets forgotten after the first conversation, even when your team is spread across the city.",
    ],
    stats: [["24/7", "Lead capture"], ["Seconds", "To assign a lead"], ["1 list", "For every source"], ["₹99", "Starting price / month"]],
    sectionTitle: "Organised selling for the Oxford of the East",
    sectorsTitle: "Powering Pune's key sectors",
    sectors: [
      { icon: "layers", title: "Manufacturing & Auto Components", text: "Track B2B enquiries and quotations from Chakan, Pimpri and Talegaon." },
      { icon: "bolt", title: "IT & Startups", text: "Manage inbound leads and demos for Hinjewadi and Baner teams." },
      { icon: "users", title: "Education & Coaching", text: "Handle admission enquiries and counselling follow-ups across Kothrud and Sadashiv Peth." },
      { icon: "building", title: "Real Estate", text: "Route flat and plot enquiries across Wakad, Hadapsar and Kharadi." },
      { icon: "car", title: "Automotive & Dealers", text: "Share leads with dealers and track each one through to delivery." },
      { icon: "shield", title: "Insurance & Finance", text: "Keep renewals and loan enquiries on schedule." },
    ],
    whyTitle: "Why Pune businesses choose Softmark CRM",
    why: [
      { icon: "layers", title: "Every source, one list", text: "Ads, IVR, forms and spreadsheets all land in the same pipeline." },
      { icon: "bell", title: "No missed follow-ups", text: "Reminders keep every quote and enquiry moving until it closes." },
      { icon: "chat", title: "Marathi, Hindi or English", text: "Follow up over WhatsApp in the language your buyer prefers." },
      { icon: "wallet", title: "Pricing that makes sense", text: "Start at ₹99 a month and scale as your team grows." },
    ],
    quote: { text: "Our quotations used to get lost between emails and calls. Now every enquiry has an owner and a follow-up date.", name: "Sachin Kulkarni", role: "Director, Pune engineering firm" },
    faqs: [
      { q: "What is the best CRM software in Pune for manufacturers?", a: "Softmark CRM lets you add your own fields and statuses, so enquiries, quotations and follow-ups match how your sales process actually works." },
      { q: "Can coaching classes in Pune use it?", a: "Yes. Capture admission enquiries, assign counsellors and follow up until enrolment." },
      { q: "Does it integrate with Facebook ads?", a: "Yes. Facebook leads, IVR calls and spreadsheet uploads all feed the same list." },
      { q: "Is there a free trial?", a: "Yes. Start a free trial from this page and be live the same day." },
    ],
  },
];

/** "CRM Software in India" etc. */
export const locationTitle = (l: Location) => `CRM Software in ${l.name}`;
