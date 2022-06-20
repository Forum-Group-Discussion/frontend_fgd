import Navbar from "../components/Navbar";
import "./Profile.css"
import { BsCameraFill } from "react-icons/bs"
import Banner from "../../../assets/img/account/banner.png"
import Profile from "../../../assets/img/account/profile.png"
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom"
import ChangeProfilePic from "./components/ChangeProfilePic";

export default function EditProfile(){
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({username:"Berry burrie", email:"berryb@gmail.com", password:"Abcde1234", bio:"Hello Found", website:"https://medium.com/@berryb", location:"5001 MELROSE AVE , LOS ANGELES, CA 90038-4195, USA"})
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    const [nameValidation, setNameValidation] = useState("");
    const [emailValidation, setEmailValidation] = useState("");
    const [passwordValidation, setPasswordValidation] = useState("");
    const [popupProfPic, setPopupProfPic] = useState(true)
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
        if (NAME === "username") {
            if (data.username.length >= 5) {
                setNameValidation("");
            } else if (data.username.length < 5) {
                setNameValidation("Username must be longer than 4 characters");
            }
        } 
        else if (NAME === "email") {
            if (regexEmail.test(data.email)) {
                setEmailValidation("");
            } else {
                setEmailValidation("Email format does not match");
            }
        } 
        else if (NAME === "password") {
            if (regexPassword.test(data.password)) {
                setPasswordValidation("");
            } else {
                setPasswordValidation("Password must contain at least 8 characters, including uppers/lowercase and numbers");
            }
        } 
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (nameValidation !=="" || emailValidation !== "" || passwordValidation !== "") {
            alert("Data does not match");
        }
        else{
            navigate("/user/account")
            scrollToTop()
            // edit data
        }
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
                    <div className="relative">
                        <div className="absolute p-2 bg-white rounded-full w-15 right-3 bottom-3">
                            <BsCameraFill size={30} className="fill-secondary-orange" />
                        </div>
                    </div>
                    <div id="acc-profile" className="flex justify-between">
                        <div className="grid gap-y-5 mt-[-5%] ml-[3%]">
                            <img id="profile-pic" src={Profile} alt="profile-pic" />
                            <div onClick={showPopupProfPic} className="cursor-pointer">Change profil photo</div>
                        </div>
                    </div> 
                </div>
                <div id="edit-profile">
                    <form onSubmit={handleSubmit} className="text-white relative">
                        <div className="mb-[2%] mt-[3%]">
                            <label htmlFor="username" className="block text-gray-300 mb-2">Username</label>
                            <input id="username" type="text" name="username" value={data.username} onChange={handleChange}
                            className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                        </div>
                        <div className="mb-[2%]">
                            <label htmlFor="username" className="block text-gray-300 mb-2">Email</label>
                            <input id="email" type="text" name="email" value={data.email} onChange={handleChange} 
                            className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                        </div>
                        <div className="mb-[2%]">
                            <label htmlFor="pass" className="block text-gray-300 mb-2">Password</label>
                            <div className="relative">
                                <input id="pass" type={showPassword === false ? "password" : "text"} name="password" value={data.password} onChange={handleChange} 
                                className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                                <div className="text-2xl top-3 right-5 absolute ">{showPassword === false ? <AiOutlineEye onClick={toggleShowPassword} /> : <AiOutlineEyeInvisible onClick={toggleShowPassword} />}</div>
                            </div>
                        </div>
                        <div className="mb-[2%]">
                            <label htmlFor="bio" className="block text-gray-300 mb-2">Bio</label>
                            <textarea id="bio" name="bio" value={data.bio} onChange={handleChange} 
                            rows="7" className="w-full bg-primary-grey rounded-lg text-white py-3 px-8"></textarea>
                        </div>
                        <div className="mb-[2%]">
                            <label htmlFor="web" className="block text-gray-300 mb-2">Website</label>
                            <input id="web" type="text" name="website" value={data.website} onChange={handleChange} 
                            className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                        </div>
                        <div className="mb-[2%]">
                            <label htmlFor="loc" className="block text-gray-300 mb-2">Location</label>
                            <input id="loc" type="text" name="location" value={data.location} onChange={handleChange} 
                            className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
                        </div>
                            
                        <input type="submit" value="Save" className="absolute top-[-30%] right-0 text-xl md:text-2xl m-[3%] text-secondary-orange cursor-pointer"/>
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