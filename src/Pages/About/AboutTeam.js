import React from 'react'

const AboutTeam = () => {
  return (
    <div>
        
  <section className="team-introduction py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Team</h2>
      <div className="row" id="team-container">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Library Director</p>
              <p className="card-text"><small className="text-muted">Expert in library management and strategic planning.</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Head of Digital Services</p>
              <p className="card-text"><small className="text-muted">Specializes in digital resources and online learning
                  environments.</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">Peter Jones</h5>
              <p className="card-text">Reference Librarian</p>
              <p className="card-text"><small className="text-muted">Assists students and faculty with research inquiries and
                  resource discovery.</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default AboutTeam