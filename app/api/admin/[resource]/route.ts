import { NextResponse } from "next/server";
import { canManage, getAdminContext, type AdminRole } from "@/lib/auth/permissions";

type Resource = "posts" | "projects" | "events" | "donations";

const resourceConfig: Record<Resource, { table: string; permission: string; fields: string[] }> = {
  posts: {
    table: "posts",
    permission: "content",
    fields: ["title", "slug", "category", "excerpt", "featured_image", "content", "author", "status", "publish_date", "seo_title", "seo_description"],
  },
  projects: {
    table: "projects",
    permission: "content",
    fields: ["title", "slug", "category", "cover_image", "project_date", "location", "organizer", "partners", "description", "objectives", "activities", "impact", "participants", "beneficiaries", "featured", "status", "seo_title", "seo_description"],
  },
  events: {
    table: "events",
    permission: "content",
    fields: ["title", "slug", "description", "cover_image", "event_date", "start_time", "end_time", "venue", "organizer", "partners", "registration_url", "contact", "status"],
  },
  donations: {
    table: "donation_campaigns",
    permission: "finance",
    fields: ["title", "slug", "description", "short_description", "cover_image", "target_amount", "start_date", "end_date", "status", "beneficiary_description", "impact_description", "donation_methods"],
  },
};

function getConfig(resource: string) {
  return resourceConfig[resource as Resource];
}

function isPublishing(resource: Resource, payload: Record<string, unknown>) {
  return (resource === "posts" && payload.status === "published") ||
    (resource === "projects" && payload.status === "published") ||
    (resource === "events" && ["upcoming", "ongoing", "completed"].includes(String(payload.status))) ||
    (resource === "donations" && payload.status === "active");
}

async function getAuthorized(resource: string) {
  const config = getConfig(resource);
  const context = await getAdminContext();
  if (!config || !context.user || !context.role) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  if (!canManage(context.role, config.permission)) {
    return { error: NextResponse.json({ error: "Forbidden" }, { status: 403 }) };
  }
  return { config, context } as { config: typeof config; context: { supabase: typeof context.supabase; user: NonNullable<typeof context.user>; role: AdminRole } };
}

function cleanPayload(config: { fields: string[] }, body: Record<string, unknown>) {
  return Object.fromEntries(config.fields.filter((field) => field in body).map((field) => [field, body[field]]));
}

async function audit(supabase: Awaited<ReturnType<typeof getAdminContext>>["supabase"], email: string, action: string, entity: string, entityId?: string) {
  await supabase.from("audit_logs").insert({ admin_email: email, action, entity, entity_id: entityId ?? null });
}

export async function GET(request: Request, { params }: { params: Promise<{ resource: string }> }) {
  const { resource } = await params;
  const authorized = await getAuthorized(resource);
  if ("error" in authorized) return authorized.error;
  const { config, context } = authorized;
  const { data, error } = await context.supabase.from(config.table).select("*").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

export async function POST(request: Request, { params }: { params: Promise<{ resource: string }> }) {
  const { resource } = await params;
  const authorized = await getAuthorized(resource);
  if ("error" in authorized) return authorized.error;
  const { config, context } = authorized;
  const body = await request.json() as Record<string, unknown>;
  const payload = cleanPayload(config, body);
  const resourceKey = resource as Resource;

  if (!payload.title || !payload.slug) return NextResponse.json({ error: "Title and slug are required." }, { status: 400 });
  if (context.role === "EDITOR" && isPublishing(resourceKey, payload)) return NextResponse.json({ error: "Editors can save drafts but cannot publish." }, { status: 403 });

  const { data, error } = await context.supabase.from(config.table).insert(payload).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  await audit(context.supabase, context.user.email ?? "unknown", "created", config.table, data.id);
  return NextResponse.json({ data }, { status: 201 });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ resource: string }> }) {
  const { resource } = await params;
  const authorized = await getAuthorized(resource);
  if ("error" in authorized) return authorized.error;
  const { config, context } = authorized;
  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing record id." }, { status: 400 });
  const body = await request.json() as Record<string, unknown>;
  const payload = cleanPayload(config, body);
  if (context.role === "EDITOR" && isPublishing(resource as Resource, payload)) return NextResponse.json({ error: "Editors can save drafts but cannot publish." }, { status: 403 });

  const { data, error } = await context.supabase.from(config.table).update(payload).eq("id", id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  await audit(context.supabase, context.user.email ?? "unknown", "updated", config.table, id);
  return NextResponse.json({ data });
}

export async function DELETE(request: Request, { params }: { params: Promise<{ resource: string }> }) {
  const { resource } = await params;
  const authorized = await getAuthorized(resource);
  if ("error" in authorized) return authorized.error;
  const { config, context } = authorized;
  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing record id." }, { status: 400 });
  const { error } = await context.supabase.from(config.table).delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  await audit(context.supabase, context.user.email ?? "unknown", "deleted", config.table, id);
  return NextResponse.json({ ok: true });
}