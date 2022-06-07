import Sidebar from "../../Components/Sidebar";
import "../Pages.css"

export default function Setting () {
    return (
        <div className="bg-primary-black h-screen">
            <Sidebar/>
           <div >
                <div className="menu-content text-white">
                    <p>Setting</p>
                </div>
           </div>
        </div>
    )
}