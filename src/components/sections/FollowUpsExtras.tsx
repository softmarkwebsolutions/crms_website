import { Icon } from "@/components/ui/Icon";
import { BentoShell, Card, Head, Mini } from "./CallingBento";

// Mapped to TaskController (calendar, timeline, upcoming, snooze, mute/unmute, complete, status, lead search) and the mobile tasks API.
export function FollowUpsExtras() {
  return (
    <BentoShell eyebrow="Follow-ups" title="Callbacks that never" accent="get lost." lede="Every promise to call back becomes a task, with a reminder that doesn't go away until someone deals with it.">
      <Card dark className="md:col-span-2 lg:row-span-2">
        <Head light icon="bell" grad="from-warn to-orange-500" title="Callbacks become tasks" text="Mark a lead 'Call back' on the call and the task is created for that slot, with the lead attached." />
        <Mini className="flex flex-1 flex-col justify-center gap-4">
          <div className="flex items-center justify-between gap-2 text-xs font-bold">
            <span className="rounded-2xl bg-white/12 px-3 py-2.5 ring-1 ring-white/20">Call ends<br /><span className="text-warn">Call back</span></span>
            <svg viewBox="0 0 60 12" className="w-14 shrink-0" aria-hidden><path d="M0 6h54M48 1l6 5-6 5" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" className="dash-line" /></svg>
            <span className="rounded-2xl bg-white px-3 py-2.5 text-primary shadow-[0_12px_26px_-10px_rgba(0,0,0,.5)]">Task created<br /><span className="text-ink">Sat 11:00 · Ramesh</span></span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">
            <span className="grid size-10 shrink-0 origin-top place-items-center rounded-xl bg-warn text-ink" style={{ animation: "shake 2.5s ease-in-out infinite" }}><Icon name="bell" className="size-5" /></span>
            <p className="text-sm"><b>Reminder pops up when it&apos;s due</b><br /><span className="text-xs text-white/65">and stays until acknowledged</span></p>
          </div>
          <div className="rounded-2xl bg-white p-3 text-ink">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted">Upcoming</p>
            {[["11:00", "Priya Menon", "Call back"], ["12:15", "Gurpreet Singh", "Deal sent"], ["16:00", "Anita Desai", "Visit"]].map(([t, n, s], i) => (
              <div key={t} className="flex items-center gap-2 border-b border-hair py-1.5 text-xs last:border-0" style={{ animation: `pop .5s ${i * 120}ms both` }}><b className="text-primary">{t}</b><b>{n}</b><span className="ml-auto rounded-full bg-soft px-2 py-0.5 text-[10px] font-bold text-primary">{s}</span></div>
            ))}
          </div>
        </Mini>
      </Card>

      <Card delay={100} className="md:col-span-2">
        <Head icon="calendar" grad="from-violet-500 to-fuchsia-600" title="Task calendar" text="See the whole month, or open a single day to see exactly what is planned." />
        <Mini>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold">
            {Array.from({ length: 14 }, (_, i) => i + 1).map((d) => (
              <span key={d} className={`relative rounded-md py-2 ${d === 9 ? "bg-primary text-white" : "bg-canvas text-ink"}`}>{d}{[2, 5, 9, 11].includes(d) && <i className={`absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full ${d === 9 ? "bg-white" : "bg-warn"}`} />}</span>
            ))}
          </div>
        </Mini>
      </Card>

      <Card delay={150}>
        <Head icon="refresh" grad="from-info to-sky-600" title="Snooze" text="Not now? Push it back." />
        <Mini className="flex flex-wrap gap-1.5 text-[11px] font-bold">
          {["10 min", "1 hour", "Tomorrow"].map((t, k) => <span key={t} className="pick rounded-full border border-line px-2.5 py-1 text-primary" style={{ animationDelay: `${k * 2}s` }}>{t}</span>)}
        </Mini>
      </Card>

      <Card delay={200}>
        <Head icon="shield" grad="from-rose-500 to-red-600" title="Mute & unmute" text="Silence the noise, bring it back later." />
        <Mini className="flex items-center gap-3">
          <span className="relative h-7 w-12 rounded-full bg-primary"><span className="absolute left-1 top-1 size-5 animate-[toggle_3s_ease-in-out_infinite_alternate] rounded-full bg-white shadow" /></span>
          <span className="text-xs font-bold text-muted">Mute earlier tasks</span>
        </Mini>
      </Card>

      <Card delay={100} className="md:col-span-2">
        <Head icon="clock" grad="from-blue-500 to-indigo-600" title="Team timeline" text="A running timeline of tasks across the team, so a manager sees what is overdue." />
        <Mini>
          <ul className="relative space-y-2 pl-5 text-sm before:absolute before:bottom-1 before:left-[7px] before:top-1 before:w-0.5 before:bg-line">
            {[["Priya M.", "Call back · Anita D.", "Overdue", "bg-danger", "bg-danger/10 text-red-700"], ["Ramesh Y.", "Send proforma", "Due 11:00", "bg-warn", "bg-warn/15 text-amber-700"], ["Gurpreet S.", "Visit reminder", "Done", "bg-success", "bg-success/10 text-emerald-700"]].map(([n, t, s, d, c], k) => (
              <li key={n} className="relative flex items-center gap-2" style={{ animation: `pop .5s ${k * 150}ms both` }}>
                <span className={`absolute -left-[18px] size-3 rounded-full ring-4 ring-white ${d}`} /><b className="text-ink">{n}</b><span className="truncate text-muted">{t}</span><span className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${c}`}>{s}</span>
              </li>
            ))}
          </ul>
        </Mini>
      </Card>

      <Card delay={150}>
        <Head icon="check" grad="from-emerald-500 to-teal-600" title="Status & complete" text="Move a task along and close it out." />
        <Mini className="flex items-center gap-1.5 text-[10px] font-bold">
          {["Pending", "In progress", "Done"].map((t, i, a) => <span key={t} className="flex items-center gap-1.5"><span className={`rounded-full px-2 py-1 ${i === a.length - 1 ? "bg-success text-white" : "bg-canvas text-ink"}`}>{t}</span>{i < a.length - 1 && <Icon name="arrow" className="size-3 text-subtle" />}</span>)}
        </Mini>
      </Card>

      <Card delay={200}>
        <Head icon="filter" grad="from-orange-400 to-amber-500" title="Find the lead" text="Search a lead while creating a task." />
        <Mini>
          <div className="rounded-xl border border-primary/40 bg-white px-3 py-2 text-sm text-ink shadow-[0_0_0_4px_var(--t-glow)]">Rame<span className="animate-pulse">|</span></div>
          <p className="mt-1.5 rounded-lg bg-soft px-3 py-1.5 text-xs font-bold text-primary">Ramesh Yadav · Jaipur</p>
        </Mini>
      </Card>

      <Card delay={100} className="md:col-span-2">
        <Head icon="mobile" grad="from-pink-500 to-rose-600" title="On the agent's phone too" text="The Android app lists today's follow-ups and tasks, lets agents add one and mark it complete." />
        <Mini className="flex items-center gap-3">
          <div className="flex-1 rounded-2xl border border-line bg-canvas p-3 text-xs"><p className="font-bold text-ink">Follow-ups · 4</p><p className="text-muted">Priya Menon · 11:00 · Call back</p></div>
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-deep-2 text-2xl text-white shadow-[var(--shadow-card)]">+</span>
        </Mini>
      </Card>
    </BentoShell>
  );
}
