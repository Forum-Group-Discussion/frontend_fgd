import React, { useState } from "react";
import "./Home.css";
import gambarProfile from "../../../assets/img/home/dashicons_games.png";
import gambarThread from "../../../assets/img/home/image7.png";
import { Icon } from "react-icons-kit";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from 'react-icons-kit/feather/bookmark'
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from 'react-icons-kit/feather/moreVertical'
import Navbar from "../components/Navbar";
import TrendingSlider from "./components/trendingSlider";
import PopupShare from "./components/PopupShare";
import PopupReport from "./components/PopupReport";

export default function HomeUserPage() {
  const [more, setMore] = useState(false)
  const [popupShare, setPopupShare] = useState(false)
  const [popupReport, setPopupReport] = useState(false)

  const showPopupShare = () => {
    if (popupShare === false) {
      setPopupShare(true)
    }
  }

  const closePopupShare = () => {
    if(popupShare === true) {
      setPopupShare(false)
    }
  }

  const showPopupReport = () => {
    if (popupReport === false) {
      setPopupReport(true)
    }
  }

  const closePopupReport = () => {
    if(popupReport === true) {
      setPopupReport(false)
    }
  }

  const showMoreMenu = () => {
    if (more === false) {
      setMore(true)
    } else {
      setMore(false)
    }
  }

  return (
    <>
      <Navbar />
      <div id="home" className="flex justify-center">
        <div id="container" className="flex flex-row w-4/5">
          <div id="box-1" className="flex relative w-1/4 mr-8">
            <div className="fixed w-1/5">
              <div id="kategori-list" className="flex absolute">
                <ul id="kategori" className=" text-center">
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
            <div id="thread" className="">
              <div id="thread-box" className="flex">
                <div id="thread-header" className="flex">
                  <div className="mr-2">
                    <img src={gambarProfile} alt="gambar profile" />
                  </div>
                  <div className="flex items-center">
                    <div className="flex-col text-white">
                      <h5 className="font-semibold tracking-[2px]">amdar07</h5>
                      <h6 className="font-medium mt-1 opacity-30">2 days ago</h6>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-end items-center">
                  <button id="thread-button">Follow</button>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <h3 className="font-semibold text-white tracking-[1px]">Rekomendasi 5 Game Mobile yang Menarik di Minggu Keempat Bulan Mei 2022</h3>
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
                <div onClick={showMoreMenu}>
                  <Icon icon={moreVertical} />
                  <div className={more ? 'more active' : 'more'}>
                    <span className="cursor-pointer" onClick={showPopupShare}>Share</span>
                    <span className="cursor-pointer" onClick={showPopupReport}>Report</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={popupShare ? 'popupShare active' : 'popupShare'} id="popup-share">
              <div>
                <div className="flex absolute inset-0 m-auto justify-center p-4">
                  <PopupShare closePopupShare={closePopupShare} />
                </div>
              </div>
            </div>

            <div className={popupReport ? 'popupReport active' : 'popupReport'} id="popup-report">
              <div>
                <div className="flex absolute inset-0 m-auto justify-center p-4">
                  <PopupReport closePopupReport={closePopupReport}/>
                </div>
              </div>
            </div>

            <div id="thread" className="">
              <div id="thread-box" className="flex">
                <div id="thread-header" className="flex">
                  <div className="mr-2">
                    <img src={gambarProfile} alt="gambar profile" />
                  </div>
                  <div className="flex items-center">
                    <div className="flex-col text-white">
                      <h5 className="font-semibold tracking-[2px]">amdar07</h5>
                      <h6 className="font-medium mt-1 opacity-30">2 days ago</h6>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-end items-center">
                  <button id="thread-button">Follow</button>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <h3 className="font-semibold text-white tracking-[1px]">Rekomendasi 5 Game Mobile yang Menarik di Minggu Keempat Bulan Mei 2022</h3>
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
          </div>
        </div>
      </div>
    </>
  );
}
