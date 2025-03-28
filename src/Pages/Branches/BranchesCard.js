import React from 'react'
import branches from './BranchesList'

const BranchesCard = () => {
  return (
    <div className='row g-4'>
        {branches.map((branch) => {
            return (
                <div className='col-md-6 col-lg-4'>
                    <div className="branch-card p-3">
                <div className="branch-img-wrapper">
                    <img src={`${branch.image} `} alt={`${branch.name}`}  className="branch-img" />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{branch.name}</h3>
                    <p className="card-subtitle">{branch.type}</p>
                    <p className="card-text">{branch.description}</p>
                    
                    <div className="branch-info">
                        <p><i className="fas fa-map-marker-alt"></i>{branch.address}</p>
                        <p><i className="fas fa-phone"></i>{branch.phone}</p>
                        <p><i className="fas fa-envelope"></i>{branch.email}</p>
                    </div>
                    
                    <div className="branch-features">
                        { 
                        branch.features.map(feature => 
                            <span className="feature-badge">
                                <i className= {`${feature.icon}` }></i> 
                                {feature.text}
                            </span>
                        )
        
                      }
                    </div>
                    
                    <table className="hours-table">
                        <tbody >
                        {
                          branch.hours.map(daytime => 
                            <tr>
                             <td>{daytime.day}</td>
                             <td>{daytime.time}</td>
                            </tr>
                            
                          )
                        }
                        </tbody>
                    </table>
                    
                    <a href={`https://www.google.com/maps?q=${branch.coordinates}` } 
                       className="directions-btn" 
                       target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-directions me-2"></i>Get Directions
                    </a>
                </div>
            </div>
                </div>
            )
        })}
    </div>
  )
}

export default BranchesCard