import gambarProfile from "../../../assets/img/home/dashicons_games.png";
import gambarThread from "../../../assets/img/home/image7.png";
import PopupReport from "../../UserPages/components/PopupReport";
import PopupShare from "../../UserPages/components/PopupShare";
import FullThread from "../../UserPages/components/FullThread";
import { Icon } from "react-icons-kit";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from 'react-icons-kit/feather/bookmark'
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from 'react-icons-kit/feather/moreVertical'
import { useState,useEffect } from "react";
import Swal from "sweetalert2";

export default function Save(){
    const [more, setMore] = useState(false)
    const [popupShare, setPopupShare] = useState(false)
    const [popupReport, setPopupReport] = useState(false)
    const [showFull, setFull] = useState(false)
    const [stat, setStat] = useState({like:105500, dislike:99900, comment:100})
    const [statconv, setStatconv] = useState({like:"", dislike:"", comment:""})

    useEffect(()=>{
        let lk = stat.like
        let dis = stat.dislike
        let cmt = stat.comment
        if(stat.like>=1000){
            lk = lk/1000
            lk = lk.toFixed(1)
        }
        if(stat.dislike>=1000){
            dis = dis/1000
            dis = dis.toFixed(1)
        }
        if(stat.comment>=1000){
            cmt = cmt/1000
            cmt = cmt.toFixed(1)
        }

        if(stat.like>=1000){
            if(stat.dislike>=1000){
                if(stat.comment>=1000){
                    setStatconv({like:lk+"k", dislike:dis+"k",comment:cmt+"k"})
                }
                else{
                    setStatconv({like:lk+"k", dislike:dis+"k",comment:cmt})
                }
            }
            else{
                if(stat.comment>=1000){
                    setStatconv({like:lk+"k", dislike:dis,comment:cmt+"k"})
                }
                else{
                    setStatconv({like:lk+"k", dislike:dis,comment:cmt})
                }
            }
        }
        else{
            if(stat.dislike>=1000){
                if(stat.comment>=1000){
                    setStatconv({like:lk, dislike:dis+"k",comment:cmt+"k"})
                }
                else{
                    setStatconv({like:lk, dislike:dis+"k",comment:cmt})
                }
            }
            else{
                if(stat.comment>=1000){
                    setStatconv({like:lk, dislike:dis,comment:cmt+"k"})
                }
                else{
                    setStatconv({like:lk, dislike:dis,comment:cmt})
                }
            }
        }
    }, [stat])

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

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure to delete this thread?",
            icon: "warning",
            showCancelButton: true,
            showConfirmButton: true,
            background: "#151921",
            color: "#fff",
            confirmButtonColor: "#FF3D00",
            cancelButtonColor: "#D91E11",
            confirmButtonText: "Yes, Delete!",
            focusConfirm: false,
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                toast: true,
                icon: "success",
                title: "Delete Successfully",
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
        });
    }

    return(
        <>
            <div id="thread" className="max-w-[1000px] mx-auto z-10">
                <div id="thread-box" className="flex border-[#d9d9d91a]">
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
                        <button onClick={handleDelete} id="thread-button" className="text-sm sm:text-lg">Delete</button>
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
                        <span className="text-sm sm:text-lg text-white">{statconv.like}</span>
                    </div>
                    <div className="cursor-pointer">
                        <Icon icon={thumbsDown} />
                        <span className="text-sm sm:text-lg text-white">{statconv.dislike}</span>
                    </div>
                    <div onClick={handleShowFull} className="cursor-pointer">
                        <Icon icon={commentingO} />
                        <span className="text-sm sm:text-lg text-white">{statconv.comment}</span>
                    </div>
                    <div className="cursor-pointer">
                        <Icon icon={bookmark} />
                    </div>
                    <div onClick={showMoreMenu}>
                        <Icon icon={moreVertical} />
                        <div className={more ? 'more-3 active' : 'more'}>
                            <span className="cursor-pointer" onClick={handleShowFull}>Open</span>
                            <span className="cursor-pointer" onClick={showPopupShare}>Share</span>
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