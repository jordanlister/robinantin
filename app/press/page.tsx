import { Metadata } from 'next'
import { PressList, PressItem } from '@/components/organisms/press-list'
import { Button } from '@/components/atoms/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press coverage, interviews, and media features about Robin Antin and The Pussycat Dolls.',
}

// Mock data - will be replaced with Sanity CMS
const pressItems: PressItem[] = [
  {
    title: 'Robin Antin on Building the Pussycat Dolls Empire',
    publication: 'Variety',
    date: 'March 15, 2024',
    excerpt: 'An exclusive interview with the visionary behind one of pop culture\'s most iconic brands. Robin Antin shares insights on transforming a burlesque act into a global phenomenon.',
    url: '#',
  },
  {
    title: 'The Visionary Behind Modern Performance',
    publication: 'Billboard',
    date: 'January 22, 2024',
    excerpt: 'How Robin Antin continues to shape the entertainment industry through choreography, creative direction, and mentorship.',
    url: '#',
  },
  {
    title: 'Playground LA: Where Stars Are Born',
    publication: 'Dance Magazine',
    date: 'December 10, 2023',
    excerpt: 'Inside Robin Antin\'s creative sanctuary where the next generation of performers train and develop their craft.',
    url: '#',
  },
  {
    title: 'The Evolution of The Pussycat Dolls',
    publication: 'Rolling Stone',
    date: 'November 5, 2023',
    excerpt: 'From underground burlesque to pop phenomenon: the complete story of The Pussycat Dolls\' transformation.',
    url: '#',
  },
  {
    title: 'Robin Antin: Three Decades of Innovation',
    publication: 'Vogue',
    date: 'October 18, 2023',
    excerpt: 'Fashion, performance, and empowerment: Robin Antin\'s lasting impact on entertainment and culture.',
    url: '#',
  },
  {
    title: 'Choreography as Creative Direction',
    publication: 'The Hollywood Reporter',
    date: 'September 8, 2023',
    excerpt: 'Robin Antin discusses the art of choreography and its role in building iconic performances and brands.',
    url: '#',
  },
]

export default function PressPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white-warm">
      <section className="section-padding container-padding mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="headline-hero mb-4 md:mb-6">Press</h1>
            <p className="text-lg md:text-xl text-black-soft/70 max-w-2xl mx-auto px-4 md:px-0">
              Features, interviews, and media coverage
            </p>
          </div>

          {/* Press Kit CTA */}
          <div className="bg-champagne/10 border border-champagne/30 p-6 md:p-8 mb-12 md:mb-16 text-center">
            <h2 className="font-headline text-xl md:text-2xl mb-3 md:mb-4">Media & Press Kit</h2>
            <p className="text-sm md:text-base text-black-soft/70 mb-4 md:mb-6 max-w-2xl mx-auto px-4 md:px-0">
              Download high-resolution photos, biography, and press materials
            </p>
            <Button asChild>
              <Link href="/press-kit">Download Press Kit</Link>
            </Button>
          </div>

          {/* Press Articles */}
          <PressList items={pressItems} />

          {/* Media Contact */}
          <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-border/20 text-center">
            <h3 className="font-headline text-xl md:text-2xl mb-3 md:mb-4">Media Inquiries</h3>
            <p className="text-sm md:text-base text-black-soft/70 mb-4 md:mb-6 px-4 md:px-0">
              For press inquiries and interview requests, please contact:
            </p>
            <a
              href="mailto:press@robinantin.com"
              className="text-champagne hover:underline text-lg"
            >
              press@robinantin.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
