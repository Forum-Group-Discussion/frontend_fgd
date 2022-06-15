import React from "react";
import { Icon } from "react-icons-kit";
import { x } from 'react-icons-kit/feather/x'

function PopupReport({closePopupReport}) {

    return (
        <div className="flex w-2/5 justify-center items-center">
            <div className="bg-[#222834] py-6 px-8 rounded-[8px] relative">
                <div onClick={closePopupReport} className="absolute top-0 right-0 p-1 text-red-600">
                    <Icon className="bg-white " icon={x} />
                </div>
                <h4 className="text-center text-white mb-4 font-bold tracking-[1px]">Report</h4>
                <p className="text-white text-center mb-4">why did you report this thread or account?</p>
                <div className="flex-column justify-center text-white">
                    <p className="bg-[#3718C9] rounded-[8px] mb-4 px-4 py-2">This thread contains inappropriate and pornographic elements </p>
                    <p className="bg-[#3718C9] rounded-[8px] px-4 py-2">This thread contains inappropriate and pornographic elements</p>
                </div>
            </div>
        </div>
    )
}

export default PopupReport