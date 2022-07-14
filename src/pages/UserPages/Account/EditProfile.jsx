import Navbar from "../components/Navbar";
import "./Profile.css"
import { BsCameraFill } from "react-icons/bs"
import Banner from "../../../assets/img/account/banner.png"
import Profile from "../../../assets/img/account/profile.png"
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"
import ChangeProfilePic from "./components/ChangeProfilePic";
import axiosInstance from "../../../networks/api";
import Swal from "sweetalert2";
import { getUserId } from "../../../utils/helpers";
import ChangeProfileBackground from "./components/ChangeProfileBackground";

export default function EditProfile() {
    const [showPassword, setShowPassword] = useState(false);
    const [popupProfPic, setPopupProfPic] = useState(false)
    const [popupProfBG, setPopupProfBG] = useState(false)
    const [profileAPI, setProfileAPI] = useState([])
    const navigate = useNavigate()

    const fetchData = useCallback(() => {
        const response = axiosInstance
            .get("v1/user/" + getUserId())
            .then((response) => {
                setProfileAPI(response.data.data)
            })
            .catch((error) => {
                console.log(error.response);
            });
        return response;
    }, [profileAPI]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const DEFAULT_USER_UPDATE = {
        name: "",
        username: "",
        bio: "",
        website: "",
        location: "",
    }

    const [data, setData] = useState(DEFAULT_USER_UPDATE)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleChange = (e) => {
        const NAME = e.target.name;
        const values = e.target.value;

        setData({
            ...data,
            [NAME]: values
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        scrollToTop()
        // edit data
        console.log("ini id", profileAPI.id)
        console.log("submit", data)
        await axiosInstance.put("v1/user/update/" + profileAPI.id, data)
            .then((response) => {
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
                setData(DEFAULT_USER_UPDATE)
                navigate("/user/account")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const showPopupProfBG = () => {
        if (popupProfBG === false) {
            setPopupProfBG(true)
        }
    }

    const showPopupProfPic = () => {
        if (popupProfPic === false) {
            setPopupProfPic(true)
        }
    }

    const closePopupProfPic = () => {
        if (popupProfPic === true) {
            setPopupProfPic(false)
        } else if (popupProfBG === true) {
            setPopupProfBG(false)
        }
    }

    const [imgProfileBG, setImgProfileBG] = useState("");
    useEffect(() => {
        axiosInstance
            .get("v1/user/imagebackground", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setImgProfileBG(res.data.data.image_base64);
            });
    }, []);

    const [imgProfile, setImgProfile] = useState("");
    useEffect(() => {
        axiosInstance
            .get("v1/user/image", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setImgProfile(res.data.data.image_base64);
            });
    }, []);

    return (
        <>
            <Navbar />
            <section id="account" className="bg-primary-black p-[10%]">
                <div className="max-w-[1240px] mx-auto">
                    <div id="acc-details" className="border-b-2 border-[#d9d9d91a] pb-[5%] text-white md:mx-[0] mx-auto">
                        <div id="image-bg">
                            <div id="image-button">
                                <div onClick={showPopupProfBG} id="image-text">
                                    Change Background
                                </div>
                            </div>
                            <img src={`data:image/jpeg;base64,${imgProfileBG}`} className="h-[240px] w-full rounded-lg" alt="banner-pic" />
                        </div>
                        <div id="acc-profile" className="flex justify-between">
                            <div className="grid gap-y-5 mt-[-20%] sm:mt-[-7%] ml-[3%]">
                                <img id="profile-pic" src={`data:image/jpeg;base64,${imgProfile}`} alt="profile-pic" className="h-[150px] w-[150px] rounded-full scale-50 ml-[-10%] sm:ml-0 sm:scale-100 aspect-square" />
                                <div onClick={showPopupProfPic} className="mt-[-20%] sm:mt-[0%] text-sm sm:text-md cursor-pointer">Change profil photo</div>
                            </div>
                        </div>
                    </div>
                    <div id="edit-profile">
                        <form onSubmit={handleSubmit} className="text-white relative">
                            <div className="mb-[6%] sm:mb-[2%] mt-[3%] text-sm sm:text-md">
                                <label htmlFor="fullname" className="block text-gray-300 mb-2">Full Name</label>
                                <input id="fullname" type="text" name="name" value={data.name} onChange={handleChange}
                                    className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                            </div>
                            <div className="mb-[6%] sm:mb-[2%] text-sm sm:text-md">
                                <label htmlFor="username" className="block text-gray-300 mb-2">Username</label>
                                <input id="username" type="text" name="username" value={data.username} onChange={handleChange}
                                    className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                            </div>
                            <div className="mb-[6%] sm:mb-[2%] text-sm sm:text-md">
                                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                <input id="email" type="text" name="email" value={profileAPI.email} disabled={true}
                                    className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                            </div>
                            <div className="mb-[6%] sm:mb-[2%] text-sm sm:text-md">
                                <label htmlFor="bio" className="block text-gray-300 mb-2">Bio</label>
                                <textarea id="bio" name="bio" value={data.bio} onChange={handleChange}
                                    rows="7" className="w-full bg-primary-grey rounded-lg text-white py-3 px-8"></textarea>
                            </div>
                            <div className="mb-[6%] sm:mb-[2%] text-sm sm:text-md">
                                <label htmlFor="web" className="block text-gray-300 mb-2">Website</label>
                                <input id="web" type="text" name="website" value={data.website} onChange={handleChange}
                                    className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                            </div>
                            <div className="mb-[6%] sm:mb-[2%] text-sm sm:text-md">
                                <label htmlFor="loc" className="block text-gray-300 mb-2">Location</label>
                                <input id="loc" type="text" name="location" value={data.location} onChange={handleChange}
                                    className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                            </div>

                            <input type="submit" value="Save" className="absolute top-[-15%] md:top-[-25%] right-0 md:text-2xl m-[3%] text-md sm-text-xl px-4 py-2 md:px-6 md:py-3 bg-secondary-orange rounded-xl sm:rounded-2xl text-white cursor-pointer" />
                        </form>
                    </div>
                    <div id='close-popup' className={popupProfPic ? 'popupProfPic active' : 'popupProfPic'}>
                        <div>
                            <div className="flex absolute inset-0 m-auto justify-center p-4">
                                <ChangeProfilePic closePopupProfPic={closePopupProfPic} imgProfile={imgProfile} />
                            </div>
                        </div>
                    </div>
                    <div id='close-popup' className={popupProfBG ? 'popupProfBG active' : 'popupProfBG'}>
                        <div>
                            <div className="flex absolute inset-0 m-auto justify-center p-4">
                                <ChangeProfileBackground closePopupProfPic={closePopupProfPic} imgProfile={imgProfileBG} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}