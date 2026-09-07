import { notFound } from "next/navigation";
import { newsItems } from "@/lib/site-data";

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = newsItems.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="container-shell section-shell">
      <article className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FBBE2C]">{item.category}</div>
        <h1 className="mt-4 text-4xl font-black text-[#0B1F33] md:text-5xl">{item.title}</h1>
        <p className="mt-6 text-sm text-slate-500">By {item.author} • {item.date}</p>
        <div className="mt-8 h-72 rounded-3xl bg-slate-200" />
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
          <p>We are proud to share this story of action, leadership and community connection from Leo Club of Kathmandu Myagdi Youth.</p>
          <p>{item.excerpt}</p>
          <p>These updates are intentionally structured to be managed through the admin CMS, where new stories, announcements and achievements can be published without code changes.</p>
        </div>
      </article>
    </main>
  );
}
