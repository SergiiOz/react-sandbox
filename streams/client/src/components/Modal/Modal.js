import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Modal = () => {
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalBody}>
        <h3>Modal Window</h3>
        <div>Lorem Ipsum is simply dummy text of the printing ...</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
