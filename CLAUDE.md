# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js application using the Pages Router, built with TypeScript and React 19. The project appears to be a portfolio/agency website (based on "Airotics" branding) showcasing services, work samples, and company information.

## Development Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js (Pages Router)
- **UI**: React 19.2.3, TypeScript 5
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **Animations**:
  - GSAP 3.13 with ScrollTrigger plugin
  - Lenis for smooth scrolling
  - Page transitions using GSAP clip-path animations
- **Other**: Swiper for carousels, react-fast-marquee, lucide-react for icons

## Architecture

### Global Configuration

- **Path alias**: `@/*` maps to the root directory (configured in tsconfig.json)
- **Smooth scrolling**: Lenis is configured globally in `_app.tsx` with duration 1.2s
- **GSAP**: ScrollTrigger registered globally, page transitions applied on route changes
- **Tailwind v4**: Uses `@tailwindcss/postcss` plugin, theme configured inline in `styles/globals.css` with custom spacing, colors, font sizes, and breakpoints

### Page Structure

The app uses Next.js Pages Router with the following routes:
- `/` - Home page (index.tsx) with Hero, Services, Skill, Work, Partners, Blog, Faqs, Extro sections
- `/agency` - Agency information page
- `/contact` - Contact page
- `/ourwork` - Portfolio/work showcase page
- `/services/ai`, `/services/blockchain`, `/services/marketing`, `/services/web-and-app` - Individual service detail pages

### Component Organization

Components are organized by page/section:
- `components/Layout/` - Global layout with Header, Footer, and custom fonts (Montreal, ARP Display)
- `components/Home/` - Home page sections (Hero, Services, Skill, Work, Partners, Review, Blog, Faqs, Extro)
- `components/Agency/` - Agency page components
- `components/Contact/` - Contact page components
- `components/Services/` - Service-related components
- `components/portfolio/` - Portfolio components

Each section typically contains:
- Main component (e.g., `Skill.tsx`)
- Card components for individual items
- Data files (e.g., `skills.ts`, `questions.ts`, `reviews.ts`)
- SVG components when needed

### Layout & Fonts

The `Layout` component wraps all pages and:
- Loads two custom fonts using `next/font/local`:
  - Montreal (Regular 400, Bold 700) - main sans font
  - ARP Display - display font
- Renders global Header and Footer
- Applies font CSS variables (`--font-montreal`, `--font-arp-display`)

### Static Assets

`public/` directory organized by page/feature:
- `home/` - Home page assets (background video)
- `agency/` - Agency page assets
- `services/` - Service page assets
- `work/` - Work samples
- `airotics_thumbnail/` - Video/work thumbnails
- `airotics_video/` - Video files
- `preview_thumbnail/` - Preview images

## Styling Conventions

- Tailwind CSS v4 with custom theme inline in globals.css
- Custom CSS variables for spacing, colors, and fluid typography (using clamp)
- Responsive font sizes defined as `--text-fs-*` with clamp for fluid scaling
- Custom keyframe animations for effects (e.g., statisticsPanelHeading, trailFade)
- Background video fixed on home page using Tailwind utilities

## Animation Patterns

- Page transitions use GSAP clip-path animations (inset from right to full width)
- Lenis smooth scroll prevents on elements with `[data-lenis-prevent]` attribute
- ScrollTrigger used for scroll-based animations (registered globally)
- Component animations typically use useGSAP hook from @gsap/react

## API Routes

API endpoints in `pages/api/`:
- `/api/hello` - Example API route (hello.ts)
