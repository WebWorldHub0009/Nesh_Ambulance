import React from 'react'
import AboutSection from '../components/AboutSection'
import WhyChooseUs from '../components/WhyChooseUs'
import AmbulanceServices from '../components/ServiceSetion'
import StatsSection from '../components/StatsSection'
import ThoughtAndContact from '../components/ThoughtAndConnect'

import About from '../components/HeroNesh'
import HeroShowcase from '../components/HeroShowcase'


const Home = () => {
  return (
    <>
    <HeroShowcase/>
    <About/>
    <AboutSection/>
    <WhyChooseUs/>
    <AmbulanceServices/>
    <StatsSection/>
    <ThoughtAndContact/>
    </>
  )
}

export default Home