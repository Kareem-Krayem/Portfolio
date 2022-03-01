import React from 'react';

import { qualifications } from '../../assets/data/data';

function Work() {
  let counter = -1;
  const First = () => {
    if (counter === 3) {
      return (
        <div>
          <span className='qualification__rounder'> </span>
        </div>
      );
    } else {
      return (
        <div>
          <span className='qualification__rounder'> </span>
          <span className='qualification__line'> </span>
        </div>
      );
    }
  };
  const Last = () => {
    if (counter.length) {
      return (
        <div>
          <span className='qualification__rounder'> </span>
        </div>
      );
    }
  };
  const Works = qualifications.work.map((work) => {
    counter++;
    return (
      <div className='qualification__data' key={work.title}>
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

        {counter % 2 ? Last() : First()}
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
