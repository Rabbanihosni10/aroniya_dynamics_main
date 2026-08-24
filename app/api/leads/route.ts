import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (!body?.fullName || !body?.email || !body?.service) {
    return NextResponse.json({ error: 'Name, email, and service are required.' }, { status: 400 })
  }

  return NextResponse.json({ ok: true })
}
