import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"

import { getAllGuideSlugs, getAlternateHref, getGuide } from "@/lib/guides"
import { mdxComponents } from "@/lib/mdx-components"
import { SiteHeader } from "@/components/site-header"
import { GuideToc } from "@/components/guide-toc"
import { ShareMenu } from "@/components/share-menu"
import { CatalogCards } from "@/components/mdx/catalog-cards"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const SECTION_DIVIDER_GUIDES = new Set([
  "digital-entrepreneurship-guide",
  "dijital-girisimcilik-rehberi",
])

function splitGuideContent(source: string) {
  const withoutTitle = source
    .trimStart()
    .replace(/^#\s+.*\r?\n+/, "")
    .trimStart()
  const [intro = "", ...bodyParts] = withoutTitle.split(/\r?\n\s*\r?\n/)

  return {
    intro,
    body: bodyParts.join("\n\n"),
  }
}

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guides = getAllGuideSlugs()
  if (!guides.includes(slug)) return {}

  const { frontmatter } = getGuide(slug)
  const alternateHref = getAlternateHref(frontmatter)
  const enHref =
    frontmatter.lang === "en" ? frontmatter.permalink : alternateHref
  const trHref =
    frontmatter.lang === "tr" ? frontmatter.permalink : alternateHref

  return {
    title: frontmatter.seo_title,
    description: frontmatter.description,
    alternates: {
      canonical: frontmatter.canonical_url,
      languages: {
        en: enHref,
        tr: trHref,
        "x-default": enHref,
      },
    },
    openGraph: {
      type: "article",
      locale: frontmatter.og_locale,
      url: frontmatter.canonical_url,
      title: frontmatter.seo_title,
      description: frontmatter.description,
      ...(frontmatter.og_image && { images: [frontmatter.og_image] }),
    },
    ...(frontmatter.og_image && {
      twitter: {
        card: "summary_large_image",
        images: [frontmatter.og_image],
      },
    }),
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!getAllGuideSlugs().includes(slug)) notFound()

  const { frontmatter, content, toc, catalog } = getGuide(slug)
  const isCatalog = frontmatter.table_mode === "catalog"
  const alternateHref = getAlternateHref(frontmatter)
  const tocLabel = frontmatter.lang === "tr" ? "Bu Sayfada" : "On This Page"
  const { intro, body } = splitGuideContent(content)

  return (
    <>
      <SiteHeader
        langToggle={{
          mode: "link",
          currentLang: frontmatter.lang,
          alternateHref,
        }}
      />
      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:py-8">
        <div
          className={cn(
            "grid grid-cols-1",
            !isCatalog && "lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-8"
          )}
        >
          <article
            data-section-dividers={
              SECTION_DIVIDER_GUIDES.has(slug) ? "true" : undefined
            }
            className={cn(
              "w-full min-w-0",
              isCatalog ? "mx-auto max-w-5xl" : "max-w-160"
            )}
          >
            <header className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <h1 className="scroll-m-24 text-3xl leading-9 font-semibold tracking-[-0.025em] text-balance text-foreground">
                  {frontmatter.title}
                </h1>
                <div className="shrink-0">
                  <ShareMenu
                    description={frontmatter.description}
                    lang={frontmatter.lang}
                    title={frontmatter.title}
                    url={frontmatter.canonical_url}
                  />
                </div>
              </div>
              <p className="text-base leading-6 text-balance text-muted-foreground md:max-w-[80%]">
                {intro}
              </p>
              <div className="pt-1">
                <Badge variant="secondary">
                  {frontmatter.lang === "tr" ? "Güncellendi" : "Updated"}{" "}
                  {frontmatter.updatedAt}
                </Badge>
              </div>
            </header>
            <div className="mt-6 text-typeset">
              {isCatalog && catalog ? (
                <>
                  <div className="hidden md:block">
                    <MDXRemote
                      source={body}
                      components={mdxComponents}
                      options={{
                        mdxOptions: {
                          remarkPlugins: [remarkGfm],
                          rehypePlugins: [rehypeSlug],
                        },
                      }}
                    />
                  </div>
                  <CatalogCards catalog={catalog} />
                </>
              ) : (
                <MDXRemote
                  source={body}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeSlug],
                    },
                  }}
                />
              )}
            </div>
          </article>
          {!isCatalog && toc.length > 0 ? (
            <aside className="hidden lg:block">
              <GuideToc toc={toc} label={tocLabel} />
            </aside>
          ) : null}
        </div>
      </main>
    </>
  )
}
