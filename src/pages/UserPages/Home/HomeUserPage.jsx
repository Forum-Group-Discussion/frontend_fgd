import React from "react";
import { useNavigate } from "react-router-dom";
import { removeUserSession, getUser } from "../../../utils/helpers";
import Swal from "sweetalert2";

function HomeUserPage() {
  const user = getUser();
  const navigate = useNavigate();
  // handle click event of logout button
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure to Logout?",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      background: "#151921",
      color: "#fff",
      confirmButtonColor: "#FF3D00",
      cancelButtonColor: "#D91E11",
      confirmButtonText: "Yes, Logout!",
      focusConfirm: false,
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        removeUserSession();
        navigate("/");
        window.location.reload();
      }
    });
  };

  return (
    <div>
      User Page, Welcome {user}!<br />
      <br />
      <input type="submit" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default HomeUserPage;
