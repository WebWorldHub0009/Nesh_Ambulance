import React from 'react'
import AboutSection from '../components/AboutSection'
import WhyChooseUs from '../components/WhyChooseUs'
import AmbulanceServices from '../components/ServiceSetion'
import ThoughtAndContact from '../components/ThoughtAndConnect'

import HeroShowcase from '../components/HeroShowcase'


const Home = () => {
  return (
    <>
    <HeroShowcase/>
    <AboutSection/>
    <WhyChooseUs/>
    <AmbulanceServices/>
    <ThoughtAndContact/>
    </>
  )
}

export default Home