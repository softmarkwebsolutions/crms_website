/** One base URL for the CRM app: sign in, register and the lead API all hang off it. Override with NEXT_PUBLIC_CRM_BASE_URL. */
export const CRM_BASE = (process.env.NEXT_PUBLIC_CRM_BASE_URL ?? "https://app.softcrms.com").replace(/\/$/, "");

/** The CRM app lives under /crms, so its API is https://app.softcrms.com/crms/api/... */
export const CRM_APP_BASE = `${CRM_BASE}/crms`;
