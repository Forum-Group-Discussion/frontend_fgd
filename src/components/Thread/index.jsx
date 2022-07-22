import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../networks/api";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "../../pages/UserPages/Home/Home.css";
import { Icon } from "react-icons-kit";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from "react-icons-kit/feather/bookmark";
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from "react-icons-kit/feather/moreVertical";
import PopupShare from "../../pages/UserPages/components/PopupShare";
import PopupReport from "../../pages/UserPages/components/PopupReport";
import "react-loading-skeleton/dist/skeleton.css";
import { getUserId } from "../../utils/helpers";
import ButtonFollow from "../../pages/UserPages/components/ButtonFollow";
import LoadingSkeleton from "../LoadingSkeleton";
import ButtonUnfollow from "../../pages/UserPages/components/ButtonUnfollow";

function Thread({ index, item, images, loading, photo }) {
  const [more, setMore] = useState({
    index: "",
    value: false,
  });
  const [showFull, setFull] = useState(false);
  const [popupShare, setPopupShare] = useState(false);
  const [popupReport, setPopupReport] = useState(false);
  const [threadIndex, setThreadIdex] = useState("");

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

  const handleShowFull = () => {
    setFull(!showFull);
  };

  const handleSave = (idx) => {
    console.log("id thread", idx);
    axiosInstance
      .post(
        "v1/savethread",
        {
          threads: {
            id: idx,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("sukses");
        console.log(res.data.data);
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
      });
  };

  const [countLike, setCountLike] = useState([]);
  const [countDisLike, setCountDisLike] = useState([]);
  const [countComment, setCountComment] = useState([]);
  const [threadId, setThreadId] = useState();

  const handleLike = (idx) => {
    axiosInstance
      .post(
        "v1/likethread",
        {
          thread_like: {
            id: idx,
          },
          is_like: true,
          is_dislike: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        console.log("sukses");
      });
  };

  const handleDisLike = (idx) => {
    axiosInstance
      .post(
        "v1/likethread",
        {
          thread_like: {
            id: idx,
          },
          is_like: false,
          is_dislike: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        console.log("sukses");
      });
  };

  useEffect(() => {
    axiosInstance
      .get("v1/likethread/likethreadbythread", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCountLike(response.data.data);
      });
  }, [countLike]);

  useEffect(() => {
    axiosInstance
      .get("v1/likethread/dislikethreadbythread", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCountDisLike(response.data.data);
      });
  }, [countDisLike]);

  useEffect(() => {
    axiosInstance.get("v1/comment/totalcommentbythread", {}).then((response) => {
      setCountComment(response.data.data);
    });
  }, [countComment]);

  const [following, setFollowing] = useState(null);
  useEffect(() => {
    axiosInstance.get("v1/following").then((response) => {
      setFollowing(response.data.data);
    });
  }, [following]);

  const [follower, setFollower] = useState(null);
  useEffect(() => {
    axiosInstance.get("v1/following/followers").then((response) => {
      setFollower(response.data.data);
    });
  }, [follower]);

  return (
    <div id="thread" key={index} className="max-w-[1000px] mx-auto">
      <div id="thread-box" className="flex">
        <div id="thread-header" className="flex">
          <img src={`data:image/jpeg;base64,${photo?.filter((d) => d.id === item.users.id).map((d) => d.image_base64)}`} alt="gambar profile" className="rounded-full mr-4 h-16 w-16 sm:h-24 sm:w-24 mx-auto" />
          {/* <img src={gambarProfile} alt="foto" /> */}
          <div className="flex items-center">
            <div className="flex-col text-white max-w-[30vw]">
              <h5 className="text-sm md:text-md font-semibold tracking-[2px] truncate">{item.users.name}</h5>
              <h6 className="text-sm md:text-md font-medium mt-1 text-gray-300">{new Date(item.createdAt).toLocaleString()}</h6>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center">{item.users.id !== parseInt(getUserId()) ? following?.filter((d) => d.user_follow.id === item.users.id && d.type === "FOLLOW").length === 1 ? <ButtonUnfollow user={item.users} /> : <ButtonFollow user={item.users} /> : []}</div>
      </div>
      <div className="mt-4 mb-4">
        <h3 className="text-sm sm:text-lg md:font-semibold text-white tracking-[1px]">{item.title}</h3>
      </div>
      {loading ? <LoadingSkeleton /> : <div>{item.image !== null && <img src={`data:image/jpeg;base64,${images.filter((d) => d.id === item.id).map((d) => d.image_base64)}`} alt="gambar profile" />}</div>}
      <div id="thread-icon" className="flex flex-1 justify-between mt-5">
        <div
          className="cursor-pointer"
          onClick={() => {
            handleLike(item.id);
            setThreadId(item.id);
          }}
        >
          <Icon icon={thumbsUp} />
          <span className="text-sm sm:text-lg text-white">{countLike?.filter((like) => item.id === like.thread_id).length === 0 ? "0" : countLike?.filter((like) => item.id === like.thread_id).map((like) => like.count_like_thread)}</span>
        </div>
        <div className="cursor-pointer" onClick={() => handleDisLike(item.id)}>
          <Icon icon={thumbsDown} />
          <span className="text-sm sm:text-lg text-white">{countDisLike?.filter((like) => item.id === like.thread_id).length === 0 ? "0" : countDisLike?.filter((like) => item.id === like.thread_id).map((like) => like.count_dislike_thread)}</span>
        </div>
        <div onClick={handleShowFull} className="cursor-pointer">
          <Icon icon={commentingO} />
          <span className="text-sm sm:text-lg text-white">{countComment?.filter((comment) => item.id === comment.thread_id).length === 0 ? "0" : countComment?.filter((comment) => item.id === comment.thread_id).length}</span>
        </div>
        <div onClick={() => handleSave(item.id)} className="cursor-pointer">
          <Icon icon={bookmark} />
        </div>
        <div onClick={() => showMoreMenu(index)}>
          <Icon icon={moreVertical} />
          <div className={more && index === threadIndex ? "more-3 active" : "more"}>
            <Link to={`/user/thread/${item.id}`}>
              <span className="cursor-pointer" onClick={handleShowFull}>
                Open
              </span>
            </Link>
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
            <PopupReport closePopupReport={closePopupReport} reportId={item.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thread;
