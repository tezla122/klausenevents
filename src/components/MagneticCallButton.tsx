import { useCallback, useRef, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'

const PHONE_DISPLAY = '+40 755 123 456'
const PHONE_TEL = 'tel:+40755123456'

type MagneticCallButtonProps = {
  className?: string
  labelPrefix?: string
  size?: 'hero' | 'default'
  /** `glass`: frosted panel for hero; `default`: amber accent block */
  variant?: 'default' | 'glass'
}

export function MagneticCallButton({
  className = '',
  labelPrefix = 'Call to Book Your Event: ',
  size = 'default',
  variant = 'default',
}: MagneticCallButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.6 })

  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(251,191,36,0.35), transparent 55%)`
  const glassSheen = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.18), transparent 55%)`

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = clientX - cx
      const dy = clientY - cy
      const strength = size === 'hero' ? 0.22 : 0.18
      x.set(dx * strength)
      y.set(dy * strength)
      const px = ((clientX - rect.left) / rect.width) * 100
      const py = ((clientY - rect.top) / rect.height) * 100
      glowX.set(px)
      glowY.set(py)
    },
    [glowX, glowY, size, x, y],
  )

  const reset = useCallback(() => {
    x.set(0)
    y.set(0)
    glowX.set(50)
    glowY.set(50)
  }, [glowX, glowY, x, y])

  const padding =
    size === 'hero'
      ? 'px-6 py-5 sm:px-10 sm:py-6 text-base sm:text-lg'
      : 'px-5 py-3.5 text-sm sm:text-base'

  const isGlass = variant === 'glass'

  return (
    <motion.a
      ref={ref}
      href={PHONE_TEL}
      className={`relative inline-flex max-w-full items-center justify-center overflow-hidden rounded-2xl font-semibold tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        isGlass
          ? 'border border-white/20 bg-white/10 text-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md focus-visible:outline-white/40'
          : 'border border-amber-500/40 bg-charcoal-850/90 text-amber-100 shadow-[0_0_40px_-8px_rgba(251,191,36,0.55)] backdrop-blur-sm focus-visible:outline-amber-400'
      } ${padding} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        reset()
      }}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      whileHover={
        isGlass
          ? { scale: 1.025, borderColor: 'rgba(255,255,255,0.45)' }
          : { scale: 1.04 }
      }
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
    >
      {isGlass ? (
        <>
          <motion.span
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{ background: glassSheen }}
          />
          <motion.span
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.04]"
            animate={{ opacity: isHovered ? 1 : 0.72 }}
            transition={{ duration: 0.35 }}
          />
          {isHovered && (
            <motion.span
              className="pointer-events-none absolute -inset-[80%] rounded-full bg-white/10"
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            />
          )}
          <span className="relative text-center break-words">
            <span className="text-white/85">{labelPrefix}</span>
            <span className="whitespace-nowrap text-white">{PHONE_DISPLAY}</span>
          </span>
        </>
      ) : (
        <>
          <motion.span
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{ background }}
          />
          <motion.span
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/15 via-transparent to-cyan-500/10"
            animate={{ opacity: isHovered ? 1 : 0.65 }}
          />
          {isHovered && (
            <motion.span
              className="pointer-events-none absolute -inset-[100%] rounded-full bg-amber-400/20"
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
          )}
          <span className="relative text-center break-words">
            <span className="text-amber-200/90">{labelPrefix}</span>
            <span className="whitespace-nowrap text-amber-50">{PHONE_DISPLAY}</span>
          </span>
        </>
      )}
    </motion.a>
  )
}
