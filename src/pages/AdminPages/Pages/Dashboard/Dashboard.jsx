import Sidebar from "../../Components/Sidebar";
import Graphic from "../../Components/Graphic";
import "../Pages.css";

export default function Dashboard() {
  return (
    <div className="bg-primary-black h-max">
      <Sidebar />
      <div>
        <div className="menu-content bg-primary-grey text-white p-5 h-[540px]">
          <p>Dashboard</p>
          <Graphic />
        </div>
      </div>
    </div>
  );
}
