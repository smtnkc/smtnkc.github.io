import type { ReactNode } from "react"
import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

type PublicationListProps = {
  children: ReactNode
}

export function PublicationList({ children }: PublicationListProps) {
  return (
    <ol className="flex list-outside list-decimal flex-col gap-2 pr-4 pl-8 marker:font-mono marker:text-xs marker:text-muted-foreground">
      {children}
    </ol>
  )
}

type PublicationEntryProps = {
  kind: "journal" | "conference"
  authors: string
  title: string
  venue: string
  year: string
  href: string
}

function HighlightedAuthors({ authors }: { authors: string }) {
  const [before, after] = authors.split("Tenekeci S")

  return (
    <>
      {before}
      <strong className="font-semibold text-foreground">Tenekeci S</strong>
      {after}
    </>
  )
}

export function PublicationEntry({
  kind,
  authors,
  title,
  venue,
  year,
  href,
}: PublicationEntryProps) {
  const isJournal = kind === "journal"

  return (
    <li className="pl-1">
      <p className="text-typeset leading-relaxed text-foreground">
        <Badge
          className={
            isJournal
              ? "mr-2 bg-blue-50 align-middle text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              : "mr-2 bg-green-50 align-middle text-green-700 dark:bg-green-950 dark:text-green-300"
          }
        >
          {isJournal ? "Journal" : "Conference"}
        </Badge>
        <HighlightedAuthors authors={authors} />. “{title}”. <em>{venue}</em>,{" "}
        {year}.{" "}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 underline underline-offset-4 hover:text-foreground"
        >
          Link
          <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
        </a>
      </p>
    </li>
  )
}
