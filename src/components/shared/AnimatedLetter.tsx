import { motion, type MotionValue, useTransform } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  progress: MotionValue<number>
  start: number
  end: number
}

export default function AnimatedLetter({ char, progress, start, end }: AnimatedLetterProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return <motion.span style={{ opacity }}>{char}</motion.span>
}
