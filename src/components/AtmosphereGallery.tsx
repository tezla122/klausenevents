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

  const isActive = hoveredId === image.id

  return (
    <motion.div
      ref={ref}
      className="relative h-full min-h-0 rounded-2xl bg-white shadow-[0_18px_60px_-40px_rgba(255,0,0,0.35)]"
      onHoverStart={() => onHoverChange(image.id)}
      onHoverEnd={() => onHoverChange(null)}
    >
      <motion.div className="relative h-full w-full" style={{ y, willChange: 'transform' }}>
        <motion.div
          className="relative h-full w-full min-h-[192px] overflow-hidden sm:min-h-[200px] md:min-h-[160px]"
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
                scale: 1.1,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            style={{ willChange: 'transform' }}
          />
        </motion.div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FF0000]/18 via-transparent to-transparent"
          aria-hidden
        />
      </motion.div>

      {/* Thick red border that expands on hover */}
      <motion.span
        className="pointer-events-none absolute rounded-2xl border-4 border-[#FF0000]"
        initial={{ inset: '0px', opacity: 0 }}
        animate={{
          inset: isActive ? '-4px' : '0px',
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}

export function AtmosphereGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section
      id="atmosphere"
      className="relative border-t border-[#FF0000]/10 bg-white py-12 sm:py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,0,0,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 max-w-3xl sm:mb-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#FF0000]">
            The atmosphere
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.03em] text-[#FF0000] sm:text-3xl lg:text-[clamp(1.85rem,4.5vw,3rem)]">
            A vibe showcase
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-left text-sm leading-relaxed text-neutral-900/70 sm:text-base md:mx-0 md:text-lg">
            Hover the frames to feel the energy. The border blooms in red and the photo lifts slightly for a crisp,
            editorial reveal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-12 md:gap-4 lg:gap-8">
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
