import React from 'react';

import styles from './skills.module.css';
import SkillList from '../../common/SkillList';
import minusIcon from '../../assets/minus-small.svg'

export const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h2>Languages</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="HTML" />
        <SkillList src={minusIcon} skill="CSS" />
        <SkillList src={minusIcon} skill="JavaScript" />
        <SkillList src={minusIcon} skill="Python" />
      </div>
      <hr />
      <h2>Front-end</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="React" />
        <SkillList src={minusIcon} skill="NextJS" />
        <SkillList src={minusIcon} skill="Material UI" />
        <SkillList src={minusIcon} skill="shadcn/ui" />
      </div>
      <hr />
      <h2>Back-end</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="Firebase" />
      </div>
      <hr />
      <h2>Data Libraries</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="NumPy" />
        <SkillList src={minusIcon} skill="pandas" />
        <SkillList src={minusIcon} skill="Matplotlib" />
        <SkillList src={minusIcon} skill="scikit-learn" />
      </div>
      <hr />
      <h2>Machine Learning</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="scikit-learn" />
        <SkillList src={minusIcon} skill="OpenAI API" />
        <SkillList src={minusIcon} skill="LangChain" />

      </div>
      <hr />
      <h2>Developer Tools</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="Unix" />
        <SkillList src={minusIcon} skill="Git" />
      </div>
    </section>
  );
};