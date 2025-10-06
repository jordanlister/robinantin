import { Metadata } from 'next'
import { Button } from '@/components/atoms/button'
import Link from 'next/link'
import { MapPin, Users, Trophy, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Studios & Programs',
  description: 'Playground LA and Robin Antin\'s dance programs, workshops, and training opportunities.',
}

const programs = [
  {
    title: 'Professional Training',
    description: 'Advanced training for aspiring professional dancers and performers',
    icon: Trophy,
    features: [
      'Advanced choreography techniques',
      'Performance development',
      'Industry preparation',
      'Master class series',
    ],
  },
  {
    title: 'Workshop Series',
    description: 'Intensive workshops in choreography, performance, and creative direction',
    icon: Users,
    features: [
      'Guest choreographer sessions',
      'Style-specific intensives',
      'Performance showcases',
      'Industry networking',
    ],
  },
  {
    title: 'Private Coaching',
    description: 'One-on-one coaching and artist development',
    icon: Calendar,
    features: [
      'Personalized training plans',
      'Performance preparation',
      'Competition coaching',
      'Career guidance',
    ],
  },
]

export default function StudiosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-24 section-padding container-padding mx-auto bg-black-deep text-white-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="headline-hero mb-4 md:mb-6">
                Playground <span className="text-champagne">LA</span>
              </h1>
              <p className="text-lg md:text-xl mb-4 md:mb-6 text-champagne-light">
                Where the next generation of performers train
              </p>
              <p className="text-base md:text-lg text-white-warm/80 mb-6 md:mb-8">
                Playground LA is one of Los Angeles' premier dance studios,
                co-founded by Robin Antin. A creative hub where top
                choreographers, performers, and students come together to push
                the boundaries of dance and performance.
              </p>
              <div className="flex items-start gap-3 text-white-warm/80 mb-4">
                <MapPin className="text-champagne mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-white-warm">Location</p>
                  <p>Los Angeles, California</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] bg-champagne/10">
              {/* Placeholder for studio image */}
              <div className="w-full h-full flex items-center justify-center text-champagne/50">
                Playground LA Studio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding container-padding mx-auto bg-white-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="headline-display mb-3 md:mb-4">Programs & Training</h2>
            <p className="text-base md:text-lg text-black-soft/70 max-w-2xl mx-auto px-4 md:px-0">
              World-class training programs designed to develop the complete
              performer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program) => {
              const Icon = program.icon
              return (
                <div
                  key={program.title}
                  className="bg-white border border-border/20 p-6 md:p-8 hover:border-champagne/50 transition-all duration-280"
                >
                  <Icon className="text-champagne mb-3 md:mb-4" size={28} />
                  <h3 className="font-headline text-xl md:text-2xl mb-2 md:mb-3">{program.title}</h3>
                  <p className="text-sm md:text-base text-black-soft/70 mb-4 md:mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs md:text-sm text-black-soft/80"
                      >
                        <span className="text-champagne mt-1 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding container-padding mx-auto bg-black-deep text-white-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-display mb-6">
            Training <span className="text-champagne">Philosophy</span>
          </h2>
          <div className="space-y-6 text-lg">
            <p>
              At Playground LA, we believe in developing the complete performer:
              technical excellence, creative expression, and professional
              preparation.
            </p>
            <p>
              Our approach blends Robin's decades of industry experience with
              cutting-edge techniques from today's top choreographers and
              teachers.
            </p>
            <p className="text-champagne-light text-xl">
              We don't just teach dance—we build careers.
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="section-padding container-padding mx-auto bg-champagne">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-display mb-6">Alumni Success</h2>
          <p className="text-lg mb-8">
            Playground LA alumni have gone on to perform with major artists,
            appear in films and television, choreograph for top entertainers,
            and launch their own successful careers in entertainment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-4xl font-headline mb-2">500+</div>
              <div className="text-sm uppercase tracking-wider">Alumni</div>
            </div>
            <div>
              <div className="text-4xl font-headline mb-2">100+</div>
              <div className="text-sm uppercase tracking-wider">Artists</div>
            </div>
            <div>
              <div className="text-4xl font-headline mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider">Tours</div>
            </div>
            <div>
              <div className="text-4xl font-headline mb-2">20+</div>
              <div className="text-sm uppercase tracking-wider">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding container-padding mx-auto bg-white-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-display mb-6">
            Ready to Train with the Best?
          </h2>
          <p className="text-lg mb-8 text-black-soft/70">
            Contact us to learn about upcoming programs, workshops, and private
            coaching opportunities.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Inquire About Programs</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
