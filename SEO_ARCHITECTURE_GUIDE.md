# SEO Architecture Guide
> Reference document for all projects. Written from the BreeStyle project — a working example of a high-SEO Next.js site.
> Last updated: 2026-05-12 (added: Docker deployment guide)

---

## The Core Decision Framework

```
Is this page/site SEO-critical?
├── YES → Vanilla CSS + CSS Modules + shadcn/ui (if needed)
│         No Ant Design. No heavy UI libs.
│
└── NO  → Ant Design is fine
          (Internal dashboards, admin panels, CRMs,
           anything behind a login wall)
```

---

## Part 1: The Stack That Wins on SEO

### What BreeStyle Uses (and Why It Works)

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js (App Router) | SSG/SSR, built-in metadata API |
| Rendering | `output: 'export'` (Static) | Pre-built HTML — Google reads instantly |
| Styling | Vanilla CSS + CSS Modules | Zero runtime cost, zero JS needed |
| Components | Hand-built + Lucide icons | Minimal bundle |
| Fonts | `next/font/google` | No FOUT, optimized loading |
| Schema | JSON-LD in layout | Structured data for Google |
| Sitemap | `sitemap.ts` | Auto-generated, programmatic |
| Robots | `robots.ts` | Explicit crawl instructions |

**The golden rule: every byte of JavaScript you ship to the browser is a potential SEO cost on public pages.**

---

## Part 2: Rendering Modes and SEO Impact

### Static Site Generation (SSG) — Best for SEO
```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export', // <-- Generates pure HTML files at build time
  trailingSlash: true,
};
```
Google's crawler gets complete HTML immediately. No JavaScript execution required.

**Use for:** Marketing sites, e-commerce storefronts, blogs, landing pages, product pages.

---

### Server-Side Rendering (SSR) — Good for SEO
```ts
// app/products/[id]/page.tsx
// No 'use client' directive = Server Component by default in App Router

export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  return <div><h1>{product.name}</h1></div>;
}
```
HTML is generated on the server per request. Google reads it correctly.

**Use for:** Dynamic product pages, user-specific content that still needs SEO.

---

### Client-Side Rendering (CSR) — Bad for SEO
```tsx
'use client'; // <-- This is a red flag on SEO pages

import { useEffect, useState } from 'react';

export default function ProductPage() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/api/product/1').then(r => r.json()).then(setProduct);
  }, []);

  // Google sees: <div></div> until JS loads. Bad.
  return <div>{product?.name}</div>;
}
```
Google crawls before JS executes. Content is invisible or delayed. **Never do this for public SEO pages.**

---

## Part 3: The Metadata System (Next.js App Router)

### Root Layout — The Foundation (Do This Once)
```ts
// src/app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // 1. metadataBase is REQUIRED for OG images and canonical URLs to resolve correctly
  metadataBase: new URL('https://yourdomain.com'),

  // 2. Title with template — every page gets ` | Brand Name` appended automatically
  title: {
    default: 'Brand Name | Primary Keyword',
    template: '%s | Brand Name',
  },

  // 3. Description — 150-160 chars, include your primary keyword
  description: 'Your meta description here. Make it compelling. 150-160 chars max.',

  // 4. Keywords — less important now but still good practice
  keywords: ['keyword 1', 'keyword 2', 'your brand', 'location + niche'],

  // 5. Authorship signals
  authors: [{ name: 'Your Brand Name' }],
  creator: 'Your Brand Name',
  publisher: 'Your Brand Name',

  // 6. Prevent phone/email auto-linking (avoids structured data confusion)
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // 7. OpenGraph — controls how your link looks on WhatsApp, Facebook, LinkedIn
  openGraph: {
    title: 'Brand Name | Primary Keyword',
    description: 'Short description for social sharing.',
    url: 'https://yourdomain.com',
    siteName: 'Brand Name',
    locale: 'en_KE', // or en_US, en_GB etc.
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // 1200x630px recommended
        width: 1200,
        height: 630,
        alt: 'Brand Name - Description',
      },
    ],
  },

  // 8. Twitter/X card
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Name | Primary Keyword',
    description: 'Short description.',
    images: ['/og-image.jpg'],
  },

  // 9. Indexing instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 10. Canonical URL — prevents duplicate content penalties
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};
```

---

### Page-Level Metadata — Override Per Page
```ts
// src/app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // This replaces the %s in the root template → "About Us | Brand Name"
  title: 'About Us',
  description: 'Learn about our story, mission, and the team behind Brand Name.',
  alternates: {
    canonical: 'https://yourdomain.com/about',
  },
};

export default function AboutPage() {
  return <main>...</main>;
}
```

---

### Dynamic Pages (E-commerce Products)
```ts
// src/app/products/[slug]/page.tsx
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

// Dynamic metadata — called at build time (SSG) or request time (SSR)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProduct(params.slug);

  return {
    title: product.name,                              // → "Nike Air Max | Brand Name"
    description: product.seoDescription,
    openGraph: {
      title: product.name,
      description: product.seoDescription,
      images: [{ url: product.imageUrl }],
      type: 'website',
    },
    alternates: {
      canonical: `https://yourdomain.com/products/${params.slug}`,
    },
  };
}

// Generate static paths at build time (SSG)
export async function generateStaticParams() {
  const products = await fetchAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const product = await fetchProduct(params.slug);
  return (
    <main>
      <h1>{product.name}</h1>  {/* Always one H1 per page */}
      <p>{product.description}</p>
    </main>
  );
}
```

---

## Part 4: JSON-LD Structured Data (Schema.org)

This is what puts you in Google's Knowledge Graph, rich results, and business panels. Most developers skip this. **Don't.**

### Organization Schema (Root Layout — Every Site)
```tsx
// src/app/layout.tsx — inside RootLayout function
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Brand Name",
  "alternateName": "Short Brand Name",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254-700-000000",
    "contactType": "customer service",
    "areaServed": "KE",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "sameAs": [
    "https://web.facebook.com/yourbrand",
    "https://www.instagram.com/yourbrand/",
    "https://twitter.com/yourbrand"
  ]
};

// In JSX:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

---

### Product Schema (E-commerce Product Pages)
```tsx
// src/app/products/[slug]/page.tsx
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.imageUrl,
  "sku": product.sku,
  "brand": {
    "@type": "Brand",
    "name": "Your Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "url": `https://yourdomain.com/products/${product.slug}`,
    "priceCurrency": "KES",
    "price": product.price,
    "availability": product.inStock
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "Your Brand Name"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": product.averageRating,
    "reviewCount": product.reviewCount
  }
};
```
> This is what enables **star ratings in Google search results** for e-commerce products.

---

### LocalBusiness Schema (Physical Store / Kenya-based Business)
```tsx
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",           // or "ClothingStore", "ElectronicsStore" etc.
  "name": "Your Brand Name",
  "image": "https://yourdomain.com/storefront.jpg",
  "url": "https://yourdomain.com",
  "telephone": "+254-700-000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi County",
    "postalCode": "00100",
    "addressCountry": "KE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.2921,
    "longitude": 36.8219
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "KES 500 - KES 50000"
};
```

---

## Part 5: Sitemap + Robots (Programmatic)

### Sitemap — `src/app/sitemap.ts`
```ts
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com';

  // For e-commerce: fetch products dynamically
  // const products = await fetchAllProducts();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,          // Homepage = highest priority
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Products change often
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,          // Legal pages = lowest priority
    },

    // Dynamic product pages:
    // ...products.map((p) => ({
    //   url: `${baseUrl}/products/${p.slug}`,
    //   lastModified: new Date(p.updatedAt),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // }))
  ];
}
```

---

### Robots — `src/app/robots.ts`
```ts
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block pages you DON'T want indexed:
        disallow: ['/admin/', '/api/', '/checkout/', '/cart/'],
      },
    ],
    sitemap: 'https://yourdomain.com/sitemap.xml',
  };
}
```

---

## Part 6: CSS Strategy for SEO Pages

### ✅ Do This — CSS Variables (Global Design Tokens)
```css
/* src/app/globals.css */
:root {
  --background: #ffffff;
  --foreground: #111827;
  --secondary: #6b7280;
  --muted: #f3f4f6;
  --border: #e5e7eb;
  --container-width: 1200px;
  --section-padding: 4rem 1.5rem;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0f172a;
    --foreground: #f8fafc;
  }
}
```

### ✅ Do This — CSS Modules (Scoped, Zero Runtime)
```css
/* src/app/products/products.module.css */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
```

```tsx
// Usage in component — zero runtime cost
import styles from './products.module.css';

export default function ProductGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>Product 1</div>
    </div>
  );
}
```

### ❌ Don't Do This on SEO Pages — Runtime CSS-in-JS
```tsx
// Bad for SEO pages — Ant Design / Emotion / Styled Components
import { Card } from 'antd';  // Ships ~800KB JS runtime
// Styles injected via JavaScript — Google may miss them

// Also bad:
import styled from 'styled-components'; // Runtime CSS injection
const StyledCard = styled.div`
  border: 1px solid red; // Generated at runtime, not build time
`;
```

---

## Part 7: Heading Hierarchy — The Most Ignored SEO Rule

```tsx
// ✅ CORRECT — One H1, then H2 > H3 > H4 in order
export default function CategoryPage() {
  return (
    <main>
      <h1>Women's Clothing in Nairobi</h1>       {/* ONE per page */}
      
      <section>
        <h2>New Arrivals</h2>                     {/* Section titles */}
        <article>
          <h3>Summer Dresses</h3>                 {/* Subsections */}
          <h4>Floral Patterns</h4>                {/* Sub-subsections */}
        </article>
      </section>
      
      <section>
        <h2>Best Sellers</h2>
      </section>
    </main>
  );
}
```

```tsx
// ❌ WRONG — Multiple H1s, skipped levels
export default function BadPage() {
  return (
    <div>
      <h1>Page Title</h1>
      <h1>Another Title</h1>     {/* NEVER two H1s */}
      <h3>Subsection</h3>        {/* Skipped H2 — bad */}
    </div>
  );
}
```

---

## Part 8: Image SEO

```tsx
import Image from 'next/image';

// ✅ Correct — always provide alt, width, height
<Image
  src="/products/nike-air-max.jpg"
  alt="Nike Air Max 270 in Black — Available in Nairobi"  // Descriptive, includes keywords
  width={800}
  height={600}
  priority={true}   // For above-the-fold images (LCP optimization)
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>

// ❌ Wrong
<img src="/product.jpg" />   // Missing alt, no optimization
<Image src="..." alt="" />   // Empty alt — meaningless to Google
```

---

## Part 9: Project Classification Table

Use this to decide your stack before starting any project:

| Project | Public? | Google crawls it? | SEO Stack | UI Lib |
|---|---|---|---|---|
| E-commerce storefront | ✅ | ✅ | SSG + Vanilla CSS | None / shadcn |
| Brand/marketing site | ✅ | ✅ | SSG + Vanilla CSS | None |
| Blog | ✅ | ✅ | SSG/SSR + CSS Modules | None |
| Product catalogue | ✅ | ✅ | SSG + CSS Modules | None / shadcn |
| Admin dashboard | ❌ (login) | ❌ | Any | **Ant Design ✅** |
| CRM / ERP | ❌ (login) | ❌ | Any | **Ant Design ✅** |
| Internal tools | ❌ (login) | ❌ | Any | **Ant Design ✅** |
| User portal (post-login) | ❌ (login) | ❌ | Any | **Ant Design ✅** |
| API docs (public) | ✅ | ✅ | SSG | None |
| Checkout flow | ✅ partial | ⚠️ Avoid indexing | SSR + robots disallow | Minimal |

---

## Part 10: The SEO Checklist Before Launch

```
[ ] metadataBase set in root layout
[ ] title with template in root layout
[ ] description on every page (unique, 150-160 chars)
[ ] openGraph title, description, image on every page
[ ] twitter card on every page
[ ] canonical URL on every page
[ ] JSON-LD schema in root layout (Organization)
[ ] JSON-LD schema on product pages (Product)
[ ] sitemap.ts with correct priorities
[ ] robots.ts blocking /admin, /api, /cart
[ ] Single H1 per page
[ ] All images have descriptive alt text
[ ] next/font used (not @import from CSS)
[ ] output: 'export' or SSR (not CSR) for public pages
[ ] No 'use client' on SEO-critical page components
[ ] Core Web Vitals passing (Lighthouse score 90+)
[ ] Mobile responsive
[ ] lang="en" on <html> element
[ ] favicon and apple-touch-icon in /public
```

---

## Part 11: Docker Deployment — `output: 'export'` vs SSR

### The Critical Misunderstanding

`output: 'export'` fundamentally changes **how** you deploy. It does NOT mean Docker won't work —
it means you deploy with **Nginx, not Node.js**. Using the wrong one breaks everything.

```
next build with output: 'export'
    ↓
Generates /out folder (pure HTML + CSS + JS files)
    ↓
NO Node.js server needed. Ever.
    ↓
Serve with Nginx instead.
```

---

### ❌ Wrong Dockerfile for `output: 'export'` (This Will Crash)
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]   # BROKEN — 'next start' requires a Node server.
                        # output: 'export' has no server. This crashes.
```

**Error you'll see:** `Error: 'next start' is not supported with static export.`

---

### ✅ Correct Dockerfile for `output: 'export'` (Nginx)
```dockerfile
# Stage 1: Build the static site
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build        # Outputs complete site to /out directory

# Stage 2: Serve with Nginx — NOT Node.js
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

This is a **multi-stage build** — the final image contains only Nginx + your HTML files.
No Node.js runtime in production at all.

---

### Nginx Config (Required for Next.js `trailingSlash: true`)

If your site uses `trailingSlash: true` in `next.config.ts`, add this Nginx config
to handle routing correctly (e.g., `/about/` → `/about/index.html`):

```dockerfile
# Full Dockerfile with custom Nginx config
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

# Custom nginx config for Next.js static export routing
RUN echo 'server { \
  listen 80; \
  root /usr/share/nginx/html; \
  index index.html; \
  location / { \
    try_files $uri $uri/ $uri.html =404; \
  } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

### ✅ Correct Dockerfile for SSR (Node.js — for dynamic sites)

If you **remove** `output: 'export'` (dynamic sites, e-commerce with real-time data):

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build        # Outputs to .next folder (not /out)

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]   # node runs the Next.js server
```

> For standalone output, also set `output: 'standalone'` in next.config.ts.

---

### Performance Comparison

| Metric | `output: 'export'` + Nginx | SSR + Node.js in Docker |
|---|---|---|
| Response time | ~1–5ms (file read) | ~50–500ms (Node processing) |
| RAM usage | ~10MB (Nginx) | ~200–500MB (Node.js) |
| CPU under load | Near zero | Scales with traffic |
| Crash risk | Almost never | Node process can crash/restart |
| SEO quality | ✅ Perfect (pre-built HTML) | ✅ Good (server-rendered HTML) |
| Dynamic data | ❌ Build-time only | ✅ Real-time |
| Live cart / payments | ❌ Not possible | ✅ Fully supported |
| API routes | ❌ Not supported | ✅ Fully supported |
| Cost to host | Very cheap (tiny container) | Higher (always-on Node process) |

**For BreeStyle: `output: 'export'` + Nginx is the correct and fastest choice.**
It's a brochure/catalogue site — no real-time data needed.

---

### What Breaks With `output: 'export'` — Know Before You Build

These Next.js features are **incompatible** with static export:

```ts
// ❌ API Routes — no server to handle requests
export async function GET(request: Request) {
  return Response.json({ data: 'this breaks' });
}

// ❌ Server Actions — requires Node.js runtime
'use server';
export async function submitForm(formData: FormData) { }

// ❌ cookies() / headers() — dynamic, server-only
import { cookies } from 'next/headers';

// ❌ Dynamic routes WITHOUT generateStaticParams
// src/app/products/[slug]/page.tsx
// Must export generateStaticParams() or it fails at build time

// ❌ Middleware — requires Edge/Node runtime
export function middleware(request: NextRequest) { }

// ❌ Image optimization — disable with unoptimized: true
// (Already done correctly in BreeStyle's next.config.ts)
```

---

### The Deployment Decision Tree

```
Does your site need any of these?
├── Real-time data (live inventory, prices, stock levels)
├── User authentication (sessions, cookies)
├── API routes (payments, form submissions to DB)
├── Server Actions
└── Middleware
        │
        ├── YES → Remove output: 'export'
        │         Use output: 'standalone'
        │         Deploy with Node.js Dockerfile
        │         (SSR — still SEO-friendly)
        │
        └── NO  → Keep output: 'export'
                  Deploy with Nginx Dockerfile
                  Faster, cheaper, zero crashes
                  (SSG — best SEO possible)
```

---

## Reference: This Project (BreeStyle)

The live working example of everything above is in this repository.

- **Root metadata:** `src/app/layout.tsx`
- **JSON-LD Schema:** `src/app/layout.tsx` (inside RootLayout)
- **Sitemap:** `src/app/sitemap.ts`
- **Robots:** `src/app/robots.ts`
- **CSS tokens:** `src/app/globals.css`
- **CSS Modules:** `src/app/page.module.css`
- **Static export config:** `next.config.ts` (`output: 'export'` → deploy with Nginx)

> Study this project whenever you start a new public-facing site.
> Copy the layout.tsx metadata structure. Copy the sitemap.ts. Copy the robots.ts.
> Deploy with the Nginx Dockerfile above — not `next start`.
> Then build your UI on top with Vanilla CSS + CSS Modules.
