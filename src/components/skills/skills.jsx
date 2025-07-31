import React from 'react';
import styles from './skills.module.css';
import SkillList from '../../common/SkillList';
import minusIcon from '../../assets/minus-small.svg';

export const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <h2>Languages</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="Python" />
        <SkillList src={minusIcon} skill="JavaScript" />
        <SkillList src={minusIcon} skill="C++" />
        <SkillList src={minusIcon} skill="HTML" />
        <SkillList src={minusIcon} skill="CSS" />
      </div>
      <hr />

      <h2>Front-End</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="React" />
        <SkillList src={minusIcon} skill="Vue" />
        <SkillList src={minusIcon} skill="Next.js" />
        <SkillList src={minusIcon} skill="Gradio" />
      </div>
      <hr />

      <h2>UI</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="Material UI" />
        <SkillList src={minusIcon} skill="shadcn/ui" />
      </div>
      <hr />

      <h2>Back-End</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="Node.js" />
        <SkillList src={minusIcon} skill="Express" />
        <SkillList src={minusIcon} skill="Firebase" />
        <SkillList src={minusIcon} skill="FastAPI" />
        <SkillList src={minusIcon} skill="Flask" />
      </div>
      <hr />

      <h2>Data</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="NumPy" />
        <SkillList src={minusIcon} skill="pandas" />
        <SkillList src={minusIcon} skill="Matplotlib" />
      </div>
      <hr />

      <h2>Machine Learning</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="PyTorch" />
        <SkillList src={minusIcon} skill="scikit-learn" />
        <SkillList src={minusIcon} skill="TensorFlow" />
        <SkillList src={minusIcon} skill="Keras" />
      </div>
      <hr />

      <h2>Developer Tools</h2>
      <div className={styles.skillList}>
        <SkillList src={minusIcon} skill="Git" />
        <SkillList src={minusIcon} skill="Unix" />
        <SkillList src={minusIcon} skill="Docker" />
        <SkillList src={minusIcon} skill="Docker Compose" />
      </div>
    </section>
  );
};