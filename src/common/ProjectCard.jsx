import React from 'react';

function ProjectCard({ link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;