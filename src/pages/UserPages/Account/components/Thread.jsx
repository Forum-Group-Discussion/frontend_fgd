import Profile from "../../../../assets/img/account/profile.png"
import gambarThread from "../../../../assets/img/home/image7.png";
import PopupShare from "../../Home/components/PopupShare.jsx";
import { Icon } from "react-icons-kit";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from 'react-icons-kit/feather/bookmark'
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from 'react-icons-kit/feather/moreVertical'
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

export default function Thread(){
    const [more, setMore] = useState(false)
    const [popupShare, setPopupShare] = useState(false)
    const navigate = useNavigate()

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
    return(
        <>
            <div id="thread" className="max-w-[1000px] mx-auto" data-aos="zoom-in">
                <div id="thread-box" className="flex">
                    <div id="thread-header" className="flex">
                        <div className="mr-2">
                            <img src={Profile} alt="gambar profile" />
                        </div>
                        <div className="flex items-center">
                            <div className="flex-col text-white">
                            <h5 className="font-semibold tracking-[2px]">Berry burrie</h5>
                            <h6 className="font-medium mt-1 opacity-30">2 days ago</h6>
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
                    <div>
                        <Icon icon={thumbsUp} />
                        <span className="text-sm sm:text-lg text-white">100K</span>
                    </div>
                    <div>
                        <Icon icon={thumbsDown} />
                        <span className="text-sm sm:text-lg text-white">100K</span>
                    </div>
                    <div>
                        <Icon icon={commentingO} />
                        <span className="text-sm sm:text-lg text-white">100K</span>
                    </div>
                    <div>
                        <Icon icon={bookmark} />
                    </div>
                    <div onClick={showMoreMenu}>
                        <Icon icon={moreVertical} />
                        <div className={more ? 'more active' : 'more'}>
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
        </>
    )
}