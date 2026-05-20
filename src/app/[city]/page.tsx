import React from "react";
import type { Metadata } from "next";
import Footer from "../../components/Footer";
import styles from "../../components/styles.module.css";


// Tell Next.js to only prerender paths returned from generateStaticParams
export const dynamicParams = false;

import citiesData from "../../constants/cities.json";

// Supported cities for programmatic SEO landing pages
const CITIES: Record<string, { name: string; country: string }> = {};
citiesData.forEach((city) => {
  CITIES[city.slug] = { name: city.name, country: city.country };
});


type Props = {
  params: Promise<{ city: string }> | { city: string };
};

// Helper to safely extract parameters and map "singles-in-[city]"
async function getCityData(params: Promise<{ city: string }> | { city: string }) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const rawCity = resolvedParams?.city || "singles-in-nairobi";
  
  // Extract city name from "singles-in-city" prefix
  const cityKey = rawCity.startsWith("singles-in-") 
    ? rawCity.replace("singles-in-", "") 
    : rawCity;
    
  const cityData = CITIES[cityKey] || { 
    name: cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace("-", " "), 
    country: "" 
  };
  
  return { city: rawCity, cityName: cityData.name };
}

// Generate city-specific metadata programmatically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, cityName } = await getCityData(params);
  
  return {
    title: `Meet Singles in ${cityName} – Casual Dating & Chat`,
    description: `Connect with like-minded singles in ${cityName} today. One Night Stand is the best casual dating app for adults wanting honest conversations, safe chats, and exciting local dates in ${cityName}.`,
    alternates: {
      canonical: `https://one-night-stand.co/${city}/`,
    },
    openGraph: {
      title: `Meet Singles in ${cityName} – Casual Dating & Chat`,
      description: `Connect with like-minded singles in ${cityName} today. One Night Stand is the best casual dating app for adults wanting honest conversations, safe chats, and exciting local dates in ${cityName}.`,
      url: `https://one-night-stand.co/${city}/`,
      type: "website",
    },
  };
}

// Generate static routes at build time
export async function generateStaticParams() {
  return Object.keys(CITIES).map((city) => ({
    city: `singles-in-${city}`,
  }));
}

export default async function CityLandingPage({ params }: Props) {
  const { city, cityName } = await getCityData(params);

  return (
    <>
      <main style={{ paddingTop: '80px', background: 'black', color: 'white', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.hero} role="banner">
          <h1 className={styles.heroTitle}>
            Meet Singles in {cityName}
          </h1>
          <p className={styles.heroSubtitle}>
            Connect with real, verified people in {cityName} for honest conversations, casual dating, and genuine encounters. Safe, private, and simple to use.
          </p>
          <div className={styles.heroCta}>
            <a
              href="https://play.google.com/store/apps/details?id=com.quantum.times.technologies.onenightstand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.defaultBtn} aria-label={`Download App in ${cityName}`}>
                Download App in {cityName}
              </button>
            </a>
          </div>
        </section>

        {/* Dynamic Context Section */}
        <section className={styles.section} style={{ background: '#0a0a0a' }}>
          <div className={styles.container} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className={styles.sectionTitle} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
              Why {cityName} Singles Choose One Night Stand
            </h2>
            <p className={styles.cardText} style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Looking to meet new people in {cityName}? Whether you're in the heart of downtown or exploring local hotspots, One Night Stand makes it easy to connect with active singles nearby who want the same things as you: honest communication, exciting chemistry, and zero drama.
            </p>
            <div className={styles.grid}>
              <div className={styles.card} style={{ border: '1px solid #1a1a1a' }}>
                <div className={styles.cardIcon}>📍</div>
                <h3 className={styles.cardTitle}>Local Matches</h3>
                <p className={styles.cardText}>Filter profiles by exact proximity within {cityName} to meet people nearby.</p>
              </div>
              <div className={styles.card} style={{ border: '1px solid #1a1a1a' }}>
                <div className={styles.cardIcon}>🔒</div>
                <h3 className={styles.cardTitle}>Safe & Private</h3>
                <p className={styles.cardText}>Control your profile visibility and chat securely with local members.</p>
              </div>
              <div className={styles.card} style={{ border: '1px solid #1a1a1a' }}>
                <div className={styles.cardIcon}>✨</div>
                <h3 className={styles.cardTitle}>Verified Profiles</h3>
                <p className={styles.cardText}>Connect with real accounts verified by smart profile detection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Localized Call to Action */}
        <section className={styles.sectionGradientDark}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Ready to start matching in {cityName}?</h2>
            <p className={styles.sectionSubtitle} style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Join thousands of active users in {cityName} today. Swiping is completely free, and local chat rooms are waiting for you.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.quantum.times.technologies.onenightstand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.primaryBtn} style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                Join Singles in {cityName}
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
