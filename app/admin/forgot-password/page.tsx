"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/admin/reset-password` });
    if (resetError) setError(resetError.message);
    else setMessage("If that email is registered, a password reset link has been sent.");
  }

  return <main className="flex min-h-screen items-center justify-center bg-[#F5F7FA] p-6"><div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.32em] text-[#FBBE2C]">ADMIN PORTAL</p><h1 className="mt-2 text-3xl font-black text-[#0B1F33]">Reset password</h1><p className="mt-3 text-slate-600">Enter your admin email to receive a secure reset link.</p><form onSubmit={submit} className="mt-6 space-y-4"><input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="admin@lckmy.org" /><button type="submit" className="gold-button w-full">SEND RESET LINK</button></form>{message ? <p role="status" className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{message}</p> : null}{error ? <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}<Link href="/admin/login" className="mt-6 block text-center text-sm font-semibold text-[#0B1F33] underline">Back to login</Link></div></main>;
}