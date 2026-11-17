import { CRM_BASE } from "@/lib/crm";
import { cleanMobile, validatePartnerRequest, type PartnerRequest } from "@/lib/validation";

// Same server-side proxy as /api/demo-request: the CRM URL, token and company never reach the browser.
// The lead name is prefixed "Partner" so the team can tell partner applications from demo requests.
const DEFAULTS = { base: CRM_BASE, companyId: "6a924caa5db22457820d9772", companyName: "Softmark Web Solutions" };

const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return Response.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });

  let body: Partial<PartnerRequest>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const data: PartnerRequest = {
    name: String(body.name ?? ""), mobile: String(body.mobile ?? ""), email: String(body.email ?? ""),
    state: String(body.state ?? ""), city: String(body.city ?? ""), agree: body.agree === true, website: String(body.website ?? ""),
  };
  if (data.website) return Response.json({ ok: true });

  const errors = validatePartnerRequest(data);
  if (Object.keys(errors).length) return Response.json({ error: "Please check the highlighted fields.", errors }, { status: 422 });

  const base = process.env.CRM_API_BASE_URL || DEFAULTS.base;
  try {
    const res = await fetch(`${base.replace(/\/$/, "")}/api/website_lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(process.env.CRM_LEAD_API_TOKEN ? { Authorization: `Bearer ${process.env.CRM_LEAD_API_TOKEN}` } : {}),
      },
      body: JSON.stringify({
        name: `Partner ${data.name.trim()}`,
        mobile: Number(cleanMobile(data.mobile)),
        email: data.email.trim(), state: data.state, city: data.city,
        company_id: process.env.CRM_COMPANY_ID || DEFAULTS.companyId,
        company_name: process.env.CRM_COMPANY_NAME || DEFAULTS.companyName,
        ...(process.env.CRM_DEMO_CAMPAIGN ? { campaign_name: process.env.CRM_DEMO_CAMPAIGN } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const text = await res.text().catch(() => "");
    let parsed: { error?: string; original?: { error?: string } } | null = null;
    try { parsed = JSON.parse(text); } catch { /* non-JSON body: trust the status code */ }
    if (!res.ok || parsed?.original?.error || parsed?.error) {
      console.error("[partner-request] CRM did not save the lead", res.status, text.slice(0, 200));
      return Response.json({ error: "We couldn't submit your application. Please try again." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[partner-request] CRM unreachable", err);
    return Response.json({ error: "We couldn't reach our servers. Please try again." }, { status: 502 });
  }
}
