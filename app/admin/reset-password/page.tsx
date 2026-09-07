"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setReady(Boolean(data.session)));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) setError(updateError.message);
    else {
      setMessage("Password updated. Redirecting to login...");
      await supabase.auth.signOut();
      setTimeout(() => router.replace("/admin/login"), 800);
    }
  }

  return <main className="flex min-h-screen items-center justify-center bg-[#F5F7FA] p-6"><div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"><h1 className="text-3xl font-black text-[#0B1F33]">Choose a new password</h1>{!ready ? <p className="mt-4 text-slate-600">This reset link is invalid or expired.</p> : <form onSubmit={submit} className="mt-6 space-y-4"><input required minLength={8} type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="New password" /><button type="submit" className="gold-button w-full">UPDATE PASSWORD</button></form>}{message ? <p role="status" className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{message}</p> : null}{error ? <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}</div></main>;
}