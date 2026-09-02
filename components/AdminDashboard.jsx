'use client'

import { useEffect, useMemo, useState } from 'react'

const statuses = ['New', 'Contacted', 'Converted']

function downloadCsv(leads) {
  const headers = ['Name', 'Email', 'Phone', 'Company', 'Service', 'Status', 'Created']
  const rows = leads.map((lead) => [lead.fullName, lead.email, lead.phone, lead.company, lead.service, lead.status || 'New', lead.createdAt])
  const csv = [headers, ...rows].map((row) => row.map((value) => `"${String(value || '').replaceAll('"', '""')}"`).join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
  const link = document.createElement('a')
  link.href = url
  link.download = 'aronia-leads.csv'
  link.click()
  URL.revokeObjectURL(url)
}

export default function AdminDashboard() {
  const [password, setPassword] = useState('')
  const [leads, setLeads] = useState([])
  const [authenticated, setAuthenticated] = useState(false)
  const [error, setError] = useState('')

  const loadLeads = async () => {
    const response = await fetch('/api/admin/leads')
    if (!response.ok) throw new Error('Unable to load leads.')
    const data = await response.json()
    setLeads(data.leads)
    setAuthenticated(true)
  }

  useEffect(() => { loadLeads().catch(() => {}) }, [])

  const counts = useMemo(() => statuses.map((status) => [status, leads.filter((lead) => (lead.status || 'New') === status).length]), [leads])

  async function login(event) {
    event.preventDefault()
    setError('')
    const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) })
    if (!response.ok) { setError('Invalid password or missing admin configuration.'); return }
    setPassword('')
    await loadLeads()
  }

  async function updateStatus(id, status) {
    const response = await fetch('/api/admin/leads', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) })
    if (!response.ok) { setError('Unable to update lead status.'); return }
    setLeads((current) => current.map((lead) => lead.id === id ? { ...lead, status } : lead))
  }

  if (!authenticated) return <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground"><form onSubmit={login} className="w-full max-w-sm rounded-3xl border border-border bg-card p-8"><p className="eyebrow">Aronia / Admin</p><h1 className="mt-4 text-3xl font-bold">Lead dashboard</h1><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Admin password" required className="mt-8 h-12 w-full rounded-xl border border-border bg-background px-4" />{error && <p className="mt-3 text-sm text-destructive">{error}</p>}<button className="mt-5 h-12 w-full rounded-full bg-primary font-semibold text-primary-foreground">Sign in</button></form></main>

  return <main className="min-h-screen bg-background px-6 py-12 text-foreground lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">Aronia / Internal</p><h1 className="mt-3 text-4xl font-bold">Lead dashboard</h1></div><button onClick={() => downloadCsv(leads)} className="rounded-full border border-border px-5 py-3 text-sm hover:border-primary">Export CSV</button></div><div className="mt-10 grid gap-3 sm:grid-cols-3">{counts.map(([status, count]) => <div key={status} className="rounded-2xl border border-border bg-card p-5"><p className="text-sm text-muted-foreground">{status}</p><p className="mt-2 text-3xl font-bold text-primary">{count}</p></div>)}</div><div className="mt-8 overflow-x-auto rounded-2xl border border-border"><table className="w-full min-w-[800px] text-left text-sm"><thead className="bg-card text-muted-foreground"><tr>{['Lead', 'Contact', 'Service', 'Message', 'Status', 'Received'].map((heading) => <th key={heading} className="px-5 py-4 font-medium">{heading}</th>)}</tr></thead><tbody>{leads.map((lead) => <tr key={lead.id} className="border-t border-border align-top"><td className="px-5 py-4 font-medium">{lead.fullName}<span className="mt-1 block text-xs text-muted-foreground">{lead.company || '—'}</span></td><td className="px-5 py-4"><a href={`mailto:${lead.email}`} className="text-primary">{lead.email}</a><span className="mt-1 block text-xs text-muted-foreground">{lead.phone || '—'}</span></td><td className="px-5 py-4">{lead.service}</td><td className="max-w-xs px-5 py-4 text-muted-foreground">{lead.message || '—'}</td><td className="px-5 py-4"><select value={lead.status || 'New'} onChange={(event) => updateStatus(lead.id, event.target.value)} className="rounded-lg border border-border bg-background px-3 py-2">{statuses.map((status) => <option key={status}>{status}</option>)}</select></td><td className="px-5 py-4 whitespace-nowrap text-muted-foreground">{lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : '—'}</td></tr>)}</tbody></table>{!leads.length && <p className="p-8 text-center text-muted-foreground">No leads yet.</p>}</div></div></main>
}
