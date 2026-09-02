"use client"

import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { useLanguageToggle } from "@/hooks/use-language-toggle"

export type BlogCard = {
  slug: string
  title: string
  description: string
  updatedAt: string
}

type BlogContentProps = {
  trCards: BlogCard[]
  enCards: BlogCard[]
}

const COPY = {
  en: {
    title: "Blog",
    description:
      "Guides, tool directories, and practical resources for digital entrepreneurship and AI development.",
    lastPost: "Last post",
    open: "Open article",
    updated: "Updated",
  },
  tr: {
    title: "Blog",
    description:
      "Dijital girişimcilik ve AI geliştirme üzerine rehberler, araç listeleri ve pratik kaynaklar.",
    lastPost: "Son yazı",
    open: "Yazıyı aç",
    updated: "Güncellendi",
  },
} as const

function getLatestPostDate(cards: BlogCard[]) {
  return cards.reduce(
    (latest, card) => (card.updatedAt > latest ? card.updatedAt : latest),
    ""
  )
}

function CardGrid({
  cards,
  openLabel,
  updatedLabel,
}: {
  cards: BlogCard[]
  openLabel: string
  updatedLabel: string
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Link
          key={card.slug}
          href={`/${card.slug}/`}
          className="group block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Card className="h-full transition-colors group-hover:bg-muted/50">
            <CardHeader>
              <CardTitle>
                <h2>{card.title}</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-typeset leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
            <CardFooter className="justify-between gap-3">
              <Badge variant="secondary">
                {updatedLabel} {card.updatedAt}
              </Badge>
              <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                {openLabel}
                <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
              </span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export function BlogContent({ trCards, enCards }: BlogContentProps) {
  const { lang, toggle } = useLanguageToggle()
  const copy = COPY[lang]
  const latestPostDate = getLatestPostDate(lang === "tr" ? trCards : enCards)

  return (
    <>
      <SiteHeader langToggle={{ mode: "toggle", lang, onToggle: toggle }} />
      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:py-8">
        <header className="flex flex-col gap-2">
          <h1 className="scroll-m-24 text-3xl leading-9 font-semibold tracking-[-0.025em] text-balance text-foreground">
            {copy.title}
          </h1>
          <p className="text-base leading-6 text-balance text-muted-foreground">
            {copy.description}
          </p>
          {latestPostDate ? (
            <div className="pt-1">
              <Badge variant="secondary">
                {copy.lastPost} {latestPostDate}
              </Badge>
            </div>
          ) : null}
        </header>

        <div className="mt-6" hidden={lang !== "tr"}>
          <CardGrid
            cards={trCards}
            openLabel={COPY.tr.open}
            updatedLabel={COPY.tr.updated}
          />
        </div>
        <div className="mt-6" hidden={lang !== "en"}>
          <CardGrid
            cards={enCards}
            openLabel={COPY.en.open}
            updatedLabel={COPY.en.updated}
          />
        </div>
      </main>
    </>
  )
}
