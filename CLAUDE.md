# Özdemir Bau GmbH — Website

## Projekt
Cinematische Website für Özdemir Bau GmbH, ein Bauunternehmen aus Hannover.
Geschäftsführer: Cem Özdemir.

## Tech Stack
- **Framework:** Vite + React
- **Styling:** Tailwind CSS 4
- **Animationen:** GSAP + ScrollTrigger, Framer Motion, Lenis (Smooth Scroll)
- **3D:** Three.js + React Three Fiber + Drei
- **Icons:** Lucide React

## Design
- Farbschema: Schwarz (#000) + Gold (#d4af37) + Weiß
- Stil: Ultra-modern, cinematisch, Apple/Tesla-Level
- Font: Inter (Variable)

## Struktur
```
src/
  components/    → Navbar, wiederverwendbare UI-Elemente
  sections/      → Hero, Services, Stats, Projects, About, Contact, Footer
  hooks/         → useLenis, useReveal
  assets/        → Bilder, Videos
```

## Design-Skills (jakubkrehel/skills)
Bei jeder UI-Arbeit diese Prinzipien anwenden:
- **Animationen:** Split+stagger enter (~100ms), blur 4px→0, active:scale-[0.96], nie `transition: all`
- **Typografie:** Headings line-height 1.1, body 1.5–1.6, text-wrap balance/pretty, 60-75 chars max
- **Layout:** Group with space not lines, 2x gap rule, logical properties
- **Accessibility:** Native elements, focus-visible, 24px min hit areas, prefers-reduced-motion
- **Farben:** OKLCH wo möglich, APCA Kontrast Lc 75+ für Body-Text
- **Writing:** Verb-first buttons, sentence case, plain words
