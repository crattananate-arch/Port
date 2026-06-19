import { useEffect, useRef } from 'react'

export default function GridGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const node = ref.current
    if (!node) return

    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      node.style.setProperty('--x', `${e.clientX - rect.left}px`)
      node.style.setProperty('--y', `${e.clientY - rect.top}px`)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(360px circle at var(--x, 50%) var(--y, 50%), rgba(37, 99, 235, 0.10), transparent 70%)',
      }}
    />
  )
}
