import { ArrowUpRight, BriefcaseBusiness, CalendarClock, Coins, Files, HandCoins, MessageSquare, Users } from "lucide-react";
import { requireAdmin } from "@/lib/auth/permissions";

const summaryCards = [
  { label: "Total Projects", value: "12", icon: BriefcaseBusiness },
  { label: "Total Events", value: "8", icon: CalendarClock },
  { label: "Published Posts", value: "24", icon: Files },
  { label: "Upcoming Events", value: "3", icon: CalendarClock },
  { label: "Active Campaigns", value: "2", icon: HandCoins },
  { label: "Pending Donations", value: "14", icon: Coins },
  { label: "Membership Apps", value: "6", icon: Users },
  { label: "Unread Messages", value: "9", icon: MessageSquare },
];

export default async function AdminDashboardPage() {
  await requireAdmin();

  return (
    <main className="p-6 md:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FBBE2C]">ADMIN DASHBOARD</p>
          <h1 className="mt-2 text-3xl font-black text-[#0B1F33]">Overview</h1>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#FBBE2C]/20 px-4 py-2 text-sm font-semibold text-[#0B1F33]">
          <ArrowUpRight className="h-4 w-4" /> Quick actions
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500">{label}</div>
                <div className="mt-3 text-3xl font-black text-[#0B1F33]">{value}</div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBBE2C]/20 text-[#0B1F33]">
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-[#0B1F33]">Recent Projects</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="border-b border-slate-100 pb-3">Blood Donation Campaign</li>
            <li className="border-b border-slate-100 pb-3">Community Clean-up Drive</li>
            <li className="pb-2">Youth Leadership Retreat</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-[#0B1F33]">Recent Donations</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="border-b border-slate-100 pb-3">A. Shrestha — Rs. 4,500 — Verified</li>
            <li className="border-b border-slate-100 pb-3">K. Gurung — Rs. 10,000 — Pending</li>
            <li className="pb-2">P. KC — Rs. 2,000 — Verified</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
