import React from 'react'
import './Division.css'
import DivisionHero from './DivisionHero'
import DivisionCard from './DivisionCard'
import AnimatedComponent from '../../components/AnimatedComponent/AnimatedComponent'



const Divsion = () => {
  return (
    <div>
    <DivisionHero />
    <AnimatedComponent type='appear3'>
    <DivisionCard />
    </AnimatedComponent>
    </div>
  )
}

export default Divsion