# Özdemir Bau GmbH — Website

## Projekt
Cinematische Multi-Page Website für Özdemir Bau GmbH, ein Bauunternehmen aus Hannover.
Geschäftsführer: Cem Özdemir.

## Tech Stack
- **Framework:** Vite + React + React Router
- **Styling:** Tailwind CSS 4
- **Animationen:** GSAP + ScrollTrigger, Lenis (Smooth Scroll)
- **Icons:** Lucide React

## Design
- Farbschema: Navy (#0f1923) + Orange-Akzent (#e8710a) + Beton-Grau + Stein-Weiß
- Stil: Premium-Bauunternehmen, authentisch, keine generischen KI-Elemente
- Font: Inter (Variable)
- Keine Standard-Karten — einzigartige Layouts (Split-Screen, Full-Bleed, Masonry)

## Struktur
```
src/
  components/    → Navbar, Footer, ScrollToTop
  pages/         → Home, Leistungen, Projekte, UeberUns, Kontakt, Karriere
  hooks/         → useLenis, useReveal
```

## Design-Skills (jakubkrehel/skills)
Bei jeder UI-Arbeit diese Prinzipien anwenden:
- **Animationen:** Split+stagger enter (~100ms), active:scale-[0.96], nie `transition: all`
- **Typografie:** Headings line-height 1.08, body 1.6, text-wrap balance/pretty
- **Layout:** Group with space not lines, 2x gap rule, logical properties
- **Accessibility:** Native elements, focus-visible, 24px min hit areas, prefers-reduced-motion
- **Farben:** CSS Custom Properties, APCA Kontrast
