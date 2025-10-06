'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Lightbox } from '@/components/molecules/lightbox'
import { cn } from '@/lib/utils'

interface MediaItem {
  src: string
  alt: string
  width: number
  height: number
}

interface MediaGridProps {
  items: MediaItem[]
  className?: string
}

export function MediaGrid({ items, className }: MediaGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <>
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4',
          className
        )}
      >
        {items.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square overflow-hidden bg-black-soft cursor-pointer touch-manipulation min-h-[44px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.28,
              delay: index * 0.03,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-all duration-320 ease-smooth group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black-deep/0 group-hover:bg-black-deep/20 transition-colors duration-320" />
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={items}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  )
}
