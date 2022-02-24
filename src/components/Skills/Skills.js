import React from 'react';
import './Skills.scss';

import { skills } from '../../assets/data/data';

import Skill from '../Skill/Skill';

function Skills() {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My technical level</span>

      <div className='skills__container container grid'>
        <Skill
          title={skills.frontend.title}
          subtitle={`More than ${skills.frontend.experience} years`}
          skills={skills.frontend.skills}
          icon={skills.frontend.icon}
          open='skills_open'
        />
        <Skill
          title={skills.backend.title}
          subtitle={`More than ${skills.backend.experience} years`}
          skills={skills.backend.skills}
          icon={skills.backend.icon}
        />
        <Skill
          title={skills.designer.title}
          subtitle={`More than ${skills.designer.experience} years`}
          skills={skills.designer.skills}
          icon={skills.designer.icon}
        />
      </div>
    </section>
  );
}

export default Skills;
