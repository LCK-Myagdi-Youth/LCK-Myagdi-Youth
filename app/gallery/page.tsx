import { SectionHeader } from "@/components/public/section-header";
import { galleryAlbums } from "@/lib/site-data";

export default function GalleryPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="GALLERY" title="Moments from service, leadership and community connection." subtitle="A visual archive of our work and the people who make it possible." />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {galleryAlbums.map((album) => (
          <article key={album.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="h-56 bg-slate-200" />
            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FBBE2C]">{album.category}</div>
              <h2 className="mt-3 text-2xl font-bold text-[#0B1F33]">{album.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
