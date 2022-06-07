import Sidebar from "../../Components/Sidebar";
import "../Pages.css"

export default function KelolaUSer() {
    return (
        <div className="bg-primary-black h-screen">
            <Sidebar/>
           <div >
                <div className="menu-content text-white">
                    <p>Kelola User</p>
                </div>
           </div>
        </div>
    )
}