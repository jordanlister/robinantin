'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/atoms/button'
import { Mail, Phone, MapPin } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  topic: z.string().min(1, 'Please select a topic'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const topics = [
  'Booking Inquiry',
  'Creative Direction',
  'Choreography',
  'Speaking Engagement',
  'Press',
  'General Inquiry',
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // In production, this would send to API route that uses Resend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white-warm">
      <section className="section-padding container-padding mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="headline-hero mb-4 md:mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl text-black-soft/70 max-w-2xl mx-auto px-4 md:px-0">
              Available for choreography, creative direction, speaking
              engagements, and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              <div>
                <h2 className="font-headline text-xl md:text-2xl mb-4 md:mb-6">Contact Information</h2>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <Mail className="text-champagne mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold mb-1 text-sm md:text-base">Email</p>
                      <a
                        href="mailto:booking@robinantin.com"
                        className="text-black-soft/70 hover:text-champagne transition-colors text-sm md:text-base break-all"
                      >
                        booking@robinantin.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <Phone className="text-champagne mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold mb-1 text-sm md:text-base">Phone</p>
                      <p className="text-black-soft/70 text-sm md:text-base">Available upon request</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <MapPin className="text-champagne mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold mb-1 text-sm md:text-base">Location</p>
                      <p className="text-black-soft/70 text-sm md:text-base">
                        Los Angeles, California
                        <br />
                        Available for travel worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 md:pt-8 border-t border-border/20">
                <h3 className="font-headline text-lg md:text-xl mb-3 md:mb-4">Response Time</h3>
                <p className="text-xs md:text-sm text-black-soft/70">
                  We typically respond to inquiries within 2-3 business days.
                  For urgent booking requests, please indicate in your message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-champagne/10 border border-champagne/30 p-6 md:p-12 text-center">
                  <h3 className="font-headline text-2xl md:text-3xl mb-3 md:mb-4">Thank You!</h3>
                  <p className="text-base md:text-lg mb-4 md:mb-6">
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="subtle">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 md:py-3.5 bg-white border border-border focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all outline-none text-base min-h-[44px]"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-lipstick text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 md:py-3.5 bg-white border border-border focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all outline-none text-base min-h-[44px]"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-lipstick text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company (optional)
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 md:py-3.5 bg-white border border-border focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all outline-none text-base min-h-[44px]"
                      placeholder="Your company or organization"
                    />
                  </div>

                  {/* Topic */}
                  <div>
                    <label htmlFor="topic" className="block text-sm font-semibold mb-2">
                      Topic *
                    </label>
                    <select
                      {...register('topic')}
                      id="topic"
                      className="w-full px-4 py-3 md:py-3.5 bg-white border border-border focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all outline-none text-base min-h-[44px]"
                    >
                      <option value="">Select a topic</option>
                      {topics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                    {errors.topic && (
                      <p className="text-lipstick text-sm mt-1">{errors.topic.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 md:py-3.5 bg-white border border-border focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all outline-none resize-none text-base"
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="text-lipstick text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-black-soft/60">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-champagne hover:underline">
                      Privacy Policy
                    </a>
                    . We respect your privacy and will never share your
                    information.
                  </p>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
