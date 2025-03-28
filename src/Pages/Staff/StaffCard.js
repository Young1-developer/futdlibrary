import React from 'react'
import staffMembers from './StaffList'

const StaffCard = () => {
  return (
    <div className='row g-4'>
    {staffMembers.map((staff) => {
        return (
            <div key={staff.id} className='col-md-6 col-lg-4'>
            <div className="staff-card card h-100 p-3 rounded">
                <div className="staff-img-wrapper">
                    <img src={`${staff.image}`} alt= {`${staff.name}`} className="staff-img w-100" />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{staff.name}</h3>
                    <p className="card-subtitle mb-2">{staff.rank}</p>
                    <p className="card-subtitle mb-2">{staff.title}</p>
                    <p className="card-text"><i className='fas fa-user me-2'></i>{staff.staff_no}</p>
                    <div className="staff-contact">
                        <p className="mb-1"><i className="fas fa-envelope me-2"></i>{staff.email}</p>
                        <p className="mb-2"><i className="fas fa-phone me-2"></i>{staff.phone}</p>
                    </div>
                    <div className="staff-social">
                        <a href={ `${staff.social.linkedin}`} target="_blank" rel='noopener noreferrer'><i className="fab fa-linkedin"></i></a>
                        <a href={ `${staff.social.twitter}`} target="_blank" rel='noopener noreferrer'><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            </div>
        )
    })}
    </div>
  )
}

export default StaffCard