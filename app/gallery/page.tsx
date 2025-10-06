import { Metadata } from 'next'
import { MediaGrid } from '@/components/organisms/media-grid'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore photos and videos from Robin Antin\'s career, performances, and creative projects.',
}

// Mock data - will be replaced with Sanity CMS
const galleryItems = [
  { src: '/images/gallery/1.jpg', alt: 'PCD Performance', width: 800, height: 1000 },
  { src: '/images/gallery/2.jpg', alt: 'Rehearsal', width: 800, height: 1000 },
  { src: '/images/gallery/3.jpg', alt: 'Creative Direction', width: 800, height: 800 },
  { src: '/images/gallery/4.jpg', alt: 'Behind the Scenes', width: 800, height: 1000 },
  { src: '/images/gallery/5.jpg', alt: 'Performance', width: 800, height: 800 },
  { src: '/images/gallery/6.jpg', alt: 'Studio Work', width: 800, height: 1000 },
  { src: '/images/gallery/7.jpg', alt: 'Choreography', width: 800, height: 1000 },
  { src: '/images/gallery/8.jpg', alt: 'Production', width: 800, height: 800 },
  { src: '/images/gallery/9.jpg', alt: 'Event', width: 800, height: 1000 },
]

export default function GalleryPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-black-deep">
      <section className="section-padding container-padding mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 text-white-warm">
            <h1 className="headline-hero mb-4 md:mb-6">Gallery</h1>
            <p className="text-lg md:text-xl text-champagne-light max-w-2xl mx-auto px-4 md:px-0">
              Moments from three decades of performance, creativity, and innovation
            </p>
          </div>

          <MediaGrid items={galleryItems} />
        </div>
      </section>
    </div>
  )
}
