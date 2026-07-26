import React from 'react';
import './Projects.css';
import { projectsData } from '../../components/home/Data';

const Projects = () => {
	return (
		<section className="projects section" id="portfolio">
			<h2 className="section__title">Selected Work</h2>
			<span className="section__subtitle">Projects that reflect how I think and build</span>

			<div className="projects__container container grid">
				{projectsData.map((project, index) => (
					<article className="projects__card" key={project.id}>
						<div className="projects__card-topline">
							<span className="projects__number">0{index + 1} / {project.category}</span>
							<span className="projects__arrow">↗</span>
						</div>

						<div className="projects__content">
							<h3 className="projects__title">{project.title}</h3>
							<p className="projects__description">{project.description}</p>
							<div className="projects__tech">
								{project.tech?.map((item) => (
									<span key={item} className="projects__tech-item">{item}</span>
								))}
							</div>
						</div>

						<a className="projects__link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>
							View project
						</a>
					</article>
				))}
			</div>
		</section>
	);
};

export default Projects;