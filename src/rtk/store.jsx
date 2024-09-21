import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './Sliderslice'

const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});

export default store;