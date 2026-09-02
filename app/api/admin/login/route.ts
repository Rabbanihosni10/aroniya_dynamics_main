import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { cookieName, createAdminCookieValue, isAdminPasswordValid } from '@/lib/admin-auth'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const password = typeof body?.password === 'string' ? body.password : ''

  try {
    if (!isAdminPasswordValid(password)) return NextResponse.json({ error: 'Invalid password.' }, { status: 401 })
    const cookieStore = await cookies()
    cookieStore.set(cookieName, createAdminCookieValue(), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 60 * 60 * 12, path: '/' })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Unable to authenticate admin:', error)
    return NextResponse.json({ error: 'Admin authentication is not configured.' }, { status: 503 })
  }
}
