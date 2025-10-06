'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

interface CardProps {
  title: string
  description?: string
  image: string
  video?: string
  href?: string
  tags?: string[]
  className?: string
}

export function Card({
  title,
  description,
  image,
  video,
  href,
  tags,
  className,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const content = (
    <motion.div
      className={cn(
        'group relative overflow-hidden bg-black-soft',
        'transition-shadow duration-280 ease-smooth',
        'hover:shadow-2xl',
        className
      )}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Media Container */}
      <div className="relative aspect-[4/5] overflow-hidden touch-manipulation">
        {/* Static Image */}
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            'object-cover transition-all duration-320 ease-smooth',
            'group-hover:scale-105 group-active:scale-105',
            video && isHovered && 'opacity-0'
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Video overlay (desktop only) */}
        {video && (
          <video
            src={video}
            loop
            muted
            playsInline
            className={cn(
              'absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-320',
              isHovered && 'opacity-100',
              'hidden md:block'
            )}
            autoPlay={isHovered}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-transparent to-transparent" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white-warm">
          <h3 className="font-headline text-xl md:text-2xl tracking-tight mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-xs md:text-sm text-white-warm line-clamp-2">
              {description}
            </p>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 md:mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider text-champagne font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    )
  }

  return content
}
