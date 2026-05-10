"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/site-nav"

/**
 * Opens the user's mail client with a prefilled message.
 * Replace with a server action, form provider, or CRM webhook when ready.
 */
export function ContactMessageForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    if (!name || !email || !message) return

    const subject = encodeURIComponent(`[${siteConfig.name}] Message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `${siteConfig.emailMailto}?subject=${subject}&body=${body}`
    setStatus("sent")
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required placeholder="Alex Rivera" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your store, platform, timeline, and what success looks like."
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Send message
      </Button>
      {status === "sent" ? (
        <p className="text-muted-foreground text-sm">
          If your mail app did not open, email us directly at{" "}
          <a className="font-medium text-signal underline-offset-4 hover:underline" href={siteConfig.emailMailto}>
            {siteConfig.email}
          </a>
          .
        </p>
      ) : (
        <p className="text-muted-foreground text-sm">
          Submitting opens your email client with this message prefilled—swap in a server
          endpoint whenever you are ready.
        </p>
      )}
    </form>
  )
}
