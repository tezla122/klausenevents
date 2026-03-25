import { useEffect, useId, useState } from 'react'

const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#atmosphere', label: 'Gallery' },
  { href: '#why', label: 'Why us' },
  { href: '#contact', label: 'Contact' },
] as const

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M18 6L6 18M6 6l12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  )
}

export function DesktopNavbar(): React.JSX.Element {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return (): void => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 flex h-14 min-h-[3.5rem] w-full items-center justify-between border-b border-neutral-200/80 bg-white px-4 shadow-md sm:px-6 md:sticky md:top-0 md:min-h-0 md:w-full md:py-4 md:shadow-md lg:px-8"
        role="banner"
      >
        <a
          href="#top"
          className="flex h-10 max-h-12 min-h-0 max-w-[min(100%,12rem)] items-center font-[family-name:var(--font-display)] text-lg font-bold leading-none tracking-tight text-neutral-900 sm:text-xl md:text-lg"
          onClick={() => setOpen(false)}
        >
          KlausenBurger
        </a>

        <nav className="hidden items-center md:flex" aria-label="Primary">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium text-neutral-700 transition-colors hover:text-[#FF0000] lg:text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-lg text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF0000] md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </header>

      {/* Mobile full-width panel */}
      <div
        id={menuId}
        className={`fixed inset-x-0 top-14 z-40 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-neutral-200 bg-white shadow-lg transition-[opacity,visibility] duration-200 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Primary mobile">
          <ul className="w-full">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="border-b border-neutral-100 last:border-b-0">
                <a
                  href={href}
                  className="block w-full py-4 pl-6 pr-6 text-base font-medium text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-[#FF0000]"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open ? (
        <button
          type="button"
          className="fixed inset-x-0 bottom-0 top-14 z-30 bg-black/25 md:hidden"
          aria-label="Close menu backdrop"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </>
  )
}
