import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import GithubSlugger from "github-slugger"

const GUIDES_DIR = path.join(process.cwd(), "content/guides")

export type GuideFrontmatter = {
  title: string
  seo_title: string
  description: string
  lang: "en" | "tr"
  permalink: string
  canonical_url: string
  og_locale: string
  alternate_en?: string
  alternate_tr?: string
  og_image?: string
  blog_featured: boolean
  blog_order: number
  table_mode?: "catalog"
  updatedAt: string
}

export type Guide = {
  slug: string
  frontmatter: GuideFrontmatter
  content: string
  toc: { id: string; text: string }[]
  catalog?: CatalogData
}

export type CatalogData = {
  headers: string[]
  rows: string[][]
}

// Two guides predate the alternate_en/alternate_tr fields; the old Jekyll
// layout defaulted them via Liquid, so we do the same here.
const DEFAULT_ALTERNATE_EN = "/digital-entrepreneurship-guide/"
const DEFAULT_ALTERNATE_TR = "/dijital-girisimcilik-rehberi/"

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim())
}

function getCatalogData(content: string): CatalogData | undefined {
  const lines = content.split(/\r?\n/)
  const start = lines.findIndex((line) => line.trimStart().startsWith("|"))
  if (start < 0 || !lines[start + 1]) return undefined

  const remainingLines = lines.slice(start)
  const end = remainingLines.findIndex(
    (line) => !line.trimStart().startsWith("|")
  )
  const tableLines = end < 0 ? remainingLines : remainingLines.slice(0, end)

  return {
    headers: parseTableRow(tableLines[0]),
    rows: tableLines.slice(2).map(parseTableRow),
  }
}

export function getAllGuideSlugs(): string[] {
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

export function getGuide(slug: string): Guide {
  const raw = fs.readFileSync(path.join(GUIDES_DIR, `${slug}.md`), "utf8")
  const { data, content } = matter(raw)
  const frontmatter = data as GuideFrontmatter

  const slugger = new GithubSlugger()
  const toc = [...content.matchAll(/^##\s+(.+)$/gm)].map((m) => {
    const text = m[1].trim()
    return { text, id: slugger.slug(text) }
  })

  const catalog =
    frontmatter.table_mode === "catalog" ? getCatalogData(content) : undefined

  return { slug, frontmatter, content, toc, catalog }
}

export function getAlternateHref(frontmatter: GuideFrontmatter): string {
  return frontmatter.lang === "en"
    ? (frontmatter.alternate_tr ?? DEFAULT_ALTERNATE_TR)
    : (frontmatter.alternate_en ?? DEFAULT_ALTERNATE_EN)
}

export function getAllGuidesMeta(): Guide[] {
  return getAllGuideSlugs()
    .map((slug) => getGuide(slug))
    .filter((g) => g.frontmatter.blog_featured)
    .sort((a, b) => a.frontmatter.blog_order - b.frontmatter.blog_order)
}
