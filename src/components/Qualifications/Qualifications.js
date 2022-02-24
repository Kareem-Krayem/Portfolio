import React, { useState } from 'react';
import './Qualifications.scss';

import Education from '../Qualification/Education';
import Work from '../Qualification/Work';

function Qualifications() {
  const [educationState, setEducationState] = useState(true);
  const [workState, setWorkState] = useState(false);
  const SwitchTabs = () => {
    const educationTab = document.getElementById('educationTab');
    const workTab = document.getElementById('workTab');
    const workContent = document.querySelector('#workContent');
    const educationContent = document.querySelector('#educationContent');
    if (!workState) {
      setWorkState(!workState);
      setEducationState(!educationState);
      educationTab.classList.remove('qualification__active');
      workTab.classList.add('qualification__active');
      educationContent.classList.remove('qualification__active');
      workContent.classList.add('qualification__active');
    }

    if (!educationState) {
      setEducationState(!educationState);
      setWorkState(!workState);
      workTab.classList.remove('qualification__active');
      educationTab.classList.add('qualification__active');
      workContent.classList.remove('qualification__active');
      educationContent.classList.add('qualification__active');
    }
  };

  return (
    <section className='qualification section' id='work'>
      <h2 className='section__title'>Qualifications</h2>
      <span className='section__subtitle'>My personal journey</span>
      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className='qualification__button button--flex qualification__active'
            data-target='#education'
            id='educationTab'
            onClick={SwitchTabs}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

          <div
            className='qualification__button button--flex'
            data-target='#work'
            id='workTab'
            onClick={SwitchTabs}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Work
          </div>
        </div>
        <div className='qualification__sections'>
          <Education />
          <Work />
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
