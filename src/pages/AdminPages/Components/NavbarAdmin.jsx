import React from "react";
import { RiNotificationLine } from "react-icons/ri";
import { getUser } from "../../../utils/helpers";

function HomeAdminPage() {
  const user = getUser();

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
