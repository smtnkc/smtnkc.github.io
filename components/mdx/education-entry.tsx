import { CalendarIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

type EducationEntryProps = {
  degree: string
  institution: string
  gpa?: string
  thesis?: string
  thesisUrl?: string
  dates: string
  note?: string
}

export function EducationEntry({
  degree,
  institution,
  gpa,
  thesis,
  thesisUrl,
  dates,
  note,
}: EducationEntryProps) {
  return (
    <article className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-8">
      <div className="min-w-0">
        <h3 className="font-heading text-base font-medium text-foreground">
          {degree}
        </h3>
        <Badge variant="secondary" className="mt-1 sm:hidden">
          <CalendarIcon data-icon="inline-start" />
          {dates}
        </Badge>
        <p className="mt-1 text-typeset text-muted-foreground">
          {institution}
          {gpa ? ` · GPA: ${gpa}` : null}
        </p>
        {thesis ? (
          <p className="mt-1 text-typeset italic">
            Thesis:{" "}
            {thesisUrl ? (
              <a
                href={thesisUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                {thesis}
              </a>
            ) : (
              thesis
            )}
          </p>
        ) : null}
        {note ? (
          <p className="mt-1 text-typeset text-muted-foreground">{note}</p>
        ) : null}
      </div>
      <Badge variant="secondary" className="hidden shrink-0 sm:inline-flex">
        <CalendarIcon data-icon="inline-start" />
        {dates}
      </Badge>
    </article>
  )
}
