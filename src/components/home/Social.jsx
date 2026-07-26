import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/Cvayay" className="home__social-icon" target='_blank' rel="noreferrer" aria-label="GitHub">
            <i className="uil uil-github-alt"></i>    
        </a>
        
        <a href="https://www.linkedin.com/" className="home__social-icon" target='_blank' rel="noreferrer" aria-label="LinkedIn">
            <i className="uil uil-linkedin-alt"></i>   
        </a>

        <a href="https://www.instagram.com/" className="home__social-icon" target='_blank' rel="noreferrer" aria-label="Instagram">
            <i className="uil uil-instagram"></i>
        </a>
    </div>
  );
};

export default Social;