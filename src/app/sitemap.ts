import { MetadataRoute } from 'next';
import { getTrends, getBlogPosts } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ad.re.kr';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/trends`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Dynamic trend pages
  let trendPages: MetadataRoute.Sitemap = [];
  try {
    const trends = await getTrends();
    trendPages = trends.map((trend) => ({
      url: `${baseUrl}/trends/${trend.id}`,
      lastModified: new Date(trend.date || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch {}

  // Dynamic blog pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getBlogPosts();
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: new Date(post.date || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch {}

  return [...staticPages, ...trendPages, ...blogPages];
}
