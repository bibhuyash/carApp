export const HOST = ' http://localhost:8080/api';

export const ENDPOINTS = {
  makes: {
    method: 'GET',
    url: `${HOST}/makes`,
  },
  models: {
    method: 'GET',
    url: `${HOST}/models`,
  },
  vehicles: {
    method: 'GET',
    url: `${HOST}/vehicles`,
  }
};
