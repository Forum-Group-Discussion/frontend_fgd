import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/AdminPages/Pages/Dashboard/Dashboard";
import HomeUserPage from "../pages/UserPages/Home/HomeUserPage";
import { getIsAdmin, getToken } from "../utils/helpers";

function HasSignInRoute() {
  if (getToken() === null) {
    return <Outlet />;
  } else {
    if (getIsAdmin() === "true") {
      return <Dashboard/>;
    } else {
      return <HomeUserPage />;
    }
  }
}

export default HasSignInRoute;
