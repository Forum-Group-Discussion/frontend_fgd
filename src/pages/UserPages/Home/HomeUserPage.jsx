import React, { useEffect, useState } from "react";
import "./Home.css";
import gambarProfile from "../../../assets/img/home/dashicons_games.png";
import gambarThread from "../../../assets/img/home/image7.png";
import { Icon } from "react-icons-kit";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from "react-icons-kit/feather/bookmark";
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from "react-icons-kit/feather/moreVertical";
import Navbar from "../components/Navbar";
import TrendingSlider from "./components/trendingSlider";
import PopupShare from "./components/PopupShare";
import PopupReport from "./components/PopupReport";
import { axiosInstance } from "../../../networks/api";
import { useDispatch, useSelector } from "react-redux";
import { DATA_THREAD } from "../../../redux/threadSlice";
import { getToken } from "../../../utils/helpers";
import axios from "axios";

export default function HomeUserPage() {
  const dispatch = useDispatch();
  const threads = useSelector((state) => state.thread.thread);
  const [more, setMore] = useState(false);
  const [popupShare, setPopupShare] = useState(false);
  const [popupReport, setPopupReport] = useState(false);

  const showPopupShare = () => {
    if (popupShare === false) {
      setPopupShare(true);
    }
  };

  const closePopupShare = () => {
    if (popupShare === true) {
      setPopupShare(false);
    }
  };

  const showPopupReport = () => {
    if (popupReport === false) {
      setPopupReport(true);
    }
  };

  const closePopupReport = () => {
    if (popupReport === true) {
      setPopupReport(false);
    }
  };

  const showMoreMenu = () => {
    if (more === false) {
      setMore(true);
    } else {
      setMore(false);
    }
  };

  useEffect(() => {
    axiosInstance
      // .get("https://6298cbc5f2decf5bb74c0022.mockapi.io/fgd/thread")
      .get("/thread")
      .then((response) => {
        console.log(response);
        dispatch(DATA_THREAD(response.data));
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  console.log(threads);

  return (
    <>
      <Navbar />
      <div id="home" className="flex justify-center">
        <div id="container" className="flex flex-row w-4/5">
          <div id="box-1" className="flex relative w-1/4 mr-8">
            <div className="fixed w-1/5">
              <div id="kategori-list" className="flex absolute">
                <ul id="kategori" className="text-center">
                  <li>Trending Topic</li>
                  <li>Games</li>
                  <li>Health</li>
                  <li>Food & Travel</li>
                  <li>Technology</li>
                  <li>Education</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="box-2" className="flex-1 relative">
            <div className="trending-slider">
              <TrendingSlider />
            </div>
            {threads?.map((item) => (
              <div id="thread" key={item.id}>
                <div id="thread-box" className="flex">
                  <div id="thread-header" className="flex">
                    <div className="mr-2">
                      <img src={gambarProfile} alt="gambar profile" />
                    </div>
                    <div className="flex items-center">
                      <div className="flex-col text-white">
                        <h5 className="font-semibold tracking-[2px]">{item.user}</h5>
                        <h6 className="font-medium mt-1 opacity-30">2 days ago</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-end items-center">
                    <button id="thread-button">Follow</button>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <h3 className="font-semibold text-white tracking-[1px]">{item.title}</h3>
                </div>
                <div>
                  <img src={gambarThread} alt="gambar thread" />
                </div>
                <div id="thread-icon" className="flex flex-1 justify-between mt-5">
                  <div>
                    <Icon icon={thumbsUp} />
                    <span>100K</span>
                  </div>
                  <div>
                    <Icon icon={thumbsDown} />
                    <span>100K</span>
                  </div>
                  <div>
                    <Icon icon={commentingO} />
                    <span>100K</span>
                  </div>
                  <div>
                    <Icon icon={bookmark} />
                  </div>
                  <div>
                    <Icon icon={moreVertical} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
