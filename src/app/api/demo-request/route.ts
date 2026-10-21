import { CRM_BASE } from "@/lib/crm";
import { cleanMobile, validateDemoRequest, type DemoRequest } from "@/lib/validation";

// Server-side proxy so the CRM base URL / token / campaign never reach the browser.
// Forwards to the CRM's website intake: POST {CRM_API_BASE_URL}/api/website_lead (see docs/API.md).
// The CRM mounts routes/api.php under /api, so the public path is /api/website_lead.
// The CRM finds the company by id OR name and creates this month's campaign itself (oct_campaign,
// nov_campaign, ...), so nothing here has to change when the month does. Defaults are not secrets.
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

  let body: Partial<DemoRequest>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const data: DemoRequest = {
    name: String(body.name ?? ""),
    mobile: String(body.mobile ?? ""),
    website: String(body.website ?? ""),
  };

  // Honeypot: bots fill the hidden field. Pretend success.
  if (data.website) return Response.json({ ok: true });

  const errors = validateDemoRequest(data);
  if (Object.keys(errors).length) return Response.json({ error: "Please check the highlighted fields.", errors }, { status: 422 });

  const base = process.env.CRM_API_BASE_URL || DEFAULTS.base;
  // Only set CRM_DEMO_CAMPAIGN to pin one fixed campaign; left empty the CRM uses the monthly one.
  const campaign = process.env.CRM_DEMO_CAMPAIGN || "";
  const companyId = process.env.CRM_COMPANY_ID || DEFAULTS.companyId;
  const companyName = process.env.CRM_COMPANY_NAME || DEFAULTS.companyName;

  try {
    const res = await fetch(`${base.replace(/\/$/, "")}/api/website_lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(process.env.CRM_LEAD_API_TOKEN ? { Authorization: `Bearer ${process.env.CRM_LEAD_API_TOKEN}` } : {}),
      },
      body: JSON.stringify({
        name: data.name.trim(),
        mobile: Number(cleanMobile(data.mobile)),
        // The CRM tries the id first, then the name, so a stale id no longer breaks the form.
        company_id: companyId,
        company_name: companyName,
        ...(campaign ? { campaign_name: campaign } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const text = await res.text().catch(() => "");
    console.info("[demo-request] CRM responded", res.status, text.slice(0, 300));
    if (!res.ok) {
      console.error("[demo-request] CRM rejected the lead", res.status);
      return Response.json({ error: "We couldn't submit your request. Please try again." }, { status: 502 });
    }
    // Be defensive: also read the body for an error message, whatever the status code was.
    let parsed: { error?: string; original?: { error?: string } } | null = null;
    try { parsed = JSON.parse(text); } catch { /* non-JSON body: trust the status code */ }
    const crmError = parsed?.original?.error ?? parsed?.error;
    if (crmError) {
      console.error("[demo-request] CRM did not save the lead:", crmError);
      return Response.json({ error: "We couldn't submit your request. Please try again." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[demo-request] CRM unreachable", err);
    return Response.json({ error: "We couldn't reach our servers. Please try again." }, { status: 502 });
  }
}
