import React from 'react';
import './About.scss';

import { about } from '../../assets/data/data';

function About() {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>My introduction</span>

      <div className='about__container container grid'>
        <img src={about.myPicture} alt='' className='about__img' />

        <div className='about__data'>
          <p className='about__description'>{about.description}</p>

          <div className='about__info'>
            <div>
              <span className='about__info-title'>
                {about.yearsOfExperience}+
              </span>
              <span className='about__info-name'>
                Years <br />
                experience
              </span>
            </div>

            <div>
              <span className='about__info-title'>
                {about.completedProjects}+
              </span>
              <span className='about__info-name'>
                Completed <br />
                project
              </span>
            </div>

            <div>
              <span className='about__info-title'>
                {about.companiesWorked}+
              </span>
              <span className='about__info-name'>
                Companies <br />
                worked
              </span>
            </div>
          </div>

          <div className='about__buttons'>
            <a download='' href={about.resume} className='button button-flex'>
              Download Resume <i className='bx bx-download button__icon'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
