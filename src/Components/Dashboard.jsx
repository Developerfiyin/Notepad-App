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
      </div>
    </section>
  );
};

export default Dashboard;
