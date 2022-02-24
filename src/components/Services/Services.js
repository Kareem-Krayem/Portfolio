import React from 'react';
import './Services.scss';

import Service from '../Service/Service';

import { services } from '../../assets/data/data';

function Services() {
  const allServices = services.map((service) => {
    return (
      <Service key={service.title} title={service.title} icon={service.icon} />
    );
  });
  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What i offer</span>
      <div className='services__container container grid'>{allServices}</div>
    </section>
  );
}

export default Services;
