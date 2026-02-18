import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-black/90 w-full h-screen items-center overflow-hidden py-16 px-6 ">
      <div className="md:mx-auto  mx-9  gap-4 font-semibold text-white rounded-2xl border border-gray-500 py-12 flex flex-col bg-black/60 text-center">
        <h5 className="text-base text-green-500 ">Let's Start</h5>
        <h2 className="text-2xl ">How do you plan to use Notetaker?</h2>
        <h4 className="text-base text-white/50 mb-12">
          We'll redirect you to the best setup for your needs.
        </h4>

        <button
          onClick={() => navigate("/signin")}
          className="items-center justify-around group transition-all duration-300 hover:border-green-500 flex gap-5 border border-white/45 py-6 px-14 rounded-2xl mx-auto"
        >
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
          <h3>For my productivity</h3>
          <FaArrowRightLong className="transition-transform duration-300 transform group-hover:translate-x-1.5" />
        </button>

        <button
          onClick={() => navigate("/signin")}
          className="items-center justify-around group transition-all duration-300 hover:border-green-500 flex gap-5  border border-white/45 py-6 px-24 rounded-2xl mx-auto"
        >
          <div
            className=" space-y-1 
          "
          >
            <div className="h-3 w-3 ml-2 rounded-full bg-orange-500"></div>
            <div className="h-3 w-3  rounded-full bg-orange-500"></div>
          </div>
          <h3>For work</h3>
          <FaArrowRightLong className="transition-transform duration-300 transform group-hover:translate-x-1.5" />
        </button>
      </div>
    </main>
  );
};

export default LandingPage;
