import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/', '/admin/'],
      },
    ],
    sitemap: 'https://one-night-stand.co/sitemap.xml',
    host: 'https://one-night-stand.co',
  };
}
