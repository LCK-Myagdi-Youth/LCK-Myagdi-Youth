import { ResourceManager } from "@/components/admin/resource-manager";
import { requireAdmin } from "@/lib/auth/permissions";

export default async function AdminEventsPage() {
  await requireAdmin("content");
  return <ResourceManager resource="events" title="Events" description="Create events, manage registration information and update event status." fields={[{ name: "title", label: "Title", required: true }, { name: "slug", label: "Slug", required: true }, { name: "description", label: "Description", type: "textarea" }, { name: "event_date", label: "Event date", type: "date" }, { name: "start_time", label: "Start time" }, { name: "end_time", label: "End time" }, { name: "venue", label: "Venue" }, { name: "organizer", label: "Organizer" }, { name: "registration_url", label: "Registration URL" }, { name: "contact", label: "Contact" }, { name: "status", label: "Status", type: "select", options: ["draft", "upcoming", "ongoing", "completed", "cancelled"], required: true }]} />;
}