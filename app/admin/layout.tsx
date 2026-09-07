import Link from "next/link";
import { LayoutDashboard, Newspaper, FolderKanban, CalendarDays, ImageIcon, Users, BarChart3, HandCoins, MessageSquareText, Settings, LogOut } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Posts", href: "/admin/posts", icon: Newspaper },
  { label: "Projects", href: "/admin/projects", icon: FolderKanban },
  { label: "Events", href: "/admin/events", icon: CalendarDays },
  { label: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { label: "Team", href: "/admin/team", icon: Users },
  { label: "Impact", href: "/admin/impact", icon: BarChart3 },
  { label: "Donations", href: "/admin/donations", icon: HandCoins },
  { label: "Messages", href: "/admin/messages", icon: MessageSquareText },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA] text-[#0B1F33]">
      <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-[#0B1F33] p-5 text-white lg:flex lg:flex-col">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#FBBE2C] bg-white text-sm font-black text-[#0B1F33]">L</div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FBBE2C]">LCKMY</div>
            <div className="text-sm font-bold">Admin Portal</div>
          </div>
        </div>
        <nav className="space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link key={label} href={href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white">
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl border border-slate-700 bg-white/5 p-4">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-slate-200">
            <LogOut className="h-4 w-4" /> Return to site
          </Link>
        </div>
      </aside>

      <div className="flex-1">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-5 py-4 md:px-8">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FBBE2C]">CMS / Operations</div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#FBBE2C]/20 px-3 py-1.5 text-sm font-semibold text-[#0B1F33]">Admin Portal</div>
            </div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
