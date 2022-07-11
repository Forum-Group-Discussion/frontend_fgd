import React from "react";
import { RiNotificationLine, RiSearch2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Jokowi from "../../../assets/img/Admin/JOK.png"
import { Link } from "react-router-dom";

function HomeAdminPage() {
  const user = useSelector((state) => state.user.name);

  return (
    <div>
      <div id="nav-top" className="Navbar-admin text-white pt-7 pb-7 lg:ml-[280px] lg:w-[70%] xl:w-[80%]">
        <div className="flex items-center justify-between">
          <div id="nav-greet" className="flex items-center">
            <img src={Jokowi} className="rounded-full w-[50px]" alt="image_user"/>
            <div className="ml-5 text-sm xl:text-base">Admin Page, Welcome {user}!</div>
          </div>
          <div id="nav-item" className="flex items-center">
            <form id="nav-search" className="flex items-center border-solid sm:border rounded-full border-white ">
              <input type="search" className="bg-transparent outline-0 ml-2 sm:p-2 w-0 sm:w-[250px]"/>
              <RiSearch2Line className="mx-3 h-6 w-6"/>
            </form>
            <Link to="/Notifications">
              <button class="relative w-fit flex">
              <div class="absolute inline-block top-0 right-0  left-auto scale-y-100 px-1 text-xs bg-red-600 rounded-full ">5</div>
                <RiNotificationLine id="nav-notification" className="ml-2 sm:ml-5 h-6 w-6 sm:h-8 sm:w-8 "  />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdminPage;
