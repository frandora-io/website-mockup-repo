# Homepage Redesign — Design Spec

**Date:** 2026-04-10
**Scope:** `src/app/page.tsx`, `src/app/layout.tsx`, new `src/components/TopBanner.tsx`
**Branch:** `main`

---

## Overview

Five targeted additions to the homepage based on client feedback. All existing sections stay untouched. Dark/gold palette (`ink`, `surface`, `cream`, `gold`) and Playfair Display + Inter fonts are preserved throughout.

---

## 1. Top Banner

A thin strip that sits above the existing `<Nav>` on every page.

- **Location:** `src/components/TopBanner.tsx` — imported into `src/app/layout.tsx` above `<Nav />`
- **Links:** Reserve → `/contact`, Order Online → `/order`, Menu → `/menu`, Catering → `/catering`
- **Hover behavior:** On hover, the link's background becomes `rgba(201,164,88,0.12)` and text becomes `gold`. No JS needed — pure CSS hover.
- **Style:** `bg-surface`, `border-b border-border`, text `text-xs tracking-widest uppercase text-cream-muted`. Same visual language as the nav.

---

## 2. Load Popup (Modal)

A modal CTA that fires immediately on page load. Implemented as a client component.

- **Location:** `src/components/PopupCTA.tsx` — imported into `src/app/page.tsx`
- **Trigger:** `useEffect` on mount, sets `isOpen = true`. One-time per session (store dismissal in `sessionStorage` so it doesn't re-fire on navigation back to home).
- **Dismiss:** ✕ button in the top-right corner. Clicking anywhere outside the box (overlay click) also closes it.
- **Content:**
  - Eyebrow: "Now Delivering"
  - Headline: "We Cater to All of New York City"
  - Body: "Order from our Chelsea location for delivery — we can deliver to addresses within a 14-mile radius. No third-party fees."
  - CTA button: "Order Now" → links to `/order`
- **Style:** Dark overlay (`bg-ink/85 backdrop-blur-sm`), modal box in `bg-surface border border-border`, gold CTA button. Matches existing modal pattern used in the order confirmation screen.

---

## 3. Hero — Video Background

Replace the static `<Image>` background in the hero section with an autoplay looping video.

- **Location:** `src/app/page.tsx` — hero section only
- **Implementation:** `<video>` element with `autoPlay muted loop playsInline`, `className="absolute inset-0 w-full h-full object-cover object-center"`. Placeholder `src` uses a free stock video URL (Pexels or similar) — annotated with a comment to swap for real footage.
- **Fallback:** A `<Image>` or `<div>` with the existing Unsplash photo renders behind the video for browsers that block autoplay.
- **Overlay:** The existing `bg-ink/65` overlay div is kept — so the video plays behind it with the same dark effect. All hero text and CTAs stay unchanged.

---

## 4. Google Reviews Section

A static section just above the footer, using placeholder data.

- **Location:** `src/app/page.tsx` — new section inserted between the reservation CTA and the `<Footer />`
- **Content:** 4 placeholder review cards. Each card has: ★★★★★ stars, italic quote, reviewer first name + last initial, small "G" Google badge + "Google Review" label.
- **Layout:** CSS grid, 1 column on mobile → 2 columns at `md` → 4 columns at `lg`.
- **Style:** Section background `bg-surface border-t border-border`, cards in `bg-ink border border-border`. Gold stars (`text-gold`). Same card style as the existing `bg-surface` info panels on the contact page.
- **Note:** Placeholder data is annotated with a comment for replacement with a live Google Places embed or third-party widget.

---

## 5. SEO & Structured Data

Added to `src/app/layout.tsx` (site-wide) and `src/app/page.tsx` (homepage-specific).

- **JSON-LD schema:** `Restaurant` + `LocalBusiness` type. Fields: name, description, url, telephone, address, openingHours, servesCuisine, priceRange. Injected via a `<script type="application/ld+json">` tag in the `<head>` using Next.js `<Script>` or inline in metadata.
- **Existing OpenGraph tags** in `layout.tsx` are already present — no changes needed there.
- **Semantic HTML:** Ensure hero uses `<section aria-label="Hero">`, reviews use `<section aria-label="Customer Reviews">`, etc. Low-effort, high-value for crawlers.

---

## Files Changed

| File | Change |
|------|--------|
| `src/app/layout.tsx` | Add `<TopBanner />` above `<Nav />`, add JSON-LD `<script>` tag |
| `src/app/page.tsx` | Add `<PopupCTA />`, swap hero image for video, add reviews section, add aria labels |
| `src/components/TopBanner.tsx` | New component |
| `src/components/PopupCTA.tsx` | New component (client) |

---

## Out of Scope

- Other pages (About, Menu, Order, Catering, Contact) — deferred
- Live Google Places API integration — placeholder cards only for now
- Real video footage — placeholder URL with swap comment
- Backend connections for any forms — unchanged
