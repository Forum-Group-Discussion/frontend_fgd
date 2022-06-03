import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "autoprefixer";

function RegisterPage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const [showPassword, setShowPassword] = useState(false);
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    const [nameValidation, setNameValidation] = useState('')
    const [phoneValidation, setPhoneValidation] = useState('')
    const [emailValidation, setEmailValidation] = useState('')
    const [passwordValidation, setPasswordValidation] = useState('')
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState('')

    const [users, setUsers] = useState({
        name: "",
        email: "",
        password: "",
        phone: 0,
        confirmpassword: ""
    });

    const handleOnChange = (e) => {
        const NAME = e.target.name;
        if (NAME === "name") {
            setUsers({ ...users, name: e.target.value });
            if (users.name.length >= 5) {
                setNameValidation('')
            } else if (users.name.length < 5) {
                setNameValidation('Username harus lebih dari 4 huruf')
            }
        }
        else if (NAME === "email") {
            setUsers({ ...users, email: e.target.value });
            if (regexEmail.test(users.email)) {
                setEmailValidation('')
            } else {
                setEmailValidation('Email tidak sesuai')
            }
        }
        else if (NAME === "password") {
            setUsers({ ...users, password: e.target.value });
            if (regexPassword.test(users.password)) {
                setPasswordValidation('')
            } else {
                setPasswordValidation('Password terdiri dari 8 karakter yang memiliki huruf dan angka')
            }
        }
        else if (NAME === "phone") {
            setUsers({ ...users, phone: e.target.value });
            if (users.phone.length >= 9 && users.phone.length <= 14) {
                setPhoneValidation('')
            } else if (users.phone.length < 9) {
                setPhoneValidation('No Handphone harus lebih besar dari 8 angka')
            } else if (users.phone.length > 14) {
                setPhoneValidation('No Handphone harus lebih kecil dari 14 angka')
            }
        }
        else if (NAME === "confirmpassword") {
            setUsers({ ...users, confirmpassword: e.target.value });
            if (users.confirmpassword === users.password) {
                setConfirmPasswordValidation('')
            } else {
                setConfirmPasswordValidation('Password harus sama')
            }
        }
    };

    const handleSubmit = (e) => {
        if (users.name.length < 5 || emailValidation != '' || passwordValidation != '' || users.phone.length < 9 || users.phone.length > 14 || users.confirmpassword != users.password) {
            alert('Data belum sesuai')
        } else {
            alert('Akun anda berhasil terdaftar')
        }
    }

    useEffect(() => {
        console.log(users);
    }, [users]);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="mainRegister flex justify-center items-center fixed">
                <div className="box lg:p-10 p-1 py-10 lg:w-1/2 w-4/5  max-h-max flex flex-col items-center justify-center gap-y-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                    <h1 className="title text-center text-white lg:text-3xl md:text-2xl text-xl">Sign Up</h1>
                    <form action="" onSubmit={handleSubmit} className="flex flex-col gap-y-3 self-center w-3/4">
                        <div className="flex flex-col gap-y-8">
                            <div className="flex flex-col">
                                <input id="name" name="name" type="text" className="h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs" placeholder="Username" value={users.name} onChange={handleOnChange} required />
                                {users.name.length >= 1 &&
                                    <span className="mt-1 text-secondary-orange">{nameValidation}</span>
                                }
                            </div>
                            <div className="flex flex-col">
                                <input id="email" name="email" type="email" className="h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs" placeholder="Email" value={users.email} onChange={handleOnChange} required />
                                {users.email.length >= 1 &&
                                    <span className="mt-1 text-secondary-orange">{emailValidation}</span>
                                }
                            </div>
                            <div className="flex flex-col">
                                <input id="phone" name="phone" type="number" className="h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs" placeholder="Phone Number" value={users.phone} onChange={handleOnChange} required />
                                {users.phone.length >= 1 &&
                                    <span className="mt-1 text-secondary-orange">{phoneValidation}</span>
                                }
                            </div>
                            <div className="flex flex-col">
                                <div className="relative">
                                    <input id="password" name="password" type={showPassword === false ? "password" : "text"} placeholder="Password" className="w-full h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs" value={users.password} onChange={handleOnChange} required />
                                    <div className="text-2xl top-3 right-5 absolute ">{showPassword === false ? <AiOutlineEye onClick={toggleShowPassword} /> : <AiOutlineEyeInvisible onClick={toggleShowPassword} />}</div>
                                </div>
                                {users.password.length >= 1 &&
                                    <span className="mt-1 text-secondary-orange">{passwordValidation}</span>
                                }
                            </div>
                            <div className="flex flex-col">
                                <div className="relative">
                                    <input id="confirmpassword" name="confirmpassword" type={showPassword === false ? "password" : "text"} placeholder="Confirm Password" className="w-full h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs" value={users.confirmpassword} onChange={handleOnChange} required />
                                    <div className="text-2xl top-3 right-5 absolute ">{showPassword === false ? <AiOutlineEye onClick={toggleShowPassword} /> : <AiOutlineEyeInvisible onClick={toggleShowPassword} />}</div>
                                </div>
                                {users.confirmpassword != users.password &&
                                    <span className="mt-1 text-secondary-orange">{confirmPasswordValidation}</span>
                                }
                            </div>
                        </div>
                        {/* <a href={() => {}} className="self-end text-white lg:text-sm text-xs">
                Forgot Password?
                </a> */}

                        <button id="registerBtn" className="buttonRegister text-white h-11 font-bold lg:text-xl text-sm mt-10">
                            Continue
                        </button>
                        <div className="flex justify-center mt-10">
                            <p className="text-white">Joined us before?</p>
                            <Link to="/login" className="text-secondary-orange font-bold ml-2">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
