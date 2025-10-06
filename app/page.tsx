import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/molecules/card'
import { Marquee } from '@/components/molecules/marquee'
import { Button } from '@/components/atoms/button'
import { PressList } from '@/components/organisms/press-list'

export const metadata: Metadata = {
  title: 'Robin Antin — Choreographer, Creative Director, Founder of The Pussycat Dolls',
  description: 'Legendary choreographer and founder of The Pussycat Dolls. Explore the world of Robin Antin.',
}

// Mock data - will be replaced with Sanity CMS
const selectedWorks = [
  {
    title: 'The Pussycat Dolls',
    description: 'From burlesque troupe to global pop phenomenon',
    image: '/images/work/pcd-1.jpg',
    video: '/videos/pcd-preview.mp4',
    href: '/pussycat-dolls',
    tags: ['Music', 'Performance', 'Brand'],
  },
  {
    title: 'Playground LA',
    description: 'Premier dance studio and creative hub',
    image: '/images/work/playground-1.jpg',
    href: '/studios',
    tags: ['Education', 'Community'],
  },
  {
    title: 'Artist Development',
    description: 'Choreography and creative direction for top artists',
    image: '/images/work/artist-dev-1.jpg',
    video: '/videos/artist-dev-preview.mp4',
    href: '/work',
    tags: ['Choreography', 'Direction'],
  },
]

const pressItems = [
  {
    title: 'Robin Antin on Building the Pussycat Dolls Empire',
    publication: 'Variety',
    date: 'March 2024',
    excerpt: 'An in-depth look at how Robin Antin transformed a burlesque act into one of the most successful girl groups of all time.',
    url: '#',
  },
  {
    title: 'The Visionary Behind Modern Performance',
    publication: 'Billboard',
    date: 'January 2024',
    excerpt: 'Robin Antin\'s influence on dance, music, and entertainment continues to shape the industry.',
    url: '#',
  },
  {
    title: 'Playground LA: Where Stars Are Born',
    publication: 'Dance Magazine',
    date: 'December 2023',
    excerpt: 'Inside Robin Antin\'s creative sanctuary where the next generation of performers train.',
    url: '#',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black-deep overflow-hidden">
        {/* Background video/image - placeholder */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-black-deep via-black-soft to-champagne/10" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 container-padding mx-auto text-center text-white-warm">
          <h1 className="headline-hero mb-6 text-balance">
            Robin <span className="text-champagne">Antin</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-body mb-8 text-champagne-light max-w-3xl mx-auto">
            Choreographer. Visionary. Creator of The Pussycat Dolls.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/work">View Work</Link>
            </Button>
            <Button size="lg" variant="subtle" asChild className="w-full sm:w-auto">
              <Link href="/contact">Book Robin</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-white-warm/70 animate-bounce hidden sm:block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="section-padding container-padding mx-auto bg-white-warm">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="headline-display mb-3 md:mb-4">Selected Work</h2>
            <p className="text-base md:text-lg text-black-soft/90 max-w-2xl mx-auto px-4 md:px-0">
              Three decades of shaping modern performance through dance,
              music, and creative direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {selectedWorks.map((work) => (
              <Card key={work.title} {...work} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="link" asChild>
              <Link href="/work">View All Work →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PCD Legacy Highlight */}
      <section className="section-padding container-padding mx-auto bg-black-deep text-white-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="headline-display mb-4 md:mb-6">
                The Pussycat Dolls <span className="text-champagne">Legacy</span>
              </h2>
              <p className="text-base md:text-lg mb-4 md:mb-6 text-white-warm/95">
                What began as a burlesque troupe in 1995 evolved into one of
                the most iconic performance brands in pop culture history. With
                over 15 million albums sold and countless sold-out shows, The
                Pussycat Dolls redefined modern girl group aesthetics.
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <span className="text-champagne mt-1 flex-shrink-0">•</span>
                  <span>Founded as modern burlesque troupe in 1995</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <span className="text-champagne mt-1 flex-shrink-0">•</span>
                  <span>15+ million albums sold worldwide</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <span className="text-champagne mt-1 flex-shrink-0">•</span>
                  <span>Launched careers of Nicole Scherzinger and more</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <span className="text-champagne mt-1 flex-shrink-0">•</span>
                  <span>Global tours, Vegas residencies, brand expansion</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/pussycat-dolls">Explore the Legacy</Link>
              </Button>
            </div>

            <div className="relative aspect-square bg-champagne/10">
              {/* Placeholder for PCD image/video */}
              <div className="w-full h-full flex items-center justify-center text-champagne/50">
                PCD Legacy Visual
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="section-padding container-padding mx-auto bg-white-warm">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="headline-display mb-3 md:mb-4">In the Press</h2>
            <p className="text-base md:text-lg text-black-soft/90">
              Recent features and interviews
            </p>
          </div>

          <PressList items={pressItems} />

          <div className="text-center mt-12">
            <Button variant="link" asChild>
              <Link href="/press">View All Press →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Press Logos Marquee */}
      <section className="py-12 bg-black-soft">
        <Marquee pauseOnHover className="opacity-80 hover:opacity-100 transition-opacity">
          {['Variety', 'Billboard', 'Rolling Stone', 'Dance Magazine', 'Vogue', 'Hollywood Reporter'].map(
            (publication) => (
              <div
                key={publication}
                className="text-white-warm text-xl font-headline tracking-tight whitespace-nowrap"
              >
                {publication}
              </div>
            )
          )}
        </Marquee>
      </section>

      {/* CTA Section */}
      <section className="section-padding container-padding mx-auto bg-champagne text-black-deep">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-display mb-4 md:mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 px-4 md:px-0">
            Available for choreography, creative direction, speaking engagements, and collaborations.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="inverse" asChild className="w-full sm:w-auto max-w-xs sm:max-w-none">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
