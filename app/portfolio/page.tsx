import type { Metadata } from 'next'
import PortfolioPage from '@/components/PortfolioPage'

export const metadata: Metadata = { title: 'Portfolio | Aronia Dynamics', description: 'Selected digital products, systems, and partnerships from Aronia Dynamics.' }

export default function Page() { return <PortfolioPage /> }
