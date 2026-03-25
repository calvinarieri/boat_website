import HeroSection from '../components/HeroSection'
import About from '../components/About'
import ServicesProductsBento from '../components/ServicesProductsBento'
import OurClients from '../components/OurClients'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div id="top" className="bg-(--color-page-bg) text-(--color-brand-green)">
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <ServicesProductsBento />
      </div>
      <div id="partners">
        <OurClients />
      </div>
      <div id="careers">
        <CallToAction />
      </div>
      <Footer />
    </div>
  )
}
