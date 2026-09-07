import { SectionHeader } from "@/components/public/section-header";
import { documents } from "@/lib/site-data";

export default function DocumentsPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="DOCUMENTS" title="Public reports and resources." subtitle="Official documents, reports and publications from the club are shared here." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {documents.map((document) => (
          <article key={document.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FBBE2C]">{document.category}</div>
            <h2 className="mt-3 text-2xl font-bold text-[#0B1F33]">{document.title}</h2>
            <p className="mt-3 text-sm text-slate-500">Year: {document.year}</p>
            <button className="gold-button mt-6 w-full">View / Download</button>
          </article>
        ))}
      </div>
    </main>
  );
}
