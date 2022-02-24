import React from 'react';
import './Footer.scss';

import { social } from '../../assets/data/data';

function Footer() {
  return (
    <footer class='footer'>
      <div class='footer__bg'>
        <div class='footer__container container grid'>
          <div>
            <h1 class='footer__title'>Karim</h1>
            <span class='footer__subtitle'>Frontend Developer</span>
          </div>

          <div className='footer__columns'>
            <ul class='footer__links'>
              <li>
                <a href='#services' class='footer__link'>
                  Services
                </a>
              </li>
              <li>
                <a href='#portfolio' class='footer__link'>
                  Portfolio
                </a>
              </li>
              <li>
                <a href='#contact' class='footer__link'>
                  Contact Me
                </a>
              </li>
            </ul>

            <ul class='footer__socials'>
              <li>
                <a
                  href={social.linkedin}
                  class='footer__social'
                  target='_blank'
                >
                  <i className='bx bxl-linkedin'></i>
                </a>
              </li>
              <li>
                <a href={social.github} class='footer__social' target='_blank'>
                  <i className='bx bxl-github'></i>
                </a>
              </li>
              <li>
                <a
                  href={social.instagram}
                  class='footer__social'
                  target='_blank'
                >
                  <i className='bx bxl-instagram'></i>
                </a>
              </li>
              <li>
                <a href={social.behance} class='footer__social' target='_blank'>
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
