import { motion } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
}

export default function WordsPullUpMultiStyle({
  segments,
  className = '',
}: WordsPullUpMultiStyleProps) {
  let wordIndex = 0

  return (
    <span className={className}>
      {segments.map((segment, si) => {
        const words = segment.text.split(' ')
        return (
          <span key={si} className={segment.className}>
            {words.map((word, wi) => {
              const delay = wordIndex * 0.08
              wordIndex += 1
              return (
                <span key={wi}>
                  <span className="inline-block overflow-hidden">
                    <motion.span
                      className="inline-block"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                  {wi < words.length - 1 ? ' ' : ''}
                </span>
              )
            })}
            {si < segments.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </span>
  )
}
