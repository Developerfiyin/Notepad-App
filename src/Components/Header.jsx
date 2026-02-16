import { GiHamburgerMenu } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { MdOutlineViewAgenda } from "react-icons/md";
import { MdGridView } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { IoTrash } from "react-icons/io5";

import { useState } from "react";

import image1 from "../assets/image1.png";
const Header = () => {
  // false = List view, true = Grid view
  const [isGrid, setIsGrid] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [bulb, setBulb] = useState(false);

  return (
    <section className="bg-black border-white border-b-2 text-white sticky top-0 z-50">
      <div className="flex mx-auto px-4 h-20 items-center max-w-7xl justify-between gap-5 ">
        <button onClick={() => setIsOpen(!isOpen)} type="button">
          <GiHamburgerMenu size={30} color="white" />
        </button>

        <img src={image1} alt="THE NOTE IMAGES" className="" />
        <h2 className="font- medium text-2xl">Notetaker App</h2>

        <label className="relative block">
          <LuSearch
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-120 h-11 pl-19 focus:outline-green-400 border-white/55 pr-3 border rounded-lg text-sm leading-none"
          />
        </label>

        <button
          
     


