import React from 'react';
import './Services.scss';

import Service from '../Service/Service';

import { services } from '../../assets/data/data';

function Services() {
  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What i offer</span>
      <div className='services__container container grid'>
        <Service
          key={services.uiuxdesign.title}
          title={services.uiuxdesign.title}
          icon={services.uiuxdesign.icon}
          description={services.uiuxdesign.description}
        />
        <Service
          key={services.frontenddeveloper.title}
          title={services.frontenddeveloper.title}
          icon={services.frontenddeveloper.icon}
          description={services.frontenddeveloper.description}
        />
        <Service
          key={services.brandingdesign.title}
          title={services.brandingdesign.title}
          icon={services.brandingdesign.icon}
          description={services.brandingdesign.description}
        />
      </div>
    </section>
  );
}

export default Services;
