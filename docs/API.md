# CRM API integration notes

Source of truth: `crms/routes/api.php`, `LeadController::addSingleLead`, `APIMiddleware`. The CRM was not modified.

## Used: lead intake (demo requests)
`POST {CRM_API_BASE_URL}/api/save_lead` (route group `lead_api_middleware`)

Fields read by `addSingleLead`: `name`, `mobile`, `campaign_name`, `company_id`. Behaviour: unknown campaign -> 422;
invalid number -> status `wrong_number`; duplicate mobile in the company -> `duplicate_lead`; otherwise `fresh_lead`
and auto-assigned via the campaign. Returns `{lead_id, status, message, status_code}`.

The browser never calls this directly. `src/app/api/demo-request/route.ts` validates, rate-limits (5/min/IP, in-memory),
applies a honeypot, and proxies server-side so URL, token and campaign stay in server env vars.

> **Path note:** the CRM mounts `routes/api.php` under `/api` (RouteServiceProvider), so the public endpoint is
> `https://crms.softwinquote.com/api/save_lead`. `/save_lead` without `/api` returns 404 (checked with an OPTIONS request).
> The form now sends only `name`, `mobile` (number), `company_id` and `campaign_name`; email/company were removed.

## Needs your decision / follow-up
1. **Token is not enforced.** `APIMiddleware` has its rejection commented out, so `/api/save_lead` is open to anyone who finds it
   (and `/api/get-leads`, `download-history` carry the same group comment about exposure). The site sends `CRM_LEAD_API_TOKEN`
   if set, but it only protects anything once the CRM re-enables the check. Recommend fixing in the CRM.
2. **Email and company are not stored.** `addSingleLead` saves only name and mobile. The form collects email/company and forwards them,
   but they are dropped until the CRM saves them.
3. **A campaign must exist** in the CRM (`CRM_DEMO_CAMPAIGN`) with `CRM_COMPANY_ID` set, otherwise submissions fail with 502.
4. `CallingApiController::add_new_lead` (`/api/add_new_lead`) was not used: it needs an authenticated user and hardcodes a campaign.
5. CORS on `api/*` is `*`, but we proxy anyway.

## Not in the CRM, so not on the site
No lead scoring, no "On Hold" / "Converted" statuses. Default statuses are Fresh Lead, Interested, Call Back, Not Interested,
Deal Closed (`LeadField::DEFAULT_STATUS_KEYS`); admins add more. Stat tiles on Home (5 sources, 12 field types, 12+ reports)
are copied from the CRM's own landing page.

## Adding pages
Add `src/app/<slug>/page.tsx` with `metadata`, then an entry in `src/lib/site.ts` (`primaryNav` / `footerGroups`).
Note: `next.config.ts` enables `cacheComponents`, so avoid `new Date()` / request data in prerendered components.
