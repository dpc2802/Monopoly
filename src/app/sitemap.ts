import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Replace this with the actual production domain once confirmed
  const baseUrl = 'https://www.monopolyrecruitment.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
