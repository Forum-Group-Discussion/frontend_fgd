import { NavLink } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";
import { RiDashboard3Line, RiUser3Line, RiSettings3Line, RiListSettingsLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import HomeAdminPage from "./NavbarAdmin";
import { useNavigate } from "react-router-dom";
import Logout from "../../../assets/img/Admin/Logout.png";
import { removeUserSession } from "../../../utils/helpers";
import Swal from "sweetalert2";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Sidebar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  // useEffect(()=>{
  //   console.log(nav)
  // })
  const handleNav = () => {
    setNav(!nav);
  };

  // handle click event of logout button
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure to Logout?",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      background: "#151921",
      color: "#fff",
      confirmButtonColor: "#FF3D00",
      cancelButtonColor: "#D91E11",
      confirmButtonText: "Yes, Logout!",
      focusConfirm: false,
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
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
            removeUserSession(navigate);
          },
        });
      }
    });
  };
  return (
    <div>
      <div className="lg:hidden max-w-[1000px] w-[90%] mx-auto lg:max-w-0 lg:w-[100%] z-50">
        <div className="flex justify-center gap-6">
          <div id="nav-toggler" onClick={handleNav} className="lg:hidden flex flex-col justify-center">
            <AiOutlineMenu size={25} className="fill-white" />
          </div>
          <ul id="nav-item" className={nav ? "bg-primary-grey text-white fixed left-0 w-[60%] sm:w-[40%] h-full border-r border-r-primary-grey ease-in-out duration-500 top-0 lg:hidden z-50" : "ease-in-out duration-500 fixed left-[-100%] z-50"}>
            <AiOutlineClose size={25} onClick={handleNav} className="fill-white absolute top-6 right-6" />
            <li id="nav-home" className="p-3 mt-[30%]" >
              <NavLink to="/admin/home" >
                <div className="side-menu flex flex-row items-center">
                  <RiDashboard3Line size={20} className="mr-4" />
                  Dashboard
                </div>
              </NavLink>
            </li>
            <li id="nav-kelola-user" className="p-3">
              <NavLink to="/KelolaUser">
                <div className="side-menu flex flex-row items-center">
                  <RiUser3Line size={20} className="mr-4" />
                  Kelola User
                </div>
              </NavLink>
            </li>
            <li id="nav-kelola-thread" className="p-3">
              <NavLink to="/KelolaThread">
                <div className="side-menu flex flex-row items-center">
                  <RiListSettingsLine size={20} className="mr-4" />
                  Kelola Thread
                </div>
              </NavLink>
            </li>

            <li id="nav-setting" className="p-3">
              <NavLink to="/Setting">
                <div className="side-menu flex flex-row items-center">
                  <RiSettings3Line size={20} className="mr-4" />
                  Setting
                </div>
              </NavLink>
            </li>

            <li id="logout-button" className="p-3 mt-[170px] flex justify-center logout ">
              <div className="flex flex-row items-center">
                <img src={Logout} className="mr-4 w-[20px]" alt="Icon_logout" />
                <input type="submit" onClick={handleLogout} value="Logout" className="logout" />
              </div>
            </li>
          </ul>
          <HomeAdminPage />
        </div>
      </div>
      <div className="hidden lg:contents">
        <HomeAdminPage />
        <div className="flex h-screen bg-primary-grey fixed top-0 w-[250px]">
          <div className="flex-col ">
            <div id="logo" className="p-5">
              <img src={Logo} className="sm:h-[50px] ml-5" alt="logo found" />
            </div>
            <div id="sidebar" className="flex flex-col ">
              <ul id="sidebar-item" className="min-w-full mt-20 text-white ">
                <li id="sidebar-home" className="p-3" >
                  <NavLink to="/admin/home" >
                    <div className="side-menu flex flex-row items-center">
                      <RiDashboard3Line size={20} className="mr-4" />
                      Dashboard
                    </div>
                  </NavLink>
                </li>
                <li id="sidebar-kelola-user" className="p-3">
                  <NavLink to="/KelolaUser">
                    <div className="side-menu flex flex-row items-center">
                      <RiUser3Line size={20} className="mr-4" />
                      Kelola User
                    </div>
                  </NavLink>
                </li>
                <li id="sidebar-kelola-thread" className="p-3">
                  <NavLink to="/KelolaThread">
                    <div className="side-menu flex flex-row items-center">
                      <RiListSettingsLine size={20} className="mr-4" />
                      Kelola Thread
                    </div>
                  </NavLink>
                </li>

                <li id="sidebar-setting" className="p-3">
                  <NavLink to="/Setting">
                    <div className="side-menu flex flex-row items-center">
                      <RiSettings3Line size={20} className="mr-4" />
                      Setting
                    </div>
                  </NavLink>
                </li>

                <li id="sidebar-logout-button" className="p-3 mt-[170px] flex justify-center logout ">
                  <div className="flex flex-row items-center">
                    <img src={Logout} className="mr-4 w-[20px]" alt="Icon_logout" />
                    <input type="submit" onClick={handleLogout} value="Logout" className="logout" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
