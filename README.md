# Özdemir Bau GmbH — Website

Cinematische Multi-Page Website für Özdemir Bau GmbH, Bauunternehmen aus Hannover/Garbsen.

## Tech Stack

- Vite + React + React Router
- Tailwind CSS 4 + Lightswind UI
- GSAP + ScrollTrigger, Framer Motion, Three.js
- Lucide React Icons
- Docker + Nginx (Coolify Deployment)

## Seiten

- **Home** — Hero mit AnimatedFireGlow + 3D Image Slider, TypewriterInput-Banner, ParticlesBackground + 3D Arc Carousel (Leistungen), InfiniteDrift Projekte-Galerie, Privat/Gewerblich Hover-Cards, Standort mit Google Maps, Kundenstimmen mit 3D ScrollTrigger, CTA Split
- **Leistungen** — 9 alternierte Split-Screen Sektionen mit ParticlesBackground Hero
- **Projekte** — Filter-Tabs, Masonry-Grid mit ParticlesBackground Hero
- **Über uns** — GF-Portrait, Geschichte, Timeline, Werte mit ParticlesBackground Hero
- **Kontakt** — Kontaktinfo-Karten, Formular + Phone-Card Google Maps mit ParticlesBackground Hero
- **Karriere** — Benefits, 12 Accordion-Stellenangebote, Online-Bewerbungsformular mit Datei-Upload, ParticlesBackground Hero

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Docker-basiert via Coolify:

```bash
docker build -t oezdemir-bau .
docker run -p 80:80 oezdemir-bau
```
