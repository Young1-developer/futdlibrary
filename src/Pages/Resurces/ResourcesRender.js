import React from 'react'
import QuickLinksCard from './QuickLinksCard'
import ResourcesCard from './ResourcesCard'
import ResourcesGuideCard from './ResourcesGuideCard'

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
             <ResourcesCard />
            </div>
        </div>
    </section>



    <section className="guides-section py-5 bg-light">
        <div className="container">
            <h2 className="section-title text-center mb-4">Featured Research Guides</h2>
            <div id="guides-container">
              <ResourcesGuideCard />
            </div>
        </div>
    </section>
    </div>
  )
}

export default ResourcesRender