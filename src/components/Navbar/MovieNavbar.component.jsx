import React, { useContext } from "react";
import { BiShareAlt, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";
import { MovieContext } from "../../Context/Movie.context";

const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className=" text-black flex items-center justify-between px-3 py-2 border-gray-300 border-b-2">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
function NavLg() {
  return (
    <>
      <div className="w-full flex justify-between gap-3">
        <div className="w-1/2 flex gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt=""
              srcset=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full bg-white rounded-md flex justify-center items-center gap-3 px-3 py-2">
            <BiSearch className="w-6 h-6" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search for movies, events, plays, sports and activities"
              className="bg-transparent border-none outline-none w-full"
            />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-gray-200 text-base flex items-center hover:text-white cursor-pointer">
            Delhi NCR <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white rounded-md px-2 py-1 cursor-pointer">
            Sign In
          </button>
          <div className="w-8 h-8">
          <BiMenu className="w-full h-full text-white cursor-pointer" />
        </div>
        </div>
      </div>
    </>
  );
}

const MovieNavbar = () => {
  return (
    <>
      <div className="">
        <div className="lg:hidden w-full">
          <NavSm />
          
        </div>
        <div className="hidden bg-gray-900 lg:flex px-3 py-3">
          <NavLg />
        </div>
      </div>
    </>
  );
};

export default MovieNavbar;
