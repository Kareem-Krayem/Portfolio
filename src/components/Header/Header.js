import React from 'react';
import './Header.scss';

import Scrollspy from 'react-scrollspy';

import { navLinks, links } from '../../assets/data/data';

import logo from '../../assets/img/logo.svg';

function Header() {
  const theme = 'dark-theme';
  const themeIcon = 'bx-moon';

  const toggleTheme = () => {
    const themeButton = document.getElementById('theme-button');
    document.body.classList.toggle(theme ? 'light-theme' : 'dark-theme');
    themeButton.classList.toggle(themeIcon ? 'bx-sun' : 'bx-moon');
  };

  const headerScroll = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  };
  window.addEventListener('scroll', headerScroll);
  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='#home' className='nav__logo'>
          <img src={logo} alt='logo' className='logo' />
        </a>

        <div className='nav__menu'>
          <Scrollspy
            className='nav__list'
            items={links}
            currentClassName='nav__link active-link'
          >
            {navLinks.map((navLink) => {
              return (
                <li className='nav__item' key={navLink.link}>
                  <a href={`#${navLink.link}`} className='nav__link'>
                    <i className={`bx ${navLink.icon}`}></i>
                  </a>
                </li>
              );
            })}
          </Scrollspy>
        </div>

        <i
          className='bx bx-moon change-theme'
          id='theme-button'
          onClick={toggleTheme}
        ></i>
      </nav>
    </header>
  );
}

export default Header;
