import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check } from 'lucide-react'
import { caseStudies } from '@/lib/content'

export function generateStaticParams() { return caseStudies.map((study) => ({ slug: study.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((item) => item.slug === slug)
  return { title: study ? `${study.title} Case Study | Aronia Dynamics` : 'Case Study | Aronia Dynamics', description: study?.outcome }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies.find((item) => item.slug === slug)
  if (!study) notFound()
  return <main className="min-h-screen bg-background px-6 py-16 text-foreground sm:py-24"><div className="mx-auto max-w-4xl"><Link href="/portfolio" className="font-mono text-sm tracking-[.18em] text-primary">ARONIA / PORTFOLIO</Link><p className="eyebrow mt-20">{study.type}</p><h1 className="mt-5 text-5xl font-bold tracking-[-.05em] sm:text-7xl">{study.title}<span className="text-primary">.</span></h1><div className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary"><Check size={15} /> {study.result}</div><div className="mt-16 grid gap-10 sm:grid-cols-3"><section><p className="footer-label">The challenge</p><p className="mt-4 text-sm leading-7 text-muted-foreground">{study.challenge}</p></section><section><p className="footer-label">Our approach</p><p className="mt-4 text-sm leading-7 text-muted-foreground">{study.approach}</p></section><section><p className="footer-label">The outcome</p><p className="mt-4 text-sm leading-7 text-muted-foreground">{study.outcome}</p></section></div><div className="mt-16 rounded-3xl border border-primary/30 bg-card p-8 text-center sm:p-12"><h2 className="text-3xl font-bold">Make your next project the case study.</h2><Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Start a project <ArrowUpRight size={16} /></Link></div></div></main>
}
