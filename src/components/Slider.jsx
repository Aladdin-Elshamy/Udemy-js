import { useDispatch, useSelector } from "react-redux";
import { nextSlide, prevSlide } from "../rtk/Sliderslice";
import { useEffect } from "react";
import Cardslidercontent from "../ui/Cardslidercontent";
import { images, slideContents } from "../data/Sliderdata";
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

  const { title, description, buttons } = slideContents[currentSlide];

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
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="w-full md:h-96 object-cover flex"
              />
            ))}
          </div>
          <div className="hidden md:block md:absolute md:left-24 md:top-10 m-auto bg-white bg-opacity-80 p-4 rounded-lg md:shadow-lg w-full md:max-w-sm z-10 ">
            <Cardslidercontent
              title={title}
              description={description}
              buttons={buttons}
            />
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

      {/* for small screens */}
      <div className="mt-10 p-4 md:hidden flex flex-col">
        <Cardslidercontent
          title={title}
          description={description}
          buttons={buttons}
        />
      </div>
    </>
  );
}

export default Slider;
