import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome Base
        'black-deep': '#000000',
        'black-soft': '#1A1A1A',
        'white-warm': '#FFFFFF',

        // Hot Pink Accent
        'champagne': {
          DEFAULT: '#FF1493',
          light: '#FF69B4',
        },

        // Lipstick Red (sparingly)
        'lipstick': '#FF1493',

        // Semantic colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      fontFamily: {
        // Headline - Didone style (will use Playfair Display as fallback)
        headline: ['var(--font-headline)', 'Playfair Display', 'serif'],
        // Body - Grotesque sans
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'h1': ['clamp(1.75rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h2': ['clamp(1.375rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
        'h3': ['clamp(1.125rem, 2vw, 2rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': 'clamp(3rem, 10vw, 10rem)',
        'container': 'clamp(1rem, 5vw, 8rem)',
      },
      transitionDuration: {
        '120': '120ms',
        '180': '180ms',
        '240': '240ms',
        '280': '280ms',
        '320': '320ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        'snap': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 240ms ease-smooth',
        'fade-out': 'fade-out 160ms ease-smooth',
        'slide-up': 'slide-up 280ms ease-smooth',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
