import { SectionHeader } from "@/components/public/section-header";
import { teamMembers } from "@/lib/site-data";

export default function TeamPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="TEAM" title="The people behind the mission." subtitle="Our leadership team and members bring service, creativity and accountability to the club." />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {teamMembers.map((member) => (
          <article key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 h-20 w-20 rounded-full bg-[#FBBE2C]/15" />
            <h2 className="text-2xl font-bold text-[#0B1F33]">{member.name}</h2>
            <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FBBE2C]">{member.position}</div>
            <p className="mt-4 text-slate-600">{member.bio}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
