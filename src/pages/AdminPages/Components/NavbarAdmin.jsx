import React from "react";
import { RiNotificationLine, RiSearch2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Jokowi from "../../../assets/img/Admin/JOK.png"

function HomeAdminPage() {
  const user = useSelector((state) => state.user.name);

  return (
    <div>
      <div className="Navbar-admin text-white pt-7 pb-7 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <img src={Jokowi} className="rounded-full w-[50px]" alt="image_user"/>
          <div className="ml-5 lg:text-sm xl:text-base">Admin Page, Welcome {user}!</div>
          </div>
          <div className="flex flex-row items-center">
            <form className="flex flex-row items-center border-solid border rounded-full border-white ">
            <input type="search" className="bg-transparent outline-0 ml-2 p-2 w-[300px]"/>
            <RiSearch2Line size={20} className="mx-3"/>
            </form>
            <RiNotificationLine size={30} className="ml-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdminPage;
