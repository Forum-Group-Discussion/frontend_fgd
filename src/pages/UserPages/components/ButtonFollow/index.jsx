import React from "react";
import axiosInstance from "../../../../networks/api";

function ButtonFollow({ user }) {
  const handleFollow = () => {
    axiosInstance.post("v1/following", { user_follow: { id: user.id }, type: "FOLLOW" }).then(() => {
      console.log("Berhasil Mengikuti " + user.name);
    });
  };
  return (
    <button id="thread-button" onClick={handleFollow} className="text-sm sm:text-lg">
      Follow
    </button>
  );
}

export default ButtonFollow;
