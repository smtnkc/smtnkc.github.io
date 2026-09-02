import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import { CvSubHeader } from "@/components/cv-sub-header"
import { SiteHeader } from "@/components/site-header"
import { getCv } from "@/lib/cv"
import { mdxComponents } from "@/lib/mdx-components"

export function CvPageContent() {
  const { content } = getCv()

  return (
    <>
      <SiteHeader />
      <CvSubHeader />
      <main className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-8 sm:px-6 sm:py-10">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            // Our own trusted content/cv.md uses JS-expression props (e.g. bullets={[...]});
            // next-mdx-remote blocks those by default as an anti-injection guard for untrusted MDX.
            blockJS: false,
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug],
            },
          }}
        />
      </main>
    </>
  )
}
