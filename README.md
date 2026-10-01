# ITZ FIZZ // Kinetic Aerodynamics — Scroll-Driven Hero Section Animation

> A portfolio-grade frontend assignment demonstrating scroll-driven kinetics, character-by-character letter reveal, dynamic trajectory translation, and telemetry metric statistics built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **GSAP ScrollTrigger**.

Inspired by: [paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation)

---

## ⚡ Key Highlights & Architecture

- **Scroll-Driven Kinetics**: Pinned viewport (`pin: true`) with scrub-based (`scrub: 1.2`) interpolation — animation progress is 100% mathematically synchronized with scroll offset, working bidirectionally (scrolling down propels the car; scrolling up reverses smoothly).
- **Dynamic Letter Ignition**: Letter-spaced title `W E L C O M E   I T Z   F I Z Z` where each letter illuminates dynamically with a glowing cyan/lime burst as the vehicle's headlights and front nose pass its X coordinates.
- **Sequential Telemetry Metrics**: Glassmorphic metric cards (`58% Lateral Grip`, `2.1s 0-100 km/h`, `99.4% Efficiency Matrix`, `40% Drag Reduction`) pop into view at calculated scroll intervals.
- **Initial Load Animation**: Non-blocking GSAP entrance timeline on page mount revealing the navigation bar, HUD telemetry bar, carbon road surface, and starting grid alignment.
- **Self-Contained Vector Asset**: High-resolution bespoke SVG top-down aerodynamic hypercar (`public/car-top-view.svg`) with glowing laser headlights, thruster flares, and carbon aerodynamic elements. Zero external dependencies or broken links.
- **Responsive Architecture**: `gsap.matchMedia()` recalculates travel distances seamlessly across Mobile (< 640px), Tablet (640px–1023px), and Desktop (1024px+).
- **Performance & Cleanup**: Built with `gsap.context()` for bulletproof garbage collection, prevention of React Fast Refresh pin duplications, and zero state re-renders during high-frequency scroll ticks.
- **Accessibility**: First-class support for `prefers-reduced-motion` with graceful static display.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Animation Engine**: [GSAP (GreenSock) 3.12](https://greensock.com/gsap/) + [ScrollTrigger Plugin](https://greensock.com/scrolltrigger/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export
```bash
npm run build
```
This produces an optimized production build and an `out/` directory with pure static HTML/JS/CSS assets ready for **GitHub Pages** or **Vercel**.

---

## 📁 Project Structure

```
scroll-hero-animation/
├── app/
│   ├── globals.css         # Custom neon glows, track textures, and glassmorphism
│   ├── layout.tsx          # Root HTML metadata, viewport, and typography setup
│   └── page.tsx            # Main page combining all sections
├── components/
│   ├── Navbar.tsx          # Fixed glass navigation with live 60FPS status badge
│   ├── Hero.tsx            # Pinned ScrollTrigger animation with car & letters
│   ├── SpecsSection.tsx    # Engineering matrix & performance progress bars
│   ├── ShowcaseSection.tsx # Interactive aero subsystems & telemetry panel
│   ├── CTASection.tsx      # Cockpit reservation pass with chassis serial generator
│   └── Footer.tsx          # Portfolio attribution and back-to-top trigger
├── public/
│   └── car-top-view.svg    # Bespoke SVG hypercar asset (laser headlights, aero fin)
├── next.config.mjs         # Static export configuration for GitHub Pages
├── tailwind.config.ts      # Custom futuristic color palette & letter spacings
├── tsconfig.json           # Strict TypeScript configuration
└── package.json            # Scripts & dependencies
```

---

## 🌐 Deployment to GitHub Pages

1. Create a repository on GitHub (e.g. `scroll-hero-animation`).
2. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "feat: complete scroll-driven hero section animation assignment"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. In GitHub Repository **Settings** > **Pages**:
   - Set **Source** to **GitHub Actions**
   - Select the default **Next.js** or **Static HTML** starter workflow, and GitHub will automatically deploy your `out` build!

Alternatively, import the repository to **Vercel** with zero configuration required.
