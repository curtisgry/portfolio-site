import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Github from './icons/Github';

export default function ProjectItem({ project }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [mousein, setMouseIn] = useState(false);

  const stackIcons = project.stack.map((icon) => (
    <img className="stack-icon" src={icon} alt="icon" />
  ));

  function toggleMouseIn() {
    setMouseIn((last) => !last);
  }

  return (
    <div
      ref={ref}
      className={`project-container ${inView ? 'project-show' : ''} ${
        mousein ? 'grow' : ''
      }`}
      onMouseEnter={toggleMouseIn}
      onMouseLeave={toggleMouseIn}
    >
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <img alt="A screenshot of the project" src={project.image} />
      <div className="stack-container">{stackIcons}</div>
      <div className="project-links">
        <a href={project.link} target="_blank" rel="noreferrer">
          Live Version
        </a>
        <a href={project.linkGit} target="_blank" rel="noreferrer">
          <Github />
        </a>
      </div>
    </div>
  );
}
