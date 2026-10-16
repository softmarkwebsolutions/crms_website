import { DemoForm } from "./DemoForm";

/** Compact name + mobile form for the top of a page; same form and API as the one in the bottom "Request a demo" band. */
export function QuickLead({ className = "" }: { className?: string }) {
  return (
    <div className={`max-w-xl rounded-2xl border border-line bg-white p-4 text-ink shadow-[var(--shadow-card)] ${className}`}>
      <p className="mb-3 text-sm font-bold">Get a call back. <span className="font-normal text-muted">Leave your name and mobile number.</span></p>
      <DemoForm inline />
    </div>
  );
}
