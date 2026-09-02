"use client"

import { useRouter } from "next/navigation"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export type LangToggleProps =
  | { mode: "link"; currentLang: "en" | "tr"; alternateHref: string }
  | { mode: "toggle"; lang: "en" | "tr"; onToggle: () => void }

export function LanguageToggle(props: LangToggleProps) {
  const router = useRouter()
  const lang = props.mode === "link" ? props.currentLang : props.lang

  return (
    <ToggleGroup
      aria-label="Language"
      variant="outline"
      size="sm"
      spacing={0}
      value={[lang]}
      onValueChange={(nextValue) => {
        const nextLang = nextValue[0]
        if (!nextLang || nextLang === lang) return

        if (props.mode === "link") {
          router.push(props.alternateHref)
        } else {
          props.onToggle()
        }
      }}
    >
      <ToggleGroupItem value="tr" aria-label="Türkçe" title="Türkçe">
        TR
      </ToggleGroupItem>
      <ToggleGroupItem value="en" aria-label="English" title="English">
        EN
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
