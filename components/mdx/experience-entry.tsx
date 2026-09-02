import { CalendarIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

type ExperienceEntryProps = {
  role: string
  organization: string
  dates: string
  bullets: string[]
}

export function ExperienceEntry({
  role,
  organization,
  dates,
  bullets,
}: ExperienceEntryProps) {
  return (
    <article className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-8">
      <div className="min-w-0">
        <h3 className="font-heading text-base font-medium text-foreground">
          {role}
        </h3>
        <Badge variant="secondary" className="mt-1 sm:hidden">
          <CalendarIcon data-icon="inline-start" />
          {dates}
        </Badge>
        <p className="mt-1 text-typeset text-muted-foreground">
          {organization}
        </p>
        <ul className="mt-2 flex list-outside list-disc flex-col pl-4 text-typeset text-muted-foreground">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <Badge variant="secondary" className="hidden shrink-0 sm:inline-flex">
        <CalendarIcon data-icon="inline-start" />
        {dates}
      </Badge>
    </article>
  )
}
