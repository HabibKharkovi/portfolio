import Header from '../components/header'
import Preloader from '../components/preLoader'
import Footer from '../components/footer'
import Hero from '../components/hero'
import AboutSection from '../components/about-section'
import Testimonials from '../components/testimonials'
import PortfolioSection from '../components/protfolio'
import ContactSection from '../components/contact-section'

export default function Home() {

  return (
    <div  className="gaspar" data-magic-cursor="show" data-color="crimson" >
      {/* <Preloader/> */}
      <Header/>

      <main id="main">
        <Hero/>
        <AboutSection/>
        <Testimonials/>
        <PortfolioSection/>
        <ContactSection/>
        <Footer/>
      </main>
    </div>
  )
}