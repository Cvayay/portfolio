import React from 'react';
import './about.css';
import ProfileImg from '../../assets/profile.jpg'; // Path to your profile picture
import CV from '../../assets/ShivajiSahani26.docx';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        
        {/* HEADER: High-Impact Headline with Accent Tag */}
        <div className="about__header">
          <span className="section__subtitle">Get To Know Me</span>
          <h2 className="about__main-headline">
            Your team is missing something<span className="about__dots">.....</span>{' '}
            <span className="about__headline-badge">It’s me!</span>
          </h2>
        </div>

        {/* LAYOUT ARCHITECTURE: Split Grid */}
        <div className="about__grid">
          
          {/* LEFT COLUMN: Elevated Portrait Card with Accent Backdrop */}
          <div className="about__left-col">
            <div className="about__card-wrapper">
              <div className="about__card-backdrop"></div>
              <div className="about__card">
                <img src={ProfileImg} alt="Shivaji Sahani" className="about__img" />
                <div className="about__card-status">
                  <span className="about__status-dot"></span>
                  <span className="about__status-text">Available for Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3-Part Narrative */}
          <div className="about__right-col">
            
            {/* PART 1: The Hook Line */}
            <h3 className="about__subheadline">
              I’m <span className="about__highlight">Shivaji</span>, your go-to person for all things <span className="about__highlight">Software Engineering</span>!
            </h3>

            {/* PART 2: Core Expertise */}
            <p className="about__text">
              I’m a <strong>builder at heart</strong> who loves turning complex ideas into scalable, production-ready digital products. Whether it’s architecting clean backend logic, optimizing databases, or crafting intuitive user interfaces, I focus on <strong>delivering high-performance solutions</strong> built with intention and clarity.
            </p>

            {/* PART 3: Personal Touch & Hobbies */}
            <p className="about__text">
              When I’m not writing code or refining application systems, you’ll find me exploring new software tools, tinkering with <strong>creative side projects</strong>, or continuously sharpening my daily workflow.
            </p>

            {/* CTA ACTION BUTTON */}
            <div className="about__actions">
              <a download="Shivaji_Sahani_CV.docx" href={CV} className="button button--flex">
                Download CV
                <i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;