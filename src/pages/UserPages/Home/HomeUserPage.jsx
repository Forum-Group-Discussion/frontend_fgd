import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { AiFillFire } from "react-icons/ai";
import Navbar from "../components/Navbar";
import TrendingSlider from "./components/trendingSlider";
import axiosInstance from "../../../networks/api";
import { useSelector } from "react-redux";
import Thread from "../../components/Thread";
import LoadingSkeleton from "../../components/LoadingSkeleton";

export default function HomeUserPage() {
  const threads = useSelector((state) => state.thread.thread);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(0);
  const [loadingImageThread, setLoadingImageThread] = useState(true);

  useEffect(() => {
    if (threads.length !== 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [threads]);

  const [filter, setFilter] = useState(null);

  const handleFilter = (e) => {
    setTopic(e.target.value);
    setFilter(e.target.value);
  };

  const [images, setImages] = useState([]);

  const [photoProfile, setPhotoProfile] = useState([]);

  useEffect(() => {
    if (threads !== []) {
      threads?.forEach((d) => {
        axiosInstance
          .get("v1/thread/photo/" + d.id, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            setImages((images) => [...images, res.data.data]);
            setLoadingImageThread(false);
          });
      });
      threads?.forEach((d) => {
        axiosInstance.get("v1/user/image/" + d.users.id).then((res) => {
          setPhotoProfile((photoProfile) => [...photoProfile, res.data.data]);
        });
      });
    }
  }, [threads]);
  return (
    <>
      <Navbar />
      <div id="home" className="flex justify-center min-h-screen">
        <div id="container" className="flex flex-row w-4/5">
          <div id="box-1" className="lg:flex relative w-1/4 mr-8 hidden">
            <div className="fixed w-1/5">
              <div id="kategori-list" className="flex absolute">
                <ul id="kategori" className="text-center">
                  <li onClick={handleFilter} value={null} className="flex gap-3 justify-center">
                    <AiFillFire className="fill-secondary-orange w-6 h-6"></AiFillFire>
                    <div className="text-secondary-orange">Trending Topic</div>
                  </li>
                  <li onClick={handleFilter} value={1} className={topic === 1 ? "cursor-pointer bg-secondary-orange" : "cursor-pointer hover:bg-secondary-orange"}>
                    Games
                  </li>
                  <li onClick={handleFilter} value={2} className={topic === 2 ? "cursor-pointer bg-secondary-orange" : "cursor-pointer hover:bg-secondary-orange"}>
                    Health
                  </li>
                  <li onClick={handleFilter} value={3} className={topic === 3 ? "cursor-pointer bg-secondary-orange" : "cursor-pointer hover:bg-secondary-orange"}>
                    Food & Travel
                  </li>
                  <li onClick={handleFilter} value={4} className={topic === 4 ? "cursor-pointer bg-secondary-orange" : "cursor-pointer hover:bg-secondary-orange"}>
                    Technology
                  </li>
                  <li onClick={handleFilter} value={5} className={topic === 5 ? "cursor-pointer bg-secondary-orange" : "cursor-pointer hover:bg-secondary-orange"}>
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
            <div className="lg:hidden flex items-center justify-center gap-4">
              <AiFillFire className="fill-secondary-orange"></AiFillFire>
              <div onClick={() => setFilter(null)} className="text-md sm:text-lg font-bold text-secondary-orange">
                Trending Topic
              </div>
            </div>
            <div id="filter-hp" className="lg:hidden py-4 sticky top-[8%] sm:top-[12%] bg-primary-black z-10">
              <div className="overflow-auto w-full no-scrollbar">
                <ul id="kategori-hp" className="flex gap-3 text-center w-max text-sm sm:text-base">
                  <li onClick={handleFilter} value={1} className={topic === 1 ? "bg-secondary-orange px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto" : "bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto"}>
                    Games
                  </li>
                  <li onClick={handleFilter} value={2} className={topic === 2 ? "bg-secondary-orange px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto" : "bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto"}>
                    Health
                  </li>
                  <li onClick={handleFilter} value={3} className={topic === 3 ? "bg-secondary-orange px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto" : "bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto"}>
                    Food & Travel
                  </li>
                  <li onClick={handleFilter} value={4} className={topic === 4 ? "bg-secondary-orange px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto" : "bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto"}>
                    Technology
                  </li>
                  <li onClick={handleFilter} value={5} className={topic === 5 ? "bg-secondary-orange px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto" : "bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto"}>
                    Education
                  </li>
                </ul>
              </div>
            </div>
            {loading ? (
              <LoadingSkeleton />
            ) : filter !== null ? (
              threads?.filter((d) => d.topic.id === filter).length > 0 ? (
                threads.map((item, index) => <Thread item={item} index={index} images={images} loading={loadingImageThread} photo={photoProfile} />)
              ) : (
                <div className="border border-solid border-[#d9d9d91a] rounded-xl h-60 py-10">
                  <div className="text-md xl:text-lg text-grey text-center mb-10">No threads yet</div>
                  <div className="flex w-full justify-center">
                    <Link to="/user/create" className="px-8 py-4 bg-secondary-orange rounded-xl text-white text-md xl:text-lg">
                      Create Here
                    </Link>
                  </div>
                </div>
              )
            ) : (
              threads.map((item, index) => <Thread item={item} index={index} images={images} loading={loadingImageThread} photo={photoProfile} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
