import { motion } from 'framer-motion'
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
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="flex min-h-dvh flex-col md:flex-row">
        {/* Text / CTA */}
        <div className="relative z-10 w-full px-6 pt-12 pb-10 md:w-1/2 md:px-10 md:pt-16 md:pb-14 lg:pr-16">
          <motion.p
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-[#FF0000]/90 sm:text-sm"
            custom={0}
            initial="hidden"
            animate="show"
            variants={line}
          >
            KlausenBurger · Private events only
          </motion.p>

          <motion.h1
            className="font-playfair text-5xl font-semibold leading-none tracking-[-0.06em] text-[#FF0000] mix-blend-multiply drop-shadow-[0_0_28px_rgba(255,0,0,0.12)] sm:text-6xl md:text-8xl lg:text-[9rem] lg:leading-none"
            custom={1}
            initial="hidden"
            animate="show"
            variants={line}
          >
            {HEADLINE}
          </motion.h1>

          {/* Constrain so it stays comfortably on the white side */}
          <div className="mt-6 max-w-md md:max-w-[32rem]">
            <motion.p
              className="font-[family-name:var(--font-display)] text-base leading-relaxed text-neutral-900 sm:text-lg"
              custom={2}
              initial="hidden"
              animate="show"
              variants={line}
            >
              {SUB}
            </motion.p>
          </div>

          <motion.div
            className="mt-8 flex flex-col items-stretch gap-5"
            custom={3}
            initial="hidden"
            animate="show"
            variants={line}
          >
            <MagneticCallButton
              size="hero"
              variant="vip"
              className="w-full md:w-fit"
              labelPrefix="Call to Book Your Event: "
            />
            <p className="max-w-md font-[family-name:var(--font-display)] text-sm leading-relaxed text-neutral-900/70">
              This venue is reserved for private bookings. No forms—speak with
              our team directly to plan your night.
            </p>
          </motion.div>
        </div>

        {/* Static image */}
        <div className="relative w-full h-[42vh] overflow-hidden md:w-1/2 md:h-auto md:min-h-[60vh] lg:absolute lg:inset-y-0 lg:right-[-20%] lg:w-[70%]">
          <img
            src={HERO_IMAGE}
            alt=""
            className="h-full w-full object-cover object-[center_35%]"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
