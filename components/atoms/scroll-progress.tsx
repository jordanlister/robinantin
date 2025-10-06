'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

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

      setScrollProgress(scrolled)
    }

    // Update on mount
    updateScrollProgress()

    // Update on scroll
    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-champagne origin-left z-50"
      style={{
        scaleX,
      }}
    />
  )
}
