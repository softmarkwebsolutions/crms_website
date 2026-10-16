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
