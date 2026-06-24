# Theraptly — Landing Page

Marketing landing page for **Theraptly**, an all‑in‑one LMS for behavioral‑health and care organizations — staff training, certifications, timestamped completion records, and audit‑ready inspection documentation.

Built from a Figma design, section by section.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Fonts:** Clash Display (display) + Satoshi (body) via Fontshare

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
src/
  app/                 # App Router entry (layout, page, globals.css)
  components/
    ui/                # Reusable primitives (Button, Logo, Section, Badge, …)
    sections/          # Page sections (Hero, Features, Problems, Solution, …)
    Navbar, Footer, Accordion, StepsSlider, RotatingWord
  lib/                 # Small helpers (cn)
public/                # Section image/SVG assets
```

## Sections

Navbar · Hero · Features · Problems · Our Solution · How it works (slider) ·
Our Advantage · Specific features (accordion) · Call to action · Footer

Every section is fully responsive (mobile / tablet / desktop) and built on a
shared, reusable component layer.
