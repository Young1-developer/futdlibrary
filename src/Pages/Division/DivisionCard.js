import React from 'react'
import divisions from './DivisionsList'
import { Link } from 'react-router-dom'


const DivisionCard = () => {


 const divisionCard = divisions.map((division) => {


    const servicesOffer = division.services.map(service => (
        <div>
            <li><i className="fas fa-check"></i>{service}</li>
        </div>
    ))

  const divisionTeamMembers = division.teamMembers.map(member => (
    <div>
        <div className="team-member">
                <img src={`${member}`} alt="Team member" />
            </div>
    </div>
  ))
    return (
        <div className='col-md-6'>
          <div className="division-card p-5">
                <div className="card-body">
                    <i className={`${division.icon} division-icon`}></i>
                    <h3 className="card-title">{division.name}</h3>
                    <p className="card-text">{division.description}</p>
                    
                    <div className="division-stats">
                        {Object.entries(division.stats).map(([key, value]) => 
                            <div className="stat-item">
                                <div className="stat-number">{value}</div>
                                <div className="stat-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                            </div>
                        )}
                    </div>
                    
                    <ul className="services-list">
                        {servicesOffer}
                    </ul>
                    
                    <div className="team-members">
                        {divisionTeamMembers}
                        <div className="team-count">+{division.totalTeamMembers - division.teamMembers.length}</div>
                    </div>
                    
                    <div className="mt-3">
                        <p className="mb-1"><strong>Division Head:</strong> {division.contact.head}</p>
                        <p className="mb-1"><i className="fas fa-envelope me-2"></i>{division.contact.email}</p>
                        <p className="mb-2"><i className="fas fa-phone me-2"></i>{division.contact.phone}</p>
                    </div>
                    
                    <Link to="#" className="division-btn">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
 })


 
  return (
    <div>
    <section class="divisions-section py-5">
        <div class="container">
            <div class="row g-4" id="divisions-container">
               {divisionCard}
            </div>
        </div>
    </section>
    </div>
  )
}

export default DivisionCard