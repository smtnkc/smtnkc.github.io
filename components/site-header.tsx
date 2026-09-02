import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import {
  LanguageToggle,
  type LangToggleProps,
} from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"

type SiteHeaderProps = {
  langToggle?: LangToggleProps
}

export function SiteHeader({ langToggle }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-background">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <nav className="flex items-center" aria-label="Primary">
          <Link
            href="/"
            aria-label="Home"
            className={buttonVariants({ variant: "ghost" })}
          >
            Home
          </Link>
          <Link href="/blog" className={buttonVariants({ variant: "ghost" })}>
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-1.5">
          {langToggle ? <LanguageToggle {...langToggle} /> : null}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
