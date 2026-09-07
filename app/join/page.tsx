import Link from "next/link";
import { SectionHeader } from "@/components/public/section-header";
import { JoinFormQr } from "@/components/public/join-form-qr";
import { siteConfig } from "@/lib/site-data";

export default function JoinPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="JOIN US" title="READY TO LEAD, SERVE & GROW?" subtitle="Become part of a community of young people committed to creating positive change." />
      <div className="mt-12 max-w-3xl space-y-6">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-[#0B1F33]">Why Join?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {['Leadership', 'Service', 'Fellowship', 'Networking', 'Personal development', 'Community impact'].map((item) => (
              <div key={item} className="rounded-2xl bg-[#F5F7FA] p-4 text-sm font-semibold text-[#0B1F33]">{item}</div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-[#0B1F33]">Membership process</h2>
          <ol className="mt-6 space-y-4 text-slate-600">
            <li>1. Apply</li>
            <li>2. Meet the team</li>
            <li>3. Orientation</li>
            <li>4. Become a member</li>
            <li>5. Serve and lead</li>
          </ol>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/contact" className="navy-button">CONTACT US</Link>
      </div>
      <section className="mt-16 grid items-center gap-8 rounded-[2rem] bg-white p-8 shadow-sm md:grid-cols-[1fr_auto] md:p-10">
        <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FBBE2C]">GOOGLE FORM</p><h2 className="mt-3 text-3xl font-black text-[#0B1F33]">Prefer to apply online?</h2><p className="mt-4 max-w-xl text-slate-600">Use the club’s official Google Form to submit your membership interest. The link and QR code will be activated as soon as the club provides the form URL.</p>{siteConfig.joinFormUrl ? <a href={siteConfig.joinFormUrl} target="_blank" rel="noreferrer" className="gold-button mt-6">OPEN GOOGLE FORM</a> : <p className="mt-6 text-sm font-semibold text-slate-500">Set `NEXT_PUBLIC_JOIN_FORM_URL` to enable the form link.</p>}</div>
        <JoinFormQr url={siteConfig.joinFormUrl} />
      </section>
    </main>
  );
}
