import type { Metadata } from "next"

import { getAllGuidesMeta } from "@/lib/guides"
import { BlogContent, type BlogCard } from "@/components/blog-content"

export const metadata: Metadata = {
  title: "Blog | Samet Tenekeci",
  description:
    "Guides, tool directories, and practical resources for digital entrepreneurship and AI development.",
  alternates: { canonical: "https://smtnkc.github.io/blog/" },
}

function toCard(guide: ReturnType<typeof getAllGuidesMeta>[number]): BlogCard {
  return {
    slug: guide.slug,
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    updatedAt: guide.frontmatter.updatedAt,
  }
}

export default function BlogPage() {
  const guides = getAllGuidesMeta()
  const trCards = guides.filter((g) => g.frontmatter.lang === "tr").map(toCard)
  const enCards = guides.filter((g) => g.frontmatter.lang === "en").map(toCard)

  return <BlogContent trCards={trCards} enCards={enCards} />
}
