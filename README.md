# Il Nonno NYC — Website Mockups

Website mockups for **Il Nonno**, a boutique 20-seat Italian restaurant in Astoria, NY. Built with Next.js and Tailwind CSS, deployed to Vercel.

---

## Mockups

Two design directions are in progress, each on its own branch:

| Branch | Style | Description |
|--------|-------|-------------|
| `main` | Dark / Moody | Near-black background, gold accents, Playfair Display serif. Intimate and candlelit. |
| `mockup-light` | Light / Editorial | Warm off-white, burgundy accents, Cormorant Garamond + script logo. Airy and magazine-like. |

Each branch deploys automatically to a Vercel preview URL on push.

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, story, menu teaser, catering CTA |
| `/about` | Our Story — brand narrative, values |
| `/menu` | Seasonal menu — antipasti, pasta, secondi, dolci |
| `/order` | Online ordering — 3-step cart, pickup only, no third party |
| `/catering` | Private events — quote request form |
| `/contact` | Reservations — date, time, party size form |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Playfair Display / Cormorant Garamond / Great Vibes / Inter)
- **Images:** Unsplash placeholders — to be replaced with real photography
- **Deployment:** Vercel

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Switching Between Mockups

```bash
# Dark/moody version
git checkout main

# Light/editorial version
git checkout mockup-light
```

---

## What Needs to Be Replaced Before Launch

- [ ] Unsplash placeholder images → real restaurant photography
- [ ] Phone number, email, and address → actual contact info
- [ ] Menu items and prices → confirmed menu
- [ ] Reservation form → connect to backend or booking system (e.g. Resy, OpenTable, or custom)
- [ ] Order form → connect to backend for real order handling
- [ ] Catering form → connect to email or CRM
- [ ] Logo → upload actual Il Nonno logo asset
- [ ] Domain → point `ilnonnonyc.com` to Vercel deployment
