import React from 'react'
import Hero from './components/Hero'
import ContentSection from './components/ContentSection'
import HowItWorks from './components/HowItWorks'
import CoreSection from './components/CoreSection'
import AnomedCoreContent from './components/AnomedCoreContent'
import TeamAndPartners from './components/TeamAndPartners'
import Footer from './components/Footer'
const Home = () => {
  return (
    <>
    <Hero/>
    <ContentSection/>
    <HowItWorks/>
    <CoreSection/>
    <AnomedCoreContent/>
    <TeamAndPartners/>
    <Footer/>
    </>
  )
}

export default Home
