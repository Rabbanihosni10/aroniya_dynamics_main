import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ | Aronia Dynamics',
  description: 'Answers to common questions about working with Aronia Dynamics.',
}

const questions = [
  ['What kind of projects do you take on?', 'We partner with ambitious teams on digital products, internal systems, AI capabilities, data platforms, and growth-focused websites.'],
  ['How does a project usually begin?', 'We start with a focused conversation and discovery workshop. From there, we clarify goals, risks, scope, and the right path to an initial release.'],
  ['Do you work with teams outside Bangladesh?', 'Yes. Aronia Dynamics works across Bangladesh, the USA, and remotely with international teams.'],
  ['Can you work with our existing developers?', 'Absolutely. We can lead delivery, embed with your team, or provide focused architecture, product, and engineering support.'],
  ['How do you price engagements?', 'Every engagement is shaped around its goals and complexity. We offer clear scopes and milestones rather than inflexible packages.'],
  ['How quickly can we get started?', 'After an initial call, we typically share a recommended next step within a few business days.'],
]

export default function FAQPage() {
  return <main className="min-h-screen bg-background px-6 py-16 text-foreground sm:py-24"><div className="mx-auto max-w-4xl"><Link href="/" className="font-mono text-sm tracking-[.18em] text-primary">ARONIA.</Link><p className="eyebrow mt-20">Answers / 08</p><h1 className="mt-5 text-5xl font-bold tracking-[-.05em] sm:text-7xl">Good questions<br /><span className="gradient-text">make better work.</span></h1><div className="mt-14 divide-y divide-border rounded-3xl border border-border bg-card/40 px-6 sm:px-10">{questions.map(([question, answer]) => <details key={question} className="group py-6"><summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:hidden">{question}<span className="float-right text-primary transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div></div></main>
}
