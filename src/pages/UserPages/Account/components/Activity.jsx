
import gambarProfile from "../../../../assets/img/home/dashicons_games.png";
import gambarThread from "../../../../assets/img/home/image7.png";
import PopupShare from "./PopUpShare.jsx";
import PopupReport from "./PopUpReport.jsx";
import { Icon } from "react-icons-kit";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { bookmark } from 'react-icons-kit/feather/bookmark'
import { commentingO } from "react-icons-kit/fa/commentingO";
import { moreVertical } from 'react-icons-kit/feather/moreVertical'
import { useState } from "react";

export default function Activity(){
    const [more, setMore] = useState(false)
    const [popupShare, setPopupShare] = useState(false)
    const [popupReport, setPopupReport] = useState(false)
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
    return(
        <>
            <div id="thread" className="max-w-[1000px] mx-auto" data-aos="zoom-in">
                <div id="user-action" className="inline-flex gap-5 mb-5">
                    <Icon icon={thumbsUp} size={20} style={{color:"white"}} />
                    <div className="text-lg md:text-xl text-white">Berry {action} on This Thread</div>
                </div>
                <div id="thread-box" className="flex border-t border-[#d9d9d91a]">
                    <div id="thread-header" className="flex">
                        <div className="mr-2">
                            <img src={gambarProfile} alt="gambar profile" />
                        </div>
                        <div className="flex items-center">
                            <div className="flex-col text-white">
                            <h5 className="font-semibold tracking-[2px]">amdar07</h5>
                            <h6 className="font-medium mt-1 opacity-30">2 days ago</h6>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center">
                        <button id="thread-button">Follow</button>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <h3 className="font-semibold text-white tracking-[1px]">Rekomendasi 5 Game Mobile yang Menarik di Minggu Keempat Bulan Mei 2022</h3>
                </div>
                <div>
                    <img src={gambarThread} alt="gambar thread" />
                </div>
                <div id="thread-icon" className="flex flex-1 justify-between mt-5">
                    <div>
                        <Icon icon={thumbsUp} />
                        <span>100K</span>
                    </div>
                    <div>
                        <Icon icon={thumbsDown} />
                        <span>100K</span>
                    </div>
                    <div>
                        <Icon icon={commentingO} />
                        <span>100K</span>
                    </div>
                    <div>
                        <Icon icon={bookmark} />
                    </div>
                    <div onClick={showMoreMenu}>
                        <Icon icon={moreVertical} />
                        <div className={more ? 'more active' : 'more'}>
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
        </>
    )
}