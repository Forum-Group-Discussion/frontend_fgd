import Navbar from "../components/Navbar";
import Thread from "./components/Thread";
import Save from "./components/Save";
import Activity from "./components/Activity";
import Followers from "./components/Followers";
import Following from "./components/Following";
import "./Profile.css";
import { BsCameraFill } from "react-icons/bs";
import Banner from "../../../assets/img/account/banner.png";
import Profile from "../../../assets/img/account/profile.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DATA_PROFILE } from "../../../redux/profileSlice";
import { useCallback } from "react";
import axiosInstance from "../../../networks/api";
import { getUserId } from "../../../utils/helpers";
import { FaUserAlt } from "react-icons/fa";
import Avatar from "../../../components/Avatar";

export default function ProfileUserPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.name);
  const threads = useSelector((state) => state.thread.thread);
  const [stat, setStat] = useState({ following: 105500, followers: 99900, threads: 100 });
  const [statconv, setStatconv] = useState({ following: "", followers: "", threads: "" });
  const [choose, setChoose] = useState("thread");
  const [res, setRes] = useState(true);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [saveThread, setSaveThread] = useState();
  const page = "profile";
  const [images, setImages] = useState([]);
  const [photo, setPhoto] = useState([]);

  const [loadingImageThread, setLoadingImageThread] = useState(true);
  const [photoProfile, setPhotoProfile] = useState([]);
  useEffect(() => {
    saveThread?.forEach((d) => {
      axiosInstance
        .get("v1/thread/photo/" + d.threads.id, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setImages((images) => [...images, res.data.data]);
          setLoadingImageThread(false);
        });

      saveThread?.forEach((d) => {
        axiosInstance.get("v1/user/image/" + d.user.id).then((res) => {
          setPhotoProfile((photoProfile) => [...photoProfile, res.data.data]);
        });
      });
    });
  }, [saveThread]);

  useEffect(() => {
    axiosInstance
      .get("v1/savethread/byuser")
      .then((response) => {
        setSaveThread(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  // useEffect(() => {
  //   if (saveThread !== []) {
  //     saveThread?.forEach((d) => {
  //       console.log("datah thread", d)
  //       console.log("id", d.threads.id)
  //       axiosInstance
  //         .get("v1/thread/photo/" + d.threads.id, {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         })
  //         .then((res) => {
  //           setImages((images) => [...images, res.data.data]);
  //         });
  //     });
  //   }
  // }, [saveThread]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleAction = (e) => {
    setChoose(e.target.value);
  };

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

  const chooseFunction = () => {
    if (choose === "thread") {
      // get threadnya
      // kalo gada hasilnya uncomment ini yaa
      // setRes(false)
      if (res) {
        return <Thread threadUser={true} />;
      } else {
        return (
          <div className="border border-solid border-[#d9d9d91a] rounded-xl h-60 py-10">
            <div className="text-md xl:text-lg text-grey text-center mb-10">You don't have a thread yet</div>
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
            <div className="text-md xl:text-lg text-grey text-center mb-10">You don't have any activity yet</div>
            <div className="flex w-full justify-center">
              <Link to="/user/home" className="px-8 py-4 bg-secondary-orange rounded-xl text-white text-md xl:text-lg">
                Go Home
              </Link>
            </div>
          </div>
        );
      }
    } else if (choose === "saved") {
      // get thread yg disave
      // kalo gada hasilnya uncomment ini yaa
      // setRes(false)
      if (res) {
        return <Save saveThread={saveThread} loading={loadingImageThread} images={images} photo={photoProfile} />;
      } else {
        return (
          <div className="border border-solid border-[#d9d9d91a] rounded-xl h-60 py-10">
            <div className="text-md xl:text-lg text-grey text-center mb-10">You don't have a saved thread yet</div>
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

  const [loading, setLoading] = useState("");
  const fetchData = useCallback(() => {
    const response = axiosInstance
      .get("v1/user/" + getUserId())
      .then((response) => {
        dispatch(DATA_PROFILE(response.data.data));
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

  const [following, setFollowing] = useState(null);
  useEffect(() => {
    axiosInstance.get("v1/following").then((response) => {
      setFollowing(response.data.data);
    });
  }, []);

  const [follower, setFollower] = useState(null);
  useEffect(() => {
    axiosInstance.get("v1/following/followers").then((response) => {
      setFollower(response.data.data);
    });
  }, []);

  const profile = useSelector((state) => state.profile.profile);

  const [imgProfileBG, setImgProfileBG] = useState("");
  useEffect(() => {
    axiosInstance
      .get("v1/user/imagebackground", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setImgProfileBG(res.data.data.image_base64);
      });
  }, []);

  return (
    <>
      <Navbar />
      <section id="account" className="bg-primary-black p-[10%]">
        <div className="max-w-[1240px] mx-auto">
          <div id="acc-details" className="border-b-2 border-[#d9d9d91a] pb-[5%] text-white md:mx-[0] mx-auto">
            {imgProfileBG === null || imgProfileBG === "" ? <div className="h-[240px] w-full rounded-lg border-4 border-[#d9d9d91a]"></div> : <img src={`data:image/jpeg;base64,${imgProfileBG}`} className="h-[240px] w-full rounded-lg" alt="banner-pic" />}
            <div id="acc-details" className="grid gap-2 md:gap-y-5 mt-[-20%] sm:mt-[-7%] ml-[3%]">
              <Avatar />
              <div id="username" className="mt-[-8%] sm:mt-[0%] text-xl sm:text-3xl md:text-4xl font-bold">
                {profile.name}
              </div>
              <div id="bio" className="text-md md:text-2xl">
                {profile.bio}
              </div>
              <div id="stat" className="mt-2 mb-3 sm:mt-0 text-sm md:text-lg inline-flex gap-3 sm:gap-10 text-gray-400">
                <button id="stat-following" onClick={handleShowFollowing} className="text-left">
                  {following?.filter((d) => d.type === "FOLLOW").length} Following
                </button>
                <button id="stat-followers" onClick={handleShowFollowers} className="text-left">
                  {follower?.filter((d) => d.type === "FOLLOW").length} Followers
                </button>
                <div id="stat-threads">{statconv.threads} Threads</div>
              </div>
            </div>
          </div>
          <div id="acc-button" className="my-[5%] mx-auto md:text-xl font-medium max-w-[500px]">
            {choose === "thread" && (
              <div className="flex justify-around">
                <button onClick={handleAction} value="thread" className="text-white">
                  Thread
                </button>
                <button onClick={handleAction} value="activity" className="text-gray-400">
                  Activity
                </button>
                <button onClick={handleAction} value="saved" className="text-gray-400">
                  Saved
                </button>
              </div>
            )}
            {choose === "activity" && (
              <div className="flex justify-around">
                <button onClick={handleAction} value="thread" className="text-gray-400">
                  Thread
                </button>
                <button onClick={handleAction} value="activity" className="text-white">
                  Activity
                </button>
                <button onClick={handleAction} value="saved" className="text-gray-400">
                  Saved
                </button>
              </div>
            )}
            {choose === "saved" && (
              <div className="flex justify-around">
                <button onClick={handleAction} value="thread" className="text-gray-400">
                  Thread
                </button>
                <button onClick={handleAction} value="activity" className="text-gray-400">
                  Activity
                </button>
                <button onClick={handleAction} value="saved" className="text-white">
                  Saved
                </button>
              </div>
            )}
          </div>
          {chooseFunction()}
          {showFollowers && <Followers onCancel={handleCloseFollowers} page={page} data={follower} />}
          {showFollowing && <Following onCancel={handleCloseFollowing} page={page} data={following} />}
        </div>
      </section>
    </>
  );
}
