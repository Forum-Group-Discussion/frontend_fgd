import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import trendingPicture from "../trendingPicture";
import "./trendingSlider.css";
import { motion } from "framer-motion";
import axiosInstance from "../../../../networks/api";
import { FaUserAlt } from "react-icons/fa";

function TrendingSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosInstance.get("v1/following/mostfollower").then((response) => {
      setUsers(response.data.data);
    });
    axiosInstance.get("v1/");
  }, []);

  const [photoProfile, setPhotoProfile] = useState([]);

  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    if (users !== []) {
      users?.forEach((d) => {
        axiosInstance
          .get("v1/user/image/" + d.id)
          .then((res) => {
            setPhotoProfile((photoProfile) => [...photoProfile, res.data.data]);
          })
          .then(() => {
            setLoadingImage(false);
          });
      });
    }
  }, [users]);

  useEffect(() => {
    // console.log(carousel.current.scrollWidth - carousel.current.offsetWidth)
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const handleClick = (id) => {
    navigate("/user/account/" + id);
  };

  return (
    <div className="sliderTrending">
      <motion.div className="carousel" ref={carousel}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
          {users.map((item, index) => {
            return (
              <motion.div key={index} className="item mr-3 w-[76px] sm:w-[108px] cursor-pointer" onClick={() => handleClick(item.id)}>
                {users.image !== null ? (
                  loadingImage ? (
                    <div className="h-16 w-16 sm:h-24 sm:w-24 mx-auto">
                      <FaUserAlt className="h-16 w-16 sm:h-24 sm:w-24 mx-auto" />
                    </div>
                  ) : (
                    <img src={`data:image/jpeg;base64,${photoProfile.filter((d) => d.id === item.id).map((d) => d.image_base64)}`} alt="gambar profile" className="h-16 w-16 sm:h-24 sm:w-24 mx-auto" />
                  )
                ) : (
                  <FaUserAlt className="h-16 w-16 sm:h-24 sm:w-24 mx-auto" />
                )}
                <h5 className="text-center text-white mt-1 text-sm sm:text-base">{item.name}</h5>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TrendingSlider;
