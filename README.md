# Özdemir Bau GmbH — Website

Cinematische Multi-Page Website für Özdemir Bau GmbH, Bauunternehmen aus Hannover/Garbsen.

## Tech Stack

- Vite + React + React Router
- Tailwind CSS 4 + Lightswind UI
- GSAP + ScrollTrigger, Framer Motion, Three.js
- Lucide React Icons
- Docker + Nginx (Coolify Deployment)

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
