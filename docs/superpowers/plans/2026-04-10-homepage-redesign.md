# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a top banner, load popup, video hero, Google reviews section, and JSON-LD schema to the homepage without touching any other pages or existing sections.

**Architecture:** Two new components (`TopBanner`, `PopupCTA`) are added alongside edits to `layout.tsx` and `page.tsx`. All new UI uses the existing Tailwind design tokens (`ink`, `surface`, `cream`, `gold`, `border`) so no new CSS is introduced.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS, `next/link`, `next/image`

---

> **Note on testing:** This project has no test infrastructure configured. Verification for each task is done visually with `npm run dev` at `http://localhost:3000`.

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/components/TopBanner.tsx` | Create | Thin banner strip above nav with 4 hover-highlight links |
| `src/components/PopupCTA.tsx` | Create | Load popup modal, sessionStorage dismiss, catering promo |
| `src/app/layout.tsx` | Modify | Import TopBanner (above Nav), add JSON-LD script tag |
| `src/app/page.tsx` | Modify | Import PopupCTA, swap hero image → video, add reviews section, add aria labels |

---

## Task 1: TopBanner Component

**Files:**
- Create: `src/components/TopBanner.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/TopBanner.tsx
import Link from "next/link";

const bannerLinks = [
  { label: "Reserve", href: "/contact" },
  { label: "Order Online", href: "/order" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
];

export default function TopBanner() {
  return (
    <div className="bg-surface border-b border-border">
      <div className="flex justify-center">
        {bannerLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-7 py-2.5 text-xs tracking-widest uppercase text-cream-muted hover:bg-gold/10 hover:text-gold transition-colors${
              i < bannerLinks.length - 1 ? " border-r border-border" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add TopBanner to layout.tsx**

Open `src/app/layout.tsx`. Add the import and place `<TopBanner />` directly above `<Nav />`:

```tsx
import TopBanner from "@/components/TopBanner";
// existing imports stay unchanged
```

In the JSX, change:
```tsx
<body className="bg-ink text-cream font-sans antialiased">
  <Nav />
  <main>{children}</main>
  <Footer />
</body>
```
to:
```tsx
<body className="bg-ink text-cream font-sans antialiased">
  <TopBanner />
  <Nav />
  <main>{children}</main>
  <Footer />
</body>
```

- [ ] **Step 3: Verify**

Run `npm run dev`. Open `http://localhost:3000`. Confirm:
- A thin dark strip appears above the nav with Reserve / Order Online / Menu / Catering
- Hovering a link shows a gold background tint and gold text
- Each link navigates to the correct page

- [ ] **Step 4: Commit**

```bash
git add src/components/TopBanner.tsx src/app/layout.tsx
git commit -m "feat: add top banner with hover-highlight nav links"
```

---

## Task 2: PopupCTA Component

**Files:**
- Create: `src/components/PopupCTA.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/PopupCTA.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function PopupCTA() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("popup-dismissed")) {
      setIsOpen(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("popup-dismissed", "1");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="relative bg-surface border border-border max-w-md w-[90%] p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-5 text-cream-muted hover:text-cream transition-colors text-lg leading-none"
          aria-label="Close"
        >
          ✕
        </button>
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
          Now Delivering
        </p>
        <h2 className="font-serif text-2xl text-cream mb-4 leading-snug">
          We Cater to All of New York City
        </h2>
        <p className="text-cream-muted text-sm leading-relaxed mb-6">
          Order from our Chelsea location for delivery — we can deliver to
          addresses within a 14-mile radius. No third-party fees.
        </p>
        <Link
          href="/order"
          onClick={dismiss}
          className="inline-block text-sm tracking-widest uppercase bg-gold text-ink px-8 py-3 hover:bg-gold-dark transition-colors"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Import PopupCTA into page.tsx**

Open `src/app/page.tsx`. Add the import at the top:

```tsx
import PopupCTA from "@/components/PopupCTA";
```

Add `<PopupCTA />` as the very first element inside the fragment, before the hero section:

```tsx
export default function Home() {
  return (
    <>
      <PopupCTA />

      {/* HERO */}
      <section className="relative min-h-screen ...">
```

- [ ] **Step 3: Verify**

Run `npm run dev`. Open `http://localhost:3000` in a fresh browser tab (or clear sessionStorage via DevTools → Application → Session Storage → clear). Confirm:
- Popup appears immediately on load with dark overlay
- ✕ button closes it
- Clicking the overlay outside the box also closes it
- Clicking "Order Now" navigates to `/order`
- Reloading the page after dismissal does NOT re-show the popup (sessionStorage key is set)
- Opening a new tab resets and shows the popup again

- [ ] **Step 4: Commit**

```bash
git add src/components/PopupCTA.tsx src/app/page.tsx
git commit -m "feat: add load popup with catering CTA and sessionStorage dismiss"
```

---

## Task 3: Hero Video Background

**Files:**
- Modify: `src/app/page.tsx` (hero section only)

- [ ] **Step 1: Replace hero image with video + fallback**

Open `src/app/page.tsx`. Find the hero section (around line 8). Replace the `<Image>` background element with this pattern — the image sits behind the video as a fallback for browsers that block autoplay:

Replace:
```tsx
<Image
  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
  alt="Il Nonno dining room"
  fill
  priority
  className="object-cover object-center"
/>
```

With:
```tsx
{/* Fallback image — shown if video cannot autoplay */}
<Image
  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
  alt="Il Nonno dining room"
  fill
  priority
  className="object-cover object-center"
/>
{/* Hero video — replace src with real footage before launch */}
<video
  autoPlay
  muted
  loop
  playsInline
  aria-hidden="true"
  className="absolute inset-0 w-full h-full object-cover object-center"
>
  {/* TODO: Replace with real video URL before launch */}
  <source
    src="https://assets.mixkit.co/videos/preview/mixkit-people-eating-in-a-restaurant-4226-large.mp4"
    type="video/mp4"
  />
</video>
```

- [ ] **Step 2: Verify**

Run `npm run dev`. Open `http://localhost:3000`. Confirm:
- A looping video plays in the hero background (muted, no controls)
- The dark overlay and all hero text/buttons sit on top and are fully readable
- The Unsplash image is visible briefly before the video loads (fallback working)
- No layout shift or white flash

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: replace hero static image with autoplay video background"
```

---

## Task 4: Google Reviews Section

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add the reviews section to page.tsx**

Open `src/app/page.tsx`. Find the final `{/* RESERVATION CTA */}` section (the last section before the closing `</>`). Add the reviews section immediately after the reservation CTA section and before the closing `</>`:

```tsx
      {/* GOOGLE REVIEWS */}
      {/* TODO: Replace placeholder cards with live Google Places embed or widget before launch */}
      <section
        aria-label="Customer Reviews"
        className="py-24 px-6 bg-surface border-t border-border"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 text-center">
            What Our Guests Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-12 text-center">
            Loved by New York
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Maria T.",
                quote:
                  "Best pasta I've had outside of Rome. Intimate, warm, and totally unpretentious.",
              },
              {
                name: "James R.",
                quote:
                  "Hidden gem in Astoria. The cacio e pepe alone is worth the trip from anywhere in the city.",
              },
              {
                name: "Sofia L.",
                quote:
                  "We've been coming every month since we found this place. The staff remembers your name.",
              },
              {
                name: "David K.",
                quote:
                  "Catered our anniversary dinner. Flawless experience from start to finish.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-ink border border-border p-6 flex flex-col gap-4"
              >
                <p className="text-gold tracking-widest">★★★★★</p>
                <p className="text-cream-muted text-sm leading-relaxed italic flex-1">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div>
                  <p className="text-cream text-xs tracking-widest uppercase mb-1">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#4285F4] text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-sm">
                      G
                    </span>
                    <span className="text-cream-muted text-xs tracking-wide">
                      Google Review
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Verify**

Run `npm run dev`. Open `http://localhost:3000`. Scroll to the bottom. Confirm:
- Reviews section appears between the reservation CTA and the footer
- 4 cards in a row on large screens, 2×2 on medium, stacked on mobile
- Gold stars, italic quote, reviewer name, small blue Google G badge on each card
- Background is `bg-surface`, cards are `bg-ink` — matches the site palette

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add Google reviews section with placeholder cards"
```

---

## Task 5: JSON-LD Schema + Semantic Aria Labels

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add JSON-LD to layout.tsx**

Open `src/app/layout.tsx`. Add a `<head>` block with the JSON-LD script between `<html>` and `<body>`:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: "Il Nonno NYC",
    description:
      "An intimate 20-seat Italian restaurant in Astoria, NY. Elevated but never pretentious — rooted in family, legacy, and the art of a proper meal.",
    url: "https://www.ilnonnonyc.com",
    telephone: "+17181234567",
    email: "hello@ilnonnonyc.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Astoria",
      addressRegion: "NY",
      addressCountry: "US",
    },
    servesCuisine: "Italian",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday"],
        opens: "17:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "17:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "16:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="bg-ink text-cream font-sans antialiased">
        <TopBanner />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Add aria labels to homepage sections**

Open `src/app/page.tsx`. Add `aria-label` attributes to the major sections. Find each section comment and add the label to the opening `<section>` tag:

```tsx
{/* HERO */}
<section aria-label="Hero" className="relative min-h-screen ...">

{/* INTRO STRIP */}
<section aria-label="Restaurant Highlights" className="bg-surface ...">

{/* STORY SECTION */}
<section aria-label="Our Story" className="py-24 ...">

{/* ATMOSPHERE GRID */}
<section aria-label="Atmosphere" className="py-4 ...">

{/* MENU TEASER */}
<section aria-label="Menu Preview" className="py-24 ...">

{/* CATERING CTA */}
<section aria-label="Catering" className="relative py-28 ...">

{/* RESERVATION CTA */}
<section aria-label="Reservations" className="py-24 ...">

{/* GOOGLE REVIEWS — already has aria-label from Task 4 */}
```

- [ ] **Step 3: Verify schema**

Run `npm run dev`. Open `http://localhost:3000`. Open browser DevTools → Elements → `<head>`. Confirm a `<script type="application/ld+json">` tag is present with the restaurant JSON. 

Optionally paste the page URL into Google's Rich Results Test (`https://search.google.com/test/rich-results`) to validate the schema.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat: add JSON-LD restaurant schema and semantic aria labels"
```

---

## Final Verification Checklist

Run `npm run dev` and walk through the homepage:

- [ ] Top banner visible above nav with 4 hover-highlight links
- [ ] Popup fires on fresh page load, dismisses with ✕ or overlay click, does not re-fire on same session
- [ ] Hero shows looping video (or fallback image if video URL is unavailable)
- [ ] All existing homepage sections (intro strip, story, photo grid, menu teaser, catering CTA, reservation CTA) are visually unchanged
- [ ] Google reviews section appears above the footer with 4 cards
- [ ] `npm run build` completes with no errors
- [ ] `npm run lint` passes clean
