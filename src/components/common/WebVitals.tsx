'use client';

import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface Metric {
  name: string;
  value: number;
  rating: string;
  delta: number;
  id: string;
}

interface WebVitalsProps {
  onMetric?: (metric: Metric) => void;
}

export default function WebVitals({ onMetric }: WebVitalsProps) {
  useEffect(() => {
    // Track Core Web Vitals
    onCLS(onMetric || logMetric);
    onINP(onMetric || logMetric); // Replaces FID in newer web-vitals
    onFCP(onMetric || logMetric);
    onLCP(onMetric || logMetric);
    onTTFB(onMetric || logMetric);
  }, [onMetric]);

  return null;
}

function logMetric(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Send to Google Analytics 4
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', metric.name, {
        custom_parameter_name: 'web_vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Send to other analytics services
    if (typeof window !== 'undefined' && window.analytics && window.analytics.track) {
      window.analytics.track('Web Vital', {
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
      });
    }

    // Send to custom endpoint for detailed tracking
    if (typeof window !== 'undefined') {
      fetch('/api/web-vitals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: Date.now(),
        }),
      }).catch((error) => {
        // Silently handle errors to avoid impacting user experience
        console.warn('Failed to send web vitals:', error);
      });
    }
  }
}

// Performance Observer for additional metrics
export function initPerformanceTracking() {
  if (typeof window === 'undefined') return;

  // Track navigation timing
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigation) {
    const metrics = {
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      request: navigation.responseStart - navigation.requestStart,
      response: navigation.responseEnd - navigation.responseStart,
      dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      load: navigation.loadEventEnd - navigation.loadEventStart,
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('Navigation Timing:', metrics);
    }
  }

  // Track resource loading performance
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'resource') {
        const resource = entry as PerformanceResourceTiming;
        
        // Track slow loading resources
        if (resource.duration > 1000) {
          console.warn('Slow resource detected:', {
            name: resource.name,
            duration: resource.duration,
            size: resource.transferSize,
            type: resource.initiatorType,
          });
        }
      }
    }
  });

  observer.observe({ entryTypes: ['resource'] });

  // Track memory usage (Chrome only)
  if ('memory' in performance) {
    interface PerformanceMemory {
      usedJSHeapSize: number;
      totalJSHeapSize: number;
      jsHeapSizeLimit: number;
    }
    
    const performanceWithMemory = performance as Performance & { memory?: PerformanceMemory };
    const memory = performanceWithMemory.memory;
    
    if (memory) {
      const memoryInfo = {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit,
      };
    
      if (process.env.NODE_ENV === 'development') {
        console.log('Memory Usage:', memoryInfo);
      }
    }
  }
}

// Image loading optimization
export function optimizeImages() {
  if (typeof window === 'undefined') return;

  // Add intersection observer for lazy loading fallback
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  // Observe all images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });

  // Preload critical images
  const criticalImages = [
    '/apple-touch-icon.png',
    '/appstore-badge.png', 
    '/googleplay-badge.png',
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    analytics?: {
      track: (event: string, properties?: Record<string, unknown>) => void;
    };
  }
}