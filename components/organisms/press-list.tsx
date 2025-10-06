'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PressItem {
  title: string
  publication: string
  publicationLogo?: string
  date: string
  excerpt?: string
  url: string
}

interface PressListProps {
  items: PressItem[]
  className?: string
}

export function PressList({ items, className }: PressListProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6', className)}>
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-black-soft border border-border/20 hover:border-champagne/50 transition-all duration-280 ease-smooth overflow-hidden touch-manipulation"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.28,
            delay: index * 0.05,
            ease: [0.2, 0.8, 0.2, 1],
          }}
          whileHover={{ y: -4 }}
          whileTap={{ y: -2 }}
        >
          <div className="p-5 md:p-6">
            {/* Publication logo */}
            {item.publicationLogo && (
              <div className="mb-4 h-8 relative">
                <Image
                  src={item.publicationLogo}
                  alt={item.publication}
                  fill
                  className="object-contain object-left filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
            )}

            {/* Publication name (fallback if no logo) */}
            {!item.publicationLogo && (
              <p className="text-xs uppercase tracking-wider text-champagne mb-3">
                {item.publication}
              </p>
            )}

            {/* Date */}
            <p className="text-xs text-white-warm/80 mb-2 md:mb-3">{item.date}</p>

            {/* Title */}
            <h3 className="font-headline text-lg md:text-xl mb-2 md:mb-3 text-white-warm group-hover:text-champagne transition-colors">
              {item.title}
            </h3>

            {/* Excerpt */}
            {item.excerpt && (
              <p className="text-xs md:text-sm text-white-warm/90 line-clamp-3 mb-3 md:mb-4">
                {item.excerpt}
              </p>
            )}

            {/* Read more link */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-champagne group-hover:gap-3 transition-all">
              <span>Read Article</span>
              <ExternalLink size={14} />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
