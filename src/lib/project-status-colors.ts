import { ProjectStatus } from "@/types"

export const projectStatusColors: Record<ProjectStatus, string> = {
  Active: "green",
  Building: "yellow",
  Discontinued: "red",
  "On hold": "yellow",
}
