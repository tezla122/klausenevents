export function MobileNavbar(): React.JSX.Element {
  return (
    <header
      className="shrink-0 border-b border-sky-700/40 bg-gradient-to-r from-sky-900 to-sky-800 px-4 py-3 text-white shadow-md"
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="font-semibold tracking-tight">MobileNavbar</span>
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs font-medium text-sky-100">
          &lt;768px
        </span>
      </div>
    </header>
  )
}
