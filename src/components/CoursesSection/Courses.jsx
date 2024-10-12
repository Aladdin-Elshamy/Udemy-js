import React from "react";
import CoursessElements from "../../elements/CoursessElements";
import FilterData from "../../FilterData.json"
import ContainerBox from "../../ui/CorursessUi/ContainerBox";

console.log(FilterData);


export default function Courses() {
 
  
  return (
      <div className="container mx-auto mt-12  px-2 py-5">
      <CoursessElements />
      <ContainerBox/>
      {/* <Slider/> */}
    

     
      </div>
    
  );
}
