import React from 'react';
import './Main.scss';

import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Qualifications from '../Qualifications/Qualifications';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

function Main() {
  return (
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default Main;
