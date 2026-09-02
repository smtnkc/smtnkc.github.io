import { ArrowUpRightIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ProjectEntryProps = {
  name: string
  description: string
  tech: string[]
  codeUrl?: string
  paperUrl?: string
  websiteUrl?: string
}

type UrlKey = "codeUrl" | "paperUrl" | "websiteUrl"

const LINKS: { key: UrlKey; label: string }[] = [
  { key: "codeUrl", label: "Code" },
  { key: "paperUrl", label: "Paper" },
  { key: "websiteUrl", label: "Website" },
]

export function ProjectEntry({
  name,
  description,
  tech,
  codeUrl,
  paperUrl,
  websiteUrl,
}: ProjectEntryProps) {
  const urls = { codeUrl, paperUrl, websiteUrl }

  return (
    <Card size="sm" className="h-full">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-base">
          {name}
        </CardTitle>
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          {LINKS.map(({ key, label }) => {
            const url = urls[key]
            if (!url) return null
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} for ${name}`}
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                })}
              >
                {label}
                <ArrowUpRightIcon data-icon="inline-end" />
              </a>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-typeset text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <p
          className="font-mono text-xs leading-relaxed text-muted-foreground"
          aria-label={`Technologies: ${tech.join(", ")}`}
        >
          {tech.join(" · ")}
        </p>
      </CardFooter>
    </Card>
  )
}
