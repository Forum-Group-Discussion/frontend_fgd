import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillPlusCircle } from "react-icons/ai";
import Logo from "../../../assets/img/logo.png";
import { Icon } from "react-icons-kit";
import { pencil } from "react-icons-kit/oct/pencil";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
        <a href="/#" className="flex flex-col justify-center col-span-2">
          <div id="nav-logo">
            <img src={Logo} className="sm:h-[60px] sm:max-h-[none] max-h-[40px] mx-auto sm:mx-[0]" alt="logo found" />
          </div>
        </a>
        <ul id="nav-full" className="hidden sm:flex">
          <a href="#about" className="p-4 text-lg">
            Home
          </a>
          <a href="#features" className="p-4 text-lg">
            Topic
          </a>
          <a href="#review" className="p-4 text-lg">
            Account
          </a>
        </ul>
        <Link to="/user/create" className="hidden sm:block">
          <div className="flex border-b">
            <div className="mr-2">
              <Icon icon={pencil} />
            </div>
            <span>Create Thread</span>
          </div>
        </Link>
        <Link to="/user/create" className="sm:hidden grid m-auto mr-0">
          <div className="">
            <AiFillPlusCircle size={35}></AiFillPlusCircle>
          </div>
        </Link>
      </div>
      <ul id="nav-side" className={nav ? "bg-primary-black fixed left-0 w-[60%] h-full border-r border-r-primary-grey ease-in-out duration-500 top-14 sm:hidden" : "ease-in-out duration-500 fixed left-[-100%]"}>
        <a href="#about">
          <li className="p-4 border-b border-gray-600 text-white">About</li>
        </a>
        <a href="#features">
          <li className="p-4 border-b border-gray-600 text-white">Features</li>
        </a>
        <a href="#review">
          <li className="p-4 text-white">Review</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
