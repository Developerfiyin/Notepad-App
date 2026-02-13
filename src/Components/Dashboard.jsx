import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import image1 from "../assets/image1.png";

const Dashboard = () => {
  return (
    <section className="bg-black py-10 px-6 ">
      <div className="flex gap-5 border-b border-white/55">
        <GiHamburgerMenu size={30} color="white" />
        <img src={image1} alt="THE NOTE IMAGES" />

      </div>
    </section>
  );
};

export default Dashboard;
