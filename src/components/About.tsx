import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { SiAnthropic, SiClaude, SiGooglegemini, SiOpenai } from 'react-icons/si'
import { Orbit, Sparkles, TerminalSquare, TextCursor } from 'lucide-react'
import WordsPullUpMultiStyle from './shared/WordsPullUpMultiStyle'
import AnimatedLetter from './shared/AnimatedLetter'
import Marquee from './shared/Marquee'

const BODY_TEXT =
  'Programmer and web developer who works with AI and is always interested in new technologies. Able to apply AI to help complete coding, problem-solving, and various tasks faster and more efficiently.'

const AI_TOOLS = [
  { name: 'Claude', icon: SiClaude },
  { name: 'Claude Code', icon: SiAnthropic },
  { name: 'Gemini', icon: SiGooglegemini },
  { name: 'ChatGPT', icon: SiOpenai },
  { name: 'DeepSeek', icon: Sparkles },
  { name: 'Codex', icon: TerminalSquare },
  { name: 'Cursor', icon: TextCursor },
  { name: 'Antigravity', icon: Orbit },
]

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.9', 'start 0.2'],
  })

  const chars = BODY_TEXT.split('')

  return (
    <section id="about" className="bg-bg py-20 sm:py-28 md:py-32 px-4">
      <div className="bg-surface border border-border shadow-sm rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-14 sm:py-20 md:py-24 text-center">
        <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.14em]">
          Programmer &amp; Web Developer
        </span>

        <div className="mt-6 sm:mt-8 max-w-3xl mx-auto">
          <WordsPullUpMultiStyle
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] sm:leading-[1]"
            segments={[
              { text: 'Chayapol Rattananate', className: 'font-normal text-ink' },
              { text: '', className: 'font-mono text-primary' },
              {
                text: '',
                className: 'font-normal text-ink',
              },
            ]}
          />
        </div>

        <p
          ref={paragraphRef}
          className="mt-10 sm:mt-12 max-w-2xl mx-auto text-ink-secondary text-sm md:text-base"
          style={{ lineHeight: 1.7 }}
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              progress={scrollYProgress}
              start={i / chars.length}
              end={(i + 1) / chars.length}
            />
          ))}
        </p>

        <Marquee className="mt-8 sm:mt-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {AI_TOOLS.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 bg-surface-alt border border-border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs text-ink-secondary"
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
