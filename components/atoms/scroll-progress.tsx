'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useLenis } from '@/components/providers/smooth-scroll-provider'

export function ScrollProgress() {
  const lenis = useLenis()
  const scrollProgress = useMotionValue(0)
  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx

      scrollProgress.set(scrolled)
    }

    // If Lenis is available, listen to its scroll events
    if (lenis) {
      lenis.on('scroll', updateScrollProgress)

      return () => {
        lenis.off('scroll', updateScrollProgress)
      }
    }

    // Fallback to native scroll events if Lenis is not available
    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [lenis, scrollProgress])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-champagne origin-left z-50 pointer-events-none"
      style={{
        scaleX,
      }}
    />
  )
}
