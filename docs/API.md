# CRM API integration notes

Source of truth: `crms/routes/api.php`, `LeadController::addSingleLead`, `APIMiddleware`. The CRM was not modified.

## Used: lead intake (demo requests)
`POST {CRM_API_BASE_URL}/api/website_lead` (route group `lead_api_middleware`, `WebsiteLeadController`)

Body: `name`, `mobile`, and `company_id` and/or `company_name` (either is enough; id is tried first, then the name,
case-insensitively). Optional `campaign_name`.

- **Company** not found by id or name -> 422 `{error}`. A stale `company_id` no longer breaks the form if `company_name` matches.
- **Campaign**: if `campaign_name` is not sent, the CRM uses this month's campaign `<mon>_campaign` (`oct_campaign`, `nov_campaign`,
  `dec_campaign`, ...) and creates it on the first lead of the month (valid 1st to last day, no volume cap). The same name coming
  round next year is revived for that month. So nothing on the site changes month to month.
- Then it goes through the normal lead intake: invalid number -> `wrong_number`, duplicate mobile in the company -> `duplicate_lead`,
  otherwise `fresh_lead`, assigned per the company's assignment rule.
- Success: 201 `{status:"success", lead_id, lead_status, company, campaign, campaign_created}`. Errors: `{error}` with 422.

The older `POST /api/save_lead` is untouched (needs `company_id` and an existing `campaign_name`).

The browser never calls the CRM directly. `src/app/api/demo-request/route.ts` validates, rate-limits (5/min/IP, in-memory),
applies a honeypot, and proxies server-side so URL, token and company stay in server env vars.

> **Path note:** the CRM mounts `routes/api.php` under `/api` (RouteServiceProvider), so the public endpoint is
> `https://app.softcrms.com/api/website_lead`.

## Needs your decision / follow-up
1. **Token is not enforced.** `APIMiddleware` has its rejection commented out, so `/api/save_lead` is open to anyone who finds it
   (and `/api/get-leads`, `download-history` carry the same group comment about exposure). The site sends `CRM_LEAD_API_TOKEN`
   if set, but it only protects anything once the CRM re-enables the check. Recommend fixing in the CRM.
2. **Email and company are not stored.** `addSingleLead` saves only name and mobile. The form collects email/company and forwards them,
   but they are dropped until the CRM saves them.
3. **The company must exist** in the CRM: set `CRM_COMPANY_NAME` (and/or `CRM_COMPANY_ID`). The campaign is created automatically each month.
4. `CallingApiController::add_new_lead` (`/api/add_new_lead`) was not used: it needs an authenticated user and hardcodes a campaign.
5. CORS on `api/*` is `*`, but we proxy anyway.

## Not in the CRM, so not on the site
No lead scoring, no "On Hold" / "Converted" statuses. Default statuses are Fresh Lead, Interested, Call Back, Not Interested,
Deal Closed (`LeadField::DEFAULT_STATUS_KEYS`); admins add more. Stat tiles on Home (5 sources, 12 field types, 12+ reports)
are copied from the CRM's own landing page.

## Adding pages
Add `src/app/<slug>/page.tsx` with `metadata`, then an entry in `src/lib/site.ts` (`primaryNav` / `footerGroups`).
Note: `next.config.ts` enables `cacheComponents`, so avoid `new Date()` / request data in prerendered components.
