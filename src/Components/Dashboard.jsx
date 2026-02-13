import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import image1 from "../assets/image1.png";

const Dashboard = () => {
  return (
    <section className="bg-black py-10 px-6 text-white">
      <div className="flex gap-5 border-b border-white/55">
        <GiHamburgerMenu size={30} color="white" />
        <img src={image1} alt="THE NOTE IMAGES" className="mb-9" />
        <h2 className="font-medium text-2xl">Notetaker App</h2>
        <input
          name="title"
          placeholder="eg, Favour can be a goat sometimes.."
          className='w-100 h-11 pl-10 focus:outline-green-400 border-white/60 pr-3 border rounded-md text-sm leading-none"'
        />
      </div>
    </section>
  );
};

export default Dashboard;
