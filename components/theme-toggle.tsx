"use client"

import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

let hasMountedThemeToggle = false

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(hasMountedThemeToggle)

  useEffect(() => {
    // resolvedTheme is browser-only; wait until hydration before selecting a segment.
    hasMountedThemeToggle = true
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const value =
    mounted && (resolvedTheme === "dark" || resolvedTheme === "light")
      ? [resolvedTheme]
      : []

  return (
    <ToggleGroup
      aria-label="Color theme"
      variant="outline"
      size="sm"
      spacing={0}
      value={value}
      onValueChange={(nextValue) => {
        const nextTheme = nextValue[0]
        if (nextTheme) setTheme(nextTheme)
      }}
    >
      <ToggleGroupItem
        value="light"
        aria-label="Use light theme"
        title="Light theme"
      >
        <SunIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Use dark theme"
        title="Dark theme"
      >
        <MoonIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
