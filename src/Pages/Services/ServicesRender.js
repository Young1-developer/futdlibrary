import React from 'react'
import ServicesCard from './ServicesCard'
import AnimatedComponent from '../../components/AnimatedComponent/AnimatedComponent'

const ServicesRender = () => {
  return (
    <div>
      <AnimatedComponent type='appear2'>
      <ServicesCard />
      </AnimatedComponent>
    </div>
  )
}

export default ServicesRender