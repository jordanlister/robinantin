'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface TimelineItem {
  year: string
  title: string
  description: string
  highlights?: string[]
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-champagne/30 -translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={index}
              className={cn(
                'relative grid grid-cols-1 md:grid-cols-2 gap-8',
                isEven ? 'md:text-right' : ''
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.28,
                delay: index * 0.1,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {/* Year badge */}
              <div
                className={cn(
                  'absolute left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2',
                  'bg-black-deep border-2 border-champagne rounded-full',
                  'flex items-center justify-center px-4 py-2',
                  'font-headline text-champagne text-xs md:text-sm font-bold z-10',
                  'min-w-[4rem] h-16 whitespace-nowrap',
                  'transition-all duration-280 ease-smooth',
                  'hover:bg-champagne/10 hover:border-champagne-light hover:shadow-lg hover:shadow-champagne/20',
                  'cursor-default'
                )}
              >
                {item.year}
              </div>

              {/* Content - switches sides on desktop */}
              <div className={cn('md:col-span-1', isEven ? '' : 'md:col-start-2')}>
                <div className={cn(
                  'pl-28 md:pl-0 md:max-w-[87.5%]',
                  isEven ? 'md:mr-auto md:pr-14' : 'md:ml-auto md:pl-14'
                )}>
                  <h3 className="font-headline text-2xl md:text-3xl mb-3 text-champagne-light break-words">
                    {item.title}
                  </h3>
                  <p className="text-white-warm/90 mb-4 break-words">{item.description}</p>
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-white-warm/80 flex items-start gap-2"
                        >
                          <span className="text-champagne mt-1 flex-shrink-0">•</span>
                          <span className="break-words">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:col-span-1" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
