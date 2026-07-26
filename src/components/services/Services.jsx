import React, { useState } from 'react';
import './services.css';

const servicesData = [
  {
    id: 1,
    title: 'Frontend Development',
    subtitle: 'UI/UX • Responsive Web • React Components',
    icon: 'uil uil-web-grid',
    description:
      'I build responsive interfaces that feel clear, polished, and user-friendly while staying efficient and maintainable.',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Figma'],
    points: [
      'Responsive interfaces for desktop and mobile screens.',
      'Clean component architecture with thoughtful visual hierarchy.',
      'Smooth interactions built to feel intuitive and polished.',
      'Fast-loading pages with a strong focus on usability.',
    ],
  },
  {
    id: 2,
    title: 'Backend Development',
    subtitle: 'API Design • Data Handling • Systems Architecture',
    icon: 'uil uil-brackets-curly',
    description:
      'I work on application logic, data handling, and backend systems that support the product reliably and efficiently.',
    skills: ['Node.js', 'Python', 'Java', 'MySQL', 'SQLite', 'REST APIs'],
    points: [
      'Reliable application logic for web and data-driven solutions.',
      'Structured backend flows that keep products maintainable.',
      'Database-backed features designed for real-world use.',
      'Practical systems built with clarity and long-term stability in mind.',
    ],
  },
  {
    id: 3,
    title: 'Product Thinking',
    subtitle: 'User Experience • Solution Design • Workflow Clarity',
    icon: 'uil uil-edit',
    description:
      'I help shape ideas into clear solutions by focusing on usefulness, flow, and a thoughtful experience from the start.',
    skills: ['System Design', 'User Workflows', 'Problem Solving', 'Notion'],
    points: [
      'Clear product framing that turns ideas into practical direction.',
      'User-first thinking that balances usefulness with visual clarity.',
      'Solutions shaped around flow, simplicity, and long-term value.',
      'A collaborative approach focused on thoughtful execution.',
    ],
  },
];

const Services = () => {
  // Store the active accordion ID; set to 1 by default (or null for all closed)
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (id) => {
    setActiveAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">What I Do</h2>
      <span className="section__subtitle">Ways I can help bring ideas to life</span>

      <div className="services__accordion-container container">
        {servicesData.map((service) => {
          const isOpen = activeAccordion === service.id;

          return (
            <div
              key={service.id}
              className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}
            >
              {/* ACCORDION HEADER */}
              <button
                className="accordion__header"
                onClick={() => toggleAccordion(service.id)}
                aria-expanded={isOpen}
              >
                <div className="accordion__header-left">
                  <i className={`${service.icon} accordion__icon`}></i>
                  <div className="accordion__titles">
                    <h3 className="accordion__title">{service.title}</h3>
                    <span className="accordion__subtitle">{service.subtitle}</span>
                  </div>
                </div>

                <div className="accordion__toggle">
                  <i className="uil uil-angle-down accordion__arrow"></i>
                </div>
              </button>

              {/* ACCORDION EXPANDABLE BODY */}
              <div className="accordion__body">
                <div className="accordion__content">
                  <p className="accordion__description">{service.description}</p>

                  <ul className="accordion__list">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="accordion__list-item">
                        <i className="uil uil-check-circle accordion__check-icon"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* SKILLSET & TOOLS BADGES */}
                  <div className="accordion__skills">
                    <span className="accordion__skills-title">Skillset & Tools</span>
                    <div className="accordion__badges">
                      {service.skills.map((skill, idx) => (
                        <span key={idx} className="accordion__badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;