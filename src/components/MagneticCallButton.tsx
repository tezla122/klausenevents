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
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.6 })

  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(212,175,55,0.35), transparent 55%)`

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
      ? 'px-8 py-6 sm:px-12 sm:py-7 text-lg sm:text-xl'
      : 'px-5 py-3.5 text-sm sm:text-base'

  const isVip = variant === 'vip'
  const vipTextColor = isHovered ? 'text-[#FF0000]' : 'text-white'

  return (
    <motion.a
      ref={ref}
      href={PHONE_TEL}
      className={`relative inline-flex max-w-full items-center justify-center overflow-hidden rounded-2xl font-semibold tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        isVip
          ? `border border-[#FF0000] bg-[#FF0000] ${vipTextColor} shadow-[0_18px_60px_-35px_rgba(255,0,0,0.55)] backdrop-blur-sm focus-visible:outline-[#FF0000]/40`
          : `border border-[#FF0000] bg-[#FF0000] ${vipTextColor} shadow-[0_18px_60px_-35px_rgba(255,0,0,0.55)] backdrop-blur-sm focus-visible:outline-[#FF0000]/40`
      } ${padding} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        reset()
      }}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      whileHover={
        isVip
          ? {
              scale: 1.03,
              boxShadow:
                '0 24px 90px -45px rgba(255,0,0,0.75), 0 0 28px -18px rgba(255,255,255,0.35)',
            }
          : { scale: 1.04 }
      }
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'tween', duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {isVip ? (
        <>
          {/* "Dissolve" fill to white on hover */}
          <motion.span
            className="pointer-events-none absolute inset-0 origin-left bg-white"
            initial={{ scaleX: 0, opacity: 0, filter: 'blur(8px)' }}
            animate={{
              scaleX: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
              filter: isHovered ? 'blur(0px)' : 'blur(8px)',
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          <span className="relative flex items-center justify-center gap-3 break-words">
            <motion.span
              className={[
                'pointer-events-none inline-flex',
                'drop-shadow-[0_0_0_rgba(139,0,0,0)]',
              ].join(' ')}
              animate={{
                rotate: isHovered ? [0, -18, 18, -10, 10, 0] : 0,
              }}
              transition={{
                duration: 0.9,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 1.6,
                ease: 'easeInOut',
              }}
            >
              <span
                className={[
                  'inline-flex',
                  isHovered
                    ? 'drop-shadow-[0_0_16px_rgba(255,0,0,0.55)]'
                    : 'drop-shadow-[0_0_0_rgba(0,0,0,0)]',
                ].join(' ')}
              >
                <PhoneIcon className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
            </motion.span>
            <span className="flex flex-col items-center text-center leading-tight">
              <span className="text-current/85">{labelPrefix}</span>
              <span className="whitespace-nowrap text-current">{PHONE_DISPLAY}</span>
            </span>
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
