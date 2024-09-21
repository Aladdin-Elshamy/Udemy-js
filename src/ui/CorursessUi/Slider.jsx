import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import FilterData from "../../FilterData.json"
export default function Slider() {
    const [Slides,setSlides] =useState(FilterData);

  return (
    <div classname="  ">
      <Swiper
        className="container mx-auto mt-5  "
        spaceBetween={50}
        slidesPerView={5}
        navigation={Navigation}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="">
        {Slides.map((indx)=>{
                <SwiperSlide className="bg-slate-600 text-yellow-300 w-3/6 ">
                <img src={indx.img} alt="" />
           </SwiperSlide>
            })}
        <SwiperSlide className="bg-slate-600 text-yellow-300 w-3/6 ">
                
           </SwiperSlide>
         
          
          

         
        </div>
      </Swiper>
    </div>
  );
}
