import HeroSection from '../components/HeroSection'
import About from '../components/About'
import ServicesProductsBento from '../components/ServicesProductsBento'
import OurClients from '../components/OurClients'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div id="top" className="bg-(--color-page-bg) text-(--color-brand-green)">
      <HeroSection />
      <About />
      <ServicesProductsBento />
      <OurClients />
      <CallToAction />
      <Footer />
    </div>
  )
}
