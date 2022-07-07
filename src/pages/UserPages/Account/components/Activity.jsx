
import gambarProfile from "../../../../assets/img/home/dashicons_games.png";
import gambarThread from "../../../../assets/img/home/image7.png";
import PopupShare from "../../components/PopupShare.jsx";
import PopupReport from "../../components/PopupReport.jsx";
import FullThread from "../../components/FullThread";
import { Icon } from "react-icons-kit";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from 'react-icons-kit/feather/bookmark'
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from 'react-icons-kit/feather/moreVertical'
import { useState } from "react";
import Swal from "sweetalert2";

export default function Activity(){
    const [more, setMore] = useState(false)
    const [popupShare, setPopupShare] = useState(false)
    const [popupReport, setPopupReport] = useState(false)
    const [showFull, setFull] = useState(false)
    const [action, setAction] = useState("Liked")

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

    const handleShowFull = () => {
        setFull(!showFull);
    }
    const handleCloseFull = () => {
        setFull(false);
    }

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
    }

    return(
        <>
            <div id="thread" className="max-w-[1000px] mx-auto" data-aos="zoom-in">
                <div id="user-action" className="inline-flex gap-5 mb-5">
                    <Icon icon={thumbsUp} size={20} style={{color:"white"}} />
                    <div className="text-sm sm:text-lg md:text-xl text-white">Berry {action} on This Thread</div>
                </div>
                <div id="thread-box" className="flex border-t border-[#d9d9d91a]">
                    <div id="thread-header" className="flex">
                        <div className="mr-2">
                            <img src={gambarProfile} alt="gambar profile" />
                        </div>
                        <div className="flex items-center">
                            <div className="flex-col text-white max-w-[30vw]">
                                <h5 className="text-sm md:text-md font-semibold tracking-[2px] truncate">amdar07</h5>
                                <h6 className="text-sm md:text-md font-medium mt-1 text-gray-300">2 days ago</h6>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center">
                        <button id="thread-button" className="text-sm sm:text-lg">Follow</button>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <h3 className="text-sm sm:text-lg md:font-semibold text-white tracking-[1px]">Rekomendasi 5 Game Mobile yang Menarik di Minggu Keempat Bulan Mei 2022</h3>
                </div>
                <div>
                    <img src={gambarThread} alt="gambar thread" />
                </div>
                <div id="thread-icon" className="flex flex-1 justify-between mt-5">
                    <div className="cursor-pointer">
                        <Icon icon={thumbsUp} />
                        <span className="text-sm sm:text-lg text-white">100K</span>
                    </div>
                    <div className="cursor-pointer">
                        <Icon icon={thumbsDown} />
                        <span className="text-sm sm:text-lg text-white">100K</span>
                    </div>
                    <div className="cursor-pointer">
                        <Icon onClick={handleShowFull} icon={commentingO} />
                        <span className="text-sm sm:text-lg text-white">100K</span>
                    </div>
                    <div onClick={handleSave} className="cursor-pointer">
                        <Icon icon={bookmark} />
                    </div>
                    <div onClick={showMoreMenu}>
                        <Icon icon={moreVertical} />
                        <div className={more ? 'more-3 active' : 'more'}>
                            <span className="cursor-pointer" onClick={handleShowFull}>Open</span>
                            <span className="cursor-pointer" onClick={showPopupShare}>Share</span>
                            <span className="cursor-pointer" onClick={showPopupReport}>Report</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='close-popup' className={popupShare ? 'popupShare active' : 'popupShare'}>
                <div>
                    <div className="flex absolute inset-0 m-auto justify-center p-4">
                        <PopupShare closePopupShare={closePopupShare} />
                    </div>
                </div>
            </div>

            <div id='close-popup' className={popupReport ? 'popupReport active' : 'popupReport'}>
                <div>
                    <div className="flex absolute inset-0 m-auto justify-center p-4">
                        <PopupReport closePopupReport={closePopupReport}/>
                    </div>
                </div>
            </div>
            {showFull && <FullThread onCancel={handleCloseFull} />}
        </>
    )
}