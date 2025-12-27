# Product Requirements Document (PDR)
## One Night Stand – Legal Pages & Consent UX

### Product
One Night Stand (Consumer Social Platform)

### Ownership
- **Owner:** Match Mate Group (Consumer Social Products)
- **Development:** Quantum Times Technologies

## 1. Objective
Implement legally compliant, user-friendly Privacy Policy and Terms of Use pages aligned with industry leaders (Tinder, Bumble).

## 2. Scope
- Privacy Policy page
- Terms of Use page
- Cookie & consent management UI
- Policy versioning and updates

## 3. Functional Requirements
### 3.1 Routes
- /privacy
- /terms

### 3.2 Rendering
- Markdown-based rendering
- Table of contents with anchor links
- "Last Updated" and version display

### 3.3 Consent Management
- Cookie consent banner (Accept / Manage)
- Store consent state locally
- Allow users to update preferences

### 3.4 Accessibility & UX
- Mobile-first responsive design
- WCAG-compliant contrast and fonts
- Expandable/accordion sections

## 4. Non-Functional Requirements
- SEO metadata
- Fast load time
- Secure delivery (HTTPS)

## 5. Analytics & Compliance
- Load analytics only after consent
- Log consent version per user

## 6. Change Management
- Policies stored as versioned markdown files
- UI notification on material updates

## 7. Acceptance Criteria
- Legal pages accessible without login
- Consent banner appears on first visit
- Policies render correctly on all devices
