import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://frederikbarbre.dk',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://frederikbarbre.dk/works',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://frederikbarbre.dk/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://frederikbarbre.dk/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
