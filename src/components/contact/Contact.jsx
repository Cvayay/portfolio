import React from 'react';
import './contact.css';

const Contact = () => (
  <section className="contact-section section" id="contact">
    <div className="contact-section__container container">
      <span className="contact-section__eyebrow">CONTACT</span>
      <h2 className="contact-section__title">Let’s talk about what you’re building.</h2>
      <p className="contact-section__copy">
        Have a role, project, or idea in mind? Send me a message and tell me a little about it.
      </p>
      <a className="contact-section__link" href="mailto:shivajisahani01@gmail.com?subject=Let's%20connect">
        shivajisahani01@gmail.com <span aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
);

export default Contact;