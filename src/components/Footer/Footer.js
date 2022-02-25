import React from 'react';
import './Footer.scss';

import { social } from '../../assets/data/data';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__bg'>
        <div className='footer__container container grid'>
          <div>
            <h1 className='footer__title'>Karim</h1>
            <span className='footer__subtitle'>Frontend Developer</span>
          </div>

          <div className='footer__columns'>
            <ul className='footer__links'>
              <li>
                <a href='#services' className='footer__link'>
                  Services
                </a>
              </li>
              <li>
                <a href='#portfolio' className='footer__link'>
                  Portfolio
                </a>
              </li>
              <li>
                <a href='#contact' className='footer__link'>
                  Contact Me
                </a>
              </li>
            </ul>

            <ul className='footer__socials'>
              <li>
                <a
                  href={social.linkedin}
                  className='footer__social-icon'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='bx bxl-linkedin'></i>
                </a>
              </li>
              <li>
                <a
                  href={social.github}
                  className='footer__social-icon'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='bx bxl-github'></i>
                </a>
              </li>
              <li>
                <a
                  href={social.instagram}
                  className='footer__social-icon'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='bx bxl-instagram'></i>
                </a>
              </li>
              <li>
                <a
                  href={social.behance}
                  className='footer__social-icon'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='bx bxl-behance'></i>
                </a>
              </li>
            </ul>
            <span className='footer__copy'>
              &#169; Karim Krayem. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
