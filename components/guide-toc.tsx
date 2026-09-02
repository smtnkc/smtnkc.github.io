"use client"

import * as React from "react"

type GuideTocProps = {
  toc: { id: string; text: string }[]
  label: string
}

export function GuideToc({ toc, label }: GuideTocProps) {
  const [activeId, setActiveId] = React.useState(toc[0]?.id ?? "")

  React.useEffect(() => {
    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => Boolean(heading))

    if (headings.length === 0) return

    let frame = 0

    function updateActiveHeading() {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const readingLine = window.scrollY + 128
        let currentId = headings[0].id

        for (const heading of headings) {
          if (heading.offsetTop > readingLine) break
          currentId = heading.id
        }

        setActiveId(currentId)
      })
    }

    updateActiveHeading()
    window.addEventListener("scroll", updateActiveHeading, { passive: true })

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateActiveHeading)
    }
  }, [toc])

  return (
    <nav
      className="sticky top-24 flex max-h-[calc(100vh-7rem)] flex-col gap-2 overflow-y-auto p-4 pt-0 text-sm"
      aria-label={label}
    >
      <p className="h-6 bg-background text-xs font-medium text-muted-foreground">
        {label}
      </p>
      <ul className="flex flex-col gap-2">
        {toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-active={activeId === item.id}
              aria-current={activeId === item.id ? "location" : undefined}
              className="block text-[0.8rem] leading-[1.125rem] text-muted-foreground no-underline transition-colors hover:text-foreground data-[active=true]:font-medium data-[active=true]:text-foreground"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
