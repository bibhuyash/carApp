import { configureStore } from '@reduxjs/toolkit';
import cars from './features/cars/carsSlice';

export default configureStore({
  reducer: {
    cars,
  },
});
