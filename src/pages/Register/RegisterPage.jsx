/* eslint-disable */

import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Swal from "sweetalert2";

function RegisterPage() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  const [nameValidation, setNameValidation] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState("");

  const DEFAULT_USER = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const [users, setUsers] = useState(DEFAULT_USER);

  const handleOnChange = (e) => {
    const NAME = e.target.name;
    if (NAME === "name") {
      setUsers({ ...users, name: e.target.value });
      if (users.name.length >= 5) {
        setNameValidation("");
      } else if (users.name.length < 5) {
        setNameValidation("Username must be longer than 4 characters");
      }
    } else if (NAME === "email") {
      setUsers({ ...users, email: e.target.value });
      if (regexEmail.test(users.email)) {
        setEmailValidation("");
      } else {
        setEmailValidation("Email format does not match");
      }
    } else if (NAME === "password") {
      setUsers({ ...users, password: e.target.value });
      if (regexPassword.test(users.password)) {
        setPasswordValidation("");
      } else {
        setPasswordValidation("Password must contain at least 8 characters, including uppers/lowercase and numbers");
      }
    } else if (NAME === "confirmpassword") {
      setUsers({ ...users, confirmpassword: e.target.value });
      if (users.confirmpassword === users.password) {
        setConfirmPasswordValidation("");
      } else {
        setConfirmPasswordValidation("Confirm password does not match with password");
      }
    }
  };

  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.name.length < 5 || emailValidation !== "" || passwordValidation !== "" || users.confirmpassword !== users.password) {
      alert("Data does not match");
    } else {
      axios
        .post("http://34.125.26.208/v1/auth/register", { name: users.name, email: users.email, password: users.password })
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration is successful",
            showConfirmButton: false,
            timer: 1500,
          });
          setUsers(DEFAULT_USER);
          navigate("/login");
        })
        .catch((error) => {
          if (error.response.status === 401) setError(error.response.data.message);
          else {
            Swal.fire({
              position: "top-end",
              icon: "failed",
              title: "Something went wrong. Please try again later.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="mainRegister flex justify-center items-center fixed">
        <div className="box lg:p-5 p-1 py-5 lg:w-1/2 w-4/5  max-h-max flex flex-col items-center justify-center gap-y-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <h1 className="title text-center text-white lg:text-3xl md:text-2xl text-xl">Sign Up</h1>
          <form action="" onSubmit={handleSubmit} className="flex flex-col gap-y-3 self-center w-3/4">
            <div className="flex flex-col gap-y-7">
              <div className="flex flex-col">
                <input id="name" name="name" type="text" className="h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs" placeholder="Username" value={users.name} onChange={handleOnChange} required />
                <div className="h-1 p-1">{users.name.length >= 1 && <span className="text-secondary-orange">{nameValidation}</span>}</div>
              </div>
              <div className="flex flex-col">
                <input id="email" name="email" type="email" className="h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs" placeholder="Email" value={users.email} onChange={handleOnChange} required />
                <div className="h-1 p-1">{users.email.length >= 1 && <span className="mt-1 text-secondary-orange">{emailValidation}</span>}</div>
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <input id="password" name="password" type={showPassword === false ? "password" : "text"} placeholder="Password" className="w-full h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs" value={users.password} onChange={handleOnChange} required />
                  <div className="text-2xl top-3 right-5 absolute ">{showPassword === false ? <AiOutlineEye onClick={toggleShowPassword} /> : <AiOutlineEyeInvisible onClick={toggleShowPassword} />}</div>
                </div>
                <div className="h-1 p-1">{users.password.length >= 1 && <span className="mt-1 text-secondary-orange text-xs">{passwordValidation}</span>}</div>
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type={showPassword === false ? "password" : "text"}
                    placeholder="Confirm Password"
                    className="w-full h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs"
                    value={users.confirmpassword}
                    onChange={handleOnChange}
                    required
                  />
                  <div className="text-2xl top-3 right-5 absolute ">{showPassword === false ? <AiOutlineEye onClick={toggleShowPassword} /> : <AiOutlineEyeInvisible onClick={toggleShowPassword} />}</div>
                </div>
                <div className="h-1 p-1">{users.confirmpassword !== users.password && <span className="mt-1 text-secondary-orange">{confirmPasswordValidation}</span>}</div>
              </div>
            </div>

            <button id="registerBtn" className="buttonRegister text-white h-11 font-bold lg:text-xl text-sm mt-10">
              Continue
            </button>
            <div className="flex justify-center mt-10">
              <p className="text-white">Joined us before?</p>
              <Link to="/login" className="text-secondary-orange font-bold ml-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
