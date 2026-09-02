'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export function WhatsAppButton() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801000000000'
  return <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" aria-label="Chat with Aronia Dynamics on WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"><MessageCircle size={19} /> WhatsApp</a>
}

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')

  async function submit(event) {
    event.preventDefault()
    setState('loading')
    const response = await fetch('/api/subscriptions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
    if (!response.ok) {
      setState('error')
      return
    }
    setEmail('')
    setState('success')
  }

  return <form onSubmit={submit} className="mt-5"><div className="flex gap-2"><input aria-label="Email address for newsletter" type="email" required value={email} onChange={(event) => { setEmail(event.target.value); setState('idle') }} placeholder="Your email address" className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" /><button disabled={state === 'loading'} className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60">{state === 'loading' ? '...' : 'Join'}</button></div>{state === 'success' && <p className="mt-2 text-xs text-primary">You&apos;re on the list.</p>}{state === 'error' && <p className="mt-2 text-xs text-destructive">Please try again.</p>}</form>
}
