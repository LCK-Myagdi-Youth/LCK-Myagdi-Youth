import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { events, projects } from "@/lib/site-data";
import { SectionHeader } from "@/components/public/section-header";

export default function ProjectsEventsPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="PROJECTS & EVENTS" title="See the work, then find your next way to take part." subtitle="Explore our community projects, their impact, and the events that bring volunteers together." />

      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FBBE2C]">OUR WORK</p><h2 className="mt-2 text-3xl font-black text-[#0B1F33]">Projects and impact</h2></div>
          <Link href="/impact" className="text-sm font-bold uppercase tracking-[0.12em] text-[#0B1F33]">View impact overview <ArrowRight className="ml-1 inline h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => <article key={project.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="h-48 bg-slate-200" /><div className="p-6"><div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FBBE2C]">{project.category}</div><h3 className="mt-3 text-2xl font-bold text-[#0B1F33]">{project.title}</h3><div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500"><span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" />{project.date}</span><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{project.location}</span></div><p className="mt-4 text-slate-600">{project.excerpt}</p><Link href={`/projects/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#0B1F33]">View project <ArrowRight className="h-4 w-4" /></Link></div></article>)}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FBBE2C]">GET INVOLVED</p><h2 className="mt-2 text-3xl font-black text-[#0B1F33]">Upcoming and recent events</h2></div><Link href="/events" className="text-sm font-bold uppercase tracking-[0.12em] text-[#0B1F33]">Event archive <ArrowRight className="ml-1 inline h-4 w-4" /></Link></div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {events.map((event) => <article key={event.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-4 inline-flex rounded-full bg-[#FBBE2C]/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0B1F33]">{event.status}</div><h3 className="text-2xl font-bold text-[#0B1F33]">{event.title}</h3><div className="mt-4 space-y-2 text-sm text-slate-600"><div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#FBBE2C]" />{event.date} • {event.time}</div><div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#FBBE2C]" />{event.location}</div></div><p className="mt-4 text-slate-600">{event.excerpt}</p><Link href={`/events/${event.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#0B1F33]">View event <ArrowRight className="h-4 w-4" /></Link></article>)}
        </div>
      </section>
    </main>
  );
}