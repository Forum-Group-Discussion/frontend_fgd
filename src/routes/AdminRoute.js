import React from "react";
import { Outlet } from "react-router-dom";
import { getToken } from "../utils/helpers";

function AdminRoute() {
  if (getToken() !== null) {
    return <Outlet />;
  } else {
    console.log("Tidak Bisa Akses");
  }
}

export default AdminRoute;
