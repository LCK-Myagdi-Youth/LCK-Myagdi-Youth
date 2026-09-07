import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { projects } from "@/lib/site-data";
import { SectionHeader } from "@/components/public/section-header";

export default function ProjectsPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="PROJECTS" title="Community action across service, leadership and impact." subtitle="Explore the initiatives driving positive change in our communities." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="h-52 bg-slate-200" />
            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FBBE2C]">{project.category}</div>
              <h2 className="mt-3 text-2xl font-bold text-[#0B1F33]">{project.title}</h2>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {project.date}</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {project.location}</span>
              </div>
              <p className="mt-4 text-slate-600">{project.excerpt}</p>
              <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#0B1F33]">
                View Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
