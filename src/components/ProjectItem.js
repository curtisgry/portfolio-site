import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Github from './icons/Github';

export default function ProjectItem({ project }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [mousein, setMouseIn] = useState(false);

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
      <img src={project.image} />
      <a href={project.link} target="_blank" rel="noreferrer">
        Live Version
      </a>
      <a href={project.linkGit} target="_blank" rel="noreferrer">
        <Github />
      </a>
    </div>
  );
}
