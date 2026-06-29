# Now or Never Hack 2026

Premium landing site for **Now or Never Hack 2026** — organised by **The Innovation Story** in collaboration with **Artpark IISc Bengaluru**.

## Stack

- React 19 + TypeScript
- TanStack Start (Vite 7) — file-based routing
- Tailwind CSS v4
- Framer Motion for animations
- shadcn/ui primitives

## Getting started

```bash
npm install
npm run dev
```

The site runs at <http://localhost:8080>.

### Build

```bash
npm run build
npm run preview
```

## Configuration

Site-wide constants live in [`src/lib/site.ts`](src/lib/site.ts):

- `REGISTER_URL` — external registration link (currently a placeholder).
- `REGISTRATION_CLOSE_DATE` — ISO date used by the hero countdown.
- `CONTACT_EMAIL` / `SOCIAL` — footer contact + social links.

Update those values to point at the live registration portal and event date.

## Structure

```
src/
  routes/
    __root.tsx        # HTML shell + site-wide meta
    index.tsx         # Landing page (composes all sections)
  components/
    Nav.tsx           # Sticky blur-on-scroll navigation
    Hero.tsx          # Hero + countdown
    Brief.tsx         # The Brief / About
    Domains.tsx       # Body · Machine · Planet (expandable)
    WhoAndProcess.tsx # Who Should Participate + How It Works timeline
    Awards.tsx        # Prizes + judging criteria
    FAQ.tsx           # Accordion
    Partners.tsx      # Organisers + domain partners
    FinalCTA.tsx      # Closing register block
    Footer.tsx        # Footer
  lib/site.ts         # Configurable site constants
  styles.css          # Design tokens (deep navy + electric blue)
```

This is a **static front-end only** — no backend, auth, or CMS. The Register CTA simply opens the configured external URL.
