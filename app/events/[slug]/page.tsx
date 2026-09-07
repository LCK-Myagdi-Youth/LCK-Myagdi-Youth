import { notFound } from "next/navigation";
import { CalendarDays, MapPin, Clock3, Users } from "lucide-react";
import { events } from "@/lib/site-data";

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="container-shell section-shell">
      <div className="rounded-[2rem] bg-[#0B1F33] p-8 text-white md:p-12">
        <div className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#FBBE2C]">{event.status}</div>
        <h1 className="text-4xl font-black md:text-5xl">{event.title}</h1>
        <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-3">
          <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {event.date}</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" /> {event.time}</span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {event.location}</span>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black text-[#0B1F33]">Event details</h2>
          <p className="mt-4 text-slate-600">{event.excerpt}</p>
          <div className="mt-8 rounded-2xl bg-[#F5F7FA] p-5">
            <h3 className="text-xl font-bold text-[#0B1F33]">Agenda</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Welcome and introductions</li>
              <li>• Leadership and service reflections</li>
              <li>• Community activity and volunteer engagement</li>
              <li>• Closing remarks and next steps</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-[#0B1F33]">Registration</h3>
            <p className="mt-3 text-slate-600">Participation is open to community members, volunteers and youth leaders.</p>
            <button className="gold-button mt-5 w-full">Register</button>
          </div>
          <div className="rounded-3xl bg-[#F5F7FA] p-6">
            <h3 className="text-xl font-bold text-[#0B1F33]">Contact</h3>
            <p className="mt-3 text-slate-600">For event coordination, contact the club secretariat.</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600"><Users className="h-4 w-4 text-[#FBBE2C]" /> hello@lckmy.org</div>
          </div>
        </aside>
      </div>
    </main>
  );
}
