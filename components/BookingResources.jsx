'use client'

import { ArrowDownToLine, ArrowUpRight, CalendarDays } from 'lucide-react'

export function BookingResources() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

  return (
    <div className="mt-16 grid gap-5 lg:grid-cols-2">
      <div className="rounded-3xl border border-primary/30 bg-primary/10 p-7 sm:p-9">
        <CalendarDays className="text-primary" size={24} />
        <h2 className="mt-6 text-2xl font-semibold">Book a free call</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Prefer to choose a time directly? Pick a slot that works for you.</p>
        {calendlyUrl ? (
          <a href={calendlyUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Open calendar <ArrowUpRight size={16} /></a>
        ) : (
          <a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Request a call <ArrowUpRight size={16} /></a>
        )}
      </div>
      <div className="rounded-3xl border border-border/70 bg-card/60 p-7 sm:p-9">
        <ArrowDownToLine className="text-primary" size={24} />
        <h2 className="mt-6 text-2xl font-semibold">Free digital audit</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Use our quick checklist to spot opportunities across your website, systems, and customer journey.</p>
        <a href="/api/digital-audit" download className="mt-7 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:border-primary hover:text-primary">Download the PDF <ArrowDownToLine size={16} /></a>
      </div>
    </div>
  )
}
