import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { impactStats, pillars, serviceAreas, projects, events, teamMembers, impactStories, notices } from "@/lib/site-data";
import { SectionHeader } from "@/components/public/section-header";

const heroImage = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1F33] text-white">
        <div className="absolute inset-0">
          <Image src={heroImage} alt="Leo Club volunteers in action" fill priority className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,190,44,0.25),_transparent_35%),linear-gradient(90deg,rgba(11,31,51,0.9),rgba(11,31,51,0.6))]" />
        </div>
        <div className="container-shell relative py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.42em] text-[#FBBE2C]">RISE. REACH. REDEFINE.</p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl">Leo Club of Kathmandu Myagdi Youth</h1>
            <p className="mt-6 text-xl font-medium text-slate-200">Young leaders. Meaningful service. Lasting impact.</p>
            <p className="mt-5 max-w-xl text-lg text-slate-200/90">
              We bring young people together to develop leadership, serve our communities and create meaningful change through action.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="gold-button">EXPLORE OUR WORK</Link>
              <Link href="/join" className="navy-button border border-white/20 bg-white/10 text-white hover:bg-white/15">JOIN THE CLUB</Link>
            </div>
          </div>
          <div className="mt-14 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-slate-200">
            <span className="inline-block h-px w-12 bg-[#FBBE2C]" />
            Scroll
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-shell grid gap-6 md:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="card-surface p-8 text-center">
              <div className="text-4xl font-black text-[#0B1F33] md:text-5xl">{stat.value}</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <Image src="https://images.unsplash.com/photo-1517486808906-6ca8b1d6d6f0?auto=format&fit=crop&w=1200&q=80" alt="Leo club leadership and community members" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="WHO WE ARE" title="A youth-led service organization for meaningful change." />
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Leo Club of Kathmandu Myagdi Youth is a youth-led service organization committed to developing young leaders, building fellowship and creating positive change through community service.
            </p>
            <div className="mt-8 space-y-4 text-slate-700">
              <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#FBBE2C]" /> Established 2023</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#FBBE2C]" /> Affiliated with Leo District Council 325L</div>
            </div>
            <Link href="/about" className="gold-button mt-8">LEARN MORE ABOUT US</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F33] py-20 text-white">
        <div className="container-shell">
          <SectionHeader eyebrow="OUR VALUES" title="Rise. Reach. Redefine." subtitle="The three pillars that guide everything we do." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.name} className="rounded-3xl border border-slate-700 bg-white/5 p-8 text-left">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FBBE2C] text-xl font-black text-[#0B1F33]">{pillar.name.slice(0, 1)}</div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FBBE2C]">{pillar.name}</p>
                <h3 className="mt-4 text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-4 text-slate-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F5F7FA]">
        <div className="container-shell">
          <SectionHeader eyebrow="WHAT WE DO" title="Service that grows with the community." subtitle="Our focus areas reflect how youth leadership can turn compassion into action." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((item, idx) => (
              <div key={item} className="card-surface p-6 transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBBE2C]/20 text-[#0B1F33]">{idx + 1}</div>
                <h3 className="text-xl font-bold text-[#0B1F33]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <SectionHeader eyebrow="FEATURED PROJECTS" title="Recent work with real community impact." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-52 w-full bg-slate-200">
                  <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80" alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FBBE2C]">{project.category}</div>
                  <h3 className="text-2xl font-bold text-[#0B1F33]">{project.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {project.date}</span>
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {project.location}</span>
                  </div>
                  <p className="mt-4 text-slate-600">{project.excerpt}</p>
                  <div className="mt-5 rounded-xl bg-[#F5F7FA] p-3 text-sm font-semibold text-[#0B1F33]">Impact: {project.impact}</div>
                  <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#0B1F33]">
                    View Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F5F7FA]">
        <div className="container-shell">
          <SectionHeader eyebrow="UPCOMING EVENTS" title="Opportunities to lead, serve and learn." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {events.map((event) => (
              <article key={event.slug} className="card-surface p-6">
                <div className="mb-4 inline-flex items-center rounded-full bg-[#FBBE2C]/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0B1F33]">{event.status}</div>
                <h3 className="text-2xl font-bold text-[#0B1F33]">{event.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#FBBE2C]" /> {event.date}</div>
                  <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#FBBE2C]" /> {event.time}</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#FBBE2C]" /> {event.location}</div>
                </div>
                <p className="mt-4 text-slate-600">{event.excerpt}</p>
                <Link href={`/events/${event.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#0B1F33]">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <SectionHeader eyebrow="STORIES OF IMPACT" title="Behind every project is a story. Behind every story is a person." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {impactStories.map((story) => (
              <article key={story.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-[#F5F7FA]">
                <div className="h-56 bg-slate-200" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1F33]">{story.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{story.story}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#0B1F33] text-white">
        <div className="container-shell">
          <SectionHeader eyebrow="OUR TEAM" title="Led by young people who choose action." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="rounded-3xl border border-slate-700 bg-white/5 p-6">
                <div className="mb-5 h-20 w-20 rounded-full bg-[#FBBE2C]/15" />
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FBBE2C]">{member.position}</div>
                <p className="mt-4 text-slate-300">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <SectionHeader eyebrow="OUR LEGACY" title="A growing story of youth leadership and service." />
          <div className="mt-12 space-y-6">
            {[
              { year: "2023", title: "ESTABLISHED", description: "Leo Club of Kathmandu Myagdi Youth began with a commitment to service and leadership." },
              { year: "2024–25", title: "LEADERSHIP", description: "Expanded youth outreach and strengthened district-community partnerships." },
              { year: "2025–26", title: "GROWTH", description: "Continued expansion through projects, volunteer mobilization and impact storytelling." },
            ].map((entry) => (
              <div key={entry.year} className="grid gap-4 rounded-2xl border border-slate-200 bg-[#F5F7FA] p-6 md:grid-cols-[120px_1fr]">
                <div className="text-lg font-black text-[#0B1F33]">{entry.year}</div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FBBE2C]">{entry.title}</div>
                  <p className="mt-2 text-slate-600">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F5F7FA]">
        <div className="container-shell">
          <SectionHeader eyebrow="LATEST UPDATES" title="Community stories, announcements and reports." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {notices.map((notice) => (
              <div key={notice} className="card-surface p-6">
                <div className="mb-4 inline-flex rounded-full bg-[#0B1F33] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">Announcement</div>
                <p className="text-lg font-bold text-[#0B1F33]">{notice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
