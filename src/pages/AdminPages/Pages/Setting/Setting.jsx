import Sidebar from "../../Components/Sidebar";
import joko from "../../../../assets/img/Admin/JOK.png"
import "../Pages.css";
import UploadPhoto from "../../../UserPages/components/UploadPhoto";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../../../networks/api";
import { useState, useEffect, useCallback } from "react";
import { getUserId } from "../../../../utils/helpers";

export default function Setting() {
  const [upload, setUpload] = useState(false)
  const [adminProfileAPI, setAdminProfileAPI] = useState([])
  const navigate = useNavigate()
  
  const fetchData = useCallback(() => {
    const response = axiosInstance
    .get("v1/user/" + getUserId())
    .then((response) => {
      setAdminProfileAPI(response.data.data)
        })
        .catch((error) => {
            console.log(error.response);
        });
    return response;
}, [adminProfileAPI]);


useEffect(() => {
  fetchData();
}, [fetchData]);

const [account, setAccount] = useState({name: "", username: ""})

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  
  if (name === "name") {
    setAccount({ ...account, name: value });
  } 
  else if (name === "username") {
    setAccount({ ...account, username: value });
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axiosInstance.put("v1/user/update/" + adminProfileAPI.id, account)
            .then((response) => {
              console.log("updated", response.data.data)
              Swal.fire({
                toast: true,
                icon: "success",
                title: "Successfully Edited",
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
                setAdminProfileAPI(account)
                navigate("/admin/home")
            })
            .catch((error) => {
                console.log(error)
            })
  }

  return (
    <div id="setting" className="bg-primary-black h-content w-screen">
      <div className="container mx-auto xl:px-20 lg:px-15">
        <Sidebar/>
        <div>
          <div className="menu-content bg-primary-grey text-white p-3 sm:p-7 max-h-[85vh] overflow-auto no-scrollbar w-[90%] lg:w-[70%] xl:w-[80%] mx-auto lg:mx-0 lg:ml-[280px]">
            <div className="border-2 border-gray-500/10 rounded-lg p-5 relative">
              <div id="setting-title" className="text-md font-semibold md:text-lg">
                <div>Account</div>
              </div>
              <div id="setting-content" className="px-8 flex flex-col">
                  <div id="setting-img" className="py-5 place-self-center">
                    <img src={joko} className="rounded-full w-[100px]" alt="img-user"/>
                    <button onClick={()=>{setUpload(true)}} className="text-sm sm:text:xl my-5 text-white/50 text-center">Upload Photo</button>
                  </div>
                  <div className="place-self-center">
                    <form onSubmit={handleSubmit}>
                      <button type="submit" className="text-secondary-yellow bg-none absolute top-8 right-8">Edit</button>
                      <div id="setting-fullname" className="py-3">
                        <div className="text-xs pb-2 text-white/50">Full name</div>
                        <input type="text" onChange={handleChange} value={account.name} name="name" className="bg-primary-black rounded-md 2xl:w-[750px] xl:w-[500px] lg:w-[500px] md:w-[350px] p-2 text-sm"></input>
                      </div>
                      <div id="setting-username" className="py-3">
                        <div className="text-xs pb-2 text-white/50">username</div>
                        <input type="text" onChange={handleChange} value={account.username} name="username" className="bg-primary-black rounded-md 2xl:w-[750px] xl:w-[500px] lg:w-[500px] md:w-[350px] p-2 text-sm"></input>
                      </div>
                      <div id="setting-email" className="py-3">
                        <div className="text-xs pb-2 text-white/50">Email</div>
                        <input type="email" name="email" disabled={true} value={adminProfileAPI.email} className="text-white text-opacity-50 bg-primary-black rounded-md 2xl:w-[750px] xl:w-[500px] lg:w-[500px] md:w-[350px] p-2 text-sm"></input>
                      </div>
                      <div id="setting-password" className="py-3">
                        <div className="text-xs pb-2 text-white/50">Password</div>
                        <input type="password" name="password" disabled={true} value={adminProfileAPI.password} className="text-white text-opacity-50 bg-primary-black rounded-md 2xl:w-[750px] xl:w-[500px] lg:w-[500px] md:w-[350px] p-2 text-sm"></input>
                      </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {upload && <UploadPhoto onCancel={()=>{setUpload(false)}}/>}
    </div>
  );
}
