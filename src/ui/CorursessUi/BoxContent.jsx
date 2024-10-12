import React, { useState } from "react";
import ButtonsUI from "./ButtonsUI";

export default function BoxContent() {
  
  return (
    <>

      
      <div className="Box-content  px-5 space-y-3 mt-3 flex flex-col   ">
      
      {/* <ButtonsUI  /> */}

        <h2 className="  font-bold text-xl text-main  ">
          Expand your career opportunities with Python
        </h2>
        
        <div className=" w-65">
          {" "}
          <p className=" text-main">
            {" "}
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. <br /> Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. <br /> You’ll learn how to build everything from
            games to sites to apps. Choose from a range...
          </p>
        </div>

        <button className="border self-start border-gray-500 p-1 mt-3 hover:bg-slate-300 transition-all delay-100 ease-in ">
          <p> Explore Python </p>
        </button>
      </div>
    </>
  );
}
