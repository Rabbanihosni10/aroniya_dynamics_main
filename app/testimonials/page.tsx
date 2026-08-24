import type { Metadata } from 'next'
import TestimonialsPage from '@/components/TestimonialsPage'

export const metadata: Metadata = { title: 'Testimonials | Aronia Dynamics', description: 'See what Aronia Dynamics clients say about working together.' }

export default function Page() { return <TestimonialsPage /> }
