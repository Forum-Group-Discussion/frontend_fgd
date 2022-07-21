import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import trendingPicture from "../trendingPicture";
import "./trendingSlider.css";
import { motion } from "framer-motion";

function TrendingSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth - carousel.current.offsetWidth)
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const handleClick = () => {
    navigate("/user/account/other");
  };

  return (
    <div className="sliderTrending">
      <motion.div className="carousel" ref={carousel}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
          {trendingPicture?.map((data, index) => {
            return (
              <motion.div key={index} className="item mr-3 w-[76px] sm:w-[108px] cursor-pointer" onClick={handleClick}>
                <img src={data} alt="gambar" className="h-16 w-16 sm:h-24 sm:w-24 mx-auto" />
                <h5 className="text-center text-white mt-1 text-sm sm:text-base">Johny</h5>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TrendingSlider;
