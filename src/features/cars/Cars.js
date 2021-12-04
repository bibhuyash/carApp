import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/Header';

import Makes from './Makes';
import styles from './Cars.module.css';

const Cars = () => (
  <Router>
    <Header title="Your Car" />
    <main className={styles.cars}>
      <Makes/>
    </main>
  </Router>
);

export default Cars;
