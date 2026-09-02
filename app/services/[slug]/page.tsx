import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/content'

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  return { title: service ? `${service.title} | Aronia Dynamics` : 'Service | Aronia Dynamics', description: service?.text }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()
  return <main className="min-h-screen bg-background px-6 py-16 text-foreground sm:py-24"><div className="mx-auto max-w-4xl"><Link href="/services" className="font-mono text-sm tracking-[.18em] text-primary">ARONIA / SERVICES</Link><p className="eyebrow mt-20">Service detail</p><h1 className="mt-5 text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-7xl">{service.title}<span className="text-primary">.</span></h1><p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">{service.text}</p><div className="mt-16 rounded-3xl border border-primary/30 bg-primary/10 p-8 sm:p-12"><p className="text-2xl font-semibold leading-tight sm:text-4xl">{service.detail}</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Discuss this service <ArrowUpRight size={16} /></Link></div></div></main>
}
