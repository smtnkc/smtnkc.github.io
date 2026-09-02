import type { ReactNode } from "react"

import type { CatalogData } from "@/lib/guides"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function renderCell(value: string): ReactNode {
  const link = value.match(/^\[([^\]]+)]\(([^)]+)\)$/)

  if (!link) return value

  return (
    <a
      href={link[2]}
      className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
    >
      {link[1]}
    </a>
  )
}

export function CatalogCards({ catalog }: { catalog: CatalogData }) {
  const [categoryLabel, titleLabel, ...detailLabels] = catalog.headers

  return (
    <div className="flex flex-col gap-3 md:hidden">
      {catalog.rows.map((row, rowIndex) => {
        const [category, title, ...details] = row

        return (
          <Card key={`${title}-${rowIndex}`} size="sm">
            <CardHeader>
              <CardTitle>
                <span className="sr-only">{titleLabel}: </span>
                {renderCell(title)}
              </CardTitle>
              <CardAction>
                <Badge variant="secondary">
                  <span className="sr-only">{categoryLabel}: </span>
                  {category}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <dl className="flex flex-col gap-3">
                {details.map((detail, detailIndex) => (
                  <div
                    key={`${detailLabels[detailIndex]}-${detailIndex}`}
                    className="flex flex-col gap-1"
                  >
                    <dt className="text-xs font-medium text-muted-foreground">
                      {detailLabels[detailIndex]}
                    </dt>
                    <dd className="leading-[1.5] text-foreground">
                      {renderCell(detail)}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
