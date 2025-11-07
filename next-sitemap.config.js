/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://one-night-stand.co',
  generateRobotsTxt: true, // Generate robots.txt along with sitemap
  exclude: [
    '/admin/*',
    '/api/*',
    '/private/*',
    '/server-sitemap-index.xml', // Exclude dynamic sitemap
  ],
  
  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/*.json$',
          '/sw.js',
          '/workbox-*.js',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Bingbot', 
        allow: '/',
        crawlDelay: 2,
      },
    ],
    additionalSitemaps: [
      'https://one-night-stand.co/server-sitemap-index.xml', // Dynamic sitemap
    ],
  },

  // Generate separate sitemap files for different sections
  generateIndexSitemap: false,
  
  // Additional pages with custom configuration
  additionalPaths: async (config) => [
    await config.transform(config, '/download/'),
    await config.transform(config, '/privacy/'),
    await config.transform(config, '/terms/'),
    await config.transform(config, '/about/'),
    await config.transform(config, '/contact/'),
    await config.transform(config, '/support/'),
    await config.transform(config, '/safety/'),
  ],

  // Transform each URL before adding to sitemap
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      '/': {
        priority: 1.0,
        changefreq: 'daily',
      },
      '/download/': {
        priority: 0.9,
        changefreq: 'weekly',
      },
      '/privacy/': {
        priority: 0.6,
        changefreq: 'monthly',
      },
      '/terms/': {
        priority: 0.6,
        changefreq: 'monthly',
      },
      '/about/': {
        priority: 0.7,
        changefreq: 'monthly',
      },
      '/contact/': {
        priority: 0.5,
        changefreq: 'monthly',
      },
      '/support/': {
        priority: 0.5,
        changefreq: 'weekly',
      },
      '/safety/': {
        priority: 0.8,
        changefreq: 'monthly',
      },
    };

    const pageConfig = customConfig[path] || {
      priority: 0.7,
      changefreq: 'weekly',
    };

    return {
      loc: path,
      changefreq: pageConfig.changefreq,
      priority: pageConfig.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://one-night-stand.co${path}`,
          hreflang: 'en',
        },
        {
          href: `https://one-night-stand.co${path}`,
          hreflang: 'x-default',
        },
        // Add more languages when internationalization is implemented
      ],
    };
  },
  
  // Output directory for sitemap files
  outDir: './public',
  
  // Include trailing slash
  trailingSlash: true,
  
  // Automatically generate lastmod
  autoLastmod: true,
};