import React from 'react';

import { qualifications } from '../../assets/data/data';

function Education() {
  let counter = -1;
  const Educations = qualifications.education.map((education) => {
    counter++;
    return (
      <div className='qualification__data' key={counter}>
        {counter % 2 ? '' : <div></div>}
        {counter % 2 ? (
          ''
        ) : (
          <div>
            <span className='qualification__rounder'> </span>
            <span className='qualification__line'> </span>
          </div>
        )}

        <div>
          <h3 className='qualification__title'>{education.title}</h3>
          <span className='qualification__subtitle'>
            {education.university} - {education.country}
          </span>
          <div className='qualification__calendar'>
            <i className='uil uil-calendar-alt'></i>
            {education.startDate} - {education.endDate}
          </div>
        </div>
        {counter % 2 ? <span className='qualification__rounder'> </span> : ''}
      </div>
    );
  });
  return (
    <div
      className='qualification__content qualification__active'
      data-content
      id='educationContent'
    >
      {Educations}
    </div>
  );
}

export default Education;
