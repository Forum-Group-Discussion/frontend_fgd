import React from "react";
import Sidebar from "../../../Components/Sidebar";
import True from "../../../../../assets/img/Admin/True.png";
import Report from "../../../Components/Report";
import DeleteThread from "../../../Components/DeleteThread";
import AOS from "aos";
import Swal from "sweetalert2";
import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../../../../networks/api";
import { Link, useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function CategoryUser() {
  const [account, setAccount] = useState({ name: "Hacked Account", profpic: "https://media.baamboozle.com/uploads/images/185613/1618204459_7530_url.jpeg", following: 1093392, followers: 9128, active: 2019 });
  const [choose, setChoose] = useState("thread");
  const [statconv, setStatconv] = useState({ following: 0, followers: 0 });
  const [suspen, setSuspen] = useState("true");
  const [getUserAPI, setGetUserAPI] = useState();

  let { nameUser } = useParams();

  const fetchData = useCallback(() => {
    const response = axiosInstance
      .get("v1/user/" + nameUser)
      .then((response) => {
        setGetUserAPI(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    return response;
  }, [getUserAPI]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [following, setFollowing] = useState(null);
  useEffect(() => {
    axiosInstance.get("v1/following/countuserfollowing").then((response) => {
      setFollowing(response.data.data);
    });
  }, [following]);

  const [follower, setFollower] = useState(null);
  useEffect(() => {
    axiosInstance.get("v1/following/countuserfollowers").then((response) => {
      setFollower(response.data.data);
      console.log("follower", response.data.data);
    });
  }, []);

  const [photoProfile, setPhotoProfile] = useState("");

  useEffect(() => {
    axiosInstance.get("v1/user/image/" + nameUser).then((res) => {
      setPhotoProfile(res.data.data.image_base64);
    });
  }, [photoProfile]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    let ing = account.following;
    let ers = account.followers;

    if (account.following >= 1000) {
      ing = ing / 1000;
      ing = ing.toFixed(1);
    }
    if (account.followers >= 1000) {
      ers = ers / 1000;
      ers = ers.toFixed(1);
    }

    if (account.following >= 1000) {
      if (account.followers >= 1000) {
        setStatconv({ following: ing + "k", followers: ers + "k" });
      } else {
        setStatconv({ following: ing + "k", followers: ers });
      }
    } else {
      if (account.followers >= 1000) {
        setStatconv({ following: ing, followers: ers + "k" });
      } else {
        setStatconv({ following: ing, followers: ers });
      }
    }
  }, [account]);

  const handleAction = (e) => {
    setChoose(e.target.value);
  };

  const handleSuspend = async (idx) => {
    const user = getUserAPI?.find((user) => user.id === idx);
    console.log("user", user.id);
    console.log("user", user);
    console.log("idx", idx);
    console.log("suspend", user.is_suspended);
    console.log("get", getUserAPI.is_suspended);

    Swal.fire({
      title: "Are you sure to suspend this account?",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      background: "#151921",
      color: "#fff",
      confirmButtonColor: "#FF3D00",
      cancelButtonColor: "#D91E11",
      confirmButtonText: "Yes, Suspend!",
      focusConfirm: false,
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .put("v1/user/suspend/" + user.id, !user.is_suspended)
          .then((response) => {
            Swal.fire({
              toast: true,
              icon: "success",
              title: "Suspend Successfully",
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
          })
          .catch((error) => {
            console.log(error);
          });
        setSuspen(!suspen);
      }
    });
  };

  const followYou = following?.filter((follow) => follow.id === getUserAPI?.id);
  const followMe = follower?.filter((follow) => follow.id === getUserAPI?.id);

  return (
    <div id="user" className="bg-primary-black h-screen w-screen overflow-hidden">
      <div className="container mx-auto xl:px-20 lg:px-15">
        <Sidebar />
        <div id="user-content">
          <div className="menu-content bg-primary-grey text-white p-3 sm:p-7 max-h-[85vh] overflow-auto no-scrollbar w-[90%] lg:w-[70%] xl:w-[80%] mx-auto lg:mx-0 lg:ml-[280px]">
            <div className="rounded-md border-gray-500/10 border-2 py-4">
              <div className="xl:px-20 md:px-10 lg:px-15 p-8 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-7 justify-between">
                <div id="user-profpic" className="flex items-center">
                  {photoProfile === null || photoProfile === "" ? (
                    <div className="bg-primary-black rounded-full aspect-square w-28 sm:w-[90%] mx-auto">
                      <FaUserAlt style={{ width: "100%", height: "100%", borderRadius: "50%", padding: "6px" }} className="" />
                    </div>
                  ) : (
                    <img src={`data:image/jpeg;base64,${photoProfile}`} alt="Icon-game" className="rounded-full aspect-square w-28 sm:w-[90%] mx-auto" />
                  )}
                </div>
                <div id="user-details" className="ml-0 md:ml-5 xl:ml-8 sm:col-span-4 mt-10">
                  <div className="flex justify-between">
                    <div id="user-username" className="font-bold text-sm sm: md:text-lg mb-2">
                      {getUserAPI?.name}
                    </div>
                    <div id="user-first-join" className="md:hidden mb-5 text-xs sm:text-sm">
                      Active since {account.active}
                    </div>
                  </div>
                  <div id="user-stat" className="bg-dark text-white/50 text-sm sm:text-base">
                    {followYou?.length === 0 ? <span className="text-white">Following 0</span> : <span className="text-white">Following {following?.filter((follow) => follow.id === getUserAPI?.id).map((follow) => follow.following)}</span>} |
                    {followMe?.length === 0 ? <span className="text-white ml-2">Follower 0</span> : <span className="text-white ml-2">Follower {follower?.filter((follow) => follow.id === getUserAPI?.id).map((follow) => follow.following)}</span>}
                  </div>
                </div>
                <div className="sm:col-span-5 md:col-span-2 mt-10 mx-auto md:mt-0">
                  <div className="hidden md:block mb-5 text-xs sm:text-sm">Active since {account.active}</div>
                  <div id="suspend-button">
                    {getUserAPI?.is_suspended ? (
                      // <img src={True} />
                      <button onClick={() => handleSuspend(getUserAPI.id)} className="rounded-full bg-secondary-orange hover:bg-secondary-orange/80 px-4 sm:px-8 py-2">
                        unSuspend
                      </button>
                    ) : (
                      <button onClick={() => handleSuspend(getUserAPI.id)} className="rounded-full bg-secondary-orange hover:bg-secondary-orange/80 px-4 sm:px-8 py-2">
                        Suspend
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {suspen ? (
              <section id="select-box" className="py-2">
                <div className="max-w-[1240px] mx-auto">
                  <div id="select-button" className="my-5 mx-auto md:text-xl font-medium max-w-[500px]">
                    {choose === "thread" ? (
                      <div className="flex justify-around">
                        <button onClick={handleAction} value="thread" className="text-white">
                          Thread
                        </button>
                        <button onClick={handleAction} value="Report" className="text-white/30">
                          Report
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-around">
                        <button onClick={handleAction} value="thread" className="text-white/30">
                          Thread
                        </button>
                        <button onClick={handleAction} value="activity" className="text-white">
                          Report
                        </button>
                      </div>
                    )}
                  </div>
                  {choose === "thread" ? <DeleteThread page="user" /> : <Report />}
                </div>
              </section>
            ) : (
              <div className="flex justify-center py-[190px]"> Temporarily deactivated account for 30 days </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
