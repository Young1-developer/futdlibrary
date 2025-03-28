import React from 'react'

const AboutHistory = () => {
  return (
    <div>
         <section id="history" className="library-history py-5">
  <div className="container">
    <h2 className="text-center mb-4" >Our History and Mission</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="history-timeline">
          <div className="timeline-item">
            <i className="ri-building-line timeline-icon"></i>
            <h3>1905</h3>
            <p>Founded with a small collection of books</p>
          </div>
          <div className="timeline-item">
            <i className="ri-archive-line timeline-icon"></i>
            <h3>1950</h3>
            <p>Construction of main library building</p>
          </div>
          <div className="timeline-item">
            <i className="ri-computer-line timeline-icon"></i>
            <h3>1990s</h3>
            <p>Introduction of digital resources</p>
          </div>
          <div className="timeline-item">
            <i className="ri-trophy-line timeline-icon"></i>
            <h3>Present</h3>
            <p>State-of-the-art study spaces and technology</p>
          </div>
        </div>
      </div>
      <div className="col-md-6" >
        <h3>Mission</h3>
        <p>The mission of the University Library is to support the academic, research, and intellectual pursuits of
          the university community by providing access to a wide range of resources, services, and expertise.</p>
        <p>We are committed to fostering a welcoming and inclusive environment that promotes lifelong learning,
          critical thinking, and scholarly inquiry.</p>
        <h3>Core Values</h3>
        <ul>
          <li>Accessibility</li>
          <li>Innovation</li>
          <li>Collaboration</li>
          <li>Integrity</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
 


  )
}

export default AboutHistory