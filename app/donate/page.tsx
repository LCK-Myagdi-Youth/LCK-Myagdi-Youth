import Link from "next/link";
import Image from "next/image";
import { donationCampaigns, siteConfig } from "@/lib/site-data";
import { SectionHeader } from "@/components/public/section-header";
import { PublicForm } from "@/components/public/public-form";

export default function DonatePage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="DONATE" title="Support our mission." subtitle="Your support helps turn youth energy into meaningful community action." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {donationCampaigns.map((campaign) => {
          const progress = Math.min((campaign.raised / campaign.target) * 100, 100);
          return (
            <article key={campaign.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="h-52 bg-slate-200" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#0B1F33]">{campaign.title}</h2>
                <p className="mt-4 text-slate-600">{campaign.description}</p>
                <div className="mt-6 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between"><span>Target</span><strong>Rs. {campaign.target.toLocaleString()}</strong></div>
                  <div className="flex items-center justify-between"><span>Raised</span><strong>Rs. {campaign.raised.toLocaleString()}</strong></div>
                  <div className="flex items-center justify-between"><span>Beneficiaries</span><strong>{campaign.beneficiaries}</strong></div>
                </div>
                <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-[#FBBE2C]" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-3 text-sm font-semibold text-[#0B1F33]">{Math.round(progress)}% funded</div>
                <Link href="/donate" className="gold-button mt-6 w-full">DONATE NOW</Link>
              </div>
            </article>
          );
        })}
      </div>
      <section className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-black text-[#0B1F33]">Submit donation details</h2>
        <p className="mt-3 text-slate-600">After completing your chosen payment method, submit the reference ID for verification.</p>
        <div className="mt-6"><PublicForm type="donation" submitLabel="SUBMIT DONATION" fields={[{ name: "name", label: "Name" }, { name: "email", label: "Email", type: "email" }, { name: "phone", label: "Phone" }, { name: "amount", label: "Amount (Rs.)", type: "number", required: true }, { name: "campaign_id", label: "Campaign slug", placeholder: "winter-relief-campaign" }, { name: "payment_method", label: "Payment method", required: true }, { name: "reference_id", label: "Transaction / reference ID", required: true }, { name: "message", label: "Message", type: "textarea" }]} /></div>
      </section>
      <section className="mx-auto mt-8 max-w-4xl rounded-3xl bg-[#0B1F33] p-8 text-white shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FBBE2C]">PAYMENT DETAILS</p>
        <h2 className="mt-3 text-3xl font-black">Bank transfer and QR payment</h2>
        <p className="mt-4 text-slate-200">Verified payment details will be published here by the club. Please do not send money to unverified accounts.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto]">
          <div className="space-y-3 rounded-2xl border border-slate-700 bg-white/5 p-6 text-sm text-slate-200">
            <p><strong className="text-white">Bank:</strong> {siteConfig.donationDetails.bankName || "Details to be provided"}</p>
            <p><strong className="text-white">Account name:</strong> {siteConfig.donationDetails.accountName || "Details to be provided"}</p>
            <p><strong className="text-white">Account number:</strong> {siteConfig.donationDetails.accountNumber || "Details to be provided"}</p>
            <p><strong className="text-white">Branch:</strong> {siteConfig.donationDetails.branch || "Details to be provided"}</p>
            <p><strong className="text-white">eSewa / Khalti:</strong> {siteConfig.donationDetails.esewa || siteConfig.donationDetails.khalti || "Details to be provided"}</p>
          </div>
          {siteConfig.donationDetails.qrImageUrl ? <div className="rounded-2xl bg-white p-4"><Image src={siteConfig.donationDetails.qrImageUrl} alt="Official donation QR code" width={176} height={176} /></div> : <div className="flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-dashed border-slate-600 bg-white/5 p-5 text-center text-xs font-semibold uppercase tracking-[0.1em] text-slate-300">Official QR will appear here</div>}
        </div>
      </section>
    </main>
  );
}
