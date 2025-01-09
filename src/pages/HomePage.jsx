import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Header from '../components/Header'
import CityGrid from '../components/CityGrid'
import Content from '../components/Content'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
       <div >
        <Header />
        <Hero />
        <Features />
        <Content />
        <CityGrid />
        <Footer />
      </div>
    </>
  )
}

