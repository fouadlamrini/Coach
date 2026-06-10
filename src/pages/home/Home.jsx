import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Pricing from './components/Pricing'
import FeaturedInsights from './components/FeaturedInsights'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans antialiased min-h-screen">
      <Navbar />
      <Hero />
      <Bio />
      <FeaturedInsights />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home