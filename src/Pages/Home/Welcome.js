import React from 'react'

const Welcome = () => {
  return (
    <div>
      
  {/* Floating Books Animation  */}
  <div className="floating-books">
    <div className="book book1"><i className="fas fa-book"></i></div>
    <div className="book book2"><i className="fas fa-book-open"></i></div>
    <div className="book book3"><i className="fas fa-book"></i></div>
  </div>
  {/* <!-- Welcome Message --> */}
  <section class="welcome-section py-5" data-animate>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <div class="librarian-portrait">
            <svg viewBox="0 0 200 200" width="100%" height="auto">
              <circle cx="100" cy="80" r="50" fill="#8b0000"/>
              <rect x="50" y="130" width="100" height="70" fill="#8b0000"/>
            </svg>
          </div>
        </div>
        <div class="col-md-8">
          <h2>Welcome from the University Library</h2>
          <p class="lead">Dear Students and Faculty,</p>
          <p>Welcome to our university library system. We are committed to providing you with the resources and support needed for your academic success. Our dedicated team is here to assist you in your research and learning journey.</p>
          <p class="signature">Dr. ---<br />University Librarian</p>
        </div>
      </div>
    </div>
  </section>

  {/* Quotes Section  */}
  <section className="quotes-section py-5">
    <div className="floating-background-books"></div>
    <div className="container">
      <h2 className="text-center mb-5">Words of Wisdom</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="quote-card">
            <p className="quote-text">"A library is not a luxury but one of the necessities of life."</p>
            <p className="quote-author">- Henry Ward Beecher</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="quote-card">
            <p className="quote-text">"The only thing that you absolutely have to know, is the location of the library."</p>
            <p className="quote-author">- Albert Einstein</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="quote-card">
            <p className="quote-text">"Libraries store the energy that fuels the imagination."</p>
            <p className="quote-author">- Sidney Sheldon</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="quote-card">
            <p className="quote-text">"Knowledge is free at the library. Just bring your own container."</p>
            <p className="quote-author">- Anonymous</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="quote-card">
            <p className="quote-text">"A university is just a group of buildings gathered around a library."</p>
            <p className="quote-author">- Shelby Foote</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Welcome