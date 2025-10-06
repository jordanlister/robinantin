# Robin Antin — Official Website

Premium website for **Robin Antin**, legendary choreographer, creative director, and founder of The Pussycat Dolls. Built with modern Hollywood glamour meets disciplined minimalism.

## 🎭 Project Overview

This is a world-class website featuring:
- **Modern Hollywood glamour** aesthetic with editorial design
- **Premium animations** using Framer Motion and Lenis smooth scroll
- **Comprehensive CMS** integration with Sanity v3
- **Performance-first** architecture with Next.js 15
- **Accessibility** compliant (WCAG 2.2 AA)

**No purple gradients. Ever.**

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router, React 18, RSC)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Animations:** Framer Motion, Lenis smooth scroll
- **Forms:** React Hook Form + Zod validation
- **CMS:** Sanity v3
- **Email:** Resend (for contact form)
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 🎨 Design System

### Colors

- **Monochrome Base:** `#0A0A0A`, `#111111`, `#F7F7F5`
- **Champagne Accent:** `#C8A96A`, `#E4D3A1`
- **Lipstick Red (sparingly):** `#B81224`

### Typography

- **Headlines:** Playfair Display (Didone-style serif)
- **Body:** Inter (grotesque sans-serif)

### Motion Tokens

- **Durations:** 120ms, 180ms, 240ms, 280ms, 320ms
- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` (smooth)
- **Respect:** `prefers-reduced-motion`

## 📂 Project Structure

```
robinantin/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── contact/                  # Contact page with form
│   ├── gallery/                  # Photo/video gallery
│   ├── press/                    # Press articles
│   ├── pussycat-dolls/          # PCD legacy page
│   ├── studios/                  # Playground LA
│   ├── work/                     # Projects/work portfolio
│   ├── api/contact/             # Contact form API route
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/
│   ├── atoms/                   # Button, Tag, Badge, Divider
│   ├── molecules/               # Card, Marquee, Lightbox
│   ├── organisms/               # Header, Footer, Timeline, MediaGrid
│   └── providers/               # Route transitions, smooth scroll
├── lib/
│   └── utils.ts                 # Utility functions (cn helper)
├── sanity/
│   └── schemas/                 # Sanity CMS schemas
├── tailwind.config.ts           # Tailwind configuration
├── next.config.ts               # Next.js configuration
└── sanity.config.ts             # Sanity Studio config
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- Sanity account (for CMS)
- Resend account (for email)

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd robinantin
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
- Sanity project ID and dataset
- Resend API key
- Site URL

4. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

5. **Run Sanity Studio (optional):**

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)

## 🏗️ Build & Deploy

### Build for production:

```bash
npm run build
npm start
```

### Deploy to Vercel:

```bash
vercel
```

Recommended Vercel settings:
- Enable Image Optimization
- Set environment variables
- Configure custom domain

## 📄 Pages

- **Home (`/`)** — Hero, selected work, PCD highlight, press carousel
- **About (`/about`)** — Bio, timeline, collaborators
- **Work (`/work`)** — Filterable project portfolio
- **Pussycat Dolls (`/pussycat-dolls`)** — PCD legacy and timeline
- **Studios (`/studios`)** — Playground LA programs
- **Press (`/press`)** — Media coverage and press kit
- **Gallery (`/gallery`)** — Photo/video masonry grid
- **Contact (`/contact`)** — Contact form with validation

## 🎬 Animation System

### Route Transitions

- **Old page:** Fade out (160ms)
- **New page:** Fade in + slide up (220ms)
- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)`

### Scroll Reveals

- Staggered fade + rise (12–20px)
- Viewport intersection triggers
- Once-only animations

### Hover Effects

- **Cards:** Scale 1.015, shadow elevation, image pan
- **Links:** Underline slide-in animation

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation throughout
- Focus indicators on all interactive elements
- Alt text for all media
- Color contrast ratios meet standards
- `prefers-reduced-motion` support

## 🚦 Performance

Target metrics:
- **LCP:** ≤ 2.5s
- **TTFB:** ≤ 200ms
- **TTI:** ≤ 3s
- **Total JS:** ≤ 180KB gzipped

Optimizations:
- Next.js Image optimization (AVIF/WebP)
- Font subsetting and preloading
- GPU-friendly transforms
- Code splitting and lazy loading

## 📝 Content Management

### Sanity Schemas

- **Project** — Work portfolio items
- **Press Item** — Media coverage
- **Gallery Set** — Photo/video collections
- **Site Settings** — Global configuration

### Adding Content

1. Navigate to `/studio`
2. Log in with Sanity credentials
3. Create/edit content
4. Content updates appear immediately

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🙅 Brand Guidelines

### DO:
- Use monochrome + champagne + lipstick red palette
- Maintain editorial, confident tone
- Keep animations under 320ms (except hero)
- Respect `prefers-reduced-motion`
- Provide alt text for all media

### DON'T:
- Use purple gradients (banned)
- Add neon glows or glassmorphism
- Use stock rounded corners excessively
- Add autoplay audio
- Skip accessibility features

## 📧 Contact Form Integration

The contact form uses:
- React Hook Form for state management
- Zod for validation
- Resend API for email delivery

Set `RESEND_API_KEY` in environment variables to enable.

## 🔐 Security

- CSP headers configured
- Form honeypot protection
- Server-side validation
- Rate limiting (recommended for production)
- HTTPS only (production)

## 📜 License

© 2024 Robin Antin. All rights reserved.

## 🤝 Support

For technical support or questions:
- Email: dev@robinantin.com
- Documentation: [Link to docs]

---

**Built with precision. Designed with glamour. No purple gradients.**
