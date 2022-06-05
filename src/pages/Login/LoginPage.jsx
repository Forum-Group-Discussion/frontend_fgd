import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./LoginPage.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Swal from "sweetalert2";
import { setUserSession } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

function LoginPage() {
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
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://34.125.26.208/v1/auth/login", { email: users.email, password: users.password })
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login is successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setUserSession(response.data.data.token, users.email);
        navigate("/admin/home");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: error,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Username or Password is Wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

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
            <a className="self-end text-white lg:text-sm text-xs">Forgot Password?</a>
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
