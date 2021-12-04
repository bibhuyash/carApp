import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { generateUUID } from 'utils/helpers';
import { fetchMakes, fetchModels, fetchVehicles } from './cars.service';

const generateVehiclesKey = (make, model) => `${make}/${model}`;

export const selectMakes = (state) => state.cars.makes;

export const selectModels = (state, make) => state.cars.models[make];

export const selectVehicles = (state, make, model) => state.cars.vehicles[generateVehiclesKey(make, model)];

export const getMakes = createAsyncThunk(
  'cars/makes',
  fetchMakes,
);

export const getModels = createAsyncThunk(
  'cars/models',
  async (make, { getState }) => {
    const storedModels = selectModels(getState(), make);
    if (storedModels) {
      return { make, models: storedModels };
    }
    const models = await fetchModels(make);
    return {
      make,
      models,
    };
  },
);

export const getVehicles = createAsyncThunk(
  'cars/vehicles',
  async ({ make, model }, { getState }) => {
    const storedVehicles = selectVehicles(getState(), make, model);
    if (storedVehicles) {
      return { make, model, vehicles: storedVehicles };
    }
    const vehicles = await fetchVehicles(make, model);
    return {
      make,
      model,
      vehicles: vehicles.map(vehicle => ({ ...vehicle, id: generateUUID() })),
    };
  },
);


export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    areMakesFetching: false,
    areModelsFetching: false,
    areVehiclesFetching: false,
    makesError: null,
    modelsError: null,
    vehiclesError: null,
    makes: null,
    models: {},
    vehicles: {},
  },
  extraReducers: {
    [getMakes.pending]: (state) => {
      state.areMakesFetching = true;
      state.makesError = null;
    },
    [getMakes.fulfilled]: (state, { payload }) => {
      state.areMakesFetching = false;
      state.makes = payload;
    },
    [getMakes.rejected]: (state, { error }) => {
      state.areMakesFetching = false;
      state.makesError = error;
    },
    [getModels.pending]: (state) => {
      state.areModelsFetching = true;
      state.modelsError = null;
    },
    [getModels.fulfilled]: (state, { payload }) => {
      state.areModelsFetching = false;
      state.models[payload.make] = payload.models;
    },
    [getModels.rejected]: (state, { error }) => {
      state.areModelsFetching = false;
      state.modelsError = error;
    },
    [getVehicles.pending]: (state) => {
      state.areVehiclesFetching = true;
      state.vehiclesError = null;
    },
    [getVehicles.fulfilled]: (state, { payload }) => {
      state.vehicles[generateVehiclesKey(payload.make, payload.model)] = payload.vehicles;
      state.areVehiclesFetching = false;
    },
    [getVehicles.rejected]: (state, { error }) => {
      state.areVehiclesFetching = false;
      state.vehiclesError = error;
    },
  },
});


export default carsSlice.reducer;
