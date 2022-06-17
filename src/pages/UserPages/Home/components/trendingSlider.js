import React, { useRef, useState, useEffect } from "react";
import trendingPicture from "../trendingPicture";
import './trendingSlider.css'
import { motion } from "framer-motion";

function TrendingSlider() {
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        console.log(carousel.current.scrollWidth - carousel.current.offsetWidth)
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className="sliderTrending">
            <motion.div className="carousel" ref={carousel}>
                <motion.div drag='x' dragConstraints={{ right: 0,  left: -width}} className="inner-carousel">
                    {trendingPicture.map((data) => {
                        return (
                            <motion.div className="item mr-4">
                                <img src={data} alt="gambar" />
                                <h5 className="text-center text-white mt-1">Johny</h5>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default TrendingSlider