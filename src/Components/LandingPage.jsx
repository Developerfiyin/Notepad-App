import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <main className="bg-black w-full h-screen items-center py-16 px-6">
      <div className="mx-100 gap-4 font-semibold text-white rounded-xl border border-gray-500 py-12 flex flex-col bg-black text-center">
        <h5 className="text-base text-green-500 ">Let's Start</h5>
        <h2 className="text-2xl ">How do you plan to use Notetaker?</h2>
        <h4 className="text-base text-white/50">
          We'll redirect you to the best setup for your needs.
        </h4>

        <button className="items-center justify-around hover:border-green-500 flex gap-5 border border-white/45 py-6 px-10 rounded-2xl mx-auto">
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
          <h3>For my productivity</h3>
          <FaArrowRightLong />
        </button>
      </div>
    </main>
  );
};

export default LandingPage;
