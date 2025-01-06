import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'

import CityGrid from '../components/CityGrid'
import Content from '../components/Content'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
       <div className="max-h-screen w-full">
        <Hero />
        <Features />
        <Content />
        <CityGrid />
        <Footer />
      </div>
    </>
  )
}

