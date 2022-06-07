import { Link } from "react-router-dom"
import Logo  from "../../../assets/img/logo.png"
import { RiLogoutCircleLine, RiDashboard3Line, RiUser3Line, RiSettings3Line, RiListSettingsLine, } from "react-icons/ri";
import HomeAdminPage from "./NavbarAdmin"
import { useNavigate } from "react-router-dom";
import { removeUserSession } from "../../../utils/helpers";
import Swal from "sweetalert2";
import "./style.css"


export default function Sidebar() {
    const navigate = useNavigate();
    

    // handle click event of logout button
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure to Logout?",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      background: "#151921",
      color: "#fff",
      confirmButtonColor: "#FF3D00",
      cancelButtonColor: "#D91E11",
      confirmButtonText: "Yes, Logout!",
      focusConfirm: false,
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        removeUserSession();
        navigate("/");
        window.location.reload();
      }
    });
  };

    return(

       <div>
           <HomeAdminPage/>
            <div className="h-screen bg-primary-grey fixed top-0 flex-row w-[250px] ">
            <div className="flex-col ">
            <div className="p-5">
            <img src={Logo} className="sm:h-[50px] ml-5" alt="logo found" />
            </div>
            <div className="flex flex-col ">
                <ul className="min-w-full mt-20 text-white ">
                    <li className="p-3" >
                        <Link to="/dashboard ">
                        <div className="side-menu flex flex-row items-center ">
                        <RiDashboard3Line size={20} className="mr-4"/>
                        Dashboard
                        </div>
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link to="/KelolaUser" className="">
                        <div className="side-menu flex flex-row items-center">
                        <RiUser3Line size={20} className="mr-4"/>
                        Kelola User
                        </div>
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link to="/KelolaThread">
                        <div className="side-menu flex flex-row items-center">
                        <RiListSettingsLine size={20} className="mr-4"/>
                        Kelola Thread
                        </div>
                        </Link>
                    </li>
                    
                    <li className="p-3">
                        <Link to="/Setting">
                        <div className="side-menu flex flex-row items-center">
                        <RiSettings3Line size={20} className="mr-4"/>
                        Setting
                        </div> 
                        </Link>
                    </li>
                    
                    <li className="p-3 mt-40 ">
                    <div className="side-menu flex flex-row items-center">
                    <RiLogoutCircleLine size={20} className="mr-4"/>
                    <input type="submit" onClick={handleLogout} value="Logout" />
                    </div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
       </div>
    )
}