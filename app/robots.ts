import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/test/'],
    },
    sitemap: 'https://renaldi.fun/sitemap.xml',
  }
}
