import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import Header from './index';

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

it('renders header with title', () => {
  const title = 'test_title';
  act(() => {
    render(<Router><Header title={title} /></Router>, container);
  });
  expect(container.querySelector('header').textContent).toBe(title);
});
