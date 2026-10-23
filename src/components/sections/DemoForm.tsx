"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { validateDemoRequest, type DemoRequest, type FieldErrors } from "@/lib/validation";

const empty: DemoRequest = { name: "", mobile: "", website: "" };

export function DemoForm({ dark = false, inline = false, cta = "Request a demo" }: { dark?: boolean; inline?: boolean; cta?: string }) {
  const uid = useId();
  const [values, setValues] = useState<DemoRequest>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const set = (k: keyof DemoRequest) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validateDemoRequest(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setState("loading");
    setMessage("");
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setState("done");
        setValues(empty);
      } else {
        if (json.errors) setErrors(json.errors);
        setMessage(json.error ?? "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setMessage("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="rounded-2xl border border-success/30 bg-white p-8 text-center text-body">
        <p className="text-xl font-bold text-ink">Thanks, we&apos;ve got your request.</p>
        <p className="mt-2 text-muted">Our team will call you shortly to schedule your demo.</p>
      </div>
    );
  }

  const input =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-body placeholder:text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const label = `mb-1.5 block text-sm font-semibold ${dark ? "text-white" : "text-ink"}`;

  const field = (k: keyof DemoRequest, text: string, type = "text", auto?: string, required = false) => (
    <div>
      <label htmlFor={`${uid}-${k}`} className={label}>
        {text}
        {required && <span className="text-danger"> *</span>}
      </label>
      <input
        id={`${uid}-${k}`}
        name={k}
        type={type}
        autoComplete={auto}
        value={values[k] ?? ""}
        onChange={set(k)}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `${uid}-${k}-err` : undefined}
        inputMode={k === "mobile" ? "numeric" : undefined}
        className={input}
      />
      {errors[k] && (
        <p id={`${uid}-${k}-err`} className={`mt-1 text-sm ${dark ? "text-red-300" : "text-danger"}`}>
          {errors[k]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className={`grid gap-4 ${inline ? "sm:grid-cols-[1fr_1fr_auto] sm:items-start" : "sm:grid-cols-2"}`}>
      {field("name", "Full name", "text", "name", true)}
      {field("mobile", "Mobile number", "tel", "tel", true)}
      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={set("website")} />
      </div>
      <div className={inline ? "sm:pt-[1.85rem]" : "sm:col-span-2"}>
        <Button type="submit" variant={dark ? "light" : "primary"} disabled={state === "loading"} className="w-full whitespace-nowrap sm:w-auto">
          {state === "loading" ? "Sending…" : cta}
        </Button>
        {state === "error" && (
          <p role="alert" className={`mt-3 text-sm ${dark ? "text-red-300" : "text-danger"}`}>
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
