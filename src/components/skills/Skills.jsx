import React from 'react';
import './skills.css';

const designStack = [
  { name: 'Figma', icon: 'uil uil-vector-square' },
  { name: 'VS Code', icon: 'uil uil-brackets-curly' },
  { name: 'Postman', icon: 'uil uil-setting' },
  { name: 'Notion', icon: 'uil uil-notes' },
  { name: 'ChatGPT / AI', icon: 'uil uil-robot' },
  { name: 'Git & GitHub', icon: 'uil uil-github' },
];

const skillList = [
  { name: 'Frontend Engineering', category: 'React • JS (ES6+) • HTML/CSS • Bootstrap' },
  { name: 'Backend Systems', category: 'Node.js • Python • Java • REST APIs' },
  { name: 'Database Architecture', category: 'MySQL • SQLite • Data Modeling' },
  { name: 'UI / UX Design', category: 'Figma • Wireframing • Responsive Layouts' },
  { name: 'AI & Developer Tools', category: 'Prompt Engineering • Postman • Git Workflow' },
  { name: 'Product Thinking', category: 'Flow Design • System Architecture • Problem Solving' },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container container">
        <div className="skills__split-layout">
          
          {/* LEFT SIDE: Heading & Tool Stack Cards */}
          <div className="skills__left">
            <span className="section__subtitle skills__subtitle-left">Technical Stack</span>
            <h2 className="skills__main-title">
              Skills that supercharge your products.
            </h2>

            <div className="skills__stack-section">
              <h4 className="skills__stack-title">My core tool stack</h4>
              <div className="skills__stack-grid">
                {designStack.map((tool, idx) => (
                  <div key={idx} className="skills__stack-card">
                    <i className={`${tool.icon} skills__stack-icon`}></i>
                    <span className="skills__stack-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Vertical Skill List with Badges */}
          <div className="skills__right">
            <div className="skills__vertical-list">
              {skillList.map((skill, idx) => (
                <div key={idx} className="skills__list-item">
                  <div className="skills__pill-icon">
                    <i className="uil uil-check skills__check-icon"></i>
                  </div>
                  <div className="skills__list-text">
                    <h3 className="skills__list-name">{skill.name}</h3>
                    <span className="skills__list-category">{skill.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;