import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { HERO_IMAGE } from '../data/gallery'
import { MagneticCallButton } from './MagneticCallButton'

const HEADLINE = 'Exclusive Views. Unforgettable Nights.'
const SUB =
  "Host your private event at Cluj's premier rooftop venue. Tailored experiences, craft beer, and a skyline you won't forget."

const line = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: 0.12 + i * 0.14,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-8"
    >
      <div className="pointer-events-none absolute inset-0">
        {/* Off-center, frameless hero image that bleeds off the viewport */}
        <motion.div
          className="absolute left-[45%] top-[-22%] h-[150%] w-[120%] overflow-hidden"
          style={{ y: imageParallaxY }}
        >
          <motion.img
            src={HERO_IMAGE}
            alt=""
            className="h-full w-full object-cover object-[center_35%]"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1.16 }}
            transition={{
              duration: 26,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            decoding="async"
            style={{ willChange: 'transform' }}
          />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        style={{ y: contentY }}
      >
        <motion.p
          className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-[#FF0000]/85 sm:text-sm"
          custom={0}
          initial="hidden"
          animate="show"
          variants={line}
        >
          KlausenBurger · Private events only
        </motion.p>

        <motion.h1
          className="font-playfair text-8xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#FF0000] mix-blend-multiply drop-shadow-[0_0_28px_rgba(255,0,0,0.12)] sm:text-[5.25rem] md:text-[10rem]"
          custom={1}
          initial="hidden"
          animate="show"
          variants={line}
        >
          {HEADLINE}
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl font-[family-name:var(--font-display)] text-lg leading-relaxed text-neutral-900/70 sm:text-xl"
          custom={2}
          initial="hidden"
          animate="show"
          variants={line}
        >
          {SUB}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-stretch gap-5 sm:items-start"
          custom={3}
          initial="hidden"
          animate="show"
          variants={line}
        >
          <MagneticCallButton
            size="hero"
            variant="vip"
            className="w-full sm:w-auto"
            labelPrefix="Call to Book Your Event: "
          />
          <p className="max-w-md font-[family-name:var(--font-display)] text-sm leading-relaxed text-neutral-900/70">
            This venue is reserved for private bookings. No forms—speak with
            our team directly to plan your night.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
