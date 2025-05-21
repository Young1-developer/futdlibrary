import React from 'react'
import './Branches.css'
import BranchesHero from './BranchesHero'
import BranchesRender from './BranchesRender'
import AnimatedComponent from '../../components/AnimatedComponent/AnimatedComponent'

const Branches = () => {
  return (
    <div>
        <BranchesHero />
        <AnimatedComponent type='appear1'>
        <BranchesRender />
        </AnimatedComponent>
    </div>
  )
}

export default Branches