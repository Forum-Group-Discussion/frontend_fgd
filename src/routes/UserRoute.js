import React from "react";
import { Outlet } from "react-router-dom";
import { getIsAdmin, getToken } from "../utils/helpers";
import ErrorPage from "../pages/Error/ErrorPage";

function UserRoute() {
  if (getToken() !== null && getIsAdmin() === "false") {
    return <Outlet />;
  } else {
    return <ErrorPage code="403" title="Forbidden : You don't have permission to access this page, Please Login First" />;
  }
}

export default UserRoute;
