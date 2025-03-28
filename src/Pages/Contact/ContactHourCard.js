import React from 'react'
import contactData from './ContactData'

const ContactHourCard = () => {
  return (
    <div>
        {contactData.hours.map((daytime) => {
            return (
                <div>
                <div class="hours-row">
                <span class="day">{daytime.day}</span>
                <span class="time">{daytime.time}</span>
            </div>
                </div>
            )
        })}
    </div>
  )
}

export default ContactHourCard