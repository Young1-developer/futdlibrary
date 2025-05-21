import React from 'react'
import './About.css'
import AboutHero from './AboutHero'
import AboutHistory from './AboutHistory'
import AboutFeatures from './AboutFeatures'
import AboutTeam from './AboutTeam'
import AnimatedComponent from '../../components/AnimatedComponent/AnimatedComponent'

const About = () => {
  return (
    <div>
        <AboutHero />
        <AnimatedComponent type='appear1'>
        <AboutHistory />
        </AnimatedComponent>
        <AnimatedComponent type='appear2'>
        <AboutFeatures />
        </AnimatedComponent>
        
        <AboutTeam />
    </div>
  )
}

export default About