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
- **Home:** Hero mit AnimatedFireGlow + 3D Image Slider, TypewriterInput-Banner, ParticlesBackground + 3D Arc Carousel (Leistungen), InfiniteDrift Projekte-Galerie, Privat/Gewerblich Hover-Cards, Standort mit Google Maps, Kundenstimmen mit 3D ScrollTrigger, CTA Split
- **Leistungen:** 9 alternierte Split-Screen Sektionen, ParticlesBackground Hero
- **Projekte:** Filter-Tabs, Masonry-Grid, ParticlesBackground Hero
- **Über uns:** GF-Portrait, Geschichte, Timeline, Werte, ParticlesBackground Hero
- **Kontakt:** Kontaktinfo-Karten mit Hover-Inversion, Formular + Phone-Card Google Maps, ParticlesBackground Hero
- **Karriere:** Benefits, 12 Accordion-Stellenangebote, Online-Bewerbungsformular mit Datei-Upload (FormSubmit.co), ParticlesBackground Hero

## Struktur
```
src/
  components/       → Navbar (eigenes Mobile-Menü mit orangem Fullscreen-Overlay), Footer, ScrollToTop, AnimatedFireGlow, ThreeDArcCarousel, TypewriterInput
  components/lightswind/ → 3d-image-slider, infinite-drift, globe, ThreeDScrollTrigger, ParticlesBackground, satin-flow
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
