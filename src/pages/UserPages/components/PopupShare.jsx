import React from "react";
import { Icon } from "react-icons-kit";
import { x } from 'react-icons-kit/feather/x'
import Swal from "sweetalert2";

function PopupShare({closePopupShare}) {

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href)
        // window.clipboardData.setData("Text", window.location.href)
        Swal.fire({
            toast: true,
            icon: "success",
            title: "Copied to clipboard",
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

    return (
        <div className="flex text-xs sm:text-sm md:text-base justify-center items-center">
            <div className="bg-[#222834] py-6 px-8 rounded-[8px] relative">
                <div id="close-button" onClick={closePopupShare} className="absolute top-0 right-0 p-1 text-red-600">
                    <Icon icon={x} />
                </div>
                <h4 className="text-center text-white mb-4 font-bold tracking-[1px]">Share</h4>
                <div className="flex justify-center">
                    <div className="rounded-tl-[4px] rounded-bl-[4px] text-dark bg-white px-4 py-2">{window.location.href}</div>
                    <button onClick={handleShare} className="bg-[#3718C9] rounded-tr-[4px] rounded-br-[4px] px-4 text-white font-bold tracking-[1px]">Copy</button>
                </div>
            </div>
        </div>
    )
}

export default PopupShare