# Epic Padel Landing Page — Design Spec

**Date:** 2026-04-20  
**Status:** Approved

---

## Overview

A production-ready, single-page marketing site for **Epic Padel** — the first and only padel club in Grecia, Alajuela, Costa Rica. Goal: drive WhatsApp reservations and establish premium brand presence locally.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first, no tailwind.config.ts) |
| Animation | Framer Motion |
| Fonts | next/font/google — Bebas Neue + Inter |
| React | 19.2.4 |

**Install before building:** `npm install framer-motion`  
**Skip:** shadcn/ui — all UI built with Tailwind custom components.

---

## Brand Tokens

Defined in `src/app/globals.css` via Tailwind v4 `@theme`:

```css
--color-navy: #0A0E1A      /* base background */
--color-lime: #C8F135      /* primary accent */
--color-white: #FFFFFF
--color-navy-light: #141929  /* card backgrounds */
--font-heading: Bebas Neue
--font-body: Inter
```

---

## Business Info

- **Club:** Epic Padel
- **Location:** Canchas en Creta, Grecia, Alajuela, Costa Rica
- **Phone/WhatsApp:** +506 8952-7591
- **Hours:** 3:00 PM – 10:00 PM, every day
- **Courts:** 3 professional padel courts
- **Pricing:**
  - Before 4:00 PM: $30/hour per court
  - After 4:00 PM: $40/hour per court (split among 4 players)
- **WhatsApp URL:** `https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha`
- **Phone link:** `tel:+50689527591`

---

## File Structure

```
src/
  app/
    layout.tsx         ← root layout: fonts, metadata export, JSON-LD LocalBusiness schema
    page.tsx           ← server component assembling all sections
    globals.css        ← @import "tailwindcss" + @theme brand tokens + base styles
  components/
    Navbar.tsx         ← client component (scroll state, mobile menu state)
    Hero.tsx           ← client component (Framer Motion, stat badges)
    WhyEpic.tsx        ← client component (Framer Motion useInView)
    Courts.tsx         ← client component (Framer Motion useInView)
    Pricing.tsx        ← client component (Framer Motion useInView)
    HowToBook.tsx      ← client component (Framer Motion useInView)
    Location.tsx       ← client component (Framer Motion useInView)
    FinalCTA.tsx       ← client component (Framer Motion useInView)
    Footer.tsx         ← server component (static)
```

---

## Sections

### 1. Navbar
- Sticky, `position: fixed`, full width
- Default: transparent; on scroll (`scrollY > 50`): glass morphism (`backdrop-blur`, semi-transparent navy)
- Left: wordmark "EPIC **PADEL**" in Bebas Neue with inline SVG padel ball icon
- Center: nav links — Canchas, Precios, Ubicación, Contacto (smooth scroll anchors)
- Right: "RESERVAR AHORA" button in lime/navy
- Mobile: hamburger icon → full-screen overlay nav with same links

### 2. Hero
- Full viewport height (`min-h-screen`)
- Background: deep navy `#0A0E1A` with CSS grid dot pattern overlay
- Split layout: text left (60%), abstract SVG padel court right (40%)
- H1: "PÁDEL EN GRECIA." — Bebas Neue, massive, white, two lines
- Subline: "Las únicas canchas de pádel en la zona. Sin viajar a San José."
- CTAs: primary "RESERVAR VÍA WHATSAPP" (lime bg) → WhatsApp URL; secondary "VER PRECIOS" (outline) → `#precios` anchor
- Animated stat badges (Framer Motion staggered entrance): "3 Canchas", "Abierto hoy 3pm", "Primero en Grecia"
- Mobile: stacks vertically, SVG hidden or shown below text

### 3. WhyEpic (Problem → Solution)
- Dark navy background
- Heading: "¿POR QUÉ EPIC PADEL?"
- 3 cards in a row:
  - "Sin desplazamientos" — Antes viajabas 45 min. Ahora juegas en Grecia.
  - "Horario flexible" — Abierto de 3PM a 10PM, todos los días.
  - "Para todos los niveles" — Principiantes y avanzados bienvenidos.
- Cards: dark bg, left lime border, inline SVG icon, hover lift (`translateY(-4px)`)
- Framer Motion `useInView` fade-in-up

### 4. Courts
- Light section (`bg-white` or very light gray)
- Heading: "3 CANCHAS PROFESIONALES"
- 3 cards side by side, each:
  - Top-view court SVG illustration (navy + lime palette)
  - Court name: "Cancha 1 / 2 / 3"
  - "Disponible" badge (green)
  - CTA: "Reservar esta cancha" → WhatsApp with court number in text
- Framer Motion staggered cards

### 5. Pricing
- Dark navy background, `id="precios"`
- Heading: "PRECIOS SIMPLES, SIN SORPRESAS"
- 2 pricing cards:
  - **MAÑANA** (3PM–4PM): $30/hora — badge "PRECIO ESPECIAL"
  - **TARDE/NOCHE** (4PM–10PM): $40/hora — badge "MÁS POPULAR", highlighted with lime border/accent
- Below: "El precio es por cancha completa. Divídelo entre tus 4 jugadores."
- Prominent WhatsApp CTA button

### 6. HowToBook
- Minimal light section
- Heading: "¿CÓMO RESERVAR?"
- 3 numbered steps with connecting line:
  1. Elige tu horario
  2. Escríbenos por WhatsApp
  3. ¡A jugar!

### 7. Location
- `id="ubicacion"`
- Split layout: Google Maps iframe (left) + info card (right)
- Info card: address, clickable phone, WhatsApp button, hours
- iframe src: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15709.123456789!2d-84.3200!3d10.0650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f3c3c3c3c3c3%3A0x0!2sGrecia%2C+Alajuela!5e0!3m2!1sen!2scr!4v1234567890`

### 8. FinalCTA
- Full-width dark navy section
- Heading: "¿LISTO PARA TU PRIMER PARTIDO?"
- WhatsApp button + phone button side by side
- Subtle animated background (Framer Motion pulse or gradient shift)

### 9. Footer
- Dark background
- Wordmark + tagline: "El pádel llegó a Grecia."
- Quick links (same as nav)
- © 2025 Epic Padel · Grecia, Alajuela, Costa Rica

---

## SEO & Metadata (layout.tsx)

```ts
title: "Epic Padel | Canchas de Pádel en Grecia, Alajuela"
description: "Las primeras canchas de pádel en Grecia, Alajuela. 3 canchas profesionales. Abierto 3PM–10PM. Reserva ahora sin salir de la zona."
openGraph: { title, description, type: "website", locale: "es_CR" }
```

JSON-LD `LocalBusiness` schema:
- name, address (Grecia, Alajuela, CR), telephone, openingHours, geo coordinates

---

## Animations (Framer Motion)

- All sections: `useInView` + `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}`
- Hero badges: staggered entrance (`staggerChildren: 0.1`)
- Court cards: staggered (`staggerChildren: 0.15`)
- Navbar: glass effect on scroll via `useScroll` or `window.scrollY` listener
- FinalCTA: subtle background pulse animation

---

## Responsive

- Mobile-first; all grids collapse to single column on `< md`
- Navbar: hamburger at `< lg`
- Hero SVG: hidden on mobile (`hidden lg:block`) or placed below text
- Maps iframe: full-width on mobile, 50% on desktop

---

## Constraints & Notes

- Tailwind v4: no `tailwind.config.ts`. Brand colors/fonts added to `globals.css` using `@theme`.
- All SVG illustrations are inline (no external image files needed).
- Smooth scroll: `html { scroll-behavior: smooth }` in globals.css.
- `framer-motion` must be installed before build.
