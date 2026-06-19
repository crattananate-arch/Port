import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUpMultiStyle from './shared/WordsPullUpMultiStyle'
import GridGlow from './shared/GridGlow'

interface ExperienceCard {
  index: string
  title: string
  subtitle?: string
  items: string[]
}

const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    index: '01',
    title: 'Experience & Achievements',
    subtitle: 'Internship at Thamai Phun Sawat Rat Nukul School — May to October 2025',
    items: [
      'Graphic Design: Designed professional infographics and posters for school events and public relations, focusing on clear communication and visual engagement.',
      'Video Production: Edited and produced video content for educational purposes and school activities, utilizing modern post-production techniques.',
      'Educational Web Development: Developed and maintained instructional websites to facilitate online learning and provide digital resources for students.',
    ],
  },
  {
    index: '02',
    title: 'Academic Responsibilities',
    items: [
      'Academic Research: Conducted formal educational research to improve teaching efficiency and student learning outcomes (specifically in Computing Science).',
      'Administrative Documentation: Managed and prepared internal school documents, ensuring accuracy and compliance with institutional standards and professional ethics.',
    ],
  },
]

function ExperienceCardItem({ card, delay }: { card: ExperienceCard; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="bg-surface border border-border shadow-sm rounded-2xl p-6 sm:p-8 flex flex-col h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      whileHover={{ y: -6, boxShadow: '0 16px 32px -16px rgba(37, 99, 235, 0.25)' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-mono">
          {card.index}
        </span>
        <ArrowRight className="w-4 h-4 text-primary -rotate-45" />
      </div>

      <h3 className="text-lg sm:text-xl text-ink font-medium mb-2">{card.title}</h3>

      {card.subtitle && (
        <p className="text-sm text-ink-tertiary mb-6" style={{ lineHeight: 1.5 }}>{card.subtitle}</p>
      )}

      <ul className="flex flex-col gap-3">
        {card.items.map((item) => (
          <li key={item} className="text-sm text-ink-secondary" style={{ lineHeight: 1.6 }}>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function WorkExperience() {
  return (
    <section id="experience" className="relative bg-bg py-20 sm:py-28 md:py-32 px-4">
      <div className="tech-grid absolute inset-0 pointer-events-none" />
      <GridGlow />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl">
          <WordsPullUpMultiStyle
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1]"
            segments={[{ text: 'Work Experience.', className: 'text-ink' }]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EXPERIENCE_CARDS.map((card, i) => (
            <ExperienceCardItem key={card.index} card={card} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}
