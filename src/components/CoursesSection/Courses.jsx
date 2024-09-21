import React from "react";
import CoursessElements from "../../elements/CoursessElements";
import BoxContent from "../../ui/CorursessUi/BoxContent";
import ButtonsUI from "../../ui/CorursessUi/ButtonsUI";
import FilterData from "../../FilterData.json"

console.log(FilterData);


export default function Courses() {
 
  
  return (
      <div className="container mx-auto mt-12  px-2 py-5">
      <CoursessElements />
      <BoxContent   />
      
      {/* <Slider/> */}
    

     
      </div>
    
  );
}
