import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { RouteTransitionProvider } from '@/components/providers/route-transition-provider'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { Header } from '@/components/organisms/header'
import { Footer } from '@/components/organisms/footer'
import { ScrollProgress } from '@/components/atoms/scroll-progress'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
  weight: ['400', '700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Robin Antin — Choreographer, Creative Director, Founder of The Pussycat Dolls',
    template: '%s | Robin Antin',
  },
  description: 'Robin Antin is a legendary choreographer, dancer, entrepreneur, and creative visionary, best known as the founder of The Pussycat Dolls. Explore her work in dance, music, fashion, and entertainment.',
  keywords: [
    'Robin Antin',
    'The Pussycat Dolls',
    'Choreographer',
    'Creative Director',
    'Dance',
    'Burlesque',
    'Playground LA',
    'Entertainment',
  ],
  authors: [{ name: 'Robin Antin' }],
  creator: 'Robin Antin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Robin Antin',
    title: 'Robin Antin — Choreographer, Creative Director, Founder of The Pussycat Dolls',
    description: 'Legendary choreographer and founder of The Pussycat Dolls. Explore the world of Robin Antin.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@robinantin',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <ScrollProgress />
        <SmoothScrollProvider>
          <Header />
          <RouteTransitionProvider>
            <main>{children}</main>
          </RouteTransitionProvider>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
