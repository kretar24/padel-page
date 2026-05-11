# Epic Padel Aesthetic Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dark navy + lime aesthetic with a bright blue (#1B4FD8) + white sports look, matching the reference image, while keeping all text content, section order, and component structure identical.

**Architecture:** CSS token swap in `globals.css` unlocks most changes via Tailwind v4 utility classes. Each component then gets targeted class renames for backgrounds, borders, text, and hardcoded SVG colors. Two sections (Hero, FinalCTA) gain Unsplash background images via `<img>` with absolute positioning and an overlay.

**Tech Stack:** Next.js (Tailwind v4 via `@import "tailwindcss"` + `@theme`), Framer Motion, React, TypeScript

---

## Color Reference

| Token | Value | Usage |
|---|---|---|
| `--color-blue` | `#1B4FD8` | Dark sections bg, accent in light sections |
| `--color-blue-dark` | `#1340B5` | Hover on blue elements |
| `--color-blue-light` | `#EEF3FF` | Alternating light-section bg |
| `--color-line` | `#CBD5E1` | Borders on light sections |
| `--color-muted` | `#64748B` | Muted labels |
| `--color-lime` | `#C8F135` | CTA buttons (unchanged) |
| `--color-lime-dark` | `#a8cc1a` | Hover lime (unchanged) |
| `--color-accent-ink` | `#121909` | Text on lime buttons (unchanged) |

Dark section text: `text-white`, accents `text-lime`  
Light section text: `text-[#1A1A2E]`, accents `text-blue`, muted `text-slate-500`

---

## Section Background Map

| Section | Background | Cards inside |
|---|---|---|
| Hero | `bg-blue` | — |
| WhyEpic | `bg-blue-light` | `bg-white border-slate-200` |
| Courts | `bg-white` | `bg-blue-light border-slate-200` |
| Pozos | `bg-blue-light` | `bg-white border-slate-200` |
| Store | `bg-white` | `bg-blue-light border-slate-200` |
| Pricing | `bg-blue-light` | featured: `bg-blue` / other: `bg-white` |
| HowToBook | `bg-blue-light` | — |
| Location | `bg-white` | info card: `bg-blue-light border-slate-200` |
| Instagram | `bg-blue-light` | post cells: `bg-white border-blue/20` |
| ComunidadWhatsApp | `bg-white` | border: `border-slate-200` |
| FinalCTA | `bg-blue` | — |
| Footer | `bg-[#0F2F8A]` | — |

---

## Task 1: Update CSS tokens (globals.css)

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the `@theme` block**

```css
@import "tailwindcss";

@theme {
  --color-blue: #1B4FD8;
  --color-blue-dark: #1340B5;
  --color-blue-light: #EEF3FF;
  --color-line: #CBD5E1;
  --color-muted: #64748B;
  --color-accent-ink: #121909;
  --color-lime: #C8F135;
  --color-lime-dark: #a8cc1a;
  --font-heading: var(--font-barlow-condensed), system-ui, sans-serif;
  --font-body: var(--font-inter), system-ui, sans-serif;
  --font-mono: var(--font-jetbrains-mono), ui-monospace, monospace;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #ffffff;
  color: #1A1A2E;
}
```

- [ ] **Step 2: Start dev server to verify it loads**

```bash
npm run dev
```
Expected: page loads (will look broken until components are updated — that's OK)

---

## Task 2: Update layout.tsx body class

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Change the body className**

Old:
```tsx
<body className="font-body antialiased bg-navy">
```
New:
```tsx
<body className="font-body antialiased bg-white">
```

- [ ] **Step 2: Commit**
```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: replace navy tokens with blue/white palette"
```

---

## Task 3: Update Navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Replace the nav element and its scroll logic**

Old:
```tsx
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled
    ? "bg-navy/85 backdrop-blur-md border-b border-line shadow-lg"
    : "bg-transparent"
}`}
```
New:
```tsx
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled
    ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
    : "bg-transparent"
}`}
```

- [ ] **Step 2: Update nav link colors**

Old:
```tsx
className="font-heading text-white/55 hover:text-lime transition-colors text-[13px] font-semibold"
```
New:
```tsx
className={`font-heading transition-colors text-[13px] font-semibold ${
  scrolled ? "text-slate-600 hover:text-blue" : "text-white/80 hover:text-white"
}`}
```

- [ ] **Step 3: Update logo text (EPIC in blue when scrolled, white when transparent)**

Old:
```tsx
<span className="text-white">EPIC</span>
<span className="text-lime ml-1">PADEL</span>
```
New:
```tsx
<span className={scrolled ? "text-blue" : "text-white"}>EPIC</span>
<span className="text-lime ml-1">PADEL</span>
```

- [ ] **Step 4: Update logo subtitle**

Old:
```tsx
<span className="hidden lg:block font-mono text-[0.65rem] text-muted uppercase tracking-[0.06em] ml-1.5">
  CR · EST 2024
</span>
```
New:
```tsx
<span className={`hidden lg:block font-mono text-[0.65rem] uppercase tracking-[0.06em] ml-1.5 ${scrolled ? "text-slate-400" : "text-white/50"}`}>
  CR · EST 2024
</span>
```

- [ ] **Step 5: Update mobile menu overlay**

Old:
```tsx
<div className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-8">
  {navLinks.map((link) => (
    <a
      ...
      className="font-heading text-4xl font-semibold text-white hover:text-lime transition-colors tracking-[-0.02em]"
    >
```
New:
```tsx
<div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8">
  {navLinks.map((link) => (
    <a
      ...
      className="font-heading text-4xl font-semibold text-[#1A1A2E] hover:text-blue transition-colors tracking-[-0.02em]"
    >
```

- [ ] **Step 6: Commit**
```bash
git add src/components/Navbar.tsx
git commit -m "feat: update navbar to white-on-scroll, blue accents"
```

---

## Task 4: Update Hero

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Replace section wrapper + add image background**

Old:
```tsx
<section className="relative min-h-screen flex items-center bg-navy overflow-hidden border-b border-line">
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(200,241,53,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200,241,53,0.5) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime/[0.04] blur-3xl rounded-full pointer-events-none" />
```
New:
```tsx
<section className="relative min-h-screen flex items-center bg-blue overflow-hidden border-b border-white/15">
  {/* Background photo */}
  <img
    src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1600&q=80&auto=format&fit=crop"
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
    aria-hidden="true"
  />
  {/* Grid overlay */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-3xl rounded-full pointer-events-none" />
```

- [ ] **Step 2: Update status badge**

Old:
```tsx
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
  <span className="text-lime mr-2">●</span>Club abierto · Grecia, Alajuela
</span>
<span className="flex-1 h-px bg-line hidden sm:block" />
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em] hidden sm:block">
```
New:
```tsx
<span className="font-mono text-[0.68rem] text-white/60 uppercase tracking-[0.06em]">
  <span className="text-lime mr-2">●</span>Club abierto · Grecia, Alajuela
</span>
<span className="flex-1 h-px bg-white/20 hidden sm:block" />
<span className="font-mono text-[0.68rem] text-white/60 uppercase tracking-[0.06em] hidden sm:block">
```

- [ ] **Step 3: Update subtext paragraph**

Old: `className="mt-6 text-lg sm:text-xl text-white/55 max-w-lg leading-relaxed"`  
New: `className="mt-6 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed"`

- [ ] **Step 4: Update secondary CTA button**

Old:
```tsx
className="border border-line text-white/70 font-heading text-[15px] font-semibold tracking-tight px-7 py-4 rounded-full hover:border-lime hover:text-lime transition-colors text-center"
```
New:
```tsx
className="border border-white/30 text-white/80 font-heading text-[15px] font-semibold tracking-tight px-7 py-4 rounded-full hover:border-white hover:text-white transition-colors text-center"
```

- [ ] **Step 5: Update stat pills**

Old:
```tsx
className="bg-navy-light border border-line px-3.5 py-2 rounded-full flex items-center gap-2"
```
New:
```tsx
className="bg-white/10 border border-white/20 px-3.5 py-2 rounded-full flex items-center gap-2"
```

Also update stat pill text:

Old: `className="font-heading text-white/75 text-[13px] font-semibold"`  
New: `className="font-heading text-white/90 text-[13px] font-semibold"`

- [ ] **Step 6: Update stat icon stroke colors** (in the `stats` array at top of file)

Change every `stroke="#C8F135"` to `stroke="white"` in the 4 stat SVGs.

- [ ] **Step 7: Update HeroCourtSVG strokes**

In `HeroCourtSVG`, change:
- All `stroke="#C8F135"` → `stroke="white"`
- All `fill="#C8F135"` dots/circles → `fill="white"`
- `fill="#1C2235"` → `fill="rgba(255,255,255,0.05)"`
- `fill="#C8F135" opacity="0.05"` ellipse → `fill="white" opacity="0.05"`
- Corner decorators `fill="#C8F135" opacity="0.06"` → `fill="white" opacity="0.06"`

- [ ] **Step 8: Commit**
```bash
git add src/components/Hero.tsx
git commit -m "feat: hero — blue bg, Unsplash image, white SVG"
```

---

## Task 5: Update WhyEpic

**Files:**
- Modify: `src/components/WhyEpic.tsx`

- [ ] **Step 1: Update section background and divider**

Old: `className="py-24 bg-navy-light border-b border-line"`  
New: `className="py-24 bg-blue-light border-b border-slate-200"`

- [ ] **Step 2: Update section counter label and line**

Old:
```tsx
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
  (01) Por qué Epic Padel
</span>
<span className="flex-1 h-px bg-line" />
```
New:
```tsx
<span className="font-mono text-[0.68rem] text-slate-400 uppercase tracking-[0.06em]">
  (01) Por qué Epic Padel
</span>
<span className="flex-1 h-px bg-slate-200" />
```

- [ ] **Step 3: Update heading**

Old:
```tsx
className="font-heading font-extrabold text-white tracking-[-0.03em] mb-16"
...
¿POR QUÉ{" "}
<span className="text-lime">EPIC PADEL</span>?
```
New:
```tsx
className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em] mb-16"
...
¿POR QUÉ{" "}
<span className="text-blue">EPIC PADEL</span>?
```

- [ ] **Step 4: Update feature cards**

Old: `className="bg-navy border border-line rounded p-7 cursor-default"`  
New: `className="bg-white border border-slate-200 rounded-xl p-7 cursor-default shadow-sm"`

- [ ] **Step 5: Update card title and body text**

Old:
```tsx
<h3 className="font-heading text-[20px] font-semibold text-white tracking-[-0.01em] mb-3">
<p className="text-white/50 leading-relaxed text-[15px]">
```
New:
```tsx
<h3 className="font-heading text-[20px] font-semibold text-[#1A1A2E] tracking-[-0.01em] mb-3">
<p className="text-slate-500 leading-relaxed text-[15px]">
```

- [ ] **Step 6: Update icon SVG strokes** (in the `features` array)

Change all `stroke="#C8F135"` to `stroke="#1B4FD8"` in the 4 feature icons.

- [ ] **Step 7: Commit**
```bash
git add src/components/WhyEpic.tsx
git commit -m "feat: whyepic — blue-light bg, white cards, blue accents"
```

---

## Task 6: Update Courts

**Files:**
- Modify: `src/components/Courts.tsx`

- [ ] **Step 1: Update section background**

Old: `className="py-24 bg-navy border-b border-line"`  
New: `className="py-24 bg-white border-b border-slate-200"`

- [ ] **Step 2: Update section counter and divider**

Old:
```tsx
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
  (02) Instalaciones
</span>
<span className="flex-1 h-px bg-line" />
```
New:
```tsx
<span className="font-mono text-[0.68rem] text-slate-400 uppercase tracking-[0.06em]">
  (02) Instalaciones
</span>
<span className="flex-1 h-px bg-slate-200" />
```

- [ ] **Step 3: Update heading and subtext**

Old:
```tsx
className="font-heading font-extrabold text-white tracking-[-0.03em]"
...
3 CANCHAS{" "}
<span className="text-lime">PROFESIONALES</span>
...
<p className="mt-3 text-white/45 text-[16px] max-w-xl">
```
New:
```tsx
className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em]"
...
3 CANCHAS{" "}
<span className="text-blue">PROFESIONALES</span>
...
<p className="mt-3 text-slate-500 text-[16px] max-w-xl">
```

- [ ] **Step 4: Update court cards**

Old: `className="bg-navy-card border border-line rounded overflow-hidden"`  
New: `className="bg-blue-light border border-slate-200 rounded-xl overflow-hidden"`

- [ ] **Step 5: Update card footer**

Old: `className="border-t border-line px-6 py-5"`  
New: `className="border-t border-slate-200 px-6 py-5"`

Old court name: `className="font-heading text-[19px] font-semibold text-white tracking-[-0.01em]"`  
New: `className="font-heading text-[19px] font-semibold text-[#1A1A2E] tracking-[-0.01em]"`

Old Indoor badge: `className="font-heading font-semibold text-[0.62rem] text-white/50 uppercase tracking-[0.06em] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"`  
New: `className="font-heading font-semibold text-[0.62rem] text-slate-500 uppercase tracking-[0.06em] bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full"`

- [ ] **Step 6: Update CourtTopViewSVG strokes**

In `CourtTopViewSVG`:
- `stroke="#C8F135"` → `stroke="#1B4FD8"`
- `fill="#13192C"` (inner rect fill) → `fill="#EEF3FF"`
- `fill="#C8F135"` (center dot) → `fill="#1B4FD8"`
- `fill="#C8F135" opacity="0.04"` (ellipse) → `fill="#1B4FD8" opacity="0.06"`

- [ ] **Step 7: Commit**
```bash
git add src/components/Courts.tsx
git commit -m "feat: courts — white bg, blue-light cards, blue SVG"
```

---

## Task 7: Update Pozos

**Files:**
- Modify: `src/components/Pozos.tsx`

- [ ] **Step 1: Update section background**

Old: `className="py-24 bg-navy-card border-b border-line"`  
New: `className="py-24 bg-blue-light border-b border-slate-200"`

- [ ] **Step 2: Update section counter and line**

Old:
```tsx
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
<span className="flex-1 h-px bg-line" />
```
New:
```tsx
<span className="font-mono text-[0.68rem] text-slate-400 uppercase tracking-[0.06em]">
<span className="flex-1 h-px bg-slate-200" />
```

- [ ] **Step 3: Update heading and subtext**

Old:
```tsx
className="font-heading font-extrabold text-white tracking-[-0.03em]"
...
POZOS DE{" "}
<span className="text-lime">LA SEMANA</span>
...
<p className="mt-3 text-white/45 text-[16px] max-w-xl">
```
New:
```tsx
className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em]"
...
POZOS DE{" "}
<span className="text-blue">LA SEMANA</span>
...
<p className="mt-3 text-slate-500 text-[16px] max-w-xl">
```

- [ ] **Step 4: Update pozo cards**

Old: `className="bg-navy border border-line rounded-lg overflow-hidden flex flex-col"`  
New: `className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col shadow-sm"`

- [ ] **Step 5: Update day badge, card title, and time inside each card**

Old badge: `className="font-heading font-semibold text-[0.62rem] text-lime uppercase tracking-[0.08em] bg-lime/10 border border-lime/20 px-2.5 py-1 rounded-full"`  
New badge: `className="font-heading font-semibold text-[0.62rem] text-blue uppercase tracking-[0.08em] bg-blue/10 border border-blue/20 px-2.5 py-1 rounded-full"`

Old card title: `className="font-heading text-[22px] font-semibold text-white tracking-[-0.02em] mt-4"`  
New: `className="font-heading text-[22px] font-semibold text-[#1A1A2E] tracking-[-0.02em] mt-4"`

Old clock icon: `className="w-4 h-4 text-white/35"`  
New: `className="w-4 h-4 text-slate-400"`

Old time text: `className="font-mono text-[0.75rem] text-white/40"`  
New: `className="font-mono text-[0.75rem] text-slate-400"`

- [ ] **Step 6: Update "Próximamente" banner**

Old: `className="border border-dashed border-line rounded-lg px-6 py-5"`  
New: `className="border border-dashed border-slate-300 rounded-xl px-6 py-5"`

Old label: `className="font-mono text-[0.62rem] text-white/30 uppercase tracking-[0.08em] shrink-0"`  
New: `className="font-mono text-[0.62rem] text-slate-400 uppercase tracking-[0.08em] shrink-0"`

Old divider: `className="h-px flex-1 bg-line/40 hidden sm:block"`  
New: `className="h-px flex-1 bg-slate-200 hidden sm:block"`

Old pills: `className="font-mono text-[0.7rem] text-white/30 uppercase tracking-[0.06em] bg-white/5 border border-white/10 px-4 py-2 rounded-full"`  
New: `className="font-mono text-[0.7rem] text-slate-400 uppercase tracking-[0.06em] bg-slate-100 border border-slate-200 px-4 py-2 rounded-full"`

- [ ] **Step 7: Commit**
```bash
git add src/components/Pozos.tsx
git commit -m "feat: pozos — blue-light bg, white cards, blue day badges"
```

---

## Task 8: Update Store

**Files:**
- Modify: `src/components/Store.tsx`

- [ ] **Step 1: Update section background**

Old: `className="py-24 bg-navy-light border-b border-line"`  
New: `className="py-24 bg-white border-b border-slate-200"`

- [ ] **Step 2: Update section counter and line**

Old:
```tsx
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
<span className="flex-1 h-px bg-line" />
```
New:
```tsx
<span className="font-mono text-[0.68rem] text-slate-400 uppercase tracking-[0.06em]">
<span className="flex-1 h-px bg-slate-200" />
```

- [ ] **Step 3: Update heading and subtext**

Old:
```tsx
className="font-heading font-extrabold text-white tracking-[-0.03em]"
...
TIENDA DE PÁDEL{" "}
<span className="text-lime">EN EL CLUB</span>
...
<p className="mt-3 text-white/45 text-[16px] max-w-xl">
```
New:
```tsx
className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em]"
...
TIENDA DE PÁDEL{" "}
<span className="text-blue">EN EL CLUB</span>
...
<p className="mt-3 text-slate-500 text-[16px] max-w-xl">
```

- [ ] **Step 4: Update the big store card**

Old: `className="bg-navy border border-line rounded p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center"`  
New: `className="bg-blue-light border border-slate-200 rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center"`

- [ ] **Step 5: Update card body text**

Old: `<p className="text-white/60 leading-relaxed text-[16px] max-w-xl mb-8">`  
New: `<p className="text-slate-500 leading-relaxed text-[16px] max-w-xl mb-8">`

Old store name: `<span className="text-white font-medium">Punto Pádel CR</span>`  
New: `<span className="text-[#1A1A2E] font-medium">Punto Pádel CR</span>`

- [ ] **Step 6: Update product pills**

Old: `className="flex items-center gap-2 bg-lime/5 border border-lime/15 px-4 py-2 rounded-full"`  
New: `className="flex items-center gap-2 bg-blue/5 border border-blue/15 px-4 py-2 rounded-full"`

Old pill text: `className="font-heading font-semibold text-[0.72rem] text-white/70 uppercase tracking-[0.05em]"`  
New: `className="font-heading font-semibold text-[0.72rem] text-slate-600 uppercase tracking-[0.05em]"`

Old pill icon strokes (in `pills` array): `stroke="#C8F135"` → `stroke="#1B4FD8"`

- [ ] **Step 7: Update "visitanos" secondary button**

Old: `className="border border-line text-white/45 font-heading text-[14px] font-semibold tracking-tight px-7 py-3.5 rounded-full text-center flex items-center justify-center"`  
New: `className="border border-slate-200 text-slate-400 font-heading text-[14px] font-semibold tracking-tight px-7 py-3.5 rounded-full text-center flex items-center justify-center"`

- [ ] **Step 8: Update store SVG decorative illustration**

Replace the inner SVG with blue-themed version:
```tsx
<svg
  width="180"
  height="180"
  viewBox="0 0 180 180"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <rect x="1" y="1" width="178" height="178" rx="8" stroke="#1B4FD8" strokeWidth="1" strokeDasharray="8 4" opacity="0.3" />
  <rect x="16" y="16" width="148" height="148" rx="4" fill="#EEF3FF" stroke="#1B4FD8" strokeWidth="1" opacity="0.5" />
  <path d="M90 50 C 100 65, 100 95, 90 110 M 90 50 C 80 65, 80 95, 90 110" stroke="#1B4FD8" strokeWidth="1.5" opacity="0.6" />
  <line x1="60" y1="80" x2="120" y2="80" stroke="#1B4FD8" strokeWidth="1.5" opacity="0.5" />
  <circle cx="90" cy="80" r="4" fill="#1B4FD8" opacity="0.8" />
  <circle cx="90" cy="80" r="20" stroke="#1B4FD8" strokeWidth="1" opacity="0.15" />
  <text x="90" y="138" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#1B4FD8" opacity="0.5" letterSpacing="2">PUNTO PÁDEL CR</text>
</svg>
```

- [ ] **Step 9: Commit**
```bash
git add src/components/Store.tsx
git commit -m "feat: store — white bg, blue-light card, blue accents"
```

---

## Task 9: Update Pricing

**Files:**
- Modify: `src/components/Pricing.tsx`

- [ ] **Step 1: Update section background**

Old: `className="py-24 bg-navy-light border-b border-line"`  
New: `className="py-24 bg-blue-light border-b border-slate-200"`

- [ ] **Step 2: Update section counter and line**

Old:
```tsx
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
<span className="flex-1 h-px bg-line" />
```
New:
```tsx
<span className="font-mono text-[0.68rem] text-slate-400 uppercase tracking-[0.06em]">
<span className="flex-1 h-px bg-slate-200" />
```

- [ ] **Step 3: Update heading**

Old:
```tsx
className="font-heading font-extrabold text-white tracking-[-0.03em]"
...
PRECIOS SIMPLES,{" "}
<span className="text-lime">SIN SORPRESAS</span>
```
New:
```tsx
className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em]"
...
PRECIOS SIMPLES,{" "}
<span className="text-blue">SIN SORPRESAS</span>
```

- [ ] **Step 4: Update pricing cards**

Old featured card:
```tsx
"bg-navy border border-lime shadow-[0_0_40px_rgba(200,241,53,0.08)]"
```
New featured card:
```tsx
"bg-blue border border-blue-dark shadow-[0_0_40px_rgba(27,79,216,0.25)]"
```

Old non-featured card: `"bg-navy border border-line"`  
New: `"bg-white border border-slate-200"`

- [ ] **Step 5: Update card text colors — make all internal text conditional on `plan.featured`**

Update the non-featured badge (in the `plans` data array at top of file):

Old: `badgeClass: "bg-line/60 text-white/50"`  
New: `badgeClass: "bg-slate-100 text-slate-500"`

Update card heading (was hardcoded `text-white`):

Old: `className="font-heading text-[24px] font-semibold text-white tracking-[-0.01em]"`  
New: `` className={`font-heading text-[24px] font-semibold tracking-[-0.01em] ${plan.featured ? "text-white" : "text-[#1A1A2E]"}`} ``

Update hours text (was hardcoded):

Old: `className="text-white/40 text-[13px] font-mono uppercase tracking-[0.04em]"`  
New: `` className={`text-[13px] font-mono uppercase tracking-[0.04em] ${plan.featured ? "text-white/40" : "text-slate-400"}`} ``

Update price number color:

Old: `` plan.featured ? "text-lime" : "text-white" ``  
New: `` plan.featured ? "text-lime" : "text-blue" ``

Update price unit:

Old: `<span className="text-white/40 mb-2 text-[14px]">`  
New: `` <span className={`mb-2 text-[14px] ${plan.featured ? "text-white/40" : "text-slate-400"}`}> ``

Update description:

Old: `className="text-white/45 text-[14px] leading-relaxed"`  
New: `` className={`text-[14px] leading-relaxed ${plan.featured ? "text-white/45" : "text-slate-500"}`} ``

Non-featured CTA button:

Old: `"border border-line text-white/70 hover:border-lime hover:text-lime"`  
New: `"border border-slate-300 text-slate-500 hover:border-blue hover:text-blue"`

- [ ] **Step 6: Update disclaimer and bottom CTAs**

Old: `className="text-center text-white/35 mt-10 max-w-md mx-auto text-[13px]"`  
New: `className="text-center text-slate-400 mt-10 max-w-md mx-auto text-[13px]"`

Bottom secondary button:

Old: `className="inline-flex items-center gap-2 border border-line text-white/60 font-heading text-[15px] font-semibold tracking-tight px-8 py-4 rounded-full hover:border-lime hover:text-lime transition-colors"`  
New: `className="inline-flex items-center gap-2 border border-slate-200 text-slate-500 font-heading text-[15px] font-semibold tracking-tight px-8 py-4 rounded-full hover:border-blue hover:text-blue transition-colors"`

- [ ] **Step 7: Commit**
```bash
git add src/components/Pricing.tsx
git commit -m "feat: pricing — blue-light bg, blue featured card, white non-featured"
```

---

## Task 10: Update HowToBook

**Files:**
- Modify: `src/components/HowToBook.tsx`

- [ ] **Step 1: Update section background**

Old: `className="py-24 bg-navy-light border-b border-line"`  
New: `className="py-24 bg-blue-light border-b border-slate-200"`

- [ ] **Step 2: Update section counter and line**

Old:
```tsx
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
<span className="flex-1 h-px bg-line" />
```
New:
```tsx
<span className="font-mono text-[0.68rem] text-slate-400 uppercase tracking-[0.06em]">
<span className="flex-1 h-px bg-slate-200" />
```

- [ ] **Step 3: Update heading**

Old:
```tsx
className="font-heading font-extrabold text-white tracking-[-0.03em]"
...
¿CÓMO{" "}
<span className="text-lime">RESERVAR</span>?
```
New:
```tsx
className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em]"
...
¿CÓMO{" "}
<span className="text-blue">RESERVAR</span>?
```

- [ ] **Step 4: Update connector line between steps**

Old: `className="hidden md:block absolute top-10 left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-px bg-line"`  
New: `className="hidden md:block absolute top-10 left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-px bg-slate-300"`

- [ ] **Step 5: Update step text (keep lime circles — they work as CTA-like markers)**

Old step title: `className="font-heading text-[19px] font-semibold text-white tracking-[-0.01em] mb-3"`  
New: `className="font-heading text-[19px] font-semibold text-[#1A1A2E] tracking-[-0.01em] mb-3"`

Old step body: `className="text-white/45 leading-relaxed text-[15px]"`  
New: `className="text-slate-500 leading-relaxed text-[15px]"`

- [ ] **Step 6: Commit**
```bash
git add src/components/HowToBook.tsx
git commit -m "feat: howtobook — blue-light bg, dark text, lime step circles kept"
```

---

## Task 11: Update Location

**Files:**
- Modify: `src/components/Location.tsx`

- [ ] **Step 1: Update section background**

Old: `className="py-24 bg-navy border-b border-line"`  
New: `className="py-24 bg-white border-b border-slate-200"`

- [ ] **Step 2: Update section counter and lines**

Old:
```tsx
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
  (05) Ubicación
</span>
<span className="flex-1 h-px bg-line" />
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em] hidden sm:block">
  09°56′N · 84°09′W
</span>
```
New:
```tsx
<span className="font-mono text-[0.68rem] text-slate-400 uppercase tracking-[0.06em]">
  (05) Ubicación
</span>
<span className="flex-1 h-px bg-slate-200" />
<span className="font-mono text-[0.68rem] text-slate-400 uppercase tracking-[0.06em] hidden sm:block">
  09°56′N · 84°09′W
</span>
```

- [ ] **Step 3: Update heading**

Old:
```tsx
className="font-heading font-extrabold text-white tracking-[-0.03em]"
...
DÓNDE{" "}
<span className="text-lime">ENCONTRARNOS</span>
```
New:
```tsx
className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em]"
...
DÓNDE{" "}
<span className="text-blue">ENCONTRARNOS</span>
```

- [ ] **Step 4: Update map iframe wrapper**

Old: `className="rounded overflow-hidden border border-line shadow-xl aspect-video lg:aspect-auto lg:h-[420px]"`  
New: `className="rounded-xl overflow-hidden border border-slate-200 shadow-md aspect-video lg:aspect-auto lg:h-[420px]"`

- [ ] **Step 5: Update info card**

Old: `className="bg-navy-card rounded border border-line p-8 flex flex-col gap-6"`  
New: `className="bg-blue-light rounded-xl border border-slate-200 p-8 flex flex-col gap-6"`

Old card heading: `className="font-heading text-[22px] font-semibold text-white tracking-[-0.01em]"`  
New: `className="font-heading text-[22px] font-semibold text-[#1A1A2E] tracking-[-0.01em]"`

Old contact info wrapper: `className="flex flex-col gap-5 text-white/60"`  
New: `className="flex flex-col gap-5 text-slate-500"`

Old primary text inside: `className="text-white font-medium text-[14px]"`  
New: `className="text-[#1A1A2E] font-medium text-[14px]"`

Old secondary text: `className="text-[13px] text-white/45 mt-0.5"`  
New: `className="text-[13px] text-slate-400 mt-0.5"`

Old phone link hover: `className="text-white font-medium text-[14px] hover:text-lime transition-colors"`  
New: `className="text-[#1A1A2E] font-medium text-[14px] hover:text-blue transition-colors"`

Old hours label: `className="text-white font-medium text-[14px]"`  
New: `className="text-[#1A1A2E] font-medium text-[14px]"`

Old courts label: `className="text-white font-medium text-[14px]"`  
New: `className="text-[#1A1A2E] font-medium text-[14px]"`

- [ ] **Step 6: Update icon SVG strokes** (4 SVGs in the contact info)

Change `stroke="#C8F135"` → `stroke="#1B4FD8"` in all 4 inline SVGs.

- [ ] **Step 7: Update button row in info card**

Old divider: `className="flex flex-col sm:flex-row gap-3 mt-2 pt-4 border-t border-line"`  
New: `className="flex flex-col sm:flex-row gap-3 mt-2 pt-4 border-t border-slate-200"`

Old secondary button (Llamar): `className="flex-1 border border-line text-white/60 font-heading text-[14px] font-semibold tracking-tight py-3 rounded hover:border-lime hover:text-lime transition-colors text-center"`  
New: `className="flex-1 border border-slate-200 text-slate-500 font-heading text-[14px] font-semibold tracking-tight py-3 rounded-lg hover:border-blue hover:text-blue transition-colors text-center"`

- [ ] **Step 8: Commit**
```bash
git add src/components/Location.tsx
git commit -m "feat: location — white bg, blue-light card, blue icons"
```

---

## Task 12: Update Instagram

**Files:**
- Modify: `src/components/Instagram.tsx`

- [ ] **Step 1: Update section background**

Old: `className="py-24 bg-navy-light border-b border-line"`  
New: `className="py-24 bg-blue-light border-b border-slate-200"`

- [ ] **Step 2: Update section divider lines and label**

Old:
```tsx
<span className="flex-1 h-px bg-line" />
<span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
  Instagram
</span>
<span className="flex-1 h-px bg-line" />
```
New:
```tsx
<span className="flex-1 h-px bg-slate-200" />
<span className="font-mono text-[0.68rem] text-slate-400 uppercase tracking-[0.06em]">
  Instagram
</span>
<span className="flex-1 h-px bg-slate-200" />
```

- [ ] **Step 3: Update heading and handle**

Old:
```tsx
className="font-heading font-medium text-white tracking-[-0.03em] mb-3"
...
SEGUINOS EN{" "}
<span className="text-lime">INSTAGRAM</span>
...
<p className="text-lime font-heading text-[22px] sm:text-[28px] font-semibold tracking-[-0.02em] mb-4">
  @epicpadelcr
</p>
<p className="text-white/45 text-[16px] max-w-md mx-auto">
```
New:
```tsx
className="font-heading font-medium text-[#1A1A2E] tracking-[-0.03em] mb-3"
...
SEGUINOS EN{" "}
<span className="text-blue">INSTAGRAM</span>
...
<p className="text-blue font-heading text-[22px] sm:text-[28px] font-semibold tracking-[-0.02em] mb-4">
  @epicpadelcr
</p>
<p className="text-slate-500 text-[16px] max-w-md mx-auto">
```

- [ ] **Step 4: Update PostPlaceholder cells**

Old: `className="aspect-square bg-navy border border-lime/20 rounded overflow-hidden relative flex items-center justify-center group hover:border-lime/50 transition-colors duration-200"`  
New: `className="aspect-square bg-white border border-blue/20 rounded-lg overflow-hidden relative flex items-center justify-center group hover:border-blue/50 transition-colors duration-200"`

Old gradient: `className="absolute inset-0 bg-gradient-to-br from-lime/[0.04] to-transparent"`  
New: `className="absolute inset-0 bg-gradient-to-br from-blue/[0.04] to-transparent"`

Old icon strokes: `stroke="#C8F135"` → `stroke="#1B4FD8"` (both the video and photo SVGs)

- [ ] **Step 5: Update footer note**

Old: `className="font-mono text-[0.62rem] text-muted uppercase tracking-[0.06em]"`  
New: `className="font-mono text-[0.62rem] text-slate-400 uppercase tracking-[0.06em]"`

- [ ] **Step 6: Commit**
```bash
git add src/components/Instagram.tsx
git commit -m "feat: instagram — blue-light bg, blue post cells, blue accents"
```

---

## Task 13: Update ComunidadWhatsApp

**Files:**
- Modify: `src/components/ComunidadWhatsApp.tsx`

- [ ] **Step 1: Update section background**

Old: `className="py-20 bg-navy border-b border-line"`  
New: `className="py-20 bg-white border-b border-slate-200"`

- [ ] **Step 2: Update card border**

Old: `className="border border-line rounded-xl overflow-hidden"`  
New: `className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm"`

- [ ] **Step 3: Update heading**

Old:
```tsx
COMUNIDAD{" "}
<span className="text-lime">EPIC PÁDEL</span>
```
With text-white heading
New:
```tsx
className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.02em]"
...
COMUNIDAD{" "}
<span className="text-blue">EPIC PÁDEL</span>
```

- [ ] **Step 4: Update subtext**

Old: `className="mt-2 text-white/45 text-[15px] max-w-lg"`  
New: `className="mt-2 text-slate-500 text-[15px] max-w-lg"`

- [ ] **Step 5: WhatsApp button stays green — no change needed**

The `bg-[#25D366]` button stays as-is (WhatsApp brand color).

- [ ] **Step 6: Commit**
```bash
git add src/components/ComunidadWhatsApp.tsx
git commit -m "feat: comunidad — white bg, blue accents, WA button unchanged"
```

---

## Task 14: Update FinalCTA

**Files:**
- Modify: `src/components/FinalCTA.tsx`

- [ ] **Step 1: Replace section element** (was lime, now blue)

Old:
```tsx
<section
  className="relative py-32 bg-lime overflow-hidden"
  ref={ref}
  style={{ color: "#121909" }}
>
  <div
    className="absolute inset-0 opacity-[0.08]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(18,25,9,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(18,25,9,0.5) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />
```
New:
```tsx
<section
  className="relative py-32 bg-blue overflow-hidden"
  ref={ref}
>
  {/* Background photo */}
  <img
    src="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?w=1600&q=80&auto=format&fit=crop"
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none"
    aria-hidden="true"
  />
  {/* Grid overlay */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />
```

- [ ] **Step 2: Update section counter**

Old:
```tsx
<span
  className="font-mono text-[0.68rem] uppercase tracking-[0.06em] opacity-60"
>
  (06) Reservar
</span>
<span className="flex-1 h-px opacity-20" style={{ background: "#121909" }} />
```
New:
```tsx
<span className="font-mono text-[0.68rem] uppercase tracking-[0.06em] text-white/50">
  (06) Reservar
</span>
<span className="flex-1 h-px bg-white/20" />
```

- [ ] **Step 3: Update heading**

Old:
```tsx
className="font-heading font-extrabold tracking-[-0.04em] leading-[0.92]"
style={{
  fontSize: "clamp(56px, 9vw, 128px)",
  color: "#121909",
}}
```
New:
```tsx
className="font-heading font-extrabold tracking-[-0.04em] leading-[0.92] text-white"
style={{ fontSize: "clamp(56px, 9vw, 128px)" }}
```

- [ ] **Step 4: Update subparagraph**

Old:
```tsx
className="mt-6 text-[17px] max-w-xl opacity-70"
style={{ color: "#121909" }}
```
New:
```tsx
className="mt-6 text-[17px] max-w-xl text-white/70"
```

- [ ] **Step 5: Update CTA buttons**

Old primary button:
```tsx
className="inline-flex items-center gap-2 bg-navy text-white font-heading text-[15px] font-semibold tracking-tight px-8 py-4 rounded-full hover:bg-navy-light transition-colors"
```
New primary button (lime on blue):
```tsx
className="inline-flex items-center gap-2 bg-lime text-accent-ink font-heading text-[15px] font-semibold tracking-tight px-8 py-4 rounded-full hover:bg-lime-dark transition-colors"
```

Old secondary button:
```tsx
className="inline-flex items-center gap-3 font-heading text-[15px] font-semibold tracking-tight px-8 py-4 rounded-full border-2 border-navy/20 hover:border-navy/50 transition-colors"
style={{ color: "#121909" }}
```
New:
```tsx
className="inline-flex items-center gap-3 font-heading text-[15px] font-semibold tracking-tight px-8 py-4 rounded-full border-2 border-white/30 text-white hover:border-white transition-colors"
```

- [ ] **Step 6: Commit**
```bash
git add src/components/FinalCTA.tsx
git commit -m "feat: finalcta — blue bg, white text, lime primary CTA, WA secondary"
```

---

## Task 15: Update Footer

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update footer background and top border**

Old: `className="bg-navy border-t border-line py-14"`  
New: `className="bg-[#0F2F8A] border-t border-white/10 py-14"`

- [ ] **Step 2: Update tagline and meta**

Old: `<p className="text-white/35 text-[13px] mt-1">El pádel llegó a Grecia.</p>`  
New: `<p className="text-white/50 text-[13px] mt-1">El pádel llegó a Grecia.</p>`

Old: `className="font-mono text-[0.62rem] text-muted uppercase tracking-[0.06em] mt-1"`  
New: `className="font-mono text-[0.62rem] text-white/40 uppercase tracking-[0.06em] mt-1"`

- [ ] **Step 3: Update section labels**

Old (×2): `className="font-mono text-[0.62rem] text-muted uppercase tracking-[0.06em] mb-5"`  
New: `className="font-mono text-[0.62rem] text-white/40 uppercase tracking-[0.06em] mb-5"`

- [ ] **Step 4: Update nav links**

Old: `className="text-white/45 hover:text-lime transition-colors text-[14px]"`  
New: `className="text-white/50 hover:text-lime transition-colors text-[14px]"`

- [ ] **Step 5: Update contact list**

Old: `className="flex flex-col gap-2.5 text-[14px] text-white/45"`  
New: `className="flex flex-col gap-2.5 text-[14px] text-white/50"`

Old phone link hover: `className="hover:text-lime transition-colors"`  
New: stays `className="hover:text-lime transition-colors"` (lime works on dark blue)

- [ ] **Step 6: Update bottom bar**

Old: `className="border-t border-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"`  
New: `className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"`

Old (×2): `className="font-mono text-[0.6rem] text-muted uppercase tracking-[0.06em]"`  
New: `className="font-mono text-[0.6rem] text-white/35 uppercase tracking-[0.06em]"`

- [ ] **Step 7: Commit**
```bash
git add src/components/Footer.tsx
git commit -m "feat: footer — deep navy bg, white text"
```

---

## Task 16: Visual QA

- [ ] **Step 1: Run dev server**
```bash
npm run dev
```
Open `http://localhost:3000` in browser.

- [ ] **Step 2: Check each section** (scroll top to bottom)
  - Navbar: transparent on hero, white pill on scroll
  - Hero: blue bg + faint photo + white text
  - WhyEpic: soft blue-light bg, white cards
  - Courts: white bg, blue-light cards, blue SVG
  - Pozos: blue-light bg, white cards, blue day badges
  - Store: white bg, blue-light card
  - Pricing: blue-light bg, blue featured card, white non-featured
  - HowToBook: blue-light bg, lime circles, dark text
  - Location: white bg, blue-light info card, blue icons
  - Instagram: blue-light bg, white post cells
  - ComunidadWhatsApp: white bg, green WA button
  - FinalCTA: blue bg + faint photo + white text + lime primary button
  - Footer: deep blue bg

- [ ] **Step 3: Check mobile** (DevTools → responsive, 375px width)
  - Navbar mobile menu: white bg, dark text
  - Hero text wraps cleanly
  - Pricing cards stack vertically
  - All CTAs accessible

- [ ] **Step 4: Final commit**
```bash
git add -A
git commit -m "feat: complete aesthetic redesign — blue/white sports theme"
```
