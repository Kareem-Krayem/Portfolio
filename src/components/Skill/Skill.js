import React, { useEffect, useState } from 'react';
import './Skill.scss';

function Skill({ title, subtitle, skills, icon, open }) {
  const [state, setState] = useState(false);

  let skillState = state ? 'skills__open' : 'skills__close';
  function toggleSkills() {
    setState(!state);
  }

  const MainSkills = skills.map((skill) => {
    const nameToLower = skill.name.toLowerCase();
    return (
      <div className='skills__data' key={skill.name}>
        <div className='skills__titles'>
          <h3 className='skills__name'>{skill.name}</h3>
          <span className='skills__number'>{skill.percentage}</span>
        </div>
        <div className='skills__bar'>
          <span className={`skills__percentage skills__${nameToLower}`}> </span>
        </div>
      </div>
    );
  });
  useEffect(() => {
    if (open) {
      setState(true);
    }
  }, [open]);
  return (
    <div className={`skills__content ${skillState}`}>
      <div className='skills__header' onClick={toggleSkills}>
        <i className={`bx ${icon} skills__icon`}></i>
        <div>
          <h1 className='skills__title'>{title}</h1>
          <span className='skills__subtitle'>{subtitle}</span>
        </div>
        <i className='bx bx-chevron-down skills__arrow'></i>
      </div>
      <div className='skills__list grid'>{MainSkills}</div>
    </div>
  );
}

export default Skill;
