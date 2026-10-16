import { CallingBento } from "./CallingBento";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CountUp, Reveal } from "@/components/ui/Motion";
import { Section, SectionHead } from "@/components/ui/Section";

const channels: { icon: IconName; name: string; line: string; grad: string }[] = [
  { icon: "chat", name: "WhatsApp", line: "Send an approved template straight from the lead, or message a whole list. Replies come back to a shared inbox.", grad: "from-emerald-500 to-green-600" },
  { icon: "mail", name: "Email", line: "Write to the customer from the lead record, with the conversation kept on its history.", grad: "from-blue-500 to-indigo-600" },
  { icon: "chat", name: "SMS", line: "A short text for customers who don't pick up, sent with one tap.", grad: "from-teal-400 to-cyan-600" },
  { icon: "phone", name: "Click-to-call", line: "Dial from the panel or the Android app and the call is logged against the lead.", grad: "from-orange-400 to-amber-500" },
];

const app: [IconName, string][] = [
  ["home", "Dashboard summary"], ["inbox", "Assigned leads"], ["bell", "Follow-ups & tasks"], ["phone", "Recent calls"],
  ["receipt", "Deal requests"], ["users", "Add a new lead"], ["clock", "Attendance check-in / out"], ["calendar", "Leaves & expenses"],
];

const board = [["Priya M.", 38, 40], ["Ramesh Y.", 31, 40], ["Gurpreet S.", 26, 40], ["Anita D.", 19, 40]] as const;

export function CallingExtras() {
  return (
    <>
      <CallingBento />

      <Section tone="canvas">
        <SectionHead eyebrow="Reach them your way" title="One tap from the lead to the customer" lede="WhatsApp, email, SMS or a call, all started from the same lead record." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                <span aria-hidden className={`absolute -right-8 -top-8 size-28 rounded-full bg-gradient-to-br opacity-15 transition duration-500 group-hover:scale-150 ${c.grad}`} />
                <span className={`relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white ${c.grad}`}>
                  <span className="pulse-ring absolute inset-0 rounded-2xl bg-current opacity-30" />
                  <Icon name={c.icon} className="relative size-7" />
                </span>
                <h3 className="relative mt-5 text-xl font-bold text-ink">{c.name}</h3>
                <p className="relative mt-2 text-[15px] text-muted">{c.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-14 lg:grid-cols-[auto_1fr]">
          <Reveal className="mx-auto">
            <div className="relative w-[270px] animate-float rounded-[2.6rem] border-[8px] border-ink bg-white shadow-[var(--shadow-lift)]">
              <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-ink" />
              <div className="px-4 pb-3 pt-3">
                <p className="text-xs text-muted">Good morning 👋</p>
                <p className="text-lg font-bold text-ink">Today</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[["Calls", "12/40", "bg-primary/10 text-primary"], ["Due", "4", "bg-warn/15 text-amber-700"]].map(([k, v, t]) => (
                    <div key={k} className={`rounded-xl p-3 ${t}`}><p className="text-[10px] font-bold uppercase tracking-wider opacity-70">{k}</p><p className="text-xl font-bold">{v}</p></div>
                  ))}
                </div>
                <ul className="mt-3 space-y-2 text-xs">
                  {[["10:30", "Ramesh Yadav", "Interested"], ["11:15", "Priya Menon", "Call back"], ["12:00", "Gurpreet Singh", "Deal sent"]].map(([t, n, s], k) => (
                    <li key={n} className="pick flex items-center gap-2 rounded-lg border border-line p-2" style={{ animationDelay: `${k * 2}s` }}><span className="text-muted">{t}</span><b className="text-ink">{n}</b><span className="ml-auto rounded-full bg-soft px-2 py-0.5 text-[10px] font-bold text-primary">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 grid grid-cols-5 border-t border-line px-2 py-2.5 text-primary">
                {(["home", "inbox", "bell", "check", "users"] as IconName[]).map((n, k) => (
                  <span key={n} className={`grid place-items-center ${k === 0 ? "" : "opacity-40"}`}><Icon name={n} className="size-5" /></span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary"><Icon name="mobile" className="size-4" /> Android caller app</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">The whole desk, in an agent&apos;s pocket.</h2>
            <p className="mt-4 max-w-xl text-lg text-muted">Agents sign in on their phone, see their assigned leads and make the call from the same screen. Everything syncs to the panel.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {app.map(([ic, t], k) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-line bg-canvas p-3 transition hover:border-primary/40 hover:bg-white" style={{ animation: `pop .5s ${k * 70}ms both` }}>
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary to-deep-2 text-white"><Icon name={ic} className="size-4" /></span>
                  <span className="text-sm font-bold text-ink">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-primary">Targets & leaderboard</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">Calls that count, and a floor that can see them.</h2>
            <p className="mt-4 max-w-lg text-lg text-muted">Daily call reports, a leaderboard and a daily winner keep the floor moving, while leaders set targets people can watch fill up.</p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {([[40, "", "calls / day target"], [4, "", "agents on the board"], [1, "", "daily winner"]] as [number, string, string][]).map(([n, x, l]) => (
                <div key={l} className="rounded-2xl border border-line bg-white p-4">
                  <dt className="text-3xl font-bold text-primary"><CountUp to={n} suffix={x} /></dt>
                  <dd className="text-xs text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-lift)]">
              <div className="mb-4 flex items-center justify-between">
                <p className="flex items-center gap-2 font-bold text-ink"><Icon name="trophy" className="size-5 text-warn" /> Today&apos;s leaderboard</p>
                <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-bold text-success">Live</span>
              </div>
              <ul className="space-y-4">
                {board.map(([n, d, t], k) => (
                  <li key={n}>
                    <div className="mb-1 flex items-center gap-2 text-sm">
                      <span className={`grid size-6 place-items-center rounded-full text-[11px] font-bold text-white ${k === 0 ? "bg-gradient-to-br from-amber-400 to-orange-500" : "bg-subtle"}`}>{k + 1}</span>
                      <b className="text-ink">{n}</b>{k === 0 && <span className="rounded-full bg-warn/15 px-2 py-0.5 text-[10px] font-bold text-amber-700">Winner</span>}
                      <span className="ml-auto text-muted">{d}/{t} calls</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-hair">
                      <div className="h-full origin-left rounded-full bg-gradient-to-r from-primary to-warn" style={{ width: `${(d / t) * 100}%`, animation: `growx 1.4s ${k * 0.15}s ease-out both` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
