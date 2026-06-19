import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Lottie from 'lottie-react'
import WordsPullUpMultiStyle from './shared/WordsPullUpMultiStyle'
import GridGlow from './shared/GridGlow'
import loadingAnimation from '../assets/loading-animation.json'

interface ProjectCard {
  index: string
  title: string
  items: string[]
  link?: string
}

const PROJECT_CARDS: ProjectCard[] = [
  {
    index: '01',
    title: 'E-Commerce App.',
    items: [
      'Full-featured online store with product catalog & cart system.',
      'Responsive UI built with React, Vite, and Tailwind CSS.',
      'Secure checkout flow with a modern, seamless aesthetic.',
    ],
    link: 'https://ecom-green-kappa.vercel.app/',
  },
  {
    index: '02',
    title: 'Meeting Management.',
    items: [
      'Automated Google Sheets & Google Calendar synchronization.',
      'Built with Google Apps Script, HTML, and CSS.',
      'Streamlined dashboard for organizational scheduling.',
    ],
    link: 'https://script.google.com/a/macros/rbru.ac.th/s/AKfycbyYhZPhencCeGXQgmLjmhpSeoOqM-kkFgkl8lkG1sddQGs2OBPpg8DwIRzzSQMNofVh/exec',
  },
  {
    index: '03',
    title: 'Hotel Booking App.',
    items: [
      'Comprehensive room reservation & availability management.',
      'Responsive UI built with React, Vite, and Tailwind CSS.',
      'Seamless booking flow and modern aesthetic.',
    ],
    link: 'https://hotel-booking-one-rosy.vercel.app/',
  },
]

function FeatureCard({ card, delay }: { card: ProjectCard; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="bg-surface border border-border shadow-sm rounded-2xl p-6 flex flex-col h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      whileHover={{ y: -6, boxShadow: '0 16px 32px -16px rgba(37, 99, 235, 0.25)' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-between mb-8">
        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-mono">
          {card.index}
        </span>
      </div>

      <h3 className="text-lg sm:text-xl text-ink font-medium mb-6">{card.title}</h3>

      <ul className="flex flex-col gap-3 mb-8">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary" style={{ lineHeight: 1.6 }}>
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {card.link && (
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-auto inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-primary text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          View live site
          <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </motion.div>
  )
}

export default function Projects() {
  const showreelRef = useRef(null)
  const showreelInView = useInView(showreelRef, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative min-h-screen bg-bg py-20 sm:py-28 md:py-32 px-4">
      <div className="tech-grid absolute inset-0 pointer-events-none" />
      <GridGlow />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl">
          <WordsPullUpMultiStyle
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1]"
            segments={[
              { text: 'Projects', className: 'text-ink' },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          <motion.div
            ref={showreelRef}
            className="relative rounded-2xl overflow-hidden h-[320px] lg:h-full bg-surface border border-border shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={showreelInView ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ y: -6, boxShadow: '0 16px 32px -16px rgba(37, 99, 235, 0.25)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <Lottie animationData={loadingAnimation} loop autoplay className="w-full h-full" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/70" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm sm:text-base font-medium text-white">
                Interactive & Visual Arts.
              </p>
            </div>
          </motion.div>

          {PROJECT_CARDS.map((card, i) => (
            <FeatureCard key={card.index} card={card} delay={(i + 1) * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}
