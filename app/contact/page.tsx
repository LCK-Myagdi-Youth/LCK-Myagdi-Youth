import { SectionHeader } from "@/components/public/section-header";
import { PublicForm } from "@/components/public/public-form";

export default function ContactPage() {
  return (
    <main className="container-shell section-shell">
      <SectionHeader eyebrow="CONTACT" title="Let’s connect." subtitle="Reach out with questions, partnerships, collaboration or support opportunities." />
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-[#0B1F33] p-8 text-white">
          <h2 className="text-2xl font-black">Club information</h2>
          <div className="mt-6 space-y-4 text-slate-200">
            <p>Leo Club of Kathmandu Myagdi Youth</p>
            <p>Location: Myagdi, Nepal</p>
            <p>Email: hello@lckmy.org</p>
            <p>Phone: +977-98XXXXXXXX</p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm"><PublicForm type="contact" submitLabel="SEND MESSAGE" fields={[{ name: "name", label: "Name", required: true }, { name: "email", label: "Email", type: "email", required: true }, { name: "subject", label: "Subject" }, { name: "message", label: "Message", type: "textarea", required: true }]} /></div>
      </div>
    </main>
  );
}
