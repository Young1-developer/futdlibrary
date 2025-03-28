import React from 'react'
import ContactFaq from './ContactFaq'

const ContactMain = () => {
  return (
    <div>
        <section class="contact-section py-5">
        <div class="container">
            <div class="row">
                {/* Contact Form  */}
                <div class="col-lg-7 mb-4">
                    <div class="contact-form-wrapper">
                        <h2>Send Us a Message</h2>
                        <p class="mb-4">Fill out the form below and we'll get back to you as soon as possible.</p>
                        <form id="contactForm" class="contact-form">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="name" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="name" required />
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="email" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="email" required />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="department" class="form-label">Department</label>
                                <select class="form-select" id="department" required>
                                    <option value="">Select Department</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="research">Research Support</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="circulation">Circulation</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="subject" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="subject" required />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
                
                {/* FAQ Section  */}
                <div class="col-lg-5 mb-4">
                    <div class="faq-wrapper">
                        <h2>Frequently Asked Questions</h2>
                        <div class="accordion" id="faqAccordion">
                           <ContactFaq />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ContactMain