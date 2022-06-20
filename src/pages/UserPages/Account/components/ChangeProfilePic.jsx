import React from "react";
import { Icon } from "react-icons-kit";
import { x } from 'react-icons-kit/feather/x'
import Profile from "../../../../assets/img/account/profile.png"

export default function ChangeProfilePic({closePopupProfPic}) {

    return (
        <div className="flex w-2/5 justify-center items-center">
            <div className="bg-white py-6 px-16 rounded-lg">
                <img src={Profile} alt="ProfPic" className="mx-auto mx-auto my-3"/>
                <div className="flex flex-col w-full">
                    <h4 className="text-center my-3 font-bold">Synced Profile Photo</h4>
                    <button className="my-3 text-primary-blue font-bold text-center border-b-1 border-black">Upload Photo</button>
                    <button className="my-3 text-secondary-red font-bold">Remove Current Photo</button>
                    <button onClick={closePopupProfPic} className="text-primary-black font-bold my-3">Cancel</button>
                </div>
            </div>
        </div>
    )
}
