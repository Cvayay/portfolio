import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-minimal">
      <div className="footer-minimal__container container">
        
        {/* TOP TAG */}
        {/* <div className="footer-minimal__tag">
          // Available for global roles / Probably tweaking this footer again
        </div> */}

        {/* MAIN HEADLINE */}
        <h2 className="footer-minimal__headline">
          That's the work.<br />
          Here's the <span className="footer-minimal__faded">awkward</span><br />
          reaching out part.
        </h2>

        {/* ACTION BAR */}
        <div className="footer-minimal__actions">
          <a href="mailto:shivajisahani01@gmail.com" className="footer-btn footer-btn--primary">
            Drop an Email
          </a>
          <a href="/Shivaji_Sahani_CV.docx" download className="footer-btn footer-btn--outline">
            Download resume ↓
          </a>
          <a href="https://github.com/Cvayay" target="_blank" rel="noreferrer" className="footer-btn footer-btn--outline">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="footer-btn footer-btn--outline">
            LinkedIn ↗
          </a>
        </div>

        {/* SUB-FOOTER BAR */}
        <div className="footer-minimal__bottom">
          <div className="footer-minimal__status">
            <span className="status-dot"></span>
            <span>Online</span>
          </div>
          <div className="footer-minimal__credits">
            Built by Shivaji | No templates were harmed.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;