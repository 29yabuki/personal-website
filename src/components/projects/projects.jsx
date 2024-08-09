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
            p="Python and PySimpleGUI"
        />
        <ProjectCard
            link="https://pantry-tracker-pi-neon.vercel.app/"
            h3="Pantry Tracker"
            p="NextJS, MUI, and Firebase"
        />
        <ProjectCard
            link="https://github.com/29yabuki/Zenote"
            h3="Zenote"
            p="Python and PySimpleGUI"
        />
      </div>
    </section>
  );
};