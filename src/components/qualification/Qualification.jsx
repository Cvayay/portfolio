import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Journey</h2>
        <span className="section__subtitle">A quick view of my path so far</span>

        <div className="qualification__container container">
            
            {/* TABS */}
            <div className="qualification__tabs">
                <div 
                    className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div 
                    className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="qualification__section">
                
                {/* EDUCATION CONTENT */}
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__list">
                        
                        <div className="qualification__item">
                            <span className="qualification__dot"></span>
                            <span className="qualification__line"></span>
                            <div className="qualification__meta">
                                <span className="qualification__calender">2021 — 2024</span>
                            </div>
                            <h3 className="qualification__title">BCA</h3>
                            <span className="qualification__subtitle">REVA University - Bengaluru</span>
                        </div>

                        <div className="qualification__item">
                            <span className="qualification__dot"></span>
                            <span className="qualification__line"></span>
                            <div className="qualification__meta">
                                <span className="qualification__calender">2025 — 2027</span>
                            </div>
                            <h3 className="qualification__title">MCA</h3>
                            <span className="qualification__subtitle">Chandigarh University - Uttar Pradesh</span>
                        </div>

                    </div>
                </div>

                {/* EXPERIENCE CONTENT */}
                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__list">
                        
                        <div className="qualification__item">
                            <span className="qualification__dot"></span>
                            <span className="qualification__line"></span>
                            <div className="qualification__meta">
                                <span className="qualification__calender">2023 — PRESENT</span>
                            </div>
                            <h3 className="qualification__title">Independent Developer</h3>
                            <span className="qualification__subtitle">Built projects across web, desktop, and backend systems</span>
                        </div>

                        <div className="qualification__item">
                            <span className="qualification__dot"></span>
                            <span className="qualification__line"></span>
                            <div className="qualification__meta">
                                <span className="qualification__calender">CONTINUOUS LEARNING</span>
                            </div>
                            <h3 className="qualification__title">Problem Solver</h3>
                            <span className="qualification__subtitle">Focused on clean architecture, user clarity, and practical delivery</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Qualification;