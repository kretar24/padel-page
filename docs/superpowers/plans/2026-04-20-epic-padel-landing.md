# Epic Padel Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, production-ready single-page marketing site for Epic Padel that drives WhatsApp reservations.

**Architecture:** Next.js 16 App Router with server-rendered layout, client components only where interactivity or animations are needed. Tailwind v4 CSS-first brand config (no tailwind.config.ts). Framer Motion for scroll-triggered animations.

**Tech Stack:** Next.js 16.2.4 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · next/font/google

---

## Constants (used across all components)

```ts
const WA_URL = "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";
const PHONE = "tel:+50689527591";
const PHONE_DISPLAY = "+506 8952-7591";
```

---

## File Map

| File | Type | Responsibility |
|---|---|---|
| `src/app/globals.css` | Modified | Tailwind v4 @theme brand tokens, base styles |
| `src/app/layout.tsx` | Modified | Root layout: fonts, metadata, JSON-LD schema |
| `src/app/page.tsx` | Modified | Assembles all section components |
| `src/components/Navbar.tsx` | Created | Sticky glass nav + mobile hamburger overlay |
| `src/components/Hero.tsx` | Created | Full-viewport hero with SVG court + stat badges |
| `src/components/WhyEpic.tsx` | Created | 3-column problem/solution cards |
| `src/components/Courts.tsx` | Created | 3 court cards with SVG top-view illustrations |
| `src/components/Pricing.tsx` | Created | 2 pricing cards ($30 / $40) + WhatsApp CTA |
| `src/components/HowToBook.tsx` | Created | 3-step numbered booking flow |
| `src/components/Location.tsx` | Created | Google Maps iframe + info card |
| `src/components/FinalCTA.tsx` | Created | Full-width dark CTA with animated bg |
| `src/components/Footer.tsx` | Created | Wordmark, links, copyright |

---

## Task 1: Install framer-motion

**Files:**
- Modify: `package.json` (via npm install)

- [ ] **Step 1: Install the package**

```bash
npm install framer-motion
```

Expected output: `added N packages` with framer-motion listed.

- [ ] **Step 2: Verify type check passes**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install framer-motion"
```

---

## Task 2: Brand tokens — globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace globals.css with brand config**

```css
@import "tailwindcss";

@theme {
  --color-navy: #0A0E1A;
  --color-navy-light: #141929;
  --color-navy-card: #1a2035;
  --color-lime: #C8F135;
  --color-lime-dark: #a8cc1a;
  --color-white: #FFFFFF;
  --font-heading: var(--font-bebas-neue), cursive;
  --font-body: var(--font-inter), system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0A0E1A;
  color: #FFFFFF;
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add Epic Padel brand tokens to Tailwind v4 theme"
```

---

## Task 3: Root layout — fonts, metadata, JSON-LD

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace layout.tsx**

```tsx
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Epic Padel | Canchas de Pádel en Grecia, Alajuela",
  description:
    "Las primeras canchas de pádel en Grecia, Alajuela. 3 canchas profesionales. Abierto 3PM–10PM. Reserva ahora sin salir de la zona.",
  openGraph: {
    title: "Epic Padel | Canchas de Pádel en Grecia, Alajuela",
    description:
      "Las primeras canchas de pádel en Grecia, Alajuela. 3 canchas profesionales. Abierto 3PM–10PM. Reserva ahora sin salir de la zona.",
    type: "website",
    locale: "es_CR",
    siteName: "Epic Padel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epic Padel | Canchas de Pádel en Grecia, Alajuela",
    description:
      "Las primeras canchas de pádel en Grecia, Alajuela. Abierto 3PM–10PM.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Epic Padel",
  description: "Las primeras canchas de pádel en Grecia, Alajuela, Costa Rica.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Canchas en Creta",
    addressLocality: "Grecia",
    addressRegion: "Alajuela",
    addressCountry: "CR",
  },
  telephone: "+50689527591",
  openingHours: "Mo-Su 15:00-22:00",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.065,
    longitude: -84.32,
  },
  priceRange: "$30–$40",
  sport: "Padel",
  numberOfRooms: 3,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-navy text-white">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add metadata, fonts, and JSON-LD schema to layout"
```

---

## Task 4: Navbar component

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Create Navbar.tsx**

```tsx
"use client";

import { useState, useEffect } from "react";

const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

const navLinks = [
  { href: "#canchas", label: "Canchas" },
  { href: "#precios", label: "Precios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

function PadelBallIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="#C8F135" />
      <path
        d="M3.5 8.5 Q12 13 20.5 8.5"
        stroke="#0A0E1A"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M3.5 15.5 Q12 11 20.5 15.5"
        stroke="#0A0E1A"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/85 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Wordmark */}
            <a href="#" className="flex items-center gap-2">
              <PadelBallIcon />
              <span className="font-heading text-2xl tracking-widest leading-none">
                <span className="text-white">EPIC</span>
                <span className="text-lime ml-1">PADEL</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-lime transition-colors text-sm font-medium tracking-widest uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-navy font-heading text-lg tracking-wider px-6 py-2 rounded-full hover:bg-lime-dark transition-colors"
              >
                RESERVAR AHORA
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-5xl text-white hover:text-lime transition-colors tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-lime text-navy font-heading text-2xl tracking-wider px-8 py-3 rounded-full hover:bg-lime-dark transition-colors"
          >
            RESERVAR AHORA
          </a>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add Navbar with glass morphism and mobile overlay"
```

---

## Task 5: Hero component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create Hero.tsx**

```tsx
"use client";

import { motion } from "framer-motion";

const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

const stats = [
  {
    label: "3 Canchas",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    label: "Abierto hoy 3pm",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Primero en Grecia",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

function HeroCourtSVG() {
  return (
    <svg
      viewBox="0 0 380 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs lg:max-w-sm opacity-90"
      aria-hidden="true"
    >
      {/* Glass walls - dashed outer rectangle */}
      <rect
        x="10"
        y="10"
        width="360"
        height="540"
        rx="6"
        stroke="#C8F135"
        strokeWidth="2.5"
        strokeDasharray="14 7"
        fill="none"
        opacity="0.5"
      />
      {/* Court surface */}
      <rect
        x="28"
        y="28"
        width="324"
        height="504"
        rx="3"
        fill="#141929"
        stroke="#C8F135"
        strokeWidth="1.5"
        opacity="0.9"
      />
      {/* Net line */}
      <line x1="28" y1="280" x2="352" y2="280" stroke="#C8F135" strokeWidth="3" />
      {/* Net posts */}
      <circle cx="28" cy="280" r="5" fill="#C8F135" />
      <circle cx="352" cy="280" r="5" fill="#C8F135" />
      {/* Top service line */}
      <line x1="28" y1="168" x2="352" y2="168" stroke="white" strokeWidth="1.2" opacity="0.35" />
      {/* Top center service line */}
      <line x1="190" y1="168" x2="190" y2="280" stroke="white" strokeWidth="1.2" opacity="0.35" />
      {/* Bottom service line */}
      <line x1="28" y1="392" x2="352" y2="392" stroke="white" strokeWidth="1.2" opacity="0.35" />
      {/* Bottom center service line */}
      <line x1="190" y1="280" x2="190" y2="392" stroke="white" strokeWidth="1.2" opacity="0.35" />
      {/* Center dot */}
      <circle cx="190" cy="280" r="5" fill="#C8F135" />
      {/* Glow */}
      <ellipse cx="190" cy="280" rx="70" ry="22" fill="#C8F135" opacity="0.06" />
      {/* Corner glass details */}
      <rect x="10" y="10" width="30" height="30" rx="6" fill="#C8F135" opacity="0.08" />
      <rect x="340" y="10" width="30" height="30" rx="6" fill="#C8F135" opacity="0.08" />
      <rect x="10" y="520" width="30" height="30" rx="6" fill="#C8F135" opacity="0.08" />
      <rect x="340" y="520" width="30" height="30" rx="6" fill="#C8F135" opacity="0.08" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* CSS grid dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,241,53,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,241,53,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="lg:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="font-heading text-[5rem] sm:text-[7rem] lg:text-[9rem] xl:text-[10rem] text-white leading-none tracking-tight"
            >
              PÁDEL EN
              <br />
              <span className="text-lime">GRECIA.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg sm:text-xl text-white/65 max-w-lg leading-relaxed"
            >
              Las únicas canchas de pádel en la zona.
              <br />
              Sin viajar a San José.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-navy font-heading text-xl tracking-wider px-8 py-4 rounded-full hover:bg-lime-dark transition-colors text-center"
              >
                RESERVAR VÍA WHATSAPP
              </a>
              <a
                href="#precios"
                className="border-2 border-white/30 text-white font-heading text-xl tracking-wider px-8 py-4 rounded-full hover:border-lime hover:text-lime transition-colors text-center"
              >
                VER PRECIOS
              </a>
            </motion.div>

            {/* Stat badges */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.55 },
                },
              }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                  }}
                  className="bg-navy-light border border-lime/25 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  {stat.icon}
                  <span className="text-white/85 text-sm font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: SVG court illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-2 justify-center items-center"
          >
            <HeroCourtSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add Hero section with SVG court illustration and animated badges"
```

---

## Task 6: WhyEpic component

**Files:**
- Create: `src/components/WhyEpic.tsx`

- [ ] **Step 1: Create WhyEpic.tsx**

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Sin desplazamientos",
    body: "Antes viajabas 45 minutos hasta San José. Ahora juegas en Grecia, a pocos minutos de casa.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Horario flexible",
    body: "Abierto de 3PM a 10PM todos los días. Ajustamos al ritmo de tu vida, no al revés.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Para todos los niveles",
    body: "Tanto si es tu primera raqueta como si llevas años en la pista. Principiantes y avanzados bienvenidos.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function WhyEpic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-navy-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl text-white tracking-wider text-center mb-16"
        >
          ¿POR QUÉ{" "}
          <span className="text-lime">EPIC PADEL</span>?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-navy-card border-l-4 border-lime rounded-r-xl p-8 cursor-default"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="font-heading text-2xl text-white tracking-wide mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{feature.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/WhyEpic.tsx
git commit -m "feat: add WhyEpic problem/solution section"
```

---

## Task 7: Courts component

**Files:**
- Create: `src/components/Courts.tsx`

- [ ] **Step 1: Create Courts.tsx**

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_COURT = (n: number) =>
  `https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20la%20Cancha%20${n}%20en%20Epic%20Padel`;

function CourtTopViewSVG() {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      {/* Glass walls */}
      <rect
        x="4"
        y="4"
        width="192"
        height="292"
        rx="5"
        stroke="#C8F135"
        strokeWidth="2"
        strokeDasharray="9 5"
        fill="none"
        opacity="0.45"
      />
      {/* Court surface */}
      <rect
        x="14"
        y="14"
        width="172"
        height="272"
        rx="2"
        fill="#141929"
        stroke="#C8F135"
        strokeWidth="1.5"
      />
      {/* Net */}
      <line x1="14" y1="150" x2="186" y2="150" stroke="#C8F135" strokeWidth="2.5" />
      <circle cx="14" cy="150" r="3.5" fill="#C8F135" />
      <circle cx="186" cy="150" r="3.5" fill="#C8F135" />
      {/* Top service lines */}
      <line x1="14" y1="90" x2="186" y2="90" stroke="white" strokeWidth="1" opacity="0.3" />
      <line x1="100" y1="90" x2="100" y2="150" stroke="white" strokeWidth="1" opacity="0.3" />
      {/* Bottom service lines */}
      <line x1="14" y1="210" x2="186" y2="210" stroke="white" strokeWidth="1" opacity="0.3" />
      <line x1="100" y1="150" x2="100" y2="210" stroke="white" strokeWidth="1" opacity="0.3" />
      {/* Center dot */}
      <circle cx="100" cy="150" r="3" fill="#C8F135" />
      {/* Subtle glow */}
      <ellipse cx="100" cy="150" rx="40" ry="14" fill="#C8F135" opacity="0.05" />
    </svg>
  );
}

const courts = [
  { number: 1, name: "Cancha 1" },
  { number: 2, name: "Cancha 2" },
  { number: 3, name: "Cancha 3" },
];

export default function Courts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="canchas" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl sm:text-6xl text-navy tracking-wider">
            3 CANCHAS{" "}
            <span className="text-lime-dark">PROFESIONALES</span>
          </h2>
          <p className="mt-4 text-navy/60 text-lg max-w-xl mx-auto">
            Pistas de última generación, perfectas para jugar con amigos o
            competir en serio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {courts.map((court, i) => (
            <motion.div
              key={court.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="bg-navy rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Court SVG illustration */}
              <div className="p-8 pb-4">
                <CourtTopViewSVG />
              </div>

              {/* Card info */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-2xl text-white tracking-wider">
                    {court.name}
                  </h3>
                  <span className="bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full border border-green-500/30">
                    Disponible
                  </span>
                </div>
                <a
                  href={WA_COURT(court.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-lime text-navy font-heading text-lg tracking-wider py-3 rounded-xl hover:bg-lime-dark transition-colors text-center"
                >
                  RESERVAR ESTA CANCHA
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Courts.tsx
git commit -m "feat: add Courts section with SVG top-view illustrations"
```

---

## Task 8: Pricing component

**Files:**
- Create: `src/components/Pricing.tsx`

- [ ] **Step 1: Create Pricing.tsx**

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

const plans = [
  {
    id: "morning",
    title: "MAÑANA",
    hours: "3PM – 4PM",
    price: "$30",
    unit: "/hora",
    badge: "PRECIO ESPECIAL",
    badgeColor: "bg-white/10 text-white/70",
    featured: false,
    description: "La hora perfecta para una sesión tranquila entre semana.",
  },
  {
    id: "evening",
    title: "TARDE / NOCHE",
    hours: "4PM – 10PM",
    price: "$40",
    unit: "/hora",
    badge: "MÁS POPULAR",
    badgeColor: "bg-lime text-navy",
    featured: true,
    description: "El horario favorito para jugar después del trabajo o el fin de semana.",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="precios" className="py-24 bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-wider">
            PRECIOS SIMPLES,{" "}
            <span className="text-lime">SIN SORPRESAS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className={`relative rounded-2xl p-8 flex flex-col gap-4 ${
                plan.featured
                  ? "bg-navy-card border-2 border-lime shadow-[0_0_40px_rgba(200,241,53,0.15)]"
                  : "bg-navy-card border border-white/10"
              }`}
            >
              {/* Badge */}
              <span
                className={`self-start text-xs font-heading tracking-widest px-3 py-1 rounded-full ${plan.badgeColor}`}
              >
                {plan.badge}
              </span>

              <h3 className="font-heading text-3xl text-white tracking-wider">
                {plan.title}
              </h3>

              <p className="text-white/50 text-sm">{plan.hours}</p>

              <div className="flex items-end gap-1 my-2">
                <span className={`font-heading text-6xl leading-none ${plan.featured ? "text-lime" : "text-white"}`}>
                  {plan.price}
                </span>
                <span className="text-white/50 mb-2">{plan.unit}</span>
              </div>

              <p className="text-white/50 text-sm leading-relaxed">{plan.description}</p>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto block text-center font-heading text-xl tracking-wider py-3 rounded-xl transition-colors ${
                  plan.featured
                    ? "bg-lime text-navy hover:bg-lime-dark"
                    : "border border-white/20 text-white hover:border-lime hover:text-lime"
                }`}
              >
                RESERVAR AHORA
              </a>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-white/40 mt-10 max-w-md mx-auto text-sm"
        >
          El precio es por cancha completa. Divídelo entre tus 4 jugadores.
        </motion.p>

        {/* Bottom WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-lime text-navy font-heading text-xl tracking-wider px-10 py-4 rounded-full hover:bg-lime-dark transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            RESERVAR VÍA WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Pricing.tsx
git commit -m "feat: add Pricing section with two-tier cards"
```

---

## Task 9: HowToBook component

**Files:**
- Create: `src/components/HowToBook.tsx`

- [ ] **Step 1: Create HowToBook.tsx**

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

const steps = [
  {
    number: "01",
    title: "Elige tu horario",
    body: "Decide el día y la hora que más te convenga entre las 3PM y las 10PM.",
  },
  {
    number: "02",
    title: "Escríbenos por WhatsApp",
    body: "Confirma tu reserva en segundos. Sin formularios complicados.",
  },
  {
    number: "03",
    title: "¡A jugar!",
    body: "Llega a la cancha y disfruta. Así de simple.",
  },
];

export default function HowToBook() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl sm:text-6xl text-navy tracking-wider">
            ¿CÓMO{" "}
            <span className="text-lime-dark">RESERVAR</span>?
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-0.5 bg-lime/20" />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative w-20 h-20 bg-lime rounded-full flex items-center justify-center mb-6 z-10 shadow-lg">
                  <span className="font-heading text-3xl text-navy leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-navy tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-navy/55 leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-white font-heading text-xl tracking-wider px-10 py-4 rounded-full hover:bg-navy-light transition-colors"
          >
            EMPEZAR A RESERVAR
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/HowToBook.tsx
git commit -m "feat: add HowToBook 3-step section"
```

---

## Task 10: Location component

**Files:**
- Create: `src/components/Location.tsx`

- [ ] **Step 1: Create Location.tsx**

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="ubicacion" className="py-24 bg-navy-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl text-white tracking-wider text-center mb-14"
        >
          DÓNDE{" "}
          <span className="text-lime">ENCONTRARNOS</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15709.123456789!2d-84.3200!3d10.0650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f3c3c3c3c3c3%3A0x0!2sGrecia%2C+Alajuela!5e0!3m2!1sen!2scr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Epic Padel en Grecia, Alajuela"
            />
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="bg-navy-card rounded-2xl p-8 border border-white/10 flex flex-col gap-6"
            id="contacto"
          >
            <h3 className="font-heading text-3xl text-white tracking-wider">
              EPIC PADEL
            </h3>

            <div className="flex flex-col gap-5 text-white/70">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2" className="shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-white font-medium">Canchas en Creta</p>
                  <p className="text-sm">Grecia, Alajuela, Costa Rica</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="tel:+50689527591"
                  className="text-white font-medium hover:text-lime transition-colors"
                >
                  +506 8952-7591
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2" className="shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="text-white font-medium">Horario</p>
                  <p className="text-sm">3:00 PM – 10:00 PM · Todos los días</p>
                </div>
              </div>

              {/* Courts */}
              <div className="flex gap-4 items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2" className="shrink-0">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                </svg>
                <p>
                  <span className="text-white font-medium">3 canchas profesionales</span>
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-lime text-navy font-heading text-lg tracking-wider py-3 rounded-xl hover:bg-lime-dark transition-colors text-center"
              >
                WHATSAPP
              </a>
              <a
                href="tel:+50689527591"
                className="flex-1 border border-white/20 text-white font-heading text-lg tracking-wider py-3 rounded-xl hover:border-lime hover:text-lime transition-colors text-center"
              >
                LLAMAR
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Location.tsx
git commit -m "feat: add Location section with map and contact info"
```

---

## Task 11: FinalCTA component

**Files:**
- Create: `src/components/FinalCTA.tsx`

- [ ] **Step 1: Create FinalCTA.tsx**

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-32 bg-navy overflow-hidden" ref={ref}>
      {/* Animated radial glow background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 50% 50%, rgba(200,241,53,0.04) 0%, transparent 65%)",
            "radial-gradient(ellipse at 50% 50%, rgba(200,241,53,0.10) 0%, transparent 65%)",
            "radial-gradient(ellipse at 50% 50%, rgba(200,241,53,0.04) 0%, transparent 65%)",
          ],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,241,53,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,241,53,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight"
        >
          ¿LISTO PARA TU{" "}
          <span className="text-lime">PRIMER PARTIDO</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg text-white/55 max-w-xl mx-auto"
        >
          Reserva en segundos. Sin complicaciones. Nos vemos en la cancha.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-lime text-navy font-heading text-2xl tracking-wider px-10 py-5 rounded-full hover:bg-lime-dark transition-colors shadow-[0_0_30px_rgba(200,241,53,0.25)]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            RESERVAR VÍA WHATSAPP
          </a>

          <a
            href="tel:+50689527591"
            className="inline-flex items-center gap-3 border-2 border-white/25 text-white font-heading text-2xl tracking-wider px-10 py-5 rounded-full hover:border-lime hover:text-lime transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            LLAMAR AHORA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/FinalCTA.tsx
git commit -m "feat: add FinalCTA with animated background glow"
```

---

## Task 12: Footer component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create Footer.tsx**

```tsx
const quickLinks = [
  { href: "#canchas", label: "Canchas" },
  { href: "#precios", label: "Precios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

function PadelBallIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="#C8F135" />
      <path d="M3.5 8.5 Q12 13 20.5 8.5" stroke="#0A0E1A" strokeWidth="1.5" fill="none" />
      <path d="M3.5 15.5 Q12 11 20.5 15.5" stroke="#0A0E1A" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-card border-t border-white/10 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Wordmark + tagline */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2">
              <PadelBallIcon />
              <span className="font-heading text-2xl tracking-widest leading-none">
                <span className="text-white">EPIC</span>
                <span className="text-lime ml-1">PADEL</span>
              </span>
            </a>
            <p className="text-white/40 text-sm">El pádel llegó a Grecia.</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-lg tracking-widest text-white/60 mb-4">ENLACES</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-lime transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-heading text-lg tracking-widest text-white/60 mb-4">CONTACTO</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/50">
              <li>
                <a href="tel:+50689527591" className="hover:text-lime transition-colors">
                  +506 8952-7591
                </a>
              </li>
              <li>Grecia, Alajuela, Costa Rica</li>
              <li>3:00 PM – 10:00 PM · Todos los días</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/30 text-xs">
          © 2025 Epic Padel · Grecia, Alajuela, Costa Rica
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add Footer with wordmark and quick links"
```

---

## Task 13: Assemble page.tsx

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace page.tsx with full assembly**

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyEpic from "@/components/WhyEpic";
import Courts from "@/components/Courts";
import Pricing from "@/components/Pricing";
import HowToBook from "@/components/HowToBook";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyEpic />
      <Courts />
      <Pricing />
      <HowToBook />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble full landing page in page.tsx"
```

---

## Task 14: Final build verification

**Files:** None (verification only)

- [ ] **Step 1: Full type check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 2: Production build**

```bash
npm run build
```

Expected: ✓ Compiled successfully with no errors.

- [ ] **Step 3: Start dev server and verify visually**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:
- Navbar: transparent on load, glass effect after scrolling 50px
- Hamburger menu works and closes on link click
- Hero: Bebas Neue headline, stat badges animate in
- Court SVG visible on desktop (hidden on mobile)
- WhyEpic cards lift on hover
- Courts section: 3 cards with SVG illustrations
- Pricing: $30 card and highlighted $40 card
- HowToBook: 3 numbered steps
- Location: iframe loads, info card displays
- FinalCTA: animated background glow
- Footer: wordmark, links, copyright
- All WhatsApp links open `wa.me/50689527591`
- All sections scroll smoothly when clicking nav links

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete Epic Padel landing page"
```
