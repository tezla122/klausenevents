import type { ReactNode } from 'react'
import { DesktopNavbar } from '../Navigation/DesktopNavbar'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps): React.JSX.Element {
  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden">
      <DesktopNavbar />
      {/* Offset for fixed mobile header; md+ uses sticky navbar in document flow */}
      <main className="flex min-h-0 min-w-0 flex-1 flex-col pt-14 md:pt-0">
        {children}
      </main>
    </div>
  )
}
