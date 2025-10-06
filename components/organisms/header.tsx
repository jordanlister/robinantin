'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Pussycat Dolls', href: '/pussycat-dolls' },
  { name: 'Playground LA', href: '/playground-la' },
  { name: 'Press', href: '/press' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showFullName = isScrolled || isLogoHovered

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 bg-black-deep/95 backdrop-blur-md pt-4 pb-3 md:py-4 shadow-lg transition-all duration-320 ease-smooth"
    >
      <div className="container-padding mx-auto">
        <div className="flex items-center justify-between min-h-[44px]">
          {/* Logo */}
          <Link
            href="/"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            className="font-headline text-xl md:text-2xl tracking-tight text-white-warm min-h-[44px] flex items-center overflow-hidden"
          >
            <motion.div
              initial={false}
              animate={{ width: showFullName ? 'auto' : 'auto' }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative whitespace-nowrap"
            >
              <AnimatePresence mode="wait">
                {showFullName ? (
                  <motion.span
                    key="full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    Robin <span className="text-champagne">Antin</span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="short"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    R<span className="text-champagne">A</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative text-sm uppercase tracking-wider transition-colors duration-240',
                    isActive
                      ? 'text-champagne'
                      : 'text-white-warm hover:text-champagne'
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-champagne"
                      layoutId="activeNav"
                      transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white-warm hover:text-champagne transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-3"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            className="lg:hidden mt-6 pb-6 space-y-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.24 },
              opacity: { duration: 0.24, delay: 0.12 }
            }}
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'block text-base md:text-lg uppercase tracking-wider transition-colors duration-240 py-3 min-h-[44px] flex items-center',
                    isActive
                      ? 'text-champagne'
                      : 'text-white-warm hover:text-champagne'
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </motion.nav>
        )}
      </div>
    </header>
  )
}
