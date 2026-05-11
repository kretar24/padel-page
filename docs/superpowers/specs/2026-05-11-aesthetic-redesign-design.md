# Epic Padel — Aesthetic Redesign Spec
**Date:** 2026-05-11  
**Scope:** Visual/aesthetic overhaul only — no content or structural changes

---

## 1. Goal

Migrate the landing page from a dark navy + lime aesthetic to a bright blue + white sports aesthetic, matching the reference image provided by the user. All text content, section order, and component structure remain unchanged.

---

## 2. Color Palette

| Token | Old value | New value | Usage |
|---|---|---|---|
| `--color-blue` | — | `#1B4FD8` | Primary backgrounds (hero, dark sections, navbar solid) |
| `--color-blue-dark` | — | `#1340B5` | Hover states on blue buttons |
| `--color-blue-light` | — | `#EEF3FF` | Alternate section backgrounds (light sections) |
| `--color-navy` removed | `#13192C` | → replaced by `blue` | — |
| `--color-navy-light` removed | `#1C2235` | → replaced by `blue-light` | — |
| `--color-line` | `#252D42` | `#CBD5E1` | Borders and dividers on light sections; `rgba(255,255,255,0.15)` on dark sections |
| `--color-muted` | `#8591A8` | `#64748B` | Muted text on light sections; `rgba(255,255,255,0.6)` on dark |
| `--color-lime` | `#C8F135` | `#C8F135` | **Kept** — used for CTA buttons and key accents |
| `--color-lime-dark` | `#a8cc1a` | `#a8cc1a` | **Kept** — hover on lime buttons |
| `--color-accent-ink` | `#121909` | `#121909` | **Kept** — text on lime buttons |
| Body text (dark sections) | `#F0EFE9` | `#FFFFFF` | White on blue |
| Body text (light sections) | — | `#1A1A2E` | Near-black on white/blue-light |

---

## 3. Typography

No changes. Continue using:
- **Barlow Condensed** (heading) — extrabold for hero and section titles
- **Inter** (body) — regular/medium for paragraphs
- **JetBrains Mono** (mono) — small labels and section counters

Section counter style (e.g. `(01) Por qué Epic Padel`): keep mono style, update color to `blue` on light sections, `rgba(255,255,255,0.5)` on dark sections.

---

## 4. Section-by-Section Changes

### Navbar
- Transparent over hero (hero is blue, so navbar effectively invisible until scroll)
- On scroll: `bg-white/90 backdrop-blur-md border-b border-slate-200` (white solid)
- Logo text: `EPIC` in blue, `PADEL` in lime (keeps contrast on white)
- Nav links: `text-slate-600 hover:text-blue` on white navbar; `text-white/80 hover:text-white` on transparent
- CTA button: lime pill, unchanged
- Mobile menu: white background, blue text

### Hero
- Background: `bg-blue` (solid blue `#1B4FD8`)
- Add full-bleed Unsplash padel image as `object-cover` background with `bg-blend-multiply opacity-30` overlay so blue still dominates
- Heading: white, same size clamp
- `GRECIA.` accent: lime (unchanged)
- Subtext: `text-white/70`
- Stat pills: `bg-white/10 border border-white/20`
- SVG court illustration: strokes white (instead of lime) with white fill dots
- Grid overlay: `rgba(255,255,255,0.04)` lines

### WhyEpic (Por qué Epic Padel)
- Background: `bg-blue-light` (`#EEF3FF`)
- Section counter: `text-blue`
- Heading: `text-[#1A1A2E]`, `EPIC PADEL` accent in blue
- Feature cards: `bg-white border border-slate-200 rounded-xl shadow-sm`
- Icon stroke: blue (`#1B4FD8`)
- Card title: `text-[#1A1A2E]`
- Card body: `text-slate-500`

### Courts (Canchas)
- Background: `bg-white`
- Heading accent `PROFESIONALES`: blue
- Court cards: `bg-blue-light border border-slate-200`
- SVG court: strokes in blue
- `Indoor` badge: `bg-slate-100 text-slate-500`
- `Disponible` badge: `bg-lime/20 text-[#1A1A2E] border-lime/30`
- CTA button: lime, unchanged

### Pozos
- Background: `bg-blue-light` (alternates after Courts white)
- Same pattern: dark heading `text-[#1A1A2E]`, blue accents, `border-slate-200`

### Store
- Background: `bg-white`
- Same pattern

### HowToBook
- Background: `bg-blue-light`
- Step numbers / accent: blue

### Location
- Background: `bg-white`

### Instagram
- Background: `bg-blue-light`

### ComunidadWhatsApp
- Background: `bg-white`
- WhatsApp green button stays green (brand color, don't change)

> All of the above: headings `text-[#1A1A2E]`, muted text `text-slate-500`, borders `border-slate-200`, lime for CTA buttons, blue for non-button accents currently using lime.

### Pricing
- Background: `bg-blue-light`
- Featured card: `bg-blue text-white border-blue shadow-blue/20`
- Non-featured card: `bg-white border-slate-200`
- Price number: lime on featured, blue on non-featured
- Badges: lime pill stays on featured

### FinalCTA
- Background: `bg-blue` (switches from lime to blue)
- Text: white (switches from dark on lime to white on blue)
- Grid overlay: `rgba(255,255,255,0.04)`
- Primary button: lime (high contrast on blue)
- Secondary button: `border-white/30 text-white hover:border-white`

### Footer
- Background: `bg-[#0F2F8A]` (darker blue)
- Text: white/muted

---

## 5. Images

Use Unsplash free-to-use padel images via `https://images.unsplash.com` (direct URL, no API key needed for display). Apply via Next.js `<Image>` component with `fill` and `object-cover`.

Key placements:
- **Hero**: full-section background image (padel court or action shot), blue overlay
- **FinalCTA**: background image (players on court), blue overlay

No image placement needed for other sections (cards use color backgrounds).

---

## 6. What Does NOT Change

- All text content (copy, prices, URLs, phone numbers)
- Section order in `page.tsx`
- Component file names and structure
- Font families
- Framer Motion animations (timings and variants stay the same)
- Lime color for all CTA buttons
- SEO metadata in `layout.tsx`

---

## 7. Files to Touch

1. `src/app/globals.css` — update `@theme` color tokens, body background
2. `src/app/layout.tsx` — update body className (remove `bg-navy`)
3. `src/components/Navbar.tsx` — scroll behavior, colors
4. `src/components/Hero.tsx` — blue bg, image background, icon colors
5. `src/components/WhyEpic.tsx` — light bg, blue accents
6. `src/components/Courts.tsx` — white bg, blue SVG
7. `src/components/Pricing.tsx` — featured card blue, light bg
8. `src/components/FinalCTA.tsx` — blue bg, white text, lime button
9. `src/components/Pozos.tsx` — alternate bg, blue accents
10. `src/components/Store.tsx` — alternate bg, blue accents
11. `src/components/HowToBook.tsx` — alternate bg, blue accents
12. `src/components/Location.tsx` — alternate bg
13. `src/components/Instagram.tsx` — alternate bg
14. `src/components/ComunidadWhatsApp.tsx` — alternate bg
15. `src/components/Footer.tsx` — dark blue bg
