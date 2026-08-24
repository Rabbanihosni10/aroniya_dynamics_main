'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  X,
} from 'lucide-react'
import { useState } from 'react'

const services = ['App Development', 'Web Development', 'AI Systems', 'Data Analytics', 'SEO', 'Networking', 'System Design', 'Consultancy']
const callbackTimes = ['Morning', 'Afternoon', 'Evening']

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  callbackTime: '',
  message: '',
}

function Field({ label, name, value, onChange, type = 'text', placeholder, required = false }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-foreground">{label}{required && <span className="text-primary"> *</span>}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-12 rounded-xl border border-border/80 bg-background/60 px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </label>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setSubmitted(false)
    setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Unable to send your request.')
      setSubmitted(true)
      setForm(initialForm)
    } catch (submitError) {
      setError(submitError.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="hero-mesh pointer-events-none fixed inset-0 opacity-50" />
      <div className="grid-lines pointer-events-none fixed inset-0 opacity-30" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <a href="/" className="flex items-center gap-3" aria-label="Aronia Dynamics home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sparkles size={18} /></span>
          <span className="font-mono text-sm font-semibold tracking-[0.18em]">ARONIA<span className="text-primary">.</span></span>
        </a>
        <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><X size={16} /> Back home</a>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-32 lg:pt-20">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Start a conversation / 02</p>
          <h1 className="mt-5 text-balance text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-7xl">Let&apos;s build <span className="gradient-text">together.</span></h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">Have a bold idea, a complex challenge, or simply a better way in mind? Tell us where you want to go.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-between gap-12 py-2">
            <div className="space-y-8">
              <div className="flex gap-4"><span className="contact-icon"><Mail size={18} /></span><div><p className="footer-label">Email</p><a href="mailto:hello@aroniadynamics.com" className="mt-2 block text-sm transition-colors hover:text-primary">hello@aroniadynamics.com</a></div></div>
              <div className="flex gap-4"><span className="contact-icon"><Phone size={18} /></span><div><p className="footer-label">Phone</p><p className="mt-2 text-sm leading-6 text-muted-foreground">+880 1712 445566 (BD)<br />+1 (415) 260-9241 (USA)</p></div></div>
              <div className="flex gap-4"><span className="contact-icon"><MapPin size={18} /></span><div><p className="footer-label">Studios</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Dhaka, Bangladesh<br />Brooklyn, New York, USA</p></div></div>
            </div>
            <div><p className="footer-label">Follow along</p><div className="mt-4 flex gap-3"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link"><BriefcaseBusiness size={16} /></a><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link"><Send size={16} /></a><a href="https://www.behance.net" target="_blank" rel="noreferrer" aria-label="Behance" className="social-link"><Globe2 size={17} /></a></div></div>
          </motion.aside>

          <motion.form initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} onSubmit={handleSubmit} className="glass-panel rounded-3xl p-6 sm:p-10">
            <div className="mb-8 flex items-start justify-between gap-6"><div><p className="eyebrow">No pressure, just possibilities</p><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Request a free consultation call</h2></div><Clock3 className="mt-1 shrink-0 text-primary" size={24} /></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="fullName" value={form.fullName} onChange={updateField} placeholder="Your name" required />
              <Field label="Email" name="email" value={form.email} onChange={updateField} type="email" placeholder="you@company.com" required />
              <Field label="Phone Number" name="phone" value={form.phone} onChange={updateField} type="tel" placeholder="+880..." />
              <Field label="Company Name" name="company" value={form.company} onChange={updateField} placeholder="Your company" />
              <label className="flex flex-col gap-2 text-sm"><span className="font-medium">Service Interested In<span className="text-primary"> *</span></span><select name="service" value={form.service} onChange={updateField} required className="h-12 rounded-xl border border-border/80 bg-background/60 px-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"><option value="">Select a service</option>{services.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
              <label className="flex flex-col gap-2 text-sm"><span className="font-medium">Preferred Callback Time</span><select name="callbackTime" value={form.callbackTime} onChange={updateField} className="h-12 rounded-xl border border-border/80 bg-background/60 px-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"><option value="">Choose a time</option>{callbackTimes.map((time) => <option key={time} value={time}>{time}</option>)}</select></label>
              <label className="flex flex-col gap-2 text-sm sm:col-span-2"><span className="font-medium">Message</span><textarea name="message" value={form.message} onChange={updateField} placeholder="Tell us a little about what you&apos;re building..." rows={5} className="resize-y rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm leading-6 outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10" /></label>
            </div>
            {error && <p role="alert" className="mt-5 text-sm text-destructive">{error}</p>}
            {submitted && <p role="status" className="mt-5 flex items-center gap-2 text-sm text-primary"><CheckCircle2 size={16} /> Thanks — we&apos;ll be in touch shortly.</p>}
            <button type="submit" disabled={isSubmitting} className="glow-button mt-8 inline-flex h-13 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity disabled:cursor-wait disabled:opacity-70">{isSubmitting ? <><span className="size-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" /> Sending request...</> : <>Request Callback <ArrowUpRight size={17} /></>}</button>
          </motion.form>
        </div>
      </section>
    </main>
  )
}
