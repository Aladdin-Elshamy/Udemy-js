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
      // إذا كنا في الشريحة 2، لا نفعل شيئًا
      if (state.currentSlide < state.totalSlides - 1) {
        state.currentSlide += 1;
      }
    },
    prevSlide: (state) => {
      // إذا كنا في الشريحة 0، لا نفعل شيئًا
      if (state.currentSlide > 0) {
        state.currentSlide -= 1;
      }
    },
  },
});

export const { nextSlide, prevSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
