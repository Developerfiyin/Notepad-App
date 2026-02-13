import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";

import image1 from "../assets/image1.png";

const Dashboard = () => {
  return (
    <section className="bg-black py-10 px-6 text-white">
      <div className="flex gap-5 border-b border-white/55">
        <GiHamburgerMenu size={30} color="white" />
        <img src={image1} alt="THE NOTE IMAGES" className="mb-9" />
        <h2 className="font- medium text-2xl">Notetaker App</h2>

        <label className="relative block">
          <LuSearch
            size={18}                                                       
            className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-120 h-11 pl-10 focus:outline-green-400 border-white/55 pr-3 border rounded-md text-sm leading-none"
            

          />
        </label>






    <div className="relative w-full max-w-md">
      {/* 1. The Icon Container */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <LuSearch className="w-5 h-5 text-gray-400" />
      </div>

      {/* 2. The Input Tag */}
      <input
        type="search"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Search notes..."
        required
      />
    </div>
  




      </div>
    </section>
  );
};

export default Dashboard;
