# Development Guide

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your credentials

# Run dev server
npm run dev

# Open browser
open http://localhost:3000
```

## Project Architecture

### App Router Structure

This project uses Next.js 15 App Router with the following conventions:

- **Server Components by default** — Most components are RSC
- **'use client' directive** — Only for interactive components
- **Metadata exports** — SEO handled per-page
- **Route handlers** — API routes in `app/api/`

### Component Architecture

```
Atomic Design Pattern:
├── Atoms       → Basic building blocks (Button, Tag, Badge)
├── Molecules   → Simple combinations (Card, Marquee, Lightbox)
└── Organisms   → Complex components (Header, Footer, Timeline)
```

## Design Tokens

### Colors

Access via Tailwind classes or CSS variables:

```tsx
// Tailwind
className="bg-black-deep text-white-warm"
className="text-champagne hover:text-champagne-light"
className="border-lipstick"

// CSS Variables (if needed)
background: hsl(var(--background));
color: var(--champagne);
```

### Motion

```tsx
// Use predefined durations
transition-all duration-240 ease-smooth

// Framer Motion
transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
```

## Adding New Pages

1. **Create page file:**

```bash
# app/new-page/page.tsx
```

2. **Add metadata:**

```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
}
```

3. **Add to navigation:**

```tsx
// components/organisms/header.tsx
const navigation = [
  // ... existing items
  { name: 'New Page', href: '/new-page' },
]
```

## Working with Sanity

### Creating New Schema

1. Create schema file:

```tsx
// sanity/schemas/mySchema.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'mySchema',
  title: 'My Schema',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
```

2. Add to index:

```tsx
// sanity/schemas/index.ts
import mySchema from './mySchema'

export const schemaTypes = [project, pressItem, mySchema]
```

3. Access Sanity Studio at `/studio`

### Fetching Data

```tsx
import { client } from '@/lib/sanity'

const data = await client.fetch(`*[_type == "project"]`)
```

## Animation Guidelines

### Route Transitions

Handled automatically by `RouteTransitionProvider`. No additional code needed.

### Scroll Reveals

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.28 }}
>
  Content
</motion.div>
```

### Hover Effects

```tsx
<motion.div
  whileHover={{ scale: 1.015 }}
  transition={{ duration: 0.24 }}
>
  Content
</motion.div>
```

## Form Handling

Using React Hook Form + Zod:

```tsx
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema),
})
```

## Image Optimization

### Using Next Image

```tsx
import Image from 'next/image'

<Image
  src="/images/work/project.jpg"
  alt="Project description"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority // For above-fold images
/>
```

### Image Requirements

- Place in `public/images/`
- Provide descriptive alt text
- Use appropriate sizes prop
- Enable priority for LCP images

## Performance Checklist

- [ ] Images optimized and using Next Image
- [ ] Fonts subset and preloaded
- [ ] No layout shift (CLS < 0.1)
- [ ] LCP < 2.5s
- [ ] GPU transforms only (translateZ(0))
- [ ] Lazy load below-fold content
- [ ] prefers-reduced-motion respected

## Accessibility Checklist

- [ ] Semantic HTML throughout
- [ ] Alt text on all images
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast ratios meet WCAG AA
- [ ] Screen reader tested
- [ ] Forms have proper labels

## Common Issues

### Hydration Errors

If you see hydration mismatches:
1. Check for browser extensions modifying DOM
2. Ensure no `window` usage in SSR
3. Use `suppressHydrationWarning` on `<html>` if needed

### Animation Performance

If animations are janky:
1. Check you're using transform, not top/left
2. Add `will-change: transform` sparingly
3. Reduce animation complexity
4. Check Chrome DevTools Performance tab

### TypeScript Errors

```bash
# Run type check
npm run type-check

# Common fixes:
# - Add proper types to function parameters
# - Use 'as const' for literal types
# - Check for missing required props
```

## Deployment

### Pre-deployment Checklist

- [ ] All environment variables set
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors: `npm run type-check`
- [ ] No ESLint errors: `npm run lint`
- [ ] Lighthouse score > 90
- [ ] Test on mobile devices
- [ ] Check all forms work
- [ ] Verify Sanity connection

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

## Code Style

### Component Structure

```tsx
'use client' // If interactive

import { ... } from '...'

interface ComponentProps {
  title: string
  optional?: boolean
}

export function Component({ title, optional }: ComponentProps) {
  // Hooks first
  const [state, setState] = useState()

  // Event handlers
  const handleClick = () => {}

  // Render
  return <div>...</div>
}
```

### CSS Classes

Order: `layout → box-model → typography → visual → animation`

```tsx
className="flex items-center gap-4 px-6 py-3 text-lg font-headline bg-champagne hover:bg-champagne-light transition-all duration-240"
```

## Brand Reminders

✅ **DO:**
- Editorial, confident copy
- Clean, modern aesthetic
- Champagne + monochrome palette
- Respect reduced motion
- High-quality imagery

❌ **DON'T:**
- Purple gradients (NEVER)
- Cheesy effects
- Generic stock imagery
- Autoplay with sound
- Skip accessibility

---

**Questions?** Check README.md or reach out to the team.
