'use client';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { useEffect } from 'react';
import WebVitals, { initPerformanceTracking, optimizeImages } from './WebVitals';

interface AnalyticsProps {
  gaId?: string;
  gtmId?: string;
}

export default function Analytics({ 
  gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX' // Replace with actual GTM ID
}: AnalyticsProps) {
  
  useEffect(() => {
    // Initialize performance tracking
    initPerformanceTracking();
    optimizeImages();

    // Track user engagement
    trackUserEngagement();
    
    // Set up custom event tracking
    setupCustomEventTracking();

    // Track app downloads
    trackAppDownloads();
  }, []);

  return (
    <>
      {/* Google Analytics 4 */}
      <GoogleAnalytics gaId={gaId} />
      
      {/* Google Tag Manager */}
      <GoogleTagManager gtmId={gtmId} />
      
      {/* Web Vitals Tracking */}
      <WebVitals onMetric={sendToAnalytics} />

      {/* Additional tracking scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Enhanced ecommerce tracking for app downloads
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Track custom events
            window.trackEvent = function(eventName, parameters) {
              if (typeof gtag !== 'undefined') {
                gtag('event', eventName, parameters);
              }
            };

            // Track scroll depth
            window.trackScrollDepth = function() {
              const scrollPercentage = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
              );
              
              if (scrollPercentage > 0 && scrollPercentage % 25 === 0) {
                gtag('event', 'scroll_depth', {
                  event_category: 'engagement',
                  event_label: scrollPercentage + '%',
                  value: scrollPercentage
                });
              }
            };
          `,
        }}
      />
    </>
  );
}

function sendToAnalytics(metric: { name: string; value: number; rating: string; delta: number; id: string }) {
  // Send Core Web Vitals to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
      custom_map: {
        'metric_rating': metric.rating,
        'metric_delta': metric.delta
      }
    });
  }
}

function trackUserEngagement() {
  if (typeof window === 'undefined') return;

  // Track time on site
  const startTime = Date.now();
  
  window.addEventListener('beforeunload', () => {
    const timeOnSite = Math.round((Date.now() - startTime) / 1000);
    
    if (window.gtag && timeOnSite > 10) { // Only track if user stayed more than 10 seconds
      window.gtag('event', 'time_on_site', {
        event_category: 'engagement',
        value: timeOnSite,
        non_interaction: true
      });
    }
  });

  // Track scroll depth
  let maxScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercentage > maxScroll) {
      maxScroll = scrollPercentage;
      
      // Track milestone scrolls
      if ([25, 50, 75, 90, 100].includes(scrollPercentage)) {
        if (window.gtag) {
          window.gtag('event', 'scroll_milestone', {
            event_category: 'engagement',
            event_label: scrollPercentage + '%',
            value: scrollPercentage
          });
        }
      }
    }
  });

  // Track page visibility
  document.addEventListener('visibilitychange', () => {
    if (window.gtag) {
      window.gtag('event', document.hidden ? 'page_hidden' : 'page_visible', {
        event_category: 'engagement'
      });
    }
  });
}

function setupCustomEventTracking() {
  if (typeof window === 'undefined') return;

  // Track form interactions
  document.addEventListener('submit', (e) => {
    const form = e.target as HTMLFormElement;
    const formName = form.name || form.id || 'unknown_form';
    
    if (window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: formName,
        form_name: formName
      });
    }
  });

  // Track button clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const button = target.closest('button, [role="button"], a');
    
    if (button) {
      const buttonText = button.textContent?.trim() || 'unknown_button';
      const buttonType = button.getAttribute('type') || 'click';
      
      if (window.gtag) {
        window.gtag('event', 'button_click', {
          event_category: 'engagement',
          event_label: buttonText,
          button_text: buttonText,
          button_type: buttonType
        });
      }
    }
  });

  // Track external link clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href && !link.href.startsWith(window.location.origin)) {
      if (window.gtag) {
        window.gtag('event', 'external_link_click', {
          event_category: 'navigation',
          event_label: link.href,
          link_url: link.href,
          link_text: link.textContent?.trim()
        });
      }
    }
  });
}

function trackAppDownloads() {
  if (typeof window === 'undefined') return;

  // Track app store button clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href) {
      let store = '';
      let platform = '';
      
      if (link.href.includes('play.google.com')) {
        store = 'Google Play';
        platform = 'Android';
      } else if (link.href.includes('apps.apple.com') || link.href.includes('itunes.apple.com')) {
        store = 'App Store';
        platform = 'iOS';
      }
      
      if (store && window.gtag) {
        // Enhanced ecommerce tracking for app downloads
        window.gtag('event', 'app_download_intent', {
          event_category: 'app_engagement',
          event_label: store,
          store_name: store,
          platform: platform,
          app_name: 'One Night Stand'
        });
        
        // Custom conversion tracking
        window.gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with actual conversion tracking ID
          value: 1.0,
          currency: 'USD'
        });
      }
    }
  });
}

// Waitlist signup tracking
export function trackWaitlistSignup(email: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'waitlist_signup', {
      event_category: 'conversion',
      event_label: 'iOS Waitlist',
      user_email_hash: hashEmail(email) // Hash email for privacy
    });
    
    // Custom conversion
    window.gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/WAITLIST_CONVERSION_LABEL', // Replace with actual ID
      value: 0.5,
      currency: 'USD'
    });
  }
}

// Hash email for privacy compliance
function hashEmail(email: string): string {
  // Simple hash function for privacy (use crypto.subtle.digest in production)
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    const char = email.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString();
}

declare global {
  interface Window {
    trackEvent?: (eventName: string, parameters?: Record<string, unknown>) => void;
    trackScrollDepth?: () => void;
  }
}