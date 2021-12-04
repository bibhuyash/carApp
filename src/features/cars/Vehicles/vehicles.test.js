import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import store from '../../../store';

import Vehicles from './Vehicles';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders vehicles section', () => {
  act(() => {
    render(<Provider store={store}><Router><Vehicles /></Router></Provider>, container);
  });
  expect(container.querySelector('header').textContent).toBe('Vehicles');
});
