import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSlide: 0,
  totalSlides: 3, // عدد الصور
};


const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentSlide = (state.currentSlide + 1) % state.totalSlides;
    },
    prevSlide: (state) => {
      state.currentSlide = (state.currentSlide - 1 + state.totalSlides) % state.totalSlides;
    },
   
  },
});

export const { nextSlide, prevSlide, goToSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
