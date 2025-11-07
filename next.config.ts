// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development', // disable PWA in dev
  disable: false, // always enable PWA for testing purposes
  register: true,
  skipWaiting: true,
  sw: 'sw.js',
  publicExcludes: ['!robots.txt', '!sitemap.xml'],
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
      },
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  // ✅ explicitly tell Next.js to use Webpack instead of Turbopack
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  // ✅ empty turbopack config silences the warning if needed
  turbopack: {},
  reactStrictMode: true,
  trailingSlash: true,
  distDir: 'dist',
  allowedDevOrigins: ['app.localhost:3000', 'app.one-night-stand.local', 'one-night-stand.local',],
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**', // <-- allow all paths from i.pravatar.cc
      }

    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};

// ✅ wrap Next config with PWA
module.exports = withPWA(nextConfig);
