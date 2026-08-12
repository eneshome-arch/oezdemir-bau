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
- Ultra-moderner Webauftritt, cinematisch, Apple/Tesla-Level Design
- Lightswind UI Komponenten bevorzugen (npx lightswind add <name>)

## UI/Animation Skills (immer anwenden)
- Concentric border radius: outer = inner + padding
- Split+stagger enter animations: ~100ms zwischen Elementen, blur 4px→0, opacity 0→1, translateY
- Scale on press: 0.96, nie unter 0.95
- Shadows für Elevation, Borders für Struktur
- Nie `transition: all` — exakte Properties angeben
- Type scale: Headings line-height 1.1, Body 1.5–1.6
- Letter-spacing: negativ für groß (display), positiv für klein (caps/labels)
- text-wrap: balance für Headings, pretty für Beschreibungen
- 60–75 Zeichen Measure (max-w-xl oder max-w-2xl)
- Native Elemente first (button/a/dialog)
- focus-visible für Focus-Ringe
- 24x24px Minimum Hit Areas
- prefers-reduced-motion respektieren
- Verb-first Buttons (spezifische Aktion)
- Errors: sagen wie man fixt, neben dem Fehler platzieren

## Nutzer
- Enes, Inhaber Zeitblick Personalservice, arbeitet auch an Özdemir Bau Website
- Kommuniziert auf Deutsch, kurz und direkt
- Technisch interessiert aber kein Entwickler — klare Anleitungen bei Drittanbieter-Tools
- Trifft inhaltliche und gestalterische Entscheidungen selbst
