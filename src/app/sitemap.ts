import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

import citiesData from "../constants/cities.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://one-night-stand.co';
  
  const cities = citiesData.map((c) => c.slug);

  const cityPaths = cities.map((city) => ({
    path: `/singles-in-${city}`,
    priority: 0.8,
  }));

  // List of paths for the sitemap
  const paths = [
    { path: '', priority: 1.0 },
    ...cityPaths,
    { path: '/legal/privacy-notice', priority: 0.2 },
    { path: '/legal/terms-of-service', priority: 0.2 },
    { path: '/legal/cookie-policy', priority: 0.2 },
    { path: '/legal/consumer-health-privacy', priority: 0.2 },
    { path: '/legal/intellectual-property', priority: 0.2 },
    { path: '/legal/user-generated-content', priority: 0.2 },
    { path: '/legal/child-safety', priority: 0.2 },
    { path: '/legal/data-deletion-request', priority: 0.2 },
    { path: '/legal/accessibility', priority: 0.2 },
  ];


  return paths.map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: item.priority,
  }));
}
