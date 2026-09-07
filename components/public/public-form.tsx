"use client";

import { FormEvent, useState } from "react";

type Props = { type: "membership" | "contact" | "donation"; fields: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }[]; submitLabel: string };

export function PublicForm({ type, fields, submitLabel }: Props) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.type = type;
    const response = await fetch("/api/public/submissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const result = await response.json();
    if (!response.ok) setError(result.error ?? "Unable to submit this form.");
    else {
      setMessage("Thanks. Your submission has been received.");
      event.currentTarget.reset();
    }
    setLoading(false);
  }

  return (
    <form className="space-y-4" onSubmit={submit}>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {fields.map((field) => field.type === "textarea" ? (
        <label key={field.name} className="block text-sm font-semibold text-slate-700">{field.label}<textarea name={field.name} required={field.required} placeholder={field.placeholder} className="mt-2 min-h-28 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal" /></label>
      ) : (
        <label key={field.name} className="block text-sm font-semibold text-slate-700">{field.label}<input name={field.name} type={field.type ?? "text"} required={field.required} placeholder={field.placeholder} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal" /></label>
      ))}
      {error ? <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
      {message ? <p role="status" className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{message}</p> : null}
      <button disabled={loading} type="submit" className="gold-button w-full disabled:opacity-60">{loading ? "SUBMITTING..." : submitLabel}</button>
    </form>
  );
}