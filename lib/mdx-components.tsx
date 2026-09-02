import type { MDXComponents } from "mdx/types"
import type { ReactNode } from "react"

import { EducationEntry } from "@/components/mdx/education-entry"
import { ExperienceEntry } from "@/components/mdx/experience-entry"
import { ProjectEntry } from "@/components/mdx/project-entry"
import {
  PublicationEntry,
  PublicationList,
} from "@/components/mdx/publication-entry"
import { SkillsGroup } from "@/components/mdx/skills-group"
import { Separator } from "@/components/ui/separator"
import {
  CvHero,
  CvSection,
  OrganizationEntry,
} from "@/components/mdx/cv-layout"

function HeadingAnchor({ children, id }: { children: ReactNode; id?: string }) {
  if (!id) return children

  return (
    <a className="group no-underline" href={`#${id}`}>
      <span className="underline-offset-4 group-hover:underline">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="ml-2 text-muted-foreground opacity-0 group-hover:opacity-100"
      >
        #
      </span>
    </a>
  )
}

export const mdxComponents: MDXComponents = {
  CvHero,
  CvSection,
  EducationEntry,
  ExperienceEntry,
  OrganizationEntry,
  ProjectEntry,
  PublicationEntry,
  PublicationList,
  SkillsGroup,
  h1: (props) => (
    <h1
      className="scroll-m-24 text-3xl leading-9 font-semibold tracking-[-0.025em] text-balance text-foreground"
      {...props}
    />
  ),
  h2: ({ children, id, ...props }) => (
    <>
      <Separator className="mt-[3em] first:mt-0 lg:invisible lg:[[data-section-dividers=true]_&]:visible" />
      <h2
        id={id}
        className="mt-[1.25em] scroll-mt-20 text-[1.25em] leading-[1.4] font-semibold text-foreground"
        {...props}
      >
        <HeadingAnchor id={id}>{children}</HeadingAnchor>
      </h2>
    </>
  ),
  h3: ({ children, id, ...props }) => (
    <h3
      id={id}
      className="mt-[1.25em] scroll-mt-20 text-[1.125em] leading-[1.45] font-semibold text-foreground"
      {...props}
    >
      <HeadingAnchor id={id}>{children}</HeadingAnchor>
    </h3>
  ),
  p: (props) => (
    <p
      className="mt-[1em] leading-[var(--typeset-leading)] text-foreground first:mt-0"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-[1em] flex list-outside list-disc flex-col gap-1 pl-5 leading-[var(--typeset-leading)] text-foreground first:mt-0"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-[1em] flex list-outside list-decimal flex-col gap-1 pl-5 leading-[var(--typeset-leading)] text-foreground first:mt-0"
      {...props}
    />
  ),
  li: (props) => <li {...props} />,
  a: (props) => (
    <a
      className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- passthrough; alt is always supplied at each MDX call site
  img: (props) => <img className="mt-[1.25em] rounded-lg" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-[1.25em] border-l-2 pl-4 text-muted-foreground [&>p]:mt-0"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.85em] font-normal"
      {...props}
    />
  ),
  hr: (props) => <Separator className="my-[3em]" {...props} />,
  table: (props) => (
    <div className="mt-[1.25em] overflow-x-auto first:mt-0">
      <table className="w-full border-collapse leading-[1.5]" {...props} />
    </div>
  ),
  thead: (props) => <thead className="border-b text-left" {...props} />,
  th: (props) => (
    <th className="px-3 py-2 font-medium text-foreground" {...props} />
  ),
  td: (props) => (
    <td
      className="border-b px-3 py-2 align-top text-muted-foreground"
      {...props}
    />
  ),
}
