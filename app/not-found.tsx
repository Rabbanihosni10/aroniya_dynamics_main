import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="hero-mesh flex min-h-screen flex-col items-center justify-center px-6 text-center text-foreground">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Sparkles size={22} /></span>
      <p className="eyebrow mt-8">Error / 404</p>
      <h1 className="mt-4 text-6xl font-bold tracking-[-0.06em] sm:text-8xl">Page not found<span className="text-primary">.</span></h1>
      <p className="mt-6 max-w-md text-muted-foreground">This page took a wrong turn. Let&apos;s get you back to something useful.</p>
      <Link href="/" className="glow-button mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Back home <ArrowUpRight size={16} /></Link>
    </main>
  )
}
