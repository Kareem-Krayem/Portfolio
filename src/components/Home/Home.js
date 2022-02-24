import React from 'react';
import './Home.scss';

import { home, social } from '../../assets/data/data';

function Home() {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <div className='home__social'>
            <a
              href={social.linkedin}
              className='home__social-icon'
              target='_blank'
              rel='noreferrer'
            >
              <i className='bx bxl-linkedin'></i>
            </a>
            <a
              href={social.github}
              className='home__social-icon'
              target='_blank'
              rel='noreferrer'
            >
              <i className='bx bxl-github'></i>
            </a>
            <a
              href={social.instagram}
              className='home__social-icon'
              target='_blank'
              rel='noreferrer'
            >
              <i className='bx bxl-instagram'></i>
            </a>
            <a
              href={social.behance}
              className='home__social-icon'
              target='_blank'
              rel='noreferrer'
            >
              <i className='bx bxl-behance'></i>
            </a>
          </div>

          <div className='home__img'>
            <svg className='home__blob' viewBox='0 0 200 187'>
              <mask id='mask0' mask-type='alpha'>
                <path
                  d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
                />
              </mask>
              <g mask='url(#mask0)'>
                <path
                  d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
                />
                <image
                  className='home__blob-img'
                  x='13'
                  y='-20'
                  href={home.profile}
                />
              </g>
            </svg>
          </div>
          <div className='home__data'>
            <h1 className='home__title'>{home.name}</h1>
            <h3 className='home__subtitle'>{home.occupation}</h3>
            <p className='home__description'>{home.description}</p>
            <a href='#contact' className='button button--flex'>
              Contact me
              <i className='bx bx-right-arrow-circle button__icon'></i>
            </a>
          </div>
        </div>
        <div className='home__scroll'>
          <a href='#about' className='home__scroll-button button--flex'>
            <i className='uil uil-mouse-alt home__scroll-mouse'></i>
            <span className='home__scroll-name'>Scroll down</span>
            <i className='bx bxs-chevron-down'></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
