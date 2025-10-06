import { Metadata } from 'next'
import { Timeline, TimelineItem } from '@/components/organisms/timeline'
import { Badge } from '@/components/atoms/badge'

export const metadata: Metadata = {
  title: 'Playground LA',
  description: 'Co-founded by Robin Antin and Kenny Wormald, Playground LA is the iconic dance studio on Melrose Avenue where the world\'s top choreographers and performers train.',
}

const timeline: TimelineItem[] = [
  {
    year: '2017',
    title: 'The Vision Takes Shape',
    description: 'Robin Antin and Kenny Wormald co-found Playground LA on the iconic Melrose Avenue in Los Angeles.',
    highlights: [
      'Opened February 2017',
      'Premier location on Melrose Avenue',
      'Created to develop the next generation of dancers',
    ],
  },
  {
    year: '2017-2019',
    title: 'Building the Community',
    description: 'Playground LA quickly becomes a hub for industry-leading teachers and choreographers, with classes selling out consistently.',
    highlights: [
      'Master classes with top choreographers',
      'Up to 100 dancers per class',
      'Daily dance and fitness sessions',
    ],
  },
  {
    year: '2019-2023',
    title: 'Industry Premier Destination',
    description: 'Major artists begin recruiting dancers at Playground LA for music videos, tours, and performances.',
    highlights: [
      'Justin Bieber, Miley Cyrus, Paris Hilton hold auditions',
      'Celebrity visitors include Jennifer Lopez, Drew Barrymore',
      'Becomes known as top recruitment destination',
    ],
  },
  {
    year: '2023',
    title: 'International Expansion',
    description: 'Playground expands globally with the opening of Playground London in the UK.',
    highlights: [
      'Playground London opens in UK',
      'International brand recognition',
      'Global community of dancers',
    ],
  },
  {
    year: '2024',
    title: 'The Playground Reality Show',
    description: 'Hulu premieres "Playground" reality series, executive produced by Megan Thee Stallion, showcasing the studio\'s culture.',
    highlights: [
      'Hulu reality show "Playground" debuts',
      'Executive produced by Megan Thee Stallion',
      'Showcases studio culture and talent',
    ],
  },
]

const stats = [
  { label: 'Year Founded', value: '2017' },
  { label: 'Students Per Class', value: '100+' },
  { label: 'Global Locations', value: '2' },
  { label: 'Years of Excellence', value: '7+' },
]

const notableVisitors = [
  'Justin Bieber',
  'Miley Cyrus',
  'Jennifer Lopez',
  'Drew Barrymore',
  'Tracee Ellis Ross',
  'Cameron Diaz',
  'Nicole Scherzinger',
  'Maddie Ziegler',
  'Paris Hilton',
  'Megan Thee Stallion',
]

export default function PlaygroundLAPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 section-padding container-padding mx-auto bg-black-deep text-white-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="headline-hero mb-6">
                Playground <span className="text-champagne">LA</span>
              </h1>
              <p className="text-xl mb-6 text-champagne-light">
                Where the world's best dancers come to play
              </p>
              <p className="text-lg mb-4 text-white-warm/80">
                Co-founded by Robin Antin and Kenny Wormald in 2017, Playground LA
                is the iconic dance studio on Melrose Avenue that has become the
                premier destination for world-class choreographers, performers, and
                artists.
              </p>
              <p className="text-lg text-white-warm/80">
                From consistently sold-out master classes to serving as the go-to
                recruitment hub for major music artists, Playground LA has
                established itself as an essential part of the entertainment
                industry landscape.
              </p>
            </div>

            <div className="relative aspect-[4/3] bg-champagne/10">
              {/* Placeholder for Playground LA photo */}
              <div className="w-full h-full flex items-center justify-center text-champagne/50">
                Playground LA Studio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-champagne">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-headline text-5xl md:text-6xl text-black-deep mb-2">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-black-soft">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding container-padding mx-auto bg-white-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="headline-display mb-8 text-center">The Vision</h2>

          <div className="prose prose-lg max-w-none space-y-6">
            <p>
              When Robin Antin and <strong>Kenny Wormald</strong> (star of
              Footloose and world-renowned choreographer) opened Playground LA
              in February 2017, they had a clear vision: to create a space where
              dancers could truly play, experiment, and push the boundaries of
              their craft.
            </p>

            <p>
              Located on the famous <strong>Melrose Avenue</strong> in Los Angeles,
              the studio quickly became known for its high-energy atmosphere,
              industry-leading instructors, and commitment to developing the next
              generation of dance talent.
            </p>

            <p>
              Playground LA offers master classes, daily dance sessions, and dance
              fitness programs taught by some of the most sought-after
              choreographers in the industry. Classes regularly accommodate up to
              100 dancers and consistently sell out, attracting students from
              around the world.
            </p>

            <p>
              The studio has become a premiere destination for artists to recruit
              dancers for music videos, tours, and live performances. Major stars
              like <strong>Justin Bieber, Miley Cyrus, and Paris Hilton</strong>{' '}
              have held auditions at Playground LA, recognizing it as the place
              to find the industry's best talent.
            </p>

            <p>
              In 2024, the studio's culture and impact were showcased in the Hulu
              reality series <strong>"Playground"</strong>, executive produced by
              Megan Thee Stallion, giving audiences an inside look at the talent,
              dedication, and creativity that defines Playground LA.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding container-padding mx-auto bg-black-deep">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline-display mb-16 text-center text-white-warm">
            The <span className="text-champagne">Journey</span>
          </h2>
          <Timeline items={timeline} />
        </div>
      </section>

      {/* Notable Visitors & Artists */}
      <section className="section-padding container-padding mx-auto bg-white-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="headline-display mb-8 text-center">
            Celebrity Visitors & Artists
          </h2>
          <p className="text-center text-lg text-black-soft/70 mb-12">
            A-list performers, choreographers, and artists who have trained,
            auditioned, or visited Playground LA
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {notableVisitors.map((name) => (
              <Badge key={name} variant="default" className="text-sm py-2 px-4">
                {name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Legacy */}
      <section className="section-padding container-padding mx-auto bg-champagne">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-display mb-6">Impact & Legacy</h2>
          <div className="space-y-4 text-lg">
            <p>
              Playground LA has become more than just a dance studio—it's a
              cultural institution where careers are launched, artistry is
              refined, and the future of dance is shaped.
            </p>
            <p>
              With the expansion to Playground London in 2023, Robin and Kenny's
              vision continues to grow, creating a global community of dancers
              who share a passion for excellence, creativity, and pushing
              boundaries.
            </p>
            <p>
              The studio remains committed to its founding mission: providing a
              space where dancers of all levels can come together, learn from
              the best, and discover what's possible when talent meets
              opportunity.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
