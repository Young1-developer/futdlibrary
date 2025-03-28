import React from 'react'
import './Home.css'
import './Script'
import HeroSection from './HeroSection'
import Welcome from './Welcome'
import HistorySection from './HistorySection'
import HomeServices from './HomeServices'
import News from './News'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Welcome />
      <HomeServices />
      <News />
      <HistorySection />
    </div>
  )
}

export default Home