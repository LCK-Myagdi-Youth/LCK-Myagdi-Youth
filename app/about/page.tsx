import Link from "next/link";
import { SectionHeader } from "@/components/public/section-header";
import { siteConfig } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="ABOUT US" title="We build leadership through service." subtitle="Leo Club of Kathmandu Myagdi Youth exists to turn youthful energy into practical action for our communities." />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-slate-600">
          <p>Established in 2023, the club brings together young people from Kathmandu and Myagdi who are committed to community service, leadership, fellowship and positive social change.</p>
          <p>Our work is rooted in the Leo spirit: service in action, leadership by example, and change that is both local and lasting. We believe young people have the energy, insight and responsibility to solve problems, support neighbors and uplift communities.</p>
          <p>From humanitarian outreach to youth leadership development, we create opportunities for members to learn, serve and lead with compassion and purpose.</p>
        </div>
        <div className="rounded-3xl bg-[#0B1F33] p-8 text-white">
          <h3 className="text-2xl font-black">Our Mission</h3>
          <p className="mt-4 text-slate-200">To nurture passionate young leaders who act with courage, compassion and responsibility to serve their communities and shape a stronger future.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-200">
            <div>• Established: 2023</div>
            <div>• Affiliation: Leo District Council 325L, Nepal</div>
            <div>• Sponsored Club: {siteConfig.sponsoredClub}</div>
            <div>• Motto: RISE • REACH • REDEFINE</div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          ["Leadership", "Helping young people build confidence, responsibility and collaborative skills."],
          ["Service", "Connecting with communities and responding to real needs with dignity and care."],
          ["Impact", "Turning ideas into practical actions that create positive local change."],
        ].map(([title, desc]) => (
          <div key={title} className="card-surface p-6">
            <h3 className="text-xl font-bold text-[#0B1F33]">{title}</h3>
            <p className="mt-3 text-slate-600">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/join" className="gold-button">JOIN OUR MOVEMENT</Link>
      </div>
    </main>
  );
}
