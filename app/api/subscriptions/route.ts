import { NextResponse } from 'next/server'
import { getSubscriptionsCollection } from '@/lib/firebase-admin'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (body?.website) {
    return NextResponse.json({ ok: true })
  }

  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  }

  try {
    await getSubscriptionsCollection().add({
      email: email.slice(0, 254),
      source: 'website',
      createdAt: new Date(),
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Unable to save subscription:', error)
    return NextResponse.json({ error: 'Unable to save subscription.' }, { status: 503 })
  }
}
