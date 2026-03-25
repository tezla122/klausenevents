import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AtmosphereGallery } from './components/AtmosphereGallery'
import { WhySection } from './components/WhySection'
import { FooterCTA } from './components/FooterCTA'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  return (
    <div id="top" className="min-h-dvh bg-white text-neutral-900 antialiased">
      <ScrollProgress />
      <Header />
      <Hero />
      <AtmosphereGallery />
      <WhySection />
      <FooterCTA />
    </div>
  )
}

export default App
