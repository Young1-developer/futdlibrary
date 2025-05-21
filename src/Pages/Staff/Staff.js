import React from 'react'
import './Staff.css'
import StaffHero from './StaffHero'
import StaffRender from './StaffRender'
import AnimatedComponent from '../../components/AnimatedComponent/AnimatedComponent'


const Staff = () => {
  return (
    <div>
     
    <StaffHero />
    <AnimatedComponent type='appear3'>
    <StaffRender />
    </AnimatedComponent>
    </div>
  )
}

export default Staff