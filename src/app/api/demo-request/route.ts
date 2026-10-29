import { CRM_APP_BASE } from "@/lib/crm";
import { cleanMobile, validateDemoRequest, type DemoRequest } from "@/lib/validation";

// Server-side proxy so the CRM URL never reaches the browser.
// Forwards to the CRM's demo intake: POST {CRM_APP_BASE}/api/demo_request (https://app.softcrms.com/crms/api/demo_request).
// The CRM saves the request, lists it for the super admin (Demo Requests) and emails them.
// Override the whole URL with CRM_DEMO_API_URL.
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

  const url = process.env.CRM_DEMO_API_URL || `${CRM_APP_BASE}/api/demo_request`;
  const page = String((body as { page?: unknown }).page ?? "").slice(0, 200);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(process.env.CRM_LEAD_API_TOKEN ? { Authorization: `Bearer ${process.env.CRM_LEAD_API_TOKEN}` } : {}),
      },
      body: JSON.stringify({
        name: data.name.trim(),
        mobile: cleanMobile(data.mobile),
        source: "website",
        page,
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
