import { SectionHeader } from "@/components/public/section-header";
import { impactStories } from "@/lib/site-data";

const impactMetrics = [
  { value: "25+", label: "Projects" },
  { value: "150+", label: "Volunteers" },
  { value: "1000+", label: "Beneficiaries" },
  { value: "8+", label: "Communities reached" },
  { value: "Rs. 3.5L+", label: "Funds raised" },
  { value: "800+", label: "Hours volunteered" },
];

export default function ImpactPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="IMPACT" title="Our work is measured by people, stories and change." subtitle="Only verified data is published here and every number can be managed through the admin dashboard." />
      <div className="mt-12 grid gap-6 md:grid-cols-3 xl:grid-cols-6">
        {impactMetrics.map((item) => (
          <div key={item.label} className="rounded-3xl bg-[#0B1F33] p-6 text-center text-white">
            <div className="text-3xl font-black text-[#FBBE2C]">{item.value}</div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeader eyebrow="PROJECT IMPACT STORIES" title="Stories that remind us why the work matters." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {impactStories.map((story) => (
            <article key={story.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="h-52 bg-slate-200" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1F33]">{story.title}</h3>
                <p className="mt-3 text-slate-600">{story.story}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
