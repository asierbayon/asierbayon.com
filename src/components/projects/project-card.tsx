import Image from "next/image"
import Link from "next/link"
import { IProject } from "@/types"
import { ExternalLink, Trophy } from "lucide-react"

import { projectStatusColors } from "@/lib/project-status-colors"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

import { Badge } from "../ui/badge"

interface ProjectCardProps {
  project: IProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      key={project.name}
      className="overflow-hidden rounded-3xl border-2 bg-zinc-100 md:basis-[calc(50%-0.5rem)]"
    >
      <div className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between">
          <div className="relative aspect-square h-16 w-16 overflow-hidden rounded-lg">
            <Image
              src={project.logo || "/og.jpg"}
              alt={`${project.name} logo`}
              fill
              className="object-contain"
              priority={false}
              sizes="64px"
            />
          </div>
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="mt-4">
          <CardTitle className="flex items-center gap-2 text-xl font-semibold">
            <div
              className={`h-2 w-2 rounded-full bg-${
                projectStatusColors[project.status]
              }-500`}
            />
            {project.name}
          </CardTitle>
        </div>

        <CardContent className="px-0">
          <p className="mt-2 text-sm text-muted-foreground">
            {project.description}
          </p>

          {project.highlight && (
            <div className="mt-3 flex items-center gap-2 text-muted-foreground">
              <Trophy className="h-3 w-3" />
              <p className="text-sm">{project.highlight}</p>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge
                key={item}
                className="rounded-full text-muted-foreground"
                variant="outline"
              >
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
