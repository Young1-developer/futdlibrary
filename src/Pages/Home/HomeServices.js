import React from 'react'

const HomeServices = () => {
  return (
    <div>
          
  {/* <!-- Services Section --> */}
  <section className="services-section py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-5">Our Services</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Research Support</h3>
              <p className="card-text">Get expert assistance with your research from our skilled librarians.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Digital Collections</h3>
              <p className="card-text">Access our extensive collection of e-books, journals, and databases.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Study Spaces</h3>
              <p className="card-text">Book individual or group study rooms for focused learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default HomeServices