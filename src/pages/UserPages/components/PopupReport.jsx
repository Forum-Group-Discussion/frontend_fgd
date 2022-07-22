import React from "react";
import { Icon } from "react-icons-kit";
import { x } from 'react-icons-kit/feather/x'
import axiosInstance from "../../../networks/api";
import Swal from "sweetalert2";


function PopupReport({ closePopupReport, reportId }) {

    const handleReport = (e) => {
        const value = e.target.value
        console.log("value ", value)
        console.log("id report", reportId)
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
                axiosInstance.post("v1/reportthread", {
                    thread: {
                        id: reportId
                    },
                    report_type: value
                }, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                ).then((response) => {
                    if (response.status === 200) {
                        Swal.fire({
                            toast: true,
                            icon: "success",
                            title: "Successfully report",
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
                }).catch((err) => {
                    console.log(err)
                });
            }
        });
    }

    return (
        <div className="flex w-[80%] max-w-[500px] text-xs sm:text-sm md:text-base justify-center items-center">
            <div className="bg-[#222834] py-6 px-8 rounded-[8px] relative">
                <div id="close-button" onClick={closePopupReport} className="absolute top-0 right-0 p-1 text-red-600">
                    <Icon icon={x} />
                </div>
                <h4 className="text-center text-white mb-4 font-bold tracking-[1px]">Report</h4>
                <p className="text-white text-center mb-4">why did you report this thread or account?</p>
                <div className="flex-column justify-center text-white">
                    <button onClick={(e) => handleReport(e)} value="This_thread_contains_inappropriate_and_pornographic_elements" className="text-left cursor-pointer bg-[#3718C9] rounded-[8px] mb-4 px-4 py-2">This thread contains inappropriate and pornographic elements</button>
                    <button onClick={(e) => handleReport(e)} value="This_thread_contains_inappropriate_and_Bullying_elements" className="text-left cursor-pointer bg-[#3718C9] rounded-[8px] px-4 py-2">This thread contains inappropriate and Bullying elements</button>
                </div>
            </div>
        </div>
    )
}

export default PopupReport