/** Date helpers for the tax calculators. Dates come from <input type="date"> as "YYYY-MM-DD" and are handled as plain y/m/d, never through timezones. */
export type YMD = { y: number; m: number; d: number };

export function parse(s: string): YMD | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return null;
  const v = { y: +m[1], m: +m[2], d: +m[3] };
  const t = new Date(Date.UTC(v.y, v.m - 1, v.d));
  return t.getUTCFullYear() === v.y && t.getUTCMonth() === v.m - 1 && t.getUTCDate() === v.d ? v : null;
}

const utc = (v: YMD) => Date.UTC(v.y, v.m - 1, v.d);
export const daysBetween = (a: YMD, b: YMD) => Math.round((utc(b) - utc(a)) / 86_400_000);

/** Interest months under s.201(1A): every month or part of a month counts as a full month. */
export function monthsOrPart(from: YMD, to: YMD): number {
  if (daysBetween(from, to) <= 0) return 0;
  const m = (to.y - from.y) * 12 + (to.m - from.m);
  return to.d > from.d ? m + 1 : m;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const fmt = (v: YMD) => `${v.d} ${MONTHS[v.m - 1]} ${v.y}`;
