import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      // if click on background - modal window off and redirect to '/'
      onClick={props.onDismiss}
      className={styles.modalWrapper}
    >
      <div
        //stopPropagation() - stop bubbling
        onClick={(e) => e.stopPropagation()}
        className={styles.body}
      >
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.content}>{props.description}</div>
        <div className={styles.actions}>{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};

export default Modal;
