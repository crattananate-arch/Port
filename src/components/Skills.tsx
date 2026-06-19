import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SiCss, SiHtml5, SiJavascript, SiPython, SiReact, SiSupabase } from 'react-icons/si'
import WordsPullUpMultiStyle from './shared/WordsPullUpMultiStyle'
import Marquee from './shared/Marquee'
import GridGlow from './shared/GridGlow'

const SKILL_GROUPS = [
  {
    title: 'Design',
    text: 'Infographic Design, Poster Design, Visual Communication.',
  },
  {
    title: 'Multimedia',
    text: 'Video Editing, Web Design (HTML/CSS/Python/React/JavaScript/Supabase).',
  },
  {
    title: 'Tools',
    text: 'Microsoft Office, Unity, Blender, Google Apps Script.',
  },
]

const TECH_STACK = [
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
]

const LANGUAGES = [
  { name: 'Thai', level: 'Native' },
  {
    name: 'English',
    level: 'B1 (Intermediate — CEFR)',
    note: 'Proficient in reading technical documentation and basic professional communication.',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative bg-bg py-20 sm:py-28 md:py-32 px-4">
      <div className="tech-grid absolute inset-0 pointer-events-none" />
      <GridGlow />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl">
          <WordsPullUpMultiStyle
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1]"
            segments={[{ text: 'Skills & Languages.', className: 'text-ink' }]}
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 sm:mb-12 md:mb-14">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              className="bg-surface border border-border shadow-sm rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{ y: -6, boxShadow: '0 16px 32px -16px rgba(37, 99, 235, 0.25)' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-base sm:text-lg text-primary font-medium mb-4">{group.title}</h3>
              <p className="text-sm text-ink-secondary" style={{ lineHeight: 1.6 }}>
                {group.text}
              </p>
            </motion.div>
          ))}
        </div>

        <Marquee className="mb-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {TECH_STACK.map(({ name, icon: Icon, color }) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 bg-surface-alt border border-border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs text-ink-secondary"
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color }} />
              {name}
            </span>
          ))}
        </Marquee>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LANGUAGES.map((lang) => (
            <motion.div
              key={lang.name}
              className="bg-surface border border-border shadow-sm rounded-2xl p-6 sm:p-8"
              whileHover={{ y: -6, boxShadow: '0 16px 32px -16px rgba(37, 99, 235, 0.25)' }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="text-base sm:text-lg text-ink font-medium mb-1">{lang.name}</h4>
              <p className="text-sm text-primary mb-2">{lang.level}</p>
              {lang.note && (
                <p className="text-sm text-ink-tertiary" style={{ lineHeight: 1.6 }}>
                  {lang.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
