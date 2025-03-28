import React from 'react'
import resourcesData from './ResourcesList'
import { Link } from 'react-router-dom'

const ResourcesGuideCard = () => {
   
    const resourceGuideElement = resourcesData.guides.map(guide => (
        <div className='col-md-4 mb-4'>
         <div className="guide-card">
                <img src={`${guide.image}`} alt={`${guide.title}`} className="guide-image" />
                <div className="guide-content">
                    <h4 className="guide-title">{guide.title}</h4>
                    <div className="guide-meta mb-3">
                        <p><i className="fas fa-user"></i>{guide.author}</p>
                        <p><i className="fas fa-calendar"></i>Updated: {guide.lastUpdated}</p>
                        <p><i className="fas fa-eye"></i>{guide.views} views</p>
                    </div>
                    <div className="guide-tags">
                        {guide.tags.map(tag => <span className="tag">{tag}</span>)}
                    </div>
                    <Link
                         to={guide.link} 
                         target='__blank' 
                         rel='noopener noreferrer' class="access-btn">View Guide</Link>
                </div>
            </div>
        </div>
    ))

  return (
    <div className='row'>
     {resourceGuideElement}
    </div>
  )
}

export default ResourcesGuideCard