import { NextResponse } from 'next/server'
import { getLeadsCollection } from '@/lib/firebase-admin'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (!body?.fullName || !body?.email || !body?.service) {
    return NextResponse.json({ error: 'Name, email, and service are required.' }, { status: 400 })
  }

  try {
    await getLeadsCollection().add({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone || null,
      company: body.company || null,
      service: body.service,
      callbackTime: body.callbackTime || null,
      message: body.message || null,
      createdAt: new Date(),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Unable to save lead:', error)
    return NextResponse.json({ error: 'Unable to save lead.' }, { status: 503 })
  }
}
