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
      <div className="flex min-h-0 flex-col md:min-h-dvh md:flex-row">
        {/* Text / CTA */}
        <div className="relative z-10 w-full px-4 py-12 sm:px-6 md:w-1/2 md:px-10 md:pt-16 md:pb-14 lg:pr-16">
          <motion.p
            className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#FF0000]/90 sm:tracking-[0.4em] sm:text-sm"
            custom={0}
            initial="hidden"
            animate="show"
            variants={line}
          >
            KlausenBurger · Private events only
          </motion.p>

          <motion.p
            className="mb-3 max-w-xl font-[family-name:var(--font-display)] text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.28em] text-neutral-500 sm:mb-4 sm:text-xs sm:tracking-[0.32em] md:text-[0.7rem]"
            custom={1}
            initial="hidden"
            animate="show"
            variants={line}
          >
            Evenimente la înălțime în inima Clujului
          </motion.p>

          <motion.h1
            className="font-playfair text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#FF0000] mix-blend-multiply drop-shadow-[0_0_28px_rgba(255,0,0,0.12)] sm:text-4xl sm:leading-none md:text-8xl md:tracking-[-0.06em] lg:text-[9rem] lg:leading-none"
            custom={2}
            initial="hidden"
            animate="show"
            variants={line}
          >
            {HEADLINE}
          </motion.h1>

          <div className="mt-6 max-w-md md:max-w-[32rem]">
            <motion.p
              className="font-[family-name:var(--font-display)] text-sm leading-relaxed text-neutral-900 sm:text-base sm:leading-relaxed md:text-lg"
              custom={3}
              initial="hidden"
              animate="show"
              variants={line}
            >
              {SUB}
            </motion.p>
          </div>

          <motion.div
            className="mt-8 flex flex-col items-stretch gap-3 sm:gap-5"
            custom={4}
            initial="hidden"
            animate="show"
            variants={line}
          >
            <MagneticCallButton
              size="hero"
              variant="vip"
              className="w-full min-h-[44px] md:w-fit"
              labelPrefix="Call to Book Your Event: "
            />
            <p className="max-w-md break-words font-[family-name:var(--font-display)] text-sm leading-relaxed text-neutral-900/70 sm:text-base">
              This venue is reserved for private bookings. No forms—speak with
              our team directly to plan your night.
            </p>
          </motion.div>
        </div>

        {/* Static image */}
        <div className="relative w-full max-h-[300px] min-h-0 overflow-hidden md:max-h-none md:h-auto md:w-1/2 md:min-h-[60vh] lg:absolute lg:inset-y-0 lg:right-[-20%] lg:w-[70%]">
          <img
            src={HERO_IMAGE}
            alt=""
            className="h-full max-h-[300px] min-h-[220px] w-full object-cover object-[center_35%] sm:min-h-[260px] md:max-h-none md:min-h-0"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
