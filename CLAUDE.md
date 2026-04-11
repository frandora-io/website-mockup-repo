# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website mockups for **Il Nonno NYC**, a boutique 20-seat Italian restaurant in Astoria, NY. Three design directions live on separate branches, all sharing the same page structure.

| Branch | Style |
|--------|-------|
| `main` | Dark/Moody — near-black (`ink`), gold accents, Playfair Display |
| `mockup-light` | Light/Editorial — warm off-white, burgundy, Cormorant Garamond + script |
| `mockup-bold` | Bold/Graphic — parchment, tomato-red, Syne display font |

## Commands

```bash
npm install       # install deps
npm run dev       # dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

No tests are configured.

## Architecture

Next.js 16 App Router with Tailwind CSS. All pages are under `src/app/`, shared UI in `src/components/` (only `Nav` and `Footer`).

**Pages:** `/` (home), `/about`, `/menu`, `/order`, `/catering`, `/contact`

**Theming (main branch):** Custom colors and fonts are defined in `tailwind.config.ts` — use semantic tokens (`ink`, `cream`, `gold`, `surface`, `border`) rather than raw hex values. Fonts are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables (`--font-playfair`, `--font-inter`), then aliased in Tailwind as `font-serif` and `font-sans`.

**Forms are static mockups** — reservation, order, and catering forms have no backend connections. All content (menu items, prices, hours, contact info) uses placeholder data.

**Images** use Unsplash placeholder URLs — to be replaced with real photography before launch.
