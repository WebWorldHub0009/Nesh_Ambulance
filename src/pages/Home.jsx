import React from 'react'
import AboutSection from '../components/AboutSection'
import WhyChooseUs from '../components/WhyChooseUs'
import AmbulanceServices from '../components/ServiceSetion'
import StatsSection from '../components/StatsSection'
import ThoughtAndContact from '../components/ThoughtAndConnect'
// import Hero from '../components/Hero'
import About from '../components/HeroNesh'


const Home = () => {
  return (
    <>
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