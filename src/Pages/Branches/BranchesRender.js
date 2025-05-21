import React from 'react'
import BranchesCard from './BranchesCard'
import AnimatedComponent from '../../components/AnimatedComponent/AnimatedComponent'

const BranchesRender = () => {
  return (
    <section className="branches-section py-5">
        <div className="container">
          <AnimatedComponent type='appear1'>
          <BranchesCard />
          </AnimatedComponent>
        </div>
    </section>
  )
}

export default BranchesRender