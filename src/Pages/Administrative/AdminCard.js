import React from 'react'
import teamMembers from './AdminList'

const AdminCard = () => {
  return (
    <div className="row g-4" id="teamGrid">
    {teamMembers.map((member) => {
        return (
            <div className="col-md-6 col-lg-3">
        <div className="team-card">
            <img src={`${member.image} className="card-img-top"}`} alt= { `${member.name}`}  />
            <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-subtitle text-primary mb-2">{member.position}</p>
                <p className="card-text small">{member.bio}</p>
                <a href={`mailto:${member.email}`} className="btn btn-outline-primary btn-sm">
                    <i className="fas fa-envelope me-1"></i>Contact
                </a>
                <div className="social-links">
                    <a href={`${member.socials.linkedin}`} target="_blank" rel='noopener noreferrer' title="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={`${member.socials.twitter}`} target="_blank" rel='noopener noreferrer'  title="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
        )
    })}
</div>
  )
}

export default AdminCard