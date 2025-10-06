'use client'

import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({
  children,
  speed = 40,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className={cn('relative flex overflow-hidden', className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-8',
          !isPaused && 'animate-marquee'
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-8',
          !isPaused && 'animate-marquee'
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}

// Reduced motion fallback: static wrap
export function MarqueeStatic({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-8', className)}>
      {children}
    </div>
  )
}
