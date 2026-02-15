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
    <section className="bg-black border-white border-b   text-white sticky top-0 z-50">
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
          onClick={() => setIsGrid(!isGrid)}
          className=" ml-8 rounded-lg hover:bg-black/65  transition-colors  outline-none"
          aria-label="Toggle View"
        >
          {isGrid ? (
            <MdOutlineViewAgenda
              size={30}
              className=" hover:text-white hover:bg-white/20 hover:py-0.5 hover:rounded-full hover:px-0.5 text-white/55 "
            />
          ) : (
            <MdGridView
              size={30}
              className=" hover:text-white text-white/55 "
            />
          )}
        </button>

        <IoSettings
          size={30}
          className="ml-5 mt-2 text-white/55 hover:text-white "
        />
      </div>

      <main className="h-screen max-w-7xl">
        <div
          className={`${isOpen ? "block" : "hidden"} bg-black/55 h-full space-y-0.5  flex-col w-1/4  `}
        >
          <div className="flex p-2  rounded-r-full gap-5 bg-green-400 ">
            <FaLightbulb
              size={24}
              className=" mx-10 h-10 w-10 p-1 text-white/80 rounded-full bg-yellow-400 "
            />
            <button className="font-semibold text-xl">Notes</button>
          </div>

          <div className=" hover:bg-white/20 p-2 rounded-r-full gap-5 flex ">
            <FaBell size={24} className="mx-10 h-10 w-10 p-1 text-white/80 " />
            <button className="font-semibold text-xl">Notification</button>
          </div>

          <div className="flex gap-5 p-2 rounded-r-full hover:bg-white/20">
            <MdEdit size={24} className="mx-10 h-10 w-10 p-1 text-white/80  " />
            <button className="font-semibold  text-xl"> Edit Label </button>
          </div>

          <div className="flex gap-5 p-2 rounded-r-full hover:bg-white/20">
            <button type="button">
              <IoMdArchive
                size={24}
                className="mx-10 h-10 w-10 p-1 text-white/80"
              />
            </button>
            <button className="font-semibold text-xl"> Archive </button>
          </div>

          <div className="flex gap-5 p-2 rounded-r-full hover:bg-white/20">
            <IoTrash size={24} className="mx-10 h-10 w-10 p-1 text-white/80 " />
            <button className="font-semibold text-xl"> Trash </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Header;
