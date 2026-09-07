"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, HandCoins } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Leo Club of Kathmandu Myagdi Youth home">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#FBBE2C] bg-[#0B1F33] text-sm font-black text-white">
            L
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#FBBE2C]">LCKMY</div>
            <div className="text-sm font-bold text-[#0B1F33]">Kathmandu Myagdi Youth</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="relative group">
                  <button
                    className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-[#0B1F33]"
                    aria-haspopup="true"
                    aria-expanded={mediaOpen}
                    onClick={() => setMediaOpen((prev) => !prev)}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 top-full hidden min-w-40 rounded-xl border border-slate-200 bg-white p-2 shadow-lg group-hover:block">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0B1F33]">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-[#0B1F33]">
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/donate" className="inline-flex items-center gap-2 rounded-full border border-[#FBBE2C] bg-[#FBBE2C] px-5 py-2.5 text-sm font-bold text-[#0B1F33] transition hover:-translate-y-0.5 hover:shadow-md">
            <HandCoins className="h-4 w-4" />
            DONATE
          </Link>
          <Link href="/join" className="rounded-full bg-[#0B1F33] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#122d4c]">
            JOIN US
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex rounded-full border border-slate-200 p-2 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {navigation.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-100 px-3 py-2">
                {item.children ? (
                  <div>
                    <div className="text-sm font-bold text-[#0B1F33]">{item.label}</div>
                    <div className="mt-2 flex flex-col gap-2 pl-2 text-sm text-slate-600">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-slate-700">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-2 flex gap-2">
              <Link href="/donate" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-[#FBBE2C] px-4 py-3 text-center text-sm font-bold text-[#0B1F33]">
                DONATE
              </Link>
              <Link href="/join" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-[#0B1F33] px-4 py-3 text-center text-sm font-bold text-white">
                JOIN US
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
