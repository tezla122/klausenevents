import { useMediaQuery } from '../../hooks/useMediaQuery'

const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#atmosphere', label: 'Gallery' },
  { href: '#why', label: 'Why us' },
  { href: '#contact', label: 'Contact' },
] as const

const DESKTOP_MIN_WIDTH = '(min-width: 768px)'

export function DesktopNavbar(): React.JSX.Element | null {
  const isDesktop = useMediaQuery(DESKTOP_MIN_WIDTH)

  if (!isDesktop) {
    return null
  }

  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-neutral-200/80 bg-white px-6 py-4 shadow-md sm:px-8 lg:px-8"
      role="banner"
    >
      <a
        href="#top"
        className="flex h-10 max-h-12 items-center font-[family-name:var(--font-display)] text-lg font-bold leading-none tracking-tight text-neutral-900"
      >
        KlausenBurger
      </a>

      <nav className="flex items-center" aria-label="Primary">
        <ul className="flex items-center gap-6 lg:gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-[#FF0000]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
