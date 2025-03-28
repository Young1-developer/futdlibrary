import React from 'react'
import resourcesData from './ResourcesList'
import { Link } from 'react-router-dom'


const QuickLinksCard = () => {
    const QuickLinks = resourcesData.quickLinks.map(link => (
        <div>
         <Link to={link.link} target='__blank' rel='noopener noreferrer' className='quick-link'>
         <i className={`${link.icon}`}></i>
         {link.text}
         </Link>
        </div>
    ))
  return (
    <div className="quick-links-container" >
       {QuickLinks}
    </div>
  )
}

export default QuickLinksCard