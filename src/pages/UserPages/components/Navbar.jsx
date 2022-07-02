import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillPlusCircle } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa"
import Logo from "../../../assets/img/logo.png";
import { Icon } from "react-icons-kit";
import { pencil } from "react-icons-kit/oct/pencil";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleNav = () => {
    setNav(!nav);
  };
  const handleClick = () => {
    setOpen(!open)
  }
  const handleLogOut = () => {
    navigate("/login");
    Swal.fire({
      toast: true,
      icon: "success",
      title: "Log Out Successfully",
      animation: false,
      background: "#222834",
      color: "#18B015",
      position: "bottom-end",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  }

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
          <a href="/user/home" className="p-4 text-lg">Home</a>
          <a href="/user/topic" className="p-4 text-lg">Topic</a>
          <li>
            <button onClick={handleClick} className="p-4 text-lg">Account</button>
            <div id="dropdown" className={ open ? "absolute z-10 bg-primary-black divide-y divide-gray-100 rounded shadow w-44" : "absolute z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44"}>
              <ul className="py-1 text-sm text-white border-solid border-2 border-gray-500 rounded">
                <li className="hover:bg-secondary-orange">
                  <a href="/user/account" className="block px-4 py-2">Profile</a>
                </li>
                <li className="hover:bg-secondary-orange">
                  <button onClick={handleLogOut} className="block px-4 py-2 w-full text-left">Log Out</button>
                </li>
              </ul>
            </div>
          </li>
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
        <a href="/user/home">
          <li className="p-4 border-b border-gray-600 text-white">Home</li>
        </a>
        <a href="/user/topic">
          <li className="p-4 border-b border-gray-600 text-white">Topic</li>
        </a>
        <div>
          <div className="flex text-white">
            <button onClick={handleClick} className="p-4 text-white">Accounts</button>
            <FaGreaterThan size={12} className={open ? "opacity-0" : "my-auto"}></FaGreaterThan>
          </div>
          <div id="dropdown" className={ open ? "mx-auto z-10" : "z-10 hidden divide-y divide-gray-100"}>
            <ul className="py-1 text-sm text-white">
              <li>
                <a href="/user/account" className="block px-4 py-2"> &gt; Profile</a>
              </li>
              <li>
                <button onClick={handleLogOut} className="block px-4 py-2"> &gt; Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
