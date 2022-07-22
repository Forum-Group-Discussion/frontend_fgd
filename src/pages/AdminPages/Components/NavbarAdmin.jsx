import React, { useState, useEffect } from "react";
import { RiNotificationLine, RiSearch2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Jokowi from "../../../assets/img/Admin/JOK.png"
import axiosInstance from "../../../networks/api";
import { FaUserAlt } from "react-icons/fa";
import { getUserId } from "../../../utils/helpers";

function HomeAdminPage() {
  const user = useSelector((state) => state.user.name);

  const [imgProfile, setImgProfile] = useState("");
  useEffect(() => {
    axiosInstance
      .get("v1/user/image/" + getUserId(), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setImgProfile(res.data.data.image_base64);
      });
  }, []);

  return (
    <div>
      <div id="nav-top" className="Navbar-admin text-white pt-7 pb-7 lg:ml-[280px] lg:w-[70%] xl:w-[80%]">
        <div className="flex items-center justify-between">
          <div id="nav-greet" className="flex items-center">
            {imgProfile === null || imgProfile === "" ?
              <div className="bg-primary-black border-2 border-[#d9d9d91a] rounded-full">
                <FaUserAlt className="p-1 h-[50px] w-[50px] rounded-full scale-50 ml-[-10%] sm:ml-0 sm:scale-100 aspect-square" />
              </div>
              :
              <img src={`data:image/jpeg;base64,${imgProfile}`} className="rounded-full w-[50px] h-[50px]" alt="image_user" />
            }
            <div className="ml-5 text-sm xl:text-base">Admin Page, Welcome {user}!</div>
          </div>
          <div id="nav-item" className="flex items-center">
            <form id="nav-search" className="flex items-center border-solid sm:border rounded-full border-white ">
              <input type="search" className="bg-transparent outline-0 ml-2 sm:p-2 w-0 sm:w-[250px]" />
              <RiSearch2Line className="mx-3 h-6 w-6" />
            </form>
            <RiNotificationLine id="nav-notification" className="ml-2 sm:ml-5 h-6 w-6 sm:h-8 sm:w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdminPage;
