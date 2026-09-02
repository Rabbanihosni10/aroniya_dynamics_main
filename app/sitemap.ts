import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aroniadynamics.com'
  const routes = ['', '/about', '/services', '/portfolio', '/testimonials', '/pricing', '/contact', '/team', '/faq', '/insights', '/privacy', '/terms', ...['nexa-health', 'atlas-intelligence', 'kite-commerce'].map((slug) => `/case-studies/${slug}`)]
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: route === '' ? 'weekly' : 'monthly', priority: route === '' ? 1 : 0.7 }))
}
