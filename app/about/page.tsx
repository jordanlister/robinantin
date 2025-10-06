import { Metadata } from 'next'
import { Timeline, TimelineItem } from '@/components/organisms/timeline'
import { Badge } from '@/components/atoms/badge'

export const metadata: Metadata = {
  title: 'About Robin Antin',
  description: 'Choreographer, dancer, entrepreneur, and creative director. Robin Antin has shaped modern performance femininity for over three decades.',
}

const milestones: TimelineItem[] = [
  {
    year: '1980s',
    title: 'Career Beginnings',
    description: 'Robin begins her professional career as a dancer and choreographer, working on music videos, tours, and film choreography.',
    highlights: [
      'Professional dancer and choreographer',
      'Music video and film work',
      'Developed signature Fosse-inspired, burlesque-influenced style',
    ],
  },
  {
    year: '1995',
    title: 'The Pussycat Dolls Founded',
    description: 'Robin creates The Pussycat Dolls as a modern burlesque troupe in Los Angeles, performing at The Viper Room and gaining a cult following.',
    highlights: [
      'Launched at The Viper Room, Los Angeles',
      'Rotating celebrity performers including Gwen Stefani, Christina Aguilera, Carmen Electra',
      'Redefined modern burlesque as mainstream art form',
    ],
  },
  {
    year: '2003',
    title: 'Record Deal & Pop Transformation',
    description: 'The Pussycat Dolls sign with Interscope Records, transforming from burlesque troupe to pop music phenomenon.',
    highlights: [
      'Partnership with Interscope Records',
      'Transition to recording group',
      'Assembled talented lead vocalist and lineup',
    ],
  },
  {
    year: '2005',
    title: 'Global Breakthrough',
    description: 'Release of debut album "PCD" featuring worldwide hits "Don\'t Cha" and "Buttons", establishing the group as a global force.',
    highlights: [
      'Debut album "PCD" released',
      '"Don\'t Cha" becomes global smash hit',
      'Sold-out world tours begin',
    ],
  },
  {
    year: '2006',
    title: 'Brand Expansion',
    description: 'The Pussycat Dolls brand expands beyond music with the Pussycat Dolls Lounge at Caesar\'s Palace, Las Vegas.',
    highlights: [
      'Caesar\'s Palace Las Vegas residency',
      'Lingerie line with La Senza',
      'Television specials and appearances',
    ],
  },
  {
    year: '2008',
    title: 'Television & New Groups',
    description: 'Robin launches "The Search for the Next Doll" and creates spin-off group Girlicious, expanding her creative empire.',
    highlights: [
      '"Girlicious" created and launched',
      'Television production ventures',
      'Continued PCD success with "When I Grow Up"',
    ],
  },
  {
    year: '2010s',
    title: 'Playground LA & Mentorship',
    description: 'Robin co-founds Playground LA, one of Los Angeles\' premier dance studios, focusing on developing the next generation.',
    highlights: [
      'Co-founded Playground LA',
      'Top choreographers and performers train',
      'Community hub for dance and performance',
    ],
  },
  {
    year: '2020s',
    title: 'Continuing Legacy',
    description: 'Robin continues as a creative consultant, choreographer, and mentor, shaping the future of performance and entertainment.',
    highlights: [
      'Creative direction for major artists',
      'Speaking engagements and masterclasses',
      'Industry influence and innovation',
    ],
  },
]

const collaborators = [
  'A.R. Rahman',
  'Timbaland',
  'Gwen Stefani',
  'Christina Aguilera',
  'Carmen Electra',
  'Britney Spears',
  'Interscope Records',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 section-padding container-padding mx-auto bg-black-deep text-white-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="headline-hero mb-4 md:mb-6">
                Robin <span className="text-champagne">Antin</span>
              </h1>
              <p className="text-lg md:text-xl mb-4 md:mb-6 text-champagne-light">
                Choreographer. Visionary. Creator of The Pussycat Dolls.
              </p>
              <p className="text-base md:text-lg mb-3 md:mb-4 text-white-warm/80">
                Robin Antin is an American choreographer, dancer, entrepreneur,
                creative director, and entertainment visionary, best known as
                the founder and creator of The Pussycat Dolls, one of the most
                iconic female performance brands in pop culture history.
              </p>
              <p className="text-base md:text-lg text-white-warm/80">
                Her career bridges dance, music, fashion, and film, shaping the
                image of modern performance femininity with a mix of
                old-Hollywood glamour and contemporary edge.
              </p>
            </div>

            <div className="relative aspect-[3/4] bg-champagne/10">
              {/* Placeholder for Robin's photo */}
              <div className="w-full h-full flex items-center justify-center text-champagne/50">
                Robin Antin Portrait
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding container-padding mx-auto bg-white-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="headline-display mb-6 md:mb-8 text-center">Background</h2>

          <div className="prose prose-base md:prose-lg max-w-none space-y-4 md:space-y-6">
            <p>
              Born July 6, 1961, in Los Angeles, California, Robin grew up in a
              creative, entertainment-oriented family. Her brother{' '}
              <strong>Jonathan Antin</strong> became a celebrity hairstylist,
              and <strong>Steve Antin</strong> is an actor and filmmaker.
            </p>

            <p>
              Robin began her career in the 1980s as a professional dancer and
              choreographer, working on music videos, tours, and film
              choreography. Her early style blended Fosse-inspired precision,
              burlesque sensuality, and street-influenced performance, laying
              the foundation for her later brand aesthetic.
            </p>

            <p>
              In 1995, she founded <strong>The Pussycat Dolls</strong> as a
              modern burlesque troupe in Los Angeles. The live show's rotating
              celebrity performers included Christina Applegate, Gwen Stefani,
              Britney Spears, Christina Aguilera, Carmen Electra, and Scarlett
              Johansson.
            </p>

            <p>
              After years of building a cult following, Robin transformed the
              troupe into a pop music phenomenon with Interscope Records in the
              early 2000s. The group sold over 15 million albums and became one
              of the most successful girl groups of all time.
            </p>

            <p>
              Beyond The Pussycat Dolls, Robin founded and co-owns{' '}
              <strong>Playground LA</strong>, one of Los Angeles' most
              well-known dance studios, where top choreographers and performers
              train. She continues to mentor dancers, produce live shows, and
              develop entertainment brands that merge dance, fashion, and pop
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding container-padding mx-auto bg-black-deep">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline-display mb-16 text-center text-white-warm">
            Career <span className="text-champagne">Milestones</span>
          </h2>
          <Timeline items={milestones} />
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="section-padding container-padding mx-auto bg-white-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="headline-display mb-4 md:mb-8 text-center">
            Notable Collaborators
          </h2>
          <p className="text-center text-base md:text-lg text-black-soft/70 mb-8 md:mb-12 px-4 md:px-0">
            Robin has worked with some of the biggest names in entertainment
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {collaborators.map((name) => (
              <Badge key={name} variant="default" className="text-sm py-2 px-4">
                {name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Influence Section */}
      <section className="section-padding container-padding mx-auto bg-champagne">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-display mb-4 md:mb-6">Legacy & Influence</h2>
          <div className="space-y-3 md:space-y-4 text-base md:text-lg px-4 md:px-0">
            <p>
              Robin Antin helped define the modern intersection of choreography,
              branding, and female empowerment in entertainment.
            </p>
            <p>
              Her work elevated burlesque into a mainstream art form, blending
              sensuality, precision, and professionalism in ways that continue
              to influence performers today.
            </p>
            <p>
              Through her various projects, Robin continues to inspire the next
              generation of dancers, performers, and creative entrepreneurs.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
