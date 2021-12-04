import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Section from './index';

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

it('renders section with title and content', () => {
  const title = 'test_title';
  const content = 'test_content';
  act(() => {
    render(<Section title={title}><span>{content}</span></Section>, container);
  });
  expect(container.querySelector('header').textContent).toBe(title);
  expect(container.querySelector('main').textContent).toBe(content);
});
