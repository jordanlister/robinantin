import { Metadata } from 'next'
import { Timeline, TimelineItem } from '@/components/organisms/timeline'

export const metadata: Metadata = {
  title: 'The Pussycat Dolls Legacy',
  description: 'From burlesque troupe to global pop phenomenon. Explore the history and impact of The Pussycat Dolls, created by Robin Antin.',
}

const timeline: TimelineItem[] = [
  {
    year: '1995',
    title: 'The Beginning',
    description: 'Robin Antin founds The Pussycat Dolls as a modern burlesque troupe, performing at The Viper Room in Los Angeles.',
    highlights: [
      'Launched at The Viper Room on Sunset Strip',
      'Rotating celebrity guest performers',
      'Fusion of burlesque, dance, and old Hollywood glamour',
    ],
  },
  {
    year: '1995-2002',
    title: 'Building the Legend',
    description: 'The troupe gains a cult following with performances featuring A-list celebrities including Gwen Stefani, Christina Aguilera, Britney Spears, and Carmen Electra.',
    highlights: [
      'Christina Applegate, Gwen Stefani, Britney Spears perform',
      'Carmen Electra becomes regular performer',
      'Expansion to The Roxy and other venues',
    ],
  },
  {
    year: '2003',
    title: 'The Transformation',
    description: 'Robin transforms The Pussycat Dolls from live act to recording group, partnering with Interscope Records.',
    highlights: [
      'Partnership with Interscope Records',
      'Assembled talented lead vocalist and lineup',
      'Transition from rotating to fixed lineup',
    ],
  },
  {
    year: '2005',
    title: 'Global Breakthrough',
    description: 'Release of debut album "PCD" featuring worldwide smash hits "Don\'t Cha" and "Buttons".',
    highlights: [
      'Debut album "PCD" sells over 9 million copies',
      '"Don\'t Cha" reaches #1 in multiple countries',
      '"Buttons" and "Stickwitu" become global hits',
    ],
  },
  {
    year: '2006',
    title: 'Peak Success',
    description: 'The Pussycat Dolls dominate global pop culture with sold-out tours and the Pussycat Dolls Lounge opening at Caesar\'s Palace.',
    highlights: [
      'World tour sells out arenas globally',
      'Caesar\'s Palace Las Vegas lounge opens',
      'Lingerie line with La Senza launches',
    ],
  },
  {
    year: '2008',
    title: 'Continued Evolution',
    description: 'Second album "Doll Domination" released. "The Search for the Next Doll" reality show airs, leading to creation of Girlicious.',
    highlights: [
      '"Doll Domination" album released',
      '"When I Grow Up" becomes anthem',
      'Reality show creates spin-off group Girlicious',
    ],
  },
  {
    year: '2010',
    title: 'The Legacy Established',
    description: 'The Pussycat Dolls cement their place in pop culture history with over 15 million albums sold worldwide.',
    highlights: [
      '15+ million albums sold globally',
      'Countless sold-out shows and tours',
      'Permanent impact on girl group aesthetics',
    ],
  },
  {
    year: '2019',
    title: 'The Reunion',
    description: 'The Pussycat Dolls announce reunion tour, proving their enduring appeal and legacy.',
    highlights: [
      'Reunion announced to massive response',
      'New generation of fans discovered',
      'Cultural impact continues decades later',
    ],
  },
]

const achievements = [
  { label: 'Albums Sold', value: '15M+' },
  { label: 'Global Tours', value: '5+' },
  { label: 'Top 10 Singles', value: '9' },
  { label: 'Years Active', value: '25+' },
]

const iconicMoments = [
  'Performance at 2006 MTV Video Music Awards',
  'Caesar\'s Palace Las Vegas residency',
  '"Don\'t Cha" music video cultural phenomenon',
  'Collaboration with A.R. Rahman for Slumdog Millionaire',
  'Appearances on major TV shows and award ceremonies',
  'Fashion and style influence on 2000s pop culture',
]

export default function PussycatDollsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-24 section-padding container-padding mx-auto bg-black-deep text-white-warm">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="headline-hero mb-4 md:mb-6">
            The <span className="text-champagne">Pussycat Dolls</span>
          </h1>
          <p className="text-xl md:text-2xl text-champagne-light mb-6 md:mb-8 max-w-3xl mx-auto px-4 md:px-0">
            From underground burlesque sensation to global pop phenomenon
          </p>
          <p className="text-base md:text-lg text-white-warm/80 max-w-4xl mx-auto px-4 md:px-0">
            What began in 1995 as a modern burlesque troupe at The Viper Room
            evolved into one of the most successful and iconic girl groups of
            all time, redefining modern performance aesthetics and selling over
            15 million albums worldwide.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-champagne">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {achievements.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-headline text-4xl md:text-5xl lg:text-6xl text-black-deep mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-wider text-black-soft">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding container-padding mx-auto bg-white-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="headline-display mb-6 md:mb-8 text-center">The Origin Story</h2>

          <div className="prose prose-base md:prose-lg max-w-none space-y-4 md:space-y-6">
            <p>
              In 1995, choreographer and creative visionary Robin Antin had a
              bold idea: to create a modern burlesque revue that blended the
              glamour of old Hollywood with contemporary dance and performance
              art. The result was The Pussycat Dolls.
            </p>

            <p>
              Starting at The Viper Room on Los Angeles' Sunset Strip, the
              troupe featured rotating celebrity performers including{' '}
              <strong>Christina Applegate, Gwen Stefani, Britney Spears,
              Christina Aguilera, Carmen Electra, and Scarlett Johansson</strong>.
              The shows were an instant sensation, attracting A-list audiences
              and building a cult following.
            </p>

            <p>
              What set The Pussycat Dolls apart was Robin's unique vision:
              combining Fosse-inspired choreography with burlesque sensuality,
              modern dance techniques, and an unwavering commitment to
              empowered femininity. The performances were sophisticated,
              professional, and groundbreaking.
            </p>

            <p>
              In 2003, Robin made the bold decision to transform the live act
              into a recording group. Partnering with <strong>Interscope
              Records</strong> and assembling a talented lead vocalist and
              lineup, The Pussycat Dolls evolved from underground
              sensation to global pop force.
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

      {/* Iconic Moments */}
      <section className="section-padding container-padding mx-auto bg-white-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="headline-display mb-4 md:mb-8 text-center">Iconic Moments</h2>
          <p className="text-center text-base md:text-lg text-black-soft/70 mb-8 md:mb-12 px-4 md:px-0">
            Performances and moments that defined a generation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {iconicMoments.map((moment, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 md:p-6 bg-black-soft/5 border border-champagne/20"
              >
                <span className="text-champagne text-lg md:text-xl flex-shrink-0">★</span>
                <span className="text-black-soft text-sm md:text-base">{moment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Impact */}
      <section className="section-padding container-padding mx-auto bg-black-deep text-white-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-display mb-4 md:mb-6">
            The <span className="text-champagne">Legacy</span>
          </h2>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg px-4 md:px-0">
            <p>
              The Pussycat Dolls revolutionized the girl group formula,
              introducing a level of choreography, visual storytelling, and
              production value that raised the bar for all pop performers.
            </p>
            <p>
              Their influence extends beyond music: they redefined modern
              burlesque as a mainstream art form, influenced fashion and style
              trends throughout the 2000s, and launched the careers of numerous
              performers.
            </p>
            <p className="text-champagne-light text-xl">
              More than a group, The Pussycat Dolls became a cultural
              phenomenon that continues to inspire performers, choreographers,
              and creatives worldwide.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
