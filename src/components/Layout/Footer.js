import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        
  {/* <!-- Footer --> */}
  <footer className="footer py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h4>Contact Us</h4>
          <p>123 University Drive<br />City, State 12345<br />Phone: (555) 123-4567<br />Email: <Link to="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f69a9f948497848fb683989f809384859f828fd8939283">[email&#160;protected]</Link></p>
        </div>
        <div className="col-md-4">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li><Link to="#">Library Catalog</Link></li>
            <li><Link to="#">Research Guides</Link></li>
            <li><Link to="#">Book Link Study Room</Link></li>
            <li><Link to="#">FAQs</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Hours</h4>
          <p>Monday - Friday: 8am - 10pm<br />Saturday: 9am - 6pm<br />Sunday: 12pm - 8pm</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-center">
          <p>&copy; 2025 University Library. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer