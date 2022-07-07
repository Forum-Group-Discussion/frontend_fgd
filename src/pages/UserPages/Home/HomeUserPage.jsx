import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import "./Home.css";
import gambarProfile from "../../../assets/img/home/dashicons_games.png";
import gambarThread from "../../../assets/img/home/image7.png";
import { AiFillFire } from "react-icons/ai"
import { Icon } from "react-icons-kit";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from "react-icons-kit/feather/bookmark";
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from "react-icons-kit/feather/moreVertical";
import Navbar from "../components/Navbar";
import TrendingSlider from "./components/trendingSlider";
import PopupShare from "../components/PopupShare";
import PopupReport from "../components/PopupReport";
import FullThread from "../components/FullThread";
import axiosInstance from "../../../networks/api";
import { useDispatch, useSelector } from "react-redux";
import { DATA_THREAD } from "../../../redux/threadSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Swal from "sweetalert2";

export default function HomeUserPage() {
  const dispatch = useDispatch();
  const threads = useSelector((state) => state.thread.thread);
  const [more, setMore] = useState({
    index: "",
    value: false,
  });
  const [showFull, setFull] = useState(false);
  const [popupShare, setPopupShare] = useState(false);
  const [popupReport, setPopupReport] = useState(false);
  const [threadIndex, setThreadIdex] = useState("");
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(0)
  let { category } = useParams();

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

  const showMoreMenu = (index) => {
    setMore(!more);
    setThreadIdex(index);
  };

  const fetchData = useCallback(() => {
    const response = axiosInstance
      .get("v1/thread")
      .then((response) => {
        dispatch(DATA_THREAD(response.data.data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
    return response;
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleShowFull = () => {
    setFull(!showFull);
  };
  const handleCloseFull = () => {
    setFull(false);
  };

  const handleSave = () => {
    Swal.fire({
      toast: true,
      icon: "success",
      title: "Thread successfully saved",
      animation: false,
      background: "#222834",
      color: "#18B015",
      position: "bottom-end",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  const [filter, setFilter] = useState(null);

  const handleFilter = e => {
    setTopic(e.target.value)
    setFilter(e.target.value)
  }
  return (
    <>
      <Navbar />
      <div id="home" className="flex justify-center">
        <div id="container" className="flex flex-row w-4/5">
          <div id="box-1" className="lg:flex relative w-1/4 mr-8 hidden">
            <div className="fixed w-1/5">
              <div id="kategori-list" className="flex absolute">
                <ul id="kategori" className="text-center">
                  <li onClick={handleFilter} value={null} className="cursor-pointer flex gap-3 justify-center">
                    <AiFillFire className="fill-secondary-orange w-6 h-6"></AiFillFire>
                    <div className="text-secondary-orange">Trending Topic</div> 
                  </li>
                  <li onClick={handleFilter} value={1} className="cursor-pointer">
                    Games
                  </li>
                  <li onClick={handleFilter} value={2} className="cursor-pointer">
                    Health
                  </li>
                  <li onClick={handleFilter} value={3} className="cursor-pointer">
                    Food & Travel
                  </li>
                  <li onClick={handleFilter} value={4} className="cursor-pointer">
                    Technology
                  </li>
                  <li onClick={handleFilter} value={5} className="cursor-pointer">
                    Education
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="box-2" className="flex-1 relative">
            <div className="trending-slider">
              <TrendingSlider />
            </div>
            <div id="filter-hp" className="lg:hidden mb-6 lg:mb-0">
              {/* <div className="w-1/5"> */}
                {/* <div id="kategori-list" className="flex"> */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <AiFillFire className="fill-secondary-orange"></AiFillFire>
                    <div onClick={() => setFilter(null)} className="text-md sm:text-lg font-bold text-secondary-orange">Trending Topic</div>
                  </div>
                  <div className="overflow-auto w-full no-scrollbar">
                  <ul id="kategori-hp" className="flex gap-3 text-center w-max text-sm sm:text-base">
                    <li onClick={handleFilter} value={1} className={topic===1 ? "bg-secondary-orange px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto" : "bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto"}>
                      Games
                    </li>
                    <li onClick={handleFilter} value={2} className={topic===2 ? "bg-secondary-orange px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto" : "bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto"}>
                      Health
                    </li>
                    <li onClick={handleFilter} value={3} className={topic===3 ? "bg-secondary-orange px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto" : "bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto"}>
                      Food & Travel
                    </li>
                    <li onClick={handleFilter} value={4} className={topic===4 ? "bg-secondary-orange px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto" : "bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto"}>
                      Technology
                    </li>
                    <li onClick={handleFilter} value={5} className={topic===5 ? "bg-secondary-orange px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto" : "bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto"}>
                      Education
                    </li>
                  </ul>
                  </div>
                {/* </div> */}
              {/* </div> */}
          </div>
            {loading ? (
              <div id="thread">
                <div id="thread-box" className="flex">
                  <div id="thread-header" className="flex">
                    <div className="mr-2">
                      <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                    </div>
                    <div className="flex items-center">
                      <div className="flex-col text-white">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                        <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-end items-center">
                    <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                </div>
                <div>
                  <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                </div>
                <div id="thread-icon" className="flex flex-1 justify-between mt-5">
                  <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                </div>
              </div>
            ) : filter !== null ? (
              threads
                ?.filter((d) => d.topic.id === filter)
                .map((item, index) => (
                  <div id="thread" key={index}>
                    <div id="thread-box" className="flex">
                      <div id="thread-header" className="flex">
                        <div className="mr-2">
                          <img src={gambarProfile} alt="gambar profile" />
                        </div>
                        <div className="flex items-center">
                          <div className="flex-col text-white max-w-[30vw]">
                            <h5 className="text-sm md:text-md font-semibold tracking-[2px] truncate">{item.users.name}</h5>
                            <h6 className="text-sm md:text-md font-medium mt-1 opacity-30">2 days ago</h6>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 justify-end items-center">
                        <button id="thread-button" className="text-sm sm:text-lg">Follow</button>
                      </div>
                    </div>
                    <div className="mt-4 mb-4">
                      <h3 className="text-sm sm:text-lg md:font-semibold text-white tracking-[1px]">{item.title}</h3>
                    </div>
                    <div>
                      <img src={gambarThread} alt="gambar thread" className="relative" />
                    </div>
                    <div id="thread-icon" className="flex flex-1 justify-between mt-5">
                      <div className="cursor-pointer">
                        <Icon icon={thumbsUp} />
                        <span className="text-sm sm:text-lg text-white">68k</span>
                      </div>
                      <div className="cursor-pointer">
                        <Icon icon={thumbsDown} />
                        <span className="text-sm sm:text-lg text-white">98k</span>
                      </div>
                      <div onClick={handleShowFull} className="cursor-pointer">
                        <Icon icon={commentingO} />
                        <span className="text-sm sm:text-lg text-white">90</span>
                      </div>
                      <div onClick={handleSave} className="cursor-pointer">
                        <Icon icon={bookmark} />
                      </div>
                      <div onClick={() => showMoreMenu(index)}>
                        <Icon icon={moreVertical} />
                        <div className={more && index === threadIndex ? "more-3 active" : "more"}>
                          <span className="cursor-pointer" onClick={handleShowFull}>
                            Open
                          </span>
                          <span className="cursor-pointer" onClick={showPopupShare}>
                            Share
                          </span>
                          <span className="cursor-pointer" onClick={showPopupReport}>
                            Report
                          </span>
                        </div>
                      </div>
                    </div>

                    <div id="close-popup" className={popupShare ? "popupShare active" : "popupShare"}>
                      <div>
                        <div className="flex absolute inset-0 m-auto justify-center p-4">
                          <PopupShare closePopupShare={closePopupShare} />
                        </div>
                      </div>
                    </div>

                    <div id="close-popup" className={popupReport ? "popupReport active" : "popupReport"}>
                      <div>
                        <div className="flex absolute inset-0 m-auto justify-center p-4">
                          <PopupReport closePopupReport={closePopupReport} />
                        </div>
                      </div>
                    </div>
                    {showFull && <FullThread onCancel={handleCloseFull} />}
                  </div>
                ))
            ) : (
              threads.map((item, index) => (
                <div id="thread" key={index} className="max-w-[1000px] mx-auto">
                  <div id="thread-box" className="flex">
                    <div id="thread-header" className="flex">
                      <div className="mr-2">
                        <img src={gambarProfile} alt="gambar profile" />
                      </div>
                      <div className="flex items-center">
                        <div className="flex-col text-white max-w-[30vw]">
                          <h5 className="text-sm md:text-md font-semibold tracking-[2px] truncate">{item.users.name}</h5>
                          <h6 className="text-sm md:text-md font-medium mt-1 opacity-30">2 days ago</h6>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center">
                      <button id="thread-button" className="text-sm sm:text-lg">Follow</button>
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <h3 className="text-sm sm:text-lg md:font-semibold text-white tracking-[1px]">{item.title}</h3>
                  </div>
                  <div>
                    <img src={gambarThread} alt="gambar thread" />
                  </div>
                  <div id="thread-icon" className="flex flex-1 justify-between mt-5">
                    <div className="cursor-pointer">
                      <Icon icon={thumbsUp} />
                      <span className="text-sm sm:text-lg text-white">90</span>
                    </div>
                    <div className="cursor-pointer">
                      <Icon icon={thumbsDown} />
                      <span className="text-sm sm:text-lg text-white">90</span>
                    </div>
                    <div onClick={handleShowFull} className="cursor-pointer">
                      <Icon icon={commentingO} />
                      <span className="text-sm sm:text-lg text-white">90</span>
                    </div>
                    <div onClick={handleSave} className="cursor-pointer">
                      <Icon icon={bookmark} />
                    </div>
                    <div onClick={() => showMoreMenu(index)}>
                      <Icon icon={moreVertical} />
                      <div className={more && index === threadIndex ? "more-3 active" : "more"}>
                        <span className="cursor-pointer" onClick={handleShowFull}>
                          Open
                        </span>
                        <span className="cursor-pointer" onClick={showPopupShare}>
                          Share
                        </span>
                        <span className="cursor-pointer" onClick={showPopupReport}>
                          Report
                        </span>
                      </div>
                    </div>
                  </div>

                  <div id="close-popup" className={popupShare ? "popupShare active" : "popupShare"}>
                    <div>
                      <div className="flex absolute inset-0 m-auto justify-center p-4">
                        <PopupShare closePopupShare={closePopupShare} />
                      </div>
                    </div>
                  </div>

                  <div id="close-popup" className={popupReport ? "popupReport active" : "popupReport"}>
                    <div>
                      <div className="flex absolute inset-0 m-auto justify-center p-4">
                        <PopupReport closePopupReport={closePopupReport} />
                      </div>
                    </div>
                  </div>
                  {showFull && <FullThread onCancel={handleCloseFull} />}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
