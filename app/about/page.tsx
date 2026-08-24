import type { Metadata } from 'next'
import AboutPage from '@/components/AboutPage'

export const metadata: Metadata = { title: 'About | Aronia Dynamics', description: 'Meet Aronia Dynamics, a software consultancy building technology with intention.' }

export default function Page() { return <AboutPage /> }
