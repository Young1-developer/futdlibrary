import React from 'react'
import adminPic from '../../images/staff/Abdulmumini Salisu.jpg'

const AdminOverview = () => {
  return (
    <div>
         <section className="overview-section py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h2 className="section-title">Our Mission</h2>
                    <p className="lead">The University Library Administration is committed to fostering an environment of academic excellence and innovation.</p>
                    <p>Our administrative team works tirelessly to ensure that the library remains at the forefront of academic research and resource management, while maintaining our commitment to student success and faculty support.</p>
                    <div className="key-points mt-4">
                        <div className="point">
                            <i className="fas fa-check-circle text-primary"></i>
                            <span>Strategic Planning and Development</span>
                        </div>
                        <div className="point">
                            <i className="fas fa-check-circle text-primary"></i>
                            <span>Resource Management and Allocation</span>
                        </div>
                        <div className="point">
                            <i className="fas fa-check-circle text-primary"></i>
                            <span>Technology Integration and Innovation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="overview-image">
                        <img src={adminPic} alt="Library Administration" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default AdminOverview