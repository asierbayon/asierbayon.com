import { siteConfig } from "@/config/site"
import { HeadingText } from "@/components/common/heading-text"
import { SocialMediaIcons } from "@/components/common/social-media-icons"
import { ProjectCard } from "@/components/projects/project-card"

import { projects } from "./projects"

export default async function Home() {
  return (
    <main className="py-4">
      <section className="space-y-4 py-4">
        <p className="font-light">
          Mountain and cow photographer during the summer, powder enthusiast
          during winter, and building stuff on the Internet all year round.
        </p>
        <p className="font-light">
          I'm driven by{" "}
          <span className="font-semibold">discovering market gaps</span>, and{" "}
          <span className="font-semibold">crafting visual beauty</span>.
        </p>
        <SocialMediaIcons />
      </section>
      <section className="space-y-4 py-4">
        <HeadingText>Projects</HeadingText>
        <div className="flex flex-col items-end gap-4">
          <div className="grid w-full grid-cols-1 gap-y-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
