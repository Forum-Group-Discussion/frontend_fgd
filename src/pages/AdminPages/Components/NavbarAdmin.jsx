import React from "react";
<<<<<<< HEAD
import {RiNotification3Line} from "react-icons/ri";
=======
import {RiNotificationLine} from "react-icons/ri";
>>>>>>> master
import { getUser } from "../../../utils/helpers";

function HomeAdminPage() {
  const user = getUser();

  return (
    <div>
<<<<<<< HEAD
      <div className="ml-64 text-white p-7 ">
      <div className="flex flex-row items-center">  
        Admin Page, Welcome {user}!
        <div className="Search"><input type="search" /></div>
        <RiNotification3Line size={30} className="ml-5"/>
      </div>

      </div>

      
=======
      <div className="Navbar-admin text-white pt-7 pb-7 ">
      <div className="flex flex-row items-center justify-between">  
        <div className="">Admin Page, Welcome {user}!</div>
        <div className="flex flex-row items-center Search ">
          <input type="search" />
          <RiNotificationLine size={30} className="ml-5"/>
        </div>
      </div>
      </div>
>>>>>>> master
    </div>
  );
}

export default HomeAdminPage;
