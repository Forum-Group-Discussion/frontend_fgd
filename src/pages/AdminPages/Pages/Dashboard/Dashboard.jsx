
import ThreadStatistic from "../../Components/ThreadStatistic"
import TotalUser from "../../Components/TotalUser"
import OnlineUser from "../../Components/OnlineUser";
import "../Pages.css";
import OnlineDiscusion from "../../Components/OnlineDiscusion";
import NoticeBoard from "../../Components/NoticeBoard";
import TodayTrending from "../../Components/TodayTrending";
import TotalReport from "../../Components/TotalReport";


export default function Dashboard() {
  return (
    <div className="bg-primary-black h-content">
      <div className="container mx-auto px-20">
        <Sidebar />
      <div>
        <div className="menu-content bg-primary-grey text-white p-7 h-content">

          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4"><TotalUser/></div>
          <div className="mb-4"><OnlineUser/></div>
          <div className="mb-4"><OnlineDiscusion/></div>
          </div>
          <div className="flex flex-row">
          <div className="flex flex-col w-[705px]">
            <div className="w-[925px] mb-4"><ThreadStatistic/></div>
            <div className="flex flex-row ">
              <div><TodayTrending/></div>
              <div className="ml-3"><TotalReport/></div>
            </div>
          </div>
          <div><NoticeBoard/></div>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  );
}
