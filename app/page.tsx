import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import WhiteLabelOverview from '@/components/sections/WhiteLabelOverview'
import FlavorShowcase from '@/components/sections/FlavorShowcase'
import FunctionalOverview from '@/components/sections/FunctionalOverview'
import ProductionSection from '@/components/sections/ProductionSection'
import WorldMap from '@/components/sections/WorldMap'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhiteLabelOverview />
      <FlavorShowcase />
      <FunctionalOverview />
      <ProductionSection />
      <WorldMap />
      <ContactSection />
    </>
  )
}