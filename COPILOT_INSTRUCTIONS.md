# One Night Stand Web - GitHub Copilot Instructions

## Project Overview

**Project Name:** One Night Stand Web  
**Domain:** https://one-night-stand.co  
**Company:** Zaam Technologies  
**Purpose:** Landing page and web presence for the "One Night Stand" casual dating/hookup mobile app

## Technology Stack

### Core Framework
- **Next.js 15.5.3** (App Router) - React-based full-stack framework
- **React 19.1.0** - UI library with latest concurrent features
- **TypeScript 5** - Type-safe JavaScript development

### UI & Styling
- **Ant Design 5.27.4** - Primary UI component library
- **Custom CSS** - Global styles in `app/globals.css`
- **CSS Modules** - Component-scoped styles in `app/page.module.css`
- **Google Fonts** - Geist and Geist Mono fonts

### Build & Development
- **Turbopack** - Next.js's fast bundler (used in dev and build)
- **ESLint 9** - Code linting and formatting
- **Static Export** - Configured for cPanel hosting

### SEO & Marketing
- **next-seo 7.0.1** - Advanced SEO management
- **next-sitemap 4.2.3** - Dynamic sitemap generation
- Built-in Next.js metadata API for meta tags

## Project Structure



## Key Features & Components

### 1. HeroSection (`components/HeroSection.tsx`)
- **Purpose:** Primary landing section with tagline and CTA
- **Key Elements:** 
  - Main headline: "No drama. No commitments. Just vibes."
  - Google Play Store download button
  - Gradient background (black → #FF3A8A → black)
- **Accessibility:** ARIA labels on buttons

### 2. HowItWorks (`components/HowItWorks.tsx`)
- **Purpose:** Explains app usage in 3 simple steps
- **Steps:** Swipe → Match → Meet
- **Icons:** Ant Design icons (SwapOutlined, HeartOutlined, MessageOutlined)
- **Layout:** Responsive 3-column grid

### 3. Features (`components/Features.tsx`)
- **Purpose:** Highlights key app features
- **Features:**
  - 🕵️ Incognito Mode - Private browsing
  - 🔥 Hotspot Boosts - Location-based visibility
  - ✅ Verified Users - Real profile verification
- **Design:** Card-based layout with emoji icons

### 4. Testimonials (`components/Testimonials.tsx`)
- **Purpose:** Social proof through user reviews
- **Data:** Hard-coded testimonials with names, dates, quotes
- **Components:** Ant Design Card, Avatar components
- **Brand Color:** #FF3A8A for avatars

### 5. Waitlist (`components/Waitlist.tsx`)
- **Purpose:** iOS app pre-launch email collection
- **Form:** Ant Design Form with email validation
- **State:** Client-side component with form handling
- **TODO:** API integration needed for email collection

### 6. Footer (`components/Footer.tsx`)
- **Purpose:** Site navigation, legal links, app badges
- **Sections:**
  - Legal links (Privacy, Terms, etc.)
  - Careers
  - Social media icons
  - FAQ & More
  - App store badges
  - Marketing copy
- **Year:** Dynamic copyright year

## Brand Guidelines

### Colors
- **Primary Brand:** #FF3A8A (Hot Pink)
- **Background:** Black/Dark themes predominantly
- **Gradients:** Black → #FF3A8A → Black
- **Text:** White on dark backgrounds
- **Accents:** Various shades of gray/white with opacity

### Typography
- **Primary Font:** Geist (Google Fonts)
- **Monospace:** Geist Mono
- **Font Loading:** `display: "swap"` for performance

### Tone & Messaging
- **Target Audience:** Adults seeking casual encounters
- **Tone:** Direct, confident, no-nonsense
- **Key Messages:** 
  - "No drama, no commitments, just vibes"
  - Safety and discretion
  - Easy, fast connections

## Configuration Files

### next.config.ts
```typescript
output: "export"         // Static site generation for cPanel
reactStrictMode: true
trailingSlash: true      // SEO-friendly URLs  
images: { unoptimized: true }  // No Next.js image optimization
distDir: 'dist'          // Custom build directory
```

### SEO Configuration (`app/layout.tsx`)
- **Metadata API:** Comprehensive meta tags
- **Open Graph:** Facebook/social sharing
- **Twitter Cards:** Twitter-specific meta
- **App Links:** Deep linking configuration
- **Icons:** Favicon and Apple touch icons
- **Robots:** Search engine directives

## Development Guidelines

### Component Standards
1. **TypeScript:** All components use TypeScript
2. **Ant Design:** Primary UI library - use existing components
3. **Responsive:** Mobile-first responsive design
4. **Accessibility:** Include ARIA labels, semantic HTML
5. **Performance:** Lazy loading, optimized images

### Styling Approach
1. **Inline Styles:** Ant Design components with style props
2. **CSS Modules:** For complex component styles
3. **Global Styles:** Minimal global CSS in `app/globals.css`
4. **Responsive:** Use Ant Design's responsive grid system

### File Naming
- **Components:** PascalCase (e.g., `HeroSection.tsx`)
- **Pages:** lowercase (Next.js App Router convention)
- **Assets:** kebab-case (e.g., `app-store-badge.png`)

### Code Organization
1. **Import Order:** React → Next.js → Third-party → Local
2. **Component Structure:** Props → Component → Export
3. **Inline Styles:** Use Ant Design's style system
4. **Comments:** JSDoc for complex functions

## SEO Strategy

### Current Implementation
- **Meta Tags:** Comprehensive metadata in layout.tsx
- **Structured Data:** Basic Open Graph and Twitter Cards
- **Sitemap:** Dynamic generation in app/sitemap.ts
- **Robots.txt:** Configured in app/robots.ts

### Keywords Focus
- Primary: "casual dating app", "hookup app", "one night stand app"
- Secondary: "no commitments dating", "discreet dating", "swipe match meet"
- Long-tail: Location + feature combinations

### Performance Targets
- **Core Web Vitals:** Optimize for Google's ranking factors
- **Mobile-First:** Primary user base is mobile
- **Loading Speed:** Fast initial page load
- **Offline Support:** PWA capabilities (to be implemented)

## Deployment

### Current Setup
- **Hosting:** cPanel (static file hosting)
- **Build Process:** `npm run build` → static export
- **Domain:** https://one-night-stand.co
- **CI/CD:** Manual deployment currently

### Build Commands
```bash
npm run dev          # Development server with Turbopack
npm run build        # Production build with Turbopack  
npm run deploy       # Build + export (legacy, use build)
npm run start        # Production server
npm run lint         # ESLint checking
```

## Mobile App Integration

### App Store Links
- **Google Play:** `https://play.google.com/store/apps/details?id=com.continuummtechnologies.onenightstand&hl=en`
- **App Store:** iOS app in development (waitlist active)
- **Package ID:** `com.continuummtechnologies.onenightstand`

### Deep Linking
- **URL Scheme:** `onenightstand://`
- **App Store ID:** Placeholder `123456789` (update when published)
- **Fallback:** Web URL for non-app users

## Future Enhancements

### Immediate Priorities (Production-Ready)
1. **PWA Implementation:** Service workers, offline support, installability
2. **Advanced SEO:** Structured data, rich snippets, performance optimization
3. **Analytics:** Google Analytics, Search Console integration
4. **A/B Testing:** Conversion optimization for download CTAs

### Technical Debt
1. **API Integration:** Waitlist form needs backend integration
2. **Image Optimization:** Consider Next.js Image component alternatives
3. **Performance:** Bundle analysis and optimization
4. **Testing:** Unit tests, E2E testing setup

### Content Expansion
1. **Legal Pages:** Privacy policy, terms of service pages
2. **Blog/Resources:** Dating tips, safety guides
3. **Localization:** Multi-language support
4. **Dynamic Content:** CMS integration for testimonials/features

## Development Workflow

### Getting Started
1. `npm install` - Install dependencies
2. `npm run dev` - Start development server
3. Edit components in `components/` directory
4. Update metadata in `app/layout.tsx`
5. Test responsive design on multiple devices

### Adding New Features
1. Create component in `components/` directory
2. Import and use in `app/page.tsx`
3. Follow Ant Design design system
4. Ensure responsive design
5. Add appropriate ARIA labels
6. Test cross-browser compatibility

### SEO Updates
1. Update metadata in `app/layout.tsx`
2. Modify sitemap in `app/sitemap.ts`
3. Update robots.txt in `app/robots.ts`
4. Test with Google Search Console

This document should be updated as the project evolves. Always prioritize user experience, performance, and SEO best practices in development decisions.