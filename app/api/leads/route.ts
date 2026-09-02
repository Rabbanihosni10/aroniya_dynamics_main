import { NextResponse } from 'next/server'
import { getLeadsCollection } from '@/lib/firebase-admin'

type LeadAlert = {
  fullName: string
  email: string
  phone: string | null
  company: string | null
  service: string
  callbackTime: string | null
  message: string | null
}

async function sendLeadAlert(lead: LeadAlert) {
  const apiKey = process.env.RESEND_API_KEY
  const alertEmail = process.env.LEAD_ALERT_EMAIL
  const fromEmail = process.env.LEAD_ALERT_FROM_EMAIL

  if (!apiKey || !alertEmail || !fromEmail) {
    throw new Error('Lead alert email environment variables are not configured.')
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [alertEmail],
      subject: `New lead! Call ${lead.fullName}`,
      text: [
        `New consultation request from ${lead.fullName}.`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone || 'Not provided'}`,
        `Company: ${lead.company || 'Not provided'}`,
        `Service: ${lead.service}`,
        `Callback time: ${lead.callbackTime || 'Not provided'}`,
        `Message: ${lead.message || 'Not provided'}`,
      ].join('\n'),
    }),
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(`Resend rejected lead alert: ${response.status} ${details}`)
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (body?.website) {
    return NextResponse.json({ ok: true })
  }

  if (!body?.fullName || !body?.email || !body?.service) {
    return NextResponse.json({ error: 'Name, email, and service are required.' }, { status: 400 })
  }

  try {
    const lead = {
      fullName: String(body.fullName).trim().slice(0, 120),
      email: String(body.email).trim().toLowerCase().slice(0, 254),
      phone: body.phone ? String(body.phone).trim().slice(0, 40) : null,
      company: body.company ? String(body.company).trim().slice(0, 120) : null,
      service: String(body.service).trim().slice(0, 80),
      callbackTime: body.callbackTime ? String(body.callbackTime).trim().slice(0, 40) : null,
      message: body.message ? String(body.message).trim().slice(0, 2000) : null,
      createdAt: new Date(),
    }

    await getLeadsCollection().add(lead)
    await sendLeadAlert(lead)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Unable to save lead:', error)
    return NextResponse.json({ error: 'Unable to save lead.' }, { status: 503 })
  }
}
