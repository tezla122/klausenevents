import type { ReactNode } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { DesktopNavbar } from '../Navigation/DesktopNavbar'
import { MobileNavbar } from '../Navigation/MobileNavbar'

const DESKTOP_MIN_WIDTH = '(min-width: 768px)'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps): React.JSX.Element {
  const isDesktop = useMediaQuery(DESKTOP_MIN_WIDTH)

  return (
    <div className="flex min-h-screen min-w-0 flex-col">
      {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      <main className="flex min-h-0 min-w-0 flex-1 flex-col">{children}</main>
    </div>
  )
}
