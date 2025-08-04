import React from 'react'
import AboutHero from '../components/AboutHero'
import PremiumAbout from '../components/PremiumAbout'
import StatsSection from '../components/StatsSection'
import VisionMissionModern from '../components/VisionMissionModern'
import TestimonialSlider from '../components/TestimonialSlider'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <PremiumAbout/>
      <StatsSection/>
      <VisionMissionModern/>
      <TestimonialSlider/>
    </div>
  )
}

export default About
