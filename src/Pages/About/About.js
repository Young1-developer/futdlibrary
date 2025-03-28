import React from 'react'
import './About.css'
import AboutHero from './AboutHero'
import AboutHistory from './AboutHistory'
import AboutFeatures from './AboutFeatures'
import AboutTeam from './AboutTeam'


const About = () => {
  return (
    <div>
        <AboutHero />
        <AboutHistory />
        <AboutFeatures />
        <AboutTeam />
    </div>
  )
}

export default About