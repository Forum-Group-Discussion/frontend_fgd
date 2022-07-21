import React from "react";
import axiosInstance from "../../../../networks/api";

function ButtonUnfollow({ user }) {
  const handleFollow = () => {
    axiosInstance.post("v1/following", { user_follow: { id: user.id }, type: "UNFOLLOW" }).then(() => {
      console.log("Berhasil UNFOLLOW " + user.name);
    });
  };
  return (
    <button id="thread-button" onClick={handleFollow} className="text-sm sm:text-lg">
      Unfollow
    </button>
  );
}

export default ButtonUnfollow;
