import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/lib/site-data";
import { SectionHeader } from "@/components/public/section-header";

export default function NewsPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="NEWS" title="Stories, announcements and milestones from the club." subtitle="A modern editorial space for updates from our members and communities." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {newsItems.map((item) => (
          <article key={item.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="h-52 bg-slate-200" />
            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FBBE2C]">{item.category}</div>
              <h2 className="mt-3 text-2xl font-bold text-[#0B1F33]">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-500">{item.author} • {item.date}</p>
              <p className="mt-4 text-slate-600">{item.excerpt}</p>
              <Link href={`/news/${item.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#0B1F33]">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
