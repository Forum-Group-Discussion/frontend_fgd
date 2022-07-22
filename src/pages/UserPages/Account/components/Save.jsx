import gambarProfile from "../../../../assets/img/home/dashicons_games.png";
import gambarThread from "../../../../assets/img/home/image7.png";
import PopupShare from "../../components/PopupShare.jsx";
import PopupReport from "../../components/PopupReport.jsx";
import FullThread from "../../components/FullThread";
import { Icon } from "react-icons-kit";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from "react-icons-kit/feather/bookmark";
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from "react-icons-kit/feather/moreVertical";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import threadSlice from "../../../../redux/threadSlice";
import axiosInstance from "../../../../networks/api";
import { getUserId } from "../../../../utils/helpers";
import ButtonFollow from "../../components/ButtonFollow";
import ButtonUnfollow from "../../components/ButtonUnfollow";
import LoadingSkeleton from "../../../../components/LoadingSkeleton";

export default function Save({ saveThread, loading, images, photo }) {
  const [more, setMore] = useState({
    index: "",
    value: false,
  });
  const [threadIndex, setThreadIdex] = useState("");
  const [popupShare, setPopupShare] = useState(false);
  const [popupReport, setPopupReport] = useState(false);
  const [showFull, setFull] = useState(false);

  const [countLike, setCountLike] = useState([]);
  const [countDisLike, setCountDisLike] = useState([]);
  const [countComment, setCountComment] = useState([]);

  const showPopupDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#FDBB2E",
      backdrop: "#ffffff4d",
      background: "#222834",
      color: "#FDBB2E",
      showCancelButton: true,
      confirmButtonColor: "#18B015",
      cancelButtonColor: "#DE1508",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete("v1/thread/" + id).then(() => {
          Swal.fire({
            toast: true,
            icon: "success",
            title: "Thread successfully deleted",
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
              window.location.reload();
            },
          });
        });
      }
    });
  };

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
    setThreadIdex(index);
    if (more === false) {
      setMore(true);
    } else {
      setMore(false);
    }
  };

  const handleShowFull = () => {
    setFull(!showFull);
  };
  const handleCloseFull = () => {
    setFull(false);
  };

  const handleUnSaved = (id) => {
    axiosInstance.delete("v1/savethread/" + id).then(() => {
      window.location.reload();
      Swal.fire({
        toast: true,
        icon: "success",
        title: "Thread successfully unsaved",
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

  const [following, setFollowing] = useState(null);
  useEffect(() => {
    axiosInstance.get("v1/following").then((response) => {
      setFollowing(response.data.data);
    });
  }, [following]);

  return (
    <>
      {saveThread?.map((item, index) => (
        <div id="thread" key={index} className="max-w-[1000px] mx-auto" data-aos="zoom-in">
          <div id="thread-box" className="flex">
            <div id="thread-header" className="flex">
              <img src={`data:image/jpeg;base64,${photo?.filter((d) => d.id === item.user.id).map((d) => d.image_base64)}`} alt="gambar profile" className="rounded-full mr-4 h-16 w-16 sm:h-24 sm:w-24 mx-auto" />
              {/* <img src={gambarProfile} alt="foto" /> */}
              <div className="flex items-center">
                <div className="flex-col text-white max-w-[30vw]">
                  <h5 className="text-sm md:text-md font-semibold tracking-[2px] truncate">{item.user.name}</h5>
                  <h6 className="text-sm md:text-md font-medium mt-1 text-gray-300">{new Date(item.threads.createdAt).toLocaleString()}</h6>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-end items-center">{item.user.id !== parseInt(getUserId()) ? following?.filter((d) => d.user_follow.id === item.users.id && d.type === "FOLLOW").length === 1 ? <ButtonUnfollow user={item.users} /> : <ButtonFollow user={item.users} /> : []}</div>
          </div>
          <div className="mt-4 mb-4">
            <h3 className="text-sm sm:text-lg md:font-semibold text-white tracking-[1px]">{item.threads.title}</h3>
          </div>
          {loading ? <LoadingSkeleton /> : <div>{item.image !== null && <img src={`data:image/jpeg;base64,${images.filter((d) => d.id === item.threads.id).map((d) => d.image_base64)}`} alt="gambar profile" />}</div>}
          <div id="thread-icon" className="flex flex-1 justify-between mt-5">
            <div
              className="cursor-pointer"
              onClick={() => {
                handleLike(item.threads.id);
                setThreadId(item.threads.id);
              }}
            >
              <Icon icon={thumbsUp} />
              <span className="text-sm sm:text-lg text-white">{countLike?.filter((like) => item.threads.id === like.thread_id).length === 0 ? "0" : countLike?.filter((like) => item.threads.id === like.thread_id).map((like) => like.count_like_thread)}</span>
            </div>
            <div className="cursor-pointer" onClick={() => handleDisLike(item.threads.id)}>
              <Icon icon={thumbsDown} />
              <span className="text-sm sm:text-lg text-white">{countDisLike?.filter((like) => item.threads.id === like.thread_id).length === 0 ? "0" : countDisLike?.filter((like) => item.threads.id === like.thread_id).map((like) => like.count_dislike_thread)}</span>
            </div>
            <div onClick={handleShowFull} className="cursor-pointer">
              <Icon icon={commentingO} />
              <span className="text-sm sm:text-lg text-white">{countComment?.filter((comment) => item.threads.id === comment.thread_id).length === 0 ? "0" : countComment?.filter((comment) => item.threads.id === comment.thread_id).length}</span>
            </div>
            <div onClick={() => handleUnSaved(item.id)} className="cursor-pointer">
              <Icon icon={bookmark} />
            </div>
            <div onClick={() => showMoreMenu(index)}>
              <Icon icon={moreVertical} />
              <div className={more && index === threadIndex ? "more-3 active" : "more"}>
                <Link to={`/user/thread/${item.threads.id}`}>
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
                <PopupReport closePopupReport={closePopupReport} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
