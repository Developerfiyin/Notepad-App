import { GiHamburgerMenu } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { MdOutlineViewAgenda } from "react-icons/md";
import { MdGridView } from "react-icons/md";
import { useState } from "react";

import image1 from "../assets/image1.png";
const Header = () => {
  // false = List view, true = Grid view
  const [isGrid, setIsGrid] = useState(false);

  return (
    <section className="bg-black border-white/55 border-b  text-white sticky top-0 z-50">
      <div className="flex mx-auto px-4 h-20 items-center max-w-7xl justify-evenly gap-5 ">
        <GiHamburgerMenu size={30} color="white" />
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
    </section>
  );
};

export default Header;
