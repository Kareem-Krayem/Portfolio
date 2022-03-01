import React, { useState } from 'react';

function Service({ title, icon, description }) {
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
  const modalData = description.map((d) => {
    return (
      <li className='services__modal-service' key={d}>
        <i className='bx bx-check-circle services__modal-icon'></i>
        <p>{d}</p>
      </li>
    );
  });
  return (
    <div className='services__content'>
      <div>
        <i className={`bx ${icon} services__icon`}></i>
        <h3 className='services__title'>{title}</h3>
      </div>

      <span
        className='
           button--flex button--small button--link
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
          <ul className='services__modal-services grid'>{modalData}</ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
