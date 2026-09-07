import { SectionHeader } from "@/components/public/section-header";
import { legacyTimeline } from "@/lib/site-data";

export default function LegacyPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="OUR LEGACY" title="A permanent digital archive of our story." subtitle="From our founding year to the present, each chapter reflects a period of leadership, service and growth." />
      <div className="mt-12 space-y-6">
        {legacyTimeline.map((entry) => (
          <div key={entry.year} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-[140px_1fr]">
            <div className="text-2xl font-black text-[#0B1F33]">{entry.year}</div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FBBE2C]">{entry.title}</div>
              <p className="mt-3 text-slate-600">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
