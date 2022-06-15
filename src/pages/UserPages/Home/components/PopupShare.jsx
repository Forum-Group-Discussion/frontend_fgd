import React from "react";
import { Icon } from "react-icons-kit";
import { x } from 'react-icons-kit/feather/x'

function PopupShare({closePopupShare}) {

    return (
        <div className="flex w-2/5 justify-center items-center">
            <div className="bg-[#222834] py-6 px-8 rounded-[8px] relative">
                <div onClick={closePopupShare} className="absolute top-0 right-0 p-1 text-red-600">
                    <Icon className="bg-white " icon={x} />
                </div>
                <h4 className="text-center text-white mb-4 font-bold tracking-[1px]">Share</h4>
                <div className="flex justify-center">
                    <div className="text-dark bg-white px-4 py-2">https://www.found.com</div>
                    <button className="bg-[#3718C9] px-4 text-white font-bold tracking-[1px]">Copy</button>
                </div>
            </div>
        </div>
    )
}

export default PopupShare