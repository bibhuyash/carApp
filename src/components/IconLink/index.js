import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './IconLink.module.css';

const IconLink = ({ text, url, Icon }) => (
  <div className={styles.container}>
    <span>{text}</span>
    <Link to={url}><Icon/></Link>
  </div>
);

IconLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
};

export default IconLink;
