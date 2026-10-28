# GharCares — Cinematic Pre-Launch Website

> **A New Era of Home Living Is Coming.**  
> *Home Help. Right Away.*

---

## Overview

A premium, cinematic announcement website for **GharCares**, crafted to evoke curiosity, anticipation, and brand prestige. Designed with dark cinematic aesthetics, real-time 3D interactive graphics, atmospheric volumetric lighting, smooth cursor tracking, and mobile-first responsiveness.

---

## Brand Identity & Design System

- **Brand Name**: GharCares
- **Primary Slogan**: *A New Era of Home Living Is Coming.*
- **Secondary Slogan / Tagline**: *Home Help. Right Away.*
- **Status**: `COMING SOON`
- **Color Palette**:
  - Void & Deep Space: `#03070E`, `#050B16`, `#0A1324`
  - Radiant Cyan: `#00E5FF`
  - Luminous Emerald: `#00E676`
  - Solar Amber: `#FFB300`
- **Typography**: Outfit (Headlines & Display), Plus Jakarta Sans (Body)
- **Official Instagram**: [@ghar.cares](https://www.instagram.com/ghar.cares/)
- **Direct Correspondence**: [support@gharcares.com](https://mail.google.com/mail/?view=cm&fs=1&to=support@gharcares.com)
- **Official Domain**: [https://gharcares.com/](https://gharcares.com/)

---

## Features

1. **Signature 3D Experience (Three.js & WebGL)**:
   - Real-time rotating crystalline prism with refraction and dispersion effects.
   - Dual glowing turquoise & emerald energy rings with orbital motion.
   - Atmospheric particle dust field with interactive parallax responsive to pointer and scroll depth.
   - Graceful CSS fallback for environments without WebGL support.
   - Automatically throttles/pauses when tab is inactive to preserve battery and GPU.
2. **Desktop Custom Cursor Tracker**:
   - Luminous cyan point with smooth trailing glow ring.
   - Interpolated motion using `requestAnimationFrame` and magnetic pull over interactive elements.
   - Automatically disabled on touchscreens (`pointer: coarse`) and when `prefers-reduced-motion` is active.
3. **Cinematic Story Sections**:
   - **Section A — The Arrival**: Official logo reveal, status pill, headline, and scroll indicator.
   - **Section B — The Mystery**: Sequential revelation of curiosity-inducing messaging.
   - **Section C — The Brand**: Focused brand spotlight on the GharCares mark and tagline.
   - **Section D — The Social Invitation**: Direct call-to-action button to Instagram and direct Gmail compose.
   - **Section E — The Footer**: Refined minimal footer with brand mark, status, links, and current copyright.
4. **Instant Gmail Compose Integration**:
   - Clicking email links opens a new tab directly in Gmail with recipient prefilled.
5. **Zero-Spoiler Secrecy**:
   - Absolutely no service descriptions, booking interfaces, pricing, or product explanations.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vite.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Icons**: [Lucide React](https://lucide.dev/) + Bespoke SVG Brand Icons
- **Styling**: Vanilla CSS tokens & Glassmorphism Design System

---

## Getting Started

### Prerequisites

- Node.js `v18+` or `v20+` (tested on Node `v24`)
- npm `v9+`

### Installation

```bash
# Clone the repository
git clone https://github.com/Rajesh927/Gharcares-Pre--launch.git
cd Gharcares-Pre--launch

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:5173/`.

### Production Build

```bash
npm run build
```

Builds optimized, code-split production assets into `dist/`.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally at `http://localhost:4173/`.

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub `main` branch.
2. Import repository in [Vercel](https://vercel.com).
3. Build Settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. In Project Settings → **Domains**, attach `gharcares.com`.

### Netlify

1. Link repository in [Netlify](https://netlify.com).
2. Set Build Command: `npm run build` and Publish Directory: `dist`.
3. Add custom domain `gharcares.com`.

### GitHub Pages

A ready-to-run GitHub Actions workflow is provided in `.github/workflows/deploy.yml`. Enable GitHub Pages under **Settings → Pages → Source: GitHub Actions**.

---

## License

© 2026 GharCares. All rights reserved.
