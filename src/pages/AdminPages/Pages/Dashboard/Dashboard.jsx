import ThreadStatistic from "../../Components/ThreadStatistic";
import TotalUser from "../../Components/TotalUser";
import OnlineUser from "../../Components/OnlineUser";
import "../Pages.css";
import OnlineDiscusion from "../../Components/OnlineDiscusion";
import NoticeBoard from "../../Components/NoticeBoard";
import TodayTrending from "../../Components/TodayTrending";
import TotalReport from "../../Components/TotalReport";
import Sidebar from "../../Components/Sidebar";

export default function Dashboard() {
  return (
    <div className="bg-primary-black h-content w-screen">
      <div className="container mx-auto xl:px-20 lg:px-15">
        <Sidebar/>
          <div className="menu-content bg-primary-grey text-white p-7 h-content">
            <div className="grid grid-cols-3 gap-3">
              <div className="mb-3">
                <TotalUser />
              </div>
              <div className="mb-3">
                <OnlineUser />
              </div>
              <div className="mb-3">
                <OnlineDiscusion />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col w-2/3">
                <div className="w-full mb-3 ">
                  <ThreadStatistic />
                </div>
                <div className="flex flex-row  justify-between">
                  <div className="w-full mr-3">
                    <TodayTrending />
                  </div>
                  <div className="w-full">
                    <TotalReport />
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-1/3 ml-3">
                <NoticeBoard />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
