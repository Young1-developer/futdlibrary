import React from 'react'
import contactData from './ContactData'


const QuickContactRender = () => {
  return (
    <div  className="quick-contact-grid" id="quick-contact-container">
      {contactData.quickContacts.map((contact) => {
        return(
          <div className='contact-card'>
          <div className="contact-card-icon">
          <i className={`${contact.icon}`}></i>
         </div>
      <h3>{contact.title}</h3>
      <p>{contact.description}</p>
      <p><small>{contact.details}</small></p>
         </div>
        )
       
      })}
    </div>
  )
}

export default QuickContactRender