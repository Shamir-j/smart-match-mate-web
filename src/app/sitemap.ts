import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://one-night-stand.co';
  
  // List of paths for the sitemap
  const paths = [
    '',
    '/faq',
    '/safety-tips',
    '/legal/privacy-notice',
    '/legal/terms-of-service',
    '/legal/cookie-policy',
    '/legal/consumer-health-privacy',
    '/legal/intellectual-property',
    '/legal/user-generated-content',
    '/legal/child-safety',
    '/legal/data-deletion-request',
    '/legal/accessibility',
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
