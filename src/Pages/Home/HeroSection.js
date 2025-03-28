import React from 'react'

const HeroSection = () => {
  return (
    
  // <!-- Hero Carousel -->
  <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="carousel-image slide1"></div>
        <div className="carousel-caption">
          <h2>Welcome to FUTD University Library</h2>
          <p>Your gateway to knowledge and academic excellence</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-image slide2"></div>
        <div className="carousel-caption">
          <h2>Modern Learning Spaces</h2>
          <p>State-of-the-art facilities for individual and group study</p>
        </div>
      </div>
      <div className="carousel-item">
  <div className="carousel-image slide3"></div>
  <div className="carousel-caption">
    <h2>Comprehensive Research Support</h2>
    <p>Guiding students and faculty with expert research assistance</p>
  </div>
</div>

      <div className="carousel-item">
        <div className="carousel-image slide4"></div>
        <div className="carousel-caption">
          <h2>Digital Resources</h2>
          <p>Access to extensive online databases and e-journals</p>
        </div>
      </div>
      <div className="carousel-item">
  <div className="carousel-image slide5"></div>
  <div className="carousel-caption">
    <h2>A Legacy of Knowledge</h2>
    <p>Innovative library spaces fostering research and discovery</p>
  </div>
</div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>

  )
}

export default HeroSection