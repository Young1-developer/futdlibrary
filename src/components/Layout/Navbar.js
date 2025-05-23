import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showFreeDatabases, setShowFreeDatabases] = useState(false);

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <svg viewBox="0 0 24 24" width={30} height={30} fill="currentColor">
            <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 
              c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5
              c1.35-0.85,3.8-1.5,5.5-1.5c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6
              C22.4,5.55,21.75,5.25,21,5z"/>
          </svg>
          Federal University of Transportation Daura Library
        </Link>

        {/* Offcanvas toggle button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
          <span className="navbar-toggler-icon" />
        </button>

        {/* Offcanvas menu */}
        <div className="offcanvas offcanvas-end text-light bg-dark" tabIndex="-1" id="offcanvasNavbar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Navigation</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              {/* Administration */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                  Administration
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/adminteam">Admin Team</Link></li>
                  <li><Link className="dropdown-item" to="/reports">Annual Reports</Link></li>
                  <li><Link className="dropdown-item" to="/administration">Mission & Strategic Plan</Link></li>
                  <li><Link className="dropdown-item" to="/policies">Policies</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/staff">Staff</Link>
              </li>

              {/* Branches */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                  Branches
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/branches">Main Library</Link></li>
                  <li><Link className="dropdown-item" to="#">Civil Engineering Library</Link></li>
                  <li><Link className="dropdown-item" to="#">Electrical Engineering Library</Link></li>
                  <li><Link className="dropdown-item" to="#">Mechanical Engineering Library</Link></li>
                  <li><Link className="dropdown-item" to="#">Mechatronics Library</Link></li>
                  <li><Link className="dropdown-item" to="#">Highway Engineering Library</Link></li>
                  <li><Link className="dropdown-item" to="#">Railway Engineering Library</Link></li>
                  <li><Link className="dropdown-item" to="#">Aviation Management Library</Link></li>
                </ul>
              </li>

              {/* Division */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                  Division
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/divisions">Collection Development</Link></li>
                  <li><Link className="dropdown-item" to="#">Technical Services</Link></li>
                  <li><Link className="dropdown-item" to="#">Public Services</Link></li>
                  <li><Link className="dropdown-item" to="#">Digital Initiatives</Link></li>
                  <li><Link className="dropdown-item" to="#">Special Collections</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>

              {/* Resources */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                  Resources
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/resources">General Resources</Link></li>
                  <li><a className="dropdown-item" href="#" target="_blank" rel="noreferrer">Futd Library YouTube</a></li>

                  <li className="dropdown-submenu">
                    <button className="dropdown-item dropdown-toggle" onClick={() => setShowFreeDatabases(!showFreeDatabases)}>
                      Free Databases
                    </button>
                    {showFreeDatabases && (
                      <ul className="dropdown-menu show">
                        <li><a className="dropdown-item" href="https://guides.nyu.edu/civilengineering/transportation" target="_blank" rel="noreferrer">Civil & Urban Engineering</a></li>
                        <li><a className="dropdown-item" href="https://udmercy.libguides.com/transportationengineering" target="_blank" rel="noreferrer">Transportation Engineering</a></li>
                        <li><a className="dropdown-item" href="https://www.coursera.org/courses?query=transport" target="_blank" rel="noreferrer">Coursera Free Transport Courses</a></li>
                        <li><a className="dropdown-item" href="https://alison.com/course/an-introduction-to-transport-management-systems" target="_blank" rel="noreferrer">Alison: Transport Mgmt</a></li>
                        <li><Link className="dropdown-item" to="#">Digital Initiatives</Link></li>
                        <li><Link className="dropdown-item" to="#">Special Collections</Link></li>
                      </ul>
                    )}
                  </li>

                  <li><a className="dropdown-item" href="https://ocw.mit.edu/collections/transportation/" target="_blank" rel="noreferrer">MIT Open Learning</a></li>
                  <li><Link className="dropdown-item" to="#">Subscribed Databases</Link></li>
                  <li><Link className="dropdown-item" to="#">Other Resources</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
