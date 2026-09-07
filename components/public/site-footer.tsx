import Link from "next/link";
import { Globe, Camera, Play, BriefcaseBusiness } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-[#0B1F33] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr,1fr,1fr,1.2fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FBBE2C] bg-white text-sm font-black text-[#0B1F33]">
              L
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#FBBE2C]">LCKMY</div>
              <div className="text-base font-bold text-white">Kathmandu Myagdi Youth</div>
            </div>
          </div>
          <p className="text-sm text-slate-300">{siteConfig.name}</p>
          <p className="mt-3 text-sm font-semibold tracking-[0.2em] text-[#FBBE2C]">RISE • REACH • REDEFINE</p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects-events">Projects &amp; Events</Link></li>
            <li><Link href="/impact">Impact</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/donate">Donate</Link></li>
            <li><Link href="/join">Join Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">Contact</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Myagdi, Nepal</li>
            <li>hello@lckmy.org</li>
            <li>+977-98XXXXXXXX</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">Social Media</h3>
          <div className="mb-6 flex gap-3">
            <a className="rounded-full border border-slate-600 p-2 text-slate-200 hover:border-[#FBBE2C] hover:text-[#FBBE2C]" href={siteConfig.social.facebook} aria-label="Facebook"><Globe className="h-4 w-4" /></a>
            <a className="rounded-full border border-slate-600 p-2 text-slate-200 hover:border-[#FBBE2C] hover:text-[#FBBE2C]" href={siteConfig.social.instagram} aria-label="Instagram"><Camera className="h-4 w-4" /></a>
            <a className="rounded-full border border-slate-600 p-2 text-slate-200 hover:border-[#FBBE2C] hover:text-[#FBBE2C]" href={siteConfig.social.youtube} aria-label="YouTube"><Play className="h-4 w-4" /></a>
            <a className="rounded-full border border-slate-600 p-2 text-slate-200 hover:border-[#FBBE2C] hover:text-[#FBBE2C]" href={siteConfig.social.linkedin} aria-label="LinkedIn"><BriefcaseBusiness className="h-4 w-4" /></a>
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <p>Affiliation: {siteConfig.affiliation}</p>
            <p>Sponsored Club: {siteConfig.sponsoredClub}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-5 text-sm text-slate-300 sm:flex-row sm:px-6 lg:px-8">
          <p>Leo Club of Kathmandu Myagdi Youth. All rights reserved.</p>
          <p>• RISE • REACH • REDEFINE</p>
        </div>
      </div>
    </footer>
  );
}
