import React from "react";
import { useNavigate } from "react-router-dom";
import { getUser, removeUserSession } from "../../../utils/helpers";

function HomePage() {
  const user = getUser();
  let navigate = useNavigate();
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    navigate("/login");
  };

  return (
    <div>
      Welcome {user}!<br />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default HomePage;
