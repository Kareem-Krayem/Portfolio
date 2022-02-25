import React from 'react';
import './Contact.scss';

import { contact } from '../../assets/data/data';

function Contact() {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      <span className='section__subtitle'>Get in touch</span>

      <div className='contact__container container'>
        <div className='contact__content'>
          <h3 className='contact__title'>Talk to me</h3>
          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>{contact.email}</span>

              <a
                href={`mailto:${contact.email}`}
                target='_blank'
                rel='noreferrer'
                className='contact__button'
              >
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-whatsapp contact__card-icon'></i>
              <h3 className='contact__card-title'>Whatsapp</h3>
              <span className='contact__card-data'>{contact.phone}</span>

              <a
                href='#home'
                target='_blank'
                rel='noreferrer'
                className='contact__button'
              >
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-messenger contact__card-icon'></i>
              <h3 className='contact__card-title'>Messanger</h3>
              <span className='contact__card-data'>{contact.messanger}</span>

              <a
                href='#home'
                target='_blank'
                rel='noreferrer'
                className='contact__button'
              >
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='contact__content' id='contact__second__part'>
          <h3 className='contact__title'>Write me your project</h3>
          <form action='' className='contact__form'>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Name</label>
              <input
                type='text'
                className='contact__form-input'
                placeholder='Enter your name'
              />
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag'>Mail</label>
              <input
                type='email'
                className='contact__form-input'
                placeholder='Enter your email'
              />
            </div>

            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Project</label>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                className='contact__form-input'
                placeholder='Write/Describe your project'
              ></textarea>
            </div>

            <button className='button'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
