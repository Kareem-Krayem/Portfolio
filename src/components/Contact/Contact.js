import React, { useState } from 'react';
import './Contact.scss';

import { send } from 'emailjs-com';

import { contact } from '../../assets/data/data';

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Karim',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send('service_sytg09s', 'template_kruf2az', toSend, '4woVVd2qs4ZYvP0bb')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    setToSend({
      from_name: '',
      to_name: 'Karim',
      message: '',
      reply_to: '',
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
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
              <i className='bx bx-map contact__card-icon'></i>
              <h3 className='contact__card-title'>Location</h3>
              <span className='contact__card-data'>{contact.location}</span>
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
                name='from_name'
                className='contact__form-input'
                placeholder='Enter your name'
                value={toSend.from_name}
                onChange={handleChange}
              />
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag'>Mail</label>
              <input
                type='email'
                name='reply_to'
                className='contact__form-input'
                placeholder='Enter your email'
                value={toSend.reply_to}
                onChange={handleChange}
              />
            </div>

            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Project</label>
              <textarea
                name='message'
                id=''
                cols='30'
                rows='10'
                className='contact__form-input'
                placeholder='Write/Describe your project'
                value={toSend.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className='button' onClick={onSubmit}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
