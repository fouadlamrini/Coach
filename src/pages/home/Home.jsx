import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Bio from './components/Bio'
import Pricing from './components/Pricing'
import FeaturedInsights from './components/FeaturedInsights'
import ProtocolWorkflow from './components/ProtocolWorkflow'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className="bg-[#030712] text-white font-sans antialiased min-h-screen selection:bg-[#CDB26D] selection:text-[#030712]">
      <Navbar />
      <Hero />
      {/* <Bio /> */}
      <ProtocolWorkflow />
      <FeaturedInsights />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home