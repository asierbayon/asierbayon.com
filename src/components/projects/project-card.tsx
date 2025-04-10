import Image from "next/image"
import Link from "next/link"
import { IProject } from "@/types"
import { ExternalLink, Trophy } from "lucide-react"

import { projectStatusColors } from "@/lib/project-status-colors"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
      <div className="flex h-full flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={project.image || "/og.jpg"}
            alt={`${project.name} preview`}
            fill
            className="object-cover object-top"
            priority={false}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="p-6">
          <CardHeader className="px-0 pt-0">
            <div className="flex flex-row items-center justify-between">
              <CardTitle className="flex flex-row items-center gap-2 text-2xl font-semibold">
                <div
                  className={`h-2 w-2 rounded-full bg-${
                    projectStatusColors[project.status]
                  }-500`}
                />
                {project.name}
              </CardTitle>
            </div>
            <p className="text-sm">{project.description}</p>
          </CardHeader>

          <CardContent className="px-0">
            {project.highlight && (
              <div className="mt-3 flex flex-row items-center gap-2 text-muted-foreground">
                <Trophy className="h-3 w-3" />
                <p className="text-sm">{project.highlight}</p>
              </div>
            )}
            <div className="mt-3 inline-flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge
                  className="rounded-full text-muted-foreground"
                  variant="outline"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="px-0 pb-0">
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                className="flex items-center space-x-2 text-sm hover:underline"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                {project.urlText}&nbsp;
              </Link>
            )}
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
