import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Asier Bayón",
  author: "asierbayon",
  description: "My personal website.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    github: "https://github.com/asierbayon",
    instagram: "https://instagram.com/asierbayon",
    twitter: "https://twitter.com/asier_bayon",
    linkedin: "https://www.linkedin.com/in/asierbayon",
    email: "mailto:bayonasier@gmail.com",
  },
}
