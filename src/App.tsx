import { Hero } from './components/Hero'
import { AtmosphereGallery } from './components/AtmosphereGallery'
import { WhySection } from './components/WhySection'
import { FooterCTA } from './components/FooterCTA'
import { ScrollProgress } from './components/ScrollProgress'
import { AppLayout } from './components/Layout/AppLayout'

function App() {
  return (
    <div id="top" className="min-h-dvh bg-white text-neutral-900 antialiased">
      <ScrollProgress />
      <AppLayout>
        <Hero />
        <AtmosphereGallery />
        <WhySection />
        <FooterCTA />
      </AppLayout>
    </div>
  )
}

export default App
