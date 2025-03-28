import React from 'react'
import { Link } from 'react-router-dom'
const News = () => {
  return (
    <div>
        
  {/* <!-- News Section --> */}
  <section className="news-section py-5">
    <div className="container">
      <h2 className="text-center mb-5">Latest News</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="news-card">
            <div className="news-date">June 15, 2023</div>
            <h3>New Digital Archives Launch</h3>
            <p>Explore our newly digitized collection of historical manuscripts...</p>
            <Link to="#" className="btn btn-primary">Read More</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="news-card">
            <div className="news-date">June 10, 2023</div>
            <h3>Extended Hours During Finals</h3>
            <p>The library will remain open 24/7 during final examination period...</p>
            <Link to="#" className="btn btn-primary">Read More</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="news-card">
            <div className="news-date">June 5, 2023</div>
            <h3>Research Workshop Series</h3>
            <p>Join us for our summer research methodology workshop series...</p>
            <Link to="#" className="btn btn-primary">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default News