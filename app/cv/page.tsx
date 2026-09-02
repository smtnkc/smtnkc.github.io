import type { Metadata } from "next"

import { CvPageContent } from "@/components/cv-page-content"

export const metadata: Metadata = {
  title: "CV | Samet Tenekeci",
  description: "Academic CV and portfolio of Samet Tenekeci.",
  alternates: { canonical: "https://smtnkc.github.io/" },
}

export default function CvPage() {
  return <CvPageContent />
}
