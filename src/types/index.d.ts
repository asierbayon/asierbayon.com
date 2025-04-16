// *Config*
export type SiteConfig = {
  name: string
  author: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
    instagram: string
    twitter: string
    linkedin: string
    email: string
  }
}

// Project Status
export type ProjectStatus = "Active" | "Building" | "On hold" | "Discontinued"

// Project
export interface IProject {
  name: string
  repoUrl?: string
  description: string
  logo: string
  status: ProjectStatus
  stack: string[]
  url?: string
  urlText?: string
  mrr?: number
  timePeriod: string
  highlight?: string
}
