import React from 'react'
import './Home.css'
import './Script'
import HeroSection from './HeroSection'
import Welcome from './Welcome'
import HistorySection from './HistorySection'
import HomeServices from './HomeServices'
import News from './News'
import TransportAnimation from '../../components/TransportScene/TransportScene'
import AnimatedComponent from '../../components/AnimatedComponent/AnimatedComponent'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <TransportAnimation />
      <AnimatedComponent type='appear'>
      <Welcome />
      </AnimatedComponent>
      <TransportAnimation />
      <AnimatedComponent>
      <HomeServices />
      </AnimatedComponent>
      <News />
      <HistorySection />
    </div>
  )
}

export default Home