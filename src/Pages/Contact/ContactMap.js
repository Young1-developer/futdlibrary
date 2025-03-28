import React from 'react';
import ContactHourCard from './ContactHourCard';

const ContactMap = () => {
  return (
    <div>
      <section className="map-section"> {/* Changed class to className */}
        <div className="container"> {/* Changed class to className */}
          <div className="row">
            <div className="col-lg-4">
              <div className="location-info">
                <h3>Visit Us</h3>
                <p>
                  <i className="fas fa-map-marker-alt"></i> 123 University Drive
                  <br />
                  Campus, ST 12345
                </p>
                <div className="hours-info" id="hours-info">
                  <ContactHourCard />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9786451297336!2d8.345074473303416!3d12.973217614846412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11afa301aa8b5159%3A0x624ff3b4b3a318aa!2sFederal%20Univetsity%20Of%20Transportation!5e0!3m2!1sen!2sng!4v1742550082357!5m2!1sen!2sng" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            title='Federal University of transportation Daura'
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMap;
