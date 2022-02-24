import React, { useState } from 'react';
import './Header.scss';

import { navLinks } from '../../assets/data/data';

import logo from '../../assets/img/logo.svg';

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const switchTheme = () => {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'light-theme';
    const iconTheme = 'bx-sun';

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme,
      );
      themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](
        iconTheme,
      );
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
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
        <a href='#' className='nav__logo'>
          <img src={logo} alt='logo' className='logo' />
        </a>

        <div className='nav__menu'>
          <ul className='nav__list'>
            {navLinks.map((navLink) => {
              const active =
                activeLink === navLink.link
                  ? 'nav__link active-link'
                  : 'nav__link';
              return (
                <li
                  className='nav__item'
                  onClick={() => setActiveLink(navLink.link)}
                >
                  <a href={`#${navLink.link}`} className={active}>
                    <i className={`bx ${navLink.icon}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <i
          className='bx bx-moon change-theme'
          id='theme-button'
          onClick={switchTheme}
        ></i>
      </nav>
    </header>
  );
}

export default Header;
