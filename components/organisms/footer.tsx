import Link from 'next/link'
import { Instagram, Youtube, Facebook } from 'lucide-react'

const footerNav = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Press', href: '/press' },
  { name: 'Contact', href: '/contact' },
  { name: 'Press Kit', href: '/press-kit' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
]

const social = [
  { name: 'Instagram', href: 'https://instagram.com/robinantin', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@robinantin', icon: Youtube },
  { name: 'Facebook', href: 'https://facebook.com/robinantin', icon: Facebook },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black-deep text-white-warm border-t border-border/20">
      <div className="container-padding mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Branding */}
          <div>
            <h3 className="font-headline text-2xl md:text-3xl tracking-tight mb-3 md:mb-4">
              Robin Antin
            </h3>
            <p className="text-sm text-white-warm/70 max-w-sm leading-relaxed">
              Choreographer, Creative Director, and Founder of The Pussycat
              Dolls. Shaping the art of performance for over three decades.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 text-champagne">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white-warm/80 hover:text-champagne transition-colors duration-240 link-hover inline-block py-1 min-h-[44px] flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 text-champagne">
              Connect
            </h4>
            <div className="flex gap-3 md:gap-4 mb-6">
              {social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-warm/80 hover:text-champagne transition-colors duration-240 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center -ml-2"
                    aria-label={item.name}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
            <p className="text-xs text-white-warm/60">
              For booking inquiries:{' '}
              <a
                href="mailto:booking@robinantin.com"
                className="text-champagne hover:underline"
              >
                booking@robinantin.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/20 text-center text-sm text-white-warm/60">
          <p>
            © {currentYear} Robin Antin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
