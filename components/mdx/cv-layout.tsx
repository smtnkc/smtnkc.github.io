import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon, BookOpenTextIcon } from "lucide-react"

import { ContactButtonGroup } from "@/components/contact-button-group"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type CvSectionProps = {
  id: string
  title: string
  children: ReactNode
  layout?: "stack" | "compact" | "grid" | "organizations"
}

export function CvSection({
  id,
  title,
  children,
  layout = "stack",
}: CvSectionProps) {
  return (
    <Card id={id} className="scroll-mt-32">
      <CardHeader>
        <CardTitle>
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent
        className={cn(
          layout === "stack" && "flex flex-col gap-4",
          layout === "compact" && "flex flex-col gap-4",
          (layout === "grid" || layout === "organizations") &&
          "grid gap-4 sm:grid-cols-2"
        )}
      >
        {children}
      </CardContent>
    </Card>
  )
}

type CvHeroProps = {
  bio?: string
}

export const CV_HERO_BIO =
  "Applied AI researcher and engineer with experience developing NLP and machine learning systems for healthcare, biomedical informatics, and software analytics. Delivered multiple AI-driven tools from research to usable software products, including biomedical prediction systems, domain-adapted language models, and data-driven decision support applications. Experienced in leading interdisciplinary teams, managing AI projects, and working with complex real-world datasets in clinical and research environments."

export function CvHero({ bio = CV_HERO_BIO }: CvHeroProps) {
  return (
    <Card
      id="about"
      className="scroll-mt-32 gap-6 py-8 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-0 sm:py-8"
    >
      <CardContent className="order-1 flex justify-center px-6 sm:order-2 sm:pr-8 sm:pl-6 md:pr-10 lg:pr-12">
        <div className="relative isolate before:absolute before:inset-3 before:-z-10 before:rounded-full before:bg-foreground/20 before:blur-2xl">
          <Image
            src="/samet_profile_pic.jpg"
            alt="Samet Tenekeci"
            width={176}
            height={176}
            priority
            className="size-32 rounded-full object-cover shadow-2xl ring-4 ring-background transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none sm:size-44"
          />
        </div>
      </CardContent>
      <CardHeader className="order-2 gap-3 px-6 text-center sm:order-1 sm:pr-4 sm:pl-8 sm:text-left">
        <CardTitle>
          <h1 className="leading-tighter text-3xl font-semibold tracking-tight text-balance text-primary sm:text-5xl sm:leading-[1.1] sm:tracking-tighter">
            Samet Tenekeci
          </h1>
        </CardTitle>
        <p className="text-base leading-7 text-balance text-foreground sm:text-lg">
          Applied AI Scientist · Machine Learning · Computational Biology
        </p>
        <p className="max-w-2xl text-typeset leading-relaxed text-muted-foreground">
          {bio}
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-2 sm:justify-start">
          <Link
            href="/blog"
            className={buttonVariants({ variant: "secondary" })}
          >
            <BookOpenTextIcon data-icon="inline-start" />
            Blog
          </Link>
          <ContactButtonGroup variant="secondary" />
        </div>
      </CardHeader>
    </Card>
  )
}

type OrganizationEntryProps = {
  name: string
  url: string
  bullets: string[]
}

export function OrganizationEntry({
  name,
  url,
  bullets,
}: OrganizationEntryProps) {
  return (
    <Card size="sm">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-base">
          {name}
        </CardTitle>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={`Open ${name}`}
          nativeButton={false}
          render={<a href={url} target="_blank" rel="noopener noreferrer" />}
        >
          <ArrowUpRightIcon />
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="flex list-outside list-disc flex-col pl-4 text-typeset text-muted-foreground">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
