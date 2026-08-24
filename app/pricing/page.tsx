import type { Metadata } from 'next'
import PricingPage from '@/components/PricingPage'

export const metadata: Metadata = { title: 'Pricing | Aronia Dynamics', description: 'Flexible engagement paths for ambitious digital products and systems.' }

export default function Page() { return <PricingPage /> }
