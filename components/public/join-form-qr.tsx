"use client";

import { QrCode as QrIcon } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export function JoinFormQr({ url }: { url: string }) {
  if (!url) {
    return <div className="flex h-48 w-48 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 text-center"><QrIcon className="h-8 w-8 text-slate-400" /><p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Google Form QR will appear here</p></div>;
  }

  return <div className="rounded-2xl bg-white p-4"><QRCodeSVG value={url} size={176} bgColor="#ffffff" fgColor="#0B1F33" includeMargin level="M" /></div>;
}