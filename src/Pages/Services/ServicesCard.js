import React from 'react'
import services from './ServicesList'



const ServicesCard = () => {

const servicesElement = services.map(category => (
    <div className='service-category mb-5 row'>
    {
      category.services.map(service => 
        <div className="col-md-4 mb-4">
            <div className="service-card h-100">
                <div className="service-icon">
                    <i className={ `${service.icon}`}></i>
                </div>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <div className="service-details">
                    {Object.entries(service.details).map(([key, value]) => 
                        <div className="detail-item">
                            <span className="detail-label">{key}:</span>
                            <span className="detail-value">{value}</span>
                        </div>
                    )}
                </div>
               
            </div>
        </div>
    )

    } 

    </div>
  ))



  


  return (
    <div>
     {
     services.map(category => (
      <div>
        <div className="category-header">
                <div className="category-icon">
                    <i className={`${category.icon}`}></i>
                </div>
                <div className="category-info">
                    <h2>{category.category}</h2>
                    <p>{category.description}</p>
                </div>
            </div>
            <div >
                {servicesElement}
            </div>
      </div>

     ))
     }
    </div>
  )
}

export default ServicesCard