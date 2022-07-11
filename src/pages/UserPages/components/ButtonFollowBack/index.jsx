import React from "react";
import axiosInstance from "../../../../networks/api";

function ButtonFollowBack({ user }) {
  const handleFollow = () => {
    axiosInstance.post("v1/following", { user_follow: { id: user.id }, type: "FOLLOW" }).then(() => {
      console.log("Berhasil Mengikuti " + user.name);
    });
  };
  return (
    <button id="thread-button" onClick={handleFollow} className="text-sm sm:text-lg">
      Follow Back
    </button>
  );
}

export default ButtonFollowBack;
