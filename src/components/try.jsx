// import { useDispatch, useSelector } from 'react-redux';
// import { nextSlide, prevSlide } from '../rtk/Sliderslice';
// import { useEffect } from 'react';

// function Slider() {
//     const dispatch = useDispatch();
//     const { currentSlide } = useSelector((state) => state.slider);

//     // useEffect(() => {
//     //     console.log("Current slide updated: ", currentSlide);
//     // }, [currentSlide]); /currentSlide

//     useEffect(() => {
//         const interval = setInterval(() => {
//             dispatch(nextSlide());
//         }, 3000); // سرعة السلايدر 

//         return () => clearInterval(interval); //عند إلغاء التركيب
//     }, [dispatch]);

//     const images = [
//         "/images/imag1.jpeg",
//         "/images/imag2.jpg",
//        "/images/imag3.jpg",
//     ];
//     console.log(images)
//     return (
//     <>
// <div className=" w-full h-auto  md:h-96  flex items-center border border-red-500">
// {/* Slider Images */}
// <div className=" relative  xl:w-10/12 mx-auto  mt-0 overflow-hidden  ">
//             <div className="w-full h-96  flex  overflow-hidden  transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//             {images.map((image, index) => {
//                 console.log("Image path: ", image);
//                  return (
//                         <img
//                             key={index}
//                             src={image}
//                             alt={`Slide ${index }`}
//                             className=" h-auto md:w-full  object-fill  md:object-cover  border-2 border-red-500 "
//                         />
//                    )} )}
           
//                     </div>
//                     {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
// <div className=" md:absolute   flex-wrap  md:left-24 md:top-10  m-auto bg-white bg-opacity-80 p-4   rounded-lg md:shadow-lg  w-full md:max-w-sm z-10">
// <h2 className="text-3xl font-bold mb-4">Skills that drive you forward</h2>
// <p className="text-gray-700 mb-6">
//     Technology and the world of work change fast – with us, you’re faster. Get the skills to achieve goals and stay competitive.
// </p>
// <div className="flex md:flex-row space-x-0 md:space-x-4 justify-center flex-col">
//     <button className="bg-black text-white md:py-2 md:px-4 p-8   rounded hover:bg-gray-800 transition duration-300">Plan for individuals</button>
//     <button className="border border-black  md:py-2  ml-0  md:px-4 p-8 rounded hover:bg-gray-200 transition duration-300">Plans for organizations</button>
// </div>
// </div>

// {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}


// {/* Navigation Buttons */}

//          <button onClick={
//             () => {dispatch(prevSlide())
// console.log("Current slide: ", currentSlide);} // تحقق مما إذا كان يتم تحديث الشريحة
// }
//                  className="absolute  top-36 left-2 bg-white text-black p-2 rounded-full hover:bg-gray-500 transition duration-300">
//                                       &#9664;
 
//     </button>
//         <button onClick={
//             () => {dispatch(nextSlide())
//         console.log("Current slide: ", currentSlide);}
//         }
//                  className="absolute top-36   right-2 bg-white text-black p-2 rounded-full hover:bg-gray-500 transition duration-300">

//                                        &#9654;

//     </button>  
   







    

// </div>



// </div>

//         </>
//     );
// }

// export default Slider;






// ظظظظظظظظظظظظظظظظظظظظظظظظظمهم   مهمه
// import { useDispatch, useSelector } from 'react-redux';
// import { nextSlide, prevSlide } from '../rtk/Sliderslice';
// import { Fragment } from 'react';

// function Slider() {
//     const dispatch = useDispatch();
//     const { currentSlide } = useSelector((state) => state.slider);
  
//     const images = [
//         "/images/imag1.jpeg",
//         "/images/imag2.jpg",
//         "/images/imag3.jpg",
//     ];

//     return (
//         <>
//             <div className="w-full h-auto flex items-center mb-10">
//                 {/* Slider Images */}
//                 <div className="relative xl:w-10/12 mx-auto h-auto overflow-hidden flex">
//                     <div className="w-full flex transition-transform duration-1000 ease-in-out" 
//                          style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${images.length * 100}%` }}>
//                         {images.map((image, index) => {
//                             return (
//                                 <Fragment key={index}>
//                                     <img
//                                         src={image}
//                                         alt={`Slide ${index}`}
//                                         className="w-full h-auto md:h-96 object-cover"
//                                     />
                                    
//                                     {/* Overlay Content */}
//                                     <div className="absolute md:flex flex-wrap md:left-24 md:top-10 m-auto bg-white bg-opacity-80 p-4 rounded-lg shadow-lg w-full md:max-w-sm z-10 hidden md:block">
//                                         <h2 className="text-3xl font-bold mb-4">Skills that drive you forward</h2>
//                                         <p className="text-gray-700 mb-6">
//                                             Technology and the world of work change fast – with us, you’re faster. Get the skills to achieve goals and stay competitive.
//                                         </p>
//                                         <div className="flex md:flex-row space-x-0 md:space-x-4 justify-center flex-col">
//                                             <button className="bg-black text-white md:py-2 md:px-4 p-8 rounded hover:bg-gray-800 transition duration-300">Plan for individuals</button>
//                                             <button className="border border-black md:py-2 ml-0 md:px-4 p-8 rounded hover:bg-gray-200 transition duration-300">Plans for organizations</button>
//                                         </div>
//                                     </div>

//                                     {/* Content for small screens */}
//                                     <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
//                                         <h2 className="text-lg font-bold mb-2">Skills that drive you forward</h2>
//                                         <p className="text-gray-700 mb-4">
//                                             Technology and the world of work change fast – with us, you’re faster. Get the skills to achieve goals and stay competitive.
//                                         </p>
//                                         <div className="flex flex-col space-y-2">
//                                             <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">Plan for individuals</button>
//                                             <button className="border border-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300">Plans for organizations</button>
//                                         </div>
//                                     </div>
//                                 </Fragment>
//                             );
//                         })}
//                     </div>

//                     {/* Navigation Buttons */}
//                     <button onClick={() => { dispatch(prevSlide()); }} className="absolute top-1/2 left-2 bg-white text-black p-2 rounded-full hover:bg-gray-500 transition duration-300 transform -translate-y-1/2">
//                         &#9664;
//                     </button>
//                     <button onClick={() => { dispatch(nextSlide()); }} className="absolute top-1/2 right-2 bg-white text-black p-2 rounded-full hover:bg-gray-500 transition duration-300 transform -translate-y-1/2">
//                         &#9654;
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Slider;
