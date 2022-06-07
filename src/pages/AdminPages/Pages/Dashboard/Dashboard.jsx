import Sidebar from "../../Components/Sidebar";
import "../Pages.css"

export default function Dashboard () {
    return (
        <div className="bg-primary-black h-screen">
            <Sidebar/>
           <div >
                <div className="menu-content bg-primary-grey text-white p-5 h-[540px]">
                    <p>Dashboard</p>
                </div>
           </div>
        </div>
    )
}