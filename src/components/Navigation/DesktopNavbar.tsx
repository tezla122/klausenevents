const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#atmosphere', label: 'Gallery' },
  { href: '#why', label: 'Why us' },
  { href: '#contact', label: 'Contact' },
] as const

export function DesktopNavbar(): React.JSX.Element {
  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center justify-between bg-white px-8 py-4 shadow-md"
      role="banner"
    >
      <a
        href="#top"
        className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-neutral-900"
      >
        KlausenBurger
      </a>
      <nav aria-label="Primary">
        <ul className="flex items-center gap-8">
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
