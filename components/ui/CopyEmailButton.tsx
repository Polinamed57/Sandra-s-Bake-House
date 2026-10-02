'use client'

import { useState } from 'react'

type Props = {
  email: string
}

export default function CopyEmailButton({ email }: Props) {
  const [copied, setCopied] = useState<boolean>(false)

  async function handleCopy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the address stays visible to copy by hand
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-cocoa/30 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-cocoa hover:text-cream"
    >
      <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
    </button>
  )
}
