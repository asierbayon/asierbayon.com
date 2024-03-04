import { ProjectStatus } from "@/types"

import { ColoredBadgeVariant } from "@/components/ui/colored-badge"

export const projectStatusColors: Record<ProjectStatus, ColoredBadgeVariant> = {
  Active: "success",
  Building: "info",
  Discontinued: "error",
  "On hold": "warning",
}
