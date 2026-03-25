/**
 * Gallery uses only the images you keep in `public/images/`.
 * When you add or remove files there, update `IMAGE_FILES` below to match.
 */
export interface GalleryImage {
  id: string
  src: string
  alt: string
  gridClass: string
  parallaxY: number
  objectPosition?: string
}

/** Filenames for the vibe showcase only (order = grid order). */
const IMAGE_FILES = [
  'DSC_2521-Enhanced-NR.jpg',
  '1000015680.png',
  '1000015681.png',
  '1000015790.jpg',
  'DSC_7967.jpg',
  'DSC_7968.jpg',
  'DSC_7969.jpg',
  'DSC_7970.jpg',
  'DSC_7971.jpg',
  'DSC_7973.jpg',
  'DSC_7974.jpg',
  'DSC_7975.jpg',
  'DSC_7976.jpg',
  'DSC_7977.jpg',
  'DSC_2549-Enhanced-NR.jpg',
] as const

/** Hero full-bleed background (independent from the gallery list). */
export const HERO_IMAGE = '/images/1000015675.jpg'

const tile = (mdMinH: string) =>
  `col-span-1 min-h-[200px] sm:min-h-[180px] md:col-span-4 ${mdMinH}`

const parallaxCycle = [18, -14, 20, -18, 16, -22, 14, -16, 19, -12, 17, -20, 15, -13]

/** One tile per file in `IMAGE_FILES` — no extra images beyond your folder. */
export const GALLERY_IMAGES: GalleryImage[] = IMAGE_FILES.map((filename, i) => ({
  id: `g${i + 1}`,
  src: `/images/${filename}`,
  alt: `KlausenBurger venue — ${filename.replace(/\.[^.]+$/, '')}`,
  gridClass: tile(i % 3 === 1 ? 'md:min-h-[230px]' : 'md:min-h-[220px]'),
  parallaxY: parallaxCycle[i % parallaxCycle.length]!,
  objectPosition: 'object-center',
}))
