import Navbar from "../components/Navbar";
import Thread from "./components/Thread";
import Activity from "./components/Activity";
import Followers from "./components/Followers";
import Following from "./components/Following";
import "./Profile.css";
import Banner from "../../../assets/img/account/banner.png";
import Profile from "../../../assets/img/account/profile.png";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from "../../../networks/api";
import { useCallback } from "react";

export default function ProfileOtherUserPage() {
  const params = useParams();
  const [stat, setStat] = useState({ following: 105500, followers: 99900, threads: 100 });
  const [statconv, setStatconv] = useState({ following: "", followers: "", threads: "" });
  const [choose, setChoose] = useState("thread");
  const [follow, setFollow] = useState(true);
  const [res, setRes] = useState(true);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const page = "other";

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    let ing = stat.following;
    let ers = stat.followers;
    let thr = stat.threads;
    if (stat.following >= 1000) {
      ing = ing / 1000;
      ing = ing.toFixed(1);
      console.log(typeof ing, ing);
    } else {
      setStatconv({ following: stat.following });
    }
    if (stat.followers >= 1000) {
      ers = ers / 1000;
      ers = ers.toFixed(1);
      setStatconv({ followers: toString(ers) + "k" });
    } else {
      setStatconv({ followers: stat.followers });
    }
    if (stat.threads >= 1000) {
      thr = thr / 1000;
      thr = thr.toFixed(1);
      setStatconv({ threads: thr + "k" });
    } else {
      setStatconv({ threads: stat.threads });
    }

    if (stat.following >= 1000) {
      if (stat.followers >= 1000) {
        if (stat.threads >= 1000) {
          setStatconv({ following: ing + "k", followers: ers + "k", threads: thr + "k" });
        } else {
          setStatconv({ following: ing + "k", followers: ers + "k", threads: thr });
        }
      } else {
        if (stat.threads >= 1000) {
          setStatconv({ following: ing + "k", followers: ers, threads: thr + "k" });
        } else {
          setStatconv({ following: ing + "k", followers: ers, threads: thr });
        }
      }
    } else {
      if (stat.followers >= 1000) {
        if (stat.threads >= 1000) {
          setStatconv({ following: ing, followers: ers + "k", threads: thr + "k" });
        } else {
          setStatconv({ following: ing, followers: ers + "k", threads: thr });
        }
      } else {
        if (stat.threads >= 1000) {
          setStatconv({ following: ing, followers: ers, threads: thr + "k" });
        } else {
          setStatconv({ following: ing, followers: ers, threads: thr });
        }
      }
    }
  }, [stat]);

  const handleShowFollowing = () => {
    setShowFollowing(!showFollowing);
  };
  const handleCloseFollowing = () => {
    setShowFollowing(false);
  };
  const handleShowFollowers = () => {
    setShowFollowers(!showFollowers);
  };
  const handleCloseFollowers = () => {
    setShowFollowers(false);
  };

  const handleAction = (e) => {
    setChoose(e.target.value);
  };

  const handleFollow = (e) => {
    if (follow) setFollow(false);
    else setFollow(true);
  };

  const chooseFunction = () => {
    if (choose === "thread") {
      // get threadnya
      // kalo gada hasilnya uncomment ini yaa
      // setRes(false)
      if (res) {
        return <Thread />;
      } else {
        return (
          <div className="border border-solid border-[#d9d9d91a] rounded-xl h-60 py-10">
            <div className="text-md xl:text-lg text-grey text-center mb-10">This account doesn't have a thread yet</div>
            <div className="flex w-full justify-center">
              <Link to="/user/create" className="px-8 py-4 bg-secondary-orange rounded-xl text-white text-md xl:text-lg">
                Create Here
              </Link>
            </div>
          </div>
        );
      }
    } else if (choose === "activity") {
      // get activity
      // kalo gada hasilnya uncomment ini yaa
      // setRes(false)
      if (res) {
        return <Activity />;
      } else {
        return (
          <div className="border border-solid border-[#d9d9d91a] rounded-xl h-60 py-10">
            <div className="text-md xl:text-lg text-grey text-center mb-10">This account has no activity yet</div>
            <div className="flex w-full justify-center">
              <Link to="/user/home" className="px-8 py-4 bg-secondary-orange rounded-xl text-white text-md xl:text-lg">
                Go Home
              </Link>
            </div>
          </div>
        );
      }
    }
  };

  const [user, setUser] = useState();

  useEffect(() => {
    axiosInstance.get("v1/user/" + params.id).then((response) => {
      setUser(response.data.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <section id="account" className="bg-primary-black p-[10%]">
        <div className="max-w-[1240px] mx-auto">
          <div id="acc-details" className="border-b-2 border-[#d9d9d91a] pb-[5%] text-white md:mx-[0] mx-auto">
            <img src={Banner} alt="banner-pic" />
            <div id="acc-details" className="grid gap-2 md:gap-y-5 mt-[-20%] sm:mt-[-7%] ml-[3%]">
              <div className="flex justify-between relative">
                <img id="profile-pic" src={Profile} alt="profile-pic" className="scale-50 ml-[-10%] sm:ml-0 sm:scale-100 aspect-square" />
                {follow ? (
                  <button onClick={handleFollow} className="bottom-0 md:-bottom-5 right-[3%] absolute text-md sm-text-xl md:text-2xl px-4 py-2 md:px-6 md:py-3 bg-primary-grey rounded-xl sm:rounded-2xl text-white">
                    Followed
                  </button>
                ) : (
                  <button onClick={handleFollow} className="bottom-0 md:-bottom-5 right-[3%] absolute text-md sm-text-xl md:text-2xl px-4 py-2 md:px-6 md:py-3 bg-secondary-orange rounded-xl sm:rounded-2xl text-white">
                    Follow
                  </button>
                )}
              </div>
              <div id="username" className="mt-[-8%] sm:mt-[0%] text-xl sm:text-3xl md:text-4xl font-bold">
                {user?.name}
              </div>
              <div id="bio" className="text-md md:text-2xl">
                Hello Found
              </div>
              <div id="stat" className="mt-2 mb-3 sm:mt-0 text-sm md:text-lg inline-flex gap-3 sm:gap-10 text-gray-400">
                <button id="stat-following" onClick={handleShowFollowing} className="text-left">
                  {statconv.following} Following
                </button>
                <button id="stat-followers" onClick={handleShowFollowers} className="text-left">
                  {statconv.followers} Followers
                </button>
                <div id="stat-threads">{statconv.threads} Threads</div>
              </div>
            </div>
          </div>
          <div id="acc-button" className="my-[5%] mx-auto md:text-xl font-medium max-w-[500px]">
            {choose === "thread" ? (
              <div className="flex justify-around">
                <button onClick={handleAction} value="thread" className="text-white">
                  Thread
                </button>
                <button onClick={handleAction} value="activity" className="text-gray-400">
                  Activity
                </button>
              </div>
            ) : (
              <div className="flex justify-around">
                <button onClick={handleAction} value="thread" className="text-gray-400">
                  Thread
                </button>
                <button onClick={handleAction} value="activity" className="text-white">
                  Activity
                </button>
              </div>
            )}
          </div>
          {chooseFunction()}
          {showFollowers && <Followers onCancel={handleCloseFollowers} page={page} />}
          {showFollowing && <Following onCancel={handleCloseFollowing} page={page} />}
        </div>
      </section>
    </>
  );
}
