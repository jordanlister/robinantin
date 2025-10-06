'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LightboxProps {
  images: { src: string; alt: string }[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onPrevious()
          break
        case 'ArrowRight':
          onNext()
          break
      }
    },
    [isOpen, onClose, onNext, onPrevious]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black-deep/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-white-warm hover:text-champagne transition-colors touch-manipulation"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onPrevious()
                }}
                className={cn(
                  'absolute left-2 md:left-6 z-50 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-white-warm hover:text-champagne transition-colors touch-manipulation'
                )}
                aria-label="Previous image"
              >
                <ChevronLeft size={32} className="md:w-12 md:h-12" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onNext()
                }}
                className={cn(
                  'absolute right-2 md:right-6 z-50 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-white-warm hover:text-champagne transition-colors touch-manipulation'
                )}
                aria-label="Next image"
              >
                <ChevronRight size={32} className="md:w-12 md:h-12" />
              </button>
            </>
          )}

          {/* Image container */}
          <motion.div
            key={currentIndex}
            className="relative max-h-[90vh] max-w-[90vw]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.24 }}
            onClick={(e) => e.stopPropagation()}
          >
            {currentImage && (
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1920}
                height={1080}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                priority
              />
            )}
          </motion.div>

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-white-warm text-sm bg-black-deep/50 px-3 py-1 rounded">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
