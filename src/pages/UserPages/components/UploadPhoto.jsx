import { useState, useRef } from "react";
import { IoIosClose } from "react-icons/io"
import { CgImage } from "react-icons/cg"
import axiosInstance from "../../../networks/api";
import Swal from "sweetalert2";


export default function UploadPhoto({ onCancel }) {
    const fotoThread = useRef(null);
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post("v1/user/editimage",
            {
                file: image
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
        ).then((response) => {
            if (response.status === 200) {
                Swal.fire({
                    toast: true,
                    icon: "success",
                    title: "Successfully Updated",
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
                    title: "Error, Check your connection Internet or contact Admin",
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

    return (
        <div id="filter-mobile-tablet">
            <div className="fixed z-50 inset-0 m-auto">
                <div onClick={onCancel} className="fixed inset-0 bg-[#ffffff4d]"></div>
                <div className="px-3">
                    <div id="box" className="no-scrollbar rounded-xl mt-[85%] md:mt-[45%] lg:mt-[35%] xl:mt-[25%] -translate-y-[50%] relative max-w-md mx-auto bg-white shadow-lg overflow-auto ring-1 ring-slate-900/5 -my-px">
                        <div className="relative">
                            <div id="header" className="sticky top-0 px-4 py-3 font-semibold text-sm text-slate-900 bg-slate-50/90 backdrop-blur-sm ring-1 ring-slate-900/10">
                                <div id="title" className="text-center">Upload Photo</div>
                                <IoIosClose id="close-button" onClick={onCancel} size={40} className="absolute right-1 top-1 cursor-pointer" />
                            </div>
                            <div id="list-account" className="py-20">
                                <div className="">
                                    <CgImage size={100} className="text-gray-400 mx-auto mb-2" />
                                    <div className="text-center mb-12">Drag your photo here</div>
                                    <div className="mx-auto w-fit">
                                        {/* <button className="mx-auto text-center text-white font-semibold px-6 py-3 bg-secondary-orange rounded-2xl block">
                                            Select from computer
                                        </button> */}
                                        <form onSubmit={handleSubmit} encType="multipart/form-data" className="text-center">
                                            <label htmlFor="img" className="bg-secondary-orange px-6 py-2 text-white rounded-lg cursor-pointer text-center">
                                                Choose Image
                                            </label>
                                            <input className="hidden"
                                                id="img"
                                                type="file"
                                                ref={fotoThread}
                                                onChange={(e) => {
                                                    setImage(e.target.files[0]);
                                                }}
                                                name="image"
                                            />
                                            <input id="submit-button" type="submit" value="Submit" className="mb-[12%] sm:mb-[4%] mt-6 w-full bg-primary-grey hover:bg-secondary-orange py-2 rounded-xl text-white md:text-xl font-bold"></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}