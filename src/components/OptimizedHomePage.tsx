import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load components that are not critical for initial render
const Features = dynamic(() => import('./Features'), {
  loading: () => (
    <div style={{ 
      height: '400px', 
      background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
      Loading features...
    </div>
  ),
  ssr: true, // Enable SSR for SEO
});

const Testimonials = dynamic(() => import('./Testimonials'), {
  loading: () => (
    <div style={{ 
      height: '300px', 
      background: 'linear-gradient(to bottom, #1a1a1a, #000000)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
      Loading testimonials...
    </div>
  ),
  ssr: true,
});

const Waitlist = dynamic(() => import('./Waitlist'), {
  loading: () => (
    <div style={{ 
      height: '250px', 
      background: 'linear-gradient(to bottom, #1a1a1a, #000000)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
      Loading waitlist...
    </div>
  ),
  ssr: true,
});

const Footer = dynamic(() => import('./Footer'), {
  loading: () => (
    <div style={{ 
      height: '200px', 
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      Loading footer...
    </div>
  ),
  ssr: true,
});

// Critical components that should load immediately
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';

export default function OptimizedHomePage() {
  return (
    <main>
      {/* Critical above-the-fold content */}
      <HeroSection />
      <HowItWorks />
      
      {/* Lazy loaded below-the-fold content */}
      <Suspense fallback={
        <div style={{ 
          height: '400px', 
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}>
          Loading content...
        </div>
      }>
        <Features />
      </Suspense>
      
      <Suspense fallback={
        <div style={{ 
          height: '300px', 
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}>
          Loading testimonials...
        </div>
      }>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={
        <div style={{ 
          height: '250px', 
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}>
          Loading waitlist...
        </div>
      }>
        <Waitlist />
      </Suspense>
      
      <Suspense fallback={
        <div style={{ 
          height: '200px', 
          background: '#fff'
        }}>
          Loading footer...
        </div>
      }>
        <Footer />
      </Suspense>
    </main>
  );
}