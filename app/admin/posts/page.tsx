import { ResourceManager } from "@/components/admin/resource-manager";
import { requireAdmin } from "@/lib/auth/permissions";

export default async function AdminPostsPage() {
  await requireAdmin("content");
  return <ResourceManager resource="posts" title="Posts" description="Draft, publish and maintain news, announcements and stories." fields={[{ name: "title", label: "Title", required: true }, { name: "slug", label: "Slug", required: true }, { name: "category", label: "Category" }, { name: "excerpt", label: "Excerpt", type: "textarea" }, { name: "content", label: "Content", type: "textarea" }, { name: "author", label: "Author" }, { name: "status", label: "Status", type: "select", options: ["draft", "published", "scheduled", "archived"], required: true }, { name: "publish_date", label: "Publish date", type: "date" }]} />;
}