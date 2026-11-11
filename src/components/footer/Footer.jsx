import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-minimal">
      <div className="footer-minimal__container container">
        <h2 className="footer-minimal__headline">
          Have a project in mind?<br />
          Let’s make something <span className="footer-minimal__faded">useful.</span>
        </h2>

        <div className="footer-minimal__actions">
          <a href="mailto:shivajisahani01@gmail.com" className="footer-btn footer-btn--primary">
            Email me ↗
          </a>
          <a href="https://github.com/Cvayay" target="_blank" rel="noreferrer" className="footer-btn footer-btn--outline">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/shivaji-sahani-940784223" target="_blank" rel="noreferrer" className="footer-btn footer-btn--outline">
            LinkedIn ↗
          </a>
        </div>

        <div className="footer-minimal__bottom">
          <div className="footer-minimal__status">
            <span className="status-dot"></span>
            <span>Based in India</span>
          </div>
          <div className="footer-minimal__credits">
            Built by Shivaji Sahani.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;