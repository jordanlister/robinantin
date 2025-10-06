'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

export function RouteTransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (children !== displayChildren) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setDisplayChildren(children)
        setIsAnimating(false)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [children, displayChildren])

  return (
    <motion.div
      key={pathname}
      animate={{ opacity: isAnimating ? 0.7 : 1 }}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      {displayChildren}
    </motion.div>
  )
}
