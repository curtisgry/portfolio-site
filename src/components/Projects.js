import React from 'react';
import ProjectItem from './ProjectItem';

import projects from '../data/projects';

export default function Projects() {
  const projList = projects.map((project) => (
    <ProjectItem key={project.id} project={project} />
  ));

  return (
    <div id="projects" className="container">
      <h1>Some things I've made</h1>
      <div className="project-list">{projList}</div>
    </div>
  );
}
