# ASHQ — Merchant Export Website

A premium, responsive B2B export website for ASHQ, a Mumbai-based imitation jewellery merchant export firm.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/ashq-website run dev` — run the frontend (port 20394)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4
- Routing: wouter
- Animations: framer-motion
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (not used in current build)
- Build: esbuild (CJS bundle for API)

## Where things live

- `artifacts/ashq-website/src/pages/` — all page components (Home, About, Products, ExportServices, WhyUs, Gallery, Contact)
- `artifacts/ashq-website/src/components/layout/` — Navbar, Footer, WhatsAppButton, LoadingScreen, ThemeProvider
- `artifacts/ashq-website/src/index.css` — design tokens (navy/gold/emerald theme, Playfair Display + Inter fonts)
- `lib/api-spec/openapi.yaml` — API contract source of truth

## Product

ASHQ is a Mumbai-based proprietorship merchant export firm. The website:
- Full-width premium hero with animated entrance
- 7 pages: Home, About, Products, Export Services, Why Us, Gallery, Contact
- Animated statistics counters on scroll
- Interactive product category grid with filter tabs
- SVG world map with animated export destination markers
- Testimonials from international buyers
- Masonry gallery with lightbox
- Contact + export inquiry forms with validation
- Floating WhatsApp button
- Dark mode toggle with localStorage persistence
- Professional loading screen
- Sticky glassmorphic navbar

## Color Scheme
- Primary: Deep Navy Blue #0A2342
- Secondary: Rich Gold #D4AF37
- Accent: Emerald Green #0E8A6A
- Background: White + Soft Grey #F8F9FA

## Architecture decisions
- Presentation-first: no backend API needed for the website
- framer-motion for all animations (scroll-triggered, counter, hover)
- react-icons/si for WhatsApp icon; lucide-react for all other icons
- wouter for client-side routing
- react-hook-form + zod for form validation

## User preferences

_Populate as needed_

## Gotchas

- react-icons v5 does not export `SiLinkedin` or `SiInstagram` — use lucide-react's `Linkedin` and `Instagram` instead
- Google Fonts @import must be the VERY FIRST line in index.css before all other imports
- Always run `pnpm --filter @workspace/api-spec run codegen` after OpenAPI spec changes

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
