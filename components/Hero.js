import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            Disruptive Facilities Service Solution
 <br className="lg:flex hidden"/>    <br className="lg:flex hidden" /> 
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-black-500">
            Choose the best  supplier or customer for you  to save working capital <br  className="lg:flex hidden"/> access  and desktop
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">Get Started</button>
          </div>
          <img src="/assets/eccubelogo2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;


