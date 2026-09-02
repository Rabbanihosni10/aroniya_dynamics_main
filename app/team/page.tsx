import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Team | Aronia Dynamics',
  description: 'Meet the strategists, designers, and engineers behind Aronia Dynamics.',
}

const team = [
  { name: 'Farhan Rahman', role: 'Founder & Technology Lead', bio: 'Guides product strategy and turns complex technical challenges into clear, durable systems.' },
  { name: 'Nadia Karim', role: 'Product & UX Director', bio: 'Connects user needs, business goals, and thoughtful interfaces from first workshop to launch.' },
  { name: 'Ari Hasan', role: 'Engineering Lead', bio: 'Builds reliable full-stack platforms with a focus on performance, security, and maintainability.' },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link href="/" className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sparkles size={18} /></span><span className="font-mono text-sm font-semibold tracking-[.18em]">ARONIA<span className="text-primary">.</span></span></Link>
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary/70 hover:text-primary">Let&apos;s talk <ArrowUpRight size={15} /></Link>
      </nav>
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-16 lg:px-10 lg:pt-24">
        <p className="eyebrow">People / 07</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-7xl">Small team.<br /><span className="gradient-text">Big perspective.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">We bring strategy, design, and engineering together so every decision moves the work forward.</p>
        <div className="mt-16 grid gap-4 md:grid-cols-3">{team.map((person) => <article key={person.name} className="rounded-3xl border border-border/70 bg-card/60 p-7"><div className="flex size-16 items-center justify-center rounded-2xl bg-primary/15 text-2xl font-bold text-primary">{person.name.split(' ').map((part) => part[0]).join('')}</div><h2 className="mt-8 text-xl font-semibold">{person.name}</h2><p className="mt-2 font-mono text-[10px] uppercase tracking-[.16em] text-primary">{person.role}</p><p className="mt-5 text-sm leading-6 text-muted-foreground">{person.bio}</p></article>)}</div>
      </section>
    </main>
  )
}
