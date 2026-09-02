"use client"

import { useCallback, useState } from "react"

export type Lang = "en" | "tr"

export function useLanguageToggle(defaultLang: Lang = "en") {
  const [lang, setLang] = useState<Lang>(defaultLang)

  const toggle = useCallback(() => {
    setLang((current) => (current === "en" ? "tr" : "en"))
  }, [])

  return { lang, toggle }
}
