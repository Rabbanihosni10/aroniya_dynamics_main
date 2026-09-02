'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Network,
  Search,
  Smartphone,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { NewsletterSignup } from './SiteEnhancements'

const services = [
  { icon: Workflow, title: 'Digital System Consultancy', text: 'Turn complex operations into clear, scalable digital systems.' },
  { icon: Smartphone, title: 'App Development', text: 'High-performance mobile experiences built for how people live.' },
  { icon: Globe2, title: 'Web Development', text: 'Fast, purposeful websites that make your next chapter visible.' },
  { icon: Code2, title: 'Software Development', text: 'Reliable custom software that compounds your competitive edge.' },
  { icon: Layers3, title: 'System Development & Design', text: 'Thoughtful architecture and interfaces built to evolve.' },
  { icon: Bot, title: 'AI Systems', text: 'Personalized and office-based AI that works alongside your team.' },
  { icon: Database, title: 'AI Data Analytics', text: 'Find the signal in your data and make decisions with confidence.' },
  { icon: Network, title: 'Networking Design & Development', text: 'Secure, resilient infrastructure for a connected business.' },
  { icon: Search, title: 'SEO Services', text: 'Build discoverability that turns attention into momentum.' },
]

const tech = ['React', 'Node.js', 'MongoDB', 'Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes']
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative flex min-h-screen flex-col">
        <div className="hero-mesh absolute inset-0" />
        <div className="grid-lines absolute inset-0 opacity-40" />
        <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Aronia Dynamics home">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sparkles size={18} /></span>
            <span className="font-mono text-sm font-semibold tracking-[0.18em]">ARONIA<span className="text-primary">.</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"><a href="#services" className="transition-colors hover:text-foreground">Services</a><a href="#approach" className="transition-colors hover:text-foreground">Approach</a><a href="/contact" className="transition-colors hover:text-foreground">Contact</a></div>
          <a href="/contact" className="hidden items-center gap-2 rounded-full border border-border/80 px-4 py-2 text-sm transition-all hover:border-primary/70 hover:text-primary md:flex">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="relative z-20 mx-6 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 text-sm md:hidden"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></div>}
        <div id="top" className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-20 pt-14 lg:px-10 lg:pt-4">
          <div className="max-w-4xl">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeUp} className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary"><span className="size-2 rounded-full bg-primary shadow-[0_0_15px_var(--primary)]" /> Software consultancy / 01</motion.p>
              <motion.h1 variants={fadeUp} className="max-w-4xl text-balance text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-[7.8rem]">Transforming <span className="gradient-text">ideas</span><br /> into digital reality<span className="text-primary">.</span></motion.h1>
              <motion.p variants={fadeUp} className="mt-8 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">Premium software consultancy for ambitious teams building what&apos;s next. From Bangladesh to the USA, we make complexity feel simple.</motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="/contact" className="glow-button inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground">Get a free consultation <ArrowUpRight size={17} /></a><a href="#services" className="inline-flex items-center justify-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/70 hover:text-primary">View our work <span className="text-muted-foreground">↘</span></a></motion.div>
            </motion.div>
          </div>
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:px-10"><span>Dhaka / New York</span><span className="hidden sm:block">Scroll to explore <span className="ml-3 text-primary">↓</span></span><span>Est. 2021</span></div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">What we do</p><h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">Built for the <span className="gradient-text">breakthrough.</span></h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">We pair deep technical craft with a sharp understanding of where your business is going.</p></motion.div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => { const Icon = service.icon; return <motion.article key={service.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.04, duration: 0.5 } } }} whileHover={{ y: -5 }} className="service-card group rounded-2xl border border-border/70 bg-card/60 p-6 transition-colors hover:border-primary/60"><span className="mb-12 flex size-10 items-center justify-center rounded-xl border border-border bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon size={19} /></span><h3 className="text-lg font-semibold tracking-tight">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p></motion.article> })}</div></section>

      <section className="border-y border-border/70 bg-card/40"><div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-16 lg:grid-cols-4 lg:px-10">{[['50+', 'Projects shipped'], ['30+', 'Clients partnered'], ['02', 'Countries connected'], ['05+', 'Years experience']].map(([number, label]) => <motion.div key={label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border-l border-border px-5 py-3 first:border-l-0 lg:px-8"><p className="text-4xl font-bold tracking-[-0.04em] text-primary sm:text-5xl">{number}</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p></motion.div>)}</div></section>

      <section id="approach" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}><p className="eyebrow">The Aronia difference</p><h2 className="mt-5 max-w-lg text-4xl font-bold tracking-tight sm:text-6xl">Your vision deserves <span className="gradient-text">more.</span></h2><p className="mt-7 max-w-md leading-7 text-muted-foreground">We don&apos;t just deliver software. We become the technical partner that helps you see further, move faster, and build with confidence.</p><a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">Discover our approach <ArrowUpRight size={16} /></a></motion.div><motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative min-h-[420px] overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 shadow-[0_0_80px_-25px_var(--primary)] sm:p-12"><div className="absolute inset-0 approach-grid opacity-50" /><div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between"><span className="font-mono text-xs tracking-[0.2em] text-primary">ARONIA / 2026</span><BrainCircuit className="text-primary" size={26} /></div><div><p className="max-w-md text-3xl font-semibold leading-tight sm:text-4xl">We make the hard parts feel <span className="gradient-text">possible.</span></p><div className="mt-10 grid gap-4 sm:grid-cols-2">{['Dual HQ (BD & USA)', 'End-to-end solutions', 'AI-first approach', '24/7 support'].map(point => <div key={point} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary"><Check size={12} /></span>{point}</div>)}</div></div></div></motion.div></div></section>

      <section className="overflow-hidden border-y border-border/70 py-8"><div className="flex w-max animate-marquee gap-12 whitespace-nowrap">{[...tech, ...tech].map((item, i) => <span key={`${item}-${i}`} className="flex items-center gap-12 font-mono text-sm text-muted-foreground"><span className="text-primary">✦</span>{item}</span>)}</div></section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 sm:p-16"><div className="absolute right-[-10%] top-[-45%] size-96 rounded-full bg-primary/15 blur-3xl" /><div className="relative max-w-2xl"><p className="eyebrow">Start a conversation</p><h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">Ready to build your <span className="gradient-text">digital future?</span></h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Tell us what you&apos;re imagining. We&apos;ll bring the right people, questions, and perspective to the table.</p><a href="mailto:hello@aroniadynamics.com" className="glow-button mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground">Get in touch <Mail size={16} /></a></div></div></section>

      <footer className="border-t border-border/70"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10"><div><a href="#top" className="flex items-center gap-3"><span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Sparkles size={15} /></span><span className="font-mono text-xs font-semibold tracking-[0.16em]">ARONIA<span className="text-primary">.</span></span></a><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">A premium software consultancy for the bold and curious.</p></div><div><p className="footer-label">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground"><a href="#services" className="hover:text-foreground">Services</a><a href="#approach" className="hover:text-foreground">Our approach</a><a href="/team" className="hover:text-foreground">Team</a><a href="/faq" className="hover:text-foreground">FAQ</a><a href="/insights" className="hover:text-foreground">Insights</a><a href="/contact" className="hover:text-foreground">Contact</a></div></div><div><p className="footer-label">Connect</p><div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground"><span>Dhaka, Bangladesh</span><span>New York, USA</span><a href="mailto:hello@aroniadynamics.com" className="hover:text-primary">hello@aroniadynamics.com</a><p className="footer-label mt-6">Newsletter</p><NewsletterSignup /></div></div><div><p className="footer-label">Social</p><div className="mt-5 flex gap-3"><a aria-label="Instagram" href="https://instagram.com" className="social-link"><Globe2 size={16} /></a><a aria-label="LinkedIn" href="https://linkedin.com" className="social-link"><ArrowUpRight size={16} /></a><a aria-label="Facebook" href="https://facebook.com" className="social-link"><Globe2 size={16} /></a><div className="mt-3 flex gap-3 text-xs"><a href="/privacy" className="hover:text-primary">Privacy</a><a href="/terms" className="hover:text-primary">Terms</a></div></div></div></div><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-border/70 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row lg:px-10"><span>© 2026 Aronia Dynamics. All rights reserved.</span><span>Built for what&apos;s next.</span></div></footer>
    </main>
  )
}
