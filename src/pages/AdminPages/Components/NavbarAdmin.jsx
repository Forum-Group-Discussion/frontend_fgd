import React from "react";
import { RiNotificationLine } from "react-icons/ri";
import { useSelector } from "react-redux";

function HomeAdminPage() {
  const user = useSelector((state) => state.user.name);

  return (
    <div>
      <div className="Navbar-admin text-white pt-7 pb-7 ">
        <div className="flex flex-row items-center justify-between">
          <div className="">Admin Page, Welcome {user}!</div>
          <div className="flex flex-row items-center Search ">
            <input type="search" />
            <RiNotificationLine size={30} className="ml-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdminPage;
