import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insights | Aronia Dynamics',
  description: 'Practical perspectives on software, AI, data, and digital transformation.',
}

const articles = [
  { category: 'Digital strategy', title: 'A clearer way to start your next digital product', text: 'The questions that turn an exciting idea into a focused, buildable first release.' },
  { category: 'AI systems', title: 'Where AI creates value inside real businesses', text: 'A practical framework for finding useful automation beyond the hype cycle.' },
  { category: 'Engineering', title: 'Designing systems that can grow with you', text: 'Why good architecture is less about predicting the future and more about creating options.' },
]

export default function InsightsPage() {
  return <main className="min-h-screen bg-background text-foreground"><div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"><Link href="/" className="font-mono text-sm tracking-[.18em] text-primary">ARONIA.</Link><div className="mt-20 max-w-3xl"><p className="eyebrow">Insights / 09</p><h1 className="mt-5 text-5xl font-bold tracking-[-.05em] sm:text-7xl">Ideas for what&apos;s <span className="gradient-text">next.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Practical perspectives from the work we do with ambitious teams and evolving technology.</p></div><div className="mt-16 grid gap-4 md:grid-cols-3">{articles.map((article) => <article key={article.title} className="group flex min-h-80 flex-col rounded-3xl border border-border/70 bg-card/60 p-7 transition-colors hover:border-primary/60"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-primary">{article.category}</p><h2 className="mt-8 text-2xl font-semibold leading-tight">{article.title}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">{article.text}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-primary">Read article <ArrowUpRight size={16} /></span></article>)}</div><div className="mt-16 rounded-3xl border border-primary/30 bg-primary/10 p-8 text-center"><h2 className="text-2xl font-semibold">Want to talk through an idea?</h2><Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Start a conversation <ArrowUpRight size={16} /></Link></div></div></main>
}
