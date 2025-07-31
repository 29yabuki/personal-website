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
            p="Calculator app using Python"
        />
        <ProjectCard
            link="https://github.com/29yabuki/Zenote"
            h3="Zenote"
            p="Notepad app using Python"
        />
        <ProjectCard
            link="https://pantry-tracker-pi-neon.vercel.app/"
            h3="Pantry Tracker"
            p="A CRUD app with authentication using NextJS and Firebase"
        />
        <ProjectCard
            link="https://poke-asker.vercel.app/"
            h3="PokéAsker"
            p=" Pokémon chatbot using OpenAI API, PokéAPI, and LangChain"
        />
        <ProjectCard
            link="https://github.com/29yabuki/HGRforPPTX"
            h3="HGRforPPTX"
            p="PPTX control using hand gesture recognition"
        />
      </div>
    </section>
  );
};