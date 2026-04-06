# Il Nonno NYC — Website Mockups

Website mockups for **Il Nonno**, a boutique 20-seat Italian restaurant in Astoria, NY. Built with Next.js and Tailwind CSS, deployed to Vercel.

---

## Mockups

Three design directions, each on its own branch and Vercel preview URL:

| Branch | Style | Vibe |
|--------|-------|------|
| `main` | Dark / Moody | Near-black background, gold accents, Playfair Display serif. Intimate and candlelit. Inspired by Gramercy Tavern. |
| `mockup-light` | Light / Editorial | Warm off-white, burgundy accents, Cormorant Garamond + script logo. Airy and magazine-like. Inspired by Prossimo. |
| `mockup-bold` | Bold / Graphic | Warm parchment, tomato-red accents, Syne display font. Big type, asymmetric grids, scrolling marquee. Inspired by Roberta's Pizza. |

---

## Pages

All three mockups include the same 6 pages:

| Route | Page | What's there |
|-------|------|-------------|
| `/` | Home | Hero, brand story, menu teaser, photo grid, catering CTA, reservation banner |
| `/about` | Our Story | Brand narrative, photography, values |
| `/menu` | Menu | Full seasonal menu — antipasti, pasta, secondi, dolci |
| `/order` | Online Ordering | 3-step cart flow, pickup only, no third-party fees |
| `/catering` | Catering & Events | Quote request form with event type, guest count, date |
| `/contact` | Reservations | Reservation form — date, time, party size, special requests |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:**
  - `main` — Playfair Display + Inter
  - `mockup-light` — Cormorant Garamond + Great Vibes (script) + Inter
  - `mockup-bold` — Syne + DM Sans
- **Images:** Unsplash placeholders — to be replaced with real photography
- **Deployment:** Vercel (auto-deploys each branch as a preview URL)

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To preview a specific mockup locally:

```bash
git checkout main          # dark/moody
git checkout mockup-light  # light/editorial
git checkout mockup-bold   # bold/graphic
npm run dev
```

---

## What Needs to Be Replaced Before Launch

- [ ] Unsplash placeholder images → real restaurant photography
- [ ] Phone number, email, and address → actual contact info
- [ ] Menu items and prices → confirmed menu
- [ ] Hours → confirmed operating hours
- [ ] Reservation form → connect to booking system or backend
- [ ] Order form → connect to backend for real order handling
- [ ] Catering form → connect to email or CRM
- [ ] Logo → upload actual Il Nonno logo asset
- [ ] Domain → point `ilnonnonyc.com` to Vercel deployment
