import React from 'react'
import contactData from './ContactData'



const ContactFaq = () => {
  return (
    <div>
      {contactData.faqs.map((faq,index) => {
       return (
        <div className='accordion-item'>
        <h2 class="accordion-header" id={`heading${index}`}>
              <button class={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" 
                      data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}>
                  {faq.question}
              </button>
          </h2>
          <div id={`collapse${index}`} class={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
               data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                  {faq.answer}
              </div>
          </div>
      </div>
       )
      })}
    </div>
  )
}

export default ContactFaq