import { useDispatch, useSelector } from 'react-redux';
import { nextSlide, prevSlide } from '../rtk/Sliderslice';
import { Fragment } from 'react';
import { useEffect } from 'react';

function Slider() {
    const dispatch = useDispatch();
    const { currentSlide } = useSelector((state) => state.slider);


  
    useEffect(() => {
        const interval = setInterval(() => {
          if (currentSlide === 0) {
            dispatch(nextSlide()); // 0 → 1
          } else if (currentSlide === 1) {
            dispatch(nextSlide()); // 1 → 2
          } else if (currentSlide === 2) {
            dispatch(prevSlide()); // 2 → 1
            setTimeout(() => {
              dispatch(prevSlide()); // 1 → 0
            }, 3000); // تأخير للانتقال إلى 0
          }
        }, 3000); 
    
        return () => clearInterval(interval); // تنظيف عند إلغاء التركيب
      }, [currentSlide, dispatch]);

    const images = [
        "/images/imag1.jpeg",
        "/images/imag2.jpg",
        "/images/imag3.jpg",
    ];

    // محتويات الديفات لكل شريحة
    const slideContents = [
        {
            title: "Skills that drive you forward",
            description: "Technology and the world of work change fast – with us, you’re faster. Get the skills to achieve goals and stay competitive.",
            buttons: [
                { text: "Plan for individuals", link: "#" },
                { text: "Plans for organizations", link: "#" }
            ]
        },
        {
            title: "This podcast is for the leaders",
            description: "And those who will be. Learn to work, lead, and live better with new episodes of Leading Up dropping each Wednesday.",
            buttons: [
                { text: "Listen Now", link: "#" },
                { text: "Listen2 Now", link: "#" }
            ]
        },
        {
            title: "Keep moving up",
            description: "Learn the skills you need to take the next step — and every step after. Courses from E£249.99 through Sept 24.",
            buttons: [
                { text: "Learn More", link: "#" },
                { text: "Join Us", link: "#" }
            ]
        }
    ];
    return (
        <>
            <div className="w-full h-auto md:h-96 flex items-center mb-14 mt-10">
                {/* Slider Images */}
                <div className="relative xl:w-10/12 mx-auto h-auto overflow-hidden flex">
                    <div
                        className="w-full md:h-96 h-auto flex transition-transform duration-1000 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                            width: `${images.length * 100}%`,
                        }}
                    >
                        {images.map((image, index) => (
                            <Fragment key={index}>
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className="w-full md:h-96 object-cover flex"
                                />
                            </Fragment>
                        ))}
                    </div>

                       {/* عرض المحتوى المرتبط بكل شريحة بناءً على الشريحة الحالية */}
                      
                        <div className="hidden  md:block md:absolute   md:left-24 md:top-10  m-auto bg-white bg-opacity-80 p-4   rounded-lg md:shadow-lg  w-full md:max-w-sm z-10">
                            <h2 className="text-3xl font-bold mb-4">
                                {slideContents[currentSlide].title}
                            </h2>
                            <p className="text-gray-700 mb-6">{slideContents[currentSlide].description}</p>
                            <div className="flex   md:flex-row space-x-0 md:space-x-4 justify-center flex-col ">
                            <button 
                            className="bg-black text-white md:py-2 md:px-4 p-8   rounded hover:bg-gray-800 transition duration-300">
                             {slideContents[currentSlide].buttons[0].text}</button>
                            <button 
                            className="border border-black  md:py-2  ml-0  md:px-4 p-8 rounded hover:bg-gray-200 transition duration-300">
                            {slideContents[currentSlide].buttons[1].text}</button>
                          
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                  
                    <button
                        onClick={() => {
                            dispatch(prevSlide());
                        }}
                        className="absolute md:top-36  top-24 left-2 bg-white text-black p-2 rounded-full hover:bg-gray-500 transition duration-300"
                    >
                        &#9664;
                    </button>
                    <button
                        onClick={() => {
                            dispatch(nextSlide());
                        }}
                        className="absolute md:top-36 top-24 right-2 bg-white text-black p-2 rounded-full hover:bg-gray-500 transition duration-300"
                    >
                        &#9654;
                    </button>

                   
                </div>
            </div>

            {/* UI for small screens */}
            <div className="mt-10 p-4 md:hidden flex flex-col">


                 <h2 className="text-3xl font-bold mb-4">
                                {slideContents[currentSlide].title}
                            </h2>
                            <p className="text-gray-700 mb-6">{slideContents[currentSlide].description}</p>
                            <div className="flex   md:flex-row space-x-0 md:space-x-4 justify-center flex-col ">
                            <button 
                            className="bg-black text-white md:py-2 md:px-4 p-8   rounded hover:bg-gray-800 transition duration-300">
                             {slideContents[currentSlide].buttons[0].text}</button>
                            <button 
                            className="border border-black  md:py-2  ml-0  md:px-4 p-8 rounded hover:bg-gray-200 transition duration-300">
                            {slideContents[currentSlide].buttons[1].text}</button>
                          </div>


            </div>
        </>
    );
}

export default Slider;
