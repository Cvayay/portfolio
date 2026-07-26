import React from 'react';
import "./home.css";
import Social from './Social';
import { homeData } from './Data';

const Home = () => {
  return (
    <section className="home section" id='home'>
      <div className="home__container container">
        <div className="home__content">
          <Social />

          <div className="home__data">
            <span className="home__greeting">{homeData.greeting}</span>
            <h1 className="home__title">{homeData.firstName} {homeData.lastName}</h1>
            
            {/* ROTATING ROLE TICKER */}
            <div className="home__ticker-wrapper">
              <div className="home__ticker">
                {homeData.roles.concat(homeData.roles[0]).map((role, idx) => (
                  <span key={idx} className="home__ticker-item">{role}</span>
                ))}
              </div>
            </div>

            <p className="home__tagline">{homeData.tagline}</p>
            <p className="home__description">{homeData.description}</p>

            <div className="home__stats">
              {homeData.stats.map((stat) => (
                <div className="home__stat" key={stat.label}>
                  <span className="home__stat-value">{stat.value}</span>
                  <span className="home__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="home__buttons">
              <a href="#contact" className="button button--flex">Let’s talk</a>
              <a href="#portfolio" className="button button--flex button--ghost">View projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;