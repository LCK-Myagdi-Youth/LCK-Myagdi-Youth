import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key",
  { auth: { persistSession: false, autoRefreshToken: false } },
);

function value(input: unknown, maxLength: number) {
  return typeof input === "string" ? input.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const expectedSecret = process.env.GOOGLE_FORM_WEBHOOK_SECRET;
  const providedSecret = request.headers.get("x-google-form-secret");
  if (!expectedSecret || providedSecret !== expectedSecret) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json() as Record<string, unknown>;
    const payload = {
      name: value(body.name, 120),
      email: value(body.email, 160),
      phone: value(body.phone, 40),
      age: body.age ? Number(body.age) : null,
      occupation: value(body.occupation, 160),
      why_join: value(body.why_join, 2000),
      skills_interests: value(body.skills_interests, 1000),
      social_media: value(body.social_media, 500),
      status: "new",
    };
    if (!payload.name || !payload.email.includes("@")) return NextResponse.json({ error: "Name and valid email are required." }, { status: 400 });
    const { error } = await supabase.from("membership_applications").insert(payload);
    if (error) return NextResponse.json({ error: "Unable to store form response." }, { status: 500 });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}