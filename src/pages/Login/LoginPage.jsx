import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./LoginPage.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { getIsAdmin, setUserSession } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../networks/api";
import { useDispatch } from "react-redux";
import { USER_NAME } from "../../redux/userSlice";

function LoginPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [showPassword, setShowPassword] = useState(false);

  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const NAME = e.target.name;
    if (NAME === "email") {
      setUsers({ ...users, email: e.target.value });
    } else if (NAME === "password") {
      setUsers({ ...users, password: e.target.value });
    }
  };

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/v1/auth/login", { email: users.email, password: users.password })
      .then((response) => {
        Swal.fire({
          toast: true,
          icon: "success",
          title: "Successfully login",
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
        setUserSession(response.data.data.token, response.data.data.name, response.data.data.isAdmin);
        console.log(response.data.data.name);
        dispatch(USER_NAME(response.data.data.name));
        if (getIsAdmin() === "true") {
          navigate("/admin/home");
        } else {
          navigate("/user/home");
        }
      })
      .catch((error) => {
        if (error.response.responseCode === 401) {
          Swal.fire({
            toast: true,
            icon: "error",
            title: "Something went wrong, please try again later",
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
        } else {
          Swal.fire({
            toast: true,
            icon: "error",
            title: "Check your username and password",
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
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="mainLogin flex justify-center items-center fixed">
        <div className="box lg:p-10 p-1 lg:w-1/2 w-4/5 h-3/4 flex flex-col items-center justify-center gap-y-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <h1 className="title text-center text-white lg:text-3xl md:text-2xl text-xl">Sign In</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-y-3 self-center w-3/4">
            <div className="flex flex-col gap-y-8">
              <input id="email" name="email" type="email" className="h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs" placeholder="Email" value={users.email} onChange={handleOnChange} required />
              <div className="relative">
                <input id="password" name="password" type={showPassword === false ? "password" : "text"} placeholder="Password" className="w-full h-11 rounded-xl p-2 outline-none border-none lg:text-sm md:text-sm text-xs" value={users.password} onChange={handleOnChange} required />
                <div className="text-2xl top-3 right-5 absolute ">{showPassword === false ? <AiOutlineEye onClick={toggleShowPassword} /> : <AiOutlineEyeInvisible onClick={toggleShowPassword} />}</div>
              </div>
            </div>
            <a href="/#" className="self-end text-white lg:text-sm text-xs">
              Forgot Password?
            </a>
            <button id="loginBtn" className="buttonLogin text-white h-11 font-bold lg:text-xl text-sm">
              Continue
            </button>
            <div className="flex justify-center mt-10 text-xs">
              <p className="text-white">Don't have an Account?</p>
              <Link to="/register" className="text-secondary-orange font-bold ml-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
