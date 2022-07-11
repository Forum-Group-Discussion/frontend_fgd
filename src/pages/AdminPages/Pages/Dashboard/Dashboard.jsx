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
    <div id="homepage" className="bg-primary-black h-screen w-screen">
      <div className="container mx-auto xl:px-20 lg:px-15">
        <Sidebar/>
        <div id="home-menu" className="menu-content bg-primary-grey text-white p-3 sm:p-7 max-h-[85vh] overflow-auto no-scrollbar w-[90%] lg:w-[70%] xl:w-[80%] mx-auto lg:mx-0 lg:ml-[280px]">
          <div className="grid grid-cols-4 sm:grid-cols-3 gap-3">
            <div id="part1-box" className="mb-3 col-span-2 sm:col-span-1">
              <TotalUser />
            </div>
            <div id="part2-box" className="mb-3 col-span-2 sm:col-span-1">
              <OnlineUser />
            </div>
            <div id="part3-box" className="mb-3 col-span-2 sm:col-span-1">
              <OnlineDiscusion />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-3 md:col-span-2">
              <div id="graphic-box" className="w-full mb-3 ">
                <ThreadStatistic />
              </div>
              <div className="grid grid-cols-2 gap-2 justify-between">
                <div id="trending-box" className="col-span-2 sm:col-span-1">
                  <TodayTrending />
                </div>
                <div id="sum-report-box" className="col-span-2 sm:col-span-1">
                  <TotalReport />
                </div>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <NoticeBoard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
