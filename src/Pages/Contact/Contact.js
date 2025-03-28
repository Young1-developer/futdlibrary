import React from 'react'
import './Contact.css'
import ContactHero from './ContactHero'
import ContactQuick from './ContactQuick'
import ContactMain from './ContactMain'
import ContactMap from './ContactMap'

const Contact = () => {
  return (
    <div>
   <ContactHero />
   <ContactQuick />
   <ContactMain />
   <ContactMap />
    </div>
  )
}

export default Contact