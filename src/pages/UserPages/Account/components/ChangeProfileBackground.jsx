import React from "react";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { x } from 'react-icons-kit/feather/x'
import Profile from "../../../../assets/img/account/profile.png"
import UploadPhotoBackground from "../../components/UploadPhotoBackground";
import Swal from "sweetalert2";
import axiosInstance from "../../../../networks/api";
import { FaUserAlt } from "react-icons/fa";

export default function ChangeProfileBackground({ closePopupProfPic, imgProfile }) {
    const [upload, setUpload] = useState(false)

    const handleRemoveProfile = (e) => {
        e.preventDefault();
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
                axiosInstance.post("/v1/user/deleteimagebackground",
                ).then((response) => {
                    if (response.status === 200) {
                        Swal.fire({
                            toast: true,
                            icon: "success",
                            title: "Successfully removed",
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
                        window.location.reload();
                    } else {
                        Swal.fire({
                            toast: true,
                            icon: "error",
                            title: "Error, Can't Remove This Picture",
                            animation: false,
                            background: "#222834",
                            color: "#DE1508",
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
                }).catch((err) => {
                    console.log(err)
                });
            }
        });
    }

    return (
        <div className="flex w-2/5 justify-center items-center">
            <div className="bg-white py-6 px-16 rounded-lg">
                {imgProfile === null || imgProfile === "" ?
                    <FaUserAlt style={{ width: "150px", height: "150px", margin: "auto" }} className="p-2 rounded-full text-white bg-primary-black m-auto scale-50 ml-[-10%] sm:ml-0 sm:scale-100 aspect-square" />
                    :
                    <img src={`data:image/jpeg;base64,${imgProfile}`} alt="ProfPic" className="mx-auto my-3 h-[150px] w-[150px] rounded-full" />
                }
                <div className="flex flex-col w-full">
                    <div className="text-sm sm:text:xl text-center my-3 font-bold">Synced Profile Photo</div>
                    <button onClick={() => { setUpload(true) }} className="text-sm sm:text:xl my-3 text-primary-blue font-bold text-center border-b-1 border-black">Upload Photo Background</button>
                    <button onClick={handleRemoveProfile} className="text-sm sm:text:xl my-3 text-secondary-red font-bold">Remove Current Background</button>
                    <button onClick={closePopupProfPic} className="text-sm sm:text:xl text-primary-black font-bold my-3">Cancel</button>
                </div>
            </div>
            {upload && <UploadPhotoBackground onCancel={() => { setUpload(false) }} />}
        </div>
    )
}
