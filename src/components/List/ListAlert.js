import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

const ListAlert = ({ Icon, text, iconClassName = '' }) => {
  return (
    <div className={styles.info}>
      <Icon className={`${styles.infoIcon} ${iconClassName}`} />
      <p>{text}</p>
    </div>
  );
}

ListAlert.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired,
  iconClassName: PropTypes.string,
}

export default ListAlert;
