"use client";

import { useEffect, useState } from "react";
import { CrudForm } from "@/components/admin/crud-form";

type Field = { name: string; label: string; type?: "text" | "textarea" | "date" | "number" | "select" | "checkbox"; options?: string[]; required?: boolean };

type Props = { resource: "posts" | "projects" | "events" | "donations"; title: string; description: string; fields: Field[] };

export function ResourceManager({ resource, title, description, fields }: Props) {
  const [records, setRecords] = useState<Record<string, unknown>[]>([]);
  const [selected, setSelected] = useState<Record<string, unknown> | undefined>();
  const [error, setError] = useState("");

  async function load() {
    const response = await fetch(`/api/admin/${resource}`, { cache: "no-store" });
    const result = await response.json();
    if (!response.ok) setError(result.error ?? "Unable to load records.");
    else setRecords(result.data ?? []);
  }

  useEffect(() => {
    let active = true;
    fetch(`/api/admin/${resource}`, { cache: "no-store" })
      .then(async (response) => ({ response, result: await response.json() }))
      .then(({ response, result }) => {
        if (!active) return;
        if (!response.ok) setError(result.error ?? "Unable to load records.");
        else setRecords(result.data ?? []);
      })
      .catch(() => {
        if (active) setError("Unable to load records.");
      });
    return () => { active = false; };
  }, [resource]);

  async function remove(id: string) {
    if (!window.confirm("Delete this record? This cannot be undone.")) return;
    const response = await fetch(`/api/admin/${resource}?id=${id}`, { method: "DELETE" });
    if (!response.ok) {
      const result = await response.json();
      setError(result.error ?? "Unable to delete this record.");
      return;
    }
    await load();
  }

  return (
    <main className="p-6 md:p-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FBBE2C]">CONTENT MANAGEMENT</p>
        <h1 className="mt-2 text-3xl font-black text-[#0B1F33]">{title}</h1>
        <p className="mt-2 text-slate-600">{description}</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-black text-[#0B1F33]">{selected ? "Edit record" : "Create record"}</h2>
          <CrudForm resource={resource} fields={fields} initial={selected} onSaved={() => { setSelected(undefined); void load(); }} />
          {selected ? <button type="button" onClick={() => setSelected(undefined)} className="mt-3 w-full rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600">Cancel edit</button> : null}
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-black text-[#0B1F33]">Published records</h2><span className="rounded-full bg-[#FBBE2C]/20 px-3 py-1 text-sm font-semibold">{records.length}</span></div>
          {error ? <p role="alert" className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
          <div className="space-y-3">
            {records.length === 0 ? <p className="rounded-2xl bg-[#F5F7FA] p-5 text-slate-600">No records yet. Create the first one using the form.</p> : records.map((record) => (
              <div key={String(record.id)} className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div><h3 className="font-bold text-[#0B1F33]">{String(record.title ?? record.name ?? "Untitled")}</h3><p className="mt-1 text-sm text-slate-500">{String(record.status ?? "draft")}</p></div>
                <div className="flex gap-2"><button type="button" onClick={() => setSelected(record)} className="rounded-full border border-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em]">Edit</button><button type="button" onClick={() => void remove(String(record.id))} className="rounded-full border border-red-200 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-red-700">Delete</button></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}