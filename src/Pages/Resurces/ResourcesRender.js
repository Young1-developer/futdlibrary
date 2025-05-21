import React from 'react'
import QuickLinksCard from './QuickLinksCard'
import ResourcesCard from './ResourcesCard'
import ResourcesGuideCard from './ResourcesGuideCard'
import AnimatedComponent from '../../components/AnimatedComponent/AnimatedComponent'



const ResourcesRender = () => {
  return (
    <div>
        
<section className="quick-links-section py-4">
        <div className="container">
            <div id="quick-links-container">
                <QuickLinksCard />
            </div>
        </div>
    </section>

        <section className="resources-section py-5">
        <div className="container">
            <div id="resources-container">
                <AnimatedComponent type='appear3'>
                <ResourcesCard />
                </AnimatedComponent>
            </div>
        </div>
    </section>



    <section className="guides-section py-5 bg-light">
        <div className="container">
            <h2 className="section-title text-center mb-4">Featured Research Guides</h2>
            <div id="guides-container">
                <AnimatedComponent type='appear2'>
              <ResourcesGuideCard />
                </AnimatedComponent>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ResourcesRender