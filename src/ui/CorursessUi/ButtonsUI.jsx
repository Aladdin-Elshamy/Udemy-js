import React, { useState } from "react";
import FilterData from "../../FilterData.json";
import Slider from "react-slick";
import BoxContent from "./BoxContent";
export default function ButtonsUI() {
  //var Slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [items, setitems] = useState(FilterData);
  //set button
  const nameBtn = ["All", ...new Set(FilterData.map((val) => val.name))];

  //filter data
  const filterItems = (name) => {
    if (name === "All") {
      //get all courses
      setitems(FilterData);
    } else {
      //get filter data

      const getfelter = FilterData.filter((item) => item.name === name);
      setitems(getfelter);
    }
  };

  return (
    <>
      <div className=" mt-1 p-3 ml-3 w-fit  md:flex flex-row items-center w-fit   ">
        {nameBtn.map((btn, indx) => (
          <button
            onClick={() => filterItems(btn)}
            key={indx}
            className=" text-sm   me-5 text-primary hover:text-black hover:transition ease-in-out delay-100 md:text-lg"
          >
            {btn}{" "}
          </button>
        ))}
      </div>

      {/* slider div */}

      <div className="cards  ">
        <div className=" container mx-auto py-3  ">
          <Slider {...settings}>
            {items.map((item, index) => {
              return (
                <>
                  <div className="card ">
                    <div className=" items-card   border-1  shadow-md   flex justify-center items-center flex-col  pt-3 ml-2 mt-3 ">
                      <div key={index} className=" ">
                        <img className="w-[150px]" src={item.img} alt="" />
                      </div>
                      <div className=" text-center slider-container text flex flex-col  justify-center items-center p-4 gap-2">
                        <h3> {item.title}</h3>
                        <p> {item.rate} </p>
                      </div>

                      <div className=" details w-fit  md:w-72  p-4  border border-slate-400 bg-slate-100  sm:w-1/2  ">
                        <h1 className=" font-bold text-lg">
                          100 Days of Code: The Complete Python Pro Bootcamp
                        </h1>
                        <p className="text-sm">
                          {" "}
                          <span className="bg-yellow-100 ">
                            Bestseller
                          </span>{" "}
                          <span className="text-green-700 text-xs font-bold">
                            Updated September 2024 56.5
                          </span>{" "}
                          <br />
                          <span className="text-gray-500  text-xs">
                            {" "}
                            22 total hours.All Levels.Subtitles
                          </span>
                          <br />
                          Master Python by building 100 projects in 100 days.
                          Learn data science, automation, build websites, games
                          and apps! You will master the Python programming
                          language by building 100 unique projects over 100
                          days. You will learn automation, game, app and web
                          development, data science and machine learning all
                          using Python. You will be able to program in Python
                          professionall
                        </p>
                        <button className=" rounded-md text-white mt-2  p-2 bg-fuchsia-500 hover:bg-fuchsia-600 w-fit md:w-full    ">
                          Add to Cart{" "}
                        </button>

                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
