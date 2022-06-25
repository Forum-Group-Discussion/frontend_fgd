import React from "react";
import { RiNotificationLine } from "react-icons/ri";
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
          <div className="flex flex-row items-center Search">
            <input type="search"/>
            <RiNotificationLine size={30} className="ml-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdminPage;
