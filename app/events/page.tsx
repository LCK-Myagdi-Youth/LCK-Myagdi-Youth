import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/lib/site-data";
import { SectionHeader } from "@/components/public/section-header";

export default function EventsPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="EVENTS" title="Opportunities to lead, serve and learn." subtitle="Stay connected with our upcoming, ongoing and completed events." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {events.map((event) => (
          <article key={event.slug} className="card-surface p-6">
            <div className="mb-4 inline-flex rounded-full bg-[#FBBE2C]/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0B1F33]">{event.status}</div>
            <h2 className="text-2xl font-bold text-[#0B1F33]">{event.title}</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#FBBE2C]" /> {event.date}</div>
              <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#FBBE2C]" /> {event.time}</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#FBBE2C]" /> {event.location}</div>
            </div>
            <p className="mt-4 text-slate-600">{event.excerpt}</p>
            <Link href={`/events/${event.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#0B1F33]">
              View Event <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
