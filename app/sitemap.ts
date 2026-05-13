import { MetadataRoute } from 'next'
import { posts } from '../src/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://renaldi.fun'
  
  // Dynamic routes for all blog posts
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Portfolio bridge link as requested
    {
      url: 'https://me.renaldi.fun',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...blogPosts,
  ]
}
