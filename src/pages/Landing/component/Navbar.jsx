import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../../assets/img/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div id="navbar" className="bg-primary-black w-full border-b border-b-primary-grey fixed z-10">
      <div id="nav-box" className="grid grid-cols-4 sm:flex sm:justify-between sm:items-center sm:h-20 sm:w-[80%] h-14 mx-auto px-4 text-white">
        <div id="nav-toggler" onClick={handleNav} className="sm:hidden flex flex-col justify-center">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <a href="#">
          <div id="nav-logo" className="flex flex-col justify-center col-span-2">
            <img src={Logo} className="sm:h-[60px] sm:max-h-[none] max-h-[40px] mx-auto sm:mx-[0]" alt="logo found" />
          </div>
        </a>
        <ul id="nav-full" className="hidden sm:flex">
          <a href="#about" className="p-4 text-lg">
            About
          </a>
          <a href="#features" className="p-4 text-lg">
            Features
          </a>
          <a href="#review" className="p-4 text-lg">
            Review
          </a>
        </ul>
      </div>
      <ul id="nav-side" className={nav ? "bg-primary-black fixed left-0 w-[60%] h-full border-r border-r-primary-grey ease-in-out duration-500 top-14 sm:hidden" : "ease-in-out duration-500 fixed left-[-100%]"}>
        <li className="p-4 border-b border-gray-600 text-white">
          <a href="#about">About</a>
        </li>
        <li className="p-4 border-b border-gray-600 text-white">
          <a href="#features">Features</a>
        </li>
        <li className="p-4 text-white">
          <a href="#review">Review</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
