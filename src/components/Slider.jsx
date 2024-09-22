import { useDispatch, useSelector } from 'react-redux';
import { nextSlide, prevSlide } from '../rtk/Sliderslice';
import { Fragment } from 'react';
import Cardslider from '../ui/Cardslider';
// import { useEffect } from 'react';

function Slider() {
    const dispatch = useDispatch();
    const { currentSlide } = useSelector((state) => state.slider);
  
 
    const images = [
        "/images/imag1.jpeg",
        "/images/imag2.jpg",
       "/images/imag3.jpg",
    ];
   
    return (
    <>
            <div className=" w-full h-auto  md:h-96  flex items-center mb-10">
{/* Slider Images */}
         <div className=" relative  xl:w-10/12 mx-auto  h-auto overflow-hidden flex ">


            <div className="w-full md:h-96  h-auto flex     transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)`,width: `${images.length * 100}%`}}>
            {images.map((image, index) => {
                 return (
                    <Fragment  key={index}>
                        <img
                           
                            src={image}
                            alt={`Slide ${index}`}
                            className=" w-full md:h-96 object-cover flex"
                            
                             
                        />
    
        <div  className="  md:absolute   md:left-24 md:top-10  m-auto bg-white bg-opacity-80 p-4   rounded-lg md:shadow-lg  w-full md:max-w-sm z-10">
          <Cardslider />
       </div>

    
           

</Fragment>
                   )} )}
           
     </div>
       

{/* Navigation Buttons */}

         <button onClick={
            () => {dispatch(prevSlide())
                  console.log("Current slide: ", currentSlide);} 
}
                 className="absolute  top-36 left-2 bg-white text-black p-2 rounded-full hover:bg-gray-500 transition duration-300">
                                      &#9664;
 
    </button>
        <button onClick={
            () => {dispatch(nextSlide())
        console.log("Current slide: ", currentSlide);}
        }
                 className="absolute top-36   right-2 bg-white text-black p-2 rounded-full hover:bg-gray-500 transition duration-300">

                                       &#9654;

    </button>  
      

</div>

 </div>

        </>
    );
}

export default Slider;
