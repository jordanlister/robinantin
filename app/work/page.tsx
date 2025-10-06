'use client'

import { useState } from 'react'
import { Card } from '@/components/molecules/card'
import { motion } from 'framer-motion'

// Mock data - will be replaced with Sanity CMS
const projects = [
  {
    id: 1,
    title: 'The Pussycat Dolls - "Don\'t Cha"',
    description: 'Choreography and creative direction for breakthrough single',
    image: '/images/work/dont-cha.jpg',
    video: '/videos/dont-cha-preview.mp4',
    category: 'Music',
    year: '2005',
    role: 'Choreographer, Creative Director',
  },
  {
    id: 2,
    title: 'PCD World Tour 2006',
    description: 'Full creative direction and choreography for sold-out global tour',
    image: '/images/work/tour-2006.jpg',
    category: 'Live',
    year: '2006',
    role: 'Creative Director, Choreographer',
  },
  {
    id: 3,
    title: 'Artist Development - Nicole Scherzinger',
    description: 'Performance coaching and creative development',
    image: '/images/work/nicole.jpg',
    category: 'Brand',
    year: '2003-2010',
    role: 'Creative Director',
  },
  {
    id: 4,
    title: 'Film - "Burlesque"',
    description: 'Choreography consultation for major motion picture',
    image: '/images/work/burlesque-film.jpg',
    category: 'Film',
    year: '2010',
    role: 'Choreography Consultant',
  },
  {
    id: 5,
    title: 'Brand Campaign - Major Fashion House',
    description: 'Creative direction for global fashion campaign',
    image: '/images/work/fashion-campaign.jpg',
    category: 'Brand',
    year: '2015',
    role: 'Creative Director',
  },
  {
    id: 6,
    title: 'TV Special - Pussycat Dolls Vegas',
    description: 'Production and choreography for Vegas residency special',
    image: '/images/work/vegas-special.jpg',
    video: '/videos/vegas-preview.mp4',
    category: 'TV',
    year: '2006',
    role: 'Producer, Choreographer',
  },
]

const categories = ['All', 'Music', 'TV', 'Film', 'Brand', 'Live']

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white-warm">
      {/* Hero */}
      <section className="section-padding container-padding mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="headline-hero mb-4 md:mb-6">Work</h1>
          <p className="text-lg md:text-xl text-black-soft/70 px-4 md:px-0">
            Three decades of choreography, creative direction, and performance
            innovation across music, film, television, and live entertainment.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2.5 md:py-2 text-xs md:text-sm uppercase tracking-wider transition-all duration-240 min-h-[44px] flex items-center justify-center ${
                selectedCategory === category
                  ? 'bg-champagne text-black-deep'
                  : 'bg-transparent text-black-soft/70 hover:text-champagne border border-border hover:border-champagne'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
          layout
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.24 }}
            >
              <Card
                title={project.title}
                description={project.description}
                image={project.image}
                video={project.video}
                href={`/work/${project.id}`}
                tags={[project.category, project.year]}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-black-soft/50">
            No projects found in this category.
          </div>
        )}
      </section>
    </div>
  )
}
