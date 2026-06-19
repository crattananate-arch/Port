import { ArrowRight, Mail, Phone } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import WordsPullUpMultiStyle from './shared/WordsPullUpMultiStyle'
import GridGlow from './shared/GridGlow'

const GITHUB_URL = 'https://github.com/crattananate-arch?tab=repositories'
const EMAIL = 'c.rattananate@gmail.com'
const PHONE = '098-665-4621'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-bg py-20 sm:py-28 md:py-32 px-4">
      <div className="tech-grid absolute inset-0 pointer-events-none" />
      <GridGlow />

      <div className="relative max-w-6xl mx-auto bg-surface border border-border shadow-sm rounded-2xl md:rounded-[2rem] px-6 sm:px-10 md:px-16 py-14 sm:py-20 md:py-24 text-center">
        <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.14em]">
          Contact
        </span>

        <div className="mt-6 sm:mt-8">
          <WordsPullUpMultiStyle
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95]"
            segments={[{ text: 'Chayapol Rattananate', className: 'font-normal text-ink' }]}
          />
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 text-ink-secondary text-sm hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            {EMAIL}
          </a>

          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            className="inline-flex items-center gap-2 text-ink-secondary text-sm hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            {PHONE}
          </a>
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 sm:mt-12 inline-flex items-center justify-between gap-4 bg-primary hover:bg-primary-strong rounded-full pl-6 pr-2 py-2 w-fit mx-auto shadow-lg shadow-primary/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <span className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
            <SiGithub className="w-4 h-4" />
            GitHub
          </span>
          <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </section>
  )
}
