import React from 'react';

import styles from './Button.module.scss';

const Button = ({ nameButton = 'Click', onButtonClick, styleButton }) => {
  return (
    <>
      <button
        className={styles.buttonDefault}
        onClick={onButtonClick}
        style={styleButton}
      >
        {nameButton}
      </button>
    </>
  );
};

export default Button;
