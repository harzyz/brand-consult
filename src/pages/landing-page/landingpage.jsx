import React from 'react'
import Navbar from '../../components/navbar/navbar'
import HeroSection from '../../components/hero-section/heroSection'
import AboutUs from '../../components/aboutUs/aboutUs'
import BusinessTeam from '../../components/business-team/businessTeam'
import Services from '../../components/services/services'
import Mentors from '../../components/mentors/mentors'
import Testimonials from '../../components/testimonials/testimonials'
import ContactUs from '../../components/contact-us/contactUs'
import Footer from '../../components/footer/footer'

const Landingpage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <BusinessTeam />
      <Services />
      <Mentors />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default Landingpage
