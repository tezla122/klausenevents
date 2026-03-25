import { useCallback, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const PHONE_DISPLAY = '0748 148 358 | 0728 293 606'
const PHONE_TEL = 'tel:+40748148358'

type MagneticCallButtonProps = {
  className?: string
  labelPrefix?: string
  size?: 'hero' | 'default'
  /** `vip`: red/white editorial CTA; `default`: fallback */
  variant?: 'vip' | 'default'
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.2a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function MagneticCallButton({
  className = '',
  labelPrefix = 'Call to Book Your Event: ',
  size = 'default',
  variant = 'vip',
}: MagneticCallButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.6 })

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
    },
    [size, x, y],
  )

  const reset = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  const padding =
    size === 'hero'
      ? 'px-8 py-6 sm:px-12 sm:py-7 text-lg sm:text-xl'
      : 'px-5 py-3.5 text-sm sm:text-base'

  const isVip = variant === 'vip'

  return (
    <motion.a
      ref={ref}
      href={PHONE_TEL}
      className={`relative inline-flex max-w-full items-center justify-center overflow-hidden rounded-2xl font-semibold tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        isVip
          ? 'border border-[#FF0000] bg-[#FF0000] text-white shadow-[0_18px_60px_-35px_rgba(255,0,0,0.55)] backdrop-blur-sm focus-visible:outline-[#FF0000]/40'
          : 'border border-[#FF0000] bg-[#FF0000] text-white shadow-[0_18px_60px_-35px_rgba(255,0,0,0.55)] backdrop-blur-sm focus-visible:outline-[#FF0000]/40'
      } ${padding} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseLeave={reset}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      whileHover={
        isVip
          ? {
              scale: 1.05,
            }
          : { scale: 1.04 }
      }
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'tween', duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {isVip ? (
        <>
          <span className="relative flex items-center justify-center gap-3 break-words">
            <span className="inline-flex">
              <PhoneIcon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
            </span>
            <span className="flex flex-col items-center text-center leading-tight">
              <span className="text-white/90">{labelPrefix}</span>
              <span className="text-white break-words">{PHONE_DISPLAY}</span>
            </span>
          </span>
        </>
      ) : (
        <>
          <span className="relative text-center break-words">
            <span className="text-white/90">{labelPrefix}</span>
            <span className="text-white break-words">{PHONE_DISPLAY}</span>
          </span>
        </>
      )}
    </motion.a>
  )
}
