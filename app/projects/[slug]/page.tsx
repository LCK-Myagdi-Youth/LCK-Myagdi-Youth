import { notFound } from "next/navigation";
import { CalendarDays, MapPin, Users, Landmark, ArrowRight } from "lucide-react";
import { projects } from "@/lib/site-data";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container-shell section-shell">
      <div className="rounded-[2rem] bg-[#0B1F33] p-8 text-white md:p-12">
        <div className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#FBBE2C]">{project.category}</div>
        <h1 className="text-4xl font-black md:text-5xl">{project.title}</h1>
        <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-200">
          <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {project.date}</span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {project.location}</span>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-[#0B1F33]">About the project</h2>
            <p className="mt-4 text-slate-600">{project.excerpt}</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-[#0B1F33]">Objectives</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Strengthen community participation and responsibility.</li>
              <li>• Deliver practical support where it is needed most.</li>
              <li>• Build leadership and volunteer capacity among youth.</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-[#0B1F33]">What we did</h2>
            <p className="mt-4 text-slate-600">We organized volunteer support, coordinated local outreach, and translated community need into tangible actions.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-[#0B1F33]">Our impact</h2>
            <p className="mt-4 text-slate-600">{project.impact}</p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-[#0B1F33]">Project details</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Landmark className="h-4 w-4 text-[#FBBE2C]" /> Organizer: Leo Club of Kathmandu Myagdi Youth</li>
              <li className="flex items-center gap-2"><Users className="h-4 w-4 text-[#FBBE2C]" /> Participants: 40+</li>
              <li className="flex items-center gap-2"><Users className="h-4 w-4 text-[#FBBE2C]" /> Beneficiaries: Community members and families</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-[#F5F7FA] p-6">
            <h3 className="text-xl font-bold text-[#0B1F33]">Support more projects like this</h3>
            <p className="mt-3 text-slate-600">Your donation can help fund the next youth-led community initiative.</p>
            <a href="/donate" className="mt-5 inline-flex items-center gap-2 font-bold uppercase tracking-[0.12em] text-[#0B1F33]">
              Donate now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
