import Profile from "../../../../assets/img/account/profile.png";
import gambarThread from "../../../../assets/img/home/image7.png";
import PopupShare from "../../components/PopupShare.jsx";
import FullThread from "../../components/FullThread";
import { Icon } from "react-icons-kit";
import gambarProfile from "../../../../assets/img/home/dashicons_games.png";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from "react-icons-kit/feather/bookmark";
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from "react-icons-kit/feather/moreVertical";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserId } from "../../../../utils/helpers";
import { useParams } from "react-router-dom";
import PopupReport from "../../components/PopupReport";
import axiosInstance from "../../../../networks/api";

export default function Thread({ threadUser }) {
  console.log(threadUser);
  const [stat, setStat] = useState({ like: 105500, dislike: 99900, comment: 100 });
  const [statconv, setStatconv] = useState({ like: "", dislike: "", comment: "" });
  const navigate = useNavigate();

  useEffect(() => {
    let lk = stat.like;
    let dis = stat.dislike;
    let cmt = stat.comment;
    if (stat.like >= 1000) {
      lk = lk / 1000;
      lk = lk.toFixed(1);
    }
    if (stat.dislike >= 1000) {
      dis = dis / 1000;
      dis = dis.toFixed(1);
    }
    if (stat.comment >= 1000) {
      cmt = cmt / 1000;
      cmt = cmt.toFixed(1);
    }

    if (stat.like >= 1000) {
      if (stat.dislike >= 1000) {
        if (stat.comment >= 1000) {
          setStatconv({ like: lk + "k", dislike: dis + "k", comment: cmt + "k" });
        } else {
          setStatconv({ like: lk + "k", dislike: dis + "k", comment: cmt });
        }
      } else {
        if (stat.comment >= 1000) {
          setStatconv({ like: lk + "k", dislike: dis, comment: cmt + "k" });
        } else {
          setStatconv({ like: lk + "k", dislike: dis, comment: cmt });
        }
      }
    } else {
      if (stat.dislike >= 1000) {
        if (stat.comment >= 1000) {
          setStatconv({ like: lk, dislike: dis + "k", comment: cmt + "k" });
        } else {
          setStatconv({ like: lk, dislike: dis + "k", comment: cmt });
        }
      } else {
        if (stat.comment >= 1000) {
          setStatconv({ like: lk, dislike: dis, comment: cmt + "k" });
        } else {
          setStatconv({ like: lk, dislike: dis, comment: cmt });
        }
      }
    }
  }, [stat]);

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
  const [topic, setTopic] = useState(0);
  let { category } = useParams();

  useEffect(() => {
    if (threads.length !== 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [threads]);

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

  return (
    <>
      {threadUser === true && threads.length > 0 ? (
        threads
          ?.filter((d) => d.users.id === parseInt(getUserId()))
          .map((item, index) => (
            <div id="thread" key={index} className="max-w-[1000px] mx-auto">
              <div id="thread-box" className="flex">
                <div id="thread-header" className="flex">
                  <div className="mr-2">
                    <img src={gambarProfile} alt="gambar profile" />
                  </div>
                  <div className="flex items-center">
                    <div className="flex-col text-white max-w-[30vw]">
                      <h5 className="text-sm md:text-md font-semibold tracking-[2px] truncate">{item.users.name}</h5>
                      <h6 className="text-sm md:text-md font-medium mt-1 text-gray-300">2 days ago</h6>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-end items-center">
                  <button id="thread-button" className="text-sm sm:text-lg">
                    Follow
                  </button>
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
                    <Link to={`/user/thread/${item.id}`}>
                      <span className="cursor-pointer" onClick={handleShowFull}>
                        Open
                      </span>
                    </Link>
                    <Link to="/user/edit">
                      <div className="cursor-pointer">Edit</div>
                    </Link>
                    <span className="cursor-pointer" onClick={showPopupShare}>
                      Share
                    </span>
                    <span className="cursor-pointer" onClick={() => showPopupDelete(item.id)}>
                      Delete
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
              {/* {showFull && <FullThread thread={item && index === threadIndex} onCancel={handleCloseFull} />} */}
            </div>
          ))
      ) : (
        <div className="border border-solid border-[#d9d9d91a] rounded-xl h-60 py-10">
          <div className="text-md xl:text-lg text-grey text-center mb-10">No threads yet</div>
          <div className="flex w-full justify-center">
            <Link to="/user/create" className="px-8 py-4 bg-secondary-orange rounded-xl text-white text-md xl:text-lg">
              Create Here
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
