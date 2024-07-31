import React from 'react';

import styles from './hero.module.css';

import linkedinIcon from './../../assets/linkedin-light.svg';
import githubIcon from './../../assets/github-light.svg';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1>
          Sean<br />
          Caranzo
        </h1>
        <h2>CS Major at UP Diliman</h2>
      </div>
      <span>
        <a href='https://github.com/29yabuki' target='_blank'>
            <img src={githubIcon} lt="GitHub icon" />
        </a>
        <a href='https://www.linkedin.com/in/29rui/' target='_blank'>
            <img src={linkedinIcon} lt="Linkedin icon" />
        </a>
      </span>
      <p>
        I turn texts into robust web applications and machine learning models.
      </p>
      <a href='https://drive.google.com/file/d/1CGBzVAQJsocMX3KuuInD6Th70F1EZJ-l/view?usp=sharing' target='_blank'>
        <button className='styles.hover'>Resume</button>
      </a>
    </section>
  );
};