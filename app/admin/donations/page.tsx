import { ResourceManager } from "@/components/admin/resource-manager";
import { requireAdmin } from "@/lib/auth/permissions";

export default async function AdminDonationsPage() {
  await requireAdmin("finance");
  return <ResourceManager resource="donations" title="Donation campaigns" description="Manage campaign goals, dates, transparency descriptions and active status." fields={[{ name: "title", label: "Campaign title", required: true }, { name: "slug", label: "Slug", required: true }, { name: "short_description", label: "Short description", type: "textarea" }, { name: "description", label: "Description", type: "textarea" }, { name: "target_amount", label: "Target amount", type: "number", required: true }, { name: "start_date", label: "Start date", type: "date" }, { name: "end_date", label: "End date", type: "date" }, { name: "beneficiary_description", label: "Beneficiaries", type: "textarea" }, { name: "impact_description", label: "Impact", type: "textarea" }, { name: "status", label: "Status", type: "select", options: ["draft", "active", "closed"], required: true }]} />;
}