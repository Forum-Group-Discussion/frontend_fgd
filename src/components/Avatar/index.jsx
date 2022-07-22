import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import axiosInstance from "../../networks/api";
import { getUserId } from "../../utils/helpers";

function Avatar() {
  const [imgProfile, setImgProfile] = useState("");
  useEffect(() => {
    axiosInstance
      .get("v1/user/image/" + getUserId(), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setImgProfile(res.data.data.image_base64);
      });
  }, []);
  return (
    <div className="flex justify-between relative">
      {imgProfile === null || imgProfile === "" ? (
        <div className="bg-primary-black border-2 border-[#d9d9d91a] rounded-full">
          <FaUserAlt className="p-2 h-[150px] w-[150px] rounded-full scale-50 ml-[-10%] sm:ml-0 sm:scale-100 aspect-square" />
        </div>
      ) : (
        <img id="profile-pic" src={`data:image/jpeg;base64,${imgProfile}`} alt="profile-pic" className="h-[150px] w-[150px] rounded-full scale-50 ml-[-10%] sm:ml-0 sm:scale-100 aspect-square" />
      )}
      <Link to="/user/account/edit" className="bottom-0 md:-bottom-5 right-[3%] absolute text-md sm-text-xl md:text-2xl px-4 py-2 md:px-6 md:py-3 bg-secondary-orange rounded-xl sm:rounded-2xl text-white">
        Edit
      </Link>
    </div>
  );
}

export default Avatar;
