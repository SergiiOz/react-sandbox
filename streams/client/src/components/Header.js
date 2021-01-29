import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div>
        <Link to="/"> Streamy</Link>
      </div>

      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Link to="/streams/show"> All Streams</Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/">
            <GoogleAuth />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
