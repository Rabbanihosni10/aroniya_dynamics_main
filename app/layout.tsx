import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { WhatsAppButton } from '@/components/SiteEnhancements'

export const metadata: Metadata = {
  title: 'Aronia Dynamics — Digital Reality, Built Better',
  description: 'Premium software consultancy for AI systems, digital transformation, and ambitious teams in Bangladesh and the USA.',
  generator: 'Aronia Dynamics',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aroniadynamics.com'),
  openGraph: {
    title: 'Aronia Dynamics — Digital Reality, Built Better',
    description: 'Premium software consultancy for AI systems, digital transformation, and ambitious teams.',
    type: 'website',
    siteName: 'Aronia Dynamics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aronia Dynamics — Digital Reality, Built Better',
    description: 'Premium software consultancy for AI systems, digital transformation, and ambitious teams.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased font-sans">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
