import Profile from "../../../../assets/img/account/profile.png"
import gambarThread from "../../../../assets/img/home/image7.png";
import PopupShare from "../../components/PopupShare.jsx";
import FullThread from "../../components/FullThread";
import { Icon } from "react-icons-kit";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from 'react-icons-kit/feather/bookmark'
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from 'react-icons-kit/feather/moreVertical'
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

export default function Thread(){
    const [more, setMore] = useState(false)
    const [popupShare, setPopupShare] = useState(false)
    const [showFull, setFull] = useState(false)
    const [stat, setStat] = useState({like:105500, dislike:99900, comment:100})
    const [statconv, setStatconv] = useState({like:"", dislike:"", comment:""})
    const navigate = useNavigate()

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

    const showPopupDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconColor: "#FDBB2E",
            backdrop: "#ffffff4d",
            background: "#222834",
            color: "#FDBB2E",
            showCancelButton: true,
            confirmButtonColor: '#18B015',
            cancelButtonColor: '#DE1508',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/user/account");
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
                    },
                });
            }
        })
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
                <div id="thread-box" className="flex">
                    <div id="thread-header" className="flex">
                        <div className="mr-2">
                            <img src={Profile} alt="gambar profile" />
                        </div>
                        <div className="flex items-center">
                            <div className="flex-col text-white max-w-[30vw]">
                            <h5 className="text-sm md:text-md font-semibold tracking-[2px] truncate">Berry burrie</h5>
                            <h6 className="text-sm md:text-md font-medium mt-1 opacity-30">2 days ago</h6>
                            </div>
                        </div>
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
                    <div onClick={handleSave} className="cursor-pointer">
                        <Icon icon={bookmark} />
                    </div>
                    <div onClick={showMoreMenu}>
                        <Icon icon={moreVertical} />
                        <div className={more ? 'more-4 active' : 'more'}>
                            <span className="cursor-pointer" onClick={handleShowFull}>Open</span>
                            <Link to="/user/edit"><div className="cursor-pointer">Edit</div></Link>
                            <span className="cursor-pointer" onClick={showPopupShare}>Share</span>
                            <span className="cursor-pointer" onClick={showPopupDelete}>Delete</span>
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
            {showFull && <FullThread onCancel={handleCloseFull} />}
        </>
    )
}