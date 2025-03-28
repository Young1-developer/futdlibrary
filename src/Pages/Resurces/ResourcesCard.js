import React from 'react'
import resourcesData from './ResourcesList'
import { Link } from 'react-router-dom'

const ResourcesCard = () => {
    const resourcesElement = resourcesData.categories.map(category => (
        <div className='resource-category row'>
         {
            category.resources.map(resource => 
                <div class="col-md-4 mb-4">
                    <div class="resource-card">
                        <div class="resource-icon">
                            <i class={`${resource.icon}`}></i>
                        </div>
                        <h4>{resource.name}</h4>
                        <p>{resource.description}</p>
                        <div class="resource-meta">
                            {Object.entries(resource.details).map(([key, value]) => 
                                <div class="meta-item">
                                    <span class="meta-label">{key}:</span>
                                    <span class="meta-value">{value}</span>
                                </div>
                            )}
                        </div>
                        <Link
                         to={resource.link} 
                         target='__blank' 
                         rel='noopener noreferrer' class="access-btn">Access Resource</Link>
                    </div>
                </div>
            )
         }
        </div>
    ))

  return (
    <div>
    {
        resourcesData.categories.map(category => (
            <div>
                <div class="category-header">
                <div class="category-icon">
                    <i class={`${category.icon}`}></i>
                </div>
                <div class="category-info">
                    <h2>{category.category}</h2>
                    <p>{category.description}</p>
                </div>
            </div>
            <div>
                {resourcesElement}
            </div>

            </div>
        ))
    }
    </div>
  )
}

export default ResourcesCard