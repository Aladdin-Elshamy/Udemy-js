
import "./App.css";
import Home from "./pages/Home";
import React from 'react'
import Courses from './components/CoursesSection/courses'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Home />
      <Courses/>
      
      {/* <Slider/> */}

    </>
  );
}


export default App;

