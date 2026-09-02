"use client"

import * as React from "react"
import { ChevronDownIcon, Share2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ShareMenuProps = {
  description: string
  lang: "en" | "tr"
  title: string
  url: string
}

const COPY = {
  en: {
    copied: "Copied",
    copyLink: "Copy link",
    email: "Send by email",
    facebook: "Share on Facebook",
    label: "Share this article",
    linkedin: "Share on LinkedIn",
    share: "Share",
    x: "Share on X",
  },
  tr: {
    copied: "Kopyalandı",
    copyLink: "Bağlantıyı kopyala",
    email: "E-posta ile gönder",
    facebook: "Facebook'ta paylaş",
    label: "Bu yazıyı paylaş",
    linkedin: "LinkedIn'de paylaş",
    share: "Paylaş",
    x: "X'te paylaş",
  },
} as const

export function ShareMenu({ description, lang, title, url }: ShareMenuProps) {
  const [copied, setCopied] = React.useState(false)
  const copy = COPY[lang]

  function openShareUrl(shareUrl: string) {
    window.open(shareUrl, "_blank", "noopener,noreferrer")
  }

  async function copyLink() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)
  const encodedEmailBody = encodeURIComponent(`${description}\n\n${url}`)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="secondary" size="sm" />}>
          <Share2Icon data-icon="inline-start" />
          {copied ? copy.copied : copy.share}
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-52">
          <DropdownMenuGroup>
            <DropdownMenuLabel>{copy.label}</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                openShareUrl(
                  `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
                )
              }
            >
              {copy.x}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                openShareUrl(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
                )
              }
            >
              {copy.linkedin}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                openShareUrl(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
                )
              }
            >
              {copy.facebook}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() =>
                window.location.assign(
                  `mailto:?subject=${encodedTitle}&body=${encodedEmailBody}`
                )
              }
            >
              {copy.email}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => void copyLink()}>
              {copy.copyLink}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <span className="sr-only" aria-live="polite">
        {copied ? copy.copied : ""}
      </span>
    </>
  )
}
