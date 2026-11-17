"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { validatePartnerRequest, type PartnerErrors, type PartnerRequest } from "@/lib/validation";

const empty: PartnerRequest = { name: "", mobile: "", email: "", state: "", city: "", agree: false, website: "" };
const states = ["Andhra Pradesh", "Bihar", "Delhi", "Gujarat", "Haryana", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "West Bengal", "Other"];

export function PartnerForm() {
  const uid = useId();
  const [v, setV] = useState<PartnerRequest>(empty);
  const [errors, setErrors] = useState<PartnerErrors>({});
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const on = (k: keyof PartnerRequest) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setV((x) => ({ ...x, [k]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const found = validatePartnerRequest(v);
    setErrors(found);
    if (Object.keys(found).length) return;
    setState("loading");
    try {
      const res = await fetch("/api/partner-request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      const json = await res.json().catch(() => ({}));
      if (res.ok) { setState("done"); setV(empty); return; }
      if (json.errors) setErrors(json.errors);
      setMessage(json.error ?? "Something went wrong. Please try again.");
      setState("error");
    } catch {
      setMessage("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="rounded-2xl border border-success/30 bg-white p-8 text-center">
        <p className="text-xl font-bold text-ink">Thanks, we&apos;ve got your application.</p>
        <p className="mt-2 text-muted">Our team will call you within one business day with partner details.</p>
      </div>
    );
  }

  const input = "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-body placeholder:text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const field = (k: "name" | "mobile" | "email" | "city", text: string, type = "text", required = false) => (
    <div>
      <label htmlFor={`${uid}-${k}`} className="mb-1.5 block text-sm font-semibold text-ink">{text}{required && <span className="text-danger"> *</span>}</label>
      <input id={`${uid}-${k}`} type={type} value={v[k]} onChange={on(k)} aria-invalid={!!errors[k]} inputMode={k === "mobile" ? "numeric" : undefined} className={input} />
      {errors[k] && <p className="mt-1 text-sm text-danger">{errors[k]}</p>}
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2">
      {field("name", "Name", "text", true)}
      {field("mobile", "Mobile", "tel", true)}
      <div className="sm:col-span-2">{field("email", "Email", "email")}</div>
      <div>
        <label htmlFor={`${uid}-state`} className="mb-1.5 block text-sm font-semibold text-ink">State</label>
        <select id={`${uid}-state`} value={v.state} onChange={on("state")} className={input}>
          <option value="">Select</option>
          {states.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      {field("city", "City")}
      <div className="hidden" aria-hidden="true"><input tabIndex={-1} autoComplete="off" name="website" value={v.website} onChange={on("website")} /></div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 rounded-xl bg-canvas p-3 text-sm text-muted">
          <input type="checkbox" checked={v.agree} onChange={on("agree")} className="mt-1 size-4 accent-[var(--color-primary)]" />
          <span>I agree to be contacted by Softmark about the Partner Program and accept the privacy policy. <span className="text-danger">*</span></span>
        </label>
        {errors.agree && <p className="mt-1 text-sm text-danger">{errors.agree}</p>}
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={state === "loading"} className="w-full">{state === "loading" ? "Sending…" : "Submit partner application"}</Button>
        {state === "error" && <p role="alert" className="mt-3 text-sm text-danger">{message}</p>}
        <p className="mt-3 text-center text-xs text-subtle">Your details are safe with us. No spam.</p>
      </div>
    </form>
  );
}
