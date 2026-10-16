import type { IconName } from "@/components/ui/Icon";

export type HrFeature = { icon: IconName; title: string; text: string; grad: string };
export type HrModule = {
  slug: string;
  name: string;
  icon: IconName;
  grad: string;
  blurb: string;
  headline: string;
  lede: string;
  points: string[];
  mock: { title: string; stats: [string, string][]; rows: [string, string, string, string][] };
  features: HrFeature[];
  steps: { icon: IconName; title: string; text: string; grad: string }[];
  /** true when the copy is a placeholder because the product has no matching feature to read it from. */
  placeholder?: boolean;
};

// Attendance, leave and payroll copy follows what the CRM already has (AttendanceController, LeaveController, SalaryProfile).
// Recruitment has no counterpart in the CRM code, so its copy is a placeholder to confirm before launch.
export const hrModules: HrModule[] = [
  {
    slug: "attendance",
    name: "Attendance & leave",
    icon: "clock",
    grad: "from-teal-500 to-emerald-600",
    blurb: "Shifts, check-ins, leave",
    headline: "Know who is in, who is out, and who is on leave.",
    lede: "Staff check in and out from their phone, managers see the day at a glance, and leave requests are approved in one place.",
    points: ["Check-in and check-out from the phone", "Attendance rules and shift settings", "Leave requests, approvals and holidays"],
    mock: { title: "Today's attendance", stats: [["Present", "38"], ["On leave", "3"], ["Late", "2"]], rows: [["Priya M.", "Checked in 09:02", "Present", "bg-success/10 text-emerald-700"], ["Ramesh Y.", "Checked in 09:41", "Late", "bg-warn/15 text-amber-700"], ["Anita D.", "Casual leave", "On leave", "bg-info/10 text-cyan-700"]] },
    features: [
      { icon: "mobile", title: "Phone check-in", text: "Staff check in and out from the app, with a photo kept on the record.", grad: "from-teal-500 to-emerald-600" },
      { icon: "sliders", title: "Attendance settings", text: "Set the rules your company works by, once, for everyone.", grad: "from-violet-500 to-fuchsia-600" },
      { icon: "calendar", title: "Holidays", text: "Add company holidays so they never count against anyone.", grad: "from-orange-400 to-amber-500" },
      { icon: "check", title: "Leave approvals", text: "Approve, reject or revoke a leave request from one list.", grad: "from-primary to-deep-2" },
      { icon: "users", title: "My attendance", text: "Each person sees their own days and balances.", grad: "from-info to-sky-600" },
      { icon: "clock", title: "Edit and correct", text: "Managers fix a missed punch, with the change kept on file.", grad: "from-pink-500 to-rose-600" },
    ],
    steps: [
      { icon: "mobile", title: "Check in", text: "Staff punch in from their phone.", grad: "from-teal-500 to-emerald-600" },
      { icon: "calendar", title: "Request leave", text: "Apply for leave; holidays are already marked.", grad: "from-orange-400 to-amber-500" },
      { icon: "check", title: "Approve", text: "Managers approve or reject in one list.", grad: "from-primary to-deep-2" },
      { icon: "receipt", title: "Feed payroll", text: "Attendance flows into the month's salary.", grad: "from-pink-500 to-rose-600" },
    ],
  },
  {
    slug: "payroll",
    name: "Payroll",
    icon: "receipt",
    grad: "from-amber-400 to-orange-500",
    blurb: "Salary from attendance",
    headline: "Salary worked out from attendance, every month.",
    lede: "Set each person's monthly salary and paid leaves once, and the month's pay follows from their attendance.",
    points: ["A salary profile for every employee", "Paid leaves per month", "Monthly salary from attendance"],
    mock: { title: "October payroll", stats: [["Staff", "41"], ["Paid leaves", "1.5"], ["Ready", "38"]], rows: [["Priya M.", "₹ 32,000 · 0 absent", "Ready", "bg-success/10 text-emerald-700"], ["Ramesh Y.", "₹ 28,000 · 2 absent", "Ready", "bg-success/10 text-emerald-700"], ["Anita D.", "₹ 24,000 · check leave", "Review", "bg-warn/15 text-amber-700"]] },
    features: [
      { icon: "receipt", title: "Salary profile", text: "Monthly salary and paid leaves per month, stored per employee.", grad: "from-amber-400 to-orange-500" },
      { icon: "clock", title: "From attendance", text: "Absences and paid leaves are counted for you.", grad: "from-teal-500 to-emerald-600" },
      { icon: "sliders", title: "Paid leave rules", text: "Decide how many paid leaves each person gets a month.", grad: "from-violet-500 to-fuchsia-600" },
      { icon: "chart", title: "Monthly view", text: "See the whole team's pay for a month in one table.", grad: "from-primary to-deep-2" },
      { icon: "upload", title: "Expenses", text: "Staff log expenses on the phone for reimbursement.", grad: "from-info to-sky-600" },
      { icon: "shield", title: "Access control", text: "Only the right people can see or change salaries.", grad: "from-pink-500 to-rose-600" },
    ],
    steps: [
      { icon: "users", title: "Set salary", text: "Add each person's monthly salary.", grad: "from-amber-400 to-orange-500" },
      { icon: "sliders", title: "Set paid leaves", text: "Choose paid leaves per month.", grad: "from-violet-500 to-fuchsia-600" },
      { icon: "clock", title: "Attendance flows in", text: "Absences are counted automatically.", grad: "from-teal-500 to-emerald-600" },
      { icon: "receipt", title: "Review the month", text: "Check the team's pay in one table.", grad: "from-primary to-deep-2" },
    ],
  },
  {
    slug: "recruitment",
    name: "Recruitment",
    icon: "users",
    grad: "from-sky-500 to-blue-600",
    blurb: "Applied to joined",
    headline: "From an open role to a new joiner.",
    lede: "Open roles, track candidates through each stage and hand a hire straight to onboarding.",
    points: ["Open and close roles", "Move candidates stage by stage", "Hand over to onboarding"],
    placeholder: true,
    mock: { title: "Open roles", stats: [["Roles", "4"], ["Candidates", "27"], ["Offers", "3"]], rows: [["Sales Executive", "12 candidates", "Interview", "bg-info/10 text-cyan-700"], ["Team Leader", "6 candidates", "Screening", "bg-warn/15 text-amber-700"], ["Accountant", "3 candidates", "Offer", "bg-success/10 text-emerald-700"]] },
    features: [
      { icon: "users", title: "Open roles", text: "Publish a role and keep every candidate under it.", grad: "from-sky-500 to-blue-600" },
      { icon: "filter", title: "Stages", text: "Move candidates from applied to joined.", grad: "from-violet-500 to-fuchsia-600" },
      { icon: "calendar", title: "Interviews", text: "Schedule interviews and keep the notes.", grad: "from-orange-400 to-amber-500" },
      { icon: "chat", title: "Reach out", text: "Message candidates from their record.", grad: "from-emerald-500 to-teal-600" },
      { icon: "check", title: "Offers", text: "Track offers sent and accepted.", grad: "from-primary to-deep-2" },
      { icon: "chart", title: "Hiring reports", text: "See where candidates drop off.", grad: "from-pink-500 to-rose-600" },
    ],
    steps: [
      { icon: "users", title: "Open a role", text: "Describe the role and start collecting candidates.", grad: "from-sky-500 to-blue-600" },
      { icon: "filter", title: "Screen", text: "Move the right ones forward.", grad: "from-violet-500 to-fuchsia-600" },
      { icon: "calendar", title: "Interview", text: "Schedule and note each round.", grad: "from-orange-400 to-amber-500" },
      { icon: "check", title: "Offer and join", text: "Send the offer and hand off to onboarding.", grad: "from-primary to-deep-2" },
    ],
  },
];
