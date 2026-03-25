import { Hero } from './components/Hero'
import { AtmosphereGallery } from './components/AtmosphereGallery'
import { WhySection } from './components/WhySection'
import { FooterCTA } from './components/FooterCTA'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900 antialiased">
      <ScrollProgress />
      <header className="h-14 w-full bg-[#FF0000]">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-5">
          <span className="text-sm font-semibold tracking-[0.02em] text-white sm:text-base">
            KlausenBurger Events
          </span>
        </div>
      </header>
      <Hero />
      <AtmosphereGallery />
      <WhySection />
      <FooterCTA />
    </div>
  )
}

export default App
