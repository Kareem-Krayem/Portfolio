import React, { useEffect } from 'react';
import './Portfolio.scss';

import mixitup from 'mixitup';

import { portfolio, container, cards } from '../../assets/data/data';

function Portfolio() {
  const activeClass = (id) => {
    const allLinks = document.querySelectorAll('.work__item');
    allLinks.forEach((link) => {
      link.classList.remove('active-work');
    });
    const link = document.getElementById(id);
    link.classList.add('active-work');
  };
  useEffect(() => {
    mixitup(container, {
      selectors: {
        target: cards,
      },
      animation: {
        duration: 300,
      },
    });
  }, []);
  return (
    <section className='work section' id='portfolio'>
      <h2 className='section__title'>My Portfolio</h2>
      <span className='section__subtitle'>Recent Work</span>

      <div className='work__filters'>
        <span
          className='work__item active-work'
          id='all'
          data-filter='all'
          onClick={() => activeClass('all')}
        >
          All
        </span>
        <span
          className='work__item'
          id='web'
          data-filter='.Web'
          onClick={() => activeClass('web')}
        >
          Web
        </span>
        <span
          className='work__item'
          id='mobile'
          data-filter='.Mobile'
          onClick={() => activeClass('mobile')}
        >
          Mobile
        </span>
        <span
          className='work__item'
          id='design'
          data-filter='.Design'
          onClick={() => activeClass('design')}
        >
          Design
        </span>
      </div>

      <div className='work__container container grid'>
        {portfolio.map((project) => {
          return (
            <div
              className={`work__card mix ${project.category}`}
              key={project.title}
            >
              <img src={project.img} alt='' className='work__img' />
              <h3 className='work__title'>{project.title}</h3>
              <a href={project.url} className='work__button'>
                Demo
                {/* <i className='bx bx-right-arrow-alt work__icon'></i> */}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
