import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-[#FF0000] via-[#D92121] to-[#FF0000]"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
