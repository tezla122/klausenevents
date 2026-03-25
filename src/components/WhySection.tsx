import { Fragment } from 'react'
import { motion } from 'framer-motion'

const FEATURE_ITEMS = [
  'Scenă pentru trupe și DJ',
  'Live Cooking Shows',
  'Candy Bar Premium',
  'Ice Cream Bar',
] as const

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const cardHover = {
  y: -5,
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
}

export function WhySection() {
  return (
    <section
      id="why"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px', amount: 0.2 }}
        >
          <motion.h2
            id="why-heading"
            className="font-playfair col-span-1 text-6xl font-semibold leading-none tracking-[-0.04em] text-[#FF0000] md:col-span-3 md:text-8xl"
            variants={item}
          >
            De Ce KlausenBurger?
          </motion.h2>

          {/* Card 1 — Views */}
          <motion.article
            variants={item}
            whileHover={cardHover}
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-3xl font-semibold tracking-tight text-[#FF0000]">
              Panoramic Rooftop Views
            </h3>
            <p className="text-base leading-relaxed text-neutral-900">
              Cluj&apos;s premier skyline as the backdrop for your private night.
            </p>
          </motion.article>

          {/* Card 2 — Drinks */}
          <motion.article
            variants={item}
            whileHover={cardHover}
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-3xl font-semibold tracking-tight text-[#FF0000]">
              Award-Winning Brewery
            </h3>
            <p className="text-base leading-relaxed text-neutral-900">
              Exclusive craft beers poured fresh for your guests.
            </p>
          </motion.article>

          {/* Card 3 — Customization (spans 2 cols on md+) */}
          <motion.article
            variants={item}
            whileHover={cardHover}
            className="col-span-1 flex flex-col gap-5 rounded-2xl border-2 border-[#FF0000] bg-neutral-50 p-8 shadow-sm md:col-span-2"
          >
            <h3 className="font-playfair text-4xl font-semibold leading-tight tracking-tight text-[#FF0000] md:text-5xl">
              Spațiu 100% Customizabil.
            </h3>
            <p className="text-base font-medium leading-relaxed text-neutral-900 md:text-lg">
              Transformăm locația exact cum ai visat. Facilități premium la
              cerere:
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-3 text-sm text-neutral-900 sm:text-base">
              {FEATURE_ITEMS.map((feature, i) => (
                <Fragment key={feature}>
                  {i > 0 && (
                    <span className="select-none text-[#FF0000]" aria-hidden>
                      •
                    </span>
                  )}
                  <span className="inline-flex items-center gap-2">
                    <span className="text-[#FF0000]" aria-hidden>
                      ✓
                    </span>
                    <span>{feature}</span>
                  </span>
                </Fragment>
              ))}
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
