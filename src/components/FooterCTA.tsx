import { motion } from 'framer-motion'

const PHONE_DISPLAY = '0748 148 358 | 0728 293 606'
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

export function FooterCTA() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-[#FF0000]/15 bg-white py-12 sm:py-16 lg:py-24"
    >
      <motion.div
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[120%] w-1/2 -translate-y-1/2 rounded-full bg-[#FF0000]/10 blur-3xl"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[80%] w-1/2 rounded-full bg-[#FF0000]/8 blur-3xl"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 sm:text-left lg:px-8">
        <motion.h2
          className="font-[family-name:var(--font-display)] text-2xl font-bold leading-[1.12] tracking-[-0.03em] text-neutral-900 sm:text-3xl md:text-[clamp(1.65rem,5vw,3.25rem)]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          Dates are filling up fast. Let&apos;s plan your perfect night.
        </motion.h2>

        <motion.p
          className="mx-auto max-w-prose text-sm leading-relaxed text-neutral-900/70 sm:text-base md:max-w-xl md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Private events only—call to check availability and build your run of
          show.
        </motion.p>

        <motion.div
          className="mt-2 flex w-full max-w-lg flex-col items-stretch justify-center gap-4 sm:mt-4 sm:items-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <motion.a
            href={PHONE_TEL}
            className="relative inline-flex min-h-[44px] w-full max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-[#FF0000] bg-[#FF0000] px-6 py-4 text-base font-bold tracking-tight text-white shadow-[0_0_0_0_rgba(255,0,0,0.5)] transition-colors sm:w-auto sm:px-14 sm:py-5 sm:text-xl"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(255,0,0,0.55)',
                '0 0 0 14px rgba(255,0,0,0)',
                '0 0 0 0 rgba(255,0,0,0)',
              ],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.03, backgroundColor: '#FFFFFF', color: '#FF0000' }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="inline-flex items-center justify-center p-2"
              animate={{
                rotate: [0, -14, 14, -10, 10, 0],
                x: [0, -1, 1, -1, 0],
              }}
              transition={{
                duration: 0.85,
                repeat: Infinity,
                repeatDelay: 3.5,
                ease: 'easeInOut',
              }}
            >
              <PhoneIcon className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
            </motion.span>
            <span className="break-words text-left sm:break-normal">
              Dial {PHONE_DISPLAY}
            </span>
          </motion.a>
        </motion.div>

        <motion.p
          className="mt-4 text-xs uppercase tracking-[0.25em] text-neutral-500 sm:mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          KlausenBurger · Cluj · Private rooftop & brewery
        </motion.p>
      </div>
    </footer>
  )
}
