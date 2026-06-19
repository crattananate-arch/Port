import { motion } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
}

export default function WordsPullUp({ text, className = '' }: WordsPullUpProps) {
  const words = text.split(' ')

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  )
}
