import React from "react";
import { Outlet } from "react-router-dom";
import HomeAdminPage from "../pages/AdminPages/Home/HomeAdminPage";
import HomeUserPage from "../pages/UserPages/Home/HomeUserPage";
import { getIsAdmin, getToken } from "../utils/helpers";

function HasSignInRoute() {
  if (getToken() === null) {
    return <Outlet />;
  } else {
    if (getIsAdmin() === "true") {
      return <HomeAdminPage />;
    } else {
      return <HomeUserPage />;
    }
  }
}

export default HasSignInRoute;
