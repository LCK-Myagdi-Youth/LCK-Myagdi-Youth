import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AdminRole = "SUPER_ADMIN" | "CONTENT_ADMIN" | "FINANCE_ADMIN" | "EDITOR";

const rolePermissions: Record<AdminRole, string[]> = {
  SUPER_ADMIN: ["content", "finance", "settings", "users"],
  CONTENT_ADMIN: ["content"],
  FINANCE_ADMIN: ["finance"],
  EDITOR: ["content"],
};

export async function getAdminContext() {
  const supabase = await createSupabaseServerClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    return { supabase, user: null, role: null as AdminRole | null };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  const role = (profile?.role as AdminRole | undefined) ?? null;
  return { supabase, user, role };
}

export async function requireAdmin(permission?: string) {
  const context = await getAdminContext();

  if (!context.user || !context.role) {
    redirect("/admin/login");
  }

  if (permission && !rolePermissions[context.role].includes(permission)) {
    redirect("/admin/dashboard?error=forbidden");
  }

  return context as typeof context & { user: NonNullable<typeof context.user>; role: AdminRole };
}

export function canManage(role: AdminRole, permission: string) {
  return rolePermissions[role].includes(permission);
}