import { LocalBusinessJsonLd } from 'next-seo';
import Head from 'next/head';

export default function SEOConfig({ children }: { children: React.ReactNode }) {
  const defaultSEOConfig = {
    title: "One Night Stand - Casual Dating App | No Drama, Just Vibes",
    titleTemplate: "%s | One Night Stand",
    description: "The hookup app for people who know what they want — tonight. Swipe, match, and meet in a safe and discreet space. Download now on Google Play.",
    canonical: "https://one-night-stand.co",
    
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://one-night-stand.co',
      siteName: 'One Night Stand',
      title: 'One Night Stand - Casual Dating App | No Drama, Just Vibes',
      description: 'The hookup app for people who know what they want — tonight. Swipe, match, and meet safely.',
      images: [
        {
          url: 'https://lumenpix.one-night-stand.co/zaam-technologies/image/upload/v1721149132/resources/Zaam_Technologies_Design_a_bold,_modern,_and_seductive_app_preview_card_for__One_Ni_9b661ef4-704b-470d-8739-23447f1f7b62.jpg',
          width: 1200,
          height: 630,
          alt: 'One Night Stand - Casual Dating App',
          type: 'image/jpeg',
        },
        {
          url: 'https://one-night-stand.co/icons/icon-512x512.png',
          width: 512,
          height: 512,
          alt: 'One Night Stand App Icon',
          type: 'image/png',
        },
      ],
    },
    
    twitter: {
      handle: '@onenightstand',
      site: '@onenightstand',
      cardType: 'summary_large_image',
    },
    
    additionalMetaTags: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
      },
      {
        name: 'theme-color',
        content: '#FF3A8A',
      },
      {
        name: 'application-name',
        content: 'One Night Stand',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'One Night Stand',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'msapplication-TileColor',
        content: '#FF3A8A',
      },
      {
        name: 'msapplication-config',
        content: '/browserconfig.xml',
      },
      // Geo tags for local SEO
      {
        name: 'geo.region',
        content: 'US',
      },
      {
        name: 'geo.placename',
        content: 'United States',
      },
      // Dating app specific meta tags
      {
        name: 'category',
        content: 'Dating & Relationships',
      },
      {
        name: 'coverage',
        content: 'Worldwide',
      },
      {
        name: 'distribution',
        content: 'Global',
      },
      {
        name: 'rating',
        content: 'General',
      },
      {
        name: 'revisit-after',
        content: '7 days',
      },
      // Social media tags
      {
        property: 'fb:app_id',
        content: '123456789', // Replace with actual Facebook App ID
      },
      {
        name: 'pinterest-rich-pin',
        content: 'false',
      },
    ],
    
    additionalLinkTags: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/icon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/icon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#FF3A8A',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      // Preconnect to external domains for performance
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preconnect',
        href: 'https://www.google-analytics.com',
      },
      {
        rel: 'preconnect',
        href: 'https://lumenpix.one-night-stand.co',
      },
      // DNS prefetch for app stores
      {
        rel: 'dns-prefetch',
        href: 'https://play.google.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://apps.apple.com',
      },
      // Canonical URL
      {
        rel: 'canonical',
        href: 'https://one-night-stand.co',
      },
      // Alternative URLs for different languages (when implemented)
      {
        rel: 'alternate',
        hrefLang: 'en',
        href: 'https://one-night-stand.co',
      },
      {
        rel: 'alternate',
        hrefLang: 'x-default',
        href: 'https://one-night-stand.co',
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{defaultSEOConfig.title}</title>
        <meta name="description" content={defaultSEOConfig.description} />
        <meta name="keywords" content={defaultSEOConfig.additionalMetaTags?.find(tag => tag.name === 'keywords')?.content} />
        <meta name="author" content={defaultSEOConfig.additionalMetaTags?.find(tag => tag.name === 'author')?.content} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={defaultSEOConfig.canonical} />
        
        {/* Open Graph */}
        <meta property="og:type" content={defaultSEOConfig.openGraph?.type} />
        <meta property="og:title" content={defaultSEOConfig.openGraph?.title} />
        <meta property="og:description" content={defaultSEOConfig.openGraph?.description} />
        <meta property="og:url" content={defaultSEOConfig.openGraph?.url} />
        <meta property="og:site_name" content={defaultSEOConfig.openGraph?.siteName} />
        <meta property="og:locale" content={defaultSEOConfig.openGraph?.locale} />
        {defaultSEOConfig.openGraph?.images?.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content={defaultSEOConfig.twitter?.cardType} />
        <meta name="twitter:site" content={defaultSEOConfig.twitter?.site} />
        <meta name="twitter:creator" content={defaultSEOConfig.twitter?.handle} />
        <meta name="twitter:title" content={defaultSEOConfig.openGraph?.title} />
        <meta name="twitter:description" content={defaultSEOConfig.openGraph?.description} />
        <meta name="twitter:image" content={defaultSEOConfig.openGraph?.images?.[0]?.url} />
        
        {/* Additional Meta Tags */}
        {defaultSEOConfig.additionalMetaTags?.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}
        
        {/* Additional Link Tags */}
        {defaultSEOConfig.additionalLinkTags?.map((tag, index) => (
          <link key={index} rel={tag.rel} href={tag.href} />
        ))}
      </Head>
      
      {/* Software Application Structured Data - Custom JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "One Night Stand",
            "description": "The hookup app for people who know what they want — tonight. Swipe, match, and meet in a safe and discreet space.",
            "url": "https://one-night-stand.co",
            "image": [
              "https://lumenpix.one-night-stand.co/zaam-technologies/image/upload/v1721149132/resources/Zaam_Technologies_Design_a_bold,_modern,_and_seductive_app_preview_card_for__One_Ni_9b661ef4-704b-470d-8739-23447f1f7b62.jpg",
              "https://one-night-stand.co/icons/icon-512x512.png"
            ],
            "applicationCategory": "Dating",
            "applicationSubCategory": "Casual Dating",
            "operatingSystem": ["Android", "iOS"],
            "downloadUrl": "https://play.google.com/store/apps/details?id=com.continuummtechnologies.onenightstand",
            "installUrl": "https://play.google.com/store/apps/details?id=com.continuummtechnologies.onenightstand",
            "softwareVersion": "1.0.0",
            "datePublished": "2023-07-01",
            "author": {
              "@type": "Organization",
              "name": "Zaam Technologies",
              "url": "https://one-night-stand.co"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Zaam Technologies"
            },
            "featureList": [
              "Swipe to match with people nearby",
              "Incognito mode for private browsing",
              "Verified user profiles", 
              "Hotspot boosts for increased visibility",
              "Safe and secure messaging",
              "Location-based matching"
            ],
            "screenshot": [
              "https://one-night-stand.co/screenshots/mobile-home.png",
              "https://one-night-stand.co/screenshots/mobile-matches.png"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.5,
              "reviewCount": 1234,
              "bestRating": 5,
              "worstRating": 1
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Alex R."
                },
                "datePublished": "2023-09-15",
                "reviewBody": "This app is a game-changer! I've met so many interesting people for casual fun. Highly recommend!!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 5,
                  "bestRating": 5
                }
              }
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      {/* Local Business JSON-LD */}
      <LocalBusinessJsonLd
        type="Organization"
        name="Zaam Technologies - One Night Stand"
        description="Developer of the One Night Stand casual dating app"
        url="https://one-night-stand.co"
        telephone="+1-555-ONS-VIBES"
        address={{
          streetAddress: "123 Tech Street",
          addressLocality: "San Francisco",
          addressRegion: "CA", 
          postalCode: "94102",
          addressCountry: "US",
        }}
        geo={{
          latitude: 37.7749,
          longitude: -122.4194,
        }}
        sameAs={[
          "https://twitter.com/onenightstand",
          "https://instagram.com/onenightstand",
          "https://facebook.com/onenightstand"
        ]}
      />

      {children}
    </>
  );
}