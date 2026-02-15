import React, { useState } from "react";
// Note the '/fa' at the end - that's how you pick your specific library
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi"; // Heroicons version for sea

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-600">NoteFlow</div>

        
        <div className="hidden sm:block relative w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <HiOutlineSearch size={20} />
          </div>
          <input
            className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search..."
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 focus:outline-none" >
          {/* Swapping the icon based on state */}
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-t px-4 py-4 space-y-4`}
      >
        <a href="#home" className="block text-gray-700 hover:text-indigo-600">
          Home
        </a>
        <a href="#about" className="block text-gray-700 hover:text-indigo-600">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
