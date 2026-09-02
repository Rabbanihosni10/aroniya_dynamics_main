import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { cookieName, isAdminCookieValid } from '@/lib/admin-auth'
import { getLeadsCollection } from '@/lib/firebase-admin'

async function requireAdmin() {
  const cookieStore = await cookies()
  if (!isAdminCookieValid(cookieStore.get(cookieName)?.value)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }
  return null
}

export async function GET() {
  const unauthorized = await requireAdmin()
  if (unauthorized) return unauthorized

  try {
    const snapshot = await getLeadsCollection().orderBy('createdAt', 'desc').limit(200).get()
    const leads = snapshot.docs.map((doc) => {
      const data = doc.data()
      return { id: doc.id, ...data, createdAt: data.createdAt?.toDate?.().toISOString() || null }
    })
    return NextResponse.json({ leads })
  } catch (error) {
    console.error('Unable to load leads:', error)
    return NextResponse.json({ error: 'Unable to load leads.' }, { status: 503 })
  }
}

export async function PATCH(request: Request) {
  const unauthorized = await requireAdmin()
  if (unauthorized) return unauthorized
  const body = await request.json().catch(() => null)
  if (!body?.id || !['New', 'Contacted', 'Converted'].includes(body.status)) {
    return NextResponse.json({ error: 'A valid lead ID and status are required.' }, { status: 400 })
  }

  try {
    await getLeadsCollection().doc(String(body.id)).update({ status: body.status })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Unable to update lead:', error)
    return NextResponse.json({ error: 'Unable to update lead.' }, { status: 503 })
  }
}
