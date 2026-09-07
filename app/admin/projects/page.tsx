import { ResourceManager } from "@/components/admin/resource-manager";
import { requireAdmin } from "@/lib/auth/permissions";

export default async function AdminProjectsPage() {
  await requireAdmin("content");
  return <ResourceManager resource="projects" title="Projects" description="Manage project stories, impact details, images and publication status." fields={[{ name: "title", label: "Title", required: true }, { name: "slug", label: "Slug", required: true }, { name: "category", label: "Category" }, { name: "project_date", label: "Project date", type: "date" }, { name: "location", label: "Location" }, { name: "organizer", label: "Organizer" }, { name: "description", label: "Description", type: "textarea" }, { name: "objectives", label: "Objectives", type: "textarea" }, { name: "activities", label: "Activities", type: "textarea" }, { name: "impact", label: "Impact", type: "textarea" }, { name: "status", label: "Status", type: "select", options: ["draft", "published", "archived"], required: true }, { name: "featured", label: "Featured", type: "checkbox" }]} />;
}