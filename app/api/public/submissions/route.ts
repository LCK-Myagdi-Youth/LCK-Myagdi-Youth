import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type SubmissionType = "membership" | "contact" | "donation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key",
  { auth: { persistSession: false, autoRefreshToken: false } },
);

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (text(body.website, 100)) return NextResponse.json({ ok: true });

    const type = text(body.type, 20) as SubmissionType;
    if (!["membership", "contact", "donation"].includes(type)) return NextResponse.json({ error: "Invalid submission type." }, { status: 400 });

    if (type === "membership") {
      const payload = {
        name: text(body.name, 120),
        email: text(body.email, 160),
        phone: text(body.phone, 40),
        age: body.age ? Number(body.age) : null,
        occupation: text(body.occupation, 160),
        why_join: text(body.why_join, 2000),
        skills_interests: text(body.skills_interests, 1000),
        social_media: text(body.social_media, 500),
        status: "new",
      };
      if (!payload.name || !payload.email || !payload.why_join || !payload.email.includes("@")) return NextResponse.json({ error: "Name, valid email, and motivation are required." }, { status: 400 });
      const { error } = await supabase.from("membership_applications").insert(payload);
      if (error) return NextResponse.json({ error: "Unable to submit application right now." }, { status: 500 });
    }

    if (type === "contact") {
      const payload = {
        name: text(body.name, 120),
        email: text(body.email, 160),
        subject: text(body.subject, 200),
        message: text(body.message, 4000),
        status: "unread",
      };
      if (!payload.name || !payload.email || !payload.message || !payload.email.includes("@")) return NextResponse.json({ error: "Name, valid email, and message are required." }, { status: 400 });
      const { error } = await supabase.from("contact_messages").insert(payload);
      if (error) return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
    }

    if (type === "donation") {
      const amount = Number(body.amount);
      const campaignReference = text(body.campaign_id, 160);
      let campaignId: string | null = null;
      if (campaignReference) {
        const { data: campaign } = await supabase.from("donation_campaigns").select("id").eq("slug", campaignReference).maybeSingle();
        campaignId = campaign?.id ?? null;
      }
      const payload = {
        donor_name: text(body.name, 120),
        donor_email: text(body.email, 160),
        donor_phone: text(body.phone, 40),
        amount,
        campaign_id: campaignId,
        payment_method: text(body.payment_method, 80),
        reference_id: text(body.reference_id, 160),
        message: text(body.message, 1000),
        anonymous_donation: Boolean(body.anonymous_donation),
        status: "pending",
      };
      if (!Number.isFinite(amount) || amount <= 0 || !payload.payment_method || !payload.reference_id) return NextResponse.json({ error: "Amount, payment method, and transaction reference are required." }, { status: 400 });
      const { error } = await supabase.from("donations").insert(payload);
      if (error) return NextResponse.json({ error: "Unable to submit donation details right now." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}