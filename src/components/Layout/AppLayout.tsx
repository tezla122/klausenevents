import type { ReactNode } from 'react'
import { DesktopNavbar } from '../Navigation/DesktopNavbar'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps): React.JSX.Element {
  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden">
      <DesktopNavbar />
      <main className="flex min-h-0 min-w-0 flex-1 flex-col">
        {children}
      </main>
    </div>
  )
}
