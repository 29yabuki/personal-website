import React from 'react';

import styles from './projects.module.css';
import ProjectCard from '../../common/ProjectCard';

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
            link="https://github.com/29yabuki/Computandi"
            h3="Computandi"
            p="A calculator app"
        />
        <ProjectCard
            link="https://github.com/29yabuki/Zenote"
            h3="Zenote"
            p="A notepad app"
        />
      </div>
    </section>
  );
};