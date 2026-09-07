"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.replace("/admin/dashboard");
    router.refresh();
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="email">Email</label>
        <input id="email" required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="admin@lckmy.org" autoComplete="email" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="password">Password</label>
        <input id="password" required minLength={8} type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Password" autoComplete="current-password" />
      </div>
      {error ? <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
      <button disabled={loading} type="submit" className="gold-button w-full disabled:cursor-not-allowed disabled:opacity-60">{loading ? "SIGNING IN..." : "LOGIN"}</button>
      <div className="text-center"><Link href="/admin/forgot-password" className="text-sm font-semibold text-slate-600 underline">Forgot password?</Link></div>
      <div className="text-center"><Link href="/" className="text-sm font-semibold text-[#0B1F33] underline">Back to site</Link></div>
    </form>
  );
}