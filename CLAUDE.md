# Özdemir Bau GmbH — Website

## Projekt
Cinematische Multi-Page Website für Özdemir Bau GmbH, ein Bauunternehmen aus Hannover/Garbsen.
Geschäftsführer: Cem Özdemir. Adresse: Bremer Straße 31, 30827 Garbsen.

## Tech Stack
- **Framework:** Vite + React + React Router
- **Styling:** Tailwind CSS 4 + Lightswind UI
- **Animationen:** GSAP + ScrollTrigger, Framer Motion, Three.js
- **Icons:** Lucide React
- **Deployment:** Docker + Nginx auf Coolify

## Design
- Farbschema: Navy (#0f1923) + Orange-Akzent (#e8710a) + Beton-Grau (#e8e5e0) + Stein-Weiß (#f5f0eb)
- Stil: Premium-Bauunternehmen, authentisch, keine generischen KI-Elemente
- Font: Inter (Variable)
- Einzigartige Layouts: Split-Screen, Full-Bleed, Masonry, 3D Carousel

## Seiten
- **Home:** Hero mit AnimatedFireGlow + 3D Image Slider, TypewriterInput-Banner, 3D Arc Carousel (Leistungen), Privat/Gewerblich Hover-Cards, Standort mit Google Maps, Kundenstimmen mit 3D ScrollTrigger, CTA Split
- **Leistungen:** 6 alternierte Split-Screen Sektionen
- **Projekte:** InfiniteDrift Hero-Galerie, Filter-Tabs, Masonry-Grid
- **Über uns:** GF-Portrait, Geschichte, Timeline, Werte
- **Kontakt:** Kontaktinfos, Formular + Google Maps
- **Karriere:** Benefits, Accordion-Stellenangebote, Bewerbungsformular

## Struktur
```
src/
  components/       → Navbar, Footer, ScrollToTop, AnimatedFireGlow, ThreeDArcCarousel, TypewriterInput
  components/lightswind/ → 3d-image-slider, infinite-drift, HamburgerMenuOverlay, globe, ThreeDScrollTrigger
  pages/            → Home, Leistungen, Projekte, UeberUns, Kontakt, Karriere
  hooks/            → use-mobile, use-toast
  lib/              → utils (cn)
```

## Deployment
- GitHub: eneshome-arch/oezdemir-bau
- Coolify: Dockerfile-basiert, Nginx mit SPA-Routing, Port 80

## Design-Prinzipien
- active:scale-[0.96] auf Buttons
- Stagger-Animationen beim Scrollen
- CSS Custom Properties für Theming
- focus-visible, prefers-reduced-motion
