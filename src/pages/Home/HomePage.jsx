import React from "react";
import { useNavigate } from "react-router-dom";
import { removeUserSession, getUser } from "../../utils/helpers";

function HomePage() {
  const user = getUser();
  const navigate = useNavigate();
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    navigate("/");
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
