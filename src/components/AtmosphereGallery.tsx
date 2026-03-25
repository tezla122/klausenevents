import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import type { GalleryImage } from '../data/gallery'
import { GALLERY_IMAGES } from '../data/gallery'

function GalleryTile({
  image,
  hoveredId,
  onHoverChange,
}: {
  image: GalleryImage
  hoveredId: string | null
  onHoverChange: (id: string | null) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [image.parallaxY, -image.parallaxY],
  )

  const dimOthers = hoveredId !== null && hoveredId !== image.id

  return (
    <motion.div
      ref={ref}
      className="relative h-full min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-charcoal-900 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)]"
      animate={{ opacity: dimOthers ? 0.38 : 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'opacity' }}
      onHoverStart={() => onHoverChange(image.id)}
      onHoverEnd={() => onHoverChange(null)}
    >
      <motion.div className="relative h-full w-full" style={{ y, willChange: 'transform' }}>
        <motion.div
          className="relative h-full w-full min-h-[160px] overflow-hidden sm:min-h-[180px]"
          initial="rest"
          whileHover="hover"
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            className={`h-full w-full object-cover ${image.objectPosition ?? ''}`}
            loading="lazy"
            decoding="async"
            variants={{
              rest: { scale: 1 },
              hover: {
                scale: 1.07,
                transition: {
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            style={{ willChange: 'transform' }}
          />
        </motion.div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15"
          aria-hidden
        />
      </motion.div>
    </motion.div>
  )
}

export function AtmosphereGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section
      id="atmosphere"
      className="relative border-t border-white/5 bg-black py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(251,191,36,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
            The atmosphere
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.85rem,4.5vw,3rem)] font-bold tracking-[-0.03em] text-zinc-50">
            A vibe showcase
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm text-amber-200/90">
             
            </code>
            
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm text-zinc-400">
              
            </code>
            
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm text-zinc-400">
            </code>
            
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-12 md:gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              className={image.gridClass}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px', amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: Math.min(index * 0.05, 0.55),
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              <GalleryTile
                image={image}
                hoveredId={hoveredId}
                onHoverChange={setHoveredId}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
