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
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const heroDim = useTransform(scrollYProgress, [0, 0.9], [0.55, 0.78])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-5 pb-16 pt-28 sm:justify-center sm:px-8 sm:pb-24 sm:pt-20"
    >
      {/* Ken Burns background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.12 }}
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          decoding="async"
          style={{ willChange: 'transform' }}
        />

        {/* Readability: dark band behind typography + bottom anchor for mobile */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent sm:from-black/50"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_45%,rgba(0,0,0,0.55),transparent_70%)]"
          aria-hidden
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/55 to-transparent"
          style={{ opacity: heroDim }}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        style={{ y: contentY }}
      >
        <motion.p
          className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-white/70 sm:text-sm"
          custom={0}
          initial="hidden"
          animate="show"
          variants={line}
        >
          KlausenBurger · Private events only
        </motion.p>

        <motion.h1
          className="font-playfair text-6xl font-semibold leading-[1.05] tracking-tighter text-white/95 mix-blend-soft-light md:text-8xl"
          custom={1}
          initial="hidden"
          animate="show"
          variants={line}
        >
          {HEADLINE}
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl font-[family-name:var(--font-display)] text-lg leading-relaxed text-white/80 sm:text-xl"
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
            variant="glass"
            className="w-full sm:w-auto"
            labelPrefix="Call to Book Your Event: "
          />
          <p className="max-w-md font-[family-name:var(--font-display)] text-sm leading-relaxed text-gray-300">
            This venue is reserved for private bookings. No forms—speak with
            our team directly to plan your night.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
