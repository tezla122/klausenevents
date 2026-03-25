import { Hero } from './components/Hero'
import { AtmosphereGallery } from './components/AtmosphereGallery'
import { WhySection } from './components/WhySection'
import { FooterCTA } from './components/FooterCTA'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-dvh bg-black text-zinc-100 antialiased">
      <ScrollProgress />
      <Hero />
      <AtmosphereGallery />
      <WhySection />
      <FooterCTA />
    </div>
  )
}

export default App
