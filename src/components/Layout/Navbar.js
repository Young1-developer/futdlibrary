import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isFreeDropdownOpen, setIsFreeDropdownOpen] = useState(false);
  return (
    //  Navigation Bar
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <svg className="logo" viewBox="0 0 24 24" width={30} height={30}>
            <path fill="currentColor" d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z"/>
          </svg>
         Federal University of Transportation Daura Library
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link " to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            
             {/* Administration Dropdown  */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="adminDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administration
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="adminDropdown">
              <li><Link className="dropdown-item" to="adminteam">Admin Team</Link></li>
              <li><Link className="dropdown-item" to="reports">Annual Reports</Link></li>
                <li><Link className="dropdown-item" to="administration">Mission $ Strategic Plan</Link></li>
                <li><Link className="dropdown-item" to="policies">Policies</Link></li>
              </ul>
            </li>
            
            <li className="nav-item"><Link className="nav-link" to="staff">Staff</Link></li>
            
            {/* Branches Dropdown  */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="branchesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Branches
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="branchesDropdown">
                <li><Link className="dropdown-item" to="branches">Main Library</Link></li>
                <li><Link className="dropdown-item" to="#">Civil Engineering Library</Link></li>
                <li><Link className="dropdown-item" to="#"> Electrical and Electronics Engineering Library</Link></li>
                <li><Link className="dropdown-item" to="#">Mechanical Engineering Library</Link></li>
                <li><Link className="dropdown-item" to="#">Mechatronics Engineering Library</Link></li>
                <li><Link className="dropdown-item" to="#">Highway Engineering Library</Link></li>
                <li><Link className="dropdown-item" to="#">Railway Engineering Library</Link></li>
                <li><Link className="dropdown-item" to="#">Aviation Management Library</Link></li>
              </ul>
            </li>
            
         {/* Division Dropdown (New)  */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="divisionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Division
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="divisionDropdown">
                <li><Link className="dropdown-item" to="divisions">Collection Development</Link></li>
                <li><Link className="dropdown-item" to="#">Technical Services</Link></li>
                <li><Link className="dropdown-item" to="#">Public Services</Link></li>
                <li><Link className="dropdown-item" to="#">Digital Initiatives</Link></li>
                <li><Link className="dropdown-item" to="#">Special Collections</Link></li>
              </ul>
            </li>
            
            <li className="nav-item"><Link className="nav-link" to="services">Services</Link></li>
        
             {/* Resources Dropdown  */}
             <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="resourcesDropdown">
                <li><Link className="dropdown-item" to="resources"  target="__blank" rel='noopener noreferrer'>General Resources</Link></li>
                <li><Link className="dropdown-item" to="#" target="__blank" rel='noopener noreferrer'>Futd Library YouTube</Link></li>
             
               {/* Free Databases - Click to Open */}
               <li className="nav-item dropdown">
                  <button 
                    className="dropdown-item dropdown-toggle" 
                    onClick={() => setIsFreeDropdownOpen(!isFreeDropdownOpen)}
                  >
                    Free Databases
                  </button>
                  {isFreeDropdownOpen && (
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><Link className="dropdown-item" to="https://guides.nyu.edu/civilengineering/transportation?">Civil and Urban Engineering</Link></li>
                      <li><Link className="dropdown-item" to="https://udmercy.libguides.com/transportationengineering">Transportation Engineering</Link></li>
                      <li><Link className="dropdown-item" to="#">Public Services</Link></li>
                      <li><Link className="dropdown-item" to="#">Digital Initiatives</Link></li>
                      <li><Link className="dropdown-item" to="#">Special Collections</Link></li>
                    </ul>
                  )}
                </li>
                <li><Link className='dropdown-item' to="https://ocw.mit.edu/collections/transportation/" target="__blank" rel='noopener noreferrer'>MIT Open Learning</Link></li>
                <li><Link className="dropdown-item" to="#" target="__blank" rel='noopener noreferrer'>Subscribed Databases</Link></li>
                <li><Link className="dropdown-item" to="#" target="__blank" rel='noopener noreferrer'>Other Resources</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link className="nav-link" to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar