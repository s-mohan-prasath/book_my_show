import React from "react";
import { BiChevronDown, BiSearch, BiMenu } from "react-icons/bi";

function NavSm() {
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold">
            It All Starts Here !
          </h1>
          <span className="text-gray-400 text-xs flex items-center">
            Delhi NCR <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full text-white" />
        </div>
      </div>
    </>
  );
}
function NavMd() {
  return (
    <>
      <div className="w-10 h-10 mr-3">
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
    </>
  );
}
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

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-900 px-3 py-3">
        <div className="md:hidden w-full">
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </div>
    </>
  );
};

export default Navbar;
