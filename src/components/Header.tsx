import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const PHONE_TEL = 'tel:+40748148358'

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

export function Header() {
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)
  const [isGlass, setIsGlass] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = lastScrollY.current
    lastScrollY.current = latest

    setIsGlass(latest > 50)

    if (latest <= 10) {
      setIsHidden(false)
      return
    }

    if (latest < prev) {
      setIsHidden(false)
      return
    }

    if (latest > prev && latest > 80) {
      setIsHidden(true)
    }
  })

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-6 py-4 md:px-12"
      initial={false}
      animate={{
        y: isHidden ? '-100%' : '0%',
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={[
          'mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 rounded-2xl px-4 py-3 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out md:gap-4 md:px-6',
          isGlass
            ? 'border-b border-gray-200 bg-white/80 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-md'
            : 'border-b border-transparent bg-transparent shadow-none',
        ].join(' ')}
      >
        <a
          href="#top"
          className="justify-self-start font-playfair text-xl font-semibold tracking-tight text-[#FF0000] md:text-2xl"
        >
          KlausenBurger
        </a>

        <div className="flex max-w-[10.5rem] flex-col items-center gap-1 sm:max-w-none sm:flex-row sm:gap-2">
          <motion.span
            className="h-2 w-2 shrink-0 rounded-full bg-[#FF0000]"
            animate={{ opacity: [1, 0.45, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-hidden
          />
          <span className="text-center text-[0.65rem] font-medium uppercase leading-tight tracking-widest text-neutral-500 sm:text-xs">
            Available for Private Booking
          </span>
        </div>

        <a
          href={PHONE_TEL}
          className="inline-flex shrink-0 items-center justify-self-end gap-2 text-sm font-medium text-[#FF0000] underline-offset-4 transition-opacity hover:opacity-80"
        >
          <PhoneIcon className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </motion.header>
  )
}
