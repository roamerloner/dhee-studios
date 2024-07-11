import React from 'react'

function Contact() {
  return (
    <div>
           {/* contact section */}
                <section className="contact" id="contact">
                  <div className="contact-wrapper">
                    <div className="contact-left" />
                    <div className="contact-right">
                      <h1 className="contact-heading">Contact</h1>
                      <form>
                        <div className="input-group">
                          <input type="text" className="field" />
                          <label className="input-label">Full Name</label>
                        </div>
                        <div className="input-group">
                          <input type="email" className="field" />
                          <label className="input-label">Email</label>
                        </div>
                        <div className="input-group">
                          <textarea className="field" defaultValue={""} />
                          <label className="message">Message</label>
                        </div>
                        <input type="submit" className="submit-btn" defaultValue="Submit" />
                      </form>
                    </div>
                  </div>
                </section>
                {/* contact section ends */}
    </div>
  )
}

export default Contact;
