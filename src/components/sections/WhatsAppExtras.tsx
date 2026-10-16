import { Icon } from "@/components/ui/Icon";
import { Section, SectionHead } from "@/components/ui/Section";
import { BentoShell, Card, Head, Mini } from "./CallingBento";
import { Timeline } from "./Timeline";

// Mapped to the CRM's WhatsApp module: bulk, campaigns, contacts import, templates, template performance, campaign report, inbox, webhook.
export function WhatsAppExtras() {
  return (
    <>
      <BentoShell eyebrow="WhatsApp, built in" title="Send a thousand personal messages," accent="at once." lede="Campaigns, templates, a shared inbox and delivery tracking, all inside the CRM.">
        <Card dark className="md:col-span-2 lg:row-span-2">
          <Head light icon="chat" grad="from-emerald-400 to-green-600" title="Bulk campaigns" text="Pick a list, pick an approved template and send in batches, with a delivery log for every message." />
          <Mini className="flex flex-1 flex-col justify-center gap-4">
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
              <div className="flex items-center justify-between text-sm font-bold"><span>diwali_offer</span><span className="rounded-full bg-success/25 px-2.5 py-0.5 text-[11px] text-emerald-200">Sending</span></div>
              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/20"><div className="h-full w-[78%] rounded-full bg-gradient-to-r from-warn to-amber-300" style={{ animation: "fillbar 2.2s ease-out both" }} /></div>
              <div className="mt-3 grid grid-cols-3 text-center text-xs text-white/70">
                {[["Queued", "180"], ["Sent", "1,240"], ["Failed", "2"]].map(([k, v]) => <div key={k}><p className="text-lg font-bold text-white">{v}</p>{k}</div>)}
              </div>
              <p className="mt-3 text-center text-xs font-bold text-white/70">Count before you send · cancel anytime</p>
            </div>
            <div className="rounded-2xl bg-white p-3 text-ink">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted">Delivery log</p>
              {[["98••••421", "Delivered ✓✓", "text-sky-500"], ["90••••118", "Read ✓✓", "text-emerald-600"], ["81••••907", "Sent ✓", "text-subtle"], ["77••••350", "Replied ↩", "text-emerald-600"]].map(([n, st, c], i) => (
                <div key={n} className="flex items-center justify-between border-b border-hair py-1.5 text-xs last:border-0" style={{ animation: `pop .5s ${i * 120}ms both` }}><b>{n}</b><span className={`font-bold ${c}`}>{st}</span></div>
              ))}
            </div>
          </Mini>
        </Card>

        <Card delay={100} className="md:col-span-2">
          <Head icon="mail" grad="from-blue-500 to-indigo-600" title="Shared inbox" text="Replies come back through the webhook into one two-way thread per number." />
          <Mini className="space-y-2">
            {[["Ramesh Yadav", "Haan, Saturday ko aa sakta hoon", true], ["Priya Menon", "Price kya hai?", true], ["Anita Desai", "Thanks 🙏", false]].map(([n, m, u], i) => (
              <div key={n as string} className="flex items-center gap-3 rounded-xl border border-line bg-canvas p-2.5 text-sm" style={{ animation: `pop .5s ${i * 130}ms both` }}>
                <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-deep-2 text-xs font-bold text-white">{(n as string)[0]}</span>
                <span className="min-w-0 flex-1"><b className="block text-ink">{n}</b><span className="block truncate text-xs text-muted">{m}</span></span>
                {u && <span className="size-2.5 animate-pulse rounded-full bg-success" />}
              </div>
            ))}
          </Mini>
        </Card>

        <Card delay={150}>
          <Head icon="check" grad="from-emerald-500 to-teal-600" title="Live templates" text="Approved templates load straight from Meta." />
          <Mini className="space-y-1.5 text-[11px] font-bold">
            {[["diwali_offer", "Approved", "bg-success/10 text-emerald-700"], ["visit_reminder", "Approved", "bg-success/10 text-emerald-700"], ["loan_followup", "Pending", "bg-warn/15 text-amber-700"]].map(([t, s, c]) => (
              <div key={t} className="flex items-center justify-between rounded-lg bg-canvas px-2.5 py-1.5"><span className="text-ink">{t}</span><span className={`rounded-full px-2 py-0.5 ${c}`}>{s}</span></div>
            ))}
          </Mini>
        </Card>

        <Card delay={200}>
          <Head icon="chart" grad="from-primary to-deep-2" title="Template performance" text="See which message actually works." />
          <Mini className="flex h-24 items-end gap-2">
            {[45, 80, 60, 95].map((h, i) => <span key={i} className="flex-1 origin-bottom rounded-t-lg bg-gradient-to-t from-primary to-warn" style={{ height: `${h}%`, animation: `growx 1s ${i * 0.15}s ease-out both`, transformOrigin: "bottom" }} />)}
          </Mini>
        </Card>

        <Card delay={100} className="md:col-span-2">
          <Head icon="layers" grad="from-orange-400 to-amber-500" title="Personalised campaign images" text="Upload a list and every contact gets a campaign image with their own name printed on it." />
          <Mini>
            <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,var(--color-deep),var(--color-primary))] p-5 text-white">
              <p className="text-[10px] font-bold tracking-[0.25em] text-warn">DIWALI DHAMAKA</p>
              <div className="relative h-9 text-3xl font-bold">
                {["Ramesh ji,", "Priya ji,", "Gurpreet ji,"].map((n, i) => <span key={n} className="absolute left-0 top-0" style={{ animation: `cycle3 6s ${i * 2}s infinite backwards` }}>{n}</span>)}
              </div>
              <p className="text-sm opacity-90">₹25,000 off · this week only</p>
            </div>
          </Mini>
        </Card>

        <Card delay={150}>
          <Head icon="upload" grad="from-pink-500 to-rose-600" title="Contacts import" text="Add contacts by hand or import a CSV." />
          <Mini className="flex items-center gap-2 text-xs font-bold">
            <span className="rounded-lg bg-canvas px-2.5 py-2 text-ink">contacts.csv</span><Icon name="arrow" className="size-4 text-subtle" /><span className="rounded-lg bg-success/10 px-2.5 py-2 text-emerald-700">1,420 added</span>
          </Mini>
        </Card>

        <Card delay={200}>
          <Head icon="clock" grad="from-info to-sky-600" title="Scheduled campaigns" text="Line one up for later; cancel it before it runs." />
          <Mini className="flex items-center justify-between rounded-xl bg-canvas p-2.5 text-xs font-bold"><span className="text-ink">Tomorrow 10:00</span><span className="rounded-full bg-danger/10 px-2.5 py-1 text-red-700">Cancel</span></Mini>
        </Card>

        <Card delay={100} className="md:col-span-2">
          <Head icon="receipt" grad="from-violet-500 to-fuchsia-600" title="Campaign report" text="Delivery and reply status tracked back for every campaign, message by message." />
          <Mini className="flex items-center gap-3 text-xs font-bold">
            {[["Sent", "✓", "text-subtle"], ["Delivered", "✓✓", "text-subtle"], ["Read", "✓✓", "text-sky-500"], ["Replied", "↩", "text-emerald-600"]].map(([k, t, c], i, a) => (
              <span key={k} className="flex items-center gap-3"><span className="rounded-xl bg-canvas px-3 py-2 text-center"><span className={`block text-base ${c}`}>{t}</span><span className="text-ink">{k}</span></span>{i < a.length - 1 && <Icon name="arrow" className="size-4 text-subtle" />}</span>
            ))}
          </Mini>
        </Card>
      </BentoShell>

      <Section tone="white">
        <SectionHead eyebrow="How a campaign runs" title="From a list to a conversation" lede="Five steps, no spreadsheet juggling." />
        <Timeline steps={[
          { icon: "upload", title: "Load your list", text: "Pick leads from the CRM or import contacts from a CSV.", grad: "from-pink-500 to-rose-600" },
          { icon: "check", title: "Choose an approved template", text: "Templates and their status come live from Meta.", grad: "from-emerald-500 to-teal-600" },
          { icon: "layers", title: "Personalise", text: "Each contact's name is printed on their campaign image.", grad: "from-orange-400 to-amber-500" },
          { icon: "chat", title: "Send in batches", text: "Count first, send now or schedule it, and cancel if you need to.", grad: "from-emerald-400 to-green-600" },
          { icon: "mail", title: "Track and reply", text: "Delivery status and replies land in the shared inbox and campaign report.", grad: "from-blue-500 to-indigo-600" },
        ]} />
      </Section>
    </>
  );
}
