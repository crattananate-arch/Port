import { useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function Marquee({ children, speed = 28, className = '' }: MarqueeProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>{children}</div>
  }

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="flex w-max items-center gap-3 sm:gap-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">{children}</div>
        <div className="flex shrink-0 items-center gap-3 sm:gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
