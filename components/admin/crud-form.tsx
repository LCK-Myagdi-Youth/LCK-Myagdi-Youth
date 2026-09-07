"use client";

import { FormEvent, useState } from "react";

type Field = { name: string; label: string; type?: "text" | "textarea" | "date" | "number" | "select" | "checkbox"; options?: string[]; required?: boolean };

type Props = { resource: "posts" | "projects" | "events" | "donations"; fields: Field[]; initial?: Record<string, unknown>; onSaved: () => void };

export function CrudForm({ resource, fields, initial = {}, onSaved }: Props) {
  const [values, setValues] = useState<Record<string, unknown>>(initial);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  function setValue(name: string, value: unknown) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    const response = await fetch(`/api/admin/${resource}${initial.id ? `?id=${initial.id}` : ""}`, {
      method: initial.id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    if (!response.ok) setError(result.error ?? "Unable to save this record.");
    else {
      setValues({});
      onSaved();
    }
    setSaving(false);
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {fields.map((field) => {
        const value = values[field.name] ?? "";
        if (field.type === "checkbox") {
          return <label key={field.name} className="flex items-center gap-3 text-sm font-semibold text-slate-700"><input type="checkbox" checked={Boolean(value)} onChange={(event) => setValue(field.name, event.target.checked)} /> {field.label}</label>;
        }
        if (field.type === "textarea") {
          return <label key={field.name} className="block text-sm font-semibold text-slate-700">{field.label}<textarea required={field.required} value={String(value)} onChange={(event) => setValue(field.name, event.target.value)} className="mt-2 min-h-28 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal" /></label>;
        }
        if (field.type === "select") {
          return <label key={field.name} className="block text-sm font-semibold text-slate-700">{field.label}<select required={field.required} value={String(value)} onChange={(event) => setValue(field.name, event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal"><option value="">Select</option>{field.options?.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
        }
        return <label key={field.name} className="block text-sm font-semibold text-slate-700">{field.label}<input required={field.required} type={field.type ?? "text"} value={String(value)} onChange={(event) => setValue(field.name, field.type === "number" ? Number(event.target.value) : event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal" /></label>;
      })}
      {error ? <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
      <button disabled={saving} type="submit" className="gold-button w-full disabled:opacity-60">{saving ? "SAVING..." : initial.id ? "UPDATE" : "CREATE"}</button>
    </form>
  );
}