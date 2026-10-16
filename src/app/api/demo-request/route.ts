import { cleanMobile, validateDemoRequest, type DemoRequest } from "@/lib/validation";

// Server-side proxy so the CRM base URL / token / campaign never reach the browser.
// Forwards to the CRM's lead intake: POST {CRM_API_BASE_URL}/api/save_lead (see docs/API.md).
// The CRM mounts routes/api.php under /api, so the public path is /api/save_lead; plain /save_lead is a 404.
// Defaults below are the website's own campaign (not secrets); override them with env vars.
const DEFAULTS = { base: "https://crms.softwinquote.com", campaign: "october_new1", companyId: "6a924caa5db22457820d9772" };

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
  const campaign = process.env.CRM_DEMO_CAMPAIGN || DEFAULTS.campaign;
  const companyId = process.env.CRM_COMPANY_ID || DEFAULTS.companyId;

  try {
    const res = await fetch(`${base.replace(/\/$/, "")}/api/save_lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(process.env.CRM_LEAD_API_TOKEN ? { Authorization: `Bearer ${process.env.CRM_LEAD_API_TOKEN}` } : {}),
      },
      body: JSON.stringify({
        name: data.name.trim(),
        mobile: Number(cleanMobile(data.mobile)),
        company_id: companyId,
        campaign_name: campaign,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const text = await res.text().catch(() => "");
    console.info("[demo-request] CRM responded", res.status, text.slice(0, 300));
    if (!res.ok) {
      console.error("[demo-request] CRM rejected the lead", res.status);
      return Response.json({ error: "We couldn't submit your request. Please try again." }, { status: 502 });
    }
    // The CRM can answer HTTP 200 with an error body (e.g. unknown campaign), so read the body too.
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
