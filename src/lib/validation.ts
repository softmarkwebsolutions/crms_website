/** Mirrors the CRM's own rules (CallingApiController::add_new_lead): name = letters/digits/spaces, mobile = 10 digits. */
export type DemoRequest = { name: string; mobile: string; website?: string };
export type FieldErrors = Partial<Record<keyof DemoRequest, string>>;

export const cleanMobile = (m: string) => m.replace(/[\s-]/g, "");

export function validateDemoRequest(v: DemoRequest): FieldErrors {
  const e: FieldErrors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  else if (!/^[A-Za-z0-9 .'-]{2,80}$/.test(v.name.trim())) e.name = "Use letters and numbers only.";
  if (!/^\d{10}$/.test(cleanMobile(v.mobile))) e.mobile = "Enter a 10-digit mobile number.";
  return e;
}

/** Partner programme application. The CRM only stores name and mobile today; the rest is forwarded for when it does. */
export type PartnerRequest = { name: string; mobile: string; email: string; state: string; city: string; agree: boolean; website?: string };
export type PartnerErrors = Partial<Record<keyof PartnerRequest, string>>;

export function validatePartnerRequest(v: PartnerRequest): PartnerErrors {
  const e: PartnerErrors = validateDemoRequest({ name: v.name, mobile: v.mobile });
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (!v.agree) e.agree = "Please accept to continue.";
  return e;
}
