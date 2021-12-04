import { sendRequest } from 'services/fetch';
import { ENDPOINTS } from '../../constants';

export const fetchMakes = () => sendRequest(ENDPOINTS.makes.url, ENDPOINTS.makes.method);

export const fetchModels = (make) => sendRequest(ENDPOINTS.models.url, ENDPOINTS.models.method, { make });

export const fetchVehicles = (make, model) => sendRequest(ENDPOINTS.vehicles.url, ENDPOINTS.vehicles.method, { make, model });

export const filterItems = (item, searchText) => item.match(new RegExp(searchText, 'i'));

export const filterVehicles = (item, searchText) => Object.values(item).some(value => String(value).match(new RegExp(searchText, 'i')));
