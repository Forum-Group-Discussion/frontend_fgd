import Navbar from "../components/Navbar";
import "./Profile.css"
import { BsCameraFill } from "react-icons/bs"
import Banner from "../../../assets/img/account/banner.png"
import Profile from "../../../assets/img/account/profile.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ChangeProfilePic from "./components/ChangeProfilePic";

export default function EditProfile(){
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({fullname:"Berry Burrie", username:"Berry burrie", email:"berryb@gmail.com", bio:"Hello Found", website:"https://medium.com/@berryb", location:"5001 MELROSE AVE , LOS ANGELES, CA 90038-4195, USA"})
    const [popupProfPic, setPopupProfPic] = useState(false)
    const navigate = useNavigate()

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    const handleChange = e => {
        const NAME = e.target.name;
        setData({ ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/user/account")
        scrollToTop()
            // edit data
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const showPopupProfPic = () => {
        if(popupProfPic === false) {
            setPopupProfPic(true)
        }
    }

    const closePopupProfPic = () => {
        if(popupProfPic === true) {
            setPopupProfPic(false)
        }
    }

    return(
        <>
        <Navbar />
        <section id="account" className="bg-primary-black p-[10%]">
            <div className="max-w-[1240px] mx-auto">
                <div id="acc-details" className="border-b-2 border-[#d9d9d91a] pb-[5%] text-white md:mx-[0] mx-auto">
                    <img src={Banner} alt="banner-pic"/>
                    <div id="acc-profile" className="flex justify-between">
                        <div className="grid gap-y-5 mt-[-20%] sm:mt-[-7%] ml-[3%]">
                            <img id="profile-pic" src={Profile} alt="profile-pic" className="scale-50 ml-[-10%] sm:ml-0 sm:scale-100 aspect-square" />
                            <div onClick={showPopupProfPic} className="mt-[-20%] sm:mt-[0%] text-sm sm:text-md cursor-pointer">Change profil photo</div>
                        </div>
                    </div> 
                </div>
                <div id="edit-profile">
                    <form onSubmit={handleSubmit} className="text-white relative">
                        <div className="mb-[6%] sm:mb-[2%] mt-[3%] text-sm sm:text-md">
                            <label htmlFor="fullname" className="block text-gray-300 mb-2">Full Name</label>
                            <input id="fullname" type="text" name="fullname" value={data.fullname} onChange={handleChange}
                            className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                        </div>
                        <div className="mb-[6%] sm:mb-[2%] text-sm sm:text-md">
                            <label htmlFor="username" className="block text-gray-300 mb-2">Username</label>
                            <input id="username" type="text" name="username" value={data.username} onChange={handleChange} 
                            className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                        </div>
                        <div className="mb-[6%] sm:mb-[2%] text-sm sm:text-md">
                            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                            <input id="email" type="text" name="username" value={data.email} disabled={true} 
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
                            
                        <input type="submit" value="Save" className="absolute top-[-15%] md:top-[-25%] right-0 md:text-2xl m-[3%] text-md sm-text-xl px-4 py-2 md:px-6 md:py-3 bg-secondary-orange rounded-xl sm:rounded-2xl text-white cursor-pointer"/>
                    </form>
                </div>
                <div id='close-popup' className={popupProfPic ? 'popupProfPic active' : 'popupProfPic'}>
                <div>
                    <div className="flex absolute inset-0 m-auto justify-center p-4">
                        <ChangeProfilePic closePopupProfPic={closePopupProfPic}/>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}