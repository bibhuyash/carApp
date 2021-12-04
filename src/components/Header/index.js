import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = ({ title }) => (
  <header className={styles.carsHeader}>
    <Link to="/">{title}</Link>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
