import React from 'react';
import ReactDOM from 'react-dom';
import Cars from './features/cars/Cars';
import store from './store';
import { Provider } from 'react-redux';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Cars />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
