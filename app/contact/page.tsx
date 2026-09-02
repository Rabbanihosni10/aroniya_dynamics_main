import ContactPage from '@/components/ContactPage'
import { BookingResources } from '@/components/BookingResources'

export default function Page() {
  return <><ContactPage /><div className="bg-background px-6 pb-24 text-foreground"><div className="mx-auto max-w-7xl"><BookingResources /></div></div></>
}

export const metadata = {
  title: 'Contact | Aronia Dynamics',
  description: 'Start a conversation with Aronia Dynamics and request a free consultation call.',
}
