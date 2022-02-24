import React from 'react';

import { qualifications } from '../../assets/data/data';

function Work() {
  const First = () => {
    return (
      <div>
        <span className='qualification__rounder'> </span>
        <span className='qualification__line'> </span>
      </div>
    );
  };
  const Last = () => {
    if (counter === 2) {
      return (
        <div>
          <span class='qualification__rounder'> </span>
        </div>
      );
    }
  };
  let counter = -1;
  const Works = qualifications.work.map((work) => {
    counter++;
    console.log(counter);
    return (
      <div className='qualification__data'>
        {counter % 2 ? (
          <>
            <div></div>
            {First()}
          </>
        ) : (
          ''
        )}
        <div>
          <h3 className='qualification__title'>{work.title}</h3>
          <span className='qualification__subtitle'>
            {work.company} - {work.country}
          </span>
          <div className='qualification__calendar'>
            <i className='uil uil-calendar-alt'></i>
            {work.startDate} - {work.endData}
          </div>
        </div>

        {counter === 0 ? First() : Last()}
      </div>
    );
  });
  return (
    <div className='qualification__content' data-content id='workContent'>
      {Works}
    </div>
  );
}

export default Work;
