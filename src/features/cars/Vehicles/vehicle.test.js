import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Vehicle from './Vehicle';

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

it('renders vehicle', () => {
  const vehicle = {
    bodyType: 'Limousine',
    engineCapacity: 1998,
    enginePowerKW: 135,
    enginePowerPS: 184,
    fuelType: 'Hybrid',
    make: 'BMW',
    model: '3er',
  };
  act(() => {
    render(<Vehicle vehicle={vehicle} />, container);
  });
  expect(container.querySelector('[data-testid="types"] > span:first-child').textContent).toBe(vehicle.bodyType);
  expect(container.querySelector('[data-testid="types"] > span:last-child').textContent).toBe(vehicle.fuelType);
  expect(container.querySelector('[data-testid="params"] > span:last-child').textContent)
    .toBe(`${vehicle.engineCapacity} cm³ / ${vehicle.enginePowerKW} kw / ${vehicle.enginePowerPS} ps`);
});
