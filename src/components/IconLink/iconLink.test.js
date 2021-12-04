import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import IconLink from './index';

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

it('renders icon link with title', () => {
  const url = 'test_url';
  const title = 'test_text';
  const Icon = () => <span>Icon</span>;
  act(() => {
    render(<Router><IconLink text={title} url={url} Icon={Icon} /></Router>, container);
  });
  expect(container.querySelector('div > span').textContent).toBe(title);
  expect(container.querySelector('a').getAttribute('href')).toBe(`/${url}`);
});
