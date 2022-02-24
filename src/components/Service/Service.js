import React, { useState } from 'react';

function Service({ title, icon }) {
  const [modalState, setModalState] = useState(false);
  const modalClass = modalState
    ? 'services__modal active-modal'
    : 'services__modal';
  const modalView = document.getElementsByClassName('services__modal');

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
    modalView.classList.remove('active-modal');
  };

  return (
    <div className='services__content'>
      <div>
        <i className={`bx ${icon} services__icon`}></i>
        <h3 className='services__title'>{title}</h3>
      </div>

      <span
        className='
            button button--flex button--small button--link
            services__button
          '
        onClick={openModal}
      >
        View More <i className='bx bx-right-arrow-alt button__icon'></i>
      </span>

      <div className={modalClass} onClick={closeModal}>
        <div className='services__modal-content'>
          <h4 className='services__modal-title'>{title}</h4>
          <i className='bx bx-x services__modal-close' onClick={closeModal}></i>

          <ul className='services__modal-services grid'>
            <li className='services__modal-service'>
              <i className='bx bx-check-circle services__modal-icon'></i>
              <p>I develop the user interface.</p>
            </li>
            <li className='services__modal-service'>
              <i className='bx bx-check-circle services__modal-icon'></i>
              <p>Web page development.</p>
            </li>
            <li className='services__modal-service'>
              <i className='bx bx-check-circle services__modal-icon'></i>
              <p>I create ux element interactions.</p>
            </li>
            <li className='services__modal-service'>
              <i className='bx bx-check-circle services__modal-icon'></i>
              <p>I position your company brand.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
