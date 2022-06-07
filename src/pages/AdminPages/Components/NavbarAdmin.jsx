import React from "react";
import {RiNotification3Line} from "react-icons/ri";
import { getUser } from "../../../utils/helpers";

function HomeAdminPage() {
  const user = getUser();

  return (
    <div>
      <div className="ml-64 text-white p-7 ">
      <div className="flex flex-row items-center">  
        Admin Page, Welcome {user}!
        <div className="Search"><input type="search" /></div>
        <RiNotification3Line size={30} className="ml-5"/>
      </div>

      </div>

      
    </div>
  );
}

export default HomeAdminPage;
