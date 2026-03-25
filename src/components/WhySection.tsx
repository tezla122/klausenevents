import { motion } from 'framer-motion'
import { SELLING_POINTS } from '../data/why'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
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
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <h2
            id="why-heading"
            className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-neutral-900"
          >
            Why KlausenBurger
          </h2>
          <p className="mt-3 text-lg text-neutral-900/70">
            Built for hosts who want a private venue with character—and craft
            behind every pour.
          </p>
        </motion.div>

        <motion.ul
          className="grid gap-10 sm:grid-cols-12 sm:gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px', amount: 0.35 }}
        >
          {SELLING_POINTS.map((point, i) => (
            <motion.li
              key={point.id}
              variants={item}
              className="sm:col-span-4"
            >
              <div className="flex flex-col gap-3 border-l border-[#FF0000]/30 pl-6">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF0000]/90">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-neutral-900">
                  {point.title}
                </h3>
                <p className="text-base leading-relaxed text-neutral-900/70">
                  {point.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
