import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ className, children, title }) => (
  <section className={`${styles.section} ${className}`}>
    <header className={styles.header}>{title}</header>
    <main className={styles.content}>{children}</main>
  </section>
);

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
